import { unstable_cache } from "next/cache";
import { graphql } from "../generated";
import { urqlClient } from "../lib/urql-client";

export const query = graphql(`query GetDynamicImoveis($offset: Int, $size: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String, $destaque: String) {
  imoveis(
    where: {offsetPagination: {offset: $offset, size: $size}, metaQuery: {relation: AND, metaArray: [{key: "preco", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "preco", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "quartos", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "status_imovel", value: $status, compare: EQUAL_TO}, {key: "cidade", value: $cidade, compare: EQUAL_TO}, {key: "bairro", value: $bairro, compare: EQUAL_TO}, {key: "tipo_imovel", value: $tipoImovel, compare: EQUAL_TO}, {key: "tipo_negocio", value: $tipoNegocio, compare: EQUAL_TO}, {key: "destaque", value: $destaque, compare: EQUAL_TO}]}}
  ) {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      acfImoveis {
        areaConstruida
        vagasGaragem
        referenciaImovel
        preco
        quartos
        statusImovel
        bairro
        cidade
        condominio
        caracteristicas
        tipoImovel
        tipoNegocio
        destaque
        banheiros
        areaTotal
      }
    }
    pageInfo {
      offsetPagination {
        total
        hasMore
      }
    }
  }
}`);

type ImoveisFilters = {
  offset?: number;
  size?: number;
  precoMin?: string;
  precoMax?: string;
  quartosMin?: string;
  status?: string;
  cidade?: string;
  bairro?: string;
  tipoImovel?: string;
  tipoNegocio?: string;
  destaque?: string;
};

async function fetchDynamicImoveis(filters: ImoveisFilters) {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== undefined && value !== "")
  );

  const { data } = await urqlClient.query(query, {
    size: 6,
    offset: 0,
    ...cleanFilters,
  }).toPromise();

  if (!data) {
    throw new Error("Página não encontrada");
  }

  return data;
}

export async function getDynamicImoveis(filters: ImoveisFilters = {}) {
  const cacheKey = JSON.stringify(filters);

  const cached = unstable_cache(
    () => fetchDynamicImoveis(filters),
    ["imoveis", cacheKey],
    { tags: ["imovel"], revalidate: 3600 }
  );

  return cached();
}

export type OrdemImoveis = "preco_asc" | "preco_desc";

const PAGE_SIZE_CMS = 100;

// O WPGraphQL não ordena por campos do ACF, então buscamos todos os imóveis
// que passam nos filtros, ordenamos pelo preço e paginamos aqui.
export async function getImoveisOrdenados(
  filters: ImoveisFilters,
  ordem: OrdemImoveis
) {
  const { offset = 0, size = 6, ...rest } = filters;

  const primeiraPagina = await getDynamicImoveis({ ...rest, offset: 0, size: PAGE_SIZE_CMS });
  const nodes = [...(primeiraPagina.imoveis?.nodes ?? [])];
  const total = primeiraPagina.imoveis?.pageInfo?.offsetPagination?.total ?? nodes.length;

  for (let next = PAGE_SIZE_CMS; next < total; next += PAGE_SIZE_CMS) {
    const pagina = await getDynamicImoveis({ ...rest, offset: next, size: PAGE_SIZE_CMS });
    nodes.push(...(pagina.imoveis?.nodes ?? []));
  }

  const direcao = ordem === "preco_asc" ? 1 : -1;
  nodes.sort((a, b) => {
    const precoA = Number(a.acfImoveis?.preco) || 0;
    const precoB = Number(b.acfImoveis?.preco) || 0;
    if (!precoA || !precoB) return precoA ? -1 : precoB ? 1 : 0;
    return (precoA - precoB) * direcao;
  });

  return {
    ...primeiraPagina,
    imoveis: primeiraPagina.imoveis && {
      ...primeiraPagina.imoveis,
      nodes: nodes.slice(offset, offset + size),
      pageInfo: {
        ...primeiraPagina.imoveis.pageInfo,
        offsetPagination: {
          ...primeiraPagina.imoveis.pageInfo?.offsetPagination,
          total,
          hasMore: offset + size < total,
        },
      },
    },
  };
}

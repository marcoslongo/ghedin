import { graphql } from "../generated";
import { urqlClient } from "../lib/urql-client";

export const query = graphql(`query GetDynamicImoveis($first: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String) {
  imoveis(
    first: $first
    where: {metaQuery: {relation: AND, metaArray: [{key: "preco", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "preco", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "quartos", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: "status_imovel", value: $status, compare: EQUAL_TO}, {key: "cidade", value: $cidade, compare: EQUAL_TO}, {key: "bairro", value: $bairro, compare: EQUAL_TO}, {key: "tipo_imovel", value: $tipoImovel, compare: EQUAL_TO}, {key: "tipo_negocio", value: $tipoNegocio, compare: EQUAL_TO}]}}
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
  }
}`);

type ImoveisFilters = {
  first?: number;
  precoMin?: string;
  precoMax?: string;
  quartosMin?: string;
  status?: string;
  cidade?: string;
  bairro?: string;
  tipoImovel?: string;
  tipoNegocio?: string;
};

export async function getDynamicImoveis(filters: ImoveisFilters = {}) {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value && value !== '')
  );

  const { data } = await urqlClient.query(query, {
    first: 12,
    ...cleanFilters
  }).toPromise();

  if (!data) {
    throw new Error("Página não encontrada");
  }

  return data;
}
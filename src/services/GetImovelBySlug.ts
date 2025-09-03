import { graphql } from "../generated";
import { urqlClient } from "../lib/urql-client";

export const query = graphql(`query GetImovelBySlug($slug: String!) {
  imovelBy(slug: $slug) {
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
      areaTotal
      bairro
      banheiros
      caracteristicas
      cep
      cidade
      condominio
      destaque
      endereco
      iptu
      preco
      quartos
      statusImovel
      suites
      tipoImovel
      tipoNegocio
      vagasGaragem
      videoYoutube
    }
  }
}`);

export async function getImovelBySlug(slug: string) {
  const { data } = await urqlClient.query(query, { slug }).toPromise();

  if (!data) {
    throw new Error("Página não encontrada");
  }

  return data;
}
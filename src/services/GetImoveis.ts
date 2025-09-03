import { graphql } from "../generated";
import { urqlClient } from "../lib/urql-client";

export const query = graphql(`query GetImoveis($first: Int = 10) {
  imoveis(first: $first) {
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
  }
}`);

export async function getImoveis() {
  const { data } = await urqlClient.query(query, {}).toPromise();

  if (!data) {
    throw new Error("Página não encontrada");
  }

  return data;
}
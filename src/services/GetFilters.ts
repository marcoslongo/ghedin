import { graphql } from "../generated";
import { urqlClient } from "../lib/urql-client";

export const query = graphql(`query GetFilters {
  cidadeImovels {
    edges {
      node {
        id
        name
      }
    }
  }
}`);

export async function getFilters() {
  const { data } = await urqlClient.query(query, {}).toPromise();

  if (!data) {
    throw new Error("Página não encontrada");
  }

  return data;
}
import { unstable_cache } from "next/cache";
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

export const getFilters = unstable_cache(
  async () => {
    const { data } = await urqlClient.query(query, {}).toPromise();

    if (!data) {
      throw new Error("Página não encontrada");
    }

    return data;
  },
  ["filters"],
  { tags: ["filters", "imovel"], revalidate: 3600 }
);

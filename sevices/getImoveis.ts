import { useGetImoveisQuery } from "../generated/graphql";

export function getImoveis() {
  const [{ data, fetching, error }] = useGetImoveisQuery();

  return {
    imoveis: data?.imoveis?.nodes ?? [],
    loading: fetching,
    error,
  };
}

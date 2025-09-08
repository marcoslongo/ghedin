import { FiltrosImoveis } from "@/src/components/filtros-imoveis";
import { ImovelCard } from "@/src/components/imovel-card";
import { getDynamicImoveis } from "@/src/services/GetDynamicImoveis";
import { getFilters } from "@/src/services/GetFilters";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function ImoveisPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filters = {
    precoMin: searchParams.precoMin as string,
    precoMax: searchParams.precoMax as string,
    quartosMin: searchParams.quartosMin as string,
    status: searchParams.status as string,
    cidade: searchParams.cidade as string,
    bairro: searchParams.bairro as string,
    tipoImovel: searchParams.tipoImovel as string,
    tipoNegocio: searchParams.tipoNegocio as string,
  };

  const data = await getDynamicImoveis(filters);
  const filterOptions = await getFilters();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Todos os Imóveis</h1>
            <p className="text-lg text-muted-foreground">
              Encontre o imóvel perfeito para você. Use os filtros para refinar sua busca.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/4">
              <FiltrosImoveis
                filtro={filterOptions}
                currentFilters={filters}
              />
            </div>

            {data.imoveis?.nodes && data.imoveis.nodes.length > 0 ? (
              <div className="w-full pl-4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {data.imoveis.nodes.map((imovel) => (
                  <ImovelCard
                    key={imovel.id}
                    imovel={{
                      id: imovel.id,
                      title: imovel.title ?? "",
                      slug: imovel.slug ?? "",
                      featuredImage: imovel.featuredImage,
                      acfImoveis: imovel.acfImoveis ?? {},
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full pl-4 lg:w-3/4">
                <p className="text-center">
                  Não encontramos imóveis com os parâmetros filtrados
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
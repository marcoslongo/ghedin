import { FiltrosImoveis } from "@/src/components/filtros-imoveis";
import { ImovelCard } from "@/src/components/imovel-card";
import { PaginacaoImoveis } from "@/src/components/layout/imoveis/PaginacaoImoveis";
import { getDynamicImoveis } from "@/src/services/GetDynamicImoveis";
import { getFilters } from "@/src/services/GetFilters";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

const ITEMS_PER_PAGE = 9;

export default async function ImoveisPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const currentPage = Number(searchParams.page) || 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const filters = {
    offset,
    size: ITEMS_PER_PAGE,
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

  const totalItems = data.imoveis?.pageInfo?.offsetPagination?.total || 0;

  const searchParamsForPagination = Object.fromEntries(
    Object.entries(searchParams)
      .filter(([key]) => key !== "page")
      .map(([key, value]) => [key, String(value)])
  );

  const activeFiltersCount = [
    searchParams.tipoNegocio,
    searchParams.tipoImovel,
    searchParams.cidade,
    searchParams.quartosMin,
    searchParams.precoMin,
    searchParams.precoMax,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <div className="bg-[#483B35] pt-28 pb-12">
        <div className="container mx-auto px-6">
          <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Portfólio
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl text-white mb-2">
            Todos os Imóveis
          </h1>
          <p className="text-white/60 text-sm">
            {totalItems > 0
              ? `${totalItems} imóvel${totalItems !== 1 ? "s" : ""} encontrado${totalItems !== 1 ? "s" : ""}${activeFiltersCount > 0 ? ` com ${activeFiltersCount} filtro${activeFiltersCount > 1 ? "s" : ""}` : ""}`
              : "Nenhum imóvel encontrado com os filtros selecionados"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <FiltrosImoveis
                filtro={filterOptions}
                currentFilters={{
                  precoMin: searchParams.precoMin as string,
                  precoMax: searchParams.precoMax as string,
                  quartosMin: searchParams.quartosMin as string,
                  status: searchParams.status as string,
                  cidade: searchParams.cidade as string,
                  bairro: searchParams.bairro as string,
                  tipoImovel: searchParams.tipoImovel as string,
                  tipoNegocio: searchParams.tipoNegocio as string,
                }}
              />
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            {data.imoveis?.nodes && data.imoveis.nodes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
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

                <PaginacaoImoveis
                  currentPage={currentPage}
                  totalItems={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  searchParams={searchParamsForPagination}
                />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-[#9A8167]/15 flex items-center justify-center mb-6">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-playfair text-xl text-[#483B35] mb-2">
                  Nenhum imóvel encontrado
                </h3>
                <p className="text-[#483B35]/55 text-sm max-w-xs">
                  Tente ajustar os filtros para encontrar mais opções disponíveis.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

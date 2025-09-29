import { Avaliation } from "../components/layout/home/Avaliation";
import { Banner } from "../components/layout/home/Banner"
import { Highlights } from "../components/layout/home/Highlights";
import { News } from "../components/layout/home/News";
import { getDynamicImoveis } from "../services/GetDynamicImoveis";
import { getFilters } from "../services/GetFilters";

type SearchParams = {
  precoMin?: string;
  precoMax?: string;
  quartosMin?: string;
  status?: string;
  cidade?: string;
  bairro?: string;
  tipoImovel?: string;
  tipoNegocio?: string;
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filters = {
    precoMin: searchParams.precoMin,
    precoMax: searchParams.precoMax,
    quartosMin: searchParams.quartosMin,
    status: searchParams.status,
    cidade: searchParams.cidade,
    bairro: searchParams.bairro,
    tipoImovel: searchParams.tipoImovel,
    tipoNegocio: searchParams.tipoNegocio,
  };

  // Buscar dados necessários
  const filterOptions = await getFilters();
  const imoveisDestaque = await getDynamicImoveis({ first: 10 });
  const lancamentos = await getDynamicImoveis({ first: 6 });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Banner filtro={filterOptions} />
        <News content={lancamentos} />
        <Avaliation />
        <Highlights content={imoveisDestaque} />
      </main>
    </div>
  )
}
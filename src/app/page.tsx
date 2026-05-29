import { Avaliation } from "../components/layout/home/Avaliation";
import { Banner } from "../components/layout/home/Banner"
import { Highlights } from "../components/layout/home/Highlights";
import { News } from "../components/layout/home/News";
// import { Stats } from "../components/layout/home/Stats";
// import { Testimonials } from "../components/layout/home/Testimonials";
import { CtaSection } from "../components/layout/home/CtaSection";
import { getDynamicImoveis } from "../services/GetDynamicImoveis";
import { getFilters } from "../services/GetFilters";

export default async function HomePage() {
  const filterOptions = await getFilters();
  const imoveisDestaque = await getDynamicImoveis({ first: 10 });
  const lancamentos = await getDynamicImoveis({ first: 9 });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Banner filtro={filterOptions} />
        {/* <Stats /> */}
        <News content={lancamentos} />
        <Avaliation />
        <Highlights content={imoveisDestaque} />
        {/* <Testimonials /> */}
        <CtaSection />
      </main>
    </div>
  )
}

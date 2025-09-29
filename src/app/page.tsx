
import { Banner } from "../components/layout/home/Banner"
import { Highlights } from "../components/layout/home/Highlights";
import { News } from "../components/layout/home/News";
import { getDynamicImoveis } from "../services/GetDynamicImoveis";

export default async function HomePage() {
  const imoveisDestaque = await getDynamicImoveis({ first: 10 });
  const lancamentos = await getDynamicImoveis({ first: 6 });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Banner />
        <News content={lancamentos} />
        <Highlights content={imoveisDestaque} />
      </main>
    </div>
  )
}

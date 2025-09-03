
import { Banner } from "../components/layout/home/Banner"
import { Imoveis } from "../components/layout/home/Imoveis";
import { getImoveis } from "../services/GetImoveis";

export default async function HomePage() {
  const imoveisDestaque = await getImoveis();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Banner/>
        <Imoveis content={imoveisDestaque}/>
      </main>
    </div>
  )
}

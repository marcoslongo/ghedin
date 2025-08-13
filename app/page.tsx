import { getImoveis } from "@/lib/wordpress"
import { ImovelCard } from "@/components/imovel-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default async function HomePage() {
  const imoveisDestaque = await getImoveis(6)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-r text-white py-48 relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#483b35]">Encontre o Imóvel <br /> dos <span className="text-[#9a8167]">Seus Sonhos</span></h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/imoveis">
                <Button size="lg" variant="default" className="text-lg px-8 cursor-pointer bg-[#483b35] hover:bg-[#9a8167]" tabIndex={-1}>
                  Ver Todos os Imóveis
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="default"
                  className="text-lg px-8 cursor-pointer bg-[#483b35] hover:bg-[#9a8167]"
                >
                  Falar com Corretor
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={"/assets/images/bg-banner.webp"}
            alt=""
            fill
            className="object-cover"
          />
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#483b35]">Imóveis em Destaque</h2>
              <p className="text-xl text-[#9a8167] max-w-2xl mx-auto">
                Selecionamos os melhores imóveis para você. Confira nossas oportunidades exclusivas.
              </p>
            </div>

            {imoveisDestaque.imoveis.nodes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {imoveisDestaque.imoveis.nodes.map((imovel) => (
                    <ImovelCard key={imovel.id} imovel={imovel} />
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/imoveis">
                    <Button size="lg" className="text-lg px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer" tabIndex={-1}>
                      Ver Todos os Imóveis
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum imóvel encontrado. Verifique a conexão com o WordPress.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

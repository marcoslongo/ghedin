import { ImovelCard } from "@/src/components/imovel-card"
import { getImoveis } from "@/src/services/GetImoveis"

export default async function ImoveisPage() {
  const content = await getImoveis();
  const nodes = content.imoveis?.nodes ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Todos os Imóveis</h1>
            <p className="text-lg text-muted-foreground">
              Encontre o imóvel perfeito para você. Use os filtros para refinar sua busca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {nodes.map((imovel) => (
              <ImovelCard
                key={imovel.id}
                imovel={{
                  id: imovel.id,
                  title: imovel.title ?? "",
                  slug: imovel.slug ?? "",
                  featuredImage: imovel.featuredImage ?? null,
                  acfImoveis: imovel.acfImoveis ?? {},
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

import { ImovelCard } from "@/src/components/imovel-card";
import { Button } from "@/src/components/ui/button";
import { GetImoveisQuery } from "@/src/generated/graphql";
import Link from "next/link";

interface ImoveisProps {
  content: GetImoveisQuery;
}

export function Imoveis({ content }: ImoveisProps) {
  const nodes = content.imoveis?.nodes ?? [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#483b35]">
            Imóveis em Destaque
          </h2>
          <p className="text-xl text-[#9a8167] max-w-2xl mx-auto">
            Selecionamos os melhores imóveis para você. Confira nossas
            oportunidades exclusivas.
          </p>
        </div>

        {nodes.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {nodes.map((imovel) => (
                <ImovelCard
                  key={imovel.id}
                  imovel={{
                    ...imovel,
                    title: imovel.title ?? "",
                    slug: imovel.slug ?? "",
                  }}
                />
              ))}
            </div>
            <div className="text-center">
              <Link href="/imoveis">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer"
                  tabIndex={-1}
                >
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
  );
}

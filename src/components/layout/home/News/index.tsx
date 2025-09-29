"use client";

import { ImovelCard } from "@/src/components/imovel-card";
import { Button } from "@/src/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";
import { GetDynamicImoveisQuery } from "@/src/generated/graphql";
import Link from "next/link";


interface NewsProps {
  content: GetDynamicImoveisQuery;
}

export function News({ content }: NewsProps) {
  const nodes = content.imoveis?.nodes ?? [];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#483b35]">
            Lançamentos
          </h2>
          <p className="text-xl text-[#9a8167] max-w-2xl mx-auto">
            Confira os últimos lançamentos
          </p>
        </div>

        {nodes.length > 0 ? (
          <>
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent>
                {nodes.map((imovel) => (
                  <CarouselItem
                    key={imovel.id}
                    className="basis-full md:basis-1/3 px-2"
                  >
                    <ImovelCard
                      imovel={{
                        ...imovel,
                        title: imovel.title ?? "",
                        slug: imovel.slug ?? "",
                      }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-[-40px] cursor-pointer" />
              <CarouselNext className="right-[-40px] cursor-pointer" />
            </Carousel>

            <div className="text-center mt-8">
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

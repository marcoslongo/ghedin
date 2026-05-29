"use client";

import { ImovelCard } from "@/src/components/imovel-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { GetDynamicImoveisQuery } from "@/src/generated/graphql";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface NewsProps {
  content: GetDynamicImoveisQuery;
}

export function News({ content }: NewsProps) {
  const nodes = content.imoveis?.nodes ?? [];

  if (nodes.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
              Novidades
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#483B35]">
              Últimos Lançamentos
            </h2>
          </div>
          <Link
            href="/imoveis"
            className="mt-4 md:mt-0 flex items-center gap-2 text-[#9A8167] hover:text-[#483B35] text-sm font-medium transition-colors group"
          >
            Ver todos os imóveis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="relative px-8">
          <Carousel
            opts={{ align: "start", loop: true, slidesToScroll: 1 }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {nodes.map((imovel, index) => (
                <CarouselItem
                  key={imovel.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <ImovelCard
                      imovel={{
                        ...imovel,
                        title: imovel.title ?? "",
                        slug: imovel.slug ?? "",
                      }}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-[#483B35]/20 hover:bg-[#483B35] hover:text-white hover:border-[#483B35] transition-all" />
            <CarouselNext className="right-0 border-[#483B35]/20 hover:bg-[#483B35] hover:text-white hover:border-[#483B35] transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

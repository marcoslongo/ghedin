"use client"

import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Car, Maximize } from "lucide-react";
import { formatPrice } from "../utils/formatPrice";
import { FavoritoButton } from "./button-favorito";
import { GetDynamicImoveisQuery } from "../generated/graphql";

interface ImovelCardProps {
  imovel: NonNullable<GetDynamicImoveisQuery["imoveis"]>["nodes"][number];
}

export function ImovelCard({ imovel }: ImovelCardProps) {
  const acf = imovel.acfImoveis!;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#9A8167]/10">
      <FavoritoButton
        imovel={{
          id: imovel.id!,
          title: imovel.title!,
          slug: imovel.slug!,
          featuredImage: imovel.featuredImage,
        }}
      />

      <Link href={`/imoveis/${imovel.slug}`} title={imovel.title!}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {imovel.featuredImage?.node ? (
            <Image
              src={imovel.featuredImage.node.sourceUrl || "/placeholder.svg"}
              alt={imovel.featuredImage.node.altText || imovel.title || ""}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#F0EAE2] flex items-center justify-center">
              <span className="text-[#9A8167]/60 text-sm">Sem imagem</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 flex gap-1.5">
            {acf?.destaque && (
              <span className="px-2.5 py-1 bg-[#9A8167] text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                Destaque
              </span>
            )}
            {acf?.tipoNegocio && (
              <span className="px-2.5 py-1 bg-white/90 text-[#483B35] text-[10px] font-semibold uppercase tracking-wider rounded-full">
                {acf.tipoNegocio}
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <p className="text-white/80 text-[10px] uppercase tracking-wider font-medium">
                {acf?.tipoImovel}
              </p>
              <p className="text-white font-bold text-lg leading-tight">
                {formatPrice(acf?.preco!)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-[#483B35] text-base mb-2 line-clamp-1 group-hover:text-[#9A8167] transition-colors">
            {imovel.title}
          </h3>

          <div className="flex items-center gap-1.5 mb-4">
            <MapPin className="h-3.5 w-3.5 text-[#9A8167] flex-shrink-0" />
            <span className="text-[#483B35]/60 text-xs truncate">
              {acf?.bairro}{acf?.bairro && acf?.cidade ? ", " : ""}{acf?.cidade}
            </span>
          </div>

          {(acf?.quartos! > 0 || acf?.banheiros! > 0 || acf?.vagasGaragem! > 0 || acf?.areaTotal! > 0) && (
            <div className="flex items-center gap-4 pt-4 border-t border-[#F0EAE2]">
              {acf?.quartos! > 0 && (
                <div className="flex items-center gap-1.5 text-[#483B35]/60">
                  <Bed className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{acf?.quartos}</span>
                </div>
              )}
              {acf?.banheiros! > 0 && (
                <div className="flex items-center gap-1.5 text-[#483B35]/60">
                  <Bath className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{acf?.banheiros}</span>
                </div>
              )}
              {acf?.vagasGaragem! > 0 && (
                <div className="flex items-center gap-1.5 text-[#483B35]/60">
                  <Car className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{acf?.vagasGaragem}</span>
                </div>
              )}
              {acf?.areaTotal! > 0 && (
                <div className="flex items-center gap-1.5 text-[#483B35]/60">
                  <Maximize className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{acf?.areaTotal}m²</span>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

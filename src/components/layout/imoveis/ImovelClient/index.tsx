"use client";
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize,
  Heart,
  Phone,
} from "lucide-react";
import GalleryContent from "@/src/components/layout/imoveis/GaleriaContent";
import { formatPrice } from "@/src/utils/formatPrice";
import { useFavorites } from "@/src/context/FavoritesContext";
import { motion } from "framer-motion";

export default function ImovelClient({ imovel }: { imovel: any }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const { acfImoveis: acf } = imovel;
  const galery = acf?.galeriaFotos;
  const favorited = isFavorite(imovel.id);

  const arrayToString = (value: any) =>
    Array.isArray(value) ? value.join(", ") : value || "";

  const specs = [
    { icon: Bed, label: "Quartos", value: acf?.quartos, suffix: acf?.quartos > 1 ? "quartos" : "quarto" },
    { icon: Bath, label: "Banheiros", value: acf?.banheiros, suffix: acf?.banheiros > 1 ? "banheiros" : "banheiro" },
    { icon: Car, label: "Garagem", value: acf?.vagasGaragem, suffix: acf?.vagasGaragem > 1 ? "vagas" : "vaga" },
    { icon: Maximize, label: "Área Total", value: acf?.areaTotal, suffix: "m²" },
    { icon: Maximize, label: "Área Construída", value: acf?.areaConstruida, suffix: "m²" },
    { icon: Maximize, label: "Testada", value: acf?.testada, suffix: "m" },
  ].filter((s) => s.value && s.value > 0);

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <div className="bg-[#483B35] pt-28 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-start gap-3">
            {acf?.destaque && (
              <span className="px-3 py-1 bg-[#9A8167] text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                Destaque
              </span>
            )}
            {acf?.tipoNegocio && (
              <span className="px-3 py-1 bg-white/15 text-white text-xs font-medium uppercase tracking-wider rounded-full">
                {arrayToString(acf.tipoNegocio)}
              </span>
            )}
            {acf?.tipoImovel && (
              <span className="px-3 py-1 bg-white/10 text-white/80 text-xs uppercase tracking-wider rounded-full">
                {arrayToString(acf.tipoImovel)}
              </span>
            )}
          </div>
          <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white mt-4 mb-2">
            {imovel.title}
          </h1>
          {(acf?.bairro || acf?.cidade) && (
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="h-4 w-4 text-[#9A8167]" />
              <span>
                {acf?.bairro}{acf?.bairro && acf?.cidade ? ", " : ""}{acf?.cidade}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-sm"
            >
              <GalleryContent images={galery?.nodes || []} />
            </motion.div>

            {specs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#9A8167]/10"
              >
                <h2 className="font-playfair text-xl text-[#483B35] mb-5">
                  Características
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center gap-3 bg-[#F8F6F3] rounded-xl p-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#9A8167]/15 flex items-center justify-center flex-shrink-0">
                        <spec.icon className="h-4 w-4 text-[#9A8167]" />
                      </div>
                      <div>
                        <p className="text-[#483B35]/50 text-[10px] uppercase tracking-wide font-medium">
                          {spec.label}
                        </p>
                        <p className="text-[#483B35] font-semibold text-sm">
                          {spec.value} {spec.suffix}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {acf?.sobreOImoveil && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl p-6 border border-[#9A8167]/10"
              >
                <h2 className="font-playfair text-xl text-[#483B35] mb-4">
                  Sobre o Imóvel
                </h2>
                <div
                  className="prose prose-sm max-w-none text-[#483B35]/70 leading-relaxed [&_p]:mb-3 [&_ul]:pl-5 [&_li]:mb-1"
                  dangerouslySetInnerHTML={{ __html: acf.sobreOImoveil }}
                />
              </motion.div>
            )}
          </div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#9A8167]/10 shadow-sm lg:sticky lg:top-24"
            >
              <div className="border-b border-[#F0EAE2] pb-5 mb-5">
                <p className="text-[#9A8167] text-xs font-medium uppercase tracking-wider mb-1">
                  Valor
                </p>
                <p className="font-playfair text-3xl font-bold text-[#483B35]">
                  {formatPrice(acf?.preco!)}
                </p>
                <p className="text-[#483B35]/50 text-xs mt-1 capitalize">
                  {arrayToString(acf?.tipoImovel)} · {arrayToString(acf?.tipoNegocio)}
                </p>
              </div>

              {(acf?.endereco || acf?.bairro) && (
                <div className="mb-5">
                  <p className="text-[#9A8167] text-xs font-medium uppercase tracking-wider mb-2">
                    Localização
                  </p>
                  <div className="flex items-start gap-2 text-[#483B35]/70 text-sm">
                    <MapPin className="h-4 w-4 text-[#9A8167] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">
                      {acf?.endereco && (
                        <span dangerouslySetInnerHTML={{ __html: acf.endereco.replace(/\n/g, " ") }} />
                      )}
                      {acf?.bairro && ` ${acf.bairro}`}
                      {acf?.cidade && `, ${acf.cidade}`}
                      {acf?.cep && ` — CEP ${acf.cep}`}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5546999370870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#9A8167] hover:bg-[#483B35] text-white font-medium rounded-xl transition-all duration-300 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Entrar em Contato
                </a>

                <button
                  onClick={() =>
                    toggleFavorite({
                      id: imovel.id,
                      title: imovel.title,
                      slug: imovel.slug,
                      image: imovel.featuredImage?.node?.sourceUrl || "",
                    })
                  }
                  className={`w-full flex items-center justify-center gap-2 py-3.5 border-2 font-medium rounded-xl transition-all duration-300 text-sm ${
                    favorited
                      ? "border-[#9A8167] bg-[#9A8167]/10 text-[#9A8167]"
                      : "border-[#483B35]/20 text-[#483B35]/70 hover:border-[#9A8167] hover:text-[#9A8167]"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${favorited ? "fill-current" : ""}`} />
                  {favorited ? "Salvo nos Favoritos" : "Salvar nos Favoritos"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

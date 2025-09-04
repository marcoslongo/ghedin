"use client";

import { ImovelCard } from "@/src/components/imovel-card";
import { Button } from "@/src/components/ui/button";
import { useFavorites } from "@/src/context/FavoritesContext";
import Link from "next/link";

export default function FavoritosPage() {
  const { favorites } = useFavorites();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 pt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#483b35]">
            Meus Favoritos
          </h2>
          <p className="text-xl text-[#9a8167] max-w-2xl mx-auto">
            Aqui estão os imóveis que você marcou como favoritos. 
            Você pode visitá-los novamente a qualquer momento.
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {favorites.map((fav) => (
              <ImovelCard
                key={fav.id}
                imovel={{
                  id: fav.id,
                  title: fav.title,
                  slug: fav.slug,
                  featuredImage: {
                    node: {
                      sourceUrl: fav.image ?? "/assets/images/fallback.webp",
                      altText: fav.title,
                      __typename: "MediaItem",
                    },
                    __typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
                  },
                  acfImoveis: null,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-6">
              Você ainda não adicionou nenhum imóvel aos favoritos.
            </p>
            <Link href="/imoveis">
              <Button
                size="lg"
                className="text-lg px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer"
              >
                Ver Imóveis
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

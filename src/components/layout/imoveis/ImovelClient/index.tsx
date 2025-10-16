"use client";
import {
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize,
  Heart,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import GalleryContent from "@/src/components/layout/imoveis/GaleriaContent";
import { Button } from "@/src/components/ui/button";
import { formatPrice } from "@/src/utils/formatPrice";
import { useFavorites } from "@/src/context/FavoritesContext";

export default function ImovelClient({ imovel }: { imovel: any }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const { acfImoveis: acf } = imovel;
  const galery = acf?.galeriaFotos;
  const favorited = isFavorite(imovel.id);

  const arrayToString = (value: any) =>
    Array.isArray(value) ? value.join(", ") : value || "";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            <div className="lg:col-span-2 space-y-6 order-1">
              <div className="relative rounded-lg overflow-hidden">
                <GalleryContent images={galery?.nodes || []} />
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  {acf?.destaque && <Badge variant="destructive">Destaque</Badge>}
                  <Badge variant="secondary" className="capitalize">
                    {arrayToString(acf?.tipoNegocio)}
                  </Badge>
                </div>
              </div>

              <Card className="pt-6 order-3 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Sobre o imóvel</CardTitle>
                </CardHeader>
                <CardContent>
                  {acf?.sobreOImoveil && (
                    <div className="prose max-w-none text-muted-foreground mb-4">
                      <div dangerouslySetInnerHTML={{ __html: acf.sobreOImoveil }} />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 order-2 lg:order-2 lg:sticky lg:top-32 h-fit">
              <Card className="pt-6">
                <CardHeader>
                  <div className="flex flex-col">
                    <div>
                      <CardTitle className="text-2xl mb-2">{imovel.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {acf?.endereco && (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: acf.endereco.replace(/\n/g, " "),
                              }}
                            />
                          )}
                          {acf?.bairro && ` ${acf.bairro}`}
                          {acf?.cidade && `, ${acf.cidade}`}
                          {acf?.cep && ` CEP: ${acf.cep}`}
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {formatPrice(acf?.preco!)}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {arrayToString(acf?.tipoImovel)} para {arrayToString(acf?.tipoNegocio)}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {acf?.quartos! > 0 && (
                      <div className="flex items-center gap-2">
                        <Bed className="h-5 w-5 text-muted-foreground" />
                        <span>{acf?.quartos} quarto{acf?.quartos! > 1 ? "s" : ""}</span>
                      </div>
                    )}
                    {acf?.banheiros! > 0 && (
                      <div className="flex items-center gap-2">
                        <Bath className="h-5 w-5 text-muted-foreground" />
                        <span>{acf?.banheiros} banheiro{acf?.banheiros! > 1 ? "s" : ""}</span>
                      </div>
                    )}
                    {acf?.vagasGaragem! > 0 && (
                      <div className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-muted-foreground" />
                        <span>{acf?.vagasGaragem} vaga{acf?.vagasGaragem! > 1 ? "s" : ""}</span>
                      </div>
                    )}
                    {acf?.areaTotal! > 0 && (
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5 text-muted-foreground" />
                        <span>{acf?.areaTotal}m² total</span>
                      </div>
                    )}
                    {acf?.areaConstruida! > 0 && (
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5 text-muted-foreground" />
                        <span>Área construída: {acf?.areaConstruida}m²</span>
                      </div>
                    )}
                    {acf?.testada! > 0 && (
                      <div className="flex items-center gap-2">
                        <Maximize className="h-5 w-5 text-muted-foreground" />
                        <span>Área testada: {acf?.testada}m</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant={favorited ? "default" : "outline"}
                      className={`flex-1 cursor-pointer hover:bg-[#9a8167] hover:text-white ${favorited ? "bg-[#9a8167] text-white" : "bg-transparent"
                        }`}
                      onClick={() =>
                        toggleFavorite({
                          id: imovel.id,
                          title: imovel.title,
                          slug: imovel.slug,
                          image: imovel.featuredImage?.node?.sourceUrl || "",
                        })
                      }
                    >
                      <Heart className={`h-4 w-4 mr-2 ${favorited ? "fill-current" : ""}`} />
                      {favorited ? "Remover" : "Favoritar"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

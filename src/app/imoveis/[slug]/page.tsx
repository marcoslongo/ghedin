import { notFound } from "next/navigation"
import Image from "next/image"
import { formatarPreco } from "@/src/lib/wordpress"
import { MapPin, Bed, Bath, Car, Maximize, Home, Phone, Mail, Share2, Heart } from "lucide-react"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { getImovelBySlug } from "@/src/services/GetImovelBySlug"

interface ImovelPageProps {
  params: {
    slug: string
  }
}

export default async function ImovelPage({ params }: ImovelPageProps) {
  const response = await getImovelBySlug(params.slug);

  // Extrai o imóvel
  const imovel = response?.imovelBy;
  if (!imovel) notFound();

  const { acfImoveis: acf } = imovel;

  // Helper para transformar arrays em string
  const arrayToString = (value: any) => {
    if (Array.isArray(value)) return value.join(", ");
    return value || "";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna Principal */}
            <div className="lg:col-span-2 space-y-6">
              {/* Imagem Principal */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                {imovel.featuredImage?.node ? (
                  <Image
                    src={imovel.featuredImage.node.sourceUrl!}
                    alt={''}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Home className="h-16 w-16 text-muted-foreground" />
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {acf?.destaque && <Badge variant="destructive">Destaque</Badge>}
                  <Badge variant="secondary" className="capitalize">
                    {arrayToString(acf?.tipoNegocio)}
                  </Badge>
                </div>
              </div>

              {/* Informações Principais */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{imovel.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {acf?.endereco}, {acf?.bairro}, {acf?.cidade} - CEP: {acf?.cep || "-"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{formatarPreco(acf?.preco!)}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {arrayToString(acf?.tipoImovel)} para {arrayToString(acf?.tipoNegocio)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Características */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
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
                  </div>
                </CardContent>
              </Card>

              {/* Detalhes Técnicos */}
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes do Imóvel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {acf?.areaConstruida! > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Área Construída:</span>
                        <span className="font-medium">{acf?.areaConstruida}m²</span>
                      </div>
                    )}
                    {acf?.suites! > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Suítes:</span>
                        <span className="font-medium">{acf?.suites}</span>
                      </div>
                    )}
                    {acf?.condominio && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Condomínio:</span>
                        <span className="font-medium">{formatarPreco(acf?.condominio)}</span>
                      </div>
                    )}
                    {acf?.iptu && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">IPTU:</span>
                        <span className="font-medium">{formatarPreco(acf?.iptu)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="outline" className="capitalize">
                        {arrayToString(acf?.statusImovel)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interessado?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" /> Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="h-4 w-4 mr-2" /> Enviar Email
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Heart className="h-4 w-4 mr-2" /> Favoritar
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" /> Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {acf?.caracteristicas && acf?.caracteristicas.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Características</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {acf?.caracteristicas.map((caracteristica, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Car, Maximize } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { GetImoveisQuery } from "@/src/generated/graphql";
import { formatPrice } from "../utils/formatPrice";

interface ImovelCardProps {
  imovel: NonNullable<GetImoveisQuery["imoveis"]>["nodes"][number];
}

export function ImovelCard({ imovel }: ImovelCardProps) {
  const acf = imovel.acfImoveis!;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3]">
        {imovel.featuredImage?.node ? (
          <Image
            src={imovel.featuredImage.node.sourceUrl || "/placeholder.svg"}
            alt={imovel.featuredImage.node.altText || imovel.title || ""}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Sem imagem</span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-2">
          {acf.destaque && <Badge variant="destructive">Destaque</Badge>}
          <Badge variant="secondary" className="capitalize">
            {acf.tipoNegocio}
          </Badge>
        </div>

        <div className="absolute bottom-3 left-3">
          <div className="bg-[#483b35] text-white px-3 py-1 rounded-md font-semibold">
            {formatPrice(acf.preco!)}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <div>
              {acf.bairro}, {acf.cidade}
            </div>
            <div className="capitalize text-xs">{acf.tipoImovel}</div>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
          {imovel.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {acf.quartos! > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{acf.quartos}</span>
            </div>
          )}
          {acf.banheiros! > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{acf.banheiros}</span>
            </div>
          )}
          {acf.vagasGaragem! > 0 && (
            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span>{acf.vagasGaragem}</span>
            </div>
          )}
          {acf.areaTotal! > 0 && (
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>{acf.areaTotal}m²</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link
          href={`/imoveis/${imovel.slug}`}
          className="w-full bg-[#483b35] text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium text-center inline-flex items-center justify-center transition-colors"
        >
          Ver Detalhes
        </Link>
      </CardFooter>
    </Card>
  );
}

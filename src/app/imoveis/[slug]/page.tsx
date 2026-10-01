import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getImovelBySlug } from "@/src/services/GetImovelBySlug"
import ImovelClient from "@/src/components/layout/imoveis/ImovelClient"
import { JsonLd } from "@/src/components/JsonLd"
import { BUSINESS, SITE_URL, pageMetadata, stripHtml, truncate } from "@/src/lib/seo"

interface ImovelPageProps {
  params: {
    slug: string
  }
}

type Imovel = NonNullable<Awaited<ReturnType<typeof getImovelBySlug>>["imovelBy"]>

const first = (value: unknown) => (Array.isArray(value) ? value[0] : value) as string | undefined

function buildDescription(imovel: Imovel) {
  const acf = imovel.acfImoveis
  const sobre = stripHtml(acf?.sobreOImoveil)
  if (sobre) return truncate(sobre)

  const local = [acf?.bairro, acf?.cidade].filter(Boolean).join(", ")
  const detalhes = [
    acf?.quartos ? `${acf.quartos} quarto${acf.quartos > 1 ? "s" : ""}` : null,
    acf?.areaConstruida ? `${Math.round(acf.areaConstruida)} m² construídos` : null,
  ].filter(Boolean).join(", ")

  return truncate(
    `${imovel.title}${local ? ` em ${local}` : ""}${detalhes ? `: ${detalhes}` : ""}. Fale com a Ghedin Imóveis.`
  )
}

export async function generateMetadata({ params }: ImovelPageProps): Promise<Metadata> {
  const response = await getImovelBySlug(params.slug).catch(() => null)
  const imovel = response?.imovelBy
  if (!imovel) return { title: "Imóvel não encontrado", robots: { index: false } }

  const cidade = imovel.acfImoveis?.cidade
  const title = cidade && !imovel.title?.includes(cidade) ? `${imovel.title} em ${cidade} - PR` : imovel.title ?? "Imóvel"

  return pageMetadata({
    title,
    description: buildDescription(imovel),
    path: `/imoveis/${imovel.slug}`,
    image: imovel.featuredImage?.node?.sourceUrl,
    imageAlt: imovel.featuredImage?.node?.altText || imovel.title || undefined,
  })
}

function listingJsonLd(imovel: Imovel) {
  const acf = imovel.acfImoveis
  const url = `${SITE_URL}/imoveis/${imovel.slug}`
  const images = Array.from(new Set([
    imovel.featuredImage?.node?.sourceUrl,
    ...(acf?.galeriaFotos?.nodes?.map((n) => n.mediaItemUrl) ?? []),
  ].filter(Boolean)))

  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: imovel.title,
    url,
    description: buildDescription(imovel),
    image: images,
    ...(acf?.preco
      ? {
          offers: {
            "@type": "Offer",
            price: acf.preco,
            priceCurrency: "BRL",
            businessFunction: first(acf.tipoNegocio) === "aluguel" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell",
            availability: first(acf.statusImovel) === "disponivel" ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
            seller: { "@id": `${SITE_URL}/#organization` },
          },
        }
      : {}),
    about: {
      "@type": first(acf?.tipoImovel) === "apartamento" ? "Apartment" : first(acf?.tipoImovel) === "casa" ? "House" : "Place",
      address: {
        "@type": "PostalAddress",
        ...(acf?.bairro ? { streetAddress: acf.bairro } : {}),
        addressLocality: acf?.cidade ?? BUSINESS.address.addressLocality,
        addressRegion: "PR",
        ...(acf?.cep ? { postalCode: acf.cep } : {}),
        addressCountry: "BR",
      },
      ...(acf?.quartos ? { numberOfRooms: acf.quartos } : {}),
      ...(acf?.banheiros ? { numberOfBathroomsTotal: acf.banheiros } : {}),
      ...(acf?.areaConstruida || acf?.areaTotal
        ? { floorSize: { "@type": "QuantitativeValue", value: acf.areaConstruida || acf.areaTotal, unitCode: "MTK" } }
        : {}),
    },
  }
}

function breadcrumbJsonLd(imovel: Imovel) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Imóveis", item: `${SITE_URL}/imoveis` },
      { "@type": "ListItem", position: 3, name: imovel.title, item: `${SITE_URL}/imoveis/${imovel.slug}` },
    ],
  }
}

export default async function ImovelPage({ params }: ImovelPageProps) {
  const response = await getImovelBySlug(params.slug)
  const imovel = response?.imovelBy
  if (!imovel) notFound()

  return (
    <>
      <JsonLd data={listingJsonLd(imovel)} />
      <JsonLd data={breadcrumbJsonLd(imovel)} />
      <ImovelClient imovel={imovel} />
    </>
  )
}

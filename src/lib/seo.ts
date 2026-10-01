import type { Metadata } from "next"

export const SITE_URL = "https://www.ghedinimoveis.com.br"
export const SITE_NAME = "Ghedin Imóveis"
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/bg-banner-familia.webp`

export const BUSINESS = {
  phone: "+55 46 99937-0870",
  email: "ghedin.imoveis@gmail.com",
  instagram: "https://www.instagram.com/ghedin.imoveis/",
  address: {
    streetAddress: "R. Romano Zanchet, 3188 - Centro",
    addressLocality: "Realeza",
    addressRegion: "PR",
    postalCode: "85770-000",
    addressCountry: "BR",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Romano+Zanchet,+3188+-+Centro,+Realeza+-+PR,+85770-000",
  areaServed: ["Realeza", "Dois Vizinhos", "Salto do Lontra", "Verê"],
}

export const HOME_TITLE = "Imobiliária em Realeza - PR | Ghedin Imóveis"
export const HOME_DESCRIPTION =
  "Ghedin Imóveis, imobiliária em Realeza - PR: casas, apartamentos e terrenos à venda e para alugar em Realeza e região. Avaliação de imóveis e atendimento personalizado."

type PageMetadataInput = {
  title?: string
  description: string
  path: string
  image?: string | null
  imageAlt?: string
  noindex?: boolean
}

export function pageMetadata({ title, description, path, image, imageAlt, noindex }: PageMetadataInput): Metadata {
  const ogTitle = title ? `${title} | ${SITE_NAME}` : HOME_TITLE
  const images = image
    ? [{ url: image, alt: imageAlt ?? ogTitle }]
    : [{ url: DEFAULT_OG_IMAGE, width: 2048, height: 768, alt: SITE_NAME }]

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE_NAME,
      url: path,
      title: ogTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: images.map((img) => img.url),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

export function stripHtml(html?: string | null) {
  return (html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function truncate(text: string, max = 160) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`
}

export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Ghedin Imobiliária", "Ghedin Corretora de Imóveis", "Imobiliária Ghedin Realeza"],
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    hasMap: BUSINESS.mapUrl,
    logo: `${SITE_URL}/assets/images/ghedin.webp`,
    image: DEFAULT_OG_IMAGE,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Paraná" },
    })),
    knowsAbout: ["Compra de imóveis", "Venda de imóveis", "Locação de imóveis", "Avaliação de imóveis"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [BUSINESS.instagram],
  }
}

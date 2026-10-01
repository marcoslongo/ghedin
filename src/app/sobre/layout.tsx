import { pageMetadata } from "@/src/lib/seo"

export const metadata = pageMetadata({
  title: "Sobre Nós",
  description:
    "Conheça a Ghedin Imóveis, imobiliária em Realeza - PR com mais de 8 anos de experiência em compra, venda, locação e avaliação de imóveis.",
  path: "/sobre",
})

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children
}

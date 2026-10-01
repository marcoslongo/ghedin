import { pageMetadata } from "@/src/lib/seo"

export const metadata = pageMetadata({
  title: "Meus Favoritos",
  description: "Imóveis que você salvou como favoritos na Ghedin Imóveis.",
  path: "/favoritos",
  noindex: true,
})

export default function FavoritosLayout({ children }: { children: React.ReactNode }) {
  return children
}

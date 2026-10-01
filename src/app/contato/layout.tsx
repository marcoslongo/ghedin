import { pageMetadata } from "@/src/lib/seo"

export const metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com a Ghedin Imóveis: R. Romano Zanchet, 3188 - Centro, Realeza - PR. WhatsApp (46) 99937-0870. Atendimento de segunda a sábado.",
  path: "/contato",
})

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children
}

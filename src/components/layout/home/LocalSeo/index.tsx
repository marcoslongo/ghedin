import Link from "next/link"
import { ChevronDown, MapPin } from "lucide-react"
import { JsonLd } from "@/src/components/JsonLd"
import { BUSINESS } from "@/src/lib/seo"

const faq = [
  {
    question: "Onde fica a Ghedin Imóveis em Realeza?",
    answer:
      "A Ghedin Imóveis fica na R. Romano Zanchet, 3188 - Centro, Realeza - PR, CEP 85770-000. O atendimento é de segunda a sexta, das 9h às 18h, e aos sábados, das 9h às 13h.",
  },
  {
    question: "Quais cidades a imobiliária atende?",
    answer:
      "Atendemos Realeza, Dois Vizinhos e região, no Sudoeste do Paraná.",
  },
  {
    question: "A Ghedin Imóveis faz avaliação de imóveis?",
    answer:
      "Sim. Somos credenciados por bancos para avaliações de imóveis e fazemos análises de viabilidade para orientar a compra, a venda ou o financiamento.",
  },
  {
    question: "Vocês trabalham com aluguel e temporada?",
    answer:
      "Sim. Além da compra e venda, trabalhamos com locação residencial e comercial e com imóveis para temporada em Realeza e região.",
  },
  {
    question: "Como anunciar meu imóvel com a Ghedin?",
    answer:
      "Fale com a gente pelo WhatsApp (46) 99937-0870 ou pelo e-mail ghedin.imoveis@gmail.com. Avaliamos o imóvel e cuidamos da divulgação e da negociação.",
  },
]

const links = [
  { href: "/imoveis?cidade=Realeza&tipoNegocio=venda", label: "Imóveis à venda em Realeza" },
  { href: "/imoveis?cidade=Realeza&tipoNegocio=aluguel", label: "Imóveis para alugar em Realeza" },
  { href: "/imoveis?tipoImovel=casa", label: "Casas à venda" },
  { href: "/imoveis?tipoImovel=terreno", label: "Terrenos à venda" },
  { href: "/imoveis?tipoImovel=apartamento", label: "Apartamentos" },
  { href: "/imoveis?tipoImovel=comercial", label: "Imóveis comerciais" },
]

export function LocalSeo() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <section className="py-24 bg-white" aria-labelledby="imobiliaria-realeza">
      <JsonLd data={faqJsonLd} />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
              Sudoeste do Paraná
            </p>
            <h2 id="imobiliaria-realeza" className="font-playfair text-3xl md:text-4xl text-[#483B35] mb-6">
              Imobiliária em Realeza - PR
            </h2>
            <div className="space-y-4 text-[#483B35]/75 leading-relaxed">
              <p>
                A <strong className="text-[#483B35]">Ghedin Imóveis</strong> é uma imobiliária em Realeza - PR com
                mais de 8 anos de experiência na compra, venda, locação e avaliação de imóveis. Trabalhamos com
                casas, apartamentos, terrenos, chácaras e imóveis comerciais em Realeza e nas cidades vizinhas.
              </p>
              <p>
                Conhecemos os bairros e o mercado da região e acompanhamos cada etapa da negociação, da avaliação
                à assinatura do contrato. Somos credenciados por bancos para avaliação de imóveis, o que agiliza
                quem vai comprar com financiamento.
              </p>
              <p>
                Atendemos Realeza, Dois Vizinhos e região.
              </p>
            </div>

            <address className="not-italic mt-8 flex items-start gap-3 text-[#483B35]">
              <MapPin className="h-5 w-5 mt-0.5 text-[#9A8167] shrink-0" />
              <span>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#9A8167] transition-colors">
                  R. Romano Zanchet, 3188 - Centro, Realeza - PR, 85770-000
                </a>
                <br />
                <a href="https://wa.me/5546999370870" target="_blank" rel="noopener noreferrer" className="text-[#483B35]/70 hover:text-[#9A8167] transition-colors">
                  (46) 99937-0870
                </a>
              </span>
            </address>

            <ul className="mt-8 flex flex-wrap gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-4 py-2 rounded-full border border-[#9A8167]/30 text-sm text-[#483B35] hover:bg-[#9A8167] hover:text-white hover:border-[#9A8167] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-2xl text-[#483B35] mb-6">Perguntas frequentes</h3>
            <div className="divide-y divide-[#9A8167]/20 border-y border-[#9A8167]/20">
              {faq.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-[#483B35] [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#9A8167] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#483B35]/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

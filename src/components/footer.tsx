import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#483B35]">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6">
              Especialistas em negócios imobiliários com mais de 8 anos de experiência.
              Encontre o imóvel ideal com segurança, transparência e profissionalismo.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/5546999370870"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-[#9A8167] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9A8167] transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                (46) 99937-0870
              </a>
              <a
                href="mailto:ghedin.imoveis@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-[#9A8167] transition-colors text-sm group"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#9A8167] transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                ghedin.imoveis@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                Realeza e região
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-5">Navegação</h3>
            <ul className="space-y-3">
              {[
                { href: "/imoveis", label: "Todos os Imóveis" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/contato", label: "Contato" },
                { href: "/favoritos", label: "Meus Favoritos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#9A8167] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#9A8167] transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-5">Serviços</h3>
            <ul className="space-y-3">
              {[
                "Venda de Imóveis",
                "Locação Residencial",
                "Locação Comercial",
                "Avaliação de Imóveis",
                "Consultoria Imobiliária",
              ].map((service) => (
                <li key={service} className="text-white/60 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#9A8167] flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-white/50 text-xs uppercase tracking-widest mb-3">Siga-nos</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/ghedinimoveis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#9A8167] hover:text-[#9A8167] transition-all duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#9A8167] hover:text-[#9A8167] transition-all duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2025 Ghedin Imóveis. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            CRECI · Ana Mattei Ghedin · Corretora de Imóveis
          </p>
        </div>
      </div>
    </footer>
  )
}

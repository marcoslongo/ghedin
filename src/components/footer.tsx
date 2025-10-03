import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-[#483b35] mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="space-y-2 text-sm text-white">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Realeza e região</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(46) 99937-0870</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>ghedin.imoveis@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="/imoveis" className="hover:text-primary transition-colors">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>Venda de Imóveis</li>
              <li>Locação</li>
              <li>Avaliação</li>
              <li>Consultoria</li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <div className="text-center text-white">
          <p>&copy; 2025 Ghedin Imóveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

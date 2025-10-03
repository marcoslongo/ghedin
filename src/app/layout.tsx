import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { FavoritesProvider } from "../context/FavoritesContext"
import { Toaster } from "../components/ui/sonner"
import { TooltipProvider } from "../components/ui/tooltip"
import { FaWhatsapp } from "react-icons/fa"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ghedin Imóveis | Sua Casa dos Sonhos Te Espera",
  description:
    "Encontre o imóvel perfeito com a Ghedin Imóveis. Especialistas em compra, venda e locação de imóveis com atendimento personalizado.",
  keywords: "imóveis, casa, apartamento, terreno, compra, venda, locação",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <FavoritesProvider>
          <TooltipProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="top-center" />
            <a
              href="https://wa.me/5546999370870"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </TooltipProvider>
        </FavoritesProvider>
      </body>
    </html>
  )
}

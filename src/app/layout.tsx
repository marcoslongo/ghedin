import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { FavoritesProvider } from "../context/FavoritesContext"
import { Toaster } from "../components/ui/sonner"

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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </FavoritesProvider>
      </body>
    </html>
  )
}

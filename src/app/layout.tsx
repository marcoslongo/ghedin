import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { FavoritesProvider } from "../context/FavoritesContext"
import { Toaster } from "../components/ui/sonner"
import { TooltipProvider } from "../components/ui/tooltip"
import { FaWhatsapp } from "react-icons/fa"
import { JsonLd } from "../components/JsonLd"
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, realEstateAgentJsonLd } from "../lib/seo"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
})

const defaultTitle = "Ghedin Imóveis | Imobiliária em Realeza - PR"
const defaultDescription =
  "Casas, apartamentos e terrenos à venda e para alugar em Realeza - PR e região. Avaliação de imóveis e atendimento personalizado com a Ghedin Imóveis."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Ghedin Imóveis",
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: DEFAULT_OG_IMAGE, width: 2048, height: 768, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${montserrat.variable}`}>
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <JsonLd data={realEstateAgentJsonLd()} />
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
              aria-label="Fale conosco pelo WhatsApp"
              className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 hover:scale-110 duration-300"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </TooltipProvider>
        </FavoritesProvider>
      </body>
    </html>
  )
}

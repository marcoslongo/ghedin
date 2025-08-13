import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Ghedin Imóveis | Sua Casa dos Sonhos Te Espera',
  description: 'Encontre o imóvel perfeito com a Ghedin Imóveis. Especialistas em compra, venda e locação de imóveis com atendimento personalizado.',
  keywords: 'imóveis, casa, apartamento, terreno, compra, venda, locação',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <head>
        <style>{`
          :root {
            --font-sans: ${plusJakarta.style.fontFamily};
          }
          
          html, body {
            font-family: var(--font-sans), sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }
          
          h1, h2, h3 {
            font-weight: 700;
            line-height: 1.2;
          }
        `}</style>
      </head>
      <Header />
      <body className="antialiased">
        {children}
      </body>
      <Footer />
    </html>
  )
}

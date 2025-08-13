import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button asChild>
            <Link href="/">Voltar para o início</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ImovelCard } from "@/components/imovel-card"
import { FiltrosImoveis } from "@/components/filtros-imoveis"
import { getImoveis, getImoveisFiltrados, type Imovel } from "@/lib/wordpress"
import { Loader2 } from "lucide-react"

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>([])
  const [loading, setLoading] = useState(true)
  const [filtrandoAtivo, setFiltrandoAtivo] = useState(false)

  useEffect(() => {
    carregarImoveis()
  }, [])

  const carregarImoveis = async () => {
    setLoading(true)
    try {
      const data = await getImoveis(24)
      setImoveis(data.imoveis.nodes)
    } catch (error) {
      console.error("Erro ao carregar imóveis:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFiltrar = async (filtros: any) => {
    setLoading(true)
    setFiltrandoAtivo(Object.keys(filtros).length > 0)

    try {
      const data = Object.keys(filtros).length > 0 ? await getImoveisFiltrados(filtros) : await getImoveis(24)

      setImoveis(data.imoveis.nodes)
    } catch (error) {
      console.error("Erro ao filtrar imóveis:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Todos os Imóveis</h1>
            <p className="text-lg text-muted-foreground">
              Encontre o imóvel perfeito para você. Use os filtros para refinar sua busca.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <div className="lg:col-span-1">
              <FiltrosImoveis onFiltrar={handleFiltrar} />
            </div>

            {/* Lista de Imóveis */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin" />
                  <span className="ml-2">Carregando imóveis...</span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-muted-foreground">
                      {imoveis.length} {imoveis.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
                      {filtrandoAtivo && " (filtrado)"}
                    </p>
                  </div>

                  {imoveis.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {imoveis.map((imovel) => (
                        <ImovelCard key={imovel.id} imovel={imovel} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground text-lg">
                        Nenhum imóvel encontrado com os filtros selecionados.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

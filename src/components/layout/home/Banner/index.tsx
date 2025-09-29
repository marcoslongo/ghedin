"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Input } from "@/src/components/ui/input"
import { House, Search } from "lucide-react"
import { GetFiltersQuery } from "@/src/generated/graphql"

interface BannerProps {
  filtro: GetFiltersQuery;
}

export function Banner({ filtro }: BannerProps) {
  const router = useRouter()
  const [tipoNegocio, setTipoNegocio] = useState("")
  const [tipoImovel, setTipoImovel] = useState("")
  const [cidade, setCidade] = useState("")
  const [quartosMin, setQuartosMin] = useState("")
  const [precoMin, setPrecoMin] = useState("")
  const [precoMax, setPrecoMax] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (tipoNegocio) params.set("tipoNegocio", tipoNegocio)
    if (tipoImovel) params.set("tipoImovel", tipoImovel)
    if (cidade) params.set("cidade", cidade)
    if (quartosMin) params.set("quartosMin", quartosMin)
    if (precoMin) params.set("precoMin", precoMin)
    if (precoMax) params.set("precoMax", precoMax)
    router.push(`/imoveis?${params.toString()}`)
  }

  return (
    <section className="bg-gradient-to-r text-white py-48 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-20 text-[#483b35]">
          Encontre o Imóvel <br /> dos <span className="text-[#9a8167]">Seus Sonhos</span>
        </h1>

        <form onSubmit={handleSubmit} className="bg-white/90 text-[#483b35] p-6 rounded-2xl shadow-lg max-w-5xl mx-auto space-y-4 mb-3.5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full">
              <Select value={tipoNegocio} onValueChange={setTipoNegocio}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Negócio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venda">Venda</SelectItem>
                  <SelectItem value="aluguel">Aluguel</SelectItem>
                  <SelectItem value="temporada">Temporada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select value={tipoImovel} onValueChange={setTipoImovel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de Imóvel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                  <SelectItem value="chacara">Chácara</SelectItem>
                  <SelectItem value="cobertura">Cobertura</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Select value={cidade} onValueChange={setCidade}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  {filtro.cidadeImovels?.edges.map((city) => (
                    <SelectItem value={city.node.name!} key={city.node.id}>
                      {city.node.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="w-full">
              <Select value={quartosMin} onValueChange={setQuartosMin}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+ Quarto</SelectItem>
                  <SelectItem value="2">2+ Quartos</SelectItem>
                  <SelectItem value="3">3+ Quartos</SelectItem>
                  <SelectItem value="4">4+ Quartos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Input
                type="number"
                placeholder="Preço Mín."
                value={precoMin}
                onChange={(e) => setPrecoMin(e.target.value)}
                className="w-full text-[#483b35]"
              />
            </div>

            <div className="w-full">
              <Input
                type="number"
                placeholder="Preço Máx."
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
                className="w-full text-[#483b35]"
              />
            </div>

            <div className="w-full">
              <Button 
                type="submit" 
                className="bg-[#483b35] hover:bg-[#9a8167] w-full cursor-pointer h-10"
              >
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/imoveis">
            <Button size="lg" className="text-lg px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer">
              <House />
              Ver Todos os Imóveis
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src={"/assets/images/bg-banner.webp"}
        alt=""
        fill
        className="object-cover"
      />
    </section>
  )
}
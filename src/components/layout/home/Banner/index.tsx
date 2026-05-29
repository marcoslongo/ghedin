"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Input } from "@/src/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/images/bg-banner.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#483B35]/40 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[#9A8167] text-sm font-medium tracking-[0.35em] uppercase mb-6">
              Ghedin Imóveis · Realeza e Região
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-8">
              Encontre o Imóvel{" "}
              <span className="italic text-[#C4A882]">dos Seus Sonhos</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Mais de 8 anos conectando famílias aos melhores imóveis da região com expertise, transparência e cuidado.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex gap-1 mb-5 bg-white/10 rounded-xl p-1 w-fit mx-auto">
              {[
                { value: "venda", label: "Comprar" },
                { value: "aluguel", label: "Alugar" },
                { value: "temporada", label: "Temporada" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setTipoNegocio(tipoNegocio === tab.value ? "" : tab.value)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    tipoNegocio === tab.value
                      ? "bg-white text-[#483B35] shadow-sm"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="[&_button]:bg-white/90 [&_button]:text-[#483B35] [&_button]:border-white/30 [&_button:hover]:bg-white [&_[role=option]]:text-[#483B35]">
                <Select value={tipoImovel} onValueChange={setTipoImovel}>
                  <SelectTrigger className="w-full bg-white/90 border-white/30 text-[#483B35] h-12 rounded-xl">
                    <SelectValue placeholder="Tipo de imóvel" />
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

              <Select value={cidade} onValueChange={setCidade}>
                <SelectTrigger className="w-full bg-white/90 border-white/30 text-[#483B35] h-12 rounded-xl">
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

              <Select value={quartosMin} onValueChange={setQuartosMin}>
                <SelectTrigger className="w-full bg-white/90 border-white/30 text-[#483B35] h-12 rounded-xl">
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+ Quarto</SelectItem>
                  <SelectItem value="2">2+ Quartos</SelectItem>
                  <SelectItem value="3">3+ Quartos</SelectItem>
                  <SelectItem value="4">4+ Quartos</SelectItem>
                </SelectContent>
              </Select>

              <button
                type="submit"
                className="h-12 px-6 bg-[#9A8167] hover:bg-[#483B35] text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <Search className="h-4 w-4" />
                Buscar Imóveis
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Input
                type="number"
                placeholder="Preço mínimo (R$)"
                value={precoMin}
                onChange={(e) => setPrecoMin(e.target.value)}
                className="bg-white/90 border-white/30 text-[#483B35] h-10 rounded-xl placeholder:text-[#483B35]/50 text-sm"
              />
              <Input
                type="number"
                placeholder="Preço máximo (R$)"
                value={precoMax}
                onChange={(e) => setPrecoMax(e.target.value)}
                className="bg-white/90 border-white/30 text-[#483B35] h-10 rounded-xl placeholder:text-[#483B35]/50 text-sm"
              />
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/imoveis">
              <button className="px-8 py-3.5 border-2 border-white/50 text-white font-medium rounded-full hover:bg-white hover:text-[#483B35] transition-all duration-300 text-sm tracking-wide">
                Ver Todos os Imóveis
              </button>
            </Link>
            <a
              href="https://wa.me/5546999370870"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#9A8167] hover:bg-[#483B35] text-white font-medium rounded-full transition-all duration-300 text-sm tracking-wide"
            >
              Falar com Especialista
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </div>
    </section>
  )
}

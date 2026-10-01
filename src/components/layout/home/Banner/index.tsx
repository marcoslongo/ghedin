"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Input } from "@/src/components/ui/input"
import { Search, ChevronDown, Home, MapPin, BedDouble, Coins, ArrowRight } from "lucide-react"
import { GetFiltersQuery } from "@/src/generated/graphql"

interface BannerProps {
  filtro: GetFiltersQuery;
}

const triggerClass =
  "w-full bg-white border-white/30 text-[#483B35] h-12 data-[size=default]:h-12 rounded-xl"
const iconClass = "h-4 w-4 shrink-0 text-[#483B35]/70"

export function Banner({ filtro }: BannerProps) {
  const router = useRouter()
  const [tipoNegocio, setTipoNegocio] = useState("venda")
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
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden pb-16 md:pb-0">
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/images/bg-banner-familia.webp"
          alt=""
          fill
          priority
          className="object-cover object-[70%_center]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#2E241F]/90 via-[#483B35]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <div className="container mx-auto px-6 relative z-10 pt-28 md:pt-32 pb-8 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="font-sans flex items-center gap-4 text-[#C4A882] text-xs md:text-sm font-medium tracking-[0.35em] uppercase mb-6">
            <span className="hidden sm:block w-14 h-px bg-[#C4A882]" />
            <span>
              Ghedin Imóveis <span className="mx-2 text-[#C4A882]/60">|</span> Imobiliária em Realeza - PR
            </span>
          </h1>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.05] mb-6">
            Encontre o imóvel{" "}
            <span className="block italic text-[#D9B98C]">dos seus sonhos</span>
          </h2>
          <p className="text-white/85 text-base md:text-xl max-w-xl mb-8 md:mb-12 font-light leading-relaxed">
            Mais de 8 anos conectando famílias aos melhores imóveis da região, com transparência, confiança e conhecimento local.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex gap-1 mb-5 bg-white/10 rounded-full p-1 w-fit mx-auto">
            {[
              { value: "venda", label: "Comprar" },
              { value: "aluguel", label: "Alugar" },
              { value: "temporada", label: "Temporada" },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setTipoNegocio(tipoNegocio === tab.value ? "" : tab.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  tipoNegocio === tab.value
                    ? "bg-[#9A8167] text-white shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <Select value={tipoImovel} onValueChange={setTipoImovel}>
              <SelectTrigger className={triggerClass}>
                <span className="flex items-center gap-2 min-w-0">
                  <Home className={iconClass} />
                  <SelectValue placeholder="Tipo de imóvel" />
                </span>
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

            <Select value={cidade} onValueChange={setCidade}>
              <SelectTrigger className={triggerClass}>
                <span className="flex items-center gap-2 min-w-0">
                  <MapPin className={iconClass} />
                  <SelectValue placeholder="Cidade" />
                </span>
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
              <SelectTrigger className={triggerClass}>
                <span className="flex items-center gap-2 min-w-0">
                  <BedDouble className={iconClass} />
                  <SelectValue placeholder="Quartos" />
                </span>
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
              className="group h-12 px-6 bg-[#9A8167] hover:bg-[#483B35] border border-[#C4A882]/60 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <Search className="h-4 w-4" />
              Buscar Imóveis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { placeholder: "Preço mínimo (R$)", value: precoMin, onChange: setPrecoMin },
              { placeholder: "Preço máximo (R$)", value: precoMax, onChange: setPrecoMax },
            ].map((field) => (
              <div key={field.placeholder} className="relative">
                <Coins className={`${iconClass} absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none`} />
                <Input
                  type="number"
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="bg-white border-white/30 text-[#483B35] h-12 pl-10 rounded-xl placeholder:text-[#483B35]/50 text-sm"
                />
              </div>
            ))}
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  )
}

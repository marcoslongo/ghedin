"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import type React from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { GetFiltersQuery } from "../generated/graphql"

interface FiltrosProps {
  filtro: GetFiltersQuery;
  currentFilters: {
    precoMin?: string;
    precoMax?: string;
    quartosMin?: string;
    status?: string;
    cidade?: string;
    bairro?: string;
    tipoImovel?: string;
    tipoNegocio?: string;
  };
}

export function FiltrosImoveis({ filtro, currentFilters }: FiltrosProps) {
  const router = useRouter()

  const [values, setValues] = useState({
    precoMin: currentFilters.precoMin ?? "",
    precoMax: currentFilters.precoMax ?? "",
    quartosMin: currentFilters.quartosMin ?? "",
    status: currentFilters.status ?? "",
    cidade: currentFilters.cidade ?? "",
    bairro: currentFilters.bairro ?? "",
    tipoImovel: currentFilters.tipoImovel ?? "",
    tipoNegocio: currentFilters.tipoNegocio ?? "",
  })

  function updateField(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    Object.entries(values).forEach(([key, val]) => {
      if (val) params.set(key, val)
    })
    router.push(`/imoveis?${params.toString()}`)
  }

  function handleClear() {
    setValues({
      precoMin: "",
      precoMax: "",
      quartosMin: "",
      status: "",
      cidade: "",
      bairro: "",
      tipoImovel: "",
      tipoNegocio: "",
    })
    router.push("/imoveis")
  }

  const hasFilters = Object.values(values).some(Boolean)

  return (
    <div className="bg-white rounded-2xl border border-[#9A8167]/15 overflow-hidden shadow-sm">
      <div className="bg-[#483B35] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="font-semibold text-sm">Filtrar Imóveis</span>
        </div>
        {hasFilters && (
          <button
            onClick={handleClear}
            className="text-white/60 hover:text-white text-xs flex items-center gap-1 transition-colors"
          >
            <X className="h-3 w-3" />
            Limpar
          </button>
        )}
      </div>

      <form className="p-5 space-y-5" onSubmit={handleSubmit}>
        <div>
          <Label className="text-[#483B35]/70 text-xs font-semibold uppercase tracking-wider mb-2 block">
            Tipo de Negócio
          </Label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { value: "venda", label: "Venda" },
              { value: "aluguel", label: "Aluguel" },
              { value: "temporada", label: "Temporada" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => updateField("tipoNegocio", values.tipoNegocio === opt.value ? "" : opt.value)}
                className={`py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
                  values.tipoNegocio === opt.value
                    ? "bg-[#483B35] border-[#483B35] text-white"
                    : "border-[#9A8167]/25 text-[#483B35]/70 hover:border-[#9A8167] hover:text-[#483B35]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-[#483B35]/70 text-xs font-semibold uppercase tracking-wider mb-2 block">
            Tipo de Imóvel
          </Label>
          <Select value={values.tipoImovel} onValueChange={(v) => updateField("tipoImovel", v)}>
            <SelectTrigger className="border-[#9A8167]/25 text-[#483B35] focus:ring-[#9A8167]/30 rounded-xl h-10">
              <SelectValue placeholder="Todos os tipos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="chacara">Chácara</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-[#483B35]/70 text-xs font-semibold uppercase tracking-wider mb-2 block">
            Cidade
          </Label>
          <Select value={values.cidade} onValueChange={(v) => updateField("cidade", v)}>
            <SelectTrigger className="border-[#9A8167]/25 text-[#483B35] focus:ring-[#9A8167]/30 rounded-xl h-10">
              <SelectValue placeholder="Qualquer cidade" />
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

        <div>
          <Label className="text-[#483B35]/70 text-xs font-semibold uppercase tracking-wider mb-2 block">
            Mín. Quartos
          </Label>
          <div className="grid grid-cols-4 gap-1.5">
            {["1", "2", "3", "4"].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => updateField("quartosMin", values.quartosMin === q ? "" : q)}
                className={`py-2 text-xs font-medium rounded-lg border transition-all duration-200 ${
                  values.quartosMin === q
                    ? "bg-[#9A8167] border-[#9A8167] text-white"
                    : "border-[#9A8167]/25 text-[#483B35]/70 hover:border-[#9A8167]"
                }`}
              >
                {q}+
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-[#483B35]/70 text-xs font-semibold uppercase tracking-wider mb-2 block">
            Faixa de Preço
          </Label>
          <div className="space-y-2">
            <Input
              type="number"
              value={values.precoMin}
              onChange={(e) => updateField("precoMin", e.target.value)}
              placeholder="Mínimo (R$)"
              className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl h-10 text-sm"
            />
            <Input
              type="number"
              value={values.precoMax}
              onChange={(e) => updateField("precoMax", e.target.value)}
              placeholder="Máximo (R$)"
              className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl h-10 text-sm"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#483B35] hover:bg-[#9A8167] text-white rounded-xl h-11 font-medium transition-all duration-300"
        >
          <Search className="h-4 w-4 mr-2" />
          Buscar Imóveis
        </Button>
      </form>
    </div>
  )
}

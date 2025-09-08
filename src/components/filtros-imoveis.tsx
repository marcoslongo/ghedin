"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Search, Filter } from "lucide-react"
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

  return (
    <Card className="w-full pt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtrar Imóveis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <Label className="mb-1.5" htmlFor="tipoNegocio">Tipo de Negócio</Label>
              <Select
                value={values.tipoNegocio}
                onValueChange={(v) => updateField("tipoNegocio", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venda">Venda</SelectItem>
                  <SelectItem value="aluguel">Aluguel</SelectItem>
                  <SelectItem value="temporada">Temporada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label className="mb-1.5" htmlFor="tipoImovel">Tipo de Imóvel</Label>
              <Select
                value={values.tipoImovel}
                onValueChange={(v) => updateField("tipoImovel", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label className="mb-1.5" htmlFor="cidade">Cidade</Label>
              <Select
                value={values.cidade}
                onValueChange={(v) => updateField("cidade", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Qualquer" />
                </SelectTrigger>
                <SelectContent>
                  {filtro.cidadeImovels?.edges.map((city) =>
                    <SelectItem value={city.node.name!} key={city.node.id}>{city.node.name}</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label className="mb-1.5" htmlFor="quartos">Mín. Quartos</Label>
              <Select
                value={values.quartosMin}
                onValueChange={(v) => updateField("quartosMin", v)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Qualquer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full">
              <Label className="mb-1.5" htmlFor="precoMin">Preço Mínimo</Label>
              <Input
                id="precoMin"
                type="number"
                value={values.precoMin}
                onChange={(e) => updateField("precoMin", e.target.value)}
                placeholder="R$ 0"
                className="w-full"
              />
            </div>

            <div className="w-full">
              <Label className="mb-1.5" htmlFor="precoMax">Preço Máximo</Label>
              <Input
                id="precoMax"
                type="number"
                value={values.precoMax}
                onChange={(e) => updateField("precoMax", e.target.value)}
                placeholder="R$ 999.999"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button type="button" variant="outline" onClick={handleClear}>
              Limpar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

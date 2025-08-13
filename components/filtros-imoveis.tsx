"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

interface FiltrosImoveisProps {
  onFiltrar: (filtros: {
    tipoNegocio?: string
    tipoImovel?: string
    cidade?: string
    precoMin?: number
    precoMax?: number
    quartos?: number
  }) => void
}

export function FiltrosImoveis({ onFiltrar }: FiltrosImoveisProps) {
  const [filtros, setFiltros] = useState({
    tipoNegocio: "",
    tipoImovel: "",
    cidade: "",
    precoMin: "",
    precoMax: "",
    quartos: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const filtrosLimpos = {
      ...(filtros.tipoNegocio && { tipoNegocio: filtros.tipoNegocio }),
      ...(filtros.tipoImovel && { tipoImovel: filtros.tipoImovel }),
      ...(filtros.cidade && { cidade: filtros.cidade }),
      ...(filtros.precoMin && { precoMin: Number(filtros.precoMin) }),
      ...(filtros.precoMax && { precoMax: Number(filtros.precoMax) }),
      ...(filtros.quartos && { quartos: Number(filtros.quartos) }),
    }

    onFiltrar(filtrosLimpos)
  }

  const limparFiltros = () => {
    setFiltros({
      tipoNegocio: "",
      tipoImovel: "",
      cidade: "",
      precoMin: "",
      precoMax: "",
      quartos: "",
    })
    onFiltrar({})
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          Filtrar Imóveis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tipoNegocio">Tipo de Negócio</Label>
              <Select
                value={filtros.tipoNegocio}
                onValueChange={(value) => setFiltros((prev) => ({ ...prev, tipoNegocio: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venda">Venda</SelectItem>
                  <SelectItem value="aluguel">Aluguel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tipoImovel">Tipo de Imóvel</Label>
              <Select
                value={filtros.tipoImovel}
                onValueChange={(value) => setFiltros((prev) => ({ ...prev, tipoImovel: value }))}
              >
                <SelectTrigger>
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

            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                value={filtros.cidade}
                onChange={(e) => setFiltros((prev) => ({ ...prev, cidade: e.target.value }))}
                placeholder="Digite a cidade..."
              />
            </div>

            <div>
              <Label htmlFor="quartos">Mín. Quartos</Label>
              <Select
                value={filtros.quartos}
                onValueChange={(value) => setFiltros((prev) => ({ ...prev, quartos: value }))}
              >
                <SelectTrigger>
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

            <div>
              <Label htmlFor="precoMin">Preço Mínimo</Label>
              <Input
                id="precoMin"
                type="number"
                value={filtros.precoMin}
                onChange={(e) => setFiltros((prev) => ({ ...prev, precoMin: e.target.value }))}
                placeholder="R$ 0"
              />
            </div>

            <div>
              <Label htmlFor="precoMax">Preço Máximo</Label>
              <Input
                id="precoMax"
                type="number"
                value={filtros.precoMax}
                onChange={(e) => setFiltros((prev) => ({ ...prev, precoMax: e.target.value }))}
                placeholder="R$ 999.999"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button type="button" variant="outline" onClick={limparFiltros}>
              Limpar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

'use client'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";

export function Header() {

  return (
    <header
      className={`w-full absolute top-0 z-50 bg-transparent transition-all duration-300
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out w-[125px] h-[100px]`}
            >
              <Image
                src={"assets/images/ghedin.webp"}
                width={160}
                height={120}
                alt="Ghedin imóveis"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/imoveis" className="text-[#483b35] transition border-b-2 border-transparent hover:border-[#483b35]">
              Imóveis
            </Link>
            <Link href="/sobre" className="text-[#483b35] transition border-b-2 border-transparent hover:border-[#483b35]">
              Sobre
            </Link>
            <Link href="/contato" className="text-[#483b35] transition border-b-2 border-transparent hover:border-[#483b35]">
              Contato
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/imoveis">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent hover:bg-[#483b35] cursor-pointer border-[1px] border-[#483b35] hover:text-white" tabIndex={-1}>
                <Search className="h-4 w-4 mr-2" />
                Buscar Imóveis
              </Button>
            </Link>
            <Link href="/imoveis">
              <Button className="cursor-pointer bg-[#483b35] hover:bg-[#9a8167]" size="sm" tabIndex={-1}>
                <FaWhatsapp className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Fale com um consultor</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

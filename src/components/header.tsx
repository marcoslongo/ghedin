"use client"
import { useState } from "react"
import Link from "next/link"
import { Search, Menu, Heart, X } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/imoveis", label: "Imóveis" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white border-b border-[#9A8167]/15 shadow-sm">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-24">
            <Link href="/">
              <div className="py-4 px-1">
                <Image
                  src="/assets/images/ghedin.webp"
                  width={110}
                  height={85}
                  alt="Ghedin imóveis"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#483B35] tracking-wide transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#9A8167] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/imoveis" className="hidden sm:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-[#483B35] text-[#483B35] hover:bg-[#483B35] hover:text-white transition-all duration-300"
                >
                  <Search className="h-3.5 w-3.5" />
                  Buscar
                </motion.button>
              </Link>

              <Link href="/favoritos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full bg-[#9A8167] text-white hover:bg-[#483B35] transition-all duration-300"
                >
                  <Heart className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Favoritos</span>
                </motion.button>
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg text-[#483B35] hover:bg-[#F0EAE2] transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#9A8167]/20">
                <Image
                  src="/assets/images/ghedin.webp"
                  width={100}
                  height={75}
                  alt="Ghedin imóveis"
                  style={{ objectFit: "contain" }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#483B35] hover:bg-[#F0EAE2] rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 text-[#483B35] font-medium text-lg rounded-xl hover:bg-[#F0EAE2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="mt-6 pt-6 border-t border-[#9A8167]/20 flex flex-col gap-3">
                  <Link href="/imoveis" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-6 border-2 border-[#483B35] text-[#483B35] font-medium rounded-full hover:bg-[#483B35] hover:text-white transition-all">
                      <Search className="h-4 w-4" />
                      Buscar Imóveis
                    </button>
                  </Link>
                  <Link href="/favoritos" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#9A8167] text-white font-medium rounded-full hover:bg-[#483B35] transition-all">
                      <Heart className="h-4 w-4" />
                      Favoritos
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

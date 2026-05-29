"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-[#F0EAE2]">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Pronto para começar?
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#483B35] mb-6 leading-tight">
            Seu próximo imóvel está{" "}
            <span className="italic text-[#9A8167]">mais perto do que você imagina</span>
          </h2>
          <p className="text-[#483B35]/65 mb-10 max-w-xl mx-auto leading-relaxed">
            Entre em contato agora e deixe nossa equipe especializada ajudá-lo a
            encontrar o imóvel ideal, cuidando de cada detalhe com excelência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/imoveis">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#483B35] hover:bg-[#9A8167] text-white font-medium rounded-full transition-all duration-300 text-sm tracking-wide"
              >
                Explorar Imóveis
              </motion.button>
            </Link>
            <a
              href="https://wa.me/5546999370870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-[#483B35] text-[#483B35] hover:bg-[#483B35] hover:text-white font-medium rounded-full transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Falar pelo WhatsApp
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

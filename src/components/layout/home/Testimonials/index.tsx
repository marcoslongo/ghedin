"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos e Maria Silva",
    role: "Compradores de Imóvel",
    text: "A Ana nos acompanhou em cada passo da compra do nosso apartamento. Profissionalismo e atenção que fazem toda a diferença. Recomendamos de olhos fechados!",
    stars: 5,
  },
  {
    name: "Roberto Ferreira",
    role: "Investidor Imobiliário",
    text: "Trabalho com a Ghedin há 3 anos. Os laudos de avaliação são impecáveis, o que facilita muito os financiamentos. Serviço de altíssima qualidade.",
    stars: 5,
  },
  {
    name: "Juliana Costa",
    role: "Vendedora de Imóvel",
    text: "Vendi minha casa em menos de 60 dias! A estratégia de divulgação e o suporte durante toda a negociação foram excepcionais. Muito obrigada, Ana!",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#483B35]">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#F8F6F3] rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-[#9A8167]/30 mb-4" />
              <p className="text-[#483B35]/75 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-[#9A8167] fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="border-t border-[#9A8167]/20 pt-4">
                <p className="font-semibold text-[#483B35] text-sm">{t.name}</p>
                <p className="text-[#9A8167] text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

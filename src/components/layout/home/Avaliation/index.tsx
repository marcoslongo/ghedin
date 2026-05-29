"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Star, Clock, Award, MessageCircle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Toda negociação conduzida com rigor técnico e documentação completa, protegendo seu investimento.",
  },
  {
    icon: Star,
    title: "Atendimento Premium",
    description: "Acompanhamento personalizado em cada etapa, com atenção exclusiva às suas necessidades.",
  },
  {
    icon: Clock,
    title: "Agilidade no Processo",
    description: "Processos otimizados que reduzem burocracia e aceleram a realização do seu negócio.",
  },
  {
    icon: Award,
    title: "Avaliação Bancária",
    description: "Credenciada por instituições financeiras para laudos precisos e financiamentos seguros.",
  },
  {
    icon: MessageCircle,
    title: "Suporte Contínuo",
    description: "Presente desde a busca até a entrega das chaves — e além, sempre disponível.",
  },
  {
    icon: TrendingUp,
    title: "Expertise de Mercado",
    description: "8+ anos de experiência e profundo conhecimento do mercado imobiliário regional.",
  },
];

export function Avaliation() {
  return (
    <section className="py-24 bg-[#483B35] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
            O Melhor Atendimento e{" "}
            <span className="text-[#C4A882] italic">Profissionalismo</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Somos especialistas em negócios imobiliários. Nossa missão é transformar
            cada transação em uma experiência segura e satisfatória.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#9A8167]/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#9A8167]/20 flex items-center justify-center mb-4 group-hover:bg-[#9A8167]/30 transition-colors">
                <feature.icon className="h-5 w-5 text-[#C4A882]" />
              </div>
              <h3 className="font-playfair text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="https://wa.me/5546999370870?text=Ol%C3%A1%21%20Gostaria%20de%20cadastrar%20meu%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 bg-[#9A8167] hover:bg-[#C4A882] text-white font-medium rounded-full transition-all duration-300 text-sm tracking-wide">
              Anuncie seu Imóvel
            </button>
          </Link>
          <Link
            href="https://wa.me/5546999370870?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 border-2 border-white/30 hover:border-[#9A8167] text-white hover:text-[#C4A882] font-medium rounded-full transition-all duration-300 text-sm tracking-wide">
              Solicitar Avaliação
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

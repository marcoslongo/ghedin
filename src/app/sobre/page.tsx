"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Gem, CheckCircle } from "lucide-react";

const skills = [
  "Precisão técnica em avaliações e análises imobiliárias",
  "Atendimento personalizado, focado nas necessidades de cada cliente",
  "Análise de viabilidade para orientar decisões assertivas",
  "Negociação estratégica, buscando sempre as melhores condições",
  "Credenciada por bancos para avaliações de imóveis",
];

const values = [
  {
    icon: Target,
    title: "Missão",
    text: "Facilitar a realização de sonhos através de soluções imobiliárias personalizadas, com ética e transparência em cada negociação.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência no mercado imobiliário, reconhecida pela excelência no atendimento e inovação em nossos serviços.",
  },
  {
    icon: Gem,
    title: "Valores",
    text: "Integridade, comprometimento, respeito ao cliente, profissionalismo e busca constante pela excelência.",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#483B35] pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Conheça quem cuida do seu imóvel
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-white">
              Sobre a Ghedin Imóveis
            </h1>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  fill
                  alt="Ana Mattei Ghedin"
                  src="/assets/images/SOBRE.webp"
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#483B35]/20 to-transparent" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: "8+", label: "Anos" },
                  { value: "500+", label: "Negócios" },
                  { value: "5+", label: "Anos avaliadora" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F8F6F3] rounded-xl p-4 text-center border border-[#9A8167]/10"
                  >
                    <p className="font-playfair text-2xl font-bold text-[#483B35]">
                      {stat.value}
                    </p>
                    <p className="text-[#9A8167] text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full lg:w-7/12"
            >
              <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-4">
                Quem sou eu
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl text-[#483B35] mb-6 leading-tight">
                Ana Mattei Ghedin
              </h2>

              <div className="space-y-4 text-[#483B35]/70 leading-relaxed mb-8">
                <p>
                  Sou{" "}
                  <span className="font-semibold text-[#483B35]">
                    Ana Mattei Ghedin
                  </span>
                  , corretora de imóveis e engenheira civil há mais de 8 anos.
                  Minha atuação une conhecimento técnico e excelência no atendimento,
                  oferecendo aos clientes segurança em cada etapa da negociação.
                </p>
                <p>
                  Há mais de 5 anos sou credenciada por bancos para avaliações de imóveis
                  voltadas ao financiamento imobiliário, garantindo análises precisas e confiáveis.
                </p>
                <p className="text-[#483B35] font-medium">
                  Meu compromisso é transformar sonhos em conquistas com confiança, clareza e profissionalismo.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#9A8167] flex-shrink-0 mt-0.5" />
                    <span className="text-[#483B35]/70 text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://wa.me/5546999370870"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-[#483B35] hover:bg-[#9A8167] text-white font-medium rounded-full transition-all duration-300 text-sm tracking-wide">
                  Falar com Ana
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F3] py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
              Nossa Essência
            </p>
            <h2 className="font-playfair text-3xl text-[#483B35]">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 border border-[#9A8167]/10 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#9A8167]/15 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-[#9A8167]" />
                </div>
                <h3 className="font-playfair text-xl text-[#483B35] mb-3">{item.title}</h3>
                <p className="text-[#483B35]/60 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    value: "(46) 99937-0870",
    href: "https://wa.me/5546999370870",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "ghedin.imoveis@gmail.com",
    href: "mailto:ghedin.imoveis@gmail.com",
  },
  {
    icon: MapPin,
    title: "Região de Atendimento",
    value: "Realeza e região",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    value: "Seg–Sex: 9h–18h · Sáb: 9h–13h",
    href: null,
  },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <div className="bg-[#483B35] pt-28 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Estamos aqui para ajudar
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-white mb-4">
              Entre em Contato
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
              Fale conosco para encontrar o imóvel ideal, solicitar uma avaliação
              ou tirar qualquer dúvida. Respondemos com rapidez e atenção.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-[#9A8167]/10 shadow-sm"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#9A8167]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A8167]/25 transition-colors">
                      <item.icon className="h-4 w-4 text-[#9A8167]" />
                    </div>
                    <div>
                      <p className="text-[#483B35]/50 text-xs uppercase tracking-wide font-medium mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-[#483B35] text-sm font-medium group-hover:text-[#9A8167] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#9A8167]/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-[#9A8167]" />
                    </div>
                    <div>
                      <p className="text-[#483B35]/50 text-xs uppercase tracking-wide font-medium mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-[#483B35] text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            <a
              href="https://wa.me/5546999370870"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl transition-all duration-300 text-sm shadow-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar pelo WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-[#9A8167]/10 shadow-sm">
              <h2 className="font-playfair text-2xl text-[#483B35] mb-6">
                Envie uma Mensagem
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#483B35]/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">
                      Seu Nome
                    </label>
                    <Input
                      value={form.nome}
                      onChange={(e) => handleChange("nome", e.target.value)}
                      placeholder="Nome completo"
                      className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl h-11"
                    />
                  </div>
                  <div>
                    <label className="text-[#483B35]/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      placeholder="(46) 99999-9999"
                      className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl h-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#483B35]/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl h-11"
                  />
                </div>

                <div>
                  <label className="text-[#483B35]/60 text-xs uppercase tracking-wide font-medium mb-1.5 block">
                    Mensagem
                  </label>
                  <Textarea
                    value={form.mensagem}
                    onChange={(e) => handleChange("mensagem", e.target.value)}
                    placeholder="Como podemos ajudá-lo?"
                    rows={5}
                    className="border-[#9A8167]/25 text-[#483B35] focus-visible:ring-[#9A8167]/30 rounded-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#483B35] hover:bg-[#9A8167] text-white font-medium rounded-xl transition-all duration-300 text-sm tracking-wide"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 8, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Imóveis Negociados" },
  { value: 98, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 5, suffix: "+", label: "Anos como Avaliadora Bancária" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-playfair text-4xl md:text-5xl font-bold text-[#483B35]">
      {count}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-[#F8F6F3] py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#9A8167] text-xs font-medium tracking-[0.3em] uppercase mb-3">
            Nossos Números
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#483B35]">
            Experiência que Gera Confiança
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#9A8167] text-sm font-medium tracking-wide">
                {stat.label}
              </p>
              <div className="w-8 h-px bg-[#9A8167]/40 mx-auto mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

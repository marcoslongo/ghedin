"use client";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Avaliation() {
  return (
    <section className="bg-[#483b35] pt-24 pb-20">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between flex-wrap">
          <motion.div
            className="text-white w-full md:w-[33%] mb-28 md:mb-0 flex flex-col gap-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold">
              O <span className="text-[#9a8167]">MELHOR</span> <br />{" "}
              <span className="text-[#9a8167]">ATENDIMENTO</span> E{" "}
              <span className="text-[#9a8167]">PROFISSIONALISMO</span>
            </h2>
            <p className="text-lg">Somos especialistas em negócios imobiliários</p>
          </motion.div>

          <motion.div
            className="w-full md:w-[66%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <motion.div
                className="flex flex-col justify-center bg-white rounded-2xl p-4 pb-8 mb-20 md:mb-0"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="flex justify-center mt-[-70px]">
                  <motion.div
                    className="bg-white px-3 rounded-full flex border-8 border-[#ccc]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image width={96} height={116} alt="" src={"/assets/images/casa.png"} />
                  </motion.div>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h3 className="font-bold text-2xl text-[#483b35]">Anúncie seu imóvel</h3>
                  <p className="text-md text-[#9a8167] font-semibold">
                    Cadastre seu imóvel que em breve <br /> entraremos em contato.
                  </p>
                </div>
                <div className="flex flex-row gap-4 justify-center mt-2">
                  <Link href="/imoveis">
                    <Button
                      size="lg"
                      className="text-sm px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer flex items-center justify-center shadow-md"
                    >
                      Acesse
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-center bg-white rounded-2xl p-4 pb-8"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="flex justify-center mt-[-70px]">
                  <motion.div
                    className="bg-white px-3 rounded-full flex border-8 border-[#ccc]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image width={96} height={116} alt="" src={"/assets/images/busca.png"} />
                  </motion.div>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h3 className="font-bold text-2xl text-[#483b35]">Avaliamos seu imóvel</h3>
                  <p className="text-md text-[#9a8167] font-semibold">
                    Cadastre seu imóvel que em breve <br /> entraremos em contato.
                  </p>
                </div>
                <div className="flex flex-row gap-4 justify-center mt-2">
                  <Link href="/imoveis">
                    <Button
                      size="lg"
                      className="text-sm px-8 bg-[#483b35] hover:bg-[#9a8167] cursor-pointer flex items-center justify-center shadow-md"
                    >
                      Acesse
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
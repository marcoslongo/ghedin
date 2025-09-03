import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Banner() {
  return (
    <section className="bg-gradient-to-r text-white py-48 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#483b35]">Encontre o Imóvel <br /> dos <span className="text-[#9a8167]">Seus Sonhos</span></h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/imoveis">
            <Button size="lg" variant="default" className="text-lg px-8 cursor-pointer bg-[#483b35] hover:bg-[#9a8167]" tabIndex={-1}>
              Ver Todos os Imóveis
            </Button>
          </Link>
          <Link href="/contato">
            <Button
              size="lg"
              variant="default"
              className="text-lg px-8 cursor-pointer bg-[#483b35] hover:bg-[#9a8167]"
            >
              Falar com Corretor
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={"/assets/images/bg-banner.webp"}
        alt=""
        fill
        className="object-cover"
      />
    </section>
  );
}
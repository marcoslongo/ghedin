import Image from "next/image";
import { Target, Eye, Gem } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export default function Sobre() {
  return (
    <div className="flex-1 pt-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Sobre a nós
        </h1>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div className="w-full md:w-[56%] space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Sou <span className="font-semibold text-gray-900">Ana Mattei Ghedin</span>, corretora de imóveis e engenheira civil há mais de 8 anos.
              Minha atuação une conhecimento técnico e excelência no atendimento, oferecendo aos clientes
              segurança em cada etapa da negociação.
            </p>
            <p>
              Há mais de 5 anos sou credenciada por bancos para avaliações de imóveis voltadas ao
              financiamento imobiliário, garantindo análises precisas e confiáveis.
            </p>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Minhas principais habilidades incluem:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Precisão técnica em avaliações e análises;</li>
                <li>Atendimento personalizado, focado nas necessidades de cada cliente;</li>
                <li>Análise de viabilidade para orientar decisões assertivas;</li>
                <li>Negociação estratégica, buscando sempre as melhores condições.</li>
              </ul>
            </div>
            <p className="text-lg font-medium text-gray-900">
              Meu compromisso é transformar sonhos em conquistas com confiança, clareza e profissionalismo.
            </p>
          </div>
          <div className="relative w-full md:w-[40%] h-[500px] md:h-[600px]">
            <Image
              fill
              alt="Foto de Ana Mattei Ghedin"
              src="/assets/images/SOBRE.webp"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] py-4">
        <div className="container mx-auto px-4 mt-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="pt-6 shadow-md rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center">
                <Target className="h-10 w-10 mb-2 text-[#483b35]" />
                <CardTitle className="text-xl font-semibold">Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Facilitar a realização de sonhos através de soluções imobiliárias personalizadas,
                com ética e transparência em cada negociação.
              </CardContent>
            </Card>

            <Card className="pt-6 shadow-md rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center">
                <Eye className="h-10 w-10 mb-2 text-[#483b35]" />
                <CardTitle className="text-xl font-semibold">Visão</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Ser referência no mercado imobiliário, reconhecida pela excelência no atendimento
                e inovação em nossos serviços.
              </CardContent>
            </Card>
            <Card className="pt-6 shadow-md rounded-2xl">
              <CardHeader className="flex flex-col items-center text-center">
                <Gem className="h-10 w-10 mb-2 text-[#483b35]" />
                <CardTitle className="text-xl font-semibold">Valores</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Integridade, comprometimento, respeito ao cliente, profissionalismo e
                busca constante pela excelência.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

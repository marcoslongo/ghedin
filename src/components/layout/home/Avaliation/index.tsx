import Image from "next/image";

export function Avaliation() {
  return (
    <section className="bg-[#483b35] pt-24 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-white max-w-[33%] flex flex-col gap-2">
            <h2 className="text-4xl font-bold">O <span className="text-[#9a8167]">MELHOR</span> <br /> <span className="text-[#9a8167]">ATENDIMENTO</span> E <span className="text-[#9a8167]">PROFISSIONALISMO</span></h2>
            <p className="text-lg">Somos especialistas em negócios imobiliários</p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center bg-white rounded-2xl p-4 pb-8">
                <div className="flex justify-center mt-[-70px]">
                  <div className="bg-white px-3 rounded-full flex border-8 border-[#ccc]">
                    <Image
                      width={96}
                      height={116}
                      alt=""
                      src={'/assets/images/casa.png'}
                    />
                  </div>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h3 className="font-bold text-2xl text-[#483b35]">Anúncie seu imóvel</h3>
                  <p className="text-md text-[#9a8167] font-semibold">Cadastre seu imóvel que em breve <br /> entraremos em contato.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-white rounded-2xl p-4 pb-8">
                <div className="flex justify-center mt-[-70px]">
                  <div className="bg-white px-3 rounded-full flex border-8 border-[#ccc]">
                    <Image
                      width={96}
                      height={116}
                      alt=""
                      src={'/assets/images/busca.png'}
                    />
                  </div>
                </div>
                <div className="text-center flex flex-col gap-1">
                  <h3 className="font-bold text-2xl text-[#483b35]">Avaliamos seu imóvel</h3>
                  <p className="text-md text-[#9a8167] font-semibold">Cadastre seu imóvel que em breve entraremos em contato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
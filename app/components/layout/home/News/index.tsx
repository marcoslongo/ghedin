'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

export default function News() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center flex flex-col gap-2 justify-center items-center">
          <h2 className="text-3xl font-bold uppercase text-[#483b35]">Lançamentos</h2>
          <div className="w-[120px] h-[4px] bg-[#9a8167]"></div>
          <p className="text-[#7d7d7d]">Confira nossos últimos lançamentos</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="mt-8"
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Card() {
  return (
    <Link className="block overflow-hidden rounded-md shadow-md" href={"#"}>
      <figure className="bg-white">
        <div className="h-72 relative">
          <Image
            src={'/assets/images/temp-imovel.jpg'}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="p-5 bg-[#483b35] w-full flex flex-col gap-3">
          <div>
            <h2 className="text-xl font-bold text-white">Casa alto padrão</h2>
            <p className="text-xl text-white font-bold">Centro - Realeza - PR</p>
          </div>
          <ul className="flex justify-between">
            <ItemCard title={"700"} subtitle={"m2"} />
            <ItemCard title={"4"} subtitle={"Quartos"} />
            <ItemCard title={"2"} subtitle={"Banheiros"} />
            <ItemCard title={"1"} subtitle={"Vagas"} />
          </ul>
        </figcaption>
      </figure>
    </Link>
  );
}

interface ItemCardProps {
  title: string;
  subtitle: string;
}

function ItemCard({ title, subtitle }: ItemCardProps) {
  return (
    <li className="flex flex-col gap-1 text-white font-bold text-center">
      <span className="text-xl">{title}</span>
      <span className="text-lg">{subtitle}</span>
    </li>
  );
}

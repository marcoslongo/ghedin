import { Filter } from "@/app/components/Filter";
import Image from "next/image";

export function Banner() {
	return (
		<section className="relative flex flex-col gap-14 justify-center items-center h-[840px]">
			<div className="container flex justify-center items-center">
				<div className="max-w-[500px] flex justify-center items-center relative z-10">
					<h1 className="text-7xl text-center font-bold text-[#483b35]">Encontre imóveis bem perto de <span className="text-[#9a8167]">você</span>.</h1>
				</div>
			</div>
			<Filter />
			<Image
				fill
				src={'/assets/images/bg-banner.webp'}
				className="object-cover"
				alt=""
			/>
		</section>
	);
}
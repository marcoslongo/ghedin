import Link from "next/link";
import Image from "next/image";
export function Header() {
	return (
		<header className="fixed w-full z-20 mt-3">
			<div className="container">
				<div className="flex justify-between items-center">
					<Link href={'/'} aria-label="Logo Ghedin">
						<Image
							src={"/assets/images/ghedin.webp"}
							width={200}
							height={126}
							alt=""
						/>
					</Link>
					<nav>
						<ul className="flex gap-4">
							<LinkMenu url={""}>Comprar</LinkMenu>
							<LinkMenu url={""}>Alugar</LinkMenu>
							<LinkMenu url={""}>Empreendimentos</LinkMenu>
							<LinkMenu url={""}>Contato</LinkMenu>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

interface LinkMenuProps {
	url: string;
	children: React.ReactNode;
}

function LinkMenu({ url, children }: LinkMenuProps) {
	return (
		<li className="text-[#9a8167] hover:bg-[#483b35] hover:text-white transition rounded"><Link className="py-2 px-4 block font-semibold text-lg" href={url}>{children}</Link></li>
	);
}
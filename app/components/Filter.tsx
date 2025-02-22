import * as React from "react"
import { Button } from "@/components/ui/button"


import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export function Filter() {
	return (
		<div className="relative z-10 bg-white p-7 rounded-xl shadow-sm flex flex-col md:flex-row gap-3">
			<Select>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Pretenção" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="Comprar">Comprar</SelectItem>
						<SelectItem value="Alugar">Alugar</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Tipo do Imóvel" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Cidade" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Bairro" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Button className="bg-[#483b35] font-bold" aria-label="Botão Encontrar Imóvel">
				Encontrar Imóvel
			</Button>
		</div>
	)
}
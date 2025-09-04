import { notFound } from "next/navigation"
import { getImovelBySlug } from "@/src/services/GetImovelBySlug"
import ImovelClient from "@/src/components/layout/imoveis/ImovelClient"

interface ImovelPageProps {
  params: {
    slug: string
  }
}

export default async function ImovelPage({ params }: ImovelPageProps) {
  const response = await getImovelBySlug(params.slug)
  const imovel = response?.imovelBy
  if (!imovel) notFound()

  return <ImovelClient imovel={imovel} />
}

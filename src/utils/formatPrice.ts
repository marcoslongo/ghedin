export function formatPrice(preco: number): string {
  if (!preco || preco === 0) return "Consulte"

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(preco)
}
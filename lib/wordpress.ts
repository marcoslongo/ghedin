// GraphQL client para WordPress headless - Apenas Imóveis
const WORDPRESS_API_URL = "http://ghedin.com.test/graphql"

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{ message: string }>
}

export async function fetchGraphQL<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const response = await fetch(WORDPRESS_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const json: GraphQLResponse<T> = await response.json()

  if (json.errors) {
    throw new Error(json.errors.map((error) => error.message).join(", "))
  }

  return json.data
}

// Tipos TypeScript para WordPress
export interface Page {
  id: string
  title: string
  content: string
  slug: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
}

export interface AcfImoveis {
  areaConstruida: number
  areaTotal: number
  bairro: string
  banheiros: number
  caracteristicas: string[]
  cep: string
  cidade: string
  condominio: number
  destaque: boolean
  endereco: string
  iptu: number
  preco: number
  quartos: number
  statusImovel: string
  suites: number
  tipoImovel: string
  tipoNegocio: string
  vagasGaragem: number
  videoYoutube: string
}

export interface Imovel {
  id: string
  title: string
  content: string
  slug: string
  acfImoveis: AcfImoveis
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
}

// Queries GraphQL
export const GET_PAGES_QUERY = `
  query GetPages {
    pages {
      nodes {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

export const GET_IMOVEIS_QUERY = `
  query GetImoveis($first: Int = 10) {
    imoveis(first: $first) {
      nodes {
        id
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        acfImoveis {
          areaConstruida
          areaTotal
          bairro
          banheiros
          caracteristicas
          cep
          cidade
          condominio
          destaque
          endereco
          iptu
          preco
          quartos
          statusImovel
          suites
          tipoImovel
          tipoNegocio
          vagasGaragem
          videoYoutube
        }
      }
    }
  }
`

export const GET_IMOVEL_BY_SLUG_QUERY = `
  query GetImovelBySlug($slug: String!) {
    imovelBy(slug: $slug) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      acfImoveis {
        areaConstruida
        areaTotal
        bairro
        banheiros
        caracteristicas
        cep
        cidade
        condominio
        destaque
        endereco
        iptu
        preco
        quartos
        statusImovel
        suites
        tipoImovel
        tipoNegocio
        vagasGaragem
        videoYoutube
      }
    }
  }
`

// Funções helper
export async function getPages() {
  const data = await fetchGraphQL<{ pages: { nodes: Page[] } }>(GET_PAGES_QUERY)
  return data.pages.nodes
}

export async function getImoveis(first = 10) {
  const data = await fetchGraphQL<{ imoveis: { nodes: Imovel[] } }>(GET_IMOVEIS_QUERY, { first })
  return data
}

export async function getImovelBySlug(slug: string) {
  const data = await fetchGraphQL<{ imovelBy: Imovel }>(GET_IMOVEL_BY_SLUG_QUERY, { slug })
  return data.imovelBy
}

export async function getImoveisFiltrados(filtros: {
  tipoNegocio?: string
  tipoImovel?: string
  cidade?: string
  precoMin?: number
  precoMax?: number
  quartos?: number
}) {
  // Por simplicidade, retornando todos os imóveis
  // Em uma implementação real, você construiria uma query GraphQL com filtros
  const data = await fetchGraphQL<{ imoveis: { nodes: Imovel[] } }>(GET_IMOVEIS_QUERY, { first: 50 })

  // Filtrar no lado do cliente (idealmente seria no GraphQL)
  let imoveisFiltrados = data.imoveis.nodes

  if (filtros.tipoNegocio) {
    imoveisFiltrados = imoveisFiltrados.filter(
      (imovel) => imovel.acfImoveis.tipoNegocio.toLowerCase() === filtros.tipoNegocio!.toLowerCase(),
    )
  }

  if (filtros.tipoImovel) {
    imoveisFiltrados = imoveisFiltrados.filter(
      (imovel) => imovel.acfImoveis.tipoImovel.toLowerCase() === filtros.tipoImovel!.toLowerCase(),
    )
  }

  if (filtros.cidade) {
    imoveisFiltrados = imoveisFiltrados.filter((imovel) =>
      imovel.acfImoveis.cidade.toLowerCase().includes(filtros.cidade!.toLowerCase()),
    )
  }

  if (filtros.precoMin) {
    imoveisFiltrados = imoveisFiltrados.filter((imovel) => imovel.acfImoveis.preco >= filtros.precoMin!)
  }

  if (filtros.precoMax) {
    imoveisFiltrados = imoveisFiltrados.filter((imovel) => imovel.acfImoveis.preco <= filtros.precoMax!)
  }

  if (filtros.quartos) {
    imoveisFiltrados = imoveisFiltrados.filter((imovel) => imovel.acfImoveis.quartos >= filtros.quartos!)
  }

  return { imoveis: { nodes: imoveisFiltrados } }
}

export function formatarPreco(preco: number): string {
  if (!preco || preco === 0) return "Consulte"

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(preco)
}
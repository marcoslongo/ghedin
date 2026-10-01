import type { MetadataRoute } from "next"
import { executeQuery } from "@/src/lib/urql-client"
import { SITE_URL } from "@/src/lib/seo"

export const revalidate = 3600

const query = `
  query GetImoveisSitemap($after: String) {
    imoveis(first: 100, after: $after) {
      nodes {
        slug
        modifiedGmt
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

type SitemapQuery = {
  imoveis: {
    nodes: { slug: string; modifiedGmt: string }[]
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  }
}

async function getImoveisSlugs() {
  const imoveis: SitemapQuery["imoveis"]["nodes"] = []
  let after: string | null = null

  do {
    const data: SitemapQuery = await executeQuery<SitemapQuery>(query, { after })
    imoveis.push(...data.imoveis.nodes)
    after = data.imoveis.pageInfo.hasNextPage ? data.imoveis.pageInfo.endCursor : null
  } while (after)

  return imoveis
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/imoveis`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/sobre`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contato`, changeFrequency: "monthly", priority: 0.5 },
  ]

  try {
    const imoveis = await getImoveisSlugs()

    return [
      ...staticRoutes,
      ...imoveis.map((imovel) => ({
        url: `${SITE_URL}/imoveis/${imovel.slug}`,
        lastModified: new Date(`${imovel.modifiedGmt}Z`),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ]
  } catch {
    return staticRoutes
  }
}

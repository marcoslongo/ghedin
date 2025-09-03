import { Client, cacheExchange, fetchExchange } from 'urql'

const WORDPRESS_API_URL = 'https://cms.ghedinimoveis.com.br/graphql'

export const urqlClient = new Client({
  url: WORDPRESS_API_URL,
  exchanges: [cacheExchange, fetchExchange],
})

export async function executeQuery<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const result = await urqlClient.query(query, variables).toPromise()
  
  if (result.error) {
    throw new Error(result.error.message)
  }
  
  if (!result.data) {
    throw new Error('Nenhum dado retornado')
  }
  
  return result.data as T
}
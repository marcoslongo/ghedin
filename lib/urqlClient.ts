import { createClient } from 'urql';
import { cacheExchange, fetchExchange } from '@urql/core';

const GRAPHQL_URL = 'http://ghedin.com.test/graphql';

export const urqlClient = createClient({
  url: GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
});
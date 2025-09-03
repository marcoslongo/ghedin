/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query GetImoveis($first: Int = 6) {\n  imoveis(first: $first) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        galeriaFotos {\n          nodes {\n            mediaItemUrl\n          }\n        }\n        areaConstruida\n        areaTotal\n        bairro\n        banheiros\n        caracteristicas\n        cep\n        cidade\n        condominio\n        destaque\n        endereco\n        iptu\n        preco\n        quartos\n        statusImovel\n        suites\n        tipoImovel\n        tipoNegocio\n        vagasGaragem\n        videoYoutube\n      }\n    }\n  }\n}": typeof types.GetImoveisDocument,
    "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}": typeof types.GetImovelBySlugDocument,
};
const documents: Documents = {
    "query GetImoveis($first: Int = 6) {\n  imoveis(first: $first) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        galeriaFotos {\n          nodes {\n            mediaItemUrl\n          }\n        }\n        areaConstruida\n        areaTotal\n        bairro\n        banheiros\n        caracteristicas\n        cep\n        cidade\n        condominio\n        destaque\n        endereco\n        iptu\n        preco\n        quartos\n        statusImovel\n        suites\n        tipoImovel\n        tipoNegocio\n        vagasGaragem\n        videoYoutube\n      }\n    }\n  }\n}": types.GetImoveisDocument,
    "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}": types.GetImovelBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetImoveis($first: Int = 6) {\n  imoveis(first: $first) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        galeriaFotos {\n          nodes {\n            mediaItemUrl\n          }\n        }\n        areaConstruida\n        areaTotal\n        bairro\n        banheiros\n        caracteristicas\n        cep\n        cidade\n        condominio\n        destaque\n        endereco\n        iptu\n        preco\n        quartos\n        statusImovel\n        suites\n        tipoImovel\n        tipoNegocio\n        vagasGaragem\n        videoYoutube\n      }\n    }\n  }\n}"): (typeof documents)["query GetImoveis($first: Int = 6) {\n  imoveis(first: $first) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        galeriaFotos {\n          nodes {\n            mediaItemUrl\n          }\n        }\n        areaConstruida\n        areaTotal\n        bairro\n        banheiros\n        caracteristicas\n        cep\n        cidade\n        condominio\n        destaque\n        endereco\n        iptu\n        preco\n        quartos\n        statusImovel\n        suites\n        tipoImovel\n        tipoNegocio\n        vagasGaragem\n        videoYoutube\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}"): (typeof documents)["query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
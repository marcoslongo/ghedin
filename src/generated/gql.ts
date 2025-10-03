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
    "query GetDynamicImoveis($first: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String) {\n  imoveis(\n    first: $first\n    where: {metaQuery: {relation: AND, metaArray: [{key: \"preco\", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"preco\", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"quartos\", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"status_imovel\", value: $status, compare: EQUAL_TO}, {key: \"cidade\", value: $cidade, compare: EQUAL_TO}, {key: \"bairro\", value: $bairro, compare: EQUAL_TO}, {key: \"tipo_imovel\", value: $tipoImovel, compare: EQUAL_TO}, {key: \"tipo_negocio\", value: $tipoNegocio, compare: EQUAL_TO}]}}\n  ) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        areaConstruida\n        vagasGaragem\n        referenciaImovel\n        preco\n        quartos\n        statusImovel\n        bairro\n        cidade\n        condominio\n        caracteristicas\n        tipoImovel\n        tipoNegocio\n        destaque\n        banheiros\n        areaTotal\n      }\n    }\n  }\n}": typeof types.GetDynamicImoveisDocument,
    "query GetFilters {\n  cidadeImovels {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}": typeof types.GetFiltersDocument,
    "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      galeriaFotos {\n        nodes {\n          mediaItemUrl\n        }\n      }\n      sobreOImoveil\n      testada\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}": typeof types.GetImovelBySlugDocument,
};
const documents: Documents = {
    "query GetDynamicImoveis($first: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String) {\n  imoveis(\n    first: $first\n    where: {metaQuery: {relation: AND, metaArray: [{key: \"preco\", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"preco\", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"quartos\", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"status_imovel\", value: $status, compare: EQUAL_TO}, {key: \"cidade\", value: $cidade, compare: EQUAL_TO}, {key: \"bairro\", value: $bairro, compare: EQUAL_TO}, {key: \"tipo_imovel\", value: $tipoImovel, compare: EQUAL_TO}, {key: \"tipo_negocio\", value: $tipoNegocio, compare: EQUAL_TO}]}}\n  ) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        areaConstruida\n        vagasGaragem\n        referenciaImovel\n        preco\n        quartos\n        statusImovel\n        bairro\n        cidade\n        condominio\n        caracteristicas\n        tipoImovel\n        tipoNegocio\n        destaque\n        banheiros\n        areaTotal\n      }\n    }\n  }\n}": types.GetDynamicImoveisDocument,
    "query GetFilters {\n  cidadeImovels {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}": types.GetFiltersDocument,
    "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      galeriaFotos {\n        nodes {\n          mediaItemUrl\n        }\n      }\n      sobreOImoveil\n      testada\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}": types.GetImovelBySlugDocument,
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
export function graphql(source: "query GetDynamicImoveis($first: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String) {\n  imoveis(\n    first: $first\n    where: {metaQuery: {relation: AND, metaArray: [{key: \"preco\", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"preco\", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"quartos\", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"status_imovel\", value: $status, compare: EQUAL_TO}, {key: \"cidade\", value: $cidade, compare: EQUAL_TO}, {key: \"bairro\", value: $bairro, compare: EQUAL_TO}, {key: \"tipo_imovel\", value: $tipoImovel, compare: EQUAL_TO}, {key: \"tipo_negocio\", value: $tipoNegocio, compare: EQUAL_TO}]}}\n  ) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        areaConstruida\n        vagasGaragem\n        referenciaImovel\n        preco\n        quartos\n        statusImovel\n        bairro\n        cidade\n        condominio\n        caracteristicas\n        tipoImovel\n        tipoNegocio\n        destaque\n        banheiros\n        areaTotal\n      }\n    }\n  }\n}"): (typeof documents)["query GetDynamicImoveis($first: Int, $precoMin: String, $precoMax: String, $quartosMin: String, $status: String, $cidade: String, $bairro: String, $tipoImovel: String, $tipoNegocio: String) {\n  imoveis(\n    first: $first\n    where: {metaQuery: {relation: AND, metaArray: [{key: \"preco\", value: $precoMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"preco\", value: $precoMax, compare: LESS_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"quartos\", value: $quartosMin, compare: GREATER_THAN_OR_EQUAL_TO, type: NUMERIC}, {key: \"status_imovel\", value: $status, compare: EQUAL_TO}, {key: \"cidade\", value: $cidade, compare: EQUAL_TO}, {key: \"bairro\", value: $bairro, compare: EQUAL_TO}, {key: \"tipo_imovel\", value: $tipoImovel, compare: EQUAL_TO}, {key: \"tipo_negocio\", value: $tipoNegocio, compare: EQUAL_TO}]}}\n  ) {\n    nodes {\n      id\n      title\n      slug\n      featuredImage {\n        node {\n          sourceUrl\n          altText\n        }\n      }\n      acfImoveis {\n        areaConstruida\n        vagasGaragem\n        referenciaImovel\n        preco\n        quartos\n        statusImovel\n        bairro\n        cidade\n        condominio\n        caracteristicas\n        tipoImovel\n        tipoNegocio\n        destaque\n        banheiros\n        areaTotal\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetFilters {\n  cidadeImovels {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetFilters {\n  cidadeImovels {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      galeriaFotos {\n        nodes {\n          mediaItemUrl\n        }\n      }\n      sobreOImoveil\n      testada\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}"): (typeof documents)["query GetImovelBySlug($slug: String!) {\n  imovelBy(slug: $slug) {\n    id\n    title\n    slug\n    featuredImage {\n      node {\n        sourceUrl\n        altText\n      }\n    }\n    acfImoveis {\n      galeriaFotos {\n        nodes {\n          mediaItemUrl\n        }\n      }\n      sobreOImoveil\n      testada\n      areaConstruida\n      areaTotal\n      bairro\n      banheiros\n      caracteristicas\n      cep\n      cidade\n      condominio\n      destaque\n      endereco\n      iptu\n      preco\n      quartos\n      statusImovel\n      suites\n      tipoImovel\n      tipoNegocio\n      vagasGaragem\n      videoYoutube\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
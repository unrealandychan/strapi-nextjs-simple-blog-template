import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query Articles {
    articles {
      documentId
      title
      description
      slug
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($documentId: ID!) {
    article(documentId: $documentId) {
      documentId
      title
      description
      slug
      createdAt
      updatedAt
      publishedAt
      author {
        documentId
        name
        email
      }
      cover {
        documentId
        name
        alternativeText
        caption
        width
        height
        url
        formats
      }
      category {
        documentId
        name
        slug
        description
      }
      blocks {
        __typename
        ... on ComponentSharedRichText {
          id
          body
        }
        ... on ComponentSharedQuote {
          id
          title
          body
        }
        ... on ComponentSharedMedia {
          id
          file {
            documentId
            name
            alternativeText
            url
            width
            height
          }
        }
      }
    }
  }
`;

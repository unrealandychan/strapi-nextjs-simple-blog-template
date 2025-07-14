import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query Products {
    products {
      documentId
      Name
      Description
      Price
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($documentId: ID!) {
    product(documentId: $documentId) {
      documentId
      Name
      Description
      Price
      createdAt
      updatedAt
      publishedAt
    }
  }
`;

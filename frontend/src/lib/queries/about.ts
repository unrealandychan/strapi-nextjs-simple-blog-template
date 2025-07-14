import { gql } from '@apollo/client';

export const GET_ABOUT_DATA = gql`
query About {
    about {
        documentId
        title
        createdAt
        updatedAt
        publishedAt
        blocks {
            ... on ComponentSharedCard {
                id
                Title
                Description
                image {
                    documentId
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                    publishedAt
                }
            }
        }
    }
}
`;

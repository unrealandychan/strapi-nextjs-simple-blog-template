import { gql } from '@apollo/client';

// Query to fetch global site data including site description, favicon, and SEO
export const GET_GLOBAL_DATA = gql`
query Global {
    global {
        documentId
        siteName
        siteDescription
        createdAt
        updatedAt
        publishedAt
        favicon {
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
        defaultSeo {
            id
            metaTitle
            metaDescription
            shareImage {
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

`;

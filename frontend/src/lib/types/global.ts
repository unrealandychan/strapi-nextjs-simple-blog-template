// Type definitions for global site data based on Strapi schema

export interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
}

export interface MediaAttributes {
  documentId: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: MediaFormat;
    medium?: MediaFormat;
    small?: MediaFormat;
    thumbnail?: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface SEO {
  id: string;
  metaTitle: string;
  metaDescription: string;
  shareImage?: MediaAttributes;
}

export interface GlobalData {
  documentId: string;
  siteName: string;
  siteDescription: string;
  favicon?: MediaAttributes;
  defaultSeo?: SEO;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface GlobalResponse {
  global: GlobalData;
}

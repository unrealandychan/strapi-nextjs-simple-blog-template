export interface Author {
  documentId: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface MediaFormats {
  large?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
  medium?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
  small?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
  thumbnail?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
}

export interface Cover {
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  related: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  documentId: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Block component types
export interface ComponentSharedRichText {
  id: string;
  body: string;
  __typename: 'ComponentSharedRichText';
}

export interface ComponentSharedQuote {
  id: string;
  title: string;
  body: string;
  __typename: 'ComponentSharedQuote';
}

export interface ComponentSharedMedia {
  id: string;
  file: Cover;
  __typename: 'ComponentSharedMedia';
}

export interface ComponentSharedSlider {
  id: string;
  files: Cover[];
  __typename: 'ComponentSharedSlider';
}

export interface Article {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author?: Author;
  cover?: Cover;
  category?: Category;
  blocks?: (ComponentSharedRichText | ComponentSharedQuote | ComponentSharedMedia)[];
}

export interface ArticlesResponse {
  articles: Article[];
}

export interface ArticleResponse {
  article: Article;
}

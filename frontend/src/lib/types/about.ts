// Type definitions for about page data based on Strapi schema

import { MediaAttributes } from './global';

export interface ComponentSharedCard {
  id: string;
  Title: string;
  Description: string;
  image?: MediaAttributes;
}

export interface About {
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: ComponentSharedCard[];
}

export interface AboutResponse {
  about: About;
}

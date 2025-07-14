export interface Product {
  documentId: string;
  Name: string;
  Description: string;
  Price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductResponse {
  product: Product;
}

'use client';

import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/lib/queries/product';
import { ProductsResponse } from '@/lib/types/product';
import Link from 'next/link';

export default function Products() {
  const { loading, error, data } = useQuery<ProductsResponse>(GET_PRODUCTS);

  if (loading) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Products</h1>
          <p className="hero-subtitle">Discover our amazing products</p>
        </div>

        <section className="products-grid">
          {/* Loading skeleton */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="product-card loading">
              <div className="product-content">
                <div className="loading-line title"></div>
                <div className="loading-line subtitle"></div>
                <div className="loading-line description"></div>
                <div className="loading-line price"></div>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Products</h1>
          <p className="hero-subtitle">Something went wrong</p>
        </div>

        <div className="error-message">
          <h3>Unable to load products</h3>
          <p>Please try again later or contact support if the problem persists.</p>
          <button
            className="button button-primary"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  const products = data?.products || [];

  return (
    <main className="main-content">
      <div className="hero-section">
        <h1 className="hero-title">Products</h1>
        <p className="hero-subtitle">
          {products.length} product{products.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Check back later for new products!</p>
        </div>
      ) : (
        <section className="products-grid">
          {products.map((product) => (
            <Link
              key={product.documentId}
              href={`/product/${product.documentId}`}
              className="product-card"
            >
              <div className="product-content">
                <h3 className="product-name">{product.Name}</h3>

                {product.Description && (
                  <p className="product-description">
                    {product.Description}
                  </p>
                )}

                <div className="product-price">
                  ${product.Price.toFixed(2)}
                </div>

                <div className="product-meta">
                  <span className="product-date">
                    Added {new Date(product.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

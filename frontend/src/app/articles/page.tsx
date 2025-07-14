'use client';

import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '@/lib/queries/article';
import { ArticlesResponse } from '@/lib/types/article';
import Link from 'next/link';

export default function Articles() {
  const { loading, error, data } = useQuery<ArticlesResponse>(GET_ARTICLES);

  if (loading) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Articles</h1>
          <p className="hero-subtitle">Exploring ideas, sharing insights</p>
        </div>

        <section className="articles-grid">
          {/* Loading skeleton */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="article-card loading">
              <div className="article-content">
                <div className="loading-line title"></div>
                <div className="loading-line subtitle"></div>
                <div className="loading-line description"></div>
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
          <h1 className="hero-title">Articles</h1>
          <p className="hero-subtitle">Something went wrong</p>
        </div>

        <div className="error-message">
          <h3>Unable to load articles</h3>
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

  const articles = data?.articles || [];

  return (
    <main className="main-content">
      <div className="hero-section">
        <h1 className="hero-title">Articles</h1>
        <p className="hero-subtitle">
          {articles.length} article{articles.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="empty-state">
          <h3>No articles found</h3>
          <p>Check back later for new content!</p>
        </div>
      ) : (
        <section className="articles-grid">
          {articles.map((article) => (
            <Link
              key={article.documentId}
              href={`/article/${article.documentId}`}
              className="article-card"
            >
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-date">
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="article-title">{article.title}</h3>

                {article.description && (
                  <p className="article-description">
                    {article.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

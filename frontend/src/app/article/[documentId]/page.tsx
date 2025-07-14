'use client';

import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { GET_ARTICLE } from '@/lib/queries/article';
import { ArticleResponse } from '@/lib/types/article';
import Image from 'next/image';

export default function ArticleDetail() {
  const params = useParams();
  const documentId = params.documentId as string;

  const { loading, error, data } = useQuery<ArticleResponse>(GET_ARTICLE, {
    variables: { documentId }
  });

  // Calculate reading time estimate
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  if (loading) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <div className="loading-line title"></div>
          <div className="loading-line subtitle"></div>
        </div>
        <div className="article-detail-content">
          <div className="loading-line description"></div>
          <div className="loading-line description"></div>
          <div className="loading-line description"></div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Article Not Found</h1>
          <p className="hero-subtitle">The article you're looking for doesn't exist.</p>
        </div>
        <div className="error-message">
          <button
            className="button button-primary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const article = data?.article;

  if (!article) {
    return (
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Article Not Found</h1>
          <p className="hero-subtitle">The article you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  const publishDate = new Date(article.publishedAt);
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculate reading time from content blocks
  const totalText = article.blocks?.reduce((acc, block) => {
    if (block.__typename === 'ComponentSharedRichText') {
      return acc + block.body;
    }
    if (block.__typename === 'ComponentSharedQuote') {
      return acc + block.body;
    }
    return acc;
  }, '') || article.description || '';

  const readingTime = calculateReadingTime(totalText);

  return (
    <main className="main-content">
      {/* Hero Section */}
      <div className="hero-section">
        {article.category && (
          <div className="article-category">{article.category.name}</div>
        )}

        <h1 className="hero-title">{article.title}</h1>

        {article.description && (
          <p className="hero-subtitle">{article.description}</p>
        )}

        <div className="article-meta">
          <div className="article-meta-row">
            {article.author && (
              <span className="article-author">By {article.author.name}</span>
            )}
            <span className="article-date">{formattedDate}</span>
            <span className="reading-time">{readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {article.cover && (
        <div className="article-cover">
          <Image
            src={article.cover.url}
            alt={article.cover.alternativeText || article.title}
            width={article.cover.width}
            height={article.cover.height}
            className="cover-image"
            priority
          />
          {article.cover.caption && (
            <figcaption className="cover-caption">
              {article.cover.caption}
            </figcaption>
          )}
        </div>
      )}

      {/* Article Content */}
      <div className="article-detail-content">
        {article.blocks && article.blocks.length > 0 ? (
          article.blocks.map((block) => {
            switch (block.__typename) {
              case 'ComponentSharedRichText':
                return (
                  <div
                    key={block.id}
                    className="content-block rich-text"
                    dangerouslySetInnerHTML={{ __html: block.body }}
                  />
                );

              case 'ComponentSharedQuote':
                return (
                  <blockquote key={block.id} className="content-block quote-block">
                    {block.title && <cite className="quote-title">{block.title}</cite>}
                    <p className="quote-body">{block.body}</p>
                  </blockquote>
                );

              case 'ComponentSharedMedia':
                return (
                  <figure key={block.id} className="content-block media-block">
                    <Image
                      src={block.file.url}
                      alt={block.file.alternativeText || ''}
                      width={block.file.width}
                      height={block.file.height}
                      className="media-image"
                    />
                  </figure>
                );

              default:
                return null;
            }
          })
        ) : (
          <div className="empty-state">
            <h3>Content Coming Soon</h3>
            <p>This article is currently being prepared. Check back later for the full content!</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="article-navigation">
        <button
          className="button button-secondary"
          onClick={() => window.history.back()}
        >
          ← Back to Articles
        </button>
      </div>
    </main>
  );
}

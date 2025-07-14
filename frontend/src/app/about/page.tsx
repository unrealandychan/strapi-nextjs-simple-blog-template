'use client';

import { useAboutData } from '@/lib/hooks/useAboutData';
import Card from '@/component/card';

export default function About() {
  const { title, blocks, loading, error } = useAboutData();

  if (loading) {
    return (
      <main className="main-content">
        <section className="section">
          <div>Loading...</div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <section className="section">
          <div>Error loading about page data</div>
        </section>
      </main>
    );
  }

  return (
    <main className="main-content">
      <section className="section">
        <h1 className="section-title">{title || 'About Our Platform'}</h1>

        <div className="cards-grid">
          {blocks.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h1 className="hero-title">
          Think different.
          <br />
          Blog different.
        </h1>
        <p className="hero-subtitle">
          A modern blogging platform that combines beautiful design with outstanding performance.
          Create, share, and inspire with Eddie's Blog.
        </p>
        <div className="cta-buttons">
          <Link href="/articles" className="button button-primary">
            Explore Articles
          </Link>
          <Link href="/about" className="button button-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Designed for creators</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Lifestyle</h3>
            <p>Productivity tips, wellness trends, and creative ideas that inspire a better life.</p>
          </div>
          <div className="card">
            <h3>Technology</h3>
            <p>The latest in tech, development insights, and digital innovation.</p>
          </div>
          <div className="card">
            <h3>Design</h3>
            <p>Beautiful interfaces, user experiences, and design thinking.</p>
          </div>
          <div className="card">
            <h3>Business</h3>
            <p>Strategy, entrepreneurship, and insights for modern business.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Built for everyone</h2>
        <ul className="features-list">
          <li><span className="checkmark">✓</span> Clean, Apple-inspired design</li>
          <li><span className="checkmark">✓</span> Lightning-fast performance</li>
          <li><span className="checkmark">✓</span> Mobile-first responsive</li>
          <li><span className="checkmark">✓</span> SEO optimized</li>
        </ul>
      </section>
    </main>
  );
}
import { featureCards } from '../data/siteContent';

export function FeaturesSection() {
  return (
    <section id="features" className="content-section">
      <div className="section-copy">
        <p className="section-kicker">Features</p>
        <h2 className="section-title">A focused daily Scripture experience.</h2>
        <p className="section-text">
          Designed to stay simple, strong, and useful. No clutter. No endless menus. Just daily
          Scripture, focused topics, and tools that help you stay consistent.
        </p>
      </div>

      <div className="card-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="info-card">
            <h3 className="info-card__title">{card.title}</h3>
            <p className="info-card__text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

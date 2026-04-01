import { homePageContent } from '../data/siteContent';

export function AboutSection() {
  return (
    <section id="about" className="content-section">
      <div className="about-grid">
        <div className="section-copy">
          <p className="section-kicker">About</p>
          <h2 className="section-title">{homePageContent.aboutTitle}</h2>
          <p className="section-text">{homePageContent.aboutText}</p>
        </div>

        <aside className="mission-card">
          <p className="mission-card__label">Mission</p>
          <p className="mission-card__text">{homePageContent.missionQuote}</p>
          <p className="mission-card__reference">{homePageContent.missionReference}</p>
        </aside>
      </div>
    </section>
  );
}

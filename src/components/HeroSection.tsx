import { dailyWord, featurePreviewItems } from '../data/siteContent';

type HeroSectionProps = {
  onNavigate: (href: string) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero" aria-label="Introduction">
      <div>
        <p className="pill">Daily scripture for discipline</p>
        <h1 className="hero__title">Build strength through Scripture.</h1>
        <p className="hero__text">
          Iron & Proverbs is a clean, focused Bible app for men who want daily verses, practical
          challenges, and encouragement rooted in courage, discipline, leadership, and faith.
        </p>

        <div className="hero__actions">
          <a
            href="https://play.google.com/store/apps/details?id=com.ironandproverbs.app"
            className="button button--primary"
          >
            View on Google Play
          </a>
          <a
            href="#features"
            className="button button--secondary"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('#features');
            }}
          >
            Explore Features
          </a>
        </div>

        <div className="feature-preview-grid">
          {featurePreviewItems.map((item) => (
            <article key={item.title} className="feature-preview-card">
              <p className="feature-preview-card__title">{item.title}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="phone-shell-wrap">
        <div className="phone-shell">
          <div className="phone-shell__inner">
            <div className="phone-shell__header">
              <p className="phone-shell__label">{dailyWord.label}</p>
              <span className="phone-shell__badge">{dailyWord.badge}</span>
            </div>

            <blockquote className="phone-shell__quote">{dailyWord.quote}</blockquote>
            <p className="phone-shell__reference">{dailyWord.reference}</p>

            <div className="phone-shell__challenge">
              <p className="phone-shell__challenge-title">{dailyWord.challengeTitle}</p>
              <p>{dailyWord.challengeText}</p>
            </div>

            <div className="phone-shell__actions">
              <div className="phone-shell__secondary-action">Save Verse</div>
              <div className="phone-shell__primary-action">Share Card</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

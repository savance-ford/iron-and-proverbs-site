import { Link, useLocation, useNavigate } from 'react-router-dom';
import { appStoreUrl, dailyWord, featurePreviewItems, homePageContent } from '../data/siteContent';
import { navigateToHash } from '../lib/navigation';

export function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExploreFeatures = () => {
    if (location.pathname !== '/') {
      navigate('/#features');
      return;
    }

    navigateToHash('#features');
  };

  return (
    <section className="hero" aria-label="Introduction">
      <div>
        <p className="pill">Daily scripture for discipline</p>
        <h1 className="hero__title">{homePageContent.title}</h1>
        <p className="hero__text">{homePageContent.subtitle}</p>

        <div className="hero__actions">
          <a href={appStoreUrl} className="button button--primary">
            View on Google Play
          </a>
          <button type="button" className="button button--secondary" onClick={handleExploreFeatures}>
            Explore Features
          </button>
          <Link to="/privacy" className="button button--secondary">
            Privacy Policy
          </Link>
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

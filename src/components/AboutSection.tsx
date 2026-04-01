export function AboutSection() {
  return (
    <section id="about" className="content-section">
      <div className="about-grid">
        <div className="section-copy">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Built for discipline, courage, and purpose.</h2>
          <p className="section-text">
            Iron & Proverbs was created for men who want daily encouragement rooted in Scripture
            and practical application. It’s built to help you return to the Word consistently and
            apply it in real life.
          </p>
        </div>

        <aside className="mission-card">
          <p className="mission-card__label">Mission</p>
          <p className="mission-card__text">“As iron sharpens iron, so one man sharpens another.”</p>
          <p className="mission-card__reference">Proverbs 27:17</p>
        </aside>
      </div>
    </section>
  );
}

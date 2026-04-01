import { policyContent } from '../data/siteContent';

type PolicyPageProps = {
  variant: keyof typeof policyContent;
  onNavigate: (href: string) => void;
};

export function PolicyPage({ variant, onNavigate }: PolicyPageProps) {
  const content = policyContent[variant];

  return (
    <section className="policy-page">
      <button type="button" className="back-link" onClick={() => onNavigate('/')}>
        ← Back to home
      </button>

      <div className="section-copy">
        <p className="section-kicker">Legal</p>
        <h1 className="policy-page__title">{content.title}</h1>
        <p className="policy-page__updated">{content.updated}</p>
      </div>

      <div className="policy-page__sections">
        {content.sections.map((section) => (
          <article key={section.title} className="policy-card">
            <h2 className="policy-card__title">{section.title}</h2>
            <p className="policy-card__text">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

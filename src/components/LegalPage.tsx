import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { LegalDocument } from '../data/siteContent';

const supportEmail = 'quoteverseapps@gmail.com';

function renderBodyWithEmail(text: string): ReactNode {
  const emailPattern = /quoteverseapps@gmail\.com/g;
  const parts = text.split(emailPattern);

  if (parts.length === 1) {
    return text;
  }

  const nodes: ReactNode[] = [];

  parts.forEach((part, index) => {
    nodes.push(part);

    if (index < parts.length - 1) {
      nodes.push(
        <a key={`email-${index}`} href={`mailto:${supportEmail}`} className="policy-link">
          {supportEmail}
        </a>,
      );
    }
  });

  return nodes;
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="policy-page">
      <Link to="/" className="back-link">
        ← Back to home
      </Link>

      <p className="section-kicker">Legal</p>
      <h1 className="policy-page__title">{document.title}</h1>
      <p className="policy-page__updated">Effective date: {document.effectiveDate}</p>

      <div className="policy-card policy-card--intro">
        <p className="policy-card__text">{document.intro}</p>
      </div>

      <div className="policy-page__sections">
        {document.sections.map((section) => (
          <section key={section.title} className="policy-card">
            <h2 className="policy-card__title">{section.title}</h2>
            <p className="policy-card__text">{renderBodyWithEmail(section.body)}</p>

            {section.bullets && section.bullets.length > 0 ? (
              <ul className="policy-card__list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}

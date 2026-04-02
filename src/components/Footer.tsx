import { Link } from 'react-router-dom';
import { footerLinks } from '../data/siteContent';

type FooterProps = {
  year: number;
};

export function Footer({ year }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {year} Iron & Proverbs. All rights reserved.</p>
        <div className="site-footer__links">
          {footerLinks.map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.href} to={link.href} className="site-footer__link">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="site-footer__link">
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

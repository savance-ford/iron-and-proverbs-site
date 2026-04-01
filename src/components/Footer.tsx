import { footerLinks } from '../data/siteContent';

type FooterProps = {
  year: number;
  onNavigate: (href: string) => void;
};

export function Footer({ year, onNavigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {year} Iron & Proverbs. All rights reserved.</p>
        <div className="site-footer__links">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-footer__link"
              onClick={(event) => {
                if (link.href.startsWith('/')) {
                  event.preventDefault();
                  onNavigate(link.href);
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { navigationLinks } from '../data/siteContent';

type HeaderProps = {
  onNavigate: (href: string) => void;
};

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">Iron & Proverbs</p>
        <p className="brand-subtitle">Bible for men • Daily strength • Discipline • Purpose</p>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="site-nav__link"
            onClick={(event) => {
              if (link.href.startsWith('/') || link.href.startsWith('#')) {
                event.preventDefault();
                onNavigate(link.href);
              }
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

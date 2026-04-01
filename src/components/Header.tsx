import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigationLinks } from '../data/siteContent';
import { navigateToHash } from '../lib/navigation';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashClick = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      return;
    }

    navigateToHash(hash);
  };

  return (
    <header className="site-header">
      <div>
        <Link to="/" className="brand-link">
          <p className="eyebrow">Iron & Proverbs</p>
          <p className="brand-subtitle">Bible for men • Daily strength • Discipline • Purpose</p>
        </Link>
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigationLinks.map((link) => {
          if (link.href.startsWith('#')) {
            return (
              <button
                key={link.href}
                type="button"
                className="site-nav__button"
                onClick={() => handleHashClick(link.href)}
              >
                {link.label}
              </button>
            );
          }

          return (
            <Link key={link.href} to={link.href} className="site-nav__link">
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

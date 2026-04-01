import { useEffect, useMemo, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PolicyPage } from './pages/PolicyPage';
import './App.css';

function normalizePath(pathname: string) {
  if (pathname === '/privacy' || pathname === '/terms') {
    return pathname;
  }

  return '/';
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        requestAnimationFrame(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }

      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const nextPath = normalizePath(href);
    window.history.pushState({}, '', nextPath);
    setCurrentPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <main className="page-shell">
        <Header onNavigate={handleNavigate} />
        {currentPath === '/privacy' && <PolicyPage variant="privacy" onNavigate={handleNavigate} />}
        {currentPath === '/terms' && <PolicyPage variant="terms" onNavigate={handleNavigate} />}
        {currentPath === '/' && <HomePage onNavigate={handleNavigate} />}
        <Footer year={year} onNavigate={handleNavigate} />
      </main>
    </div>
  );
}

export default App;

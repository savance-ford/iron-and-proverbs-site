import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout({ children }: PropsWithChildren) {
  const content = children ?? <Outlet />;

  return (
    <div className="app-shell">
      <div className="page-shell">
        <Header />
        {content}
        <Footer year={new Date().getFullYear()} />
      </div>
    </div>
  );
}

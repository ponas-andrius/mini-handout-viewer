import type React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-content">
          <div className="layout__header-logo">HandoutViewer™</div>
          <a href="#main-content" className="hw__nav-link--hidden">
            Eiti prie užduoties
          </a>
        </div>
      </header>
      <div className="layout__content">{children}</div>
    </div>
  );
};

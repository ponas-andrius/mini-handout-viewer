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
          <a href="#task-list" className="layout__hidden-link">
            Eiti prie užduoties
          </a>
          <div className="layout__header-logo">HandoutViewertron3000™</div>
        </div>
      </header>
      <div className="layout__content">{children}</div>
    </div>
  );
};

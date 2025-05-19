import React, { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-grow relative">{children}</main>
    </div>
  );
};

export default Layout;

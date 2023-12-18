import React from 'react';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({ children }) => {
  return <div style={{ maxWidth: '1200px', minWidth: '800px', margin: '16px 24px'}}>{children}</div>;
};

export default ResponsiveLayout;

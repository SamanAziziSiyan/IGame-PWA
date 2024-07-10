// components/Layout/AuthLayout.tsx

import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout">
      {/* Add your custom layout structure or styles here */}
      <header>Custom Header for Auth Pages</header>
      <main>{children}</main>
      <footer>Custom Footer for Auth Pages</footer>
    </div>
  );
};

export default AuthLayout;

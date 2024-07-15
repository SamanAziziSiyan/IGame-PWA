// app/login/layout.tsx
import React from 'react';
import AuthLayout from '../../components/Common/Layout/AuthLayout';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const LoginRouteLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default LoginRouteLayout;

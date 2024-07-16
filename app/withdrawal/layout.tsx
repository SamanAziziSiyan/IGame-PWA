// app/login/layout.tsx
import React from 'react';
import WithoutLayout from '@/components/Common/Layout/WithoutLayout';

interface WithoutLayoutProps {
  children: React.ReactNode;
}

const WithdrawRouteLayout: React.FC<WithoutLayoutProps> = ({ children }) => {
  return <WithoutLayout>{children}</WithoutLayout>;
};

export default WithdrawRouteLayout;

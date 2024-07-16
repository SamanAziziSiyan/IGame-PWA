// app/login/AuthLayout.tsx
"use client";
import React from 'react';

const WithoutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default WithoutLayout;

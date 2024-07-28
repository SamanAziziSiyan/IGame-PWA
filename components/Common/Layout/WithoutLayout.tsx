// app/login/AuthLayout.tsx
"use client";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WithoutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
};

export default WithoutLayout;

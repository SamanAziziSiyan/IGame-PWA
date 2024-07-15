// app/ClientLayout.tsx
"use client";  // Mark this file as a client component

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAuthRoute = pathname?.startsWith('/login') || pathname?.startsWith('/auth');

    if (isAuthRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default ClientLayout;

// app/ClientLayout.tsx
"use client";  

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Common/components/Header/Header";
import Footer from "@/components/Common/components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();

    const isAuthRoute = React.useMemo(() => {
        return pathname?.startsWith('/login') || pathname?.startsWith('/auth') || pathname?.startsWith('/withdrawal');
    }, [pathname]);

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

// app/page.tsx

"use client";

import Dashboard from "@/components/Dashboard";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = checkAuthToken(router);
        if (!isAuthenticated) return;
        // Optionally, you can handle any additional logic after authentication check
    }, [router]);
    return (
        <Dashboard />
    );
};

export default DashboardPage;

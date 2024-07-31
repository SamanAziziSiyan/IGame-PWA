// app/page.tsx

"use client";

import Dashboard from "@/components/Dashboard/components";
import withAuth from "@/HOC/auth";


const DashboardPage = () => {

    return (
        <Dashboard />
    );
};

export default withAuth(DashboardPage);

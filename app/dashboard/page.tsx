// app/page.tsx

"use client";

import Dashboard from "@/components/Dashboard";
import withAuth from "@/HOC/auth";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const DashboardPage = () => {

    return (
        <Dashboard />
    );
};

export default withAuth(DashboardPage);

// app/page.tsx

"use client";

import Auth from "@/components/Login/auth";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
    let router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkUserLogin = async () => {
            let isLoggedIn = await checkAuthToken();
            if (isLoggedIn) {
                router.push('/dashboard');
            } else {
                setIsLoggedIn(true);
            }
        }
        checkUserLogin();
    }, []);
    if (!isLoggedIn) return null;
    return (
        <Auth />
    );
};

export default LoginPage;

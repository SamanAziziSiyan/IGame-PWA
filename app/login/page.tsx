// app/login/page.tsx
"use client";

import LoginForm from "@/components/Login/components/LoginForm";
import AuthLayout from "./layout";
import { useEffect, useState } from "react";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
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
    });
    if (!isLoggedIn) return null;
    return (
        <LoginForm />
    );
};

export default LoginPage;

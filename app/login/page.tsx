// app/login/page.tsx
"use client";

import LoginForm from "@/components/Login/LoginForm";
import AuthLayout from "./AuthLayout";
import { useEffect, useState } from "react";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
    let router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkUserLogin = async () => {
            let isLoggedIn = await checkAuthToken();
            if (isLoggedIn){
                router.push('/dashboard');
            }else{
                setIsLoggedIn(true);
            }
        }
        checkUserLogin();
    }, []);
    if (!isLoggedIn) return null;
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;

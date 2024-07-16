// app/withdrawal/page.tsx
"use client";

import { useEffect, useState } from "react";
import { checkAuthToken } from "@/utils";
import { useRouter } from "next/navigation";
import Withdrawal from "@/components/Withdrawal";

const WithdrawalPage: React.FC = () => {
    // let router = useRouter();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     const checkUserLogin = async () => {
    //         let isLoggedIn = await checkAuthToken();
    //         if (isLoggedIn) {
    //             router.push('/dashboard');
    //         } else {
    //             setIsLoggedIn(true);
    //         }
    //     }
    //     checkUserLogin();
    // }, []);
    // if (!isLoggedIn) return null;
    return (
        <Withdrawal />
    );
};

export default WithdrawalPage;

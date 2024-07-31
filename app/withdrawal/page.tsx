// app/withdrawal/page.tsx
"use client";

import Withdrawal from "@/components/Withdrawal/components";

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

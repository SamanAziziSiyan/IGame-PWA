// app/login/AuthLayout.tsx
"use client";
import React from 'react';
import LeftArrowIcon from "@/components/Common/icons/leftarrowIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import loginLayoutStore from '@/store/loginLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const isAuthRoute = pathname?.startsWith('/login');
    const LoginStore = loginLayoutStore((state) => state.loginLayoutStore);

    if (isAuthRoute) {
        return (
            <>
            <div className="bg-[url(/assets/images/Login-bg.png)] md:w-1/2 mx-auto h-[500px] bg-no-repeat bg-cover bg-center">
                <div className="flex w-full items-center justify-around pt-14">
                    <div></div>
                    <Image src='/assets/images/Call-of-duty-white.png' alt="Call-of-duty-white" width={105} height={19} />
                    <LeftArrowIcon className="bg-white/30 rounded-full w-8 h-8 p-1 self-end	" />
                </div>
                {!LoginStore.isShowVerification ?
                    <div className="flex items-center justify-center gap-x-4 w-full mt-11">
                        <div className="w-[150px] h-[150px] rounded-[35px] relative">
                            <Image src='/assets/images/Login-Soldier (2).png' className=" -mt-6  w-[215px] h-[175px]" width={213} height={207} alt="" />
                        </div>
                        <div className=" w-[150px] h-[150px] rounded-[35px] relative ">
                            <Image src='/assets/images/Login-Soldier (1).png' className="absolute -top-6 w-[215px] h-[175px]" width={215} height={207} alt="" />
                        </div>
                    </div>
                    : <div className="flex items-center justify-center gap-x-4 w-full mt-11">
                        <div className="w-[150px] h-[150px] rounded-[35px] relative">
                            <Image src='/assets/images/verify-soldier (2).png' className=" -mt-6  w-[215px] h-[175px]" width={213} height={207} alt="" />
                        </div>
                        <div className=" w-[150px] h-[150px] rounded-[35px] relative ">
                            <Image src='/assets/images/verify-soldier (1).png' className="absolute -top-6 w-[215px] h-[175px]" width={215} height={207} alt="" />
                        </div>
                    </div>}

                {children}
            </div>
            <ToastContainer/>
            </>
        );
    }
    return (
        <>
        <div className=" mx-auto h-[500px] md:w-1/2 bg-no-repeat bg-cover bg-center">
            <div className="flex w-full items-center justify-around pt-14">
                <div></div>
                <Image src='/assets/images/Call-of-duty-white.png' alt="Call-of-duty-white" width={105} height={19} />
                <LeftArrowIcon className="bg-white/30 rounded-full w-8 h-8 p-1 self-end	" />
            </div>
            {children}
        </div>
        <ToastContainer/>

        </>
    );
};

export default AuthLayout;

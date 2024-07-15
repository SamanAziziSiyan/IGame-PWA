// app/login/LoginVerify.tsx
"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "@/components/Common/InputField"; // Adjust import path if necessary
import Button from "@/components/Common/Buttons"; // Adjust import path if necessary
import { LoginService, OtpVerificationService } from "@/services/auth/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toastAlert } from "@/utils";
import LoadingIcon from "@/components/Common/icons/loadingIcon"; // Adjust import path if necessary
import Timer from "./Timer";

interface IFormInput {
    userName: string;
    verificationCode: string;
}

interface LoginVerifyProps {
    userPhoneNumber: string;
}

const LoginVerify = ({ userPhoneNumber }: LoginVerifyProps) => {
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            setShowLoading(true);
            const response = await OtpVerificationService(data.userName, data.verificationCode);
            if (response.data.status !== "Success" || response.data.joinedErrors !== '') {
                throw new Error(response.data.joinedErrors);
            } else {
                toastAlert({ msg: "کد تایید با موفقیت تایید شد", type: "success" });
                localStorage.setItem("UserData", JSON.stringify({
                    "token": response.data.data.token,
                    "userName": response.data.data.username,
                    "refreshToken": response.data.data.refreshToken,
                    "customerID": response.data.data.customerId
                    
                }));
                router.push('/dashboard');
            }
        } catch (error: any) {
            toastAlert({ msg: error?.message || "خطایی رخ داده است", type: "error" });
        } finally {
            setShowLoading(false);
        }
    };

    const sendAgain = async () => {
        try {
            const response = await LoginService(userPhoneNumber);
            if (response.data.status != "Success") {
                if (response?.data?.status == "Error") {
                    toastAlert({ msg: response.data.errors[0] as string, type: "info" });
                    return;
                }
                throw new Error('خطایی رخ داده است');
            } else {
                toastAlert({ msg: "پیامک با موفقیت ارسال شد" as string, type: "success" });
            }
        } catch (error: any) {
            if (error?.response?.status == 401) {
                toastAlert({ msg: "توکن منقضی شده است: خطای 401" as string })
                setShowLoading(false);
                return;
            } else {
                setShowLoading(false);
                toastAlert({ msg: error?.message as string })
            }

        }
    };

    return (
        <div className="mt-11">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:w-1/2 w-full mx-auto gap-[14px] items-center justify-center'>
                    <div className='text-white flex flex-col gap-y-4'>
                        <h3 className='font-bold text-xl'>تایید شماره همراه</h3>
                        <span className='font-normal text-[14px] '>کد ارسالی به شماره {userPhoneNumber} را وارد کنید</span>
                    </div>
                    <CustomInput
                        id="userName"
                        type="text"
                        label="نام کاربری*"
                        name="userName"
                        register={register}
                        validationRules={{
                            required: 'نام کاربری ضروری است',
                        }}
                        errors={errors.userName}
                        placeholder="نام کاربری شما"
                    />
                    <CustomInput
                        id="verificationCode"
                        type="text"
                        label="کد ارسالی*"
                        name="verificationCode"
                        register={register}
                        validationRules={{
                            required: 'کد ارسالی ضروری است',
                            pattern: {
                                value: /^\d{6}$/,
                                message: 'کد ارسالی باید 6 رقم باشد',
                            },
                        }}
                        errors={errors.verificationCode}
                        placeholder="- - - -"
                    />
                    <Timer onSendAgain={sendAgain} /> {/* Include the Timer component */}
                    <Button className='mt-3 py-[14px] font-semibold flex items-center justify-center gap-x-4 rounded-[40px]' type='submit'>
                        تایید کد
                        {showLoading && <LoadingIcon className="fill-gray-600" />}
                    </Button>
                    <Button className='mt-3 py-[14px] bg-white font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='button'>
                        تغییر شماره
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginVerify;

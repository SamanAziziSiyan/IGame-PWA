// components/Login.tsx

import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "@/components/Common/components/FormInputs/InputField";
import Button from "../../Common/components/Elements/Buttons";
import Image from "next/image";
import InfoIcon from "../../Common/icons/infoIcon";
import { LoginService } from "@/services/auth/login";
import { useState } from "react";
import LoginVerify from "./LoginVerify";
import { ButtonLoading } from "../../Common/components/Loading/ButtonLoading";
import { toastAlert } from "@/utils";
import { toast } from "react-toastify";
import useLoginLayoutState from "@/store/loginLayout";
import LoginRouteLayout from "@/app/auth/layout";


interface IFormInput {
    phoneNumber: string;
}
const LoginFrom = () => {
    const [showVerify, setShowVerify] = useState<boolean>(false);
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const { loginLayoutStore, setLoginLayoutState } = useLoginLayoutState((state) => ({
        loginLayoutStore: state.loginLayoutStore,
        setLoginLayoutState: state.setLoginLayoutState,
    }));
    const { isShowVerifyForm } = loginLayoutStore;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            setShowLoading(true);
            const response = await LoginService(data.phoneNumber);

            if (response.data.status === "Success") {
                toastAlert({ msg: "پیامک با موفقیت ارسال شد", type: "success" });
                setUserPhoneNumber(data.phoneNumber);
                setShowVerify(true);
                setLoginLayoutState(true, true);
            } else {
                const errorMsg = response?.data?.status === "Error" ? response.data.errors[0] : 'خطایی رخ داده است';
                toastAlert({ msg: errorMsg, type: "info" });
                setShowVerify(response?.data?.status === "Error");
                setLoginLayoutState(true, true);
            }
        } catch (error: any) {
            const errorMsg = error?.response?.status === 401
                ? "توکن منقضی شده است: خطای 401"
                : error?.message || 'خطایی رخ داده است';

            toastAlert({ msg: errorMsg, type: "error" });
            setShowVerify(false);
            setLoginLayoutState(false, false);
        } finally {
            setShowLoading(false);
        }

    };
    return (
        <div className="container-px ">

            {(!showVerify || !isShowVerifyForm) &&
                <div className="mt-11">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 mx-auto gap-[14px] items-center justify-center'>
                            <div className='text-white flex flex-col gap-y-4'>
                                <h3 className='font-bold text-xl'>ورود به حساب کاربری</h3>
                                <span className='font-normal text-[14px] '>شمــــــاره موبایل خود را وارد کنیـــــد</span>
                            </div>
                            <CustomInput
                                id="phoneNumber"
                                type="text"
                                label="شماره تلفن همراه*"
                                name="phoneNumber"
                                register={register}
                                validationRules={{
                                    required: 'شماره تلفن همراه شما ضروری است',
                                    pattern: {
                                        value: /^(0?9|\+?989)((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}$/,
                                        message: 'شماره تلفن نامعتبر است'
                                    }
                                }}
                                errors={errors.phoneNumber}
                                placeholder="شماره تلفن همراه شما"
                            />
                            <div className="flex gap-x-2 items-center">
                                <InfoIcon />
                                <span className="text-[12px] font-normal text-white/80">مانند ۰۹۱۲۱۲۳۴۵۶۷۸</span>
                            </div>
                            <Button className='mt-3 py-[14px] font-semibold flex items-center justify-center gap-x-4 rounded-[40px]' type='submit'>
                                تایید شماره موبایل
                                {showLoading &&
                                    <ButtonLoading />
                                }
                            </Button>
                            <Button className='mt-3 py-[14px] bg-white font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='submit'>
                                <Image src={'/assets/images/SSO Icon.png'} width={24} height={24} alt="" />
                                ورود با ایمیـــــــــل
                            </Button>
                        </div>
                    </form >
                </div>
            }
            {(showVerify && isShowVerifyForm) && <LoginVerify userPhoneNumber={userPhoneNumber} />}
        </div>
    );
};

export default LoginFrom;


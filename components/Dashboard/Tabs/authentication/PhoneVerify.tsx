// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import Timer from "@/components/Login/Timer";
import { LoginService } from "@/services/auth/login";
import { toastAlert } from "@/utils";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    phoneNumber: string;
    verificationCode: string;
}

const PhoneVerify = ({ phoneNumber }: IFormInput) => {
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    const sendAgain = async () => {
        try {
            const response = await LoginService(phoneNumber);
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
        <div className="mt-8">
            <h3 className='font-bold text-xl text-white'>تایید تلفن کاربر با تماس</h3>
            <div className="flex flex-col gap-4 mt-5">
                <span className="text-[14px] font-normal text-white/80 text-justify">
                    پس از تایید تلفنی شماره موبایل مورد استفاده، بلافاصله پس از ثبت درخواست تماس تلفنی، با شماره همراه 09171111111 تماس گرفته شده و کد تایید خوانده میشود.                </span>
                <Alert>
                    توجــه:  به منظور جلوگیری از سوء استفاده های احتمالی، این کد را در اختیار کسی قرار ندهید.
                </Alert>
                <div className="flex items-center gap-x-4 justify-center w-full">
                    <Button className="py-3 px-9 font-semibold text-sm rounded-[32px] w-full bg-white text-[#111]">درخواست تماس</Button>
                    <Button className="py-3 px-9 font-semibold text-sm rounded-[32px] w-full bg-[#F04242] text-white">انصراف</Button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid  grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                    <div className="relative">
                        <CustomInput
                            id="verificationCode"
                            type="text"
                            label="کد تایید*"
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
                            placeholder="کد تایید"
                        />
                        <Button className='mt-3 py-[5px] absolute top-8 bg-white left-3 font-semibold rounded-[16px] flex items-center justify-between px-6 text-[10px]' type='submit'>
                            تایید
                        </Button>
                    </div>

                    <Button className='mt-3 py-[14px] w-full font-semibold rounded-[40px] flex items-center justify-between px-6 text-sm' type='submit'>
                        ثبت درخواست تماس دوباره
                        <Timer onSendAgain={sendAgain} showReceiveCode={false} showSendAgain={false} />
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default PhoneVerify;

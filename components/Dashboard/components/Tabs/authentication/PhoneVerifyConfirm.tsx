// components/authentication.tsx

import Button from "@/components/Common/components/Buttons";
import CustomInput from "@/components/Common/components/InputField";
import Alert from "@/components/Common/components/alert";
import PhoneConfirmIcon from "@/components/Common/icons/PhoneConfirmIcon";
import ApprovalIcon from "@/components/Common/icons/approvalIcon";
import WarningIcon from "@/components/Common/icons/warningicon";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
}
const PhoneVerifyConfirm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-8 container-px lg:w-2/3 w-full mx-auto">
            <div className="flex flex-col items-center gap-y-4 text-center w-2/3 mx-auto">
                <PhoneConfirmIcon />
                <span className="text-white text-[16px] font-bold">تاییدیه تلفنی شماره تلفن همراه شما با
                    <span className="text-[#CCFB4B]">موفقیت</span> ثبت شد.</span>
            </div>
            <div className="mt-8 flex flex-col gap-y-5">
                <span className="text-white/80 text-[14px] font-normal text-justify">
                    شما میتوانیــــــد با شمـــــاره موبایل 09171111111 و با شمـــــاره کارت 5047061165983255 تا <span className="text-[#4285F4]">سقف 2 میلیون تومــــان</span> از فروشگاه خرید کنید.
                    توصیه میکنیم برای جلوگیری از بروز تاخیر های آتــــــی، همین حالا برای تاییـد و صحت سنجــــی اطلاعات با ارسال مدارک اقدام کنید.
                </span>

                <div className="flex items-center gap-x-4 justify-center w-full">
                    <Button className="py-3 px-9 font-semibold text-sm rounded-[32px] w-full text-[#111]">تایید با مدارک</Button>
                    <Button className="py-3 px-9 font-semibold text-sm rounded-[32px] w-full bg-white text-[#111]">بعدا اقدام میکنم</Button>
                </div>
            </div>
        </div>
    );
};

export default PhoneVerifyConfirm;

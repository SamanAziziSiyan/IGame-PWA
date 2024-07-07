// components/Login.tsx

import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../Common/InputField";
import Button from "../Common/Buttons";
import Image from "next/image";
import InfoIcon from "../Common/icons/infoIcon";
import PipeIcon from "../Common/icons/pipeIcon";


interface IFormInput {
    phoneNumber: string;
    verificationCode: string;
}
const LoginVerify = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-11">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:w-1/2 w-full mx-auto gap-[14px] items-center justify-center'>
                    <div className='text-white flex flex-col gap-y-4'>
                        <h3 className='font-bold text-xl'>تایید شماره همراه</h3>
                        <span className='font-normal text-[14px] '>کد ارسالی به شماره 09179179191 را وارد کنید</span>
                    </div>
                    <CustomInput
                        id="phoneNumber"
                        type="text"
                        label="نام کاربری*"
                        name="phoneNumber"
                        register={register}
                        validationRules={{
                            required: 'نام کاربری ضروری است',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'نام کاربری نامعتبر است'
                            }
                        }}
                        errors={errors.phoneNumber}
                        placeholder="نام کاربری شما"
                    />
                    <CustomInput
                        id="verificationCode"
                        type="text"
                        label="کد ارسالی*"
                        name="verificationCode"
                        register={register}
                        validationRules={{
                            required: 'شماره تلفن همراه شما ضروری است',
                        }}
                        errors={errors.phoneNumber}
                        placeholder="- - - -"
                    />
                    <div className="flex gap-x-2 items-center">
                        <span className="text-[12px] font-normal text-white/80">کد را دریافت نکردید؟ </span>
                        <a href="" className="text-[#CCFB4B] font-black text-[14px] underline">ارسال مجدد کد</a>
                    </div>

                    <div className="flex gap-x-2 items-center justify-center">
                        <span className="text-[12px] font-normal text-white/80">ارسال مجدد کد </span>
                        <PipeIcon />
                        <span>01:57</span>
                    </div>
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        تایید کد
                    </Button>
                    <Button className='mt-3 py-[14px] bg-white font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='submit'>
                        تغییر شماره
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default LoginVerify;


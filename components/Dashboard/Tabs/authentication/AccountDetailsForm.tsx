// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
    email: string;
    password: string;
}
const AccountDetailsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-8">
            <h3 className='font-bold text-xl text-white'>جزئیات حساب</h3>
            <div className="flex items-center justify-center gap-x-4">
                <Image src={'/assets/images/avatar.png'} alt="" width={100} height={100} />
                <Image src={'/assets/images/avatar.png'} alt="" width={100} height={100} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-[14px] items-center justify-center mt-4'>
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="نام*"
                        name="walletAmount"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.walletAmount}
                        placeholder="نام"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="نام خانوادگی*"
                        name="walletAmount"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.walletAmount}
                        placeholder="نام خانوادگی"
                    />

                    <CustomInput
                        id="password"
                        type="password"
                        label="رمز عبور*"
                        name="password"
                        register={register}
                        validationRules={{
                            required: 'رمز عبور ضروری می‌باشد',
                            minLength: {
                                value: 8,
                                message: 'رمز عبور حتما باید 8 کاراکتر باشد'
                            }
                        }}
                        errors={errors.password}
                        placeholder="رمز عبور اکانت شما"
                    />
                    <CustomInput
                        id="password"
                        type="password"
                        label=" تکرار رمز عبور*"
                        name="password"
                        register={register}
                        validationRules={{
                            required: 'رمز عبور ضروری می‌باشد',
                            minLength: {
                                value: 8,
                                message: 'رمز عبور حتما باید 8 کاراکتر باشد'
                            }
                        }}
                        errors={errors.password}
                        placeholder="رمز عبور اکانت شما"
                    />
                    <CustomInput
                        id="email"
                        type="email"
                        label="ایمیل*"
                        name="email"
                        register={register}
                        validationRules={{
                            required: 'ایمیل ضروری است',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'ایمیل نامعتبر می‌باشد'
                            }
                        }}
                        errors={errors.email}
                        placeholder="ایمیل متصل به اکانت شما"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="تلگرام "
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="تلگرام"
                    />
                    <CustomInput
                        id="walletAmount"
                        type="text"
                        label="تاریخ تولد "
                        name="walletAmount"
                        register={register}
                        errors={errors.walletAmount}
                        placeholder="تاریخ تولد"
                    />
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        ثبت درخواست ارتقا سطح
                    </Button>
                </div>
            </form >
        </div>
    );
};

export default AccountDetailsForm;

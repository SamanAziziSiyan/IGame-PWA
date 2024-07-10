"use client";
import Button from '@/components/Common/Buttons';
import CustomInput from '@/components/Common/InputField';
import CustomSelect from '@/components/Common/SelectField';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const svgIcon = `
<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.20926 1.80237L6.79065 7.38376L12.372 1.80237" stroke="white" strokeWidth="1.86047" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

`;

interface IFormInput {
    email: string;
    password: string;
    description: string;
    platform: string;
}

const AccountForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div className="lg:col-span-7 xl:order-1 order-2 col-span-12 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[14px] gap-[10px] items-center justify-center'>
                    <CustomSelect
                        id="platform"
                        label="پلتفرم*"
                        name="platform"
                        register={register}
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.platform}
                        options={[
                            { value: 'اکتیویژن', label: 'اکتیویژن' },
                            { value: 'اکتیویژن1', label: 'اکتیویژن' },
                            { value: 'اکتیویژن2', label: 'اکتیویژن' },
                        ]}
                        svgIcon={svgIcon}
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
                        id="description"
                        type="text"
                        label="توضیحات"
                        name="description"
                        register={register}
                        errors={errors.password}
                        placeholder="توضیحات"
                    />
                    <div className='lg:hidden flex text-[13px] font-medium mt-5'>
                        ثبت سفارش به معنی  <span className='text-white font-bold'> موافقت با قوانین </span>  است.
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <span className='text-white xl:text-base text-[14px]'>مبلغ پرداختی</span>
                        <div className='flex xl:text-xl text-lg font-bold gap-1'>
                            <span className='text-[#CCFB4B] '>1,400,000</span>
                            <span className='text-white'>تومان</span>
                        </div>
                    </div>
                    <Button className='mt-3 py-[14px] xl:text-base text-[14px] font-semibold rounded-[40px]' type='submit'>
                        تایید نهایی و ثبت سفارش
                    </Button>
                </div>
            </form >
        </div >
    );
};

export default AccountForm;

"use client";
import Button from '@/components/Common/Buttons';
import CustomInput from '@/components/Common/InputField';
import CustomSelect from '@/components/Common/SelectField';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const svgIcon = `
<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.20926 1.80237L6.79065 7.38376L12.372 1.80237" stroke="white" stroke-width="1.86047" stroke-linecap="round" stroke-linejoin="round"/>
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
        <div className="col-span-7 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
            

                <div className='grid grid-cols-2 gap-[14px] items-center justify-center'>
                    <CustomSelect
                        id="platform"
                        label="پلتفرم*"
                        name="platform"
                        register={register}
                        validationRules={{ required: 'Country is required' }}
                        errors={errors.platform}
                        options={[
                            { value: 'اکتیویژن', label: 'اکتیویژن' },
                            { value: 'اکتیویژن', label: 'اکتیویژن' },
                            { value: 'اکتیویژن', label: 'اکتیویژن' },
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

                    <div className='flex mt-3 justify-between'>
                        <span className='text-white'>مبلغ پرداختی</span>
                        <div className='flex text-xl font-bold gap-1'>
                            <span className='text-[#CCFB4B] '>1,400,000</span>
                            <span className='text-white'>تومان</span>
                        </div>
                    </div>
                    <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                        تایید نهایی و ثبت سفارش
                    </Button>
                </div>
            </form >
        </div >
    );
};

export default AccountForm;

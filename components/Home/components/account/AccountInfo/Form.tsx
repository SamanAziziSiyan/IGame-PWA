"use client";
import React, { useState, ChangeEvent } from 'react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '@/components/Common/components/Elements/Buttons';
import SelectArrowIcon from '@/components/Common/icons/SelectArrowIcon';
import { ButtonLoading } from "@/components/Common/components/Loading/ButtonLoading";
import { PreOrderService } from '@/services/orders/orders';
import useProductState from '@/store/products';
import { numberFormat, toastAlert } from '@/utils';
import { platformFieldsAndRules } from '@/components/Home/utils/platformFormConfig';
import { createOrderFormData } from '@/components/Home/utils/orderUtils';
import CustomSelect from '@/components/Common/components/FormInputs/SelectField';
import CustomInput from '@/components/Common/components/FormInputs/InputField';

interface IFormInput {
    mobile: string;
    password: string;
    description: string;
    platform: string;
    [key: string]: any;
}

const AccountForm: React.FC = () => {
    const productStore = useProductState(state => state.productStore);
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [selectedPlatform, setSelectedPlatform] = useState<string>('اکانت اکتیویژن');

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    let router = useRouter();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const productData = productStore?.productData;
        if (productData != null) {
            const preOrderData = createOrderFormData(productData, data);

            try {
                setShowLoading(true);
                const response = await PreOrderService(preOrderData);
                if (response?.data?.status === 'Success') {
                    setShowLoading(false);
                    toastAlert({ msg: "سفارش شما ثبت شد در حال هدایت به درگاه پرداخت ...", type: "success" });
                    router.push(response.data.data);
                }

            } catch (error) {
                setShowLoading(false);
                const errorMessage = (error as Error).message || 'An unknown error occurred';
                toastAlert({ msg: errorMessage });
            }
        } else {
            toastAlert({ msg: "ابتدا یک محصول انتخاب کنید", type: "warning" })
        }
    };

    const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlatform(e.target.value);
    };

    return (
        <div id='accountForm' className="lg:col-span-7 xl:order-1 order-2 col-span-12 w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[14px] gap-[10px] items-center justify-center'>
                    <CustomSelect
                        id="platform"
                        label="پلتفرم*"
                        name="platform"
                        register={register}
                        validationRules={{ required: 'پلتفرم ضروری است' }}
                        errors={errors.platform}
                        options={[
                            { value: 'اکانت اکتیویژن', label: 'اکانت اکتیویژن' },
                            { value: 'فیسبوک', label: 'فیسبوک' },
                        ]}
                        svgIcon={<SelectArrowIcon />}
                        onChange={handlePlatformChange}
                    />

                    {selectedPlatform && platformFieldsAndRules[selectedPlatform]?.map(field => (
                        <CustomInput
                            key={field.id}
                            id={field.id}
                            type={field.type}
                            label={field.label}
                            name={field.id}
                            register={register}
                            validationRules={field.validationRules}
                            errors={errors[field.id] as FieldError}
                            placeholder={field.placeholder}
                        />
                    ))}
                    <CustomInput
                        id="description"
                        type="text"
                        label="توضیحات"
                        name="description"
                        register={register}
                        errors={errors.description}
                        placeholder="توضیحات"
                    />


                    <div className='lg:hidden flex text-[13px] font-medium mt-5'>
                        ثبت سفارش به معنی  <span className='text-white font-bold'> موافقت با قوانین </span>  است.
                    </div>
                    <div className='flex mt-3 justify-between'>
                        <span className='text-white xl:text-base text-[14px]'>مبلغ پرداختی</span>
                        <div className='flex xl:text-xl text-lg font-bold gap-1'>
                            <span className='text-[#CCFB4B] '>{productStore.productData == null ? '0' : numberFormat(productStore?.productData?.staticPrice)}</span>
                            <span className='text-white'>تومان</span>
                        </div>
                    </div>
                    <Button className='mt-3 py-[14px] xl:text-base text-[14px] font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='submit'>
                        تایید نهایی و ثبت سفارش
                        {showLoading && <ButtonLoading />}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AccountForm;
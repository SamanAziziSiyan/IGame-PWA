"use client";
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '@/components/Common/components/Elements/Buttons';
import SelectArrowIcon from '@/components/Common/icons/SelectArrowIcon';
import { ButtonLoading } from "@/components/Common/components/Loading/ButtonLoading";
import { PreOrderService } from '@/services/orders/orders';
import useProductState from '@/store/products';
import { checkAuthToken, numberFormat, toastAlert } from '@/utils';
import { platformFieldsAndRules } from '@/components/Home/utils/platformFormConfig';
import { createOrderFormData } from '@/components/Home/utils/orderUtils';
import CustomSelect from '@/components/Common/components/FormInputs/SelectField';
import CustomInput from '@/components/Common/components/FormInputs/InputField';
import useAuthStore from '@/store/auth';
import { isAxiosError } from 'axios';
import Popup from './popup';

interface IPopupUserData {
    platform: string;
    accountUserName: string;
    accountPassword: string;
    nameInGame: string;
    description: string;
    [key: string]: string;
}


interface IFormInput extends IPopupUserData {
    mobile: string;
    password: string;
    [key: string]: any;
}

const AccountForm: React.FC = () => {
    const productStore = useProductState(state => state.productStore);
    const [showLoading, setShowLoading] = useState<boolean>(false);
    const [selectedPlatform, setSelectedPlatform] = useState<string>('اکانت اکتیویژن');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<IPopupUserData | null>(null);
    const [preOrderData, setPreOrderData] = useState<any>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset // Added reset to clear form fields if needed
    } = useForm<IFormInput>();

    const router = useRouter();

    useEffect(() => {
        const initializeForm = () => {
            const savedData = localStorage.getItem('userEnteredData');
            if (savedData) {
                const parsedData = JSON.parse(savedData) as IFormInput;
                setFormData({
                    platform: parsedData.platform || '',
                    accountUserName: parsedData.accountUserName || '',
                    accountPassword: parsedData.accountPassword || '',
                    nameInGame: parsedData.nameInGame || '',
                    description: parsedData.description || ''
                });
    
                reset(parsedData);
    
                if (parsedData.platform) {
                    setSelectedPlatform(parsedData.platform);
                }
    
                setShowModal(true);
            }
        };
    
        initializeForm();
    }, [reset]);    

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const productData = productStore?.productData;

        if (productData) {
            const preOrderData = createOrderFormData(productData, data);
            setFormData(data);
            setPreOrderData(preOrderData);
            setShowModal(true);
        } else {
            toastAlert({ msg: "ابتدا یک محصول انتخاب کنید", type: "warning" });
        }
    };

    const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedPlatform(e.target.value);
        setValue('platform', e.target.value);
    };

    const closeModal = () => {
        setShowModal(false);
        localStorage.removeItem('userEnteredData');
    };

    const confirmOrder = async () => {
        if (preOrderData) {
            try {
                setShowLoading(true);
                const response = await PreOrderService(preOrderData);
                if (response?.data?.status === 'Success') {
                    toastAlert({ msg: "سفارش شما ثبت شد در حال هدایت به درگاه پرداخت ...", type: "success" });
                    router.push(response.data.data);
                }
            } catch (error) {
                setShowLoading(false);
                if (isAxiosError(error)) {
                    if (error.response?.status === 401) {
                        toastAlert({ msg: "برای خرید، لطفاً دوباره وارد حساب کاربری خود شوید", type: "info" });
                        localStorage.setItem('userEnteredData', JSON.stringify(formData));
                        router.push('/login');
                    } else {
                        const errorMessage = error.message || 'خطای ناشناس';
                        toastAlert({ msg: errorMessage });
                    }
                } else {
                    toastAlert({ msg: 'خطایی رخ داده است' });
                }
            } finally {
                setShowLoading(false);
            }
        }
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
                        validationRules={{ required: 'پلتفرم ضروری است' }}
                        errors={errors.platform}
                        options={[
                            { value: 'اکانت اکتیویژن', label: 'اکانت اکتیویژن' },
                            { value: 'فیسبوک', label: 'فیسبوک' },
                        ]}
                        svgIcon={<SelectArrowIcon />}
                        onChange={handlePlatformChange}
                        value={selectedPlatform}
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
                            defaultValue={formData?.[field.id] as string} // Ensure defaultValue is a string
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
                        defaultValue={formData?.description as string} // Ensure defaultValue is a string
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
                        ثبت سفارش
                    </Button>
                </div>

                {showModal && (
                    <Popup
                        onClose={closeModal}
                        onConfirm={confirmOrder}
                        productData={{
                            name: productStore?.productData?.titleFa || 'محصول نامشخص',
                            price: numberFormat(productStore?.productData?.staticPrice || 0)
                        }}
                        userData={formData || {
                            platform: '',
                            accountUserName: '',
                            accountPassword: '',
                            nameInGame: '',
                            description: ''
                        }} // Default values should match IPopupUserData type
                        loading={showLoading}
                    />
                )}
            </form>
        </div>
    );
};

export default AccountForm;

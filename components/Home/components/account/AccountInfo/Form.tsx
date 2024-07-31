"use client";
import Button from '@/components/Common/components/Buttons';
import CustomInput from '@/components/Common/components/InputField';
import CustomSelect from '@/components/Common/components/SelectField';
import { PreOrderService } from '@/services/orders/orders';
import useProductState from '@/store/products';
import { getUserDataFromLocalStorage, numberFormat, toastAlert } from '@/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IOrderProductData } from '@/components/Home/types';
import { getBaseUrl, getBrowserInfo, getDeviceInfo } from '@/components/Home/utils';
import SelectArrowIcon from '@/components/Common/icons/SelectArrowIcon';
import { ButtonLoading } from '@/components/Common/icons/ButtonLoading';

interface IFormInput {
    mobile: string;
    password: string;
    description: string;
    platform: string;
    price: number;
}

const AccountForm: React.FC = () => {
    const productStore = useProductState(state => state.productStore);
    const [showLoading, setShowLoading] = useState<boolean>(false);

    const userData = getUserDataFromLocalStorage();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    let router = useRouter();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const productData = productStore?.productData;
        if (productData != null) {
            const productTitle = productData?.titleFa || productData?.title || 'Unknown Product';
            let formData: IOrderProductData = {
                callbackUrl: getBaseUrl() + '/dashboard',
                TotalProductsAmountToman: productData.staticPrice,
                DiscountAmountToman: 0,
                WalletAmountToman: 0,
                PaymentAmountToman: productData.staticPrice,
                Mobile: userData?.userName || '',
                CustomerId: userData?.customerID || 0,
                DiscountCode: 0,
                Description: data.description,
                Ip: '127.0.0.1',
                Browser: getBrowserInfo().browserName,
                Device: getDeviceInfo().deviceType,
                OrderProducts: [
                    {
                        productId: productData?.id || '0',
                        quantity: 1,
                        productUnitAmountToman: productData.staticPrice || 0,
                        additionalData: [
                            {
                                name: '',
                                value: '',
                            }
                        ],
                        playerId: 'examplePlayerId',
                        name: 'exampleProductName',
                        platform: data.platform || '',
                        username: data.mobile,
                        password: data.password,
                        nameInGame: 'exampleNameInGame',
                        backupCode: 'exampleBackupCode',
                        description: data.description,
                        os: getDeviceInfo().os,
                        imageUrl: 'http://example.com/image.png',
                        gmailPassword: 'exampleGmailPassword'
                    }
                ]
            };

            try {
                setShowLoading(true);
                const response = await PreOrderService(formData);
                if (response?.data?.status === 'Success') {
                    setShowLoading(false);
                    toastAlert({ msg: "سفارش شما ثبت شد در حال هدایت به درگاه پرداخت ...", type: "success" });
                    router.push(response.data.data);
                }

            } catch (error) {
                setShowLoading(false);
                const errorMessage = (error as Error).message || 'An unknown error occurred';
                toastAlert({ msg: errorMessage });
                console.log(error);
            }
        } else {
            toastAlert({ msg: "ابتدا یک محصول انتخاب کنید", type: "warning" })
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
                        validationRules={{ required: 'platform is required' }}
                        errors={errors.platform}
                        options={[
                            { value: 'اکتیویژن', label: 'اکتیویژن' },
                            { value: 'اکتیویژن1', label: 'اکتیویژن' },
                            { value: 'اکتیویژن2', label: 'اکتیویژن' },
                        ]}
                        svgIcon={<SelectArrowIcon />}
                    />
                    <CustomInput
                        id="mobile"
                        type="text"
                        label="موبایل*"
                        name="mobile"
                        register={register}
                        validationRules={{
                            required: 'موبایل ضروری است',
                            pattern: {
                                value: /^(0?9|\+?989)((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\W?\d{3}\W?\d{4}$/,
                                message: 'شماره تلفن نامعتبر است'
                            }
                        }}
                        errors={errors.mobile}
                        placeholder="موبایل متصل به اکانت شما"
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
            </form >
        </div >
    );
};

export default AccountForm;

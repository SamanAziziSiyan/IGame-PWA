"use client";
import Button from '@/components/Common/Buttons';
import LoadingIcon from '@/components/Common/icons/loadingIcon';
import CustomInput from '@/components/Common/InputField';
import CustomSelect from '@/components/Common/SelectField';
import { PreOrderService } from '@/services/orders/orders';
import { PaymentService } from '@/services/Payment/payment';
import useProductState from '@/store/products';
import { IOrderProductData } from '@/types';
import { getBrowserInfo, getDeviceInfo, getUserDataFromLocalStorage, numberFormat, toastAlert } from '@/utils';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const svgIcon = `
<svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.20926 1.80237L6.79065 7.38376L12.372 1.80237" stroke="white" strokeWidth="1.86047" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

`;

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

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const productData = productStore?.productData;
        const productTitle = productData?.titleFa || productData?.title || 'Unknown Product';
        let formData: IOrderProductData = {
            callbackUrl: 'http://localhost:3000/dashboard',
            TotalProductsAmountToman: 0,
            DiscountAmountToman: 0,
            WalletAmountToman: 0,
            PaymentAmountToman: data.price,
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
                    productUnitAmountToman: data.price || 0,
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
            if (response) {
                setShowLoading(false);
                toastAlert({ msg: "سفارش شما ثبت شد در حال هدایت به درگاه پرداخت ...", type: "success" });
                // const payment = PaymentService(
                //     {
                //         customerId: userData?.customerID,
                //         amount: 1,
                //         orderId: response.data,
                //         callBackUrl: 'string',
                //         mobile: userData?.userName,
                //         description: data.description,
                //         products: [
                //             {
                //                 quantity: 1,
                //                 title: productTitle,
                //                 amount: 1,
                //                 code: 'string'
                //             }
                //         ],
                //     }
                // );
                // console.log('payment', payment);

            }

        } catch (error) {
            setShowLoading(false);
            console.log(error);
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
                        svgIcon={svgIcon}
                    />
                    {/* <CustomInput
                        id="price"
                        type="hidden"
                        value={productStore.productData == null ? '0' : productData?.currentIrtRate}
                        name="price"
                        register={register}
                        errors={errors.price}
                    /> */}
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
                            <span className='text-[#CCFB4B] '>{productStore.productData == null ? '0' : numberFormat(productStore?.productData?.currentIrtRate)}</span>
                            <span className='text-white'>تومان</span>
                        </div>
                    </div>
                    <Button className='mt-3 py-[14px] xl:text-base text-[14px] font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='submit'>
                        تایید نهایی و ثبت سفارش
                        {showLoading && <LoadingIcon className="fill-gray-600" />}

                    </Button>
                </div>
            </form >
        </div >
    );
};

export default AccountForm;

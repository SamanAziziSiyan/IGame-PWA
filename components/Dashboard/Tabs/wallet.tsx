// components/Wallet.tsx

import Button from "@/components/Common/Buttons";
import CustomInput from "@/components/Common/InputField";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";


interface IFormInput {
    walletAmount: number;
}

const Wallet = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="mt-8">
                <h3 className='font-bold text-xl text-white'>افزودن موجودی</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 gap-[14px] items-center justify-center mt-4 md:w-1/2 w-full mx-auto'>
                        <CustomInput
                            id="walletAmount"
                            type="text"
                            label="مقدار*"
                            name="walletAmount"
                            register={register}
                            errors={errors.walletAmount}
                            placeholder="مبلغ را به تومان وارد کنید"
                        />

                        <Button className='mt-3 py-[14px] font-semibold rounded-[40px]' type='submit'>
                            افزودن موجودی
                        </Button>
                    </div>
                </form >
            </div>
            <div className="mt-8">
                <h3 className='font-bold text-xl text-white'>تراکنش‌ها</h3>
                <div className="flex flex-col gap-y-[10px] mt-4">

                    {/* transaction Cards */}
                    <div className="bg-white/5 py-3 px-2 rounded-2xl flex gap-x-3 items-center lg:justify-between lg:px-10 justify-evenly">
                        <Image src='/assets/images/logo.png' className='' width={50} height={50} alt="" />
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-[14px] max-[376px]:text-[12px] font-bold text-white">پرداخت بانک شهر</h4>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">08 خرداد  ۱۴۰2</span>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">شماره پیگیری 2123525553535353</span>
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <span className="text-white 3xl:text-[22px] font-semibold text-[14px] max-[376px]:text-[12px]">81,000 تومان</span>
                            <Button className="px-2 py-1 rounded-[21px] text-[#111111] text-nowrap text-[12px] max-[376px]:text-[10px] font-semibold">
                                <span>تکمیل شده</span>
                            </Button>
                        </div>
                    </div>
                    {/* transaction Cards */}
                    <div className="bg-white/5 py-3 px-2 rounded-2xl flex gap-x-3 items-center lg:justify-between lg:px-10 justify-evenly">
                        <Image src='/assets/images/logo.png' className='' width={50} height={50} alt="" />
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-[14px] max-[376px]:text-[12px] font-bold text-white">پرداخت بانک شهر</h4>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">08 خرداد  ۱۴۰2</span>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">شماره پیگیری 2123525553535353</span>
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <span className="text-white 3xl:text-[22px] font-semibold text-[14px] max-[376px]:text-[12px]">81,000 تومان</span>
                            <Button className="px-2 py-1 rounded-[21px] text-[#111111] text-nowrap text-[12px] max-[376px]:text-[10px] font-semibold">
                                <span>تکمیل شده</span>
                            </Button>
                        </div>
                    </div>

                    {/* transaction Cards */}
                    <div className="bg-white/5 py-3 px-2 rounded-2xl flex gap-x-3 items-center lg:justify-between lg:px-10 justify-evenly">
                        <Image src='/assets/images/logo.png' className='' width={50} height={50} alt="" />
                        <div className="flex flex-col gap-y-1">
                            <h4 className="text-[14px] max-[376px]:text-[12px] font-bold text-white">پرداخت بانک شهر</h4>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">08 خرداد  ۱۴۰2</span>
                            <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">شماره پیگیری 2123525553535353</span>
                        </div>
                        <div className="flex flex-col items-center gap-y-1">
                            <span className="text-white 3xl:text-[22px] font-semibold text-[14px] max-[376px]:text-[12px]">81,000 تومان</span>
                            <Button className="px-2 py-1 bg-white rounded-[21px] text-[#111111] text-nowrap text-[12px] max-[376px]:text-[10px] font-semibold">
                                <span>در انتظار پرداخت</span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Wallet;

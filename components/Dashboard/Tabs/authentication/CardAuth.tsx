// components/authentication.tsx

import Button from "@/components/Common/Buttons";
import CustomCheckbox from "@/components/Common/CustomCheckbox";
import CustomInput from "@/components/Common/InputField";
import Alert from "@/components/Common/alert";
import WarningIcon from "@/components/Common/icons/warningicon";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
    walletAmount: number;
    return: boolean;
}
const CardAuth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };
    const isChecked = watch("return");
    return (
        <div className="mt-8">
            <h3 className='font-bold text-xl text-white'>احراز هویت و تایید اطلاعات کارت های بانکی</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full">
                    <div className={`${isChecked ? 'bg-white' : 'bg-white/80'}  rounded-3xl py-6 px-5 mt-12`}>
                        <div className="flex gap-x-2  items-center justify-between">
                            <div className="flex flex-col gap-y-3">
                                <span className="text-[#111] font-semibold text-sm">محمدرضا بیضاوی</span>
                                <div className="flex flex-col gap-y-1">
                                    <span className="font-medium text-[#111] text-sm font-[Tomorrow] tracking-[1px]">5047 - 0611 - 6598 - 3255</span>
                                    <span className="font-normal text-[#111]/50 text-[9px] font-[Tomorrow] tracking-[2px]">IR800003253659874125632541</span>
                                </div>
                                <CustomCheckbox
                                    id="return"
                                    name="return"
                                    label="بازگشت پول به این کارت"
                                    register={register}
                                    validationRules={{ required: 'یک کارت را انتخاب کنید' }}
                                    errors={errors.return}
                                />

                            </div>
                            <Image src='/assets/images/logo.png' className={`${isChecked ? '' : 'grayscale'}`} width={100} height={100} alt="" />

                        </div>
                        <div className="flex flex-col gap-y-4 mt-6">
                            <span className="text-xs font-medium text-[#111]"> وضعیت
                                <span className="bg-[#4285F4] text-white rounded-3xl px-1 py-1 mx-1"> تایید پیامکی </span>
                                خرید تا سقف 50 میلیون تومان
                            </span>
                            <Button className="rounded-[32px] w-full py-2 border bg-transparent text-xs text-[#111]/80 font-semibold border-[#111]/80">احراز هویت</Button>
                        </div>
                    </div>

                    <div className={`${isChecked ? 'bg-white' : 'bg-white/80'}  rounded-3xl py-6 px-5 mt-12`}>
                        <div className="flex gap-x-2  items-center justify-between">
                            <div className="flex flex-col gap-y-3">
                                <span className="text-[#111] font-semibold text-sm">محمدرضا بیضاوی</span>
                                <div className="flex flex-col gap-y-1">
                                    <span className="font-medium text-[#111] text-sm font-[Tomorrow] tracking-[1px]">5047 - 0611 - 6598 - 3255</span>
                                    <span className="font-normal text-[#111]/50 text-[9px] font-[Tomorrow] tracking-[2px]">IR800003253659874125632541</span>
                                </div>
                                <CustomCheckbox
                                    id="return"
                                    name="return"
                                    label="بازگشت پول به این کارت"
                                    register={register}
                                    validationRules={{ required: 'یک کارت را انتخاب کنید' }}
                                    errors={errors.return}
                                />

                            </div>
                            <Image src='/assets/images/logo.png' className={`${isChecked ? '' : 'grayscale'}`} width={100} height={100} alt="" />

                        </div>
                        <div className="flex flex-col gap-y-4 mt-6">
                            <span className="text-xs font-medium text-[#111]"> وضعیت
                                <span className="bg-[#4285F4] text-white rounded-3xl px-1 py-1 mx-1"> تایید پیامکی </span>
                                خرید تا سقف 50 میلیون تومان
                            </span>
                            <Button className="rounded-[32px] w-full py-2 border bg-transparent text-xs text-[#111]/80 font-semibold border-[#111]/80">احراز هویت</Button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default CardAuth;

// components/withdrawal.tsx
"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Common/Buttons";
import CustomInput from "../Common/InputField";
import WithdrawIcon from "../Common/icons/withdrawIcon";
import Image from "next/image";
import CustomCheckbox from "../Common/CustomCheckbox";
import Approval from "./Approval";
import { IWalletProps } from "@/types";
import { getUserDataFromLocalStorage, toastAlert } from "@/utils";
import { debitWalletBalanceService } from "@/services/wallet/wallet";
import LoadingIcon from "../Common/icons/loadingIcon";

interface IFormInput {
    walletIncreaseAmount: number;
    return: boolean;
    return1: boolean;
}

const Withdrawal = () => {
    const userData = getUserDataFromLocalStorage(); 
    const [isChecked, setIsChecked] = useState(0);
    const [showLoading, setShowLoading] = useState(false);
    const [transactionId, setTransactionId] = useState(0);
    const [isRequestedWalletIncrease, setIsRequestedWalletIncrease] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {

        setShowLoading(true);
        let walletData = {
            phone: userData?.userName,
            type: 'debit',
            amount: data.walletIncreaseAmount,
            locked: 0,
            description: 'برداشت موجودی'
        } as IWalletProps;
        try {
            const response = await debitWalletBalanceService(walletData);
            toastAlert({ msg: response?.data?.message, type: "success" })
            setShowLoading(false);
            setIsRequestedWalletIncrease(true);
            setTransactionId(response?.data?.transaction_id);
            reset();
        } catch (error: any) {
            toastAlert({ msg: error.message })
            setShowLoading(false);
            setIsRequestedWalletIncrease(false);
        }
    };


    return (
        <div className="py-2">
            {!isRequestedWalletIncrease ?
                <div className="mt-8 container-px lg:w-2/3 w-full mx-auto">
                    <div className="flex items-center justify-between">
                        <div className=""></div>
                        <WithdrawIcon className="" />
                    </div>
                    <div className=" flex flex-col gap-y-4">
                        <h3 className='font-bold text-xl text-white'>برداشت وجــــــه</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 gap-[14px] items-center justify-center mt-4 '>
                                <CustomInput
                                    id="walletIncreaseAmount"
                                    type="text"
                                    label="مقدار*"
                                    name="walletIncreaseAmount"
                                    register={register}
                                    errors={errors.walletIncreaseAmount}
                                    validationRules={{ required: 'مبلغ را وارد کنید' }}
                                    placeholder="مبلغ را به تومان وارد کنید"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <h3 className='font-bold text-xl text-white mt-4'>حساب های موجود</h3>
                                <div className={`${isChecked ? 'bg-white' : 'bg-white/80'}  rounded-3xl flex gap-x-2 py-6 px-5 items-center justify-evenly mt-12`}>
                                    <div className="flex flex-col gap-y-3">
                                        <span className="text-[#111] font-semibold text-sm">محمدرضا بیضاوی</span>
                                        <div className="flex flex-col gap-y-1">
                                            <span className="font-medium text-[#111] text-sm font-[Tomorrow] tracking-[1px]">5047 - 0611 - 6598 - 3255</span>
                                            <span className="font-normal text-[#111]/50 text-[9px] font-[Tomorrow] tracking-[2px]">IR800003253659874125632541</span>
                                        </div>
                                        <CustomCheckbox
                                            id="return"
                                            label="بازگشت پول به این کارت"
                                            register={register}
                                            name="return"
                                            checked={isChecked == 1 ? true : false}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                if (e.target.checked)
                                                    setIsChecked(1);
                                                else
                                                    setIsChecked(0)
                                            }}
                                            validationRules={{ required: 'یک کارت را انتخاب کنید' }}
                                            errors={errors.return}
                                        />
                                    </div>
                                    <Image src='/assets/images/logo.png' className={`${isChecked ? '' : 'grayscale'}`} width={100} height={100} alt="" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Button className='mt-3 py-[14px] font-semibold text-white bg-[#F04242] rounded-[40px] flex items-center justify-center gap-x-4' type='submit'>
                                    برداشت وجه
                                    {showLoading && <LoadingIcon className="fill-gray-600" />}

                                </Button>
                                <Button className='mt-3 py-[14px] font-semibold bg-white rounded-[40px]' type='button'>
                                    مدیریت کارت های بانکی
                                </Button>
                            </div>
                        </form>
                    </div>
                </div> : <Approval transactionId={transactionId} />}

        </div>
    );
};

export default Withdrawal;

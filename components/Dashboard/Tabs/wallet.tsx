import Button from "@/components/Common/Buttons";
import LoadingIcon from "@/components/Common/icons/loadingIcon";
import CustomInput from "@/components/Common/InputField";
import { creditWalletBalanceService, WalletTransactionsService } from "@/services/wallet/wallet";
import { IWalletProps } from "@/types";
import { getUserDataFromLocalStorage, numberFormat, toastAlert } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";

interface IFormInput {
    walletAmount: number;
}

// Define the type of transactions if you know the structure
interface ITransaction {
    bankName: string;
    date: string;
    transaction_id: string;
    amount: string;
}

const Wallet = () => {
    const userData = getUserDataFromLocalStorage();
    const [Loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [WalletTransactions, setWalletTransactions] = useState<ITransaction[]>([]); // Initialize as an array
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
            type: 'credit',
            amount: data.walletAmount,
            locked: 0,
            description: 'افزایش موجودی'
        } as IWalletProps;
        try {
            const response = await creditWalletBalanceService(walletData);
            toastAlert({ msg: response?.data?.message, type: "success" })
            setShowLoading(false);
            reset();
        } catch (error: any) {
            toastAlert({ msg: error.message })
            setShowLoading(false);
        }
    };

    useEffect(() => {
        const getWalletTransactions = async () => {
            setLoading(true);
            try {
                const response = await WalletTransactionsService(userData?.userName);
                setWalletTransactions(response?.data?.transactions || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching wallet transactions", error);
                setWalletTransactions([]);
                setLoading(false);
            }
        }
        getWalletTransactions();
    }, [userData?.userName]);

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
                        <Button className='mt-3 py-[14px] font-semibold rounded-[40px]  flex items-center justify-center gap-x-4 ' type='submit'>
                            افزودن موجودی
                            {showLoading && <LoadingIcon className="fill-gray-600" />}
                        </Button>
                    </div>
                </form>
            </div>
            <div className="mt-8">
                <h3 className='font-bold text-xl text-white'>تراکنش‌ها</h3>
                {!Loading ? (
                    <div className="flex flex-col gap-y-[10px] mt-4">
                        {WalletTransactions.map((transaction, index) => (
                            <div key={index} className="bg-white/5 py-3 px-2 rounded-2xl flex gap-x-3 items-center lg:justify-between lg:px-10 justify-evenly">
                                <Image src='/assets/images/logo.png' className='' width={50} height={50} alt="" />
                                <div className="flex flex-col gap-y-1">
                                    <h4 className="text-[14px] max-[376px]:text-[12px] font-bold text-white">پرداخت بانک شهر</h4>
                                    <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">{transaction.date}</span>
                                    <span className="text-xs max-[376px]:text-[10px] font-medium text-white/50">شماره پیگیری {transaction.transaction_id}</span>
                                </div>
                                <div className="flex flex-col items-center gap-y-1">
                                    <span className="text-white 3xl:text-[22px] font-semibold text-[14px] max-[376px]:text-[12px]">{numberFormat(transaction.amount)} تومان</span>
                                    <Button className="px-2 py-1 rounded-[21px] text-[#111111] text-nowrap text-[12px] max-[376px]:text-[10px] font-semibold">
                                        <span>تکمیل شده</span>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <div className="h-[20vh] min-h-[50vh] w-full flex items-center justify-center py-6"><BarLoader width={100} color="white" /></div>}
            </div>
        </>
    );
};

export default Wallet;

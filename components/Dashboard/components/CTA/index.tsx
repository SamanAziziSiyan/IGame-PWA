import PlusIcon from "@/components/Common/icons/plus";
import WalletIcon from "@/components/Common/icons/wallet";
import WithdrawIcon from "@/components/Common/icons/withdrawIcon";
import { WalletBalanceService } from "@/services/wallet/wallet";
import { getUserDataFromLocalStorage, numberFormat } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WalletBalance } from "../types";



const CTA = () => {
  const userData = getUserDataFromLocalStorage();
  const [WalletBalance, setWalletBalance] = useState<WalletBalance>({ balance: 0 });
  useEffect(() => {
    const getWalletBalance = async () => {
      const response = await WalletBalanceService(userData?.userName);
      setWalletBalance(response.data);
    }
    getWalletBalance();

  }, [userData?.userName])
  return (
    <>
      <div className="bg-[#282828]  rounded-[28px] py-[7px] px-[9px]  lg:hidden flex items-center justify-between">
        <div className="flex items-center gap-x-[18px]">
          <Image
            src="/assets/images/male-avatar.png"
            alt="avatar"
            className="max-xl:w-10 max-xl:h-10"
            width={74}
            height={74}
          />
          <div className="flex items-center gap-x-2">
            <span className="xl:text-xl text-[14px] font-bold text-white">
              سلام، {userData?.userName} عزیـــــز
            </span>
            <Image
              src="/assets/images/hand.png"
              alt="avatar"
              className="max-xl:w-5 max-xl:h-5"
              width={32}
              height={32}
            />
          </div>
        </div>
        <Link href={'/dashboard/?tab=profile'} className="bg-[#fff] lg:p-2 py-1 px-2 rounded-[22px]">
          <span className="text-[#111] font-semibold lg:text-base text-[12px]">ویــرایش</span>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4 mt-[34px]">
        <div className="bg-[#282828]  rounded-[28px] p-6  lg:flex hidden items-center justify-between">
          <div className="flex items-center gap-x-[18px]">
            <Image
              src="/assets/images/male-avatar.png"
              alt="avatar"
              width={74}
              height={74}
            />
            <div className="flex items-center gap-x-2">
              <span className="xl:text-xl text-[14px] font-bold text-white">
                سلام، {userData?.userName} عزیـــــز
              </span>
              <Image
                src="/assets/images/hand.png"
                alt="avatar"
                width={32}
                height={32}
              />
            </div>
          </div>
          <Link href={'/dashboard/?tab=profile'} className="bg-[#fff] p-2 rounded-[22px]">
            <span className="text-[#111] font-semibold">ویــرایش</span>
          </Link>
        </div>

        <div className="bg-[#CCFB4B] overflow-hidden relative rounded-[28px] p-6  flex md:flex-row lg:flex-col xl:flex-row flex-col items-center justify-between">
          <div className="flex items-center xl:gap-x-[18px] gap-x-2">
            <div className="bg-[#111111]/40 xl:p-2.5 p-2 rounded-2xl flex items-center justify-center">
              <WalletIcon className="max-xl:w-8 max-xl:h-8" />
            </div>
            <div className="flex items-center gap-x-2">
              <span className="xl:text-xl text-[12px] font-bold text-[#111111]/60">
                کیف ‌پــــــول{" "}
              </span>
            </div>
          </div>
          <div className="">
            <span className="text-[#111] xl:text-[34px] text-[22px] font-extrabold">
              {numberFormat(WalletBalance?.balance)}
            </span>
            <span className="xl:text-[18px] text-[12px] font-semibold text-[#111111]">
              تومان
            </span>
          </div>

          <div className="absolute rounded-full border-[13px] border-[#111111] left-[-9px] top-[-12px]">
            <Link href={'/dashboard/?tab=wallet'}>
              <div className="bg-white xl:p-3 p-2 rounded-full">
                <PlusIcon className="max-xl:w-2 max-xl:h-2" />
              </div>
            </Link>
          </div>
        </div>

        <Link href='/withdrawal' className="bg-[#F04242] text-center text-white flex rounded-[32px] items-center gap-x-2 justify-center py-3">
          <WithdrawIcon className="lg:hidden flex" color="#fff" size={21.5} />
          <WithdrawIcon className="lg:flex hidden" color="#fff" size={40} />
          برداشت وجه
        </Link>
        {/* 
        <div className="bg-[#fff]/30 rounded-[28px] xl:p-6 p-2 flex md:flex-row lg:flex-col xl:flex-row flex-col items-center justify-between">
          <div className="flex items-center xl:gap-x-[18px] gap-x-7">
            <div className="bg-[#111111]/40 p-2 rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/images/Classification.png"
                className="max-xl:w-6 max-xl:h-6"
                alt="avatar"
                width={40}
                height={40}
              />
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <span className="text-white/60 xl:text-xl text-[12px] font-semibold">کاربــــرسطــح</span>
            </div>
          </div>
          <div className="flex items-center justify-evenly xl:gap-x-[55px] gap-x-7">
            <span className="text-white font-extrabold xl:text-[34px] text-[22px] drop-shadow-xl shadow-black ">
              {" "}
              برنز
            </span>
            <span className="text-[#fff] xl:text-[22px] text-[14px] font-bold">ارتقا سطح...</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CTA;

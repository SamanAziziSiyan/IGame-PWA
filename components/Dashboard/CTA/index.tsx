import Button from "@/components/Common/Buttons";
import PlusIcon from "@/components/Common/icons/plus";
import WalletIcon from "@/components/Common/icons/wallet";
import Image from "next/image";

const CTA = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 mt-[34px]">
      <div className="bg-[#282828] rounded-[28px] p-6  flex items-center justify-between">
        <div className="flex items-center gap-x-[18px]">
          <Image
            src="/assets/images/avatar.png"
            alt="avatar"
            width={74}
            height={74}
          />
          <div className="flex items-center gap-x-2">
            <span className="text-xl font-bold text-white">
              سلام، زهــرا عزیـــــز
            </span>
            <Image
              src="/assets/images/hand.png"
              alt="avatar"
              width={32}
              height={32}
            />
          </div>
        </div>
        <Button className="bg-[#fff] p-2 rounded-[22px]">
          <span className="text-[#111]">ویــرایش</span>
        </Button>
      </div>

      <div className="bg-[#CCFB4B] overflow-hidden relative rounded-[28px] p-6  flex items-center justify-between">
        <div className="flex items-center gap-x-[18px]">
          <div className="bg-[#111111]/40 p-2.5 rounded-2xl flex items-center justify-center">
            <WalletIcon />
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-xl font-bold text-[#111111]/60">
              کیف ‌پــــــول{" "}
            </span>
          </div>
        </div>
        <div className="">
          <span className="text-[#111] text-[34px] font-extrabold">
            ۱٫۴۰0٫00۰
          </span>
          <span className="text-[18px] font-semibold text-[#111111]">
            تومان
          </span>
        </div>

        <div className="absolute rounded-full border-[13px] border-[#111111] left-[-9px] top-[-12px]">
          <div className="bg-white p-3 rounded-full">
            <PlusIcon />
          </div>
        </div>
      </div>

      <div className="bg-[#fff]/30 rounded-[28px] p-6  flex items-center justify-between">
        <div className="flex items-center gap-x-[18px]">
          <div className="bg-[#111111]/40 p-2 rounded-2xl flex items-center justify-center">
            <Image
              src="/assets/images/Classification.png"
              alt="avatar"
              width={40}
              height={40}
            />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <span className="text-white/60 text-xl">کاربــــرسطــح</span>
            <span className="text-white font-extrabold text-[34px] drop-shadow-xl shadow-black ">
              {" "}
              برنز
            </span>
          </div>
        </div>
        <span className="text-[#fff] text-[22px] font-bold">ارتقا سطح...</span>
      </div>
    </div>
  );
};

export default CTA;

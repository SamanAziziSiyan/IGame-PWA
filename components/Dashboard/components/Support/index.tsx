import Button from "@/components/Common/components/Elements/Buttons";
import PhoneIcon from "@/components/Common/icons/phone";
import PlusIcon from "@/components/Common/icons/plus";
import WalletIcon from "@/components/Common/icons/wallet";
import Image from "next/image";

const Support = () => {
  return (
    <div className="xl:py-10 py-4 relative bg-[#4285F4] rounded-[17px] flex xl:justify-center xl:px-0 px-7 mt-16">
      <div className="flex xl:flex-row flex-col xl:gap-y-0 gap-y-1 xl:items-center items-start xl:gap-x-[34px] gap-x-0 xl:pl-32">
        <PhoneIcon className="max-xl:hidden" />
        <h5 className="xl:text-2xl text-base font-bold text-white">درخواست‌ پشتیبانی </h5>
        <span className="xl:text-lg text-[14px] text-white/80">
          نیاز به پشتیبانــــی داریـــد..؟؟
        </span>
        <Button className="text-[#4285F4] xl:text-base text-[12px] xl:px-[72px] px-[40px] py-3 rounded-[32px] bg-white">
          <span>ثبت درخواست</span>
        </Button>


      </div>
      <Image
        className="absolute md:left-40 left-2 -top-12 max-md:w-[150px] max-md:h-[180px]"
        alt="support"
        src={"/assets/images/support.png"}
        width={229}
        height={178}
      />
    </div>
  );
};

export default Support;

import Button from "@/components/Common/Buttons";
import PhoneIcon from "@/components/Common/icons/phone";
import PlusIcon from "@/components/Common/icons/plus";
import WalletIcon from "@/components/Common/icons/wallet";
import Image from "next/image";

const Support = () => {
  return (
    <div className="py-10 relative bg-[#4285F4] rounded-[17px] flex justify-center mt-16">
      <div className="flex items-center gap-x-[34px] pl-32">
        <PhoneIcon />
        <h5 className="text-2xl font-bold text-white">درخواست‌ پشتیبانی </h5>
        <span className="text-lg text-white/80">
          نیاز به پشتیبانــــی داریـــد..؟؟
        </span>
        <Button className="text-[#4285F4] px-[72px] py-3 rounded-[32px] bg-white">
          <span>ثبت درخواست</span>
        </Button>

        <Image
          className="absolute left-40 -top-12"
          alt="support"
          src={"/assets/images/support.png"}
          width={229}
          height={178}
        />
      </div>
    </div>
  );
};

export default Support;

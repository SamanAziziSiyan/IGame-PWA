// components/trust.tsx

import Button from "@/components/Common/Buttons";
import CallIcon from "@/components/Common/icons/callIcon";
import DeliveryIcon from "@/components/Common/icons/deliveryIcon";
import EnmadIcon from "@/components/Common/icons/enmadIcon";
import PriceIcon from "@/components/Common/icons/priceIcon";


const Trust = () => {
    return (
        <div className="container-px ">
            <div className="grid lg:grid-cols-4 grid-cols-2 xl:gap-x-6 gap-x-2 lg:gap-y-0 gap-y-2 lg:mt-20 mt-6 xl:px-[131px] px-0">
                <Button type="button" className="bg-[#CCFB4B]/10 lg:rounded-[10px] rounded-lg border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <PriceIcon className="max-xl:w-4 max-xl:h-4" />
                    <span className="font-medium 3xl:text-[22px] xl:text-lg text-[14px]">تضمین کمتریـن قیمت</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 lg:rounded-[10px] rounded-lg border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <CallIcon className="max-xl:w-4 max-xl:h-4"/>
                    <span className="font-medium 3xl:text-[22px] xl:text-lg text-[14px]">پشتیبانی آنلاین و تلفنی</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 lg:rounded-[10px] rounded-lg border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <DeliveryIcon className="max-xl:w-4 max-xl:h-4"/>
                    <span className="font-medium 3xl:text-[22px] xl:text-lg text-[14px]">تحويل در کمترین زمان</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 lg:rounded-[10px] rounded-lg border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <EnmadIcon className="max-xl:w-4 max-xl:h-4"/>
                    <span className="font-medium 3xl:text-[22px] xl:text-lg text-[14px]">پرداخت ایمن و اینمــاد</span>
                </Button>
            </div>
        </div>
    );
};

export default Trust;

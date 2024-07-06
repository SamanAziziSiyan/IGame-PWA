// components/trust.tsx

import Button from "@/components/Common/Buttons";
import CallIcon from "@/components/Common/icons/callIcon";
import DeliveryIcon from "@/components/Common/icons/deliveryIcon";
import EnmadIcon from "@/components/Common/icons/enmadIcon";
import PriceIcon from "@/components/Common/icons/priceIcon";


const Trust = () => {
    return (
        <div className="container-px ">
            <div className="grid grid-cols-4 gap-x-6 mt-20 px-[131px]">
                <Button type="button" className="bg-[#CCFB4B]/10 rounded-[10px] border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <PriceIcon />
                    <span className="font-medium 3xl:text-[22px] text-lg">تضمین کمتریـن قیمت</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 rounded-[10px] border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <CallIcon />
                    <span className="font-medium 3xl:text-[22px] text-lg">پشتیبانی آنلاین و تلفنی</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 rounded-[10px] border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <DeliveryIcon />
                    <span className="font-medium 3xl:text-[22px] text-lg">تحويل در کمترین زمان</span>
                </Button>
                <Button type="button" className="bg-[#CCFB4B]/10 rounded-[10px] border-[#CCFB4B]/60 py-1 border text-white flex items-center justify-evenly">
                    <EnmadIcon />
                    <span className="font-medium 3xl:text-[22px] text-lg">پرداخت ایمن و اینمــاد</span>
                </Button>
            </div>
        </div>
    );
};

export default Trust;

import Image from "next/image";

const SpecialOffers = () => {
    return (
        <div className="container-px">
            <div className="grid xl:grid-cols-3 grid-cols-1 py-8 w-full">
                <div className="bg-[url('/assets/images/specialCardBg.png')] p-3 h-full min-h-max w-full col-span-1 bg-center bg-cover bg-no-repeat ">
                    <div className="w-full flex gap-3">
                        <Image src="/assets/images/specialCardItem.png" alt="specialCardItem" width={77} height={77}/>
                        <div className="flex flex-col gap-2">
                            <div className="bg-[#F04242] max-w-max py-[2px] px-1 rounded-[22px] text-white md:text-sm text-[10px] font-semibold">
                                <span>پیشنهاد ویـــــژه </span>
                            </div>
                            <h2 className="text-white/60 md:text-base text-[12px]">خرید پرایم گیمینگ PP19 Bizon Gold Epic Weapon</h2>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-7">
                        <button className="bg-[#CCFB4B] text-[#111111] md:px-[72px] px-[50px] py-1 rounded-[21px]">خرید</button>
                        <span className="md:text-[22px] text-[15px] pl-3 text-white font-semibold">۱٫۴۰0٫00۰ ﺗﻮﻣﺎن</span>
                    </div> 
                </div>                
            </div>
        </div>
    );
};

export default SpecialOffers;

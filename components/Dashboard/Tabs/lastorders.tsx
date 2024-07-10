// components/LastOrders.tsx

import Button from "@/components/Common/Buttons";
import EyeIcon from "@/components/Common/icons/Eye";
import Image from "next/image";

const LastOrders = () => {
    return (
        <div className="mt-10">
            <h4 className="text-xl text-white font-bold">آخرین سفارشات شما</h4>

            <div className="lg:flex hidden flex-col gap-4 mt-10">
                <div className="flex flex-col bg-white/5 rounded-[17px]">
                    <div className="flex lg:flex-row flex-col lg:items-center items-start  3xl:gap-x-[134px] xl:gap-x-[80px] gap-x-[10px] xl:py-3 py-1 xl:px-5 px-2">
                        <div className="flex items-center gap-x-4">
                            <Image
                                alt="order"
                                src={"/assets/images/game-3.png"}
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold">660 سی پی کالاف</h4>
                                <span className="text-white/50 text-nowrap xl:text-[14px]">خرید مستقیم از Activision</span>
                            </div>
                        </div>

                        <div className="xl:flex hidden items-center gap-x-4">
                            <span className="text-white/50 text-nowrap">شماره سفارش</span>
                            <span className="text-white">12346</span>
                        </div>

                        <div className="flex items-center gap-x-6">
                            <div className="flex flex-col">
                                <span className="text-white/50 text-nowrap">نام کاربری (ایمیل)</span>
                                <span className="text-white/50 text-nowrap">رمز عبور</span>
                                <span className="text-white/50 text-nowrap"> نام درون بازی</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white">hi@siamak.me </span>
                                <span className="text-white"> This is my password</span>
                                <span className="text-white">SiaMA@k</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-10">
                            <div className="flex items-center gap-x-3">
                                <span className="text-white/50 text-nowrap"> مبلـــغ کل</span>
                                <span className="text-white 3xl:text-[22px] text-[18px]">81,000 تومان</span>
                            </div>
                            <Button className="px-4 py-1 rounded-[21px] text-[#111111] text-nowrap font-semibold">
                                <span>در انتظار پرداخت</span>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-x-1 ">
                            <EyeIcon />
                            <span className="text-white xl:text-[14px]">بیشتر ...</span>
                        </div>
                    </div>

                    <div className="w-full border-t border-white/20 py-3 xl:px-5 xl:pr-14 xl:pl-7">
                        <div className="grid grid-cols-5 gap-x-4 items-center justify-center w-full">
                            <div className="col-span-2 flex text-[#4285F4] font-medium justify-evenly">
                                <span className="xl:text-base">کد تخفیف استفاده شده</span>
                                <span className="xl:text-[22px]">1234567891011</span>
                            </div>
                            <div className="col-span-1 flex justify-evenly">
                                <span>مبلغ تخفیف</span>
                                <span className="xl:text-base text-[#F04242]">69000 تومان</span>
                            </div>
                            <div className="col-span-2 justify-evenly flex">
                                <span className="xl:text-[22px] text-[#CCFB4B] flex justify-evenly xl:gap-x-4 items-center">
                                    <span className="text-[#FFFFFF]/50 xl:text-base">
                                        مبلغ قابل پرداخت
                                    </span>
                                    69000 تومان
                                </span>
                                <Button className="xl:w-1/2 rounded-2xl py-1">
                                    پرداخت
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden flex flex-col gap-4 mt-10">
                <div className="flex flex-col bg-white/5 rounded-[17px]">
                    <div className="flex lg:flex-row flex-col gap-x-[10px] xl:py-3 py-1 xl:px-5 px-2">
                        <div className="flex items-center justify-between w-full gap-x-4 border-b border-[#FFFFFF]/20 py-2">
                            <Image
                                alt="order"
                                src={"/assets/images/game-3.png"}
                                className="max-lg:w-14 max-lg:h-14"
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col">
                                <h4 className="text-white text-[14px] font-bold">660 سی پی کالاف</h4>
                                <span className="text-white/50 text-nowrap text-[12px]">خرید مستقیم از Activision</span>
                            </div>
                            <div className="flex flex-col items-center gap-x-10">
                                <div className="flex items-center gap-x-3">
                                    <span className="text-white 3xl:text-[22px] text-[14px]">81,000 تومان</span>
                                </div>
                                <Button className="px-4 text-[14px] py-1 rounded-[21px] text-[#111111] text-nowrap font-semibold">
                                    <span>در انتظار پرداخت</span>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-6 justify-between text-[14px] mt-4">
                            <div className="flex flex-col">
                                <span className="text-white/50 text-nowrap">نام کاربری (ایمیل)</span>
                                <span className="text-white/50 text-nowrap">رمز عبور</span>
                                <span className="text-white/50 text-nowrap"> نام درون بازی</span>
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-white">hi@siamak.me </span>
                                <span className="text-white"> This is my password</span>
                                <span className="text-white">SiaMA@k</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-1 ">
                            <EyeIcon />
                            <span className="text-white text-[14px] font-bold">بیشتــر ...</span>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-full py-3 flex flex-col justify-center">
                            <div className=" flex text-[#4285F4] font-medium justify-between">
                                <span className="xl:text-base">کد تخفیف استفاده شده</span>
                                <span className="">1234567891011</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-white/50 text-nowrap">شماره سفارش</span>
                                <span className="text-white">12346</span>
                            </div>

                            <div className=" flex justify-between">
                                <span>مبلغ تخفیف</span>
                                <span className="xl:text-base text-[#F04242]">69000 تومان</span>
                            </div>
                            <div className=" justify-between flex">
                                <span className="text-[#FFFFFF]/50 xl:text-base">
                                    مبلغ قابل پرداخت
                                </span>
                                69000 تومان
                            </div>
                        </div>
                        <Button className="w-full rounded-2xl py-1">
                            پرداخت
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastOrders;

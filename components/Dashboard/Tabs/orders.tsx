// components/Orders.tsx

import Button from "@/components/Common/Buttons";
import EyeIcon from "@/components/Common/icons/Eye";
import Image from "next/image";
import { useState } from "react";

const Orders = () => {
    const [page, setPage] = useState<number>(1);

    return (
        <div className="mt-10">
            <div className="flex items-center  gap-x-8">
                <h4 className="text-xl text-nowrap text-white font-bold">سفارشات شما</h4>
                <div className="flex gap-x-4 items-start justify-start w-full">
                    <Button type="button" className="py-[9px] flex gap-x-1 pl-10 items-center px-4 h-full bg-white/20 border-[1.28px] border-white/60 rounded-xl text-white">
                        <span className="bg-white font-semibold text-sm rounded-full text-[#111] p-1 w-7 h-7 flex items-center justify-center align-middle">41</span>
                        <span className="font-medium text-sm">کل سفارشات</span>
                    </Button>
                    <Button type="button" className="py-[9px] flex gap-x-1 pl-10 items-center px-4 h-full bg-[#4285F4]/30 border-[1.28px] border-[#4285F4]/80 rounded-xl text-[#4285F4]">
                        <span className="bg-[#4285F4] font-semibold text-sm rounded-full text-white p-1 w-7 h-7 flex items-center justify-center align-middle">0</span>
                        <span className="font-medium text-sm">سفارشات جاری</span>
                    </Button>
                    <Button type="button" className="py-[9px] flex gap-x-1 pl-10 items-center px-4 h-full bg-[#CCFB4B]/20 border-[1.28px] border-[#CCFB4B]/60 rounded-xl text-[#CCFB4B]">
                        <span className="bg-[#CCFB4B] font-semibold text-sm rounded-full text-[#111] p-1 w-7 h-7 flex items-center justify-center align-middle">5</span>
                        <span className="font-medium text-sm">سفارشات موفق</span>
                    </Button>
                    <Button type="button" className="py-[9px] flex gap-x-1 pl-10 items-center px-4 h-full bg-[#F04242]/20 border-[1.28px] border-[#F04242]/60 rounded-xl text-[#F04242]">
                        <span className="bg-[#F04242] font-semibold text-sm rounded-full text-white p-1 w-7 h-7 flex items-center justify-center align-middle">0</span>
                        <span className="font-medium text-sm">سفارشات کنسلی</span>
                    </Button>

                </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <div className="flex items-center 3xl:gap-x-[134px] gap-x-[90px] py-3 px-5 bg-white/5 rounded-[17px]">
                    <div className="flex items-center gap-x-4">
                        <Image
                            alt="order"
                            src={"/assets/images/game-3.png"}
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col">
                            <h4 className="text-white font-bold">660 سی پی کالاف</h4>
                            <span className="text-white/50">خرید مستقیم از Activision</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <span className="text-white/50">شماره سفارش</span>
                        <span className="text-white">12346</span>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <div className="flex flex-col">
                            <span className="text-white/50">نام کاربری (ایمیل)</span>
                            <span className="text-white/50">رمز عبور</span>
                            <span className="text-white/50"> نام درون بازی</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white">نام </span>
                            <span className="text-white"> عبور</span>
                            <span className="text-white"> درون بازی</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-10">
                        <div className="flex items-center gap-x-3">
                            <span className="text-white/50"> مبلـــغ کل</span>
                            <span className="text-white 3xl:text-[22px] text-[18px]">81,000 تومان</span>
                        </div>
                        <Button className="px-6  py-1 rounded-[21px] text-[#111111] font-semibold">
                            <span>تکمیل شد</span>
                        </Button>
                    </div>

                    <div className="flex items-center gap-x-1 ">
                        <EyeIcon />
                        <span className="text-white">بیشتر ...</span>
                    </div>
                </div>

                <div className="flex flex-col bg-white/5 rounded-[17px]">
                    <div className="flex items-center  3xl:gap-x-[134px] gap-x-[80px] py-3 px-5">
                        <div className="flex items-center gap-x-4">
                            <Image
                                alt="order"
                                src={"/assets/images/game-3.png"}
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold">660 سی پی کالاف</h4>
                                <span className="text-white/50">خرید مستقیم از Activision</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <span className="text-white/50">شماره سفارش</span>
                            <span className="text-white">12346</span>
                        </div>

                        <div className="flex items-center gap-x-6">
                            <div className="flex flex-col">
                                <span className="text-white/50">نام کاربری (ایمیل)</span>
                                <span className="text-white/50">رمز عبور</span>
                                <span className="text-white/50"> نام درون بازی</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white">نام </span>
                                <span className="text-white"> عبور</span>
                                <span className="text-white"> درون بازی</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-10">
                            <div className="flex items-center gap-x-3">
                                <span className="text-white/50"> مبلـــغ کل</span>
                                <span className="text-white 3xl:text-[22px] text-[18px]">81,000 تومان</span>
                            </div>
                            <Button className="px-6  py-1 rounded-[21px] text-[#111111] font-semibold">
                                <span>در انتظار پرداخت</span>
                            </Button>
                        </div>

                        <div className="flex items-center gap-x-1 ">
                            <EyeIcon />
                            <span className="text-white">بیشتر ...</span>
                        </div>
                    </div>

                    {/* @NOTE: This is just for those with waiting for payments */}
                    <div className="w-full border-t border-white/20 py-3 px-5">
                        <div className="grid grid-cols-5 gap-x-4 items-center justify-center w-full">
                            <div className="col-span-2 flex text-[#4285F4] justify-between">
                                <span>کد تخفیف استفاده شده</span>
                                <span>1234567891011</span>
                            </div>
                            <div className="col-span-1 flex justify-between">
                                <span>مبلغ تخفیف</span>
                                <span>69000 تومان</span>
                            </div>
                            <div className="col-span-2 justify-between flex">
                                <span>مبلغ قابل پرداخت 69000 تومان</span>
                                <Button className="w-full rounded-2xl py-1">
                                    پرداخت
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center  3xl:gap-x-[134px] gap-x-[90px] py-3 px-5 bg-white/5 rounded-[17px]">
                    <div className="flex items-center gap-x-4">
                        <Image
                            alt="order"
                            src={"/assets/images/game-3.png"}
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col">
                            <h4 className="text-white font-bold">660 سی پی کالاف</h4>
                            <span className="text-white/50">خرید مستقیم از Activision</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                        <span className="text-white/50">شماره سفارش</span>
                        <span className="text-white">12346</span>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <div className="flex flex-col">
                            <span className="text-white/50">نام کاربری (ایمیل)</span>
                            <span className="text-white/50">رمز عبور</span>
                            <span className="text-white/50"> نام درون بازی</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white">نام </span>
                            <span className="text-white"> عبور</span>
                            <span className="text-white"> درون بازی</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-10">
                        <div className="flex items-center gap-x-3">
                            <span className="text-white/50"> مبلـــغ کل</span>
                            <span className="text-white 3xl:text-[22px] text-[18px]">81,000 تومان</span>
                        </div>
                        <Button className="px-6  py-1 rounded-[21px] text-[#111111] font-semibold">
                            <span>تکمیل شد</span>
                        </Button>
                    </div>

                    <div className="flex items-center gap-x-1 ">
                        <EyeIcon />
                        <span className="text-white">بیشتر ...</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-x-[75px] mt-6">
                <div>
                    <span className="text-sm font-medium">قبلـی</span>
                </div>
                <div className="">
                    <ul className="flex gap-x-2">
                        <li className="rounded-full flex items-center justify-center align-middle bg-white text-[#111] w-6 h-6 p-3 font-semibold text-[10px]">1</li>
                        <li className="rounded-full flex items-center justify-center align-middle bg-[#2d2d2d] text-white w-6 h-6 p-3 font-semibold text-[10px]">2</li>
                        <li className="rounded-full flex items-center justify-center align-middle bg-[#2d2d2d] text-white w-6 h-6 p-3 font-semibold text-[10px]">3</li>
                        <li className="rounded-full flex items-center justify-center align-middle bg-[#2d2d2d] text-white w-6 h-6 p-3 font-semibold text-[10px]">4</li>
                    </ul>
                </div>
                <div>
                    <span className="text-sm font-medium">بعـدی</span>
                </div>
            </div>
        </div>
    );
};

export default Orders;

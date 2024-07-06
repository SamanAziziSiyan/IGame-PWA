// components/LastOrders.tsx

import Button from "@/components/Common/Buttons";
import EyeIcon from "@/components/Common/icons/Eye";
import Image from "next/image";

const LastOrders = () => {
    return (
        <div className="mt-10">
            <h4 className="text-xl text-white font-bold">آخرین سفارشات شما</h4>

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
                            <span className="text-white text-[22px]">81,000 تومان</span>
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
                            <span className="text-white text-[22px]">81,000 تومان</span>
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
                            <span className="text-white text-[22px]">81,000 تومان</span>
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
        </div>
    );
};

export default LastOrders;

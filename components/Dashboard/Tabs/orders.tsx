// components/Orders.tsx

import Button from "@/components/Common/Buttons";
import EyeIcon from "@/components/Common/icons/Eye";
import { DashboardOrderStatisticsService, OrderListService } from "@/services/orders/orders";
import { getUserDataFromLocalStorage } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Orders = () => {
    const [page, setPage] = useState<number>(1);
    const [isOpen, setIsOpen] = useState(false);
    const [orderStatistics, setOrderStatistics] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const fetchOrderStatistics = async () => {
            try {
                const userData = getUserDataFromLocalStorage();
                const response = await DashboardOrderStatisticsService(userData?.customerID);
                setOrderStatistics(response.data);
            } catch (err) {
                setError("Failed to fetch order statistics");
            } finally {
                setLoading(false);
            }
        };

        const fetchOrderLists = async () => {
            try {
                const userData = getUserDataFromLocalStorage();
                const orders = await OrderListService(userData?.customerID);
                
            } catch (err) {
                console.log(err);
                
            } finally {
            }
        };

        fetchOrderStatistics();
        fetchOrderLists();
    }, []);

    return (
        <div className="mt-10">
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-x-8 gap-x-0 md:gap-y-0 gap-y-2">
                <div className="flex items-center justify-between">
                    <h4 className="md:text-xl text-base text-nowrap text-white font-bold">سفارشات شما</h4>
                    <Link href='/' className="md:text-xl text-base text-nowrap text-[#CCFB4B] md:hidden flex font-bold">نمایش بیشتر..</Link>
                </div>
                <div className="flex gap-x-4 items-start justify-start w-full md:overflow-hidden overflow-scroll">
                    <Button type="button" className="md:py-[9px] py-[6px] flex gap-x-1 md:pl-10 pl-1 text-nowrap items-center px-4 h-full bg-white/20 border-[1.28px] border-white/60 rounded-xl text-white">
                        <span className="bg-white font-semibold md:text-sm text-[10px] rounded-full text-[#111] p-1 w-7 h-7 flex items-center justify-center align-middle">{orderStatistics?.totalItems}</span>
                        <span className="font-medium md:text-sm text-[10px]">کل سفارشات</span>
                    </Button>
                    <Button type="button" className="md:py-[9px] py-[6px] flex gap-x-1 md:pl-10 pl-1 text-nowrap items-center px-4 h-full bg-[#4285F4]/30 border-[1.28px] border-[#4285F4]/80 rounded-xl text-[#4285F4]">
                        <span className="bg-[#4285F4] font-semibold text-sm rounded-full text-white p-1 w-7 h-7 flex items-center justify-center align-middle">{orderStatistics?.data?.currentOrdersCount}</span>
                        <span className="font-medium md:text-sm text-[10px]">سفارشات جاری</span>
                    </Button>
                    <Button type="button" className="md:py-[9px] py-[6px] flex gap-x-1 md:pl-10 pl-1 text-nowrap items-center px-4 h-full bg-[#CCFB4B]/20 border-[1.28px] border-[#CCFB4B]/60 rounded-xl text-[#CCFB4B]">
                        <span className="bg-[#CCFB4B] font-semibold md:text-sm text-[10px] rounded-full text-[#111] p-1 w-7 h-7 flex items-center justify-center align-middle">{orderStatistics?.data?.doneOrdersCount}</span>
                        <span className="font-medium md:text-sm text-[10px]">سفارشات موفق</span>
                    </Button>
                    <Button type="button" className="md:py-[9px] py-[6px] flex gap-x-1 md:pl-10 pl-1 text-nowrap items-center px-4 h-full bg-[#F04242]/20 border-[1.28px] border-[#F04242]/60 rounded-xl text-[#F04242]">
                        <span className="bg-[#F04242] font-semibold md:text-sm text-[10px] rounded-full text-white p-1 w-7 h-7 flex items-center justify-center align-middle">{orderStatistics?.data?.refundedOrdersCount}</span>
                        <span className="font-medium md:text-sm text-[10px]">سفارشات کنسلی</span>
                    </Button>

                </div>
            </div>


            <div className="flex flex-col gap-4 mt-10">


                <div className="flex flex-col bg-white/5 rounded-[17px]">
                    <div className="flex xl:flex-row flex-col xl:items-center items-start  3xl:gap-x-[134px] xl:gap-x-[80px] gap-x-[10px] xl:py-3 py-1 xl:px-5 px-2">
                        <div className="flex items-center gap-x-4">
                            <Image
                                alt="order"
                                src={"/assets/images/game-3.png"}
                                width={80}
                                height={80}
                            />
                            <div className="flex flex-col">
                                <h4 className="text-white font-bold">660 سی پی کالاف</h4>
                                <span className="text-white/50 xl:text-[14px]">خرید مستقیم از Activision</span>
                            </div>
                        </div>

                        <div className="xl:flex hidden items-center gap-x-4">
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
                            <Button className="px-4 py-1 rounded-[21px] text-[#111111] text-nowrap font-semibold">
                                <span>در انتظار پرداخت</span>
                            </Button>
                        </div>

                        <div onClick={toggleOpen} className="flex items-center justify-center gap-x-1 ">
                            <EyeIcon />
                            <span className="text-white xl:text-[14px]">بیشتر ...</span>
                        </div>
                    </div>
                    {isOpen &&
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
                    }
                </div>

            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-x-[75px] mt-6">
                <div>
                    <span className="md:text-sm text-[10px] font-medium">قبلـی</span>
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
                    <span className="md:text-sm text-[10px] font-medium">بعـدی</span>
                </div>
            </div>
        </div>
    );
};

export default Orders;

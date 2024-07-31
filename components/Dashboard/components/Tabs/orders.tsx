import Button from "@/components/Common/components/Buttons";
import CloseAccordionIcon from "@/components/Common/icons/closeAccordionIcon";
import EyeIcon from "@/components/Common/icons/Eye";
import Pagination from "@/components/Common/components/Pagination";
import { DashboardOrderStatisticsService, OrderListService } from "@/services/orders/orders";
import { getUserDataFromLocalStorage } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { statusColors } from "../../utils";
import { IOrdersData } from "../types";
import { ContentLoading } from "@/components/Common/components/ContentLoading";



interface ApiResponse {
    status: string;
    errors: any[];
    joinedErrors: string;
    data: IOrdersData[];
    totalItems: number;
}

const ITEMS_PER_PAGE = 5;

const Orders = () => {
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isAccordionOpen, setIsAccordionOpen] = useState<string | null>(null);
    const [OrdersData, setOrdersData] = useState<IOrdersData[]>([]);
    const [orderStatistics, setOrderStatistics] = useState<any>(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const toggleOpen = (targetOrder: string | null) => {
        setIsAccordionOpen(targetOrder);
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
        fetchOrderStatistics();
    }, []);

    useEffect(() => {
        const fetchOrderLists = async () => {
            setLoading(true);
            try {
                const userData = getUserDataFromLocalStorage();
                const orders = await OrderListService(userData?.customerID, page, ITEMS_PER_PAGE);
                const responseData: ApiResponse = orders.data;
                if (responseData.status === 'Success') {
                    setOrdersData(responseData.data); // Set data as an array
                    setTotalPages(Math.ceil(responseData.totalItems / ITEMS_PER_PAGE));
                } else {
                    console.error('Failed to fetch order data:', responseData.errors);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchOrderLists();
    }, [page]);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

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

            {!Loading ? (
                <>
                    {/* Desktop */}
                    <div className="lg:flex hidden flex-col gap-4 mt-10">
                        {OrdersData.map((order: IOrdersData, index: number) => (
                            <div key={index} className="flex flex-col bg-white/5 rounded-[17px]">
                                <div className="flex lg:flex-row flex-col lg:items-center items-start  3xl:gap-x-[134px] xl:gap-x-[80px] gap-x-[10px] xl:py-3 py-1 xl:px-5 px-2">
                                    <div className="flex items-center gap-x-4">
                                        <Image
                                            alt="order"
                                            src={order?.products[0]?.productImageUrl}
                                            width={80}
                                            height={80}
                                        />
                                        <div className="flex flex-col">
                                            <h4 className="text-white font-bold">{order?.products[0]?.title}</h4>
                                            <span className="text-white/50 text-nowrap xl:text-[14px]">خرید مستقیم از Activision</span>
                                        </div>
                                    </div>

                                    <div className="xl:flex hidden items-center gap-x-4">
                                        <span className="text-white/50 text-nowrap">شماره سفارش</span>
                                        <span className="text-white">{order?.code}</span>
                                    </div>

                                    <div className="flex items-center gap-x-6">
                                        <div className="flex flex-col">
                                            <span className="text-white/50 text-nowrap">نام کاربری (ایمیل)</span>
                                            <span className="text-white/50 text-nowrap">رمز عبور</span>
                                            <span className="text-white/50 text-nowrap"> نام درون بازی</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white">{order?.products[0]?.email}</span>
                                            <span className="text-white"> {order?.products[0]?.password}</span>
                                            <span className="text-white">{order?.products[0]?.nameInGame}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-x-10">
                                        <div className="flex items-center gap-x-3">
                                            <span className="text-white/50 text-nowrap"> مبلـــغ کل</span>
                                            <span className="text-white 3xl:text-[22px] text-[18px]">{order?.products[0]?.price}</span>
                                        </div>
                                        <Button className={`px-4 py-1 rounded-[21px] text-[#111111] text-nowrap font-semibold ${statusColors[order?.products[0]?.statusText]}`}>
                                            <span>{order?.products[0]?.statusText}</span>
                                        </Button>
                                    </div>
                                    {order.id !== isAccordionOpen ? (
                                        <div onClick={() => toggleOpen(order.id)} className="flex items-center justify-center gap-x-1 cursor-pointer">
                                            <EyeIcon />
                                            <span className="text-white xl:text-[14px]">بیشتر ...</span>
                                        </div>
                                    ) : (
                                        <div onClick={() => toggleOpen(null)} className="flex items-center justify-center gap-x-1 cursor-pointer">
                                            <CloseAccordionIcon />
                                        </div>
                                    )}
                                </div>

                                {order.id === isAccordionOpen && (
                                    <div className="w-full border-t border-white/20 py-3 xl:px-5 xl:pr-14 xl:pl-7">
                                        <div className="grid grid-cols-5 gap-x-4 items-center justify-center w-full">
                                            <div className="col-span-2 flex text-[#4285F4] font-medium justify-evenly">
                                                <span className="xl:text-base">کد تخفیف استفاده شده</span>
                                                <span className="xl:text-[22px]">{order?.discountCode}</span>
                                            </div>
                                            <div className="col-span-1 flex justify-evenly">
                                                <span>مبلغ تخفیف</span>
                                                <span className="xl:text-base text-[#F04242]">{order?.discountAmount}</span>
                                            </div>
                                            <div className="col-span-2 justify-evenly flex">
                                                <span className="xl:text-[22px] text-[#CCFB4B] flex justify-evenly xl:gap-x-4 items-center">
                                                    <span className="text-[#FFFFFF]/50 xl:text-base">
                                                        مبلغ قابل پرداخت
                                                    </span>
                                                    {order?.paidPrice}
                                                </span>
                                                {order?.products[0]?.statusText === "در حال ثبت سفارش" &&
                                                    <Button className="xl:w-1/2 rounded-2xl py-1">
                                                        پرداخت
                                                    </Button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* Mobile */}
                    <div className="lg:hidden flex flex-col gap-4 mt-10">
                        {OrdersData.map((order: IOrdersData, index: number) => (
                            <div key={index} className="flex flex-col bg-white/5 rounded-[17px]">
                                <div className="flex lg:flex-row flex-col gap-x-[10px] xl:py-3 py-1 xl:px-5 px-2">
                                    <div className="flex items-center justify-between w-full gap-x-4 border-b border-[#FFFFFF]/20 py-2">
                                        <Image
                                            alt="order"
                                            src={order?.products[0]?.productImageUrl}
                                            className="max-lg:w-14 max-lg:h-14"
                                            width={80}
                                            height={80}
                                        />
                                        <div className="flex flex-col">
                                            <h4 className="text-white text-[14px] font-bold">{order?.products[0]?.title}</h4>
                                            <span className="text-white/50 text-nowrap text-[12px]">خرید مستقیم از Activision</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-x-10">
                                            <div className="flex items-center gap-x-3">
                                                <span className="text-white 3xl:text-[22px] text-[14px]">{order?.products[0]?.price}</span>
                                            </div>
                                            <Button className={`px-4 py-1 rounded-[21px] text-[#111111] text-nowrap font-semibold ${statusColors[order?.products[0]?.statusText]}`}>
                                                <span>{order?.products[0]?.statusText}</span>
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
                                            <span className="text-white">{order?.products[0]?.email}</span>
                                            <span className="text-white"> {order?.products[0]?.password}</span>
                                            <span className="text-white">{order?.products[0]?.nameInGame}</span>
                                        </div>
                                    </div>
                                    {order.id !== isAccordionOpen ? (<div onClick={() => {
                                        toggleOpen(order?.id)
                                    }} className="flex items-center justify-center gap-x-1 ">
                                        <EyeIcon />
                                        <span className="text-white text-[14px] font-bold">بیشتــر ...</span>
                                    </div>) : ''}
                                </div>
                                {order.id === isAccordionOpen &&
                                    <div className="">
                                        <div className="w-full py-3 flex flex-col justify-center">
                                            <div className=" flex text-[#4285F4] font-medium justify-between">
                                                <span className="xl:text-base">کد تخفیف استفاده شده</span>
                                                <span className="">{order?.discountCode}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-white/50 text-nowrap">شماره سفارش</span>
                                                <span className="text-white">{order?.code}</span>
                                            </div>

                                            <div className=" flex justify-between">
                                                <span>مبلغ تخفیف</span>
                                                <span className="xl:text-base text-[#F04242]">{order?.discountAmount}</span>
                                            </div>
                                            <div className=" justify-between flex">
                                                <span className="text-[#FFFFFF]/50 xl:text-base">
                                                    مبلغ قابل پرداخت
                                                </span>
                                                {order?.paidPrice}
                                            </div>
                                        </div>
                                        {order?.products[0]?.statusText === "در حال ثبت سفارش" &&
                                            <Button className="xl:w-1/2 rounded-2xl py-1">
                                                پرداخت
                                            </Button>
                                        }
                                    </div>
                                }
                            </div>
                        ))}

                    </div>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                <ContentLoading />
            )}
        </div>
    );
};

export default Orders;

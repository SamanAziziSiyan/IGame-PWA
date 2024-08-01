import Link from "next/link";
import NotificationIcon from "../../icons/notification";
import DropdownMenu from "./DropDownMenu";
import { useState } from "react";
import { getNotificationIcon } from "../../utils";


export const NotificationDropDown = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            message: 'پیام جدید از طرف ایران سی پی',
            time: '2 دقیقه قبل',
            type: 'success'
        },
        {
            id: 2,
            message: 'پروفایل شما تکمیل نیست.',
            time: 'یک ساعت پیش',
            type: 'warning'

        },
        {
            id: 3,
            message: 'سفارش شماره #1234 با موفقیت ارسال شد.',
            time: 'یک ساعت پیش',
            type: 'info'

        },
        {
            id: 4,
            message: 'احراز هویت نکرده اید.',
            time: '3 ساعت پیش',
            type: 'error'

        },
    ]);

    const handleClose = (id: number) => {
        setNotifications(notifications.filter(notification => notification.id !== id));
    };
    return (
        <DropdownMenu
            trigger={
                <button>
                    <NotificationIcon className="max-lg:w-4 max-lg:h-4" />
                </button>
            }
            className="relative"
        >
            <div className="absolute md:left-0 -left-8 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-base font-semibold text-[#111] flex items-center justify-between">
                        اعلانات
                        <NotificationIcon color="#111" size={20} className="max-lg:w-4 max-lg:h-4" />
                    </h3>
                </div>
                <div className="max-h-60 overflow-y-auto">
                    {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">بدون اعلان</div>
                    ) : (
                        notifications.map(notification => (
                            <div key={notification.id} className="p-4 border-b w-full border-gray-200 last:border-b-0 flex flex-col gap-y-2 items-start">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex gap-x-2 items-center">
                                        <div className="flex-shrink-0">
                                            {getNotificationIcon(notification.type)}
                                        </div>
                                        <p className="md:text-[12px] text-[10px] text-gray-800">{notification.message}</p>
                                    </div>
                                    <button
                                        onClick={() => handleClose(notification.id)}
                                        className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        aria-label="Close"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-[10px] text-gray-500">{notification.time}</span>

                            </div>
                        ))
                    )}
                </div>
                <div className="p-4 border-t border-gray-200 text-center">
                    <Link href="/notifications">
                        <span className="text-blue-500 hover:underline">مشاهده همه</span>
                    </Link>
                </div>
            </div>
        </DropdownMenu>
    );
}
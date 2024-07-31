import Link from "next/link";
import { HomeIcon } from '@heroicons/react/24/solid';


export const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-[#111]">
            <div className="relative bg-white bg-opacity-15 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg p-8 max-w-xl mx-auto text-center">
                <h1 className="text-6xl font-bold text-gray-400">404</h1>
                <p className="mt-4 text-xl text-white">صفحه‌ای که دنبالش می‌گردی پیدا نشد!</p>
                <p className="mt-2 text-md text-gray-400">ممکن است این صفحه حذف شده باشد یا آدرس را اشتباه وارد کرده باشید</p>
                <Link href="/" className="mt-6 flex items-stretch justify-center px-6 py-3 text-lg font-semibold text-[#111] bg-[#CCFB4B]/70 rounded-lg shadow-md hover:bg-[#CCFB4B] transition duration-300">
                    برگشت به صفحه اصلی
                    <HomeIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
}
import Image from "next/image";
import Button from "../Common/Buttons";
import Link from "next/link";

const Auth = () => {
    return (
        <div className=" mx-auto ">
            <div className="relative">
                <Image src={'/assets/images/LoginSoldier.png'} className=" relative top-14 mx-auto" width={250} height={400} alt="" />
                <Image src={'/assets/images/LoginSoldier-yellow.png'} className="absolute left-0 top-40" width={249} height={249} alt="" />
            </div>
            <div className="bg-white rounded-t-[50px] py-[50px] px-6 -mt-20 relative !z-50">

                <div className='text-[#111] flex flex-col gap-y-4'>
                    <h3 className='font-bold text-xl'>ثبت و خرید آسان از ایران ســی پـــی </h3>
                    <span className='font-normal text-[14px] text-[#111]/60'>به ساده‌ترین و البه پرسرعت‌ترین روش سفارش خـود را ثبت کنید</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                    <Link href='/login' className='mt-3 py-[14px] bg-[#CCFB4B] text-[#111] text-center font-semibold rounded-[40px]' type='submit'>
                        تایید شماره موبایل
                    </Link>

                    <Link href='/login' className='mt-3 py-[14px] text-center text-white !bg-[#111] font-semibold rounded-[40px]' type='submit'>
                        ورود به حساب کاربری
                    </Link>

                </div>
                <Button className='mt-3 w-full border border-[#111]/15 py-[14px] bg-white font-semibold rounded-[40px] flex items-center justify-center gap-x-2' type='submit'>
                    <Image src={'/assets/images/SSO Icon.png'} width={24} height={24} alt="" />
                    ورود با ایمیـــــــــل
                </Button>
            </div>
        </div>
    );
}

export default Auth;
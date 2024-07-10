// components/AccountInfo.tsx


import AccountAlert from "./AccountInfo/Alert";
import AccountForm from "./AccountInfo/Form";

const AccountInfo = () => {
    return (
        <>
            <div className='text-white flex flex-col gap-y-4'>
                <h3 className='font-bold xl:text-xl text-base'>اطلاعات اکانت : خرید سی پی کالاف دیوتــــی</h3>
                <span className='font-medium xl:text-base text-[14px]'>روش ورود به بازی را انتخاب کنید *</span>
            </div>
            <div className="grid grid-cols-12 xl:gap-x-14 gap-x-4 xl:gap-y-0 gap-y-4 w-full md:mt-4 mt-2 items-center justify-center">
                <AccountForm />
                <AccountAlert />
            </div>
        </>
    );
};

export default AccountInfo;

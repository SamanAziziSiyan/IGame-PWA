'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Use the new API
import LastOrders from './lastorders';
import Orders from './orders';
import Wallet from './wallet';
import Authentication from './authentication';
import Profile from './Profile';

const Tabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabFromQuery = searchParams?.get('tab') || 'dashboard';
  const [activeTab, setActiveTab] = useState<string>(tabFromQuery);

  useEffect(() => {
    if (searchParams) {
      const currentTab = searchParams.get('tab') || 'dashboard';
      setActiveTab(currentTab);
    }
  }, [searchParams]);

  const handleTabClick = (tabIndex: string) => {
    setActiveTab(tabIndex);
    router.push(`/dashboard/?tab=${tabIndex}`);
  };

  return (
    <>
      <div className="mt-[35px]">
        <ul className="flex lg:gap-x-[55px] gap-x-[45px] lg:text-xl text-[14px] font-normal text-white max-md:overflow-x-scroll">
          <li
            onClick={() => handleTabClick('dashboard')}
            className={`${activeTab === 'dashboard' ? 'border-b-[#CCFB4B] border-b-[1px]' : ''} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}
          >
            داشبورد
          </li>
          <li
            onClick={() => handleTabClick('profile')}
            className={`${activeTab === 'profile' ? 'border-b-[#CCFB4B] border-b-[1px]' : ''} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}
          >
            پروفایل
          </li>
          <li
            onClick={() => handleTabClick('orders')}
            className={`${activeTab === 'orders' ? 'border-b-[#CCFB4B] border-b-[1px]' : ''} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}
          >
            سفارشات شما
          </li>
          <li
            onClick={() => handleTabClick('wallet')}
            className={`${activeTab === 'wallet' ? 'border-b-[#CCFB4B] border-b-[1px]' : ''} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}
          >
            کیف پول
          </li>
          <li
            onClick={() => handleTabClick('authentication')}
            className={`${activeTab === 'authentication' ? 'border-b-[#CCFB4B] border-b-[1px]' : ''} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}
          >
            احراز هویت
          </li>
        </ul>
      </div>

      {activeTab === 'dashboard' && <LastOrders />}
      {activeTab === 'profile' && <Profile />}
      {activeTab === 'orders' && <Orders />}
      {activeTab === 'wallet' && <Wallet />}
      {activeTab === 'authentication' && <Authentication />}
    </>
  );
};

export default Tabs;

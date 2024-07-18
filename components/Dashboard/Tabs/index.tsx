import { useEffect, useState } from "react";
import LastOrders from "./lastorders";
import Orders from "./orders";
import Wallet from "./wallet";
import Authentication from "./authentication";
import Profile from "./Profile";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <>
      <div className=" mt-[35px]">
        <ul className="flex lg:gap-x-[55px] gap-x-[45px] lg:text-xl text-[14px] font-normal text-white max-md:overflow-x-scroll">
          <li onClick={() => setActiveTab(1)} className={`${activeTab == 1 && 'border-b-[#CCFB4B] border-b-[1px]'}  cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}>
            داشبورد
          </li>
          <li onClick={() => setActiveTab(2)} className={`${activeTab == 2 && 'border-b-[#CCFB4B] border-b-[1px]'} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}>
            پروفایل
          </li>
          <li onClick={() => setActiveTab(3)} className={`${activeTab == 3 && 'border-b-[#CCFB4B] border-b-[1px]'} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}>
            سفارشات شما
          </li>
          <li onClick={() => setActiveTab(4)} className={`${activeTab == 4 && 'border-b-[#CCFB4B] border-b-[1px]'} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}>
            کیف پول
          </li>
          <li onClick={() => setActiveTab(5)} className={`${activeTab == 5 && 'border-b-[#CCFB4B] border-b-[1px]'} cursor-pointer text-nowrap pb-1 transition-all duration-200 ease-linear`}>
            احراز هویت
          </li>
        </ul>
      </div>

      {activeTab === 1 && <LastOrders />}
      {activeTab === 2 && <Profile />}
      {activeTab === 3 && <Orders />}
      {activeTab === 4 && <Wallet />}
      {activeTab === 5 && <Authentication />}

    </>
  );
};
export default Tabs;

const FilterCategories = () => {
    return (
        <div className="container-px">
            <ul className="flex md:gap-x-[55px] gap-x-[27px] md:text-xl text-[14px] font-normal text-white max-lg:overflow-x-scroll">
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">همه</li>
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">آفرها</li>
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">سی‌پی ریز</li>
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">سی پی زمانبر</li>
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">سی پی فوری</li>
                <li className="hover:border-b-[#CCFB4B] text-nowrap hover:border-b-[1px] pb-1 transition-all duration-200 ease-linear">پرایم</li>
            </ul>
        </div>
    );
};

export default FilterCategories;

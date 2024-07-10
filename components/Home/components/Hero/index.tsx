import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/assets/images/Hero-bg.png')] lg:pb-[106px] w-full bg-cover bg-top">
                <div className="container-px pt-28 w-full relative">
                    <div className="bg-[#CCFB4B] lg:w-[150px] w-[91px] lg:h-[150px] h-[91px] absolute xl:left-[100px] left-0 max-xl:-right-20 top-[30%] xl:top-[40%] rotate-45"></div>
                    <div className=" relative grid lg:grid-cols-12 items-center rounded-2xl gap-x-6 hero-glass">
                        <div className="lg:col-span-5 col-span-6 xl:py-20 py-5 flex flex-col items-start gap-y-2 lg:pr-[123px]">
                            <Image className="max-lg:w-[118px] max-lg:h-[21px]" width={371} height={73} alt="" src={'/assets/images/Call-of-duty.png'} />
                            <h1 className="font-extrabold xl:text-[40px] text-[18px] text-white">خرید سی پی و آفرهای کالاف</h1>
                        </div>
                        <div className="lg:col-span-7 col-span-6 absolute left-0 top-[-136px]  flex">
                            <Image className="xl:flex hidden" width={836} height={430} alt="" src={'/assets/images/HeroSoldier.png'} />
                            <Image className="xl:hidden flex" width={268} height={212} alt="" src={'/assets/images/HeroSoldier-Mobile.png'} />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

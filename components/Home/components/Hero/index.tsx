import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/assets/images/Hero-bg.png')] lg:pb-[106px] pb-[25px] w-full bg-cover bg-top">
                <div className="container-px lg:pt-28 pt-12 w-full relative">
                    <div className="bg-[#CCFB4B] lg:w-[150px] w-[91px] lg:h-[150px] h-[91px] absolute lg:left-[100px] left-0 max-lg:-right-14 top-[30%] lg:top-[40%] rotate-45"></div>
                    <div className=" relative grid lg:grid-cols-12 items-center rounded-2xl gap-x-6 hero-glass">
                        <div className="lg:col-span-5 col-span-6 xl:py-20 py-12 flex flex-col items-start gap-y-2 2xl:pr-[123px] pr-[20px]">
                            <Image className="max-lg:w-[118px] max-lg:h-[21px]" width={371} height={73} alt="" src={'/assets/images/Call-of-duty.png'} />
                            <h1 className="font-extrabold xl:text-[40px] text-[18px] text-white">خرید سی پی
                                <br className="md:hidden" />
                                و آفرهای کالاف</h1>
                        </div>
                        <div className="lg:col-span-7 col-span-6 absolute xl:left-0 xl:top-[-136px] lg:top-[-72px] lg:left-0 max-lg:left-0 max-lg:top-[-50px] max-md:left-0 max-md:top-[-30px]  flex">
                            <Image className="lg:flex hidden lg:w-[500px] xl:w-[836px]" width={836} height={430} alt="" src={'/assets/images/HeroSoldier.png'} />
                            <Image className="lg:hidden flex" width={260} height={212} alt="" src={'/assets/images/HeroSoldier-Mobile.png'} />

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

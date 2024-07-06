import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="bg-[url('/assets/images/Hero-bg.png')] pb-[106px] w-full bg-cover bg-top">
                <div className="container-px pt-28 w-full relative">
                    <div className="bg-[#CCFB4B] w-[150px] h-[150px] absolute left-[100px] top-[40%] rotate-45"></div>
                    <div className=" relative grid grid-cols-12 items-center rounded-2xl gap-x-6 hero-glass">
                        <div className="col-span-5 py-20 flex flex-col items-start gap-y-2 pr-[123px]">
                            <Image width={371} height={73} alt="" src={'/assets/images/Call-of-duty.png'}/>
                            <h1 className="font-extrabold text-[40px] text-white">خرید سی پی و آفرهای کالاف</h1>
                        </div>
                        <div className="col-span-7 absolute left-0 top-[-136px]  flex">
                        <Image width={836} height={430} alt="" src={'/assets/images/HeroSoldier.png'}/>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

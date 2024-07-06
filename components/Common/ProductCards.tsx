import Image from "next/image";

const ProductCards = () => {
    return (
        <div className='col-span-1 cursor-pointer border-white/30 border bg-[url(/assets/images/product-bg.png)] items-center flex justify-center flex-col rounded-xl relative'>
            <div className=''>
                <Image src="/assets/images/product.png" alt="IGame product" width={141} height={149} className="rounded -mt-6 w-full" />
            </div>
            <div className='flex flex-col rounded-b-xl items-center pt-2 gap-1 bg-black/20 backdrop-blur-md h-full w-full'>
                <span className="text-[21px] font-black text-white">30 CP</span>
                <span className="text-base font-medium text-white/60 mb-1">سی پی کال آف دیوتی</span>
                <button className=' text-[#111111] text-base bg-[#CCFB4B] px-4 py-[6px] -mb-4 rounded-3xl font-semibold flex items-center justify-center align-middle'><span>81/400 تومان</span></button>
            </div>
        </div>
    );
}

export default ProductCards;
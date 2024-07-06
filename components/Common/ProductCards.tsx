import Image from "next/image";

const ProductCards = () => {
    return (
        <div className='col-span-1 bg-black h-48 items-center flex justify-center flex-col rounded-xl relative'>
            <div className=''>
                <Image src="/assets/images/product.png" alt="IGame product" width={100} height={100} className="rounded w-full absolute -top-[30px] left-0" />
            </div>
            <div className='flex flex-col'>
                <span>30 CP</span>
                <span>سی پی کال آف دیوتی</span>
            </div>
            <button className='absolute -bottom-[8px] text-[#111111] bg-[#CCFB4B] px-4 py-2 rounded-3xl font-bold'>81/400 تومان</button>
        </div>
    );
}

export default ProductCards;
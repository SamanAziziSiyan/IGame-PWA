import { IProduct } from "@/components/Home/types";
import useProductState from "@/store/products";
import { numberFormat, toastAlert } from "@/utils";
import Image from "next/image";
import { extractNumbersFromTitle, scrollIntoSection } from "../../utils";

const ProductCards = ({ products }: { products: IProduct }) => {
    const { setProductData } = useProductState();

    const handlePreOrder = (productData: IProduct) => {
        const accountFormElement = document.getElementById('accountForm');

        setProductData(productData);
        const title = productData.titleFa ? productData.titleFa : productData.title;
        toastAlert({
            msg: (<span>{title}<br />انتخاب شد</span>), type: "success"
        });
        scrollIntoSection(accountFormElement);
    }
    const extractedNumbers = extractNumbersFromTitle(products.title);
    const numbersString = extractedNumbers.join(' + ');

    return (
        <div onClick={() => {
            handlePreOrder(products)
        }} className='col-span-1 cursor-pointer border-white/30 border bg-[url(/assets/images/product-bg.png)] items-center flex justify-center flex-col rounded-xl relative'>
            <div className=''>
                <Image src="/assets/images/product.png" alt="IGame product" width={141} height={149} className="rounded -mt-6 w-full" />
            </div>
            <div className='flex flex-col rounded-b-xl items-center pt-2 gap-1 bg-black/20 backdrop-blur-md h-full w-full'>
                <span className="md:text-[18px] text-[15px] font-black text-white">{numbersString ? numbersString : '-'} CP</span>
                <span className="md:text-[14px] text-[12px] font-medium text-white/60 mb-1 line-clamp-2 text-center">{products.titleFa ? products.titleFa : products.title}</span>
                <button className=' text-[#111111] md:text-base text-[12px] bg-[#CCFB4B] md:px-4 px-3 md:py-[6px] py-1 -mb-4 rounded-3xl font-semibold flex items-center justify-center align-middle'><span>{numberFormat(products.staticPrice)} تومان</span></button>
            </div>
        </div>
    );
}

export default ProductCards;

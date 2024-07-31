import { ProductsListCategoryService } from "@/services/products/products";
import { useEffect, useState } from "react";
import { IProduct } from "../Home/types";
import { ContentLoading } from "../Common/components/Loading/ContentLoading";
import ProductCards from "../Common/components/Products/ProductCards";

export const Shop = () => {
    const [productData, setProductData] = useState<IProduct[]>([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await ProductsListCategoryService(481);
                setProductData(response.data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <>
            {Loading ? (
                <ContentLoading />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 3xl:grid-cols-8 gap-x-5 gap-y-14 items-center justify-center mt-6 container-px container-px-40">
                    {productData?.map((product, index) => (
                        <ProductCards products={product} key={index} />
                    ))}
                </div>
            )}
        </>
    );
}
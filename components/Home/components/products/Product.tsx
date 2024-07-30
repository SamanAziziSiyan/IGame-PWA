"use client";
import ProductCards from '@/components/Common/ProductCards';
import { ProductsListCategoryService, ProductsListService } from '@/services/products/products';
import { IProduct } from '@/types';
import { useEffect, useState } from 'react';

const Product = () => {
    const [productData, setProductData] = useState<IProduct[]>([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const response = await ProductsListCategoryService(481);
                setProductData(response.data);
                setLoading(false)

            } catch (error) {
                setLoading(false);
            }

        }
        getProducts();

    }, [])
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 3xl:grid-cols-8 gap-x-5 gap-y-14 items-center justify-center mt-6 container-px container-px-40'>
            {productData?.map((product, index) => (
                <ProductCards products={product} key={index} />
            ))}

        </div>
    );
};

export default Product;

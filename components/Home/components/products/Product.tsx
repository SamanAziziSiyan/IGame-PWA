"use client";
import ProductCards from '@/components/Common/components/Products/ProductCards';
import { ProductsListCategoryService } from '@/services/products/products';
import { useEffect, useState, FC } from 'react';
import { IProduct } from '../../types';
import { ContentLoading } from '@/components/Common/components/Loading/ContentLoading';

interface ProductProps {
    selectedCategory: string;
}

const Product: FC<ProductProps> = ({ selectedCategory }) => {
    const [productData, setProductData] = useState<IProduct[]>([]);
    const [filteredData, setFilteredData] = useState<IProduct[]>([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await ProductsListCategoryService(481);
                const sortedData = response.data.sort((a: IProduct, b: IProduct) => {
                    const aHasCP = a.title.includes('سیپی') || a.title.includes('سی پی') || a.title.includes('CP');
                    const bHasCP = b.title.includes('سیپی') || b.title.includes('سی پی') || b.title.includes('CP');

                    const aHasDollarOrNumber = /\$|\d+(\.\d{1,2})?/.test(a.title);
                    const bHasDollarOrNumber = /\$|\d+(\.\d{1,2})?/.test(b.title);

                    if (aHasCP && !bHasCP) return -1;
                    if (!aHasCP && bHasCP) return 1;
                    if (aHasCP && bHasCP) return a.staticPrice - b.staticPrice;

                    if (aHasDollarOrNumber && !bHasDollarOrNumber) return -1;
                    if (!aHasDollarOrNumber && bHasDollarOrNumber) return 1;
                    if (aHasDollarOrNumber && bHasDollarOrNumber) return a.staticPrice - b.staticPrice;

                    return a.staticPrice - b.staticPrice;
                });
                setProductData(sortedData);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    useEffect(() => {
        const filterProducts = () => {
            if (selectedCategory === 'all') {
                setFilteredData(productData);
            } else if (selectedCategory === 'cp') {
                setFilteredData(productData.filter(product =>
                    product.titleFa.includes('سیپی') || product.titleFa.includes('سی پی') || product.titleFa.includes('CP')
                ));
            } else if (selectedCategory === 'offer') {
                setFilteredData(productData.filter(product =>
                    product.titleFa.includes('آفر')
                ));
            }
        };
        filterProducts();
    }, [selectedCategory, productData]);

    return (
        <>
            {Loading ? (
                <ContentLoading />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 3xl:grid-cols-8 gap-x-5 gap-y-14 items-center justify-center mt-10 container-px container-px-40">
                    {filteredData?.map((product, index) => (
                        <ProductCards products={product} key={index} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Product;

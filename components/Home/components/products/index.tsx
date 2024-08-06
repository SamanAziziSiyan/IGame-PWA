"use client";
import { useState } from 'react';
import Product from './Product';
import FilterCategories from './FilterCategories';
import SpecialOffers from './SpecialOffers';
import Account from '../account';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    return (
        <>
            <FilterCategories setSelectedCategory={setSelectedCategory} />
            {/* <SpecialOffers /> */}
            <Product selectedCategory={selectedCategory} />
        </>
    );
};

export default Products;

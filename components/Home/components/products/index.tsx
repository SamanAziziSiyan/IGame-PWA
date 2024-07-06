import Product from './Product';
import FilterCategories from './FilterCategories';
import SpecialOffers from './SpecialOffers';
import Account from '../account';

const Products = () => {
    return (
        <>
            <FilterCategories />
            <SpecialOffers />
            <Product />
        </>
    );
};

export default Products;

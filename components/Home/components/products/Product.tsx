import ProductCards from '@/components/Common/ProductCards';

const Product = () => {
    return (
        <div className='grid grid-cols-8 gap-x-5 gap-y-11 items-center justify-center p-16'>
            {Array.from({ length: 24 }).map((_, index) => (
                <ProductCards key={index} />
            ))}

        </div>
    );
};

export default Product;

import ProductCards from '@/components/Common/ProductCards';

const Product = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 3xl:grid-cols-8 gap-x-5 gap-y-14 items-center justify-center mt-6 container-px'>
            {Array.from({ length: 21 }).map((_, index) => (
                <ProductCards key={index} />
            ))}

        </div>
    );
};

export default Product;

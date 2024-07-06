import ProductCards from '@/components/Common/ProductCards';

const Product = () => {
    return (
        <div className='grid 3xl:grid-cols-8 grid-cols-7 gap-x-5 gap-y-14 items-center justify-center mt-6 container-px'>
            {Array.from({ length: 21 }).map((_, index) => (
                <ProductCards key={index} />
            ))}

        </div>
    );
};

export default Product;

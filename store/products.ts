import { IProduct } from '@/components/Home/types';
import { create } from 'zustand';


export interface IProductStore {
    productData: IProduct | null;
}

interface ProductState {
    productStore: IProductStore;
    setProductData: (data: IProduct) => void;
}

const useProductState = create<ProductState>((set) => ({
    productStore: {
        productData: null,
    },
    setProductData: (data: IProduct) =>
        set((state) => ({
            productStore: {
                productData: data
            },
        })),
}));

export default useProductState;

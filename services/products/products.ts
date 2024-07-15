import axiosInstance from "../axios"

const ProductsListService = async () => {
    return await axiosInstance.get(`product/table`)
}
const ProductsListCategoryService = async (CategoryID: number) => {
    return await axiosInstance.get(`product/list/${CategoryID}`)
}

export { ProductsListService, ProductsListCategoryService }
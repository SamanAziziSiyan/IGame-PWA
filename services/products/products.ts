import axiosInstance from "../axios"

const ProductsListService = async () => {
    return await axiosInstance.post(`product/table`,
        {
            "limit": 20,
            "offset": -20,
            "sorts": [
                {
                    "_field": "createDateTime",
                    "dir": "desc",
                    "field": "createDateTime"
                }
            ]
        })
}
const ProductsListCategoryService = async (CategoryID: number) => {
    return await axiosInstance.get(`Product/List/${CategoryID}`)
}

const CategoryListService = async () => {
    return await axiosInstance.get(`productcategory/list/`)
}

export { ProductsListService, ProductsListCategoryService, CategoryListService }
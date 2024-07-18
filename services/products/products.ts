import axiosInstance from "../axios"

const ProductsListService = async () => {
    return await axiosInstance.post(`product/table`,
        {
            "currentPage": 0,
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
    return await axiosInstance.get(`product/list/${CategoryID}`)
}

export { ProductsListService, ProductsListCategoryService }
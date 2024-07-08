import { HomeProps } from "@/types"
import axiosInstance from "../axios"

const ProductsService = async () => {
    return await axiosInstance.get(`productcategory/list`)
}


export { ProductsService }
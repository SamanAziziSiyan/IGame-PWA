import axiosInstance from "../axios"

const CustomerProfileService = async (CustomerID: number) => {
    return await axiosInstance.get(`customer/${CustomerID}`)
}

const CustomerProfileUpdateService = async (CustomerID: string, CustomerData: object) => {
    return await axiosInstance.put(`customer/${CustomerID}`, CustomerData)
}


export { CustomerProfileService, CustomerProfileUpdateService }
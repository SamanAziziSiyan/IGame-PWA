import axiosInstance from "../axios"

const CustomerProfileService = async (CustomerID: number) => {
    return await axiosInstance.get(`customer/${CustomerID}`)
}

interface IProfileData {
    id: number,
    avatar: string,
    firstname: string,
    lastname: string,
    email: string,
    telegramId: string,
    birthdate: string,
    verificationId?: null,
    verificationCode?: null
}

const CustomerProfileUpdateService = async (CustomerData: IProfileData) => {
    console.log(CustomerData);
    
    return await axiosInstance.put(`/customer`, CustomerData)
}


export { CustomerProfileService, CustomerProfileUpdateService }
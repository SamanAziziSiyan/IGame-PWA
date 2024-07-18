import axiosInstance from "../axios"

const CustomerProfileService = async (CustomerID: number) => {
    return await axiosInstance.get(`customer/${CustomerID}`)
}

const CustomerProfileUpdateService = async (CustomerID: string, CustomerData: object) => {
    return await axiosInstance.put(`customer/${CustomerID}`, CustomerData)
    // {
    //     "id":73,
    //     "avatar":"1200",
    //     "firstname":"saman",
    //     "lastname":"azizi",
    //     "email":"SamanAzizi1394@gmail.com",
    //     "telegramId":"en_saman",
    //     "birthdate":"1375/04/03",
    //     "verificationId":null,
    //     "verificationCode":null
    // }
}


export { CustomerProfileService, CustomerProfileUpdateService }
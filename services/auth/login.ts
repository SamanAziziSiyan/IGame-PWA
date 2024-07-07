import axiosInstance from "../axios"

const LoginService = async (MobileNumber: string) => {
    return await axiosInstance.post(`customer/login/SendVerificationCode?number=${MobileNumber}`)
}
const OtpVerificationService = async (MobileNumber: string, OtpVerificationCode: string) => {
    return await axiosInstance.post(`customer/login/VerifyOtpCode`,
        {
            "MobileNumber": MobileNumber,
            "OtpCode": OtpVerificationCode
        }
    )
}

export { LoginService, OtpVerificationService }
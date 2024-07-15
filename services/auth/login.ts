import axiosInstance from "../axios"

const LoginService = async (MobileNumber: string) => {
    return await axiosInstance.post(`customer/login/SendVerificationCodeStores?number=${MobileNumber}`)
}

const OtpVerificationService = async (MobileNumber: string, OtpVerificationCode: string) => {
    return await axiosInstance.post(`customer/login/VerifyOtpCodeStores`,
        {
            "MobileNumber": MobileNumber,
            "OtpCode": OtpVerificationCode
        }
    )
}

const TokenRefreshService = async (RefreshToken: string) => {
    
    return await axiosInstance.post(`customer/refresh`,
        {
            "refreshToken": RefreshToken
        }
    )
}


export { LoginService, OtpVerificationService, TokenRefreshService }
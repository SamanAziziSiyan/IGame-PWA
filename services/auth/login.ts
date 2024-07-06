import axiosInstance from "../axios"

const Login = async (MobileNumber: string) => {
    return await axiosInstance.post('login/SendVerificationCode',
        { MobileNumber }
    )

}

export { Login }
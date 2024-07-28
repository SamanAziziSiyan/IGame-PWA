import { IPayment, IPaymentVerify } from "@/types"
import axiosInstancePayment from "../axiosPayment"

const PaymentService = async (PaymentData: IPayment) => {
    return await axiosInstancePayment.post(`payment/request`, PaymentData)
}
const VerifyPaymentService = async (VerifyData: IPaymentVerify) => {
    return await axiosInstancePayment.post(`play/wallet/transactions`, VerifyData)
}


export { PaymentService, VerifyPaymentService }
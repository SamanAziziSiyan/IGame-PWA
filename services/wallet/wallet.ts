import { IWalletProps } from "@/types"
import axiosInstanceWordpress from "../axiosWordpress"

const WalletBalanceService = async (phone: string) => {
    return await axiosInstanceWordpress.get(`play/wallet/balance?phone=${phone}`)
}
const WalletTransactionsService = async (phone: string) => {
    return await axiosInstanceWordpress.get(`play/wallet/transactions?phone=${phone}`)
}
const creditWalletBalanceService = async (credit: IWalletProps) => {
    return await axiosInstanceWordpress.post(`play/wallet`, credit)
}
const debitWalletBalanceService = async (debit: IWalletProps) => {
    return await axiosInstanceWordpress.post(`play/wallet`, debit)
}

export { WalletBalanceService, creditWalletBalanceService, debitWalletBalanceService, WalletTransactionsService }
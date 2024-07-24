import axiosInstanceWordpress from "../axiosWordpress"

const WalletBalanceService = async (phone:string) => {
    return await axiosInstanceWordpress.get(`play/wallet/balance?phone=${phone}`)
}
const WalletTransactionsService = async (phone:string) => {
    return await axiosInstanceWordpress.get(`play/wallet/transactions?phone=${phone}`)
}
const AddWalletBalanceService = async () => {
    return await axiosInstanceWordpress.post(`play/wallet`)
}

export { WalletBalanceService, AddWalletBalanceService, WalletTransactionsService }
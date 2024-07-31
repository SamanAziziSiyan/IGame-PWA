export interface IconProps { color?: string, className?: string, size?: number }


export enum WalletType {
    credit = 'credit',
    debit = 'debit',
}
export interface IWalletProps {
    phone: string,
    type: WalletType,
    amount: number,
    locked: number,
    description: string
}




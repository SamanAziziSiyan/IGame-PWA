export interface IconProps { color?: string, className?: string, size?: number }
import { ToastPosition, TypeOptions } from "react-toastify";


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

export interface IToastAlert {
    msg: React.ReactNode;
    type?: TypeOptions;
    position?: ToastPosition;
}
export interface IUserData {
    customerID: number;
    token: string;
    refreshToken: string;
    userName: string;
}




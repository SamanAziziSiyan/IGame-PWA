export interface ITransaction {
    bankName: string;
    date: string;
    transaction_id: string;
    amount: string;
}

export interface IProfileData {
    avatar: string;
    birthDate: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    telegramId: string;
    verificationCode: null | string;
    verificationId: null | string;
}


export interface IOrderProduct {
    backupCode: string;
    completionDateTime: string | null;
    email: string;
    isCancelable: boolean;
    isEditable: boolean;
    nameInGame: string;
    orderProductId: string;
    password: string;
    price: string;
    productImageUrl: string;
    purchaseDateTime: string;
    purchaseResult1: any;
    purchaseResult2: any;
    statusDescription: string;
    statusText: string;
    title: string;
}


export interface IOrdersData {
    id: string;
    code: string;
    createDate: string;
    discountAmount: string;
    discountCode: string;
    paidPrice: string;
    products: IOrderProduct[];
    progressPercentage: number;
    totalPrice: string;
}

export interface WalletBalance {
    balance: number;
}

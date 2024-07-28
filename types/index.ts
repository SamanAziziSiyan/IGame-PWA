export interface IconProps { color?: string, className?: string, size?: number }

interface Product {
    title: string;
    description: string;
    parentId: number;
    url: string;
    hasChildren: boolean;
    hasProducts: boolean;
    id: number;
    createDateTime: Date;
    updateDateTime: Date;
}

export interface HomeProps {
    data: {
        status: string;
        errors: any[];
        joinedErrors: string;
        data: Product[];
    };
}

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

export interface IProduct {
    accountFormType: null;
    accountPlatforms: null;
    amount: number;
    categoryId: null | number;
    categoryName: null | string;
    createDateTime: string;
    currency: string;
    currentIrtRate: number;
    discount: number;
    edition: null;
    giftCardCurrency: null;
    giftCardPrice: null;
    giftCardType: "Default";
    id: string;
    isActive: boolean;
    isDeleted: boolean;
    isOffline: boolean;
    minPrice: number;
    platform: string;
    productCategoryId: number;
    productCategoryTitle: string;
    productType: string;
    region: string;
    selectedDisplayPrice: number;
    selectedPrice: number;
    sharedCapacity: string;
    sharedPlatform: string;
    staticPrice: number;
    subCategoryId: null | number;
    subCategoryName: string | null;  
    subscriptionDuration: null | number;
    subscriptionDurationType: string;
    title: string;
    titleFa: string;
    unit: null;
    unitDisplay: null;
    updateDateTime: string;
    useStaticPrice: boolean;
}

interface IAdditionalData {
    name: string;
    value: string;
}
interface IOrderProduct {
    productId: string;
    quantity: number;
    productUnitAmountToman: number;
    additionalData: IAdditionalData[];
    playerId: string;
    name: string;
    platform: string;
    username: string;
    password: string;
    nameInGame: string;
    backupCode: string;
    description: string;
    os: string;
    imageUrl: string;
    gmailPassword: string;
}

export interface IOrderProductData {
    callbackUrl: string;
    TotalProductsAmountToman: number
    DiscountAmountToman: number;
    WalletAmountToman: number;
    PaymentAmountToman: number;
    Mobile: string;
    CustomerId: number;
    DiscountCode: number
    Description: string;
    Ip: string;
    Browser: string;
    Device: string;
    OrderProducts: IOrderProduct[];
}

interface IProductPayment {
    quantity: number,
    title: string,
    amount: number,
    code: string
}
export interface IPayment {
    customerId: number | string,
    amount: number,
    orderId: string,
    callBackUrl: string,
    mobile: string,
    description: string,
    products: IProductPayment[],
}

export interface IPaymentVerify {
    transactionId: number,
    transactionKey: string
}
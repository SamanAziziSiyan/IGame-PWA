import { IOrderProductData, IProduct } from '@/components/Home/types';
import { getBaseUrl, getBrowserInfo, getDeviceInfo } from '@/components/Home/utils';
import { getUserDataFromLocalStorage } from '@/utils';


interface IOrderData {
    description: string;
    platform: string;
    accountUserName?: string;
    accountPassword?: string;
    nameInGame?: string;
    BackupCode?: string;
}

export const createOrderFormData = (productData: IProduct, data: IOrderData): IOrderProductData => {
    if (!productData || !data) {
        throw new Error('Invalid productData or orderData');
    }

    const userData = getUserDataFromLocalStorage();
    const productTitle = productData?.titleFa || productData?.title || 'Unknown Product';

    return {
        callbackUrl: getBaseUrl() + '/dashboard',
        TotalProductsAmountToman: productData.staticPrice,
        DiscountAmountToman: 0,
        WalletAmountToman: 0,
        PaymentAmountToman: productData.staticPrice,
        Mobile: userData.userName || '',
        CustomerId: userData?.customerID || 0,
        DiscountCode: 0,
        Description: data.description,
        Ip: '127.0.0.1',
        Browser: getBrowserInfo().browserName || 'Unknown Browser',
        Device: getDeviceInfo().deviceType || 'Unknown Device',
        OrderProducts: [
            {
                productId: productData?.id || '0',
                quantity: 1,
                productUnitAmountToman: productData.staticPrice || 0,
                additionalData: [
                    {
                        name: '',
                        value: '',
                    }
                ],
                playerId: 'examplePlayerId',
                name: productTitle,
                platform: data.platform || '',
                username: data.accountUserName || '',
                password: data.accountPassword || '',
                nameInGame: data.nameInGame || '',
                backupCode: data.BackupCode || '',
                description: data.description || '',
                os: getDeviceInfo().os || 'Unknown OS',
                imageUrl: 'http://example.com/image.png',
                gmailPassword: 'exampleGmailPassword' // Ensure sensitive data is handled securely
            }
        ]
    };
};

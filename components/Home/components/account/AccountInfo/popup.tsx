import React, { MouseEvent } from 'react';
import { ButtonLoading } from '@/components/Common/components/Loading/ButtonLoading'; // Adjust path if needed

interface PopupProps {
    onClose: () => void;
    onConfirm: () => void;
    productData: { name: string; price: string };
    userData: {
        platform: string;
        accountUserName: string;
        accountPassword: string;
        nameInGame: string;
        description: string;
    };
    loading: boolean;
}

const Popup: React.FC<PopupProps> = ({ onClose, onConfirm, productData, userData, loading }) => {
    // Labels for userData fields
    const labels: { [key: string]: string } = {
        platform: 'پلتفرم',
        accountUserName: 'نام کاربری اکانت',
        accountPassword: 'رمز عبور اکانت',
        nameInGame: 'نام در بازی',
        description: 'توضیحات',
        BackupCode:'کد بکاپ'
    };

    // Handle backdrop click to close the popup
    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 md:px-0 px-4 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white text-[#5c5c5c] p-6 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-lg font-bold mb-4">تأیید سفارش</h2>
                <div className="mb-4">
                    <h3 className="font-bold">اطلاعات محصول:</h3>
                    <p>
                        <span className="font-semibold">نام محصول:</span> {productData.name}
                    </p>
                    <p>
                        <span className="font-semibold">قیمت:</span> {productData.price} تومان
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold">اطلاعات وارد شده:</h3>
                    {Object.entries(userData).map(([key, value]) => (
                        <p key={key}>
                            <span className="font-semibold">{labels[key] || key}:</span> {String(value)}
                        </p>
                    ))}
                </div>
                <div className="flex gap-x-2 justify-end mt-4">
                    <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                        انصراف
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-x-2"
                        disabled={loading}
                    >
                        تأیید نهایی و پرداخت
                        {loading && <ButtonLoading />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;

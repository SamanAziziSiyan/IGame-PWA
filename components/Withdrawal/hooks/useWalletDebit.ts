// hooks/useWalletDebit.ts
import { useState } from 'react';
import { debitWalletBalanceService } from '@/services/wallet/wallet';
import { toastAlert } from '@/utils';
import { IWalletProps } from '@/types';

interface UseWalletDebitProps {
    userData?: { userName?: string };
    reset: () => void;
}

const useWalletDebit = ({ userData, reset }: UseWalletDebitProps) => {
    const [showLoading, setShowLoading] = useState(false);
    const [isRequestedWalletIncrease, setIsRequestedWalletIncrease] = useState(false);
    const [transactionId, setTransactionId] = useState<string | null>(null);

    const debitWallet = async (walletData: IWalletProps) => {
        setShowLoading(true);
        try {
            const response = await debitWalletBalanceService(walletData);
            toastAlert({ msg: response?.data?.message, type: "success" });
            setIsRequestedWalletIncrease(true);
            setTransactionId(response?.data?.transaction_id || null);
            reset();
        } catch (error: any) {
            toastAlert({ msg: error.message });
            setIsRequestedWalletIncrease(false);
        } finally {
            setShowLoading(false);
        }
    };

    return {
        showLoading,
        isRequestedWalletIncrease,
        transactionId,
        debitWallet,
    };
};

export default useWalletDebit;

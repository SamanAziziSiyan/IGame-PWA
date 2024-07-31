import { create } from 'zustand';


interface LoginLayoutStore {
    isShowVerification: boolean;
    isShowVerifyForm: boolean
}

interface LoginLayoutState {
    loginLayoutStore: LoginLayoutStore;
    setLoginLayoutState: (isShowVerification: boolean, isShowVerifyForm: boolean) => void;
}

const useLoginLayoutState = create<LoginLayoutState>((set) => ({
    loginLayoutStore: {
        isShowVerification: false,
        isShowVerifyForm: false,
    },
    setLoginLayoutState: (isShowVerification: boolean, isShowVerifyForm: boolean) =>
        set((state) => ({
            loginLayoutStore: {
                ...state.loginLayoutStore,
                isShowVerification: isShowVerification,
                isShowVerifyForm: isShowVerifyForm,
            },
        })),
}));

export default useLoginLayoutState;

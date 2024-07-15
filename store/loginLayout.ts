import { create } from 'zustand';


interface LoginLayoutStore {
    isShowVerification: boolean;
}

interface LoginLayoutState {
    loginLayoutStore: LoginLayoutStore;
    setLoginLayoutState: (isShowVerification: boolean) => void;
}

const useLoginLayoutState = create<LoginLayoutState>((set) => ({
    loginLayoutStore: {
        isShowVerification: false,
    },
    setLoginLayoutState: (isShowVerification: boolean) =>
        set((state) => ({
            loginLayoutStore: {
                ...state.loginLayoutStore,
                isShowVerification: isShowVerification,
            },
        })),
}));

export default useLoginLayoutState;

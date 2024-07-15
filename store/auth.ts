import { create } from 'zustand';

interface IUserPhone {
    userPhoneNumber: string;
}

interface UserStore {
    isLoggedIn: boolean;
    userData: IUserPhone | {};
}

interface AuthState {
    userStore: UserStore;
    setAuthData: (data: IUserPhone, isLogin: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    userStore: {
        isLoggedIn: false,
        userData: {},
    },
    setAuthData: (data: IUserPhone, isLogin: boolean) =>
        set((state) => ({
            userStore: {
                ...state.userStore,
                isLoggedIn: isLogin,
                userData: data,
            },
        })),
}));

export default useAuthStore;

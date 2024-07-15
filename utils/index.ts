import { TokenRefreshService } from "@/services/auth/login";
import { ToastPosition, TypeOptions, toast } from "react-toastify";

interface IToastAlert {
    msg: string;
    type?: TypeOptions;
    position?: ToastPosition;
}
export const toastAlert = ({ msg, type = "error", position = "top-left" }: IToastAlert) => {
    toast(msg, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: type,
    });
};


export const checkAuthToken = async (): Promise<boolean> => {
    let userData: IUserData = getUserDataFromLocalStorage();
    try {
        if (userData) {
            let response = await TokenRefreshService(userData.refreshToken);
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

interface IUserData {
    customerID: number;
    token: string;
    refreshToken: string;
    userName: string;
}
export const getUserDataFromLocalStorage = (): IUserData => {
    const userData = localStorage.getItem('UserData');
    if (userData) {
        let parsedUserData = JSON.parse(userData);
        return parsedUserData;
    }
    return { customerID: 0, token: '', refreshToken: '', userName: '' };
};




export const logout = (): void => {
    localStorage.removeItem("UserData");
    toastAlert({ msg: "با موفقیت خارج شدید", type: "success" });
};




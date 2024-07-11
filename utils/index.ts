import { useRouter } from "next/navigation";
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


export const checkAuthToken = (router: any) => {
    const userData = localStorage.getItem("UserData");
    if (!userData) {
        router.push("/login");
        return false;
    } else {
        const { token } = JSON.parse(userData);
        if (!token) {
            router.push("/login");
            return false;
        }
    }
    return true;
};

interface UserData {
    userName: string;
    token: string;
    refreshToken: string
}

export const getUserDataFromLocalStorage = (): UserData | null => {
    const userData = localStorage.getItem("UserData");

    if (userData) {
        try {
            const parsedData = JSON.parse(userData);
            const { userName, token, refreshToken } = parsedData;

            if (userName && token && refreshToken) {
                return { userName, token, refreshToken };
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    return null;
};


export const logout = (): void => {
    localStorage.removeItem("UserData");
    toastAlert({ msg: "با موفقیت خارج شدید", type: "success" });
};




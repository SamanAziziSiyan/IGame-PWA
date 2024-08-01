import { LoginService, TokenRefreshService } from "@/services/auth/login";
import { ToastPosition, TypeOptions, toast } from "react-toastify";
import moment from 'moment';
import 'moment/locale/fa';
import { isAxiosError } from "axios";
interface IToastAlert {
    msg: React.ReactNode;
    type?: TypeOptions;
    position?: ToastPosition;
}

export const toastAlert = ({ msg, type = "error", position = "top-left" }: IToastAlert) => {
    toast(msg, {
        position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type,
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
        if (isAxiosError(error) && error.response?.status === 401) {
            return false;
        } else {
            return false;
        }
    }
};

interface IUserData {
    customerID: number;
    token: string;
    refreshToken: string;
    userName: string;
}
export const getUserDataFromLocalStorage = (): IUserData => {
    if (typeof window !== "undefined") {
        const userData = localStorage.getItem('UserData');
        if (userData) {
            let parsedUserData = JSON.parse(userData);
            return parsedUserData;
        }
    }
    return { customerID: 0, token: '', refreshToken: '', userName: '' };
};

export const sendAgain = async (userPhoneNumber: string) => {
    try {
        const response = await LoginService(userPhoneNumber);

        if (response.data.status === "Success") {
            toastAlert({ msg: "پیامک با موفقیت ارسال شد", type: "success" });
            return;
        }
        const errorMsg = response.data.status === "Error" ? response.data.errors[0] : 'خطایی رخ داده است';
        toastAlert({ msg: errorMsg, type: "info" });
    } catch (error: any) {
        const errorMsg = error?.response?.status === 401
            ? "توکن منقضی شده است: خطای 401"
            : error?.message || 'خطایی رخ داده است';

        toastAlert({ msg: errorMsg, type: "error" });
    }
};


export const logout = (): void => {
    localStorage.removeItem("UserData");
    toastAlert({ msg: "با موفقیت خارج شدید", type: "success" });
};



export function numberFormat(
    input: number | string,
    decimals: number = 0,
    decPoint: string = '.',
    thousandsSep: string = ','
): string {
    const number = Number(input);

    if (!isFinite(number)) {
        return '0';
    }

    const fixedNumber = number.toFixed(decimals);

    const parts = fixedNumber.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '';

    const integerWithThousands = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);

    if (decimals > 0) {
        return `${integerWithThousands}${decPoint}${decimalPart}`;
    } else {
        return integerWithThousands;
    }
}

export const stripHtml = (html: string) => {
    return html.replace(/<\/?[^>]+>/gi, '');
};

export const getRelativeTime = (dateString: string): string => {
    const date = moment(dateString);
    return date.fromNow();
}

export const emitRedirect = (path: string) => {
    const event = new CustomEvent<string>('router-redirect', { detail: path });
    window.dispatchEvent(event);
};









import { TokenRefreshService } from "@/services/auth/login";
import { ToastPosition, TypeOptions, toast } from "react-toastify";
import moment from 'moment';
import 'moment/locale/fa';

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
    if (typeof window !== "undefined") {
        const userData = localStorage.getItem('UserData');
        if (userData) {
            let parsedUserData = JSON.parse(userData);
            return parsedUserData;
        }
    }
    return { customerID: 0, token: '', refreshToken: '', userName: '' };
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



export const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown';

    if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
    } else if (userAgent.indexOf('Trident') > -1) {
        browserName = 'Microsoft Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
        browserName = 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Apple Safari';
    }

    return {
        browserName,
        userAgent,
    };
};

export const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;

    // Determine the device type
    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /Tablet|iPad/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    let deviceType = 'Unknown';
    if (isMobile) {
        deviceType = 'Mobile';
    } else if (isTablet) {
        deviceType = 'Tablet';
    } else if (isDesktop) {
        deviceType = 'Desktop';
    }

    // Determine the operating system
    let os = 'Unknown';
    if (userAgent.indexOf('Win') > -1) {
        os = 'Windows';
    } else if (userAgent.indexOf('Mac') > -1) {
        os = 'MacOS';
    } else if (userAgent.indexOf('X11') > -1) {
        os = 'UNIX';
    } else if (userAgent.indexOf('Linux') > -1) {
        os = 'Linux';
    } else if (/Android/i.test(userAgent)) {
        os = 'Android';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        os = 'iOS';
    }

    return {
        deviceType,
        os,
        userAgent,
    };
};



export const maskAuthorName = (name: string) => {
    if (name.length <= 4) {
        return name + '****';
    }
    return name.slice(0, -4) + '****';
}

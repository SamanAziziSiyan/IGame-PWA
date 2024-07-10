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


// export const getUserDataFromLocalStorage = () => {
//     const userData = localStorage.getItem("UserData");
//     const parsedData = JSON.parse(userData);
//     return parsedData.userName;
// };



import { ToastPosition, TypeOptions, toast } from "react-toastify";

interface IToastAlert {
    msg: string ;
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
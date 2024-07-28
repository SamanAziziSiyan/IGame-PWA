import { IconProps } from "@/types";

const PhoneConfirmIcon = ({ size = 37, className = '', color = '#fff' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.75 29.0758H26.5783C25.345 29.0758 24.1733 29.5538 23.31 30.4171L20.6737 33.0225C19.4712 34.2096 17.5134 34.2096 16.3109 33.0225L13.6746 30.4171C12.8112 29.5538 11.6242 29.0758 10.4062 29.0758H9.25C6.69083 29.0758 4.625 27.0254 4.625 24.4971V7.66209C4.625 5.13376 6.69083 3.08334 9.25 3.08334H27.75C30.3092 3.08334 32.375 5.13376 32.375 7.66209V24.4817C32.375 27.01 30.3092 29.0758 27.75 29.0758Z" stroke={color} strokeWidth="2.3125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.6072 13.7977C18.5455 13.7977 18.453 13.7977 18.3759 13.7977C16.7571 13.736 15.4775 12.4256 15.4775 10.7914C15.4775 9.12641 16.8188 7.78516 18.4838 7.78516C20.1488 7.78516 21.4901 9.14182 21.4901 10.7914C21.5055 12.4256 20.2259 13.7514 18.6072 13.7977Z" stroke={color} strokeWidth="2.3125" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.2605 18.438C12.2101 19.8101 12.2101 22.0455 14.2605 23.4176C16.5884 24.9747 20.4117 24.9747 22.7396 23.4176C24.7901 22.0455 24.7901 19.8101 22.7396 18.438C20.4117 16.8964 16.6038 16.8964 14.2605 18.438Z" stroke={color} strokeWidth="2.3125" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default PhoneConfirmIcon;
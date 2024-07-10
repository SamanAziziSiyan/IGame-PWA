import { IconProps } from "@/types";

const LogoutIcon = ({ size = 22, className = '', color = '#F04242' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1.75C6.17 1.75 2.25 5.67 2.25 10.5C2.25 15.33 6.17 19.25 11 19.25C15.83 19.25 19.75 15.33 19.75 10.5" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.875 9.62501L19.05 2.45001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.7499 5.97625V1.75H15.5237" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default LogoutIcon;
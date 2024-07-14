import { IconProps } from "@/types";

const LeftArrowIcon = ({ size = 20, className = '', color = '#fff' }: IconProps) => {
    return (

        <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8334 10H4.16669" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 15.8333L4.16669 9.99999L10 4.16666" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

export default LeftArrowIcon;
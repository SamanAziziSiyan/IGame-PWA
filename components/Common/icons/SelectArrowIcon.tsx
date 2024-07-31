import { IconProps } from "@/types";

const SelectArrowIcon = ({ size = 14, className = '', color = '#fff' }: IconProps) => {
    return (
        <svg className={className} width={size} height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.20926 1.80237L6.79065 7.38376L12.372 1.80237" stroke={color} strokeWidth="1.86047" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default SelectArrowIcon;
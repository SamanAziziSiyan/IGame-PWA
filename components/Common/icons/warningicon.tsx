import { IconProps } from "@/types";

const WarningIcon = ({ size = 21, className = '', color = '#E9B20F' }: IconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 21 21" fill="none">
            <path d="M10.5 7.875V12.25" stroke="#E9B20F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.4995 18.734H5.19701C2.16076 18.734 0.892014 16.564 2.36201 13.9127L5.09201 8.99524L7.66451 4.37524C9.22201 1.56649 11.777 1.56649 13.3345 4.37524L15.907 9.00399L18.637 13.9215C20.107 16.5727 18.8295 18.7427 15.802 18.7427H10.4995V18.734Z" stroke="#E9B20F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.4949 14.875H10.5027" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default  WarningIcon;
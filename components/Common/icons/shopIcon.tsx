import { IconProps } from "@/types";

const ShopIcon = ({ size = 28, className = '', color = '#fff' }: IconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 34 34" fill="none">
            <path d="M11.9633 9.02045H21.9552C26.6735 9.02045 27.1454 11.227 27.4646 13.9192L28.7135 24.3274C29.116 27.7413 28.0613 30.5307 23.2041 30.5307H10.7282C5.85719 30.5307 4.80249 27.7413 5.21882 24.3274L6.46781 13.9192C6.77312 11.227 7.24494 9.02045 11.9633 9.02045Z" stroke="white" stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.4082 11.102V6.2449C11.4082 4.16327 12.796 2.77551 14.8776 2.77551H19.0409C21.1225 2.77551 22.5102 4.16327 22.5102 6.2449V11.102" stroke="white" stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28.6302 23.6335H11.4082" stroke={color} stroke-width="2.08163" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default ShopIcon;
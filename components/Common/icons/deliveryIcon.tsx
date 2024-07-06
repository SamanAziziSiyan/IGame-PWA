import { IconProps } from "@/types";

const DeliveryIcon = ({ size = 49, className = '', color = '#CCFB4B' }: IconProps) => {
    return (

        <svg className={className} width={size} height={size} viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8207 19.0123L24.3612 25.1179L34.8223 19.0521" stroke={color} stroke-width="2.71199" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24.3629 35.9371V25.0981" stroke={color} stroke-width="2.71199" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.8932 13.1057L15.5291 16.6458C14.0972 17.4413 12.9039 19.45 12.9039 21.1007V27.8427C12.9039 29.4934 14.0773 31.502 15.5291 32.2976L21.8932 35.8376C23.2456 36.5933 25.4731 36.5933 26.8453 35.8376L33.2095 32.2976C34.6414 31.502 35.8346 29.4934 35.8346 27.8427V21.0808C35.8346 19.4301 34.6613 17.4214 33.2095 16.6259L26.8453 13.0858C25.4731 12.3301 23.2456 12.3301 21.8932 13.1057Z" stroke={color} stroke-width="2.71199" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M44.2468 30.4283C44.2468 38.125 38.0219 44.3499 30.3252 44.3499L32.4135 40.8695" stroke={color} stroke-width="2.71199" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.47089 18.4956C4.47089 10.799 10.6958 4.5741 18.3924 4.5741L16.3042 8.05448" stroke={color} stroke-width="2.71199" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}

export default DeliveryIcon;
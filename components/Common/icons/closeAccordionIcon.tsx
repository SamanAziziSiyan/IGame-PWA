import { IconProps } from "@/types";

const CloseAccordionIcon = ({ size = 82, className = '', color = '#fff' }: IconProps) => {
    return (

        <svg width={size} height={size} className={className} viewBox="0 0 82 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.0834 9.5C33.0834 13.8723 36.6278 17.4167 41.0001 17.4167C45.3723 17.4167 48.9167 13.8723 48.9167 9.5C48.9167 5.12775 45.3723 1.58334 41.0001 1.58334C36.6278 1.58334 33.0834 5.12775 33.0834 9.5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38.2055 10.4975L41.0001 7.71082L43.7947 10.4975" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

export default CloseAccordionIcon;
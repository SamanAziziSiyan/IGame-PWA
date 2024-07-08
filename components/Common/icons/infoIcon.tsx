import { IconProps } from "@/types";

const InfoIcon = ({ size = 15, className = '', color = '#CCFB4B' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.58333 9.83333H7V7.5H6.41667M7 5.16667H7.00583M12.25 7.5C12.25 8.18944 12.1142 8.87213 11.8504 9.50909C11.5865 10.146 11.1998 10.7248 10.7123 11.2123C10.2248 11.6998 9.64605 12.0865 9.00909 12.3504C8.37213 12.6142 7.68944 12.75 7 12.75C6.31056 12.75 5.62787 12.6142 4.99091 12.3504C4.35395 12.0865 3.7752 11.6998 3.28769 11.2123C2.80018 10.7248 2.41347 10.146 2.14963 9.50909C1.8858 8.87213 1.75 8.18944 1.75 7.5C1.75 6.10761 2.30312 4.77226 3.28769 3.78769C4.27226 2.80312 5.60761 2.25 7 2.25C8.39239 2.25 9.72774 2.80312 10.7123 3.78769C11.6969 4.77226 12.25 6.10761 12.25 7.5Z" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default InfoIcon;
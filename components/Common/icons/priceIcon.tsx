import { IconProps } from "@/types";

const PriceIcon = ({ size = 38, className = '', color = '#CCFB4B' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.8563 11.5574C26.7345 11.2127 26.5465 10.8993 26.3076 10.6324C25.7995 10.0647 25.0611 9.7074 24.2392 9.7074H22.0913C20.7233 9.7074 19.6143 10.8164 19.6143 12.1844C19.6143 13.3484 20.4249 14.3554 21.562 14.6042L24.8322 15.3196C26.1062 15.5982 27.0142 16.7272 27.0142 18.0312C27.0142 19.5638 25.7718 20.8072 24.2392 20.8072H22.3893C21.181 20.8072 20.1532 20.035 19.7722 18.9572" stroke="#CCFB4B" strokeWidth="2.72242" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.3141 9.70734V6.93237" stroke={color} strokeWidth="2.72242" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.3141 23.5822V20.8073" stroke={color} strokeWidth="2.72242" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23.3144 28.5723C30.6683 28.5723 36.6298 22.6108 36.6298 15.2569C36.6298 7.90302 30.6683 1.94153 23.3144 1.94153C15.9605 1.94153 9.99902 7.90302 9.99902 15.2569C9.99902 22.6108 15.9605 28.5723 23.3144 28.5723Z" stroke="#CCFB4B" strokeWidth="2.72242" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.43519 16.7155C2.41302 18.6001 1.83252 20.7592 1.83252 23.0539C1.83252 30.4074 7.79357 36.3684 15.1469 36.3684C17.2308 36.3684 19.2029 35.8895 20.9592 35.036" stroke="#CCFB4B" strokeWidth="2.72242" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default PriceIcon;
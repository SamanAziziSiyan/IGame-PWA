import { IconProps } from "@/types";

const LikeIcon = ({ size = 24, className = '', color = '#CCFB4B' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path d="M7.42184 17.9594L10.405 20.269C10.7899 20.6539 11.656 20.8464 12.2334 20.8464H15.8902C17.0449 20.8464 18.2959 19.9803 18.5846 18.8255L20.8942 11.8007C21.3753 10.4534 20.5093 9.29866 19.0658 9.29866H15.2166C14.6392 9.29866 14.158 8.8175 14.2542 8.14389L14.7354 5.0645C14.9279 4.19842 14.3505 3.23611 13.4844 2.94742C12.7145 2.65872 11.7522 3.04365 11.3673 3.62103L7.42184 9.49112" stroke={color} strokeWidth="1.74419" strokeMiterlimit="10" />
                <path d="M2.51361 17.9595V8.52883C2.51361 7.18159 3.091 6.70044 4.43823 6.70044H5.40054C6.74777 6.70044 7.32516 7.18159 7.32516 8.52883V17.9595C7.32516 19.3067 6.74777 19.7878 5.40054 19.7878H4.43823C3.091 19.7878 2.51361 19.3067 2.51361 17.9595Z" stroke={color} strokeWidth="1.74419" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
}

export default LikeIcon;
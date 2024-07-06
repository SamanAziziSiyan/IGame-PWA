import { IconProps } from "@/types";

const DislikeIcon = ({ size = 24, className = '', color = '#F04242' }: IconProps) => {
    return (

        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
                <path d="M16.397 6.238L13.4139 3.92846C13.029 3.54354 12.1629 3.35107 11.5855 3.35107H7.92873C6.77395 3.35107 5.52295 4.21715 5.23426 5.37192L2.92472 12.3968C2.44356 13.744 3.30964 14.8988 4.7531 14.8988H8.60234C9.17973 14.8988 9.66088 15.3799 9.56465 16.0536L9.0835 19.133C8.89104 19.999 9.46842 20.9613 10.3345 21.25C11.1043 21.5387 12.0667 21.1538 12.4516 20.5764L16.397 14.7063" stroke={color} stroke-width="1.74419" stroke-miterlimit="10" />
                <path d="M21.3052 6.23806V15.6687C21.3052 17.0159 20.7278 17.4971 19.3806 17.4971H18.4182C17.071 17.4971 16.4936 17.0159 16.4936 15.6687V6.23806C16.4936 4.89082 17.071 4.40967 18.4182 4.40967H19.3806C20.7278 4.40967 21.3052 4.89082 21.3052 6.23806Z" stroke={color} stroke-width="1.74419" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>


    );
}

export default DislikeIcon;
import { IconProps } from "@/types";

const AccountIcon = ({ size = 27, className = '', color = '#fff' }: IconProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 34 34" fill="none">
            <path d="M16.6531 16.6531C20.4853 16.6531 23.5918 13.5465 23.5918 9.71429C23.5918 5.88211 20.4853 2.77551 16.6531 2.77551C12.8209 2.77551 9.71429 5.88211 9.71429 9.71429C9.71429 13.5465 12.8209 16.6531 16.6531 16.6531Z" stroke="white" strokeWidth="2.77551" strokeLinecap="square" strokeLinejoin="round" />
            <path d="M28.5739 30.5306C28.5739 25.16 23.2311 20.8163 16.6531 20.8163C10.0752 20.8163 4.7323 25.16 4.7323 30.5306" stroke={color} strokeWidth="2.77551" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
    );
}

export default AccountIcon;
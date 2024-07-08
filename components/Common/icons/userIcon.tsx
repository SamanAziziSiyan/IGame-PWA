import { IconProps } from "@/types";

const UserIcon = ({ size = 29, className = '', color = '#CCFB4B' }: IconProps) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.593018" y="0.895386" width="27.907" height="27.907" rx="13.9535" fill={color} />
            <path d="M20.7481 21.8256C20.7481 20.7437 20.7481 20.2028 20.6146 19.7627C20.3139 18.7716 19.5384 17.9961 18.5474 17.6955C18.1073 17.562 17.5663 17.562 16.4845 17.562H12.6085C11.5267 17.562 10.9858 17.562 10.5456 17.6955C9.55463 17.9961 8.77911 18.7716 8.47849 19.7627C8.34497 20.2028 8.34497 20.7437 8.34497 21.8256M18.0349 11.3604C18.0349 13.287 16.4731 14.8488 14.5465 14.8488C12.6199 14.8488 11.0581 13.287 11.0581 11.3604C11.0581 9.43387 12.6199 7.87207 14.5465 7.87207C16.4731 7.87207 18.0349 9.43387 18.0349 11.3604Z" stroke="#111111" strokeWidth="1.55039" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

export default UserIcon;
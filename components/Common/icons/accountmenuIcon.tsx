import { IconProps } from "@/types";

const AccountMenuIcon = ({ size = 25, className = '', color = '#111111' }: IconProps) => {
    return (

        <svg className={className} width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5799 9.08003V15.92C21.5799 17.04 20.9799 18.08 20.0099 18.65L14.0699 22.08C13.0999 22.64 11.8999 22.64 10.9199 22.08L4.97991 18.65C4.00991 18.09 3.40991 17.05 3.40991 15.92V9.08003C3.40991 7.96003 4.00991 6.91999 4.97991 6.34999L10.9199 2.92C11.8899 2.36 13.0899 2.36 14.0699 2.92L20.0099 6.34999C20.9799 6.91999 21.5799 7.95003 21.5799 9.08003Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.4999 11.5C13.7867 11.5 14.8299 10.4568 14.8299 9.16998C14.8299 7.88316 13.7867 6.84003 12.4999 6.84003C11.2131 6.84003 10.1699 7.88316 10.1699 9.16998C10.1699 10.4568 11.2131 11.5 12.4999 11.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 17.16C16.5 15.36 14.71 13.9 12.5 13.9C10.29 13.9 8.5 15.36 8.5 17.16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

export default AccountMenuIcon;
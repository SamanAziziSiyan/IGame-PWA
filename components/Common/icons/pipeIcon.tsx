import { IconProps } from "@/types";

const PipeIcon = ({ size = 3, className = '', color = '#CCFB4B' }: IconProps) => {
    return (
        <svg className={className} width={size} height="10" viewBox="0 0 3 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.988403" y="0.197754" width="1.16279" height="9.30233" fill={color} />
        </svg>

    );
}

export default PipeIcon;
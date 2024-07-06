import { IconProps } from "@/types";

const EyeIcon = ({ size = 22, className = "", color = "#fff" }: IconProps) => {
  return (
    <svg
      width={size}
      height="19"
      className={className}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2221 11.2413C16.4009 11.4494 16.5 11.7197 16.5 12C16.5 12.2803 16.4009 12.5506 16.2221 12.7587C15.0891 14.0382 12.5103 16.5294 9.50001 16.5294C6.48966 16.5294 3.91091 14.0382 2.77799 12.7587C2.59905 12.5506 2.5 12.2803 2.5 12C2.5 11.7197 2.59905 11.4494 2.77799 11.2413C3.91091 9.96176 6.48966 7.47058 9.50001 7.47058C12.5103 7.47058 15.0891 9.96176 16.2221 11.2413Z"
        stroke={color}
        stroke-width="1.23529"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47062 14.0001C10.5915 14.0001 11.5001 13.0915 11.5001 11.9706C11.5001 10.8498 10.5915 9.94116 9.47062 9.94116C8.34978 9.94116 7.44116 10.8498 7.44116 11.9706C7.44116 13.0915 8.34978 14.0001 9.47062 14.0001Z"
        stroke={color}
        stroke-width="1.23529"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;

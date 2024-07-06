import { IconProps } from "@/types";

const PlusIcon = ({
  size = 12,
  className = "",
  color = "#111111",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.13574 4.83285H11.3357V6.95495H7.13574V11.6413H4.79258V6.95495H0.570475V4.83285H4.79258V0.212847H7.13574V4.83285Z"
        fill={color}
      />
    </svg>
  );
};

export default PlusIcon;

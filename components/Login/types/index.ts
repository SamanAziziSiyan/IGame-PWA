export interface OTPInputProps {
    value: string;
    onChange: (otp: string) => void;
    numInputs: number;
    isInputNum?: boolean;
    renderInput: (props: any) => JSX.Element;
    separator?: JSX.Element;
}
export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

export interface LoginVerifyProps {
    userPhoneNumber: string;
}
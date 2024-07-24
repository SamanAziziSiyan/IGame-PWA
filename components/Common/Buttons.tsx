const Button = ({ className = '', children, type = 'button', onClick }: ButtonProps) => {
    return (
        <>
            <button onClick={onClick} className={`${className} bg-[#CCFB4B] text-[#111]`} type={type}>{children}</button>
        </>
    );
}

export default Button;

interface ButtonProps { className?: string, children: React.ReactNode, type?: 'button' | 'submit' | 'reset', onClick?: () => void }


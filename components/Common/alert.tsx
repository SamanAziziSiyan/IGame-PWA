const Alert = ({ children, icon, type = 'danger' }: AlertProps) => {
    return (
        <>
            <div className={`${type == 'warning' ? 'text-[#E9B20F] bg-[#E9B20F]/10  border-[#E9B20F]' : 'border-[#F04242] text-[#F04242] bg-[#F04242]/10'} ${icon ? 'flex' : ''}  py-3 px-4  font-medium gap-2  border rounded-[5px] text-sm text-justify`}>
                <div>
                    {icon && icon}
                </div>
                {children}
            </div>
        </>
    );
}

export default Alert;

interface AlertProps { children: React.ReactNode, icon?: React.ReactNode, type?: string }


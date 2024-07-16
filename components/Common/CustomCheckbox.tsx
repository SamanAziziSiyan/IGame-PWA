// components/Common/CustomCheckbox.tsx
import React from 'react';
import { UseFormRegister, FieldError, Path } from 'react-hook-form';

interface IFormInput {
  // Define your form input types here
  [key: string]: any;
}

interface CustomCheckboxProps {
    id: string;
    label: string;
    register: UseFormRegister<IFormInput>;
    name: Path<IFormInput>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    className?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    id,
    label,
    register,
    name,
    validationRules,
    errors,
    className = '',
}) => {
    return (
        <>
            <div className={`flex items-center gap-2 ${className}`}>
                <input
                    id={id}
                    type="checkbox"
                    className="hidden peer"
                    {...register(name, validationRules)}
                />
                <label
                    htmlFor={id}
                    className="flex items-center justify-center w-4 h-4 bg-white/15 border-[#111]/50 rounded cursor-pointer peer-checked:border-[#4285F4] border-2 peer-checked:bg-[#4285F4]/60">
                    <svg
                        className="hidden w-2 h-2 text-white peer-checked:block"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>
                <label className='text-[#111] font-medium text-[10px] cursor-pointer' htmlFor={id}>
                    {label}
                </label>
            </div>
            {errors && <p className="text-red-500 text-[10px]">{errors.message}</p>}
        </>
    );
};

export default CustomCheckbox;

import React from 'react';
import { FieldValues, UseFormRegister, FieldError, Path } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
    id: string;
    type?: string;
    label: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    placeholder?: string;
    className?: string;
    multiple?:boolean
}

const CustomInput = <T extends FieldValues>({
    id,
    type = 'text',
    label,
    register,
    name,
    validationRules,
    errors,
    placeholder = '',
    className = '',
    multiple = false,
}: CustomInputProps<T>) => {
    return (
        <div className={`text-white flex flex-col gap-y-[6px] ${className}`}>
            <label className='text-white text-base' htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className='bg-white/15 border border-white/50 rounded-lg p-[14px]'
                {...register(name, validationRules)}
            />
            {errors && <p>{errors.message}</p>}
        </div>
    );
};

export default CustomInput;

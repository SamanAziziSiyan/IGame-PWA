import React, { useState, useEffect } from 'react';
import { FieldValues, UseFormRegister, FieldError, Path } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues> {
    id: string;
    type?: string;
    label: string;
    value?: string;
    defaultValue?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    placeholder?: string;
    className?: string;
}

const CustomInput = <T extends FieldValues>({
    id,
    type = 'text',
    label,
    value,
    defaultValue = '',
    register,
    name,
    validationRules,
    errors,
    placeholder = '',
    className = '',
}: CustomInputProps<T>) => {
    const [inputValue, setInputValue] = useState(value || defaultValue);

    useEffect(() => {
        setInputValue(value || defaultValue);
    }, [value, defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={`text-white flex flex-col gap-y-[6px] ${className}`}>
            <label className='text-white text-base' htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={inputValue}
                placeholder={placeholder}
                className='bg-white/15 border border-white/50 rounded-lg p-[14px]'
                {...register(name, { ...validationRules, onChange: handleChange })}
            />
            {errors && <p className='text-red-400 text-xs'>{errors.message}</p>}
        </div>
    );
};

CustomInput.displayName = 'CustomInput';

export default CustomInput;

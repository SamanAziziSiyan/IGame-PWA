import React from 'react';
import { FieldValues, UseFormRegister, FieldError, Path } from 'react-hook-form';

interface CustomSelectProps<T extends FieldValues> {
    id: string;
    label: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    options: { value: string; label: string }[];
    className?: string;
    svgIcon: string; // New prop for SVG icon
}

const CustomSelect = <T extends FieldValues>({
    id,
    label,
    register,
    name,
    validationRules,
    errors,
    options,
    className = '',
    svgIcon,
}: CustomSelectProps<T>) => {
    return (
        <div className={`custom-select-wrapper ${className}`}>
            <label htmlFor={id}>{label}</label>
            <div className="custom-select-container">
                <select id={id} {...register(name, validationRules)} className="custom-select bg-white/15 border border-white/50 rounded-lg p-[14px]">
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="custom-select-icon" dangerouslySetInnerHTML={{ __html: svgIcon }} />
                {errors && <p>{errors.message}</p>}
            </div>
        </div>
    );
};

export default CustomSelect;

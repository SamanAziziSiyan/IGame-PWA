import React, { ChangeEvent } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import { CustomSelectProps } from '../../types';

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
    onChange,
    value,
}: CustomSelectProps<T>) => {
    const errorMessage = errors && (errors as FieldError)?.message ? (errors as FieldError).message : '';

    return (
        <div className={`custom-select-wrapper ${className}`}>
            <label htmlFor={id}>{label}</label>
            <div className="custom-select-container">
                <select
                    id={id}
                    {...register(name, validationRules)}
                    className="custom-select bg-white/15 border border-white/50 rounded-lg p-[14px]"
                    onChange={onChange}
                    value={value}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="custom-select-icon">{svgIcon}</span>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </div>
    );
};

export default CustomSelect;

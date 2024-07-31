import { UseFormRegister, FieldError, Path, FieldValues, Merge, FieldErrorsImpl } from 'react-hook-form';
import React, { ChangeEvent, ReactNode } from 'react';

export interface CustomCheckboxProps<T extends FieldValues> {
    id: string;
    label: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean
}
export interface CustomInputProps<T extends FieldValues> {
    id: string;
    type?: string;
    label?: string;
    value?: string;
    defaultValue?: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError;
    placeholder?: string;
    className?: string;
}
export interface CustomSelectProps<T extends FieldValues> {
    id: string;
    label: string;
    register: UseFormRegister<T>;
    name: Path<T>;
    validationRules?: Record<string, any>;
    errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    options: { value: string; label: string }[];
    className?: string;
    svgIcon: React.ReactNode;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;  // Added onChange prop
}

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export interface DropdownMenuProps {
    trigger: ReactNode;
    children: ReactNode;
    className?: string;
}
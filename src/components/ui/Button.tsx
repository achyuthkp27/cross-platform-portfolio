import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends TouchableOpacityProps {
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    label: string;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    label,
    loading,
    disabled,
    ...props
}) => {
    const baseClasses = "flex-row items-center justify-center rounded-lg font-medium transition-colors";

    const variantClasses = {
        primary: "bg-blue-600 active:bg-blue-700",
        secondary: "bg-slate-800 dark:bg-slate-200 active:bg-slate-700",
        outline: "border border-slate-300 dark:border-slate-700 bg-transparent active:bg-slate-100 dark:active:bg-slate-800",
        ghost: "bg-transparent active:bg-slate-100 dark:active:bg-slate-800",
    };

    const textClasses = {
        primary: "text-white",
        secondary: "text-white dark:text-slate-900",
        outline: "text-slate-900 dark:text-white",
        ghost: "text-slate-900 dark:text-white",
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <TouchableOpacity
            className={twMerge(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                disabled && "opacity-50",
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'primary' ? 'white' : 'gray'} />
            ) : (
                <Text className={twMerge("font-bold", textClasses[variant])}>{label}</Text>
            )}
        </TouchableOpacity>
    );
};

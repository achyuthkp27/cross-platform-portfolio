import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends TouchableOpacityProps {
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    label: string;
    loading?: boolean;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    label,
    loading,
    disabled,
    icon,
    ...props
}) => {
    const baseClasses = "flex-row items-center justify-center rounded-xl font-medium transition-transform active:scale-95";

    const variantClasses = {
        primary: "bg-blue-600 active:bg-blue-700 shadow-lg shadow-blue-500/30",
        secondary: "bg-slate-800 dark:bg-slate-200 active:bg-slate-700",
        outline: "border-2 border-slate-200 dark:border-slate-700 bg-transparent active:bg-slate-50 dark:active:bg-slate-800",
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
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg",
        xl: "px-8 py-5 text-xl",
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
                <>
                    {icon && <View className="mr-3">{icon}</View>}
                    <Text className={twMerge("font-bold", textClasses[variant])}>{label}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

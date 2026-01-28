import React from 'react';
import { View, ViewProps } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends ViewProps {
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
    maxWidth = 'xl',
    style,
    ...props
}) => {
    const maxWidthClasses = {
        sm: 'max-w-screen-sm',
        md: 'max-w-screen-md',
        lg: 'max-w-screen-lg',
        xl: 'max-w-screen-xl',
        '2xl': 'max-w-screen-2xl',
        full: 'max-w-full',
    };

    return (
        <View
            className={twMerge(
                "mx-auto w-full px-4 sm:px-6 lg:px-8",
                maxWidthClasses[maxWidth],
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </View>
    );
};

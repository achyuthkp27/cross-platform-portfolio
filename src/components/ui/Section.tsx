import React from 'react';
import { View, ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends ViewProps {
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
    return (
        <View
            className={twMerge("py-12 md:py-16 lg:py-24", className)}
            {...props}
        >
            {children}
        </View>
    );
};

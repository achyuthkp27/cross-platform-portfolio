import React from 'react';
import { View, ScrollView, ScrollViewProps } from 'react-native';
import { Navbar } from './Navbar';

interface ScreenLayoutProps {
    children: React.ReactNode;
    scrollViewProps?: ScrollViewProps;
    disableScroll?: boolean;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
    children,
    scrollViewProps,
    disableScroll = false
}) => {
    return (
        <View className="flex-1 bg-white dark:bg-slate-950">
            <Navbar />
            {disableScroll ? (
                <View className="flex-1">
                    {children}
                </View>
            ) : (
                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ flexGrow: 1 }}
                    {...scrollViewProps}
                >
                    {children}
                </ScrollView>
            )}
        </View>
    );
};

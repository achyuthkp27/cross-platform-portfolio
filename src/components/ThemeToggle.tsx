import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Sun, Moon } from 'lucide-react-native';
import { MotiView } from 'moti';

export const ThemeToggle = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <TouchableOpacity
            onPress={toggleColorScheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
            <MotiView
                key={isDark ? 'moon' : 'sun'}
                from={{ scale: 0.5, opacity: 0, rotate: '-90deg' }}
                animate={{ scale: 1, opacity: 1, rotate: '0deg' }}
                exit={{ scale: 0.5, opacity: 0, rotate: '90deg' }}
                transition={{ type: 'spring', damping: 15 }}
            >
                {isDark ? (
                    <Moon className="text-blue-400" size={24} fill="currentColor" />
                ) : (
                    <Sun className="text-amber-500" size={24} fill="currentColor" />
                )}
            </MotiView>
        </TouchableOpacity>
    );
};

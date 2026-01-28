import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Sun, Moon } from 'lucide-react-native';

export const ThemeToggle = () => {
    const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

    return (
        <TouchableOpacity
            onPress={toggleColorScheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800"
        >
            {colorScheme === 'dark' ? (
                <Sun className="text-yellow-500" size={24} />
            ) : (
                <Moon className="text-slate-900" size={24} />
            )}
        </TouchableOpacity>
    );
};

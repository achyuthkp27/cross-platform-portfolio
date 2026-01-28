import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Container } from './ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react-native';
import { clsx } from 'clsx';

export const Navbar = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems: { name: string; route: keyof RootStackParamList }[] = [
        { name: 'Projects', route: 'Projects' },
        { name: 'Experience', route: 'Experience' },
        { name: 'Skills', route: 'Skills' },
        { name: 'Contact', route: 'Contact' },
    ];

    return (
        <View className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
            <Container className="flex-row items-center justify-between h-16">
                <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                    <Text className="text-xl font-bold text-slate-900 dark:text-white">
                        DevPortfolio
                    </Text>
                </TouchableOpacity>

                {/* Desktop Nav */}
                <View className="hidden md:flex flex-row items-center space-x-8">
                    {navItems.map((item) => (
                        <TouchableOpacity
                            key={item.name}
                            onPress={() => navigation.navigate(item.route)}
                        >
                            <Text className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <ThemeToggle />
                </View>

                {/* Mobile Nav Toggle */}
                <View className="flex md:hidden flex-row items-center space-x-4">
                    <ThemeToggle />
                    <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="text-slate-900 dark:text-white" size={24} />
                    </TouchableOpacity>
                </View>
            </Container>

            {/* Mobile Menu - Simple implementation */}
            {isMenuOpen && (
                <View className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-4">
                    {navItems.map((item) => (
                        <TouchableOpacity
                            key={item.name}
                            onPress={() => {
                                navigation.navigate(item.route);
                                setIsMenuOpen(false);
                            }}
                            className="py-2"
                        >
                            <Text className="text-base font-medium text-slate-900 dark:text-white">
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

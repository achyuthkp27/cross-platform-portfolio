import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/Navbar';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Sparkles, ArrowRight } from 'lucide-react-native';

import { TechMarquee } from '../components/TechMarquee';
import { Testimonials } from '../components/Testimonials';

export default function LandingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className="flex-1 bg-white dark:bg-slate-950">
            <Navbar />
            <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>

                {/* Hero Section */}
                <Container className="justify-center items-center py-24 md:py-32 min-h-[85vh]">
                    {/* Background Blob Effect (Simulated with absolute positioned colored views) */}
                    <View className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-50" />
                    <View className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-50" />

                    <MotiView
                        from={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'spring', damping: 20 }}
                        className="items-center relative z-10"
                    >
                        <View className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded-full mb-8 flex-row items-center space-x-2 shadow-sm">
                            <Sparkles size={14} className="text-amber-500" color="#f59e0b" />
                            <Text className="text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest">
                                Available for new projects
                            </Text>
                        </View>

                        <Text className="text-5xl md:text-8xl font-black text-center text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                            Building <Text className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital</Text>{"\n"}
                            <Text className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experiences</Text>
                        </Text>

                        <Text className="text-lg md:text-2xl text-center text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
                            I'm a Full Stack Engineer crafting high-performance applications with modern technologies.
                            Focused on accessibility, user experience, and clean code.
                        </Text>

                        <View className="flex-row flex-wrap justify-center gap-6">
                            <Button
                                label="View My Work"
                                size="xl"
                                onPress={() => navigation.navigate('Projects')}
                                className="shadow-xl shadow-blue-500/20"
                                icon={<ArrowRight size={20} color="white" />}
                            />
                            <Button
                                label="Contact Me"
                                variant="outline"
                                size="xl"
                                onPress={() => navigation.navigate('Contact')}
                            />
                        </View>
                    </MotiView>
                </Container>

                <TechMarquee />
                <Testimonials />
            </ScrollView>
        </View>
    );
}

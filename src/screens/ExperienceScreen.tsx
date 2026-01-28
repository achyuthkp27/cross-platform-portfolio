import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { MotiView } from 'moti';
import { Briefcase } from 'lucide-react-native';

export default function ExperienceScreen() {
    const { experiences, fetchData } = usePortfolioStore();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScreenLayout>
            <Container>
                <Section>
                    <MotiView
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 800 }}
                    >
                        <Text className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                            Experience
                        </Text>
                    </MotiView>

                    <View className="relative max-w-5xl mx-auto px-0 md:px-4">
                        {/* Continuous Timeline Line - Positioned at center of the left column (w-16 = 4rem = 64px. Center = 32px or left-8) */}
                        <View className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />

                        {experiences.map((exp, index) => (
                            <MotiView
                                key={exp.id}
                                from={{ opacity: 0, translateX: -20 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ type: 'timing', delay: index * 200, duration: 600 }}
                                className="flex-row items-start mb-12"
                            >
                                {/* Left Column: Timeline Node */}
                                <View className="w-16 flex-none items-center justify-start z-10 pt-2 md:pt-4">
                                    <View className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center border-4 border-white dark:border-slate-950 shadow-lg">
                                        <Briefcase size={20} color="white" />
                                    </View>
                                </View>

                                {/* Right Column: Content Card */}
                                <View className="flex-1 pl-6 md:pl-10">
                                    <View className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">

                                        {/* Header Section */}
                                        <View className="flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                                            <View className="flex-1">
                                                <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                                                    {exp.role}
                                                </Text>
                                                <Text className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                                    {exp.company}
                                                </Text>
                                            </View>
                                            <View className="flex-none bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full self-start border border-slate-200 dark:border-slate-700">
                                                <Text className="text-sm font-bold text-slate-600 dark:text-slate-300">
                                                    {exp.period}
                                                </Text>
                                            </View>
                                        </View>

                                        {/* Description */}
                                        <Text className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-8">
                                            {exp.description}
                                        </Text>

                                        {/* Tech Stack Chips */}
                                        {exp.techStack && (
                                            <View className="flex-row flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-800/50">
                                                {exp.techStack.map((tech) => (
                                                    <View key={tech} className="bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-xl border border-blue-100 dark:border-blue-800/30">
                                                        <Text className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide">
                                                            {tech}
                                                        </Text>
                                                    </View>
                                                ))}
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </MotiView>
                        ))}
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

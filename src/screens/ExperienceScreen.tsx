import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { MotiView } from 'moti';

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

                    <View className="relative">
                        {/* Desktop Center Line */}
                        <View className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -ml-px hidden md:block" />

                        {/* Mobile Left Line */}
                        <View className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:hidden" />

                        {experiences.map((exp, index) => (
                            <View
                                key={exp.id}
                                className={`mb-12 relative md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}
                            >
                                {/* Spacer for Desktop ZigZag */}
                                <View className="hidden md:block md:w-1/2 md:flex-1" />

                                {/* Timeline Dot */}
                                <View
                                    className="absolute left-6 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-600 border-[3px] md:border-4 border-white dark:border-slate-950 z-10"
                                    style={{
                                        transform: [{ translateX: -8 }], // Center the dot (w/2)
                                        top: 0
                                    }}
                                // Desktop adjustment: centered
                                // Mobile adjustment: left-6 (24px) -> center is 24px. transform -8 makes it 16px to 32px (16px width).
                                // Just use explicit simplified positioning for dot.
                                />
                                {/* Re-doing dot with cleaner classes */}
                                <View className="absolute left-6 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-600 border-2 md:border-4 border-white dark:border-slate-950 z-10 -ml-2 md:-ml-3 mt-1.5 md:mt-0" />

                                <MotiView
                                    from={{ opacity: 0, translateX: 50 }} // Simplify mobile animation
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ type: 'timing', delay: index * 200, duration: 800 }}
                                    className="flex-1 pl-16 md:pl-0 md:px-12 w-full"
                                >
                                    <View className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                        <Text className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-1">
                                            {exp.period}
                                        </Text>
                                        <Text className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                            {exp.role}
                                        </Text>
                                        <Text className="text-base font-medium text-slate-700 dark:text-slate-300 mb-4">
                                            {exp.company}
                                        </Text>
                                        <Text className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                            {exp.description}
                                        </Text>
                                    </View>
                                </MotiView>
                            </View>
                        ))}
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

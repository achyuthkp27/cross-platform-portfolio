import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { MotiView } from 'moti';

export default function SkillsScreen() {
    const { skills, fetchData } = usePortfolioStore();

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
                            Skills & Expertise
                        </Text>
                    </MotiView>

                    <View className="flex-row flex-wrap gap-6 md:gap-8">
                        {skills.map((category, index) => (
                            <MotiView
                                key={category.title}
                                from={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'timing', delay: index * 200, duration: 800 }}
                                className="w-full md:w-[48%] bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800"
                            >
                                <Text className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    {category.title}
                                </Text>

                                <View className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <View key={skill.name}>
                                            <View className="flex-row justify-between items-center mb-2">
                                                <Text className="text-slate-700 dark:text-slate-300 font-medium flex-1 mr-4">
                                                    {skill.name}
                                                </Text>
                                                <Text className="text-slate-500 dark:text-slate-500 text-sm font-semibold min-w-[3rem] text-right">
                                                    {skill.level}%
                                                </Text>
                                            </View>
                                            <View className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                                <MotiView
                                                    from={{ width: '0%' }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ type: 'timing', duration: 1000, delay: 500 }}
                                                    className="h-full bg-blue-600 rounded-full"
                                                />
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </MotiView>
                        ))}
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { MotiView } from 'moti';
import { Code, Server, Database, Terminal, Layout } from 'lucide-react-native';

export default function SkillsScreen() {
    const { skills, fetchData } = usePortfolioStore();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScreenLayout>
            <Container>
                <Section>
                    {/* Header */}
                    <View className="mb-12">
                        <MotiView
                            from={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: 'timing', duration: 800 }}
                        >
                            <Text className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                                Skills & Expertise
                            </Text>
                            <Text className="text-lg text-slate-600 dark:text-slate-400">
                                Technologies and tools I work with.
                            </Text>
                        </MotiView>
                    </View>

                    <View className="space-y-12">
                        {skills.map((category, index) => {
                            const Icon = category.title.includes('Frontend') ? Layout :
                                category.title.includes('Backend') ? Server :
                                    category.title.includes('Database') ? Database :
                                        category.title.includes('Mobile') ? Terminal : Code;

                            return (
                                <View key={category.title}>
                                    <MotiView
                                        from={{ opacity: 0, translateY: 20 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        transition={{ type: 'timing', delay: index * 100, duration: 600 }}
                                    >
                                        <View className="flex-row items-center mb-6">
                                            <View className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                                                <Icon size={24} className="text-blue-600 dark:text-blue-400" color="#2563eb" />
                                            </View>
                                            <Text className="text-2xl font-bold text-slate-900 dark:text-white">
                                                {category.title}
                                            </Text>
                                        </View>

                                        <View className="flex-row flex-wrap gap-4">
                                            {category.skills.map((skill, sIndex) => (
                                                <View
                                                    key={skill.name}
                                                    className="w-full md:w-[32%]"
                                                >
                                                    <MotiView
                                                        from={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ type: 'timing', delay: (index * 100) + (sIndex * 50), duration: 500 }}
                                                    >
                                                        <View className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                                                            <View className="flex-row justify-between items-center mb-3">
                                                                <Text className="font-semibold text-slate-700 dark:text-slate-200 text-lg flex-1 mr-2" numberOfLines={1}>
                                                                    {skill.name}
                                                                </Text>
                                                                <Text className="text-slate-400 dark:text-slate-500 font-medium text-sm">
                                                                    {skill.level}%
                                                                </Text>
                                                            </View>

                                                            <View className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                                                <MotiView
                                                                    from={{ width: '0%' }}
                                                                    animate={{ width: `${skill.level}%` }}
                                                                    transition={{ type: 'timing', duration: 1000, delay: 500 }}
                                                                    className="h-full bg-blue-600 rounded-full"
                                                                />
                                                            </View>
                                                        </View>
                                                    </MotiView>
                                                </View>
                                            ))}
                                        </View>
                                    </MotiView>
                                </View>
                            );
                        })}
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

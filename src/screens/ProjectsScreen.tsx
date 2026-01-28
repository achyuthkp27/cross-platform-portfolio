import React, { useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Platform } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { Github, ArrowUpRight, Layers, Code } from 'lucide-react-native';
import { MotiView } from 'moti';

export default function ProjectsScreen() {
    const { projects, fetchData } = usePortfolioStore();

    useEffect(() => {
        fetchData();
    }, []);

    const openLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <ScreenLayout>
            <Container>
                <Section>
                    {/* Header - Wrapped in View for reliable spacing */}
                    <View className="mb-16 md:mb-24">
                        <MotiView
                            from={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: 'timing', duration: 800 }}
                        >
                            <View className="flex-row items-center mb-6 space-x-3">
                                <View className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-xl">
                                    <Layers size={24} className="text-blue-600 dark:text-blue-400" color="#2563eb" />
                                </View>
                                <Text className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                    My Portfolio
                                </Text>
                            </View>
                            <Text className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
                                Selected <Text className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Work</Text>
                            </Text>
                            <Text className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                A curated selection of digital products, interactive experiences, and technological experiments.
                            </Text>
                        </MotiView>
                    </View>

                    {/* Projects Grid - Using View for layout and Gap */}
                    <View className="flex-row flex-wrap justify-center md:justify-between gap-y-12">
                        {projects.map((project, index) => (
                            <View
                                key={project.id}
                                className="w-full md:w-[48%]"
                            >
                                <MotiView
                                    from={{ opacity: 0, scale: 0.95, translateY: 40 }}
                                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                                    transition={{ type: 'spring', delay: index * 150, damping: 20, stiffness: 100 }}
                                    className="flex-1"
                                >
                                    <View className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group">

                                        {/* Image Section - Fixed Height */}
                                        <View className="w-full h-64 md:h-80 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                                            {project.image ? (
                                                <Image
                                                    source={project.image}
                                                    style={{ width: '100%', height: '100%' }}
                                                    resizeMode="cover"
                                                    className="transform transition-transform duration-700 hover:scale-105"
                                                />
                                            ) : (
                                                <View className="w-full h-full items-center justify-center bg-slate-50 dark:bg-slate-800/50">
                                                    <Code size={48} className="text-slate-300 dark:text-slate-700 opacity-50" color="#cbd5e1" />
                                                </View>
                                            )}
                                            {/* Gradient Overlay */}
                                            <View className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </View>

                                        {/* Content Section */}
                                        <View className="p-8 md:p-10 flex-1 flex flex-col">
                                            <Text className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                                {project.title}
                                            </Text>

                                            <Text className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-1">
                                                {project.description}
                                            </Text>

                                            <View className="space-y-8 mt-auto">
                                                {/* Tech Stack Chips */}
                                                <View className="flex-row flex-wrap gap-2">
                                                    {project.techStack.map((tech) => (
                                                        <View key={tech} className="bg-blue-50 dark:bg-blue-900/10 px-4 py-2 rounded-xl border border-blue-100 dark:border-blue-800/30">
                                                            <Text className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                                {tech}
                                                            </Text>
                                                        </View>
                                                    ))}
                                                </View>

                                                {/* Action Buttons Footer */}
                                                <View className="flex-row gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                                                    {project.liveUrl && (
                                                        <TouchableOpacity
                                                            onPress={() => openLink(project.liveUrl!)}
                                                            className="flex-1 bg-slate-900 dark:bg-white py-4 rounded-2xl flex-row items-center justify-center hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/10"
                                                        >
                                                            <Text className="text-white dark:text-slate-900 font-bold mr-2 text-base">Live Demo</Text>
                                                            <ArrowUpRight size={20} className="text-white dark:text-slate-900" color={Platform.OS === 'web' ? 'currentColor' : '#ffffff'} />
                                                        </TouchableOpacity>
                                                    )}

                                                    {project.githubUrl && (
                                                        <TouchableOpacity
                                                            onPress={() => openLink(project.githubUrl!)}
                                                            className={`flex-1 flex-row items-center justify-center py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all ${!project.liveUrl ? 'bg-slate-900 dark:bg-white border-transparent' : ''}`}
                                                        >
                                                            <Github size={20} className={`${!project.liveUrl ? 'text-white dark:text-slate-900' : 'text-slate-900 dark:text-white'} mr-2`} color={!project.liveUrl ? (Platform.OS === 'web' ? 'white' : 'white') : (Platform.OS === 'web' ? '#0f172a' : '#0f172a')} />
                                                            <Text className={`${!project.liveUrl ? 'text-white dark:text-slate-900' : 'text-slate-900 dark:text-white'} font-bold text-base`}>Source</Text>
                                                        </TouchableOpacity>
                                                    )}
                                                </View>
                                            </View>
                                        </View>
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

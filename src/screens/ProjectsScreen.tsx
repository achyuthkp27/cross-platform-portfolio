import React, { useEffect } from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { usePortfolioStore } from '../store/portfolioStore';
import { Github, ExternalLink } from 'lucide-react-native';
import { MotiView } from 'moti';

export default function ProjectsScreen() {
    const { projects, fetchData, isLoading } = usePortfolioStore();

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
                        <Text className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
                            Selected Projects
                        </Text>
                        <Text className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
                            A collection of digital products and experiments I've built.
                        </Text>
                    </MotiView>

                    <View className="flex-row flex-wrap gap-6">
                        {projects.map((project, index) => (
                            <MotiView
                                key={project.id}
                                from={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'timing', delay: index * 200, duration: 800 }}
                                className="w-full md:w-[48%] mb-8"
                            >
                                <View className="flex flex-col h-auto md:h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md">
                                    {project.image && (
                                        <View className="w-full h-[250px] bg-slate-100 dark:bg-slate-800">
                                            <Image
                                                source={project.image}
                                                style={{ width: '100%', height: '100%' }}
                                                resizeMode="cover"
                                            />
                                        </View>
                                    )}
                                    <View className="p-6 flex-1 flex flex-col">
                                        <View className="flex-row justify-between items-start mb-3">
                                            <Text className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex-1 mr-3">
                                                {project.title}
                                            </Text>
                                            <View className="flex-row gap-3">
                                                {project.githubUrl && (
                                                    <TouchableOpacity onPress={() => Linking.openURL(project.githubUrl!)}>
                                                        <Github className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" size={24} />
                                                    </TouchableOpacity>
                                                )}
                                                {project.liveUrl && (
                                                    <TouchableOpacity onPress={() => Linking.openURL(project.liveUrl!)}>
                                                        <ExternalLink className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" size={24} />
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                        </View>

                                        <Text className="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed flex-1">
                                            {project.description}
                                        </Text>

                                        <View className="flex-row flex-wrap gap-2 mt-auto">
                                            {project.techStack.map((tech) => (
                                                <View key={tech} className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700">
                                                    <Text className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                                        {tech}
                                                    </Text>
                                                </View>
                                            ))}
                                        </View>
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

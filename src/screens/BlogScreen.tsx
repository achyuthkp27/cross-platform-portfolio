import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { MotiView } from 'moti';
import { ArrowRight, Calendar, Clock } from 'lucide-react-native';

const ARTICLES = [
    {
        id: '1',
        title: 'The Future of React Native with Server Components',
        excerpt: 'Exploring how RSC will transform mobile development workflows and performance.',
        date: 'Oct 12, 2023',
        readTime: '5 min read',
        category: 'Mobile'
    },
    {
        id: '2',
        title: 'Building Accessible Web Apps for Everyone',
        excerpt: 'A comprehensive guide to ARIA labels, semantic HTML, and keyboard navigation.',
        date: 'Sep 28, 2023',
        readTime: '8 min read',
        category: 'Accessibility'
    },
    {
        id: '3',
        title: 'Why Rust is the Perfect Match for Tauri',
        excerpt: 'Deep dive into memory safety, performance, and the developer experience of Tauri v2.',
        date: 'Aug 15, 2023',
        readTime: '6 min read',
        category: 'Rust'
    }
];

export default function BlogScreen() {
    return (
        <ScreenLayout>
            <Container>
                <Section>
                    <MotiView
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 800 }}
                    >
                        <Text className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                            Thoughts & Insights
                        </Text>
                    </MotiView>

                    <View className="gap-8">
                        {ARTICLES.map((article, index) => (
                            <MotiView
                                key={article.id}
                                from={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ delay: index * 100, duration: 800 }}
                                className="group"
                            >
                                <TouchableOpacity
                                    className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500 dark:hover:border-blue-500"
                                >
                                    <View className="flex-row items-center gap-4 mb-4">
                                        <View className="bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                                            <Text className="text-blue-700 dark:text-blue-300 text-xs font-bold uppercase">
                                                {article.category}
                                            </Text>
                                        </View>
                                        <View className="flex-row items-center gap-1">
                                            <Calendar size={14} className="text-slate-400" />
                                            <Text className="text-slate-500 text-sm">{article.date}</Text>
                                        </View>
                                        <View className="flex-row items-center gap-1">
                                            <Clock size={14} className="text-slate-400" />
                                            <Text className="text-slate-500 text-sm">{article.readTime}</Text>
                                        </View>
                                    </View>

                                    <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </Text>

                                    <Text className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                                        {article.excerpt}
                                    </Text>

                                    <View className="flex-row items-center gap-2">
                                        <Text className="text-blue-600 dark:text-blue-400 font-semibold">Read Article</Text>
                                        <ArrowRight size={16} className="text-blue-600 dark:text-blue-400" />
                                    </View>
                                </TouchableOpacity>
                            </MotiView>
                        ))}
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

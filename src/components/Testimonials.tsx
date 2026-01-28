import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './ui/Container';
import { Quote } from 'lucide-react-native';
import { MotiView } from 'moti';

const TESTIMONIALS = [
    {
        id: 1,
        text: "One of the most talented engineers I've worked with. Delivered the project weeks ahead of schedule.",
        author: "Sarah Johnson",
        role: "CTO @ TechFlow",
    },
    {
        id: 2,
        text: "The attention to detail in the UI/UX is unmatched. Our users love the new app.",
        author: "Michael Chen",
        role: "Product Lead @ StartupX",
    },
    {
        id: 3,
        text: "Solved complex backend scaling issues that our team struggled with for months.",
        author: "Emily Davis",
        role: "Engineering Manager @ BigScale",
    }
];

export const Testimonials = () => {
    return (
        <View className="py-24 bg-slate-50 dark:bg-black/20">
            <Container>
                <View className="mb-16">
                    <Text className="text-3xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">
                        What People Say
                    </Text>
                    <Text className="text-lg text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto">
                        Feedback from clients and colleagues I've had the pleasure of working with.
                    </Text>
                </View>

                <View className="flex-row flex-wrap justify-center gap-6">
                    {TESTIMONIALS.map((t, index) => (
                        <MotiView
                            key={t.id}
                            from={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ type: 'spring', delay: index * 200 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm flex-1 min-w-[300px] max-w-[400px] hover:shadow-xl transition-shadow duration-300"
                        >
                            <View className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full items-center justify-center mb-6">
                                <Quote className="text-blue-600 dark:text-blue-400" size={20} fill="currentColor" />
                            </View>

                            <Text className="text-lg text-slate-700 dark:text-slate-300 mb-8 italic leading-relaxed flex-1">
                                "{t.text}"
                            </Text>

                            <View className="flex-row items-center border-t border-slate-50 dark:border-slate-800 pt-6">
                                <View className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center mr-3">
                                    <Text className="text-white font-bold text-sm">
                                        {t.author.charAt(0)}
                                    </Text>
                                </View>
                                <View>
                                    <Text className="text-base font-bold text-slate-900 dark:text-white">
                                        {t.author}
                                    </Text>
                                    <Text className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                                        {t.role}
                                    </Text>
                                </View>
                            </View>
                        </MotiView>
                    ))}
                </View>
            </Container>
        </View>
    );
};

import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container } from './ui/Container';
import { Quote } from 'lucide-react-native';

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
        <View className="py-20 bg-white dark:bg-slate-950">
            <Container>
                <Text className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
                    What People Say
                </Text>

                <View className="flex-row flex-wrap justify-center gap-8">
                    {TESTIMONIALS.map((t) => (
                        <View
                            key={t.id}
                            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex-1 min-w-[300px] max-w-[400px]"
                        >
                            <Quote className="text-blue-500 mb-6" size={32} />
                            <Text className="text-lg text-slate-700 dark:text-slate-300 mb-6 italic leading-relaxed">
                                "{t.text}"
                            </Text>
                            <View>
                                <Text className="text-base font-bold text-slate-900 dark:text-white">
                                    {t.author}
                                </Text>
                                <Text className="text-sm text-slate-500 dark:text-slate-500">
                                    {t.role}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Container>
        </View>
    );
};

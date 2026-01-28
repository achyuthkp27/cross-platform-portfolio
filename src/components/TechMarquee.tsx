import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MotiView from 'moti'; // We need to check import, sometimes it is { MotiView }
import { MotiView as Moti } from 'moti';
import { Easing } from 'react-native-reanimated';

const TECHNOLOGIES = [
    'React Native', 'Expo', 'TypeScript', 'Rust', 'Tauri', 'Node.js',
    'Next.js', 'TailwindCSS', 'Python', 'Go', 'GraphQL', 'PostgreSQL'
];

export const TechMarquee = () => {
    // We duplicate the list to create the infinite effect
    const list = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

    return (
        <View className="py-10 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <Text className="text-center text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">
                Powering Next-Gen Apps With
            </Text>

            <View className="flex-row overflow-hidden w-full">
                <Moti
                    from={{ translateX: 0 }}
                    animate={{ translateX: -1000 }} // We need a better calculation for "infinite", usually we assume width.
                    // A simple CSS-like infinite loop in Reanimated:
                    transition={{
                        type: 'timing',
                        duration: 20000,
                        easing: Easing.linear,
                        loop: true,
                        repeatReverse: false,
                    }}
                    style={{ flexDirection: 'row', gap: 32 }}
                >
                    {list.map((tech, index) => (
                        <View key={`${tech}-${index}`} className="opacity-70">
                            <Text className="text-2xl font-bold text-slate-300 dark:text-slate-600">
                                {tech}
                            </Text>
                        </View>
                    ))}
                </Moti>
            </View>
        </View>
    );
};

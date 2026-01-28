import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Navbar } from '../components/Navbar';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

import { TechMarquee } from '../components/TechMarquee';
import { Testimonials } from '../components/Testimonials';

export default function LandingScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View className="flex-1 bg-white dark:bg-slate-950">
            <Navbar />
            <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <Container className="justify-center items-center py-20 min-h-[80vh]">
                    <MotiView
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 1000 }}
                        className="items-center"
                    >
                        <View className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-6 self-center">
                            <Text className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                                Available for hire
                            </Text>
                        </View>

                        <Text className="text-4xl md:text-7xl font-bold text-center text-slate-900 dark:text-white mb-6 tracking-tight">
                            Building digital{"\n"}
                            <Text className="text-blue-600 dark:text-blue-500">experiences</Text> that matter.
                        </Text>

                        <Text className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
                            I'm a Full Stack Engineer specializing in building exceptional digital experiences.
                            Currently focused on building accessible, human-centered products.
                        </Text>

                        <View className="flex-row flex-wrap justify-center gap-4">
                            <Button
                                label="View Projects"
                                size="lg"
                                onPress={() => navigation.navigate('Projects')}
                            />
                            <Button
                                label="Contact Me"
                                variant="outline"
                                size="lg"
                                onPress={() => navigation.navigate('Contact')}
                            />
                        </View>
                    </MotiView>
                </Container>

                <TechMarquee />
                <Testimonials />
            </ScrollView>
        </View>
    );
}

import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Platform } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { MotiView } from 'moti';
import { Mail, Linkedin, Github } from 'lucide-react-native';

export default function ContactScreen() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            if (Platform.OS === 'web') {
                alert('Please fill in all fields');
            } else {
                Alert.alert('Error', 'Please fill in all fields');
            }
            return;
        }

        setSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setSubmitting(false);
            if (Platform.OS === 'web') {
                alert('Message sent successfully!');
            } else {
                Alert.alert('Success', 'Message sent successfully!');
            }
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <ScreenLayout>
            <Container maxWidth="md">
                <Section>
                    <MotiView
                        from={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 800 }}
                    >
                        <Text className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                            Let's Connect
                        </Text>
                        <Text className="text-lg text-slate-600 dark:text-slate-400 text-center mb-12">
                            Have a project in mind or want to say chat?
                        </Text>
                    </MotiView>

                    <View className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <View className="space-y-4">
                            <View>
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</Text>
                                <TextInput
                                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 outline-none"
                                    placeholder="John Doe"
                                    placeholderTextColor="#94a3b8"
                                    value={formData.name}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                                />
                            </View>
                            <View>
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</Text>
                                <TextInput
                                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 outline-none"
                                    placeholder="john@example.com"
                                    placeholderTextColor="#94a3b8"
                                    keyboardType="email-address"
                                    value={formData.email}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                                />
                            </View>
                            <View>
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</Text>
                                <TextInput
                                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 h-32 outline-none"
                                    placeholder="Tell me about your project..."
                                    placeholderTextColor="#94a3b8"
                                    multiline
                                    textAlignVertical="top"
                                    value={formData.message}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, message: text }))}
                                />
                            </View>

                            <Button
                                label={submitting ? "Sending..." : "Send Message"}
                                onPress={handleSubmit}
                                loading={submitting}
                                size="lg"
                                className="mt-4"
                            />
                        </View>
                    </View>

                    <View className="flex-row justify-center space-x-8 mt-12">
                        <View className="items-center">
                            <View className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center mb-2">
                                <Mail className="text-slate-600 dark:text-slate-400" size={24} />
                            </View>
                            <Text className="text-sm text-slate-500 font-medium">Email</Text>
                        </View>
                        <View className="items-center">
                            <View className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center mb-2">
                                <Linkedin className="text-slate-600 dark:text-slate-400" size={24} />
                            </View>
                            <Text className="text-sm text-slate-500 font-medium">LinkedIn</Text>
                        </View>
                        <View className="items-center">
                            <View className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 items-center justify-center mb-2">
                                <Github className="text-slate-600 dark:text-slate-400" size={24} />
                            </View>
                            <Text className="text-sm text-slate-500 font-medium">GitHub</Text>
                        </View>
                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

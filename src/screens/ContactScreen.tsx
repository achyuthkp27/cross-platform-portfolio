import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Platform, TouchableOpacity, Linking } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { MotiView } from 'moti';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react-native';

export default function ContactScreen() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            const msg = 'Please fill in all fields';
            Platform.OS === 'web' ? alert(msg) : Alert.alert('Error', msg);
            return;
        }

        setSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setSubmitting(false);
            const msg = 'Message sent successfully!';
            Platform.OS === 'web' ? alert(msg) : Alert.alert('Success', msg);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const openLink = (url: string) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
    };

    return (
        <ScreenLayout>
            <Container>
                <Section>
                    <View className="flex-col md:flex-row gap-12 md:gap-24">

                        {/* Left Column: Info & Socials */}
                        <View className="w-full md:w-1/2">
                            <MotiView
                                from={{ opacity: 0, translateX: -20 }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ type: 'timing', duration: 800 }}
                            >
                                <View className="mb-12">
                                    <View className="flex-row items-center mb-6 space-x-3">
                                        <View className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-xl">
                                            <MessageSquare size={24} className="text-blue-600 dark:text-blue-400" color="#2563eb" />
                                        </View>
                                        <Text className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                            Contact
                                        </Text>
                                    </View>
                                    <Text className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                                        Let's work <Text className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">together</Text>
                                    </Text>
                                    <Text className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or just having a chat.
                                    </Text>
                                </View>

                                {/* Social Cards */}
                                <View className="space-y-4">
                                    <TouchableOpacity
                                        onPress={() => openLink('mailto:hello@example.com')}
                                        className="flex-row items-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <View className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 items-center justify-center mr-4">
                                            <Mail size={20} className="text-blue-600 dark:text-blue-400" color="#2563eb" />
                                        </View>
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white">Email Me</Text>
                                            <Text className="text-slate-500 dark:text-slate-400">hello@example.com</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => openLink('https://linkedin.com')}
                                        className="flex-row items-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <View className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 items-center justify-center mr-4">
                                            <Linkedin size={20} className="text-blue-600 dark:text-blue-400" color="#0077b5" />
                                        </View>
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</Text>
                                            <Text className="text-slate-500 dark:text-slate-400">Connect professionally</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => openLink('https://github.com')}
                                        className="flex-row items-center p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group"
                                    >
                                        <View className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 items-center justify-center mr-4">
                                            <Github size={20} className="text-blue-600 dark:text-blue-400" color="#24292e" />
                                        </View>
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white">GitHub</Text>
                                            <Text className="text-slate-500 dark:text-slate-400">Check out my code</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </MotiView>
                        </View>

                        {/* Right Column: Form */}
                        <View className="w-full md:w-1/2">
                            <MotiView
                                from={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ type: 'timing', delay: 200, duration: 800 }}
                            >
                                <View className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                                    <View className="space-y-6">
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white mb-2 ml-1">Name</Text>
                                            <TextInput
                                                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                                placeholder="John Doe"
                                                placeholderTextColor="#94a3b8"
                                                value={formData.name}
                                                onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                                            />
                                        </View>
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white mb-2 ml-1">Email</Text>
                                            <TextInput
                                                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                                placeholder="john@example.com"
                                                placeholderTextColor="#94a3b8"
                                                keyboardType="email-address"
                                                value={formData.email}
                                                onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                                            />
                                        </View>
                                        <View>
                                            <Text className="text-sm font-bold text-slate-900 dark:text-white mb-2 ml-1">Message</Text>
                                            <TextInput
                                                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 h-40 outline-none transition-all"
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
                                            className="mt-2 w-full shadow-lg shadow-blue-500/30"
                                            icon={<Send size={18} color="white" />}
                                        />
                                    </View>
                                </View>
                            </MotiView>
                        </View>

                    </View>
                </Section>
            </Container>
        </ScreenLayout>
    );
}

import React, { Suspense } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Lazy load screens for performance optimization
const LandingScreen = React.lazy(() => import('../screens/LandingScreen'));
const ProjectsScreen = React.lazy(() => import('../screens/ProjectsScreen'));
const ExperienceScreen = React.lazy(() => import('../screens/ExperienceScreen'));
const SkillsScreen = React.lazy(() => import('../screens/SkillsScreen'));
const ContactScreen = React.lazy(() => import('../screens/ContactScreen'));

const Stack = createNativeStackNavigator();

const LoadingFallback = () => (
    <View className="flex-1 justify-center items-center bg-white dark:bg-slate-950">
        <ActivityIndicator size="large" className="text-blue-600" />
    </View>
);

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Suspense fallback={<LoadingFallback />}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                    }}
                    initialRouteName="Landing"
                >
                    <Stack.Screen name="Landing" component={LandingScreen} />
                    <Stack.Screen name="Projects" component={ProjectsScreen} />
                    <Stack.Screen name="Experience" component={ExperienceScreen} />
                    <Stack.Screen name="Skills" component={SkillsScreen} />
                    <Stack.Screen name="Contact" component={ContactScreen} />
                </Stack.Navigator>
            </Suspense>
        </NavigationContainer>
    );
}

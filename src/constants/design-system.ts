import { Easing } from 'react-native-reanimated';

export const Motion = {
    // "Physics-based" springs for tactile feel
    spring: {
        stiff: { type: 'spring', damping: 20, stiffness: 200 } as const,
        soft: { type: 'spring', damping: 15, stiffness: 100 } as const,
        bouncy: { type: 'spring', damping: 10, stiffness: 100 } as const,
    },

    // Timings for layout transitions
    timing: {
        fast: { type: 'timing', duration: 300, easing: Easing.out(Easing.cubic) } as const,
        medium: { type: 'timing', duration: 500, easing: Easing.out(Easing.cubic) } as const,
        slow: { type: 'timing', duration: 800, easing: Easing.out(Easing.cubic) } as const,
    },

    // Stagger delays
    stagger: (index: number, baseDelay = 100) => index * baseDelay,
};

export const Gradients = {
    hero: ['rgba(59, 130, 246, 0.2)', 'transparent'], // Subtle blue glow
    glass: ['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.01)'],
};

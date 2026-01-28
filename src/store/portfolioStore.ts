import { create } from 'zustand';
import { Project, Experience, SkillCategory } from '../types';

interface PortfolioState {
    projects: Project[];
    experiences: Experience[];
    skills: SkillCategory[];
    isLoading: boolean;
    fetchData: () => Promise<void>;
}

// Mock Data
const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive dashboard for managing online stores with real-time analytics.',
        techStack: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
        githubUrl: 'https://github.com/example/dashboard',
        liveUrl: 'https://demo-dashboard.example.com',
        image: require('../../assets/project-dashboard.png'),
    },
    {
        id: '2',
        title: 'AI Chat Application',
        description: 'Real-time chat application powered by LLMs with streaming responses.',
        techStack: ['React Native', 'Expo', 'Python', 'FastAPI'],
        githubUrl: 'https://github.com/example/chat-app',
        image: require('../../assets/project-chat.png'),
    },
];

const MOCK_EXPERIENCE: Experience[] = [
    {
        id: '1',
        role: 'Senior Frontend Engineer',
        company: 'Tech Corp',
        period: '2023 - Present',
        description: 'Leading the frontend team in migrating legacy apps to modern React architecture.',
    },
    {
        id: '2',
        role: 'Full Stack Developer',
        company: 'StartUp Inc',
        period: '2021 - 2023',
        description: 'Built and scaled the core product from MVP to 100k+ users.',
    },
];

const MOCK_SKILLS: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React / React Native', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'PostgreSQL', level: 80 },
            { name: 'Python', level: 75 },
        ],
    },
];

export const usePortfolioStore = create<PortfolioState>((set) => ({
    projects: [],
    experiences: [],
    skills: [],
    isLoading: false,
    fetchData: async () => {
        set({ isLoading: true });
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set({
            projects: MOCK_PROJECTS,
            experiences: MOCK_EXPERIENCE,
            skills: MOCK_SKILLS,
            isLoading: false,
        });
    },
}));

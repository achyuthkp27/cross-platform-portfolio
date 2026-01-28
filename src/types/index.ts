export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: any;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface SkillItem {
    name: string;
    level: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

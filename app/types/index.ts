export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Award {
  title: string;
  detail: string;
  year: string;
}

export interface Stat {
  value: string;
  label: string;
}

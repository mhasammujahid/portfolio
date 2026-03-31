import type {
  NavItem,
  SkillCategory,
  Experience,
  Project,
  Award,
} from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Muhammad Hassam Mujahid",
  title: "Software Engineer",
  subtitle: "MERN Stack · Cloud Architecture · Performance Engineering",
  tagline:
    "I build systems that scale — from zero to 50K+ daily users — with clean architecture, cloud-native integrations, and an obsession for performance.",
  email: "mhassammuj@gmail.com",
  githubUrl: "https://github.com/mhasammujahid",
  linkedinUrl: "https://linkedin.com/in/mhassammujahid",
  resumeUrl: "/Muhammad_Hassam_Mujahid_Resume_3.pdf",
};

export const ABOUT = {
  paragraphs: [
    "I'm a results-driven Software Engineer with 3+ years of hands-on experience building production-grade web applications on the MERN stack. My work spans the full engineering lifecycle — from designing resilient backend architectures to crafting performant, accessible frontend experiences.",
    "At Ilmversity, I've scaled a cloud-based Learning Management System to serve 50,000+ daily active users, modernized a legacy PHP codebase into the MERN ecosystem, and achieved a 60% boost in backend performance through Redis caching and advanced MongoDB optimization.",
    "I specialize in cloud-native integrations (AWS S3, EC2), real-time systems with Socket.io, automated CI/CD pipelines via GitHub Actions, and third-party API ecosystems including Zoom, Google Calendar, and Stripe. I bring both technical depth and a product mindset to every project I touch.",
  ],
  stats: [
    { value: "3+", label: "Years of Experience" },
    { value: "50K+", label: "Daily Active Users" },
    { value: "60%", label: "Performance Boost" },
    { value: "10+", label: "Legacy Systems Modernized" },
  ],
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🖥️",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Native",
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "REST APIs",
      "JWT Auth",
      "Python",
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Mongoose"],
  },
  {
    name: "DevOps & Cloud",
    icon: "☁️",
    skills: [
      "AWS S3",
      "AWS EC2",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "PM2",
    ],
  },
  {
    name: "APIs & Tools",
    icon: "🔧",
    skills: [
      "Stripe API",
      "Zoom API",
      "Google Calendar API",
      "Postman",
      "Git",
      "Sentry",
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Ilmversity",
    role: "Software Engineer",
    duration: "Mar 2023 – Present",
    location: "Lahore, Pakistan",
    achievements: [
      "Actively architected and scaled a cloud-based LAAMS (Learning Academic Administrative Management System), using the MERN stack (MySQL, Express.js, React.js, Node.js) for full-stack development.",
      "Optimized backend performance using Redis caching, efficient MySQL query design (JOINs, subqueries, GROUP BY), and indexing strategies, improving response times and system throughput.",
      "Built and maintained RESTful APIs with dynamic query generation, delivering context-aware responses tailored to user roles, application configurations, and client platforms (web and mobile), ensuring secure and efficient backend communication.",
      "Built responsive and dynamic frontend interfaces using React.js, Redux, and modern JavaScript (ES6+), ensuring efficient state management and improved user experience.",
      "Implemented secure authentication and authorization mechanisms using JWT, role-based access control, and multi-factor authentication, along with Socket.io for real-time, secure communication.",
      "Established CI/CD pipelines using GitHub Actions and deployed scalable services on AWS (EC2, S3), ensuring reliable and automated delivery workflows.",
      "Monitored production systems, debugged live issues, and resolved server-side exceptions to maintain system stability for active users.",
      "Collaborated within an Agile development environment to design, develop, and deliver high-impact features.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "LetsConnect",
    description:
      "A cross-platform scheduling platform that streamlines meeting management across time zones. Users can create shareable booking pages, sync availability through Google Calendar, and auto-generate Zoom meetings — all with intelligent global timezone resolution.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Calendar API",
      "Zoom API",
      "Express.js",
    ],
    duration: "Feb 2025 – Present",
    githubUrl: "https://github.com/mhasammujahid",
    websiteUrl: "https://lets-connect-ten.vercel.app/",
    highlights: [
      "Google Calendar API integration for real-time availability sync",
      "Automated Zoom meeting generation on booking confirmation",
      "Complex global timezone management engine",
      "Cross-platform responsive design",
    ],
  },
  {
    title: "Logistics SaaS Platform",
    description:
      "An enterprise-grade logistics management platform featuring live package tracking, intelligent route optimization, and seamless ERP system integration. Built to handle high-throughput order processing with real-time geolocation updates and automated workflows.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Real-time APIs",
      "Geolocation",
    ],
    duration: "Sep 2022 – May 2023",
    githubUrl: "https://github.com/mhasammujahid",

    websiteUrl: "",
    highlights: [
      "Real-time package tracking with geolocation APIs",
      "Route optimization algorithms for delivery efficiency",
      "ERP system integration for automated order processing",
      "Live status updates with webhook architecture",
    ],
  },
  {
    title: "CodeLens — AI Code Review Assistant",
    description:
      "A full-stack MERN code review platform where developers paste source code and receive a structured quality report instantly. The backend automatically runs ESLint for JavaScript/TypeScript or Flake8 for Python — no manual linting required. AI mode sends code to Claude for deeper semantic analysis. Reviews are persisted in MySQL and browsable via a history dashboard.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "ESLint",
      "Flake8",
      "Claude AI",
      "Zustand",
      "Docker",
      "Tailwind CSS",
    ],
    duration: "2026",
    githubUrl: "https://github.com/mhasammujahid",
    websiteUrl: "https://code-lens-five.vercel.app/",
    highlights: [
      "Auto-runs ESLint or Flake8 on the backend — no client-side tooling needed",
      "Dual review modes: rule-based Linter and semantic Claude AI analysis",
      "Structured JSON report with severity levels, score, and actionable suggestions",
      "Paginated review history dashboard with per-language stats",
    ],
  },
  {
    title: "Shortify — URL Shortener",
    description:
      "A production-ready URL shortener where developers paste a long URL and instantly get a shareable short link. Supports custom slugs, tracks click counts per link, and persists all data in a serverless PostgreSQL database via Neon. The backend runs Prisma migrations automatically on startup. The entire app is containerized with a multi-stage Docker build for a minimal, deploy-anywhere image.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    duration: "2026",
    githubUrl: "https://github.com/mhasammujahid",
    websiteUrl: "https://shortify-pi-fawn.vercel.app/",
    highlights: [
      "Custom slug support with conflict detection and a 409 error response",
      "Click tracking per short link with a paginated history dashboard",
      "Multi-stage Docker build with alpine base and Next.js standalone output for minimal image size",
      "Auto-runs Prisma migrations on container startup — zero manual DB setup",
    ],
  },
];

export const AWARDS: Award[] = [
  {
    title: "Cyber Security Hackathon",
    detail: "2nd Position — Runner Up",
    year: "2022",
  },
  {
    title: "Google Code Rush",
    detail: "Active Participant",
    year: "2022",
  },
];

export const EDUCATION = {
  institution: "Information Technology University",
  degree: "Bachelor of Science in Computer Engineering",
  location: "Lahore, Pakistan",
  duration: "Dec 2019 – May 2023",
};

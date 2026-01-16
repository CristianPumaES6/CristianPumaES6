import {
    SiReact, SiAngular, SiVuedotjs, SiNextdotjs,
    SiNodedotjs, SiPython, SiDotnet,
    SiAmazonwebservices, SiDocker, SiKubernetes,
    SiPostgresql, SiMongodb, SiRedis,
    SiTensorflow, SiOpenai, SiFlutter,
    SiNestjs, SiExpress, SiSequelize,
    SiOracle, SiMysql, SiAmazondynamodb,
    SiNginx, SiLinux, SiDigitalocean, SiGit, SiGithubactions,
    SiTailwindcss, SiFigma, SiHtml5, SiCss3, SiTypescript, SiGo,
    SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects
} from "react-icons/si";
import {
    Database, Server, Cloud, Code, Cpu, Globe, Boxes, LayoutTemplate, Workflow, FileCode, Bot, Sparkles, Music, Video, Search, Mic2, AppWindow
} from "lucide-react";

export const TechIcon = ({ name, className = "w-5 h-5" }: { name: string, className?: string }) => {
    // Normalize name for case-insensitive matching if needed, though exact compliance with constants is better
    const iconMap: Record<string, any> = {
        // Backend
        "Node.js": SiNodedotjs,
        "NestJS": SiNestjs,
        "Express": SiExpress,
        "Sequelize": SiSequelize,
        "OutSystems": Globe, // Fallback
        "REST/SOAP": Globe, // Fallback
        "Microservices": Boxes, // Fallback
        "Java": FileCode, // Fallback
        "C#": FileCode, // Fallback
        "C# / .NET": SiDotnet,
        "Python": SiPython,
        "Go": SiGo,

        // DB
        "PostgreSQL": SiPostgresql,
        "SQL Server": Database, // Fallback
        "Oracle": SiOracle,
        "MongoDB": SiMongodb,
        "MySQL": SiMysql,
        "Redis": SiRedis,
        "DynamoDB": SiAmazondynamodb,

        // DevOps
        "Docker": SiDocker,
        "Nginx": SiNginx,
        "Linux": SiLinux,
        "PM2": Server, // Fallback
        "DigitalOcean": SiDigitalocean,
        "Git": SiGit,
        "AWS": SiAmazonwebservices,
        "Azure": Cloud, // Fallback
        "Kubernetes": SiKubernetes,
        "CI/CD": SiGithubactions,

        // Frontend
        "Next.js": SiNextdotjs,
        "React": SiReact,
        "Tailwind": SiTailwindcss,
        "Figma (Concept)": SiFigma,
        "Angular": SiAngular,
        "Vue.js": SiVuedotjs,
        "HTML/CSS": SiHtml5,
        "TypeScript": SiTypescript,

        // Mobile / AI / Others
        "TensorFlow": SiTensorflow,
        "OpenAI": SiOpenai,
        "Flutter": SiFlutter,
        "React Native": SiReact,

        // New AI & Design
        // New AI & Design
        "Antigravity": Sparkles,
        "Copilot": Bot,
        "Gemini": Sparkles,
        "ChatGPT": SiOpenai,
        "Suno": Music,
        "DeepSeek": Search,
        "Grama App": AppWindow,
        "StudioIA": Mic2,
        "Photoshop": SiAdobephotoshop,
        "Illustrator": SiAdobeillustrator,
        "Premiere": SiAdobepremierepro,
        "CapCut": Video,
        "Figma": SiFigma,
        "Studio FruityLoop": Music,
        "After Effects": SiAdobeaftereffects
    };

    const IconComponent = iconMap[name] || Code; // Default to Code icon

    if (!IconComponent) return null;

    return <IconComponent className={className} />;
};

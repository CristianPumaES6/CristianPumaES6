import {
    SiReact, SiAngular, SiVuedotjs, SiNextdotjs,
    SiNodedotjs, SiPython, SiDotnet,
    SiAmazonwebservices, SiDocker, SiKubernetes,
    SiPostgresql, SiMongodb, SiRedis,
    SiTensorflow, SiOpenai, SiFlutter,
    SiNestjs, SiExpress, SiSequelize,
    SiOracle, SiMysql, SiAmazondynamodb,
    SiNginx, SiLinux, SiDigitalocean, SiGit, SiGithubactions,
    SiTailwindcss, SiFigma, SiHtml5, SiCss3, SiTypescript, SiGo
} from "react-icons/si";
import {
    Database, Server, Cloud, Code, Cpu, Globe, Boxes, LayoutTemplate, Workflow, FileCode
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
        "Antigravity": Boxes,
        "Copilot": Boxes,
        "Gemini": Globe,
        "ChatGPT": SiOpenai,
        "Suno": Globe,
        "DeepSeek": Globe,
        "Grama App": Globe,
        "StudioIA": Globe,
        "Photoshop": Globe,
        "Illustrator": Globe,
        "Premiere": Globe,
        "CapCut": Globe,
        "Figma": SiFigma,
        "Studio FruityLoop": Globe,
        "After Effects": Globe
    };

    const IconComponent = iconMap[name] || Code; // Default to Code icon

    if (!IconComponent) return null;

    return <IconComponent className={className} />;
};

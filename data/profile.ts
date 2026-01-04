import { Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";

export const PROFILE = {
    personal: {
        name: "Cristian Angel Puma Villalva",
        role: "Desarrollador OutSystems & Full Stack",
        location: "Lima, Perú",
        summary:
            "Desarrollador con más de 7 años de experiencia en arquitectura, integraciones API/REST, optimización de bases de datos y desarrollo web/móvil. Experto en soluciones de alto impacto para logística marítima, telecomunicaciones y salud.",
        email: "cristian.puma.es6@gmail.com",
        phone: "+51 976 873 362",
        ranking: "#339",
        goal: "Aspirante a OutSystems MVP",
    },
    socials: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/cpv01/",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            url: "https://github.com/cristianPumaEs6",
            icon: Github,
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@cristianPumaEs6",
            icon: Youtube,
        },
        {
            name: "Email",
            url: "mailto:cristian.puma.es6@gmail.com",
            icon: Mail,
        },
    ],
    experience: [
        {
            role: "Outsystems Developer / Scrum Master",
            company: "Consultor Independiente",
            period: "2020 - Actualidad",
            responsibilities: [
                "Desarrollo de soluciones escalables web/móviles con OutSystems.",
                "Liderazgo técnico como Scrum Master (backlog y ceremonias ágiles).",
                "Integración de sistemas corporativos mediante APIs REST/SOAP.",
            ],
            projects: [
                "Plataforma de control de combustible (Transgas Shipping Lines).",
                "Ecosistema de Apps para POS y Delivery.",
                "ERP centralizado de operaciones.",
            ],
        },
        {
            role: "Information Manager",
            company: "TRANSGAS SHIPPING LINES",
            period: "2020 - Julio 2025",
            achievements: [
                "Análisis de mantenimiento y creación de KPIs avanzados en Power BI.",
                "Migración de la plataforma de control de consumo de combustible.",
                "Instalación de redes WLAN en buques y gestión de infraestructura IT.",
                "Depuración de +100k códigos IMPA para migración a OutSystems.",
            ],
        },
        {
            role: "OutSystems Developer",
            company: "EVERIS",
            period: "Octubre 2019 - Julio 2020",
            projects: [
                "CLARO: Mantenimiento de apps SIACPOST y SIACU (datos masivos).",
                "LA POSITIVA: Módulo médico EMO para Salud Ocupacional.",
            ],
        },
        {
            role: "Full Stack Development Executive",
            company: "INCONCERT",
            period: "2019",
            projects: ["DaHoox: App para landing pages y gestión de leads."],
        },
    ],
    projects: [
        {
            title: "Plataforma de Control de Combustible",
            company: "Transgas Shipping Lines",
            context: "Gestión ineficiente de consumo de combustible en flota marítima.",
            solution:
                "Migración completa a plataforma digital con análisis en tiempo real.",
            tech: ["OutSystems", "Power BI", "SQL Server"],
            result: "Optimización operativa y reducción de pérdidas.",
            highlight: true,
        },
        {
            title: "ERP Centralizado de Operaciones",
            company: "Consultor",
            context: "Procesos operativos desconectados y manuales.",
            solution: "Sistema integral de gestión de recursos y procesos.",
            tech: ["OutSystems", "API REST", "SQL"],
            result: "Unificación de la información operativa.",
            highlight: true,
        },
        {
            title: "Ecosistema POS & Delivery",
            company: "Consultor",
            context: "Necesidad de integrar ventas físicas y pedidos online.",
            solution: "Suite de aplicaciones móviles y web conectadas.",
            tech: ["OutSystems", "Mobile", "REST"],
            result: "Gestión fluida de multicanales de venta.",
            highlight: true,
        },
        {
            title: "SIACPOST / SIACU",
            company: "Claro (Everis)",
            context: "Sistemas críticos con alto volumen de datos transaccionales.",
            solution: "Mantenimiento y optimización de rendimiento.",
            tech: ["Oracle", "Java", "OutSystems"],
            result: "Estabilidad en sistemas de alta demanda.",
            highlight: true,
        },
    ],
    stack: [
        {
            category: "Backend & Arquitectura",
            items: [
                "Node.js",
                "NestJS",
                "Express",
                "Sequelize",
                "OutSystems",
                "REST/SOAP",
            ],
        },
        {
            category: "Bases de Datos",
            items: [
                "PostgreSQL",
                "SQL Server",
                "Oracle",
                "MongoDB",
                "MySQL",
            ],
        },
        {
            category: "DevOps & Infra",
            items: ["Docker", "Nginx", "Linux", "PM2", "DigitalOcean", "Git"],
        },
        {
            category: "Frontend & Diseño",
            items: ["Next.js", "React", "Tailwind", "Figma (Concept)"],
        },
    ],
    education: [
        {
            institution: "UMA - Universidad María Auxiliadora",
            degree: "Ingeniería de Inteligencia Artificial",
            period: "2024 - Actualidad",
        },
        {
            institution: "INSTITUTO SUPERIOR SISE",
            degree: "Técnico en Software y Sistemas",
            period: "2013 - 2017",
        },
    ],
};

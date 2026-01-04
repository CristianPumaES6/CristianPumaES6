# Información General del Proyecto

## 1. Identificación del Proyecto
- **Nombre Técnico**: `web` (Personal Portfolio)
- **Propietario**: Cristian Angel Puma Villalva
- **Descripción**: Sitio web personal tipo portafolio con estética "Cyberpunk Professional". Diseñado para posicionar al propietario como un Arquitecto de Software Senior y Consultor Experto.
- **Versión**: 0.1.0

## 2. Ubicación y Acceso
- **Ruta Local (Path)**: `c:\Users\InLowCode\Documents\CristianPumaES6`
- **URL Desarrollo**: `http://localhost:3000`
- **URL Red Local**: `http://192.168.1.7:3000`

## 3. Stack Tecnológico
### Core
- **Framework**: Next.js 16.1.1 (App Router)
- **Librería UI**: React 19
- **Lenguaje**: TypeScript

### Estilos y Diseño
- **Estilos**: Tailwind CSS 4
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Fuentes**: Outfit (Sans) + JetBrains Mono (Code/Mono)

## 4. Estructura de Carpetas Principal
```text
/
├── app/                  # Rutas y Layouts (App Router)
│   ├── globals.css       # Estilos globales y variables de tema
│   ├── layout.tsx        # Layout principal (fuentes, metadatos)
│   └── page.tsx          # Página de inicio
├── components/           # Componentes de React
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Secciones de la página (Hero, About, etc.)
│   └── ui/               # Componentes base (Botones, Cards)
├── data/                 # Datos estáticos (Contenido del sitio)
│   └── profile.ts        # Fuente de verdad de toda la info personal
└── public/               # Assets estáticos (imágenes, iconos)
```

## 5. Scripts de Ejecución
- **Desarrollo**: `npm run dev` (Inicia servidor local con Turbopack)
- **Producción**: `npm run build` (Construye la aplicación)
- **Inicio Prod**: `npm run start` (Inicia la app construida)
- **Linting**: `npm run lint`

## 6. Fuente de Datos (JSON / TypeScript)
El contenido del sitio web es dinámico y se alimenta del archivo `data/profile.ts`.
A continuación, se detalla la estructura y datos actuales:

```typescript
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

## 7. Portafolio de Proyectos Destacados (Detalle)

A continuación se describen los proyectos principales incluidos en el perfil profesional:

### 1. Plataforma de Control de Combustible (Transgas Shipping Lines)
- **Contexto**: La gestión del consumo de combustible en la flota marítima era manual e ineficiente, generando pérdidas operativas.
- **Solución**: Se desarrolló una plataforma digital completa para la captura, monitoreo y análisis en tiempo real de los datos de consumo.
- **Tecnologías**: OutSystems, Power BI (para dashboards analíticos), SQL Server.
- **Impacto**: Optimización significativa de los costos operativos y reducción de pérdidas por ineficiencias o desvíos.

### 2. ERP Centralizado de Operaciones
- **Contexto**: La empresa operaba con procesos desconectados y manuales, dificultando la visión global del negocio.
- **Solución**: Implementación de un Sistema de Planificación de Recursos Empresariales (ERP) a medida que unificó la gestión de recursos y procesos operativos.
- **Tecnologías**: OutSystems, Integraciones API REST, Base de datos SQL.
- **Impacto**: Unificación total de la información operativa, permitiendo la toma de decisiones basada en datos centralizados.

### 3. Ecosistema POS & Delivery
- **Contexto**: Necesidad de unificar las ventas físicas en punto de venta (POS) con los pedidos provenientes de canales digitales (Delivery).
- **Solución**: Creación de una suite de aplicaciones interconectadas (Móvil y Web) que gestionan el flujo completo de ventas multicanal.
- **Tecnologías**: OutSystems Mobile, Servicios REST.
- **Impacto**: Gestión fluida y sincronizada de múltiples canales de venta, mejorando la experiencia del cliente y la eficiencia operativa.

### 4. SIACPOST / SIACU (Claro / Everis)
- **Contexto**: Sistemas críticos de gestión de clientes y servicios con un volumen masivo de datos transaccionales y alta concurrencia.
- **Solución**: Mantenimiento evolutivo, refactorización y optimización del rendimiento de las aplicaciones existentes.
- **Tecnologías**: Oracle (Database), Java (Backend), OutSystems (Frontend/Integration).
- **Impacto**: Se garantizó la estabilidad y disponibilidad de sistemas de alta demanda crítica para la operación de la telecomunicadora.


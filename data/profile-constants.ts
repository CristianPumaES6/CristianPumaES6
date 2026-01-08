import { Briefcase, Link2, ShieldAlert, Database, Smartphone, Users, Building, Scale, Gavel, FileText, Globe, Building2, HandCoins, FolderOpen, FileSignature, UserCheck, MapPinned } from 'lucide-react'

export const TECH_SPECIALTIES = [
    { id: '1', title: 'Arquitecturas Escalables', description: 'Diseño de sistemas distribuidos capaces de manejar alta concurrencia.', icon: Briefcase },
    { id: '2', title: 'Integraciones Complejas', description: 'Conexión de ecosistemas mediante APIs REST/SOAP.', icon: Link2 },
    { id: '3', title: 'Sistemas Críticos', description: 'Software para entornos donde el fallo no es una opción.', icon: ShieldAlert },
    { id: '4', title: 'Optimización de Datos', description: 'Modelado y tuning de bases de datos masivas.', icon: Database },
    { id: '5', title: 'Mobile & Offline', description: 'Apps que funcionan sin conexión en entornos remotos.', icon: Smartphone },
    { id: '6', title: 'Liderazgo Técnico', description: 'Gestión de equipos bajo metodologías ágiles (Scrum).', icon: Users },
]

export const LEGAL_SPECIALTIES = [
    // --- BLOQUE ORIGINAL: ENFOQUE ESTRATÉGICO ---
    {
        id: 'l1',
        title: 'Derecho Corporativo',
        description: 'Asesoría en estructuración societaria, fusiones y adquisiciones orientada a blindar el crecimiento y la sostenibilidad empresarial.',
        icon: Building
    },
    {
        id: 'l2',
        title: 'Litigio y Resolución',
        description: 'Diseño de estrategias de defensa en tribunales y arbitrajes, priorizando la resolución eficiente de conflictos y la protección de intereses.',
        icon: Scale
    },
    {
        id: 'l3',
        title: 'Propiedad Intelectual',
        description: 'Gestión y salvaguarda de activos intangibles, incluyendo registros de marcas, patentes y cumplimiento de derechos de autor.',
        icon: ShieldAlert
    },
    {
        id: 'l4',
        title: 'Derecho Penal',
        description: 'Análisis y defensa estratégica en delitos económicos y procesos complejos, con enfoque en la prevención de responsabilidad penal corporativa.',
        icon: Gavel
    },
    {
        id: 'l5',
        title: 'Compliance & Riesgos',
        description: 'Implementación de sistemas de gestión de riesgos regulatorios para asegurar la integridad institucional y el cumplimiento de normativas vigentes.',
        icon: FileText
    },
    {
        id: 'l6',
        title: 'Derecho Digital',
        description: 'Regulación de entornos tecnológicos, protección de datos personales y asesoría legal en la transformación digital de las organizaciones.',
        icon: Globe
    },

    // --- BLOQUE DE ALTO RENDIMIENTO OPERATIVO ---
    {
        id: 'l7',
        title: 'Derecho Administrativo y Gestión Pública',
        description: 'Especialista en tramitología ante entidades estatales y optimización de registros civiles, basada en experiencia directa en RENIEC y SUCAMEC.',
        icon: Building2
    },
    {
        id: 'l8',
        title: 'Recuperación de Activos y Cobranza',
        description: 'Ejecución de estrategias de negociación persuasiva y redacción de requerimientos de pago para maximizar la recuperación de carteras morosas.',
        icon: HandCoins
    },
    {
        id: 'l9',
        title: 'Derecho del Consumidor',
        description: 'Gestión proactiva de contratos de servicios y resolución de conflictos en entornos de alto volumen transaccional y atención masiva.',
        icon: Users
    },
    {
        id: 'l10',
        title: 'Derecho Procesal y Gestión Documental',
        description: 'Dominio de foliación técnica, organización de expedientes judiciales y soporte crítico en audiencias virtuales para el Poder Judicial.',
        icon: FolderOpen
    },
    {
        id: 'l11',
        title: 'Derecho Notarial y Registral',
        description: 'Aseguramiento de la fe pública mediante la formalización de documentos y validación técnica de identidad ante registros públicos.',
        icon: FileSignature
    },

    // --- BLOQUE DE LIDERAZGO Y OPERACIONES ---
    {
        id: 'l12',
        title: 'Gestión de Recursos Humanos',
        description: 'Administración estratégica de talento, elaboración de contratos laborales y supervisión del cumplimiento de normativas sociolaborales.',
        icon: UserCheck
    },
    {
        id: 'l13',
        title: 'Gestor de Operaciones y Experiencia',
        description: 'Liderazgo en logística de proyectos, control financiero de pagos y coordinación de experiencias de usuario en entornos dinámicos.',
        icon: MapPinned
    },
];
/*
datos anteriores :
export const LEGAL_SPECIALTIES = [
    // --- Bloque Original (Phase.03) ---
    { id: 'l1', title: 'Derecho Corporativo', description: 'Estructuración societaria, fusiones y adquisiciones.', icon: Building },
    { id: 'l2', title: 'Litigio y Resolución', description: 'Defensa estratégica en tribunales y arbitrajes.', icon: Scale },
    { id: 'l3', title: 'Propiedad Intelectual', description: 'Protección de marcas, patentes y derechos de autor.', icon: ShieldAlert },
    { id: 'l4', title: 'Derecho Penal', description: 'Defensa y acusación en delitos económicos y complejos.', icon: Gavel },
    { id: 'l5', title: 'Compliance & Riesgos', description: 'Gestión de riesgos regulatorios y normativos.', icon: FileText },
    { id: 'l6', title: 'Derecho Digital', description: 'Regulación de nuevas tecnologías y protección de datos.', icon: Globe },

    // --- Nuevas Especializaciones (Mode.Expansion) ---
    {
        id: 'l7',
        title: 'Derecho Administrativo y Gestión Pública',
        description: 'Tramitología especializada ante entidades estatales y optimización de registros.',
        icon: Building2
    },
    {
        id: 'l8',
        title: 'Recuperación de Activos y Cobranza',
        description: 'Estrategias de negociación persuasiva y redacción de requerimientos de pago.',
        icon: HandCoins
    },
    {
        id: 'l9',
        title: 'Derecho del Consumidor',
        description: 'Gestión de contratos de servicios y resolución de conflictos masivos.',
        icon: Users
    },
    {
        id: 'l10',
        title: 'Derecho Procesal y Gestión Documental',
        description: 'Foliación técnica, organización de expedientes y soporte en audiencias virtuales.',
        icon: FolderOpen
    },
    {
        id: 'l11',
        title: 'Derecho Notarial y Registral',
        description: 'Formalización de documentos públicos, fe pública y validación de identidad.',
        icon: FileSignature
    },
];
*/

export const TECH_STACK_CATEGORIES = {
    "Backend & Arquitectura": [
        "Node.js", "NestJS", "Express", "Sequelize", "OutSystems", "REST/SOAP", "Microservices", "Java", "C#", "Python", "Go"
    ],
    "Bases de Datos": [
        "PostgreSQL", "SQL Server", "Oracle", "MongoDB", "MySQL", "Redis", "DynamoDB"
    ],
    "DevOps & Infra": [
        "Docker", "Nginx", "Linux", "PM2", "DigitalOcean", "Git", "AWS", "Azure", "Kubernetes", "CI/CD"
    ],
    "Frontend & Diseño": [
        "Next.js", "React", "Tailwind", "Figma (Concept)", "Angular", "Vue.js", "HTML/CSS", "TypeScript"
    ]
}

export const LEGAL_STACK_CATEGORIES = {
    "Áreas de Práctica": [
        "Litigio Civil y Comercial",
        "Derecho Penal Económico",
        "Derecho Laboral y Seguridad Social",
        "Derecho Administrativo y Gestión Pública",
        "Derecho Tributario y Fiscalidad",
        "Derecho de Familia y Sucesiones",
        "Derecho Internacional Público y Privado",
        "Derecho Ambiental y Recursos Naturales",
        "Contrataciones con el Estado",
        "Derecho Bancario y Financiero",
        "Derecho Inmobiliario",
        "Protección de Datos Personales",
        "Compliance y Prevención de Lavado de Activos",
        "Derecho de la Competencia (Indecopi)",
        "Derecho de Minería y Energía"
    ],
    "Herramientas LegalTech": [
        "ReFirma (Firma Digital Certificada)",
        "SINOE / Casilla Electrónica",
        "MPV-PJ (Mesa de Partes Virtual)",
        "CEJ / Expediente Judicial Electrónico",
        "SPIJ (Minería Normativa y Legal)",
        "SEL (SUCAMEC en Línea)",
        "SID-RENIEC / SUNARP (SIRI)",
        "VUR / SUNARP (Vigencia de Poderes)",
        "SNE-INDECOPI (Propiedad Intelectual)",
        "SEACE (Contrataciones del Estado)",
        "CaseTracking (Gestión de Procesos Judiciales)",
        "TimeBillingX (Control de Horas Facturables)",
        "Adobe Acrobat Pro (Foliación Digital y OCR)",
        "Jurisprudencia Sistematizada (LP / Legis)",
        "Google Meet (Audiencias Virtuales)",
        "Microsoft Excel Advanced (Control de Foliación)"
    ],
    "Habilidades Profesionales": [

        "Oratoria Forense",
        "Negociación y Resolución de Conflictos",
        "Redacción Jurídica y Administrativa",
        "Investigación Legal Avanzada",
        "Gestión de Crisis y Contingencias",
        "Liderazgo de Equipos Multidisciplinarios",
        "Control Procesal y de Plazos",
        "Gestión de Cobranza Extrajudicial",
        "Foliación y Organización de Expedientes",
        "Asistencia en Audiencias Virtuales",
        "Logística de Operaciones y Experiencia",
        "Compliance y Gestión de Riesgos"
    ],
    "Idiomas & Jurisdicción": [
        "Inglés Jurídico", "Francés",
        "Derecho Civil (Sistema Románico-Germánico)",
        "Derecho Común (Common Law Foundations)",
        "Normativa de la Comunidad Andina (CAN)",
        "Sistema Interamericano de Derechos Humanos",
        "Jurisdicción Administrativa (SUCAMEC/RENIEC)",
        "Derecho Comparado e Internacional"
    ]
}

export const TECH_OPTIONS = [
    "React", "Angular", "Vue.js", "Next.js",
    "Node.js", "Python", "Java", "C# / .NET",
    "AWS", "Azure", "Docker", "Kubernetes",
    "SQL Server", "PostgreSQL", "MongoDB", "Redis",
    "TensorFlow", "OpenAI", "Flutter", "React Native"
]

export const LEGAL_OPTIONS = [
    "Litigio", "M&A", "Due Diligence", "Auditoría Legal",
    "Contratos", "Compliance", "Protección de Datos",
    "Arbitraje", "Propiedad Intelectual", "Inmobiliario",
    "Banca y Finanzas", "Seguros", "Energía", "Minería",
    "Derecho Deportivo", "Startups", "Venture Capital"
]

export const STATS_CONFIG = {
    Tech: [
        { label: 'Ranking Global', name: 'ranking', placeholder: '#339' },
        { label: 'Experiencia', name: 'experience', placeholder: '+7 Años' },
        { label: 'Nivel Seniority', name: 'level', placeholder: 'Senior' },
        { label: 'Tech Stack', name: 'stack', placeholder: 'Full Stack' },
    ],
    Legal: [
        { label: 'Ciclo Académico', name: 'ciclo', placeholder: 'Noveno' },
        { label: 'Mérito', name: 'merito', placeholder: 'Tercio Superior' },
        { label: 'Disponibilidad', name: 'disponibilidad', placeholder: 'Inmediata' },
    ]
}

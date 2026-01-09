(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClientProfile",
    ()=>createClientProfile,
    "getClientProfileById",
    ()=>getClientProfileById,
    "getClientShowcaseProfiles",
    ()=>getClientShowcaseProfiles,
    "updateClientProfile",
    ()=>updateClientProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * This service replaces the direct Prisma calls in lib/actions.ts.
 * Since GitHub Pages is a static host, we must fetch data from 
 * an external backend API at runtime.
 */ const API_BASE = ("TURBOPACK compile-time value", "https://procard.outsystems.club") || 'http://localhost:3000';
async function getClientShowcaseProfiles() {
    try {
        const res = await fetch(`${API_BASE}/api/profiles`);
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
    } catch (error) {
        console.error("Fetch profiles error:", error);
        return [];
    }
}
async function getClientProfileById(id) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles/${id}`);
        if (!res.ok) throw new Error("Network response was ok");
        return await res.json();
    } catch (error) {
        console.error("Fetch profile error:", error);
        return null;
    }
}
async function createClientProfile(formData) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles`, {
            method: 'POST',
            body: formData
        });
        if (!res.ok) throw new Error("Post failed");
        return await res.json();
    } catch (error) {
        console.error("Create profile error:", error);
        return {
            success: false
        };
    }
}
async function updateClientProfile(id, formData) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles/${id}`, {
            method: 'PUT',
            body: formData
        });
        if (!res.ok) throw new Error("Update failed");
        return await res.json();
    } catch (error) {
        console.error("Update profile error:", error);
        return {
            success: false
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/profile-constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEGAL_OPTIONS",
    ()=>LEGAL_OPTIONS,
    "LEGAL_SPECIALTIES",
    ()=>LEGAL_SPECIALTIES,
    "LEGAL_STACK_CATEGORIES",
    ()=>LEGAL_STACK_CATEGORIES,
    "STATS_CONFIG",
    ()=>STATS_CONFIG,
    "TECH_OPTIONS",
    ()=>TECH_OPTIONS,
    "TECH_SPECIALTIES",
    ()=>TECH_SPECIALTIES,
    "TECH_STACK_CATEGORIES",
    ()=>TECH_STACK_CATEGORIES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-client] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-coins.js [app-client] (ecmascript) <export default as HandCoins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen-line.js [app-client] (ecmascript) <export default as FileSignature>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
;
const TECH_SPECIALTIES = [
    {
        id: '1',
        title: 'Arquitecturas Escalables',
        description: 'Diseño de sistemas distribuidos capaces de manejar alta concurrencia.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        id: '2',
        title: 'Integraciones Complejas',
        description: 'Conexión de ecosistemas mediante APIs REST/SOAP.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"]
    },
    {
        id: '3',
        title: 'Sistemas Críticos',
        description: 'Software para entornos donde el fallo no es una opción.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
    },
    {
        id: '4',
        title: 'Optimización de Datos',
        description: 'Modelado y tuning de bases de datos masivas.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"]
    },
    {
        id: '5',
        title: 'Mobile & Offline',
        description: 'Apps que funcionan sin conexión en entornos remotos.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    {
        id: '6',
        title: 'Liderazgo Técnico',
        description: 'Gestión de equipos bajo metodologías ágiles (Scrum).',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
const LEGAL_SPECIALTIES = [
    // --- BLOQUE ORIGINAL: ENFOQUE ESTRATÉGICO ---
    {
        id: 'l1',
        title: 'Derecho Corporativo',
        description: 'Asesoría en estructuración societaria, fusiones y adquisiciones orientada a blindar el crecimiento y la sostenibilidad empresarial.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
    },
    {
        id: 'l2',
        title: 'Litigio y Resolución',
        description: 'Diseño de estrategias de defensa en tribunales y arbitrajes, priorizando la resolución eficiente de conflictos y la protección de intereses.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
    },
    {
        id: 'l3',
        title: 'Propiedad Intelectual',
        description: 'Gestión y salvaguarda de activos intangibles, incluyendo registros de marcas, patentes y cumplimiento de derechos de autor.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
    },
    {
        id: 'l4',
        title: 'Derecho Penal',
        description: 'Análisis y defensa estratégica en delitos económicos y procesos complejos, con enfoque en la prevención de responsabilidad penal corporativa.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"]
    },
    {
        id: 'l5',
        title: 'Compliance & Riesgos',
        description: 'Implementación de sistemas de gestión de riesgos regulatorios para asegurar la integridad institucional y el cumplimiento de normativas vigentes.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        id: 'l6',
        title: 'Derecho Digital',
        description: 'Regulación de entornos tecnológicos, protección de datos personales y asesoría legal en la transformación digital de las organizaciones.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    // --- BLOQUE DE ALTO RENDIMIENTO OPERATIVO ---
    {
        id: 'l7',
        title: 'Derecho Administrativo y Gestión Pública',
        description: 'Especialista en tramitología ante entidades estatales y optimización de registros civiles, basada en experiencia directa en RENIEC y SUCAMEC.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
    },
    {
        id: 'l8',
        title: 'Recuperación de Activos y Cobranza',
        description: 'Ejecución de estrategias de negociación persuasiva y redacción de requerimientos de pago para maximizar la recuperación de carteras morosas.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__["HandCoins"]
    },
    {
        id: 'l9',
        title: 'Derecho del Consumidor',
        description: 'Gestión proactiva de contratos de servicios y resolución de conflictos en entornos de alto volumen transaccional y atención masiva.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: 'l10',
        title: 'Derecho Procesal y Gestión Documental',
        description: 'Dominio de foliación técnica, organización de expedientes judiciales y soporte crítico en audiencias virtuales para el Poder Judicial.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"]
    },
    {
        id: 'l11',
        title: 'Derecho Notarial y Registral',
        description: 'Aseguramiento de la fe pública mediante la formalización de documentos y validación técnica de identidad ante registros públicos.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSignature$3e$__["FileSignature"]
    },
    // --- BLOQUE DE LIDERAZGO Y OPERACIONES ---
    {
        id: 'l12',
        title: 'Gestión de Recursos Humanos',
        description: 'Administración estratégica de talento, elaboración de contratos laborales y supervisión del cumplimiento de normativas sociolaborales.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
    },
    {
        id: 'l13',
        title: 'Gestor de Operaciones y Experiencia',
        description: 'Liderazgo en logística de proyectos, control financiero de pagos y coordinación de experiencias de usuario en entornos dinámicos.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"]
    }
];
const TECH_STACK_CATEGORIES = {
    "Backend & Arquitectura": [
        "Node.js",
        "NestJS",
        "Express",
        "Sequelize",
        "OutSystems",
        "REST/SOAP",
        "Microservices",
        "Java",
        "C#",
        "Python",
        "Go"
    ],
    "Bases de Datos": [
        "PostgreSQL",
        "SQL Server",
        "Oracle",
        "MongoDB",
        "MySQL",
        "Redis",
        "DynamoDB"
    ],
    "DevOps & Infra": [
        "Docker",
        "Nginx",
        "Linux",
        "PM2",
        "DigitalOcean",
        "Git",
        "AWS",
        "Azure",
        "Kubernetes",
        "CI/CD"
    ],
    "Frontend & Diseño": [
        "Next.js",
        "React",
        "Tailwind",
        "Figma (Concept)",
        "Angular",
        "Vue.js",
        "HTML/CSS",
        "TypeScript"
    ]
};
const LEGAL_STACK_CATEGORIES = {
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
        "Inglés Jurídico",
        "Francés",
        "Derecho Civil (Sistema Románico-Germánico)",
        "Derecho Común (Common Law Foundations)",
        "Normativa de la Comunidad Andina (CAN)",
        "Sistema Interamericano de Derechos Humanos",
        "Jurisdicción Administrativa (SUCAMEC/RENIEC)",
        "Derecho Comparado e Internacional"
    ]
};
const TECH_OPTIONS = [
    "React",
    "Angular",
    "Vue.js",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "C# / .NET",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "SQL Server",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "TensorFlow",
    "OpenAI",
    "Flutter",
    "React Native"
];
const LEGAL_OPTIONS = [
    "Litigio",
    "M&A",
    "Due Diligence",
    "Auditoría Legal",
    "Contratos",
    "Compliance",
    "Protección de Datos",
    "Arbitraje",
    "Propiedad Intelectual",
    "Inmobiliario",
    "Banca y Finanzas",
    "Seguros",
    "Energía",
    "Minería",
    "Derecho Deportivo",
    "Startups",
    "Venture Capital"
];
const STATS_CONFIG = {
    Tech: [
        {
            label: 'Ranking Global',
            name: 'ranking',
            placeholder: '#339'
        },
        {
            label: 'Experiencia',
            name: 'experience',
            placeholder: '+7 Años'
        },
        {
            label: 'Nivel Seniority',
            name: 'level',
            placeholder: 'Senior'
        },
        {
            label: 'Tech Stack',
            name: 'stack',
            placeholder: 'Full Stack'
        }
    ],
    Legal: [
        {
            label: 'Ciclo Académico',
            name: 'ciclo',
            placeholder: 'Noveno'
        },
        {
            label: 'Mérito',
            name: 'merito',
            placeholder: 'Tercio Superior'
        },
        {
            label: 'Disponibilidad',
            name: 'disponibilidad',
            placeholder: 'Inmediata'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EditProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditProfileModal",
    ()=>EditProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile-constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function EditProfileModal({ profile, onSuccess }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // --- STATE MANAGEMENT ---
    const [industry, setIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(profile.industry || 'Tech');
    // Collapsible States
    const [showEduList, setShowEduList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCertList, setShowCertList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showProjList, setShowProjList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Stats State (initialize from attributes)
    const [statsValues, setStatsValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Specialties State (initialize from experiences type 'Specialization')
    const [selectedSpecialties, setSelectedSpecialties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Tech Stack State
    const [selectedStack, setSelectedStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Backend & Arquitectura": [],
        "Bases de Datos": [],
        "DevOps & Infra": [],
        "Frontend & Diseño": [],
        "Áreas de Práctica": [],
        "Herramientas LegalTech": [],
        "Habilidades Profesionales": [],
        "Idiomas & Jurisdicción": []
    });
    // Projects State
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentProject, setCurrentProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        client: '',
        type: 'Laboral',
        desc: '',
        solution: '',
        outcome: '',
        tags: [],
        imageFile: null,
        existingImageUrl: null,
        url: ''
    });
    // Education State
    const [education, setEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentEdu, setCurrentEdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        institution: '',
        degree: '',
        period: '',
        status: 'Completed'
    });
    // Certifications State
    const [certifications, setCertifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentCert, setCurrentCert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        provider: '',
        date: '',
        url: ''
    });
    // Load initial data when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfileModal.useEffect": ()=>{
            if (isOpen && profile) {
                setIndustry(profile.industry || 'Tech');
                // Load Specialties
                if (profile.experiences) {
                    const specs = profile.experiences.filter({
                        "EditProfileModal.useEffect.specs": (e)=>e.type === 'Specialization'
                    }["EditProfileModal.useEffect.specs"]).map({
                        "EditProfileModal.useEffect.specs": (e)=>{
                            const allSpecialties = [
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_SPECIALTIES"],
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_SPECIALTIES"]
                            ];
                            const match = allSpecialties.find({
                                "EditProfileModal.useEffect.specs.match": (t)=>t.title === e.title
                            }["EditProfileModal.useEffect.specs.match"]);
                            return match ? `${match.title}|${match.description}` : null;
                        }
                    }["EditProfileModal.useEffect.specs"]).filter(Boolean);
                    setSelectedSpecialties(specs);
                }
                // Load Tech Stack from SkillCategories
                if (profile.skillCategories) {
                    const stackData = {
                        "Backend & Arquitectura": [],
                        "Bases de Datos": [],
                        "DevOps & Infra": [],
                        "Frontend & Diseño": [],
                        "Áreas de Práctica": [],
                        "Herramientas LegalTech": [],
                        "Habilidades Profesionales": [],
                        "Idiomas & Jurisdicción": []
                    };
                    profile.skillCategories.forEach({
                        "EditProfileModal.useEffect": (cat)=>{
                            if (stackData[cat.name] !== undefined) {
                                const items = cat.items.map({
                                    "EditProfileModal.useEffect.items": (i)=>i.name
                                }["EditProfileModal.useEffect.items"]);
                                stackData[cat.name] = items;
                            }
                        }
                    }["EditProfileModal.useEffect"]);
                    setSelectedStack({
                        "EditProfileModal.useEffect": (prev)=>({
                                ...prev,
                                ...stackData
                            })
                    }["EditProfileModal.useEffect"]);
                }
                // Load Projects
                if (profile.projects) {
                    const loadedProjects = profile.projects.map({
                        "EditProfileModal.useEffect.loadedProjects": (p)=>({
                                title: p.title,
                                client: p.client,
                                type: p.type || 'Laboral',
                                desc: p.description,
                                solution: p.solution,
                                outcome: p.outcome,
                                tags: p.tags ? p.tags.map({
                                    "EditProfileModal.useEffect.loadedProjects": (t)=>t.name
                                }["EditProfileModal.useEffect.loadedProjects"]) : [],
                                existingImageUrl: p.imageUrl,
                                url: p.url || ''
                            })
                    }["EditProfileModal.useEffect.loadedProjects"]);
                    setProjects(loadedProjects);
                }
                // Load Education
                if (profile.education) {
                    setEducation(profile.education.map({
                        "EditProfileModal.useEffect": (edu)=>({
                                institution: edu.institution,
                                degree: edu.degree,
                                period: edu.period,
                                status: edu.status
                            })
                    }["EditProfileModal.useEffect"]));
                }
                // Load Certifications
                if (profile.certifications) {
                    setCertifications(profile.certifications.map({
                        "EditProfileModal.useEffect": (cert)=>({
                                title: cert.title,
                                provider: cert.provider,
                                date: cert.date ? String(cert.date) : '',
                                url: cert.url || ''
                            })
                    }["EditProfileModal.useEffect"]));
                }
            }
        }
    }["EditProfileModal.useEffect"], [
        isOpen,
        profile
    ]);
    // Helpers
    const getStatValue = (name)=>{
        const labelMap = {
            'ranking': 'RANKING',
            'experience': 'EXPERIENCIA',
            'level': 'LEVEL',
            'stack': 'STACK',
            'ciclo': 'CICLO',
            'merito': 'MÉRITO',
            'disponibilidad': 'DISPONIBILIDAD'
        };
        const label = labelMap[name] || name.toUpperCase();
        const attr = profile.attributes?.find((a)=>a.label === label);
        return attr ? attr.value : '';
    };
    const getSocialUrl = (platform)=>{
        const social = profile.socials?.find((s)=>s.platform.toLowerCase() === platform.toLowerCase());
        return social ? social.url : '';
    };
    const handleSpecialtyChange = (value)=>{
        if (selectedSpecialties.includes(value)) {
            setSelectedSpecialties(selectedSpecialties.filter((s)=>s !== value));
        } else {
            setSelectedSpecialties([
                ...selectedSpecialties,
                value
            ]);
        }
    };
    const toggleStackItem = (category, item)=>{
        setSelectedStack((prev)=>{
            const currentItems = prev[category] || [];
            const newItems = currentItems.includes(item) ? currentItems.filter((i)=>i !== item) : [
                ...currentItems,
                item
            ];
            return {
                ...prev,
                [category]: newItems
            };
        });
    };
    // Project Logic
    const handleAddProject = ()=>{
        if (!currentProject.title) return;
        setProjects([
            ...projects,
            {
                ...currentProject
            }
        ]);
        setCurrentProject({
            title: '',
            client: '',
            type: 'Laboral',
            desc: '',
            solution: '',
            outcome: '',
            tags: [],
            imageFile: null,
            existingImageUrl: null,
            url: ''
        });
        setShowProjList(true);
    };
    const removeProject = (index)=>{
        setProjects(projects.filter((_, i)=>i !== index));
    };
    const editProject = (index)=>{
        const itemToEdit = projects[index];
        setCurrentProject(itemToEdit);
        removeProject(index);
    };
    const toggleTech = (tech)=>{
        setCurrentProject((prev)=>{
            const tags = prev.tags.includes(tech) ? prev.tags.filter((t)=>t !== tech) : [
                ...prev.tags,
                tech
            ];
            return {
                ...prev,
                tags
            };
        });
    };
    // Education Logic
    const handleAddEducation = ()=>{
        if (!currentEdu.institution || !currentEdu.degree) return;
        setEducation([
            ...education,
            {
                ...currentEdu
            }
        ]);
        setCurrentEdu({
            institution: '',
            degree: '',
            period: '',
            status: 'Completed'
        });
        setShowEduList(true);
    };
    const removeEducation = (index)=>{
        setEducation(education.filter((_, i)=>i !== index));
    };
    const editEducation = (index)=>{
        const itemToEdit = education[index];
        setCurrentEdu(itemToEdit);
        removeEducation(index);
    };
    // Certifications Logic
    const handleAddCertification = ()=>{
        if (!currentCert.title || !currentCert.provider) return;
        setCertifications([
            ...certifications,
            {
                ...currentCert
            }
        ]);
        setCurrentCert({
            title: '',
            provider: '',
            date: '',
            url: ''
        });
        setShowCertList(true);
    };
    const removeCertification = (index)=>{
        setCertifications(certifications.filter((_, i)=>i !== index));
    };
    const editCertification = (index)=>{
        const itemToEdit = certifications[index];
        setCurrentCert(itemToEdit);
        removeCertification(index);
    };
    const handleNext = (e)=>{
        e.preventDefault();
        // Allow all 7 steps for both Tech and Legal
        const maxStep = 7;
        if (step < maxStep) setStep(step + 1);
    };
    async function onSubmit(event) {
        event.preventDefault();
        setIsPending(true);
        const formData = new FormData(event.currentTarget);
        // Inject Specialties manually
        formData.delete('specialties');
        selectedSpecialties.forEach((s)=>formData.append('specialties', s));
        // Inject Tech Stack
        formData.append('tech_stack_data', JSON.stringify(selectedStack));
        // Inject Education
        let finalEducation = [
            ...education
        ];
        if (currentEdu.institution) {
            finalEducation.push(currentEdu);
        }
        formData.append('education_data', JSON.stringify(finalEducation));
        // Inject Certifications
        let finalCertifications = [
            ...certifications
        ];
        if (currentCert.title) {
            finalCertifications.push(currentCert);
        }
        formData.append('certifications_data', JSON.stringify(finalCertifications));
        // Inject Projects
        const finalProjects = [
            ...projects
        ];
        if (currentProject.title) {
            finalProjects.push(currentProject);
        }
        formData.append('projects_data', JSON.stringify(finalProjects.map((p)=>({
                title: p.title,
                client: p.client,
                type: p.type,
                desc: p.desc,
                solution: p.solution,
                outcome: p.outcome,
                tags: p.tags,
                existingImageUrl: p.existingImageUrl,
                url: p.url
            }))));
        finalProjects.forEach((p, index)=>{
            if (p.imageFile) {
                formData.append(`project_image_${index}`, p.imageFile);
            }
        });
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateClientProfile"])(profile.id, formData);
        setIsPending(false);
        if (res.success) {
            setIsOpen(false);
            router.refresh();
        }
    }
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditProfileModal.useEffect": ()=>{
            if (isOpen) setMounted(true);
        }
    }["EditProfileModal.useEffect"], [
        isOpen
    ]);
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setIsOpen(true),
            className: "w-full py-2.5 px-4 bg-slate-900 border border-white/10 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all font-medium group mb-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                    size: 14,
                    className: "group-hover:rotate-12 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/components/EditProfileModal.tsx",
                    lineNumber: 322,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Edit Identity"
                }, void 0, false, {
                    fileName: "[project]/components/EditProfileModal.tsx",
                    lineNumber: 323,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EditProfileModal.tsx",
            lineNumber: 318,
            columnNumber: 13
        }, this);
    }
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100000] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-950/80 backdrop-blur-md",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/EditProfileModal.tsx",
                lineNumber: 333,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-5xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 h-[85vh] flex flex-col relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-950/60 px-8 py-6 border-b border-cyan-500/20 flex justify-between items-center sticky top-0 z-30 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white tracking-tight flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                size: 20,
                                                className: "text-cyan-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 342,
                                                columnNumber: 29
                                            }, this),
                                            step === 1 && 'Edit Basic Identity',
                                            step === 2 && 'Excellence Metrics',
                                            step === 3 && (industry === 'Tech' ? 'Technical Specialties' : 'Áreas de Especialización'),
                                            step === 4 && (industry === 'Tech' ? 'Arsenal Tecnológico' : 'Competencias Jurídicas'),
                                            step === 5 && 'Academic Foundation',
                                            step === 6 && (industry === 'Tech' ? 'Cursos y Certificaciones' : 'Formación Continua'),
                                            step === 7 && (industry === 'Tech' ? 'Project Portfolio' : 'Experiencia & Casos')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EditProfileModal.tsx",
                                        lineNumber: 341,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em] mt-1 opacity-70",
                                        children: [
                                            "Configuration // Phase.",
                                            step < 10 ? `0${step}` : step,
                                            " // Mode.Update"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EditProfileModal.tsx",
                                        lineNumber: 351,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 340,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 354,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 353,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EditProfileModal.tsx",
                        lineNumber: 339,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-10 py-8 custom-scrollbar bg-grid-pattern-subtle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            id: "edit-profile-form",
                            onSubmit: onSubmit,
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 1 ? 'block space-y-8' : 'hidden',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "industry",
                                                            value: "Tech",
                                                            className: "peer sr-only",
                                                            checked: industry === 'Tech',
                                                            onChange: ()=>setIndustry('Tech')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 group-hover:border-cyan-500/50 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                                    size: 32,
                                                                    className: "mx-auto mb-3 text-slate-500 peer-checked:text-cyan-400 group-hover:scale-110 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs",
                                                                    children: "Technology"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "industry",
                                                            value: "Legal",
                                                            className: "peer sr-only",
                                                            checked: industry === 'Legal',
                                                            onChange: ()=>setIndustry('Legal')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 group-hover:border-indigo-500/50 peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                                    size: 32,
                                                                    className: "mx-auto mb-3 text-slate-500 peer-checked:text-indigo-400 group-hover:scale-110 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs",
                                                                    children: "Legal Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 364,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Nombre"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "firstName",
                                                                    defaultValue: profile.firstName,
                                                                    placeholder: "Ej: Unlocking",
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 147
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Apellido"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "lastName",
                                                                    defaultValue: profile.lastName,
                                                                    placeholder: "Ej: Digital Resilience",
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 384,
                                                                    columnNumber: 149
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "name",
                                                            defaultValue: profile.name,
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 386,
                                                            columnNumber: 146
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Headline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "headline",
                                                            defaultValue: profile.headline,
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 145
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "email",
                                                                    defaultValue: profile.email,
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 146
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "phone",
                                                                    defaultValue: profile.phone,
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 146
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "location",
                                                            defaultValue: profile.location,
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 145
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Bio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "bio",
                                                            defaultValue: profile.bio,
                                                            rows: 4,
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all resize-none text-white placeholder:text-slate-600 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 140
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 pt-4 border-t border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Redes Sociales"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "LinkedIn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_linkedin",
                                                                    defaultValue: getSocialUrl('LinkedIn'),
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://linkedin.com/in/..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "GitHub"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_github",
                                                                    defaultValue: getSocialUrl('GitHub'),
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://github.com/..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "YouTube"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_youtube",
                                                                    defaultValue: getSocialUrl('YouTube'),
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://youtube.com/@..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "Email (Social)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_email",
                                                                    defaultValue: getSocialUrl('Email'),
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "ejemplo@correo.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 417,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "TikTok"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_tiktok",
                                                                    defaultValue: getSocialUrl('TikTok'),
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://tiktok.com/@..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 421,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 397,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 363,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 2 ? 'block space-y-6' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS_CONFIG"].Tech : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS_CONFIG"].Legal).map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-1",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: `stat_${stat.name}`,
                                                        defaultValue: getStatValue(stat.name),
                                                        required: true,
                                                        className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm",
                                                        placeholder: stat.placeholder
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, stat.name, true, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 431,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/EditProfileModal.tsx",
                                        lineNumber: 429,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 428,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 3 ? 'block' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_SPECIALTIES"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_SPECIALTIES"]).map((spec)=>{
                                            const Icon = spec.icon;
                                            const val = `${spec.title}|${spec.description}`;
                                            const isChecked = selectedSpecialties.includes(val);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "cursor-pointer relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        name: "specialties_control",
                                                        value: val,
                                                        className: "peer sr-only",
                                                        checked: isChecked,
                                                        onChange: ()=>handleSpecialtyChange(val)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full border rounded-lg p-4 transition-all ${isChecked ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/10'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `p-2 rounded ${isChecked ? 'bg-cyan-500 text-black' : 'bg-slate-100 text-slate-600'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-sm mb-1",
                                                                            children: spec.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs opacity-70 leading-relaxed",
                                                                            children: spec.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 469,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, spec.id, true, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 453,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/EditProfileModal.tsx",
                                        lineNumber: 447,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 446,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 4 ? 'block' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: Object.entries(industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK_CATEGORIES"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_STACK_CATEGORIES"]).map(([catName, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-950 p-5 rounded-2xl border border-white/10 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-slate-200 uppercase tracking-widest border-l-4 border-cyan-500 pl-3 mb-4",
                                                        children: catName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-3 cursor-pointer group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-5 h-5 rounded border border-slate-300 flex items-center justify-center transition-colors ${selectedStack[catName]?.includes(item) ? 'bg-cyan-500 border-cyan-500' : 'bg-slate-900 border-white/20 group-hover:border-cyan-400'}`,
                                                                        children: selectedStack[catName]?.includes(item) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            size: 14,
                                                                            className: "text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 489,
                                                                            columnNumber: 100
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        className: "sr-only",
                                                                        checked: selectedStack[catName]?.includes(item),
                                                                        onChange: ()=>toggleStackItem(catName, item)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-sm ${selectedStack[catName]?.includes(item) ? 'text-slate-200 font-medium' : 'text-slate-400 group-hover:text-slate-200'}`,
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, item, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 487,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 485,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, catName, true, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 483,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/EditProfileModal.tsx",
                                        lineNumber: 481,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 480,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 5 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        education.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between cursor-pointer group",
                                                    onClick: ()=>setShowEduList(!showEduList),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                            children: [
                                                                "Added Records (",
                                                                education.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 41
                                                        }, this),
                                                        showEduList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 56
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 108
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 37
                                                }, this),
                                                showEduList && education.map((edu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: edu.institution
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 521,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono",
                                                                        children: [
                                                                            edu.degree,
                                                                            " • ",
                                                                            edu.period
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 522,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editEducation(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        title: "Editar",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeEducation(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        title: "Eliminar",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 529,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 519,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 509,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-10 bg-slate-950/20 rounded-2xl border border-dashed border-white/10 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-xs font-mono uppercase tracking-widest",
                                                children: "No matching records found in local stack."
                                            }, void 0, false, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 537,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 536,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            size: 18,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 543,
                                                            columnNumber: 37
                                                        }, this),
                                                        education.length > 0 ? 'Agregar otra formación' : 'Registrar educación'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                    children: [
                                                                        "Institución ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 144
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 549,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentEdu.institution,
                                                                    onChange: (e)=>setCurrentEdu({
                                                                            ...currentEdu,
                                                                            institution: e.target.value
                                                                        }),
                                                                    className: `w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentEdu.institution && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`,
                                                                    placeholder: "Ej: UMA - Universidad María Auxiliadora"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                    children: [
                                                                        "Título / Especialidad ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 558,
                                                                            columnNumber: 154
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 558,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentEdu.degree,
                                                                    onChange: (e)=>setCurrentEdu({
                                                                            ...currentEdu,
                                                                            degree: e.target.value
                                                                        }),
                                                                    className: `w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentEdu.degree && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`,
                                                                    placeholder: "Ej: Ingeniería de Inteligencia Artificial"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                            children: "Periodo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 568,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentEdu.period,
                                                                            onChange: (e)=>setCurrentEdu({
                                                                                    ...currentEdu,
                                                                                    period: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "Ej: 2024 - Actualidad"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                            children: "Estado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 577,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: currentEdu.status,
                                                                            onChange: (e)=>setCurrentEdu({
                                                                                    ...currentEdu,
                                                                                    status: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white bg-slate-950",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Completed",
                                                                                    children: "Completado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 583,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "In Progress",
                                                                                    children: "En Curso"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 584,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Truncated",
                                                                                    children: "Técnico/Otros"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 585,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 578,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 576,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleAddEducation,
                                                    disabled: !currentEdu.institution || !currentEdu.degree,
                                                    className: `w-full py-3 font-bold rounded-xl transition-all text-sm border ${!currentEdu.institution || !currentEdu.degree ? 'bg-white/5 text-slate-500 border-white/5 cursor-not-allowed' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20'}`,
                                                    children: "+ Agregar a la lista"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 541,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 507,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 6 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        certifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between cursor-pointer group",
                                                    onClick: ()=>setShowCertList(!showCertList),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                            children: [
                                                                "Added Knowledge (",
                                                                certifications.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 41
                                                        }, this),
                                                        showCertList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 57
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 109
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 37
                                                }, this),
                                                showCertList && certifications.map((cert, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: cert.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 615,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono",
                                                                        children: [
                                                                            cert.provider,
                                                                            " • ",
                                                                            cert.date
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editCertification(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 620,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 619,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeCertification(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 623,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 603,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-10 bg-slate-950/20 rounded-2xl border border-dashed border-white/10 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-xs font-mono uppercase tracking-widest",
                                                children: "No certifications detected in database."
                                            }, void 0, false, {
                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                lineNumber: 631,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 630,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            size: 18,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 37
                                                        }, this),
                                                        certifications.length > 0 ? 'Inject Another Node' : 'Initialize Certification'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: [
                                                                        "Nombre del Curso ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 149
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentCert.title,
                                                                    onChange: (e)=>setCurrentCert({
                                                                            ...currentCert,
                                                                            title: e.target.value
                                                                        }),
                                                                    className: `w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentCert.title && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`,
                                                                    placeholder: "Ej: How to Build a Full Stack Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 644,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                            children: [
                                                                                "Proveedor ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-500",
                                                                                    children: "*"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 653,
                                                                                    columnNumber: 146
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentCert.provider,
                                                                            onChange: (e)=>setCurrentCert({
                                                                                    ...currentCert,
                                                                                    provider: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "Ej: freecodecamp"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 654,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                            children: "Fecha"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 662,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentCert.date,
                                                                            onChange: (e)=>setCurrentCert({
                                                                                    ...currentCert,
                                                                                    date: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "Ej: 09/02/2025"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 663,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-span-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                            children: "URL (Opcional)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 671,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentCert.url,
                                                                            onChange: (e)=>setCurrentCert({
                                                                                    ...currentCert,
                                                                                    url: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "https://..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleAddCertification,
                                                    disabled: !currentCert.title || !currentCert.provider,
                                                    className: `w-full py-3 font-bold rounded-xl transition-all text-sm border ${!currentCert.title || !currentCert.provider ? 'bg-white/5 text-slate-500 border-white/5 cursor-not-allowed' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20'}`,
                                                    children: "+ Inject into Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 635,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 601,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 7 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        projects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between cursor-pointer group",
                                                    onClick: ()=>setShowProjList(!showProjList),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                            children: [
                                                                industry === 'Tech' ? 'Active Operations' : 'Casos & Experiencia',
                                                                " (",
                                                                projects.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 41
                                                        }, this),
                                                        showProjList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 57
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 109
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 37
                                                }, this),
                                                showProjList && projects.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: p.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono tracking-tight",
                                                                        children: [
                                                                            p.client || 'Internal Core',
                                                                            " • ",
                                                                            p.tags.length,
                                                                            " ",
                                                                            industry === 'Tech' ? 'active technologies' : 'competencias'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 707,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editProject(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 711,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 710,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeProject(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 714,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 694,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-8 relative overflow-hidden group/modal",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover/modal:bg-cyan-500/10 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-3 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 20,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tracking-tight",
                                                            children: industry === 'Tech' ? 'Add / Synchronize Project' : 'Agregar Caso / Experiencia'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Domain' : 'Tipo'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white focus:border-cyan-500 transition-all cursor-pointer",
                                                                            value: currentProject.type,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    type: e.target.value
                                                                                }),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Laboral",
                                                                                    children: industry === 'Tech' ? 'Corporate Info' : 'Firma / Estudio'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 739,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Personal",
                                                                                    children: industry === 'Tech' ? 'Personal Project' : 'Independiente'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 740,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 734,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Identity' : 'Caso / Proyecto'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 744,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentProject.title,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    title: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: industry === 'Tech' ? "Project Title" : "Ej: Defensa Corporativa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 745,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                    children: industry === 'Tech' ? 'Challenge Matrix' : 'Contexto del Caso'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 755,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: currentProject.desc,
                                                                    onChange: (e)=>setCurrentProject({
                                                                            ...currentProject,
                                                                            desc: e.target.value
                                                                        }),
                                                                    rows: 2,
                                                                    className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                    placeholder: industry === 'Tech' ? "Describe the mission challenge..." : "Describa el conflicto o requerimiento legal..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 756,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Engineered Solution' : 'Estrategia Legal'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 761,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            value: currentProject.solution,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    solution: e.target.value
                                                                                }),
                                                                            rows: 2,
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Core architecture details..." : "Argumentación y acciones tomadas..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 762,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Calculated Outcome' : 'Resultado / Sentencia'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 765,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            value: currentProject.outcome,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    outcome: e.target.value
                                                                                }),
                                                                            rows: 2,
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Impact and results..." : "Fallo, acuerdo, etc..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 766,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                    children: industry === 'Tech' ? 'Live Endpoint (Optional)' : 'Referencia / Link (Opcional)'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentProject.url,
                                                                    onChange: (e)=>setCurrentProject({
                                                                            ...currentProject,
                                                                            url: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                    placeholder: "https://..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1",
                                                                    children: industry === 'Tech' ? 'Tech Substack' : 'Materias Relacionadas'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 776,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 h-40 overflow-y-auto border border-white/5 rounded-2xl p-4 bg-slate-950/40 custom-scrollbar shadow-inner",
                                                                    children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_OPTIONS"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_OPTIONS"]).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-3 cursor-pointer group/item",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `w-4 h-4 rounded border flex items-center justify-center transition-all ${currentProject.tags.includes(tech) ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-white/20 group-hover/item:border-cyan-500/50'}`,
                                                                                    children: currentProject.tags.includes(tech) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                        size: 10,
                                                                                        className: "text-black"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/EditProfileModal.tsx",
                                                                                        lineNumber: 781,
                                                                                        columnNumber: 96
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 780,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: currentProject.tags.includes(tech),
                                                                                    onChange: ()=>toggleTech(tech),
                                                                                    className: "sr-only"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 783,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-[11px] uppercase tracking-tighter ${currentProject.tags.includes(tech) ? 'text-white font-bold' : 'text-slate-500 group-hover/item:text-slate-300'}`,
                                                                                    children: tech
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 784,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, tech, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 779,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 border-dashed rounded-2xl p-6 text-center cursor-pointer relative hover:bg-white/5 hover:border-cyan-500/30 transition-all group/upload",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20",
                                                                    onChange: (e)=>{
                                                                        if (e.target.files?.[0]) setCurrentProject({
                                                                            ...currentProject,
                                                                            imageFile: e.target.files[0]
                                                                        });
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-3 bg-white/5 rounded-full group-hover/upload:scale-110 transition-transform",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                size: 24,
                                                                                className: "text-slate-500 group-hover:text-cyan-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/EditProfileModal.tsx",
                                                                                lineNumber: 794,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 793,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        currentProject.imageFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-cyan-400 font-mono flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 797,
                                                                                    columnNumber: 123
                                                                                }, this),
                                                                                " ",
                                                                                currentProject.imageFile.name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 797,
                                                                            columnNumber: 49
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-400 font-bold uppercase tracking-widest",
                                                                                    children: "Upload Visual Evidence"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 800,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] text-slate-500 font-mono",
                                                                                    children: "PNG, JPG up to 10MB"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                                    lineNumber: 801,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                                            lineNumber: 799,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleAddProject,
                                                            className: "w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all shadow-xl active:scale-95",
                                                            children: industry === 'Tech' ? '+ Deploy to Project List' : '+ Archivar en Expediente'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EditProfileModal.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EditProfileModal.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EditProfileModal.tsx",
                                            lineNumber: 722,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EditProfileModal.tsx",
                                    lineNumber: 692,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EditProfileModal.tsx",
                            lineNumber: 359,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EditProfileModal.tsx",
                        lineNumber: 358,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 pt-6 pb-6 px-10 flex justify-between gap-4 border-t border-cyan-500/20 bg-slate-950 z-40",
                        children: [
                            step > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStep(step - 1),
                                className: "px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 823,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsOpen(false),
                                className: "px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 825,
                                columnNumber: 25
                            }, this),
                            step === 7 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                form: "edit-profile-form",
                                disabled: isPending,
                                className: "bg-cyan-500 text-black px-10 py-2.5 rounded-lg font-bold hover:bg-cyan-400 disabled:opacity-50 ml-auto shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all",
                                children: isPending ? 'DEPLOYING...' : 'UPDATE_PROFILE'
                            }, void 0, false, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 829,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNext,
                                className: "bg-white text-black px-10 py-2.5 rounded-lg font-bold hover:bg-slate-200 ml-auto transition-all",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/EditProfileModal.tsx",
                                lineNumber: 833,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/EditProfileModal.tsx",
                        lineNumber: 821,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EditProfileModal.tsx",
                lineNumber: 336,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EditProfileModal.tsx",
        lineNumber: 331,
        columnNumber: 9
    }, this), document.body);
}
_s(EditProfileModal, "VUrqJU54q1ek+aKtWH1sadWh2iw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EditProfileModal;
var _c;
__turbopack_context__.k.register(_c, "EditProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ShowcaseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShowcaseCard",
    ()=>ShowcaseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EditProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EditProfileModal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// --- Variants ---
const VARIANTS = {
    Tech: {
        container: "bg-slate-950 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] font-mono text-slate-300",
        name: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold tracking-tighter",
        badge: "border-cyan-500/50 text-cyan-400 bg-cyan-950/30",
        icon: "text-cyan-400 hover:text-cyan-200 transition-colors",
        metricValue: "text-cyan-300 font-bold",
        decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/ui/ShowcaseCard.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    Legal: {
        container: "bg-white border-slate-200 shadow-xl font-sans text-slate-600",
        name: "text-slate-900 font-serif tracking-tight",
        badge: "border-slate-300 text-slate-700 bg-slate-50 font-medium",
        icon: "text-slate-600 hover:text-slate-900 transition-colors",
        metricValue: "text-slate-900 font-semibold italic",
        decoration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 border-[3px] border-double border-slate-100 pointer-events-none m-2"
        }, void 0, false, {
            fileName: "[project]/components/ui/ShowcaseCard.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
};
const SocialIcon = ({ name, url, className })=>{
    const Icons = {
        LinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        GitHub: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        Mail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        Youtube: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        TikTok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
    };
    const Icon = Icons[name] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/ui/ShowcaseCard.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/ShowcaseCard.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SocialIcon;
const ShowcaseCard = ({ profile, onProfileUpdate })=>{
    const flavor = VARIANTS[profile.industry] || VARIANTS.Tech;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-full max-w-4xl mx-auto p-8 rounded-2xl border overflow-hidden", flavor.container),
        children: [
            flavor.decoration,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-1 md:col-span-2 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4 border", flavor.badge),
                                        children: [
                                            profile.industry,
                                            " PROFESSIONAL"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-4xl md:text-5xl mb-2 tracking-tighter", flavor.name),
                                        children: profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg opacity-80",
                                        children: profile.headline
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("prose prose-sm max-w-none text-inherit opacity-70", profile.industry === 'Tech' ? 'font-mono' : 'font-serif italic'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: profile.bio
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-current/10",
                                children: profile.attributes.map((attr, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase opacity-40 block tracking-widest",
                                                children: attr.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg", flavor.metricValue),
                                                children: attr.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                                lineNumber: 106,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between border-l border-current/10 pl-8 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase opacity-40 tracking-widest",
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-sm",
                                        children: profile.location
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase opacity-40 tracking-widest",
                                        children: "Verification Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 14,
                                                className: "text-green-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-500/80 font-mono",
                                                children: "VALIDATED"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase opacity-40 tracking-widest",
                                        children: "Connect"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: profile.socials?.map((social, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                                name: social.platform,
                                                url: social.url,
                                                className: flavor.icon
                                            }, idx, false, {
                                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                                lineNumber: 131,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto pt-8 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EditProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditProfileModal"], {
                                        profile: profile,
                                        onSuccess: onProfileUpdate
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/showcase/${profile.id}`,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full py-2.5 px-6 rounded-lg text-sm font-medium text-center transition-all border", profile.industry === 'Tech' ? "border-cyan-500/20 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-950/30" : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"),
                                        children: "View Full Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 143,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full py-3 px-6 rounded-lg text-sm font-bold transition-all uppercase tracking-widest", profile.industry === 'Tech' ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "bg-slate-900 hover:bg-slate-800 text-white"),
                                        children: profile.industry === 'Tech' ? 'INITIALIZE_CONTACT' : 'Solicitar Entrevista'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                        lineNumber: 151,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/ShowcaseCard.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ShowcaseCard.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ShowcaseCard.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ShowcaseCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "SocialIcon");
__turbopack_context__.k.register(_c1, "ShowcaseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CreateProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateProfileModal",
    ()=>CreateProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-git-2.js [app-client] (ecmascript) <export default as FolderGit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile-constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CreateProfileModal({ onSuccess, trigger }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [industry, setIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Tech');
    // Tech Stack State
    const [selectedStack, setSelectedStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Backend & Arquitectura": [],
        "Bases de Datos": [],
        "DevOps & Infra": [],
        "Frontend & Diseño": [],
        "Áreas de Práctica": [],
        "Herramientas LegalTech": [],
        "Habilidades Profesionales": [],
        "Idiomas & Jurisdicción": []
    });
    // Project State
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentProject, setCurrentProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        client: '',
        type: 'Laboral',
        desc: '',
        solution: '',
        outcome: '',
        tags: [],
        imageFile: null
    });
    // Education State
    const [education, setEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentEdu, setCurrentEdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        institution: '',
        degree: '',
        period: '',
        status: 'Completed'
    });
    // Certifications State
    const [certifications, setCertifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentCert, setCurrentCert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        provider: '',
        date: ''
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleAddProject = ()=>{
        if (!currentProject.title || !currentProject.desc) return; // Basic validation
        setProjects([
            ...projects,
            {
                ...currentProject
            }
        ]);
        setCurrentProject({
            title: '',
            client: '',
            type: 'Laboral',
            desc: '',
            solution: '',
            outcome: '',
            tags: [],
            imageFile: null
        });
    };
    const removeProject = (index)=>{
        setProjects(projects.filter((_, i)=>i !== index));
    };
    const editProject = (index)=>{
        const itemToEdit = projects[index];
        setCurrentProject(itemToEdit);
        removeProject(index);
    };
    const toggleTech = (tech)=>{
        setCurrentProject((prev)=>{
            const tags = prev.tags.includes(tech) ? prev.tags.filter((t)=>t !== tech) : [
                ...prev.tags,
                tech
            ];
            return {
                ...prev,
                tags
            };
        });
    };
    const handleAddEducation = ()=>{
        if (!currentEdu.institution || !currentEdu.degree) return;
        setEducation([
            ...education,
            {
                ...currentEdu
            }
        ]);
        setCurrentEdu({
            institution: '',
            degree: '',
            period: '',
            status: 'Completed'
        });
    };
    const removeEducation = (index)=>{
        setEducation(education.filter((_, i)=>i !== index));
    };
    const editEducation = (index)=>{
        const itemToEdit = education[index];
        setCurrentEdu(itemToEdit);
        removeEducation(index);
    };
    const handleAddCertification = ()=>{
        if (!currentCert.title || !currentCert.provider) return;
        setCertifications([
            ...certifications,
            {
                ...currentCert
            }
        ]);
        setCurrentCert({
            title: '',
            provider: '',
            date: ''
        });
    };
    const removeCertification = (index)=>{
        setCertifications(certifications.filter((_, i)=>i !== index));
    };
    const editCertification = (index)=>{
        const itemToEdit = certifications[index];
        setCurrentCert(itemToEdit);
        removeCertification(index);
    };
    const toggleStackItem = (category, item)=>{
        setSelectedStack((prev)=>{
            const currentItems = prev[category] || [];
            const newItems = currentItems.includes(item) ? currentItems.filter((i)=>i !== item) : [
                ...currentItems,
                item
            ];
            return {
                ...prev,
                [category]: newItems
            };
        });
    };
    async function onSubmit(event) {
        event.preventDefault();
        setIsPending(true);
        const formData = new FormData(event.currentTarget);
        // Append Tech Stack
        formData.append('tech_stack_data', JSON.stringify(selectedStack));
        // Append Education
        let finalEducation = [
            ...education
        ];
        if (currentEdu.institution) {
            finalEducation.push(currentEdu);
        }
        formData.append('education_data', JSON.stringify(finalEducation));
        // Append Certifications
        let finalCertifications = [
            ...certifications
        ];
        if (currentCert.title) {
            finalCertifications.push(currentCert);
        }
        formData.append('certifications_data', JSON.stringify(finalCertifications));
        // Append Projects
        let finalProjects = [
            ...projects
        ];
        if (currentProject.title) {
            finalProjects.push(currentProject);
        }
        formData.append('projects_data', JSON.stringify(finalProjects.map((p)=>({
                title: p.title,
                client: p.client,
                type: p.type,
                desc: p.desc,
                solution: p.solution,
                outcome: p.outcome,
                tags: p.tags
            }))));
        finalProjects.forEach((p, index)=>{
            if (p.imageFile) {
                formData.append(`project_image_${index}`, p.imageFile);
            }
        });
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClientProfile"])(formData);
        setIsPending(false);
        if (res.success) {
            setIsOpen(false);
            setStep(1);
            setProjects([]);
            setEducation([]);
            setCertifications([]);
            setSelectedStack({
                "Backend & Arquitectura": [],
                "Bases de Datos": [],
                "DevOps & Infra": [],
                "Frontend & Diseño": []
            });
            setCurrentProject({
                title: '',
                client: '',
                type: 'Laboral',
                desc: '',
                solution: '',
                outcome: '',
                tags: [],
                imageFile: null
            });
            setCurrentEdu({
                institution: '',
                degree: '',
                period: '',
                status: 'Completed'
            });
            setCurrentCert({
                title: '',
                provider: '',
                date: ''
            });
            router.refresh();
            onSuccess?.();
        }
    }
    const handleNext = (e)=>{
        e.preventDefault();
        if (step < 7) {
            setStep(step + 1);
        }
    };
    const isLastStep = step === 7;
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CreateProfileModal.useEffect": ()=>setMounted(true)
    }["CreateProfileModal.useEffect"], []);
    if (!isOpen) {
        if (trigger) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(true),
                children: trigger
            }, void 0, false, {
                fileName: "[project]/components/CreateProfileModal.tsx",
                lineNumber: 216,
                columnNumber: 20
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setIsOpen(true),
            className: "flex items-center gap-2 bg-cyan-500 text-black px-6 py-2.5 rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] font-bold group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                    size: 18,
                    className: "group-hover:scale-110 transition-transform"
                }, void 0, false, {
                    fileName: "[project]/components/CreateProfileModal.tsx",
                    lineNumber: 223,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Registrar Perfil"
                }, void 0, false, {
                    fileName: "[project]/components/CreateProfileModal.tsx",
                    lineNumber: 224,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CreateProfileModal.tsx",
            lineNumber: 219,
            columnNumber: 13
        }, this);
    }
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100000] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-950/80 backdrop-blur-md",
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/CreateProfileModal.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 h-auto max-h-[95vh] flex flex-col relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-slate-950/60 px-8 py-6 border-b border-cyan-500/20 flex justify-between items-center sticky top-0 z-30 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white tracking-tight flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, this),
                                            step === 1 && 'New Profile Identity',
                                            step === 2 && 'Excellence Metrics',
                                            step === 3 && (industry === 'Tech' ? 'Technical Specialties' : 'Áreas de Especialización'),
                                            step === 4 && (industry === 'Tech' ? 'Arsenal Tecnológico' : 'Competencias Jurídicas'),
                                            step === 5 && 'Historial Académico',
                                            step === 6 && (industry === 'Tech' ? 'Cursos y Certificaciones' : 'Formación Continua'),
                                            step === 7 && (industry === 'Tech' ? 'Project Portfolio' : 'Experiencia & Casos')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                        lineNumber: 242,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em] mt-1 opacity-70",
                                        children: [
                                            "Module // Phase.",
                                            step < 10 ? `0${step}` : step,
                                            " // Architecture"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                        lineNumber: 252,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 241,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 255,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CreateProfileModal.tsx",
                        lineNumber: 240,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-10 py-8 custom-scrollbar bg-grid-pattern-subtle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            id: "create-profile-form",
                            onSubmit: onSubmit,
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 1 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "industry",
                                                            value: "Tech",
                                                            className: "peer sr-only",
                                                            checked: industry === 'Tech',
                                                            onChange: ()=>setIndustry('Tech')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 group-hover:border-cyan-500/50 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                                    size: 32,
                                                                    className: "mx-auto mb-3 text-slate-500 peer-checked:text-cyan-400 group-hover:scale-110 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs",
                                                                    children: "Technology"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "cursor-pointer group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "industry",
                                                            value: "Legal",
                                                            className: "peer sr-only",
                                                            checked: industry === 'Legal',
                                                            onChange: ()=>setIndustry('Legal')
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 group-hover:border-indigo-500/50 peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                                    size: 32,
                                                                    className: "mx-auto mb-3 text-slate-500 peer-checked:text-indigo-400 group-hover:scale-110 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs",
                                                                    children: "Legal Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 text-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Nombre"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "firstName",
                                                                    placeholder: "Ej: Unlocking",
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 147
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Apellido"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "lastName",
                                                                    placeholder: "Ej: Digital Resilience",
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 149
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "name",
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600",
                                                            placeholder: "e.g. Cristian Puma"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 146
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Headline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "headline",
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600",
                                                            placeholder: "e.g. Senior Software Architect"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 145
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "email",
                                                                    type: "email",
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 146
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 42
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "phone",
                                                                    required: true,
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 146
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            name: "location",
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 145
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                            children: "Bio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 38
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "bio",
                                                            rows: 4,
                                                            required: true,
                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all resize-none text-white placeholder:text-slate-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 140
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 280,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 pt-4 border-t border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                            size: 16,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Redes Sociales"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "LinkedIn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 303,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_linkedin",
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://linkedin.com/in/..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 304,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "GitHub"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 307,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_github",
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://github.com/..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "YouTube"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_youtube",
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://youtube.com/@..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "Email (Social)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_email",
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "ejemplo@correo.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 316,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest",
                                                                    children: "TikTok"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    name: "social_tiktok",
                                                                    className: "w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700",
                                                                    placeholder: "https://tiktok.com/@..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 296,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 263,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 2 ? 'block space-y-6' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS_CONFIG"].Tech : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATS_CONFIG"].Legal).map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: `stat_${stat.name}`,
                                                        required: true,
                                                        className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm",
                                                        placeholder: stat.placeholder
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, stat.name, true, {
                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                lineNumber: 330,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                        lineNumber: 328,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 3 ? 'block' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_SPECIALTIES"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_SPECIALTIES"]).map((spec)=>{
                                            const Icon = spec.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "cursor-pointer relative group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        name: "specialties",
                                                        value: `${spec.title}|${spec.description}`,
                                                        className: "peer sr-only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full border border-white/10 rounded-2xl p-6 transition-all bg-slate-950/40 backdrop-blur-sm group-hover:border-cyan-500/50 peer-checked:bg-cyan-500/10 peer-checked:border-cyan-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "p-3 bg-slate-900 rounded-xl text-slate-500 group-hover:text-cyan-400 peer-checked:bg-cyan-500 peer-checked:text-black transition-all shadow-inner",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                            size: 24
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 354,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-sm mb-1 text-slate-300 peer-checked:text-white uppercase tracking-wider",
                                                                                children: spec.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                lineNumber: 357,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-[11px] text-slate-500 leading-relaxed font-light",
                                                                                children: spec.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                lineNumber: 358,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 356,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-4 right-4 opacity-0 peer-checked:opacity-100 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, spec.id, true, {
                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                lineNumber: 349,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 4 ? 'block' : 'hidden',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-6",
                                        children: Object.entries(industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_STACK_CATEGORIES"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_STACK_CATEGORIES"]).map(([catName, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-950 p-5 rounded-2xl border border-white/10 shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-1 h-3 bg-cyan-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 45
                                                            }, this),
                                                            catName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "flex items-center gap-3 cursor-pointer group/item",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `w-4 h-4 rounded border flex items-center justify-center transition-all ${selectedStack[catName]?.includes(item) ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-white/20 bg-slate-900 group-hover/item:border-cyan-500/50'}`,
                                                                        children: selectedStack[catName]?.includes(item) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            size: 10,
                                                                            className: "text-black"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 384,
                                                                            columnNumber: 100
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        className: "sr-only",
                                                                        checked: selectedStack[catName]?.includes(item),
                                                                        onChange: ()=>toggleStackItem(catName, item)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 386,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs uppercase tracking-tighter transition-colors ${selectedStack[catName]?.includes(item) ? 'text-white font-bold' : 'text-slate-400 group-hover/item:text-slate-200'}`,
                                                                        children: item
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 392,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, item, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 382,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, catName, true, {
                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                lineNumber: 375,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                        lineNumber: 373,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 372,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 5 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        education.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                    children: [
                                                        "Added Records (",
                                                        education.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 37
                                                }, this),
                                                education.map((edu, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: edu.institution
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 410,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono",
                                                                        children: [
                                                                            edu.degree,
                                                                            " • ",
                                                                            edu.period
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 411,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editEducation(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 414,
                                                                            columnNumber: 200
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeEducation(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 415,
                                                                            columnNumber: 201
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 405,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            size: 18,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 37
                                                        }, this),
                                                        education.length > 0 ? 'Inject Another Record' : 'Initialize Education'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                    children: "Institución"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentEdu.institution,
                                                                    onChange: (e)=>setCurrentEdu({
                                                                            ...currentEdu,
                                                                            institution: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm",
                                                                    placeholder: "Ej: UMA - Universidad María Auxiliadora"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 431,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                    children: "Título / Especialidad"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentEdu.degree,
                                                                    onChange: (e)=>setCurrentEdu({
                                                                            ...currentEdu,
                                                                            degree: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm",
                                                                    placeholder: "Ej: Ingeniería de Inteligencia Artificial"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                            children: "Periodo"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentEdu.period,
                                                                            onChange: (e)=>setCurrentEdu({
                                                                                    ...currentEdu,
                                                                                    period: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 text-white placeholder:text-slate-600 text-sm",
                                                                            placeholder: "Ej: 2024 - Actualidad"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1",
                                                                            children: "Estado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                            value: currentEdu.status,
                                                                            onChange: (e)=>setCurrentEdu({
                                                                                    ...currentEdu,
                                                                                    status: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 text-white bg-slate-950 text-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Completed",
                                                                                    children: "Completado"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 445,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "In Progress",
                                                                                    children: "En Curso"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 446,
                                                                                    columnNumber: 49
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Truncated",
                                                                                    children: "Técnico/Otros"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 447,
                                                                                    columnNumber: 49
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleAddEducation,
                                                    className: "w-full py-3 bg-cyan-500/10 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/20 transition-all text-sm border border-cyan-500/30",
                                                    children: "+ Inject into Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 422,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 403,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 6 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        certifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                    children: [
                                                        "Added Knowledge (",
                                                        certifications.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 37
                                                }, this),
                                                certifications.map((cert, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: cert.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono",
                                                                        children: [
                                                                            cert.provider,
                                                                            " • ",
                                                                            cert.date
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editCertification(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 204
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 475,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeCertification(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 476,
                                                                            columnNumber: 205
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 476,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 466,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            size: 18,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 485,
                                                            columnNumber: 37
                                                        }, this),
                                                        certifications.length > 0 ? 'Inject Another Node' : 'Initialize Certification'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                    children: "Nombre del Curso"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 491,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: currentCert.title,
                                                                    onChange: (e)=>setCurrentCert({
                                                                            ...currentCert,
                                                                            title: e.target.value
                                                                        }),
                                                                    className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                    placeholder: "Ej: How to Build a Full Stack Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 492,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                            children: "Proveedor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentCert.provider,
                                                                            onChange: (e)=>setCurrentCert({
                                                                                    ...currentCert,
                                                                                    provider: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "Ej: freecodecamp"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 502,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2",
                                                                            children: "Fecha"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 510,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentCert.date,
                                                                            onChange: (e)=>setCurrentCert({
                                                                                    ...currentCert,
                                                                                    date: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all",
                                                                            placeholder: "Ej: 09/02/2025"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 511,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleAddCertification,
                                                    className: "w-full py-3 bg-cyan-500/10 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/20 transition-all text-sm border border-cyan-500/30",
                                                    children: "+ Inject into Stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 483,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 464,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: step === 7 ? 'block space-y-6' : 'hidden',
                                    children: [
                                        projects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-bold text-slate-400 uppercase tracking-widest",
                                                    children: [
                                                        industry === 'Tech' ? 'Active Operations' : 'Casos & Experiencia',
                                                        " (",
                                                        projects.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 37
                                                }, this),
                                                projects.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold text-white text-sm",
                                                                        children: p.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 538,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-slate-500 font-mono tracking-tight",
                                                                        children: [
                                                                            p.client || 'Internal Core',
                                                                            " • ",
                                                                            p.tags.length,
                                                                            " ",
                                                                            industry === 'Tech' ? 'active technologies' : 'competencias'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 539,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editProject(idx),
                                                                        className: "text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 542,
                                                                            columnNumber: 198
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeProject(idx),
                                                                        className: "text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 543,
                                                                            columnNumber: 199
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 533,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-950/40 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-8 relative overflow-hidden group/modal",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover/modal:bg-cyan-500/10 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-white mb-2 flex items-center gap-3 relative z-10",
                                                    children: [
                                                        projects.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            size: 20,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 60
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                            size: 20,
                                                            className: "text-cyan-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 107
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "tracking-tight",
                                                            children: projects.length > 0 ? industry === 'Tech' ? 'Add Another Project' : 'Agregar Otro Caso' : industry === 'Tech' ? 'Add First Project' : 'Agregar Primer Caso'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4 mb-4 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "cursor-pointer group/type",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "current_project_type",
                                                                    value: "Laboral",
                                                                    className: "peer sr-only",
                                                                    checked: currentProject.type === 'Laboral',
                                                                    onChange: ()=>setCurrentProject({
                                                                            ...currentProject,
                                                                            type: 'Laboral'
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border border-white/10 group-hover/type:border-cyan-500/30 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 rounded-xl p-4 flex items-center gap-3 transition-all bg-slate-950/40",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                                                                            size: 16,
                                                                            className: "text-slate-500 peer-checked:text-cyan-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 562,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-xs text-slate-400 peer-checked:text-white uppercase tracking-widest",
                                                                            children: industry === 'Tech' ? 'Corporate' : 'Firma / Estudio'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 563,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "cursor-pointer group/type",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "radio",
                                                                    name: "current_project_type",
                                                                    value: "Personal",
                                                                    className: "peer sr-only",
                                                                    checked: currentProject.type === 'Personal',
                                                                    onChange: ()=>setCurrentProject({
                                                                            ...currentProject,
                                                                            type: 'Personal'
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 567,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border border-white/10 group-hover/type:border-purple-500/30 peer-checked:border-purple-500 peer-checked:bg-purple-500/10 rounded-xl p-4 flex items-center gap-3 transition-all bg-slate-950/40",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$git$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderGit2$3e$__["FolderGit2"], {
                                                                            size: 16,
                                                                            className: "text-slate-500 peer-checked:text-purple-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-xs text-slate-400 peer-checked:text-white uppercase tracking-widest",
                                                                            children: industry === 'Tech' ? 'Personal' : 'Independiente'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 570,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 568,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-6 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Identity' : 'Caso / Proyecto'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 578,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentProject.title,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    title: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Project Title" : "Ej: Defensa Corporativa vs. Estado"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 579,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 41
                                                                }, this),
                                                                currentProject.type === 'Laboral' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2 animate-in slide-in-from-right-2 duration-300",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Client / Company' : 'Cliente / Firma'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            value: currentProject.client,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    client: e.target.value
                                                                                }),
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Who you worked for" : "Empresa o Cliente"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                    children: industry === 'Tech' ? 'Challenge Matrix' : 'Contexto del Caso'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    value: currentProject.desc,
                                                                    onChange: (e)=>setCurrentProject({
                                                                            ...currentProject,
                                                                            desc: e.target.value
                                                                        }),
                                                                    rows: 2,
                                                                    className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                    placeholder: industry === 'Tech' ? "Describe the mission challenge..." : "Describa el conflicto o requerimiento legal..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Engineered Solution' : 'Estrategia Legal'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 606,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            value: currentProject.solution,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    solution: e.target.value
                                                                                }),
                                                                            rows: 2,
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Core architecture details..." : "Argumentación y acciones tomadas..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 607,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1",
                                                                            children: industry === 'Tech' ? 'Calculated Outcome' : 'Resultado / Sentencia'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                            value: currentProject.outcome,
                                                                            onChange: (e)=>setCurrentProject({
                                                                                    ...currentProject,
                                                                                    outcome: e.target.value
                                                                                }),
                                                                            rows: 2,
                                                                            className: "w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light",
                                                                            placeholder: industry === 'Tech' ? "Impact and results..." : "Fallo favorale, acuerdo, etc..."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 611,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1",
                                                                    children: industry === 'Tech' ? 'Tech Substack' : 'Materias Relacionadas'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 616,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 sm:grid-cols-4 gap-3 h-40 overflow-y-auto border border-white/5 rounded-2xl p-4 bg-slate-950/40 custom-scrollbar shadow-inner",
                                                                    children: (industry === 'Tech' ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_OPTIONS"] : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2d$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGAL_OPTIONS"]).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-3 cursor-pointer group/item",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `w-4 h-4 rounded border flex items-center justify-center transition-all ${currentProject.tags.includes(tech) ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-white/20 group-hover/item:border-cyan-500/50'}`,
                                                                                    children: currentProject.tags.includes(tech) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                        size: 10,
                                                                                        className: "text-black"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                        lineNumber: 621,
                                                                                        columnNumber: 96
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 620,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: currentProject.tags.includes(tech),
                                                                                    onChange: ()=>toggleTech(tech),
                                                                                    className: "sr-only"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 623,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-[11px] uppercase tracking-tighter ${currentProject.tags.includes(tech) ? 'text-white font-bold' : 'text-slate-500 group-hover/item:text-slate-300'}`,
                                                                                    children: tech
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 624,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, tech, true, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 619,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 617,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border border-white/10 border-dashed rounded-2xl p-6 text-center cursor-pointer relative hover:bg-white/5 hover:border-cyan-500/30 transition-all group/upload",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20",
                                                                    onChange: (e)=>{
                                                                        if (e.target.files?.[0]) {
                                                                            setCurrentProject({
                                                                                ...currentProject,
                                                                                imageFile: e.target.files[0]
                                                                            });
                                                                        }
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 631,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-3 bg-white/5 rounded-full group-hover/upload:scale-110 transition-transform",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                                size: 24,
                                                                                className: "text-slate-500 group-hover:text-cyan-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                lineNumber: 634,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        currentProject.imageFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-cyan-400 font-mono flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 637,
                                                                                    columnNumber: 123
                                                                                }, this),
                                                                                " ",
                                                                                currentProject.imageFile.name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 49
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs text-slate-400 font-bold uppercase tracking-widest",
                                                                                    children: "Upload Visual Evidence"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 640,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] text-slate-500 font-mono",
                                                                                    children: "PNG, JPG up to 10MB"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                                    lineNumber: 641,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                                            lineNumber: 639,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleAddProject,
                                                            className: "w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all shadow-xl active:scale-95",
                                                            children: industry === 'Tech' ? '+ Deploy to Project List' : '+ Archivar en Expediente'
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CreateProfileModal.tsx",
                                            lineNumber: 550,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CreateProfileModal.tsx",
                                    lineNumber: 531,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CreateProfileModal.tsx",
                            lineNumber: 260,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/CreateProfileModal.tsx",
                        lineNumber: 259,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 pt-6 pb-6 px-10 flex justify-between gap-4 border-t border-cyan-500/20 bg-slate-950 z-40",
                        children: [
                            step > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStep(step - 1),
                                className: "px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 663,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsOpen(false),
                                className: "px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 665,
                                columnNumber: 25
                            }, this),
                            isLastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                form: "create-profile-form",
                                disabled: isPending,
                                className: "bg-cyan-500 text-black px-10 py-2.5 rounded-lg font-bold hover:bg-cyan-400 disabled:opacity-50 ml-auto shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all",
                                children: isPending ? 'DEPLOYING...' : 'FINALIZE_PROFILE'
                            }, void 0, false, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 668,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNext,
                                className: "bg-white text-black px-10 py-2.5 rounded-lg font-bold hover:bg-slate-200 ml-auto transition-all",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/CreateProfileModal.tsx",
                                lineNumber: 670,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CreateProfileModal.tsx",
                        lineNumber: 661,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CreateProfileModal.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CreateProfileModal.tsx",
        lineNumber: 232,
        columnNumber: 9
    }, this), document.body);
}
_s(CreateProfileModal, "I0ZZ9XYugI11ZsP5sV8Dv8dG0y0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateProfileModal;
var _c;
__turbopack_context__.k.register(_c, "CreateProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:36eb22 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveSearchQuery",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40c02522cafd7dbe73d64878a89678df22ac9f4fe1":"saveSearchQuery"},"lib/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40c02522cafd7dbe73d64878a89678df22ac9f4fe1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveSearchQuery");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCJcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXHJcbmltcG9ydCB7IHdyaXRlRmlsZSwgbWtkaXIgfSBmcm9tIFwiZnMvcHJvbWlzZXNcIlxyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNob3djYXNlUHJvZmlsZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgZGIucHJvZmlsZS5maW5kTWFueSh7XHJcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzb2NpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgdGFnczogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2tpbGxDYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogeyBpdGVtczogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWR1Y2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2VydGlmaWNhdGlvbnM6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHByb2ZpbGVzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZXM6XCIsIGVycm9yKVxyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZUJ5SWQoaWQ6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgZGIucHJvZmlsZS5maW5kVW5pcXVlKHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcclxuICAgICAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNvY2lhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgaGlnaGxpZ2h0czogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlOiB7IHRhZ3M6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNraWxsQ2F0ZWdvcmllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHsgaXRlbXM6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVkdWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNlcnRpZmljYXRpb25zOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwcm9maWxlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggcHJvZmlsZTpcIiwgZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGUoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICBjb25zdCByYXdEYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpIGFzIHN0cmluZyxcclxuICAgICAgICBmaXJzdE5hbWU6IGZvcm1EYXRhLmdldCgnZmlyc3ROYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGxhc3ROYW1lOiBmb3JtRGF0YS5nZXQoJ2xhc3ROYW1lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGluZHVzdHJ5OiBmb3JtRGF0YS5nZXQoJ2luZHVzdHJ5JykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGhlYWRsaW5lOiBmb3JtRGF0YS5nZXQoJ2hlYWRsaW5lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIHBob25lOiBmb3JtRGF0YS5nZXQoJ3Bob25lJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGxvY2F0aW9uOiBmb3JtRGF0YS5nZXQoJ2xvY2F0aW9uJykgYXMgc3RyaW5nLFxyXG4gICAgICAgIGJpbzogZm9ybURhdGEuZ2V0KCdiaW8nKSBhcyBzdHJpbmcsXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBFeHRyYWN0IFNwZWNpYWx0aWVzIChTdGVwIDMpXHJcbiAgICAgICAgY29uc3Qgc3BlY2lhbHRpZXMgPSBmb3JtRGF0YS5nZXRBbGwoJ3NwZWNpYWx0aWVzJykgYXMgc3RyaW5nW11cclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBUZWNoIFN0YWNrIChTdGVwIDQpXHJcbiAgICAgICAgY29uc3QgdGVjaFN0YWNrSnNvbiA9IGZvcm1EYXRhLmdldCgndGVjaF9zdGFja19kYXRhJykgYXMgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgdGVjaFN0YWNrRGF0YSA9IHRlY2hTdGFja0pzb24gPyBKU09OLnBhcnNlKHRlY2hTdGFja0pzb24pIDoge31cclxuXHJcbiAgICAgICAgY29uc3Qgc2tpbGxDYXRlZ29yaWVzQ3JlYXRlID0gT2JqZWN0LmVudHJpZXModGVjaFN0YWNrRGF0YSkubWFwKChbY2F0ZWdvcnksIGl0ZW1zXTogW3N0cmluZywgYW55XSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBpdGVtcyBpcyBzdHJpbmdbXVxyXG4gICAgICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IGl0ZW1zLm1hcCgoaXRlbU5hbWU6IHN0cmluZykgPT4gKHsgbmFtZTogaXRlbU5hbWUgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5maWx0ZXIoQm9vbGVhbikgYXMgYW55W11cclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBEeW5hbWljIFN0YXRzIChTdGVwIDIpXHJcbiAgICAgICAgY29uc3Qgc3RhdHM6IGFueVtdID0gW11cclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHRvIHB1c2ggaWYgZXhpc3RzXHJcbiAgICAgICAgY29uc3QgcHVzaFN0YXQgPSAoa2V5OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YS5nZXQoa2V5KSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSBzdGF0cy5wdXNoKHsgbGFiZWwsIHZhbHVlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmF3RGF0YS5pbmR1c3RyeSA9PT0gJ1RlY2gnKSB7XHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X3JhbmtpbmcnLCAnUkFOS0lORycpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X2V4cGVyaWVuY2UnLCAnRVhQRVJJRU5DSUEnKVxyXG4gICAgICAgICAgICBwdXNoU3RhdCgnc3RhdF9sZXZlbCcsICdMRVZFTCcpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X3N0YWNrJywgJ1NUQUNLJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwdXNoU3RhdCgnc3RhdF9jaWNsbycsICdDSUNMTycpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X21lcml0bycsICdNw4lSSVRPJylcclxuICAgICAgICAgICAgcHVzaFN0YXQoJ3N0YXRfZGlzcG9uaWJpbGlkYWQnLCAnRElTUE9OSUJJTElEQUQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRXh0cmFjdCBTb2NpYWwgTGlua3NcclxuICAgICAgICBjb25zdCBzb2NpYWxMaW5rczogYW55W10gPSBbXVxyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RTb2NpYWwgPSAocGxhdGZvcm06IHN0cmluZywgaWNvbk5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoYHNvY2lhbF8ke3BsYXRmb3JtLnRvTG93ZXJDYXNlKCl9YCkgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHNvY2lhbExpbmtzLnB1c2goeyBwbGF0Zm9ybSwgdXJsLCBpY29uTmFtZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ0xpbmtlZEluJywgJ0xpbmtlZGluJylcclxuICAgICAgICBleHRyYWN0U29jaWFsKCdHaXRIdWInLCAnR2l0aHViJylcclxuICAgICAgICBleHRyYWN0U29jaWFsKCdZb3VUdWJlJywgJ1lvdXR1YmUnKVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ0VtYWlsJywgJ01haWwnKVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ1Rpa1RvaycsICdUaWt0b2snKVxyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGV4cGVyaWVuY2VzIChjcmVhdGUgU3BlY2lhbGl6YXRpb24gaXRlbXMpXHJcbiAgICAgICAgY29uc3QgZXhwZXJpZW5jZUNyZWF0ZXMgPSBzcGVjaWFsdGllcy5tYXAoc3BlYyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFt0aXRsZSwgZGVzY10gPSBzcGVjLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBvcmdhbml6YXRpb246ICdDb3JlIENvbXBldGVuY3knLFxyXG4gICAgICAgICAgICAgICAgcGVyaW9kOiAnQ29udGludW91cycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU3BlY2lhbGl6YXRpb24nLFxyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogW3sgdGV4dDogZGVzYyB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlcyBNdWx0aXBsZSBQcm9qZWN0c1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzSnNvbiA9IGZvcm1EYXRhLmdldCgncHJvamVjdHNfZGF0YScpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IHByb2plY3RzSnNvbiA/IEpTT04ucGFyc2UocHJvamVjdHNKc29uKSA6IFtdXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNDcmVhdGUgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwID0gcHJvamVjdHNEYXRhW2ldXHJcbiAgICAgICAgICAgIGxldCBpbWFnZVVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciB1cGxvYWRlZCBmaWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBpbmRleFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW1hZ2UgPSBmb3JtRGF0YS5nZXQoYHByb2plY3RfaW1hZ2VfJHtpfWApIGFzIEZpbGUgfCBudWxsXHJcblxyXG4gICAgICAgICAgICBpZiAocHJvamVjdEltYWdlICYmIHByb2plY3RJbWFnZS5zaXplID4gMCAmJiBwcm9qZWN0SW1hZ2UubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcHJvamVjdEltYWdlLmFycmF5QnVmZmVyKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgJHtEYXRlLm5vdygpfS0ke2l9LSR7cHJvamVjdEltYWdlLm5hbWUucmVwbGFjZSgvXFxzL2csICdfJyl9YFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZXBhdGggPSBqb2luKHVwbG9hZERpciwgZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZXBhdGgsIGJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYC91cGxvYWRzLyR7ZmlsZW5hbWV9YFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0c0NyZWF0ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50OiBwLmNsaWVudCB8fCAocC50eXBlID09PSAnUGVyc29uYWwnID8gJ1BlcnNvbmFsIFByb2plY3QnIDogJ0NvbmZpZGVudGlhbCcpLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcC50eXBlIHx8ICdMYWJvcmFsJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLmRlc2MgfHwgJ05vIGNoYWxsZW5nZSBwcm92aWRlZC4nLFxyXG4gICAgICAgICAgICAgICAgc29sdXRpb246IHAuc29sdXRpb24gfHwgJ05vIHNvbHV0aW9uIGRldGFpbHMuJyxcclxuICAgICAgICAgICAgICAgIG91dGNvbWU6IHAub3V0Y29tZSB8fCAnU3VjY2Vzc2Z1bCBkZXBsb3ltZW50LicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogaW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHAudXJsIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGFnczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogcC50YWdzID8gcC50YWdzLm1hcCgodGFnOiBzdHJpbmcpID0+ICh7IG5hbWU6IHRhZyB9KSkgOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIEVkdWNhdGlvbiAoTmV3KVxyXG4gICAgICAgIGNvbnN0IGVkdWNhdGlvbkpzb24gPSBmb3JtRGF0YS5nZXQoJ2VkdWNhdGlvbl9kYXRhJykgYXMgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgZWR1Y2F0aW9uRGF0YSA9IGVkdWNhdGlvbkpzb24gPyBKU09OLnBhcnNlKGVkdWNhdGlvbkpzb24pIDogW11cclxuICAgICAgICBjb25zdCBlZHVjYXRpb25DcmVhdGUgPSBlZHVjYXRpb25EYXRhLm1hcCgoZWR1OiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIGluc3RpdHV0aW9uOiBlZHUuaW5zdGl0dXRpb24sXHJcbiAgICAgICAgICAgIGRlZ3JlZTogZWR1LmRlZ3JlZSxcclxuICAgICAgICAgICAgcGVyaW9kOiBlZHUucGVyaW9kLFxyXG4gICAgICAgICAgICBzdGF0dXM6IGVkdS5zdGF0dXMgfHwgJ0NvbXBsZXRlZCdcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgYXdhaXQgZGIucHJvZmlsZS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5yYXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogc3RhdHNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZXhwZXJpZW5jZUNyZWF0ZXNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogcHJvamVjdHNDcmVhdGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBza2lsbENhdGVnb3JpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IHNraWxsQ2F0ZWdvcmllc0NyZWF0ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVkdWNhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogZWR1Y2F0aW9uQ3JlYXRlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2VydGlmaWNhdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlcnRzSnNvbiA9IGZvcm1EYXRhLmdldCgnY2VydGlmaWNhdGlvbnNfZGF0YScpIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VydHNEYXRhID0gY2VydHNKc29uID8gSlNPTi5wYXJzZShjZXJ0c0pzb24pIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjZXJ0c0RhdGEubWFwKChjOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBjLnByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogYy5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBjLnVybCB8fCAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNvY2lhbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IHNvY2lhbExpbmtzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvc2hvd2Nhc2UnKVxyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IHtcclxuICAgICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSBhcyBzdHJpbmcsXHJcbiAgICAgICAgZmlyc3ROYW1lOiBmb3JtRGF0YS5nZXQoJ2ZpcnN0TmFtZScpIGFzIHN0cmluZyxcclxuICAgICAgICBsYXN0TmFtZTogZm9ybURhdGEuZ2V0KCdsYXN0TmFtZScpIGFzIHN0cmluZyxcclxuICAgICAgICBpbmR1c3RyeTogZm9ybURhdGEuZ2V0KCdpbmR1c3RyeScpIGFzIHN0cmluZyxcclxuICAgICAgICBoZWFkbGluZTogZm9ybURhdGEuZ2V0KCdoZWFkbGluZScpIGFzIHN0cmluZyxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZyxcclxuICAgICAgICBwaG9uZTogZm9ybURhdGEuZ2V0KCdwaG9uZScpIGFzIHN0cmluZyxcclxuICAgICAgICBsb2NhdGlvbjogZm9ybURhdGEuZ2V0KCdsb2NhdGlvbicpIGFzIHN0cmluZyxcclxuICAgICAgICBiaW86IGZvcm1EYXRhLmdldCgnYmlvJykgYXMgc3RyaW5nLFxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gMS4gVXBkYXRlIEJhc2ljIEluZm9cclxuICAgICAgICBhd2FpdCBkYi5wcm9maWxlLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHJhd0RhdGFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyAyLiBVcGRhdGUgQXR0cmlidXRlcyAoU3RhdHMpXHJcbiAgICAgICAgYXdhaXQgZGIuYXR0cmlidXRlLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9maWxlSWQ6IGlkIH0gfSlcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHM6IGFueVtdID0gW11cclxuICAgICAgICBjb25zdCBwdXNoU3RhdCA9IChrZXk6IHN0cmluZywgbGFiZWw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1EYXRhLmdldChrZXkpIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHN0YXRzLnB1c2goeyBsYWJlbCwgdmFsdWUsIHByb2ZpbGVJZDogaWQgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBTb2NpYWxzXHJcbiAgICAgICAgYXdhaXQgZGIuc29jaWFsLmRlbGV0ZU1hbnkoeyB3aGVyZTogeyBwcm9maWxlSWQ6IGlkIH0gfSlcclxuICAgICAgICBjb25zdCBzb2NpYWxMaW5rczogYW55W10gPSBbXVxyXG4gICAgICAgIGNvbnN0IGV4dHJhY3RTb2NpYWwgPSAocGxhdGZvcm06IHN0cmluZywgaWNvbk5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBmb3JtRGF0YS5nZXQoYHNvY2lhbF8ke3BsYXRmb3JtLnRvTG93ZXJDYXNlKCl9YCkgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHNvY2lhbExpbmtzLnB1c2goeyBwbGF0Zm9ybSwgdXJsLCBpY29uTmFtZSwgcHJvZmlsZUlkOiBpZCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ0xpbmtlZEluJywgJ0xpbmtlZGluJylcclxuICAgICAgICBleHRyYWN0U29jaWFsKCdHaXRIdWInLCAnR2l0aHViJylcclxuICAgICAgICBleHRyYWN0U29jaWFsKCdZb3VUdWJlJywgJ1lvdXR1YmUnKVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ0VtYWlsJywgJ01haWwnKVxyXG4gICAgICAgIGV4dHJhY3RTb2NpYWwoJ1Rpa1RvaycsICdUaWt0b2snKVxyXG5cclxuICAgICAgICBpZiAoc29jaWFsTGlua3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhd2FpdCBkYi5zb2NpYWwuY3JlYXRlTWFueSh7IGRhdGE6IHNvY2lhbExpbmtzIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmF3RGF0YS5pbmR1c3RyeSA9PT0gJ1RlY2gnKSB7XHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X3JhbmtpbmcnLCAnUkFOS0lORycpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X2V4cGVyaWVuY2UnLCAnRVhQRVJJRU5DSUEnKVxyXG4gICAgICAgICAgICBwdXNoU3RhdCgnc3RhdF9sZXZlbCcsICdMRVZFTCcpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X3N0YWNrJywgJ1NUQUNLJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwdXNoU3RhdCgnc3RhdF9jaWNsbycsICdDSUNMTycpXHJcbiAgICAgICAgICAgIHB1c2hTdGF0KCdzdGF0X21lcml0bycsICdNw4lSSVRPJylcclxuICAgICAgICAgICAgcHVzaFN0YXQoJ3N0YXRfZGlzcG9uaWJpbGlkYWQnLCAnRElTUE9OSUJJTElEQUQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuYXR0cmlidXRlLmNyZWF0ZU1hbnkoeyBkYXRhOiBzdGF0cyB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gVXBkYXRlIFNwZWNpYWx0aWVzXHJcbiAgICAgICAgYXdhaXQgZGIuZXhwZXJpZW5jZS5kZWxldGVNYW55KHtcclxuICAgICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVJZDogaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU3BlY2lhbGl6YXRpb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBzcGVjaWFsdGllcyA9IGZvcm1EYXRhLmdldEFsbCgnc3BlY2lhbHRpZXMnKSBhcyBzdHJpbmdbXVxyXG4gICAgICAgIGZvciAoY29uc3Qgc3BlYyBvZiBzcGVjaWFsdGllcykge1xyXG4gICAgICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2NdID0gc3BlYy5zcGxpdCgnfCcpXHJcbiAgICAgICAgICAgIGF3YWl0IGRiLmV4cGVyaWVuY2UuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZ2FuaXphdGlvbjogJ0NvcmUgQ29tcGV0ZW5jeScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyaW9kOiAnQ29udGludW91cycsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NwZWNpYWxpemF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZTogW3sgdGV4dDogZGVzYyB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIFVwZGF0ZSBUZWNoIFN0YWNrXHJcbiAgICAgICAgYXdhaXQgZGIuc2tpbGxDYXRlZ29yeS5kZWxldGVNYW55KHsgd2hlcmU6IHsgcHJvZmlsZUlkOiBpZCB9IH0pIC8vIENhc2NhZGUgZGVsZXRlcyBpdGVtc1xyXG5cclxuICAgICAgICBjb25zdCB0ZWNoU3RhY2tKc29uID0gZm9ybURhdGEuZ2V0KCd0ZWNoX3N0YWNrX2RhdGEnKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCB0ZWNoU3RhY2tEYXRhID0gdGVjaFN0YWNrSnNvbiA/IEpTT04ucGFyc2UodGVjaFN0YWNrSnNvbikgOiB7fVxyXG5cclxuICAgICAgICBjb25zdCBza2lsbENhdGVnb3JpZXNDcmVhdGUgPSBPYmplY3QuZW50cmllcyh0ZWNoU3RhY2tEYXRhKS5tYXAoKFtjYXRlZ29yeSwgaXRlbXNdOiBbc3RyaW5nLCBhbnldKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGU6IGl0ZW1zLm1hcCgoaXRlbU5hbWU6IHN0cmluZykgPT4gKHsgbmFtZTogaXRlbU5hbWUgfSkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5maWx0ZXIoQm9vbGVhbikgYXMgYW55W11cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjYXQgb2Ygc2tpbGxDYXRlZ29yaWVzQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiLnNraWxsQ2F0ZWdvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IGNhdFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNS4gVXBkYXRlIFByb2plY3RzXHJcbiAgICAgICAgYXdhaXQgZGIucHJvamVjdC5kZWxldGVNYW55KHsgd2hlcmU6IHsgcHJvZmlsZUlkOiBpZCB9IH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzSnNvbiA9IGZvcm1EYXRhLmdldCgncHJvamVjdHNfZGF0YScpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGF0YSA9IHByb2plY3RzSnNvbiA/IEpTT04ucGFyc2UocHJvamVjdHNKc29uKSA6IFtdXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0c0RhdGFbaV1cclxuICAgICAgICAgICAgbGV0IGltYWdlVXJsID0gcC5leGlzdGluZ0ltYWdlVXJsIC8vIFN0YXJ0IHdpdGggZXhpc3RpbmdcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBORVcgdXBsb2FkZWQgZmlsZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW1hZ2UgPSBmb3JtRGF0YS5nZXQoYHByb2plY3RfaW1hZ2VfJHtpfWApIGFzIEZpbGUgfCBudWxsXHJcblxyXG4gICAgICAgICAgICBpZiAocHJvamVjdEltYWdlICYmIHByb2plY3RJbWFnZS5zaXplID4gMCAmJiBwcm9qZWN0SW1hZ2UubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgcHJvamVjdEltYWdlLmFycmF5QnVmZmVyKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkRGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljJywgJ3VwbG9hZHMnKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbWtkaXIodXBsb2FkRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgJHtEYXRlLm5vdygpfS0ke2l9LSR7cHJvamVjdEltYWdlLm5hbWUucmVwbGFjZSgvXFxzL2csICdfJyl9YFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZXBhdGggPSBqb2luKHVwbG9hZERpciwgZmlsZW5hbWUpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB3cml0ZUZpbGUoZmlsZXBhdGgsIGJ1ZmZlcilcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYC91cGxvYWRzLyR7ZmlsZW5hbWV9YFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkYi5wcm9qZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGllbnQ6IHAuY2xpZW50IHx8IChwLnR5cGUgPT09ICdQZXJzb25hbCcgPyAnUGVyc29uYWwgUHJvamVjdCcgOiAnQ29uZmlkZW50aWFsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogcC50eXBlIHx8ICdMYWJvcmFsJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjIHx8ICdObyBjaGFsbGVuZ2UgcHJvdmlkZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICBzb2x1dGlvbjogcC5zb2x1dGlvbiB8fCAnTm8gc29sdXRpb24gZGV0YWlscy4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG91dGNvbWU6IHAub3V0Y29tZSB8fCAnU3VjY2Vzc2Z1bCBkZXBsb3ltZW50LicsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcC51cmwgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlOiBwLnRhZ3MgPyBwLnRhZ3MubWFwKCh0YWc6IHN0cmluZykgPT4gKHsgbmFtZTogdGFnIH0pKSA6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNi4gVXBkYXRlIEVkdWNhdGlvbiAoTmV3KVxyXG4gICAgICAgIGF3YWl0IGRiLmVkdWNhdGlvbi5kZWxldGVNYW55KHsgd2hlcmU6IHsgcHJvZmlsZUlkOiBpZCB9IH0pXHJcbiAgICAgICAgY29uc3QgZWR1Y2F0aW9uSnNvbiA9IGZvcm1EYXRhLmdldCgnZWR1Y2F0aW9uX2RhdGEnKSBhcyBzdHJpbmdcclxuICAgICAgICBjb25zdCBlZHVjYXRpb25EYXRhID0gZWR1Y2F0aW9uSnNvbiA/IEpTT04ucGFyc2UoZWR1Y2F0aW9uSnNvbikgOiBbXVxyXG4gICAgICAgIGNvbnN0IGVkdWNhdGlvbkNyZWF0ZSA9IGVkdWNhdGlvbkRhdGEubWFwKChlZHU6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgcHJvZmlsZUlkOiBpZCxcclxuICAgICAgICAgICAgaW5zdGl0dXRpb246IGVkdS5pbnN0aXR1dGlvbixcclxuICAgICAgICAgICAgZGVncmVlOiBlZHUuZGVncmVlLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IGVkdS5wZXJpb2QsXHJcbiAgICAgICAgICAgIHN0YXR1czogZWR1LnN0YXR1cyB8fCAnQ29tcGxldGVkJ1xyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICBpZiAoZWR1Y2F0aW9uQ3JlYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXdhaXQgZGIuZWR1Y2F0aW9uLmNyZWF0ZU1hbnkoeyBkYXRhOiBlZHVjYXRpb25DcmVhdGUgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDcuIFVwZGF0ZSBDZXJ0aWZpY2F0aW9ucyAoTmV3KVxyXG4gICAgICAgIGF3YWl0IGRiLmNlcnRpZmljYXRpb24uZGVsZXRlTWFueSh7IHdoZXJlOiB7IHByb2ZpbGVJZDogaWQgfSB9KVxyXG4gICAgICAgIGNvbnN0IGNlcnRpZmljYXRpb25zSnNvbiA9IGZvcm1EYXRhLmdldCgnY2VydGlmaWNhdGlvbnNfZGF0YScpIGFzIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGNlcnRpZmljYXRpb25zRGF0YSA9IGNlcnRpZmljYXRpb25zSnNvbiA/IEpTT04ucGFyc2UoY2VydGlmaWNhdGlvbnNKc29uKSA6IFtdXHJcbiAgICAgICAgY29uc3QgY2VydGlmaWNhdGlvbnNDcmVhdGUgPSBjZXJ0aWZpY2F0aW9uc0RhdGEubWFwKChjZXJ0OiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgIHByb2ZpbGVJZDogaWQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBjZXJ0LnRpdGxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcjogY2VydC5wcm92aWRlcixcclxuICAgICAgICAgICAgZGF0ZTogY2VydC5kYXRlLFxyXG4gICAgICAgICAgICB1cmw6IGNlcnQudXJsIHx8ICcnXHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgIGlmIChjZXJ0aWZpY2F0aW9uc0NyZWF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRiLmNlcnRpZmljYXRpb24uY3JlYXRlTWFueSh7IGRhdGE6IGNlcnRpZmljYXRpb25zQ3JlYXRlIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL3Nob3djYXNlJylcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZVNlYXJjaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcclxuICAgIGlmICghcXVlcnkudHJpbSgpKSByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiLnNlYXJjaExvZy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHNlYXJjaCBsb2c6XCIsIGUpXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrUkF3YXNCLDRMQUFBIn0=
}),
"[project]/app/showcase/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShowcasePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ShowcaseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ShowcaseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CreateProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CreateProfileModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$36eb22__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:36eb22 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ShowcasePage() {
    _s();
    const [profiles, setProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredProfiles, setFilteredProfiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showRecent, setShowRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchProfiles = async ()=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClientShowcaseProfiles"])();
        setProfiles(data);
        setFilteredProfiles(data);
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcasePage.useEffect": ()=>{
            fetchProfiles();
            const storedSearches = localStorage.getItem("proCard_recentSearches");
            if (storedSearches) {
                setRecentSearches(JSON.parse(storedSearches));
            }
        }
    }["ShowcasePage.useEffect"], []);
    const handleSearch = (query)=>{
        setSearchQuery(query);
        const lowerQuery = query.toLowerCase();
        if (!query.trim()) {
            setFilteredProfiles(profiles);
            return;
        }
        const filtered = profiles.filter((p)=>p.name?.toLowerCase().includes(lowerQuery) || p.headline?.toLowerCase().includes(lowerQuery) || p.industry?.toLowerCase().includes(lowerQuery) || p.location?.toLowerCase().includes(lowerQuery));
        setFilteredProfiles(filtered);
    };
    const submitSearch = async ()=>{
        if (!searchQuery.trim()) return;
        // Add to history if unique
        const newHistory = [
            searchQuery,
            ...recentSearches.filter((s)=>s !== searchQuery)
        ].slice(0, 5);
        setRecentSearches(newHistory);
        localStorage.setItem("proCard_recentSearches", JSON.stringify(newHistory));
        // Save to DB
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$36eb22__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveSearchQuery"])(searchQuery);
        setShowRecent(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            submitSearch();
        }
    };
    const selectRecent = (term)=>{
        handleSearch(term);
        setShowRecent(false);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#020617] text-white font-mono",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary animate-pulse uppercase tracking-[0.3em] text-xs",
                        children: "Initializing_System..."
                    }, void 0, false, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 81,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/showcase/page.tsx",
                lineNumber: 79,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/showcase/page.tsx",
            lineNumber: 78,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-screen bg-cyan-500/5 blur-[120px] opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-scanline opacity-[0.02] animate-scanline"
                    }, void 0, false, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/showcase/page.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "relative pt-12 pb-8 px-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-visible group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 p-8 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CreateProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateProfileModal"], {
                                    onSuccess: fetchProfiles
                                }, void 0, false, {
                                    fileName: "[project]/app/showcase/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 h-1 rounded-full bg-cyan-500 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 29
                                            }, this),
                                            "System active: Professional Hub"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50",
                                        children: [
                                            "Mas allá de una simple ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 52
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cyan-400 italic font-serif",
                                                children: "Tarjeta."
                                            }, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10",
                                        children: "Ingeniando tu identidad. El estándar de la excelencia. Una tarjeta, infinitas posibilidades."
                                    }, void 0, false, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative max-w-xl group/search",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within/search:text-cyan-400 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "11",
                                                            cy: "11",
                                                            r: "8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/showcase/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 211
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m21 21-4.3-4.3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/showcase/page.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 243
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/showcase/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "w-full bg-slate-950/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono text-sm tracking-wide",
                                                placeholder: "Ingresa un nombre o empresa...",
                                                value: searchQuery,
                                                onChange: (e)=>handleSearch(e.target.value),
                                                onKeyDown: handleKeyDown,
                                                onFocus: ()=>setShowRecent(true),
                                                onBlur: ()=>setTimeout(()=>setShowRecent(false), 200)
                                            }, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 29
                                            }, this),
                                            showRecent && recentSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full mt-2 w-full bg-slate-950 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 py-2 border-b border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest",
                                                        children: "Búsquedas Recientes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/showcase/page.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 37
                                                    }, this),
                                                    recentSearches.map((term, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full text-left px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3",
                                                            onClick: ()=>selectRecent(term),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    className: "opacity-50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "12",
                                                                            r: "10"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/showcase/page.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 246
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                            points: "12 6 12 12 16 14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/showcase/page.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 279
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/showcase/page.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 45
                                                                }, this),
                                                                term
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/showcase/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 41
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full mt-2 left-0 flex gap-4 text-[10px] font-mono text-cyan-500/50 uppercase tracking-widest",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "● Encryption: Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/showcase/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "● Latency: 12ms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/showcase/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "● Node: PRO_CORE_V1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/showcase/page.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-white/5 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-mono text-slate-500 uppercase tracking-widest",
                                        children: [
                                            filteredProfiles.length,
                                            " Profiles_Found // Total: ",
                                            profiles.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 text-[10px] font-mono text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: searchQuery ? "text-cyan-500" : "",
                                                children: [
                                                    "FILTER: ",
                                                    searchQuery ? "ACTIVE" : "NONE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "SORT: IMPACT_DESC"
                                            }, void 0, false, {
                                                fileName: "[project]/app/showcase/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            filteredProfiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-12",
                                children: filteredProfiles.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ShowcaseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShowcaseCard"], {
                                        profile: profile,
                                        onProfileUpdate: fetchProfiles
                                    }, profile.id, false, {
                                        fileName: "[project]/app/showcase/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-20 border border-dashed border-white/5 rounded-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 font-mono text-sm",
                                    children: "NO_MATCHING_DATA_FOUND"
                                }, void 0, false, {
                                    fileName: "[project]/app/showcase/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/showcase/page.tsx",
                                lineNumber: 181,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/showcase/page.tsx",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/showcase/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/showcase/page.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
_s(ShowcasePage, "B0b59EtNe565Fys/7sMkrjlJ4GA=");
_c = ShowcasePage;
var _c;
__turbopack_context__.k.register(_c, "ShowcasePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1656462e._.js.map
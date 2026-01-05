# Portfolio Cyberpunk-Tech: Cristian Angel Puma Villalva
**Fecha de Documentación:** 05 de Enero, 2026

## 🚀 Propósito del Proyecto
Este proyecto es una plataforma de marca personal y portafolio interactivo de alto impacto, diseñado para proyectar autoridad técnica y liderazgo profesional. El objetivo es diferenciar al ingeniero de perfiles genéricos mediante una interfaz inmersiva, datos cuantificables y una narrativa orientada a la resolución de problemas críticos.

---

## 🎨 Identidad Visual y Estética
*   **Tema:** **Cyberpunk / Advanced Tech Architecture**.
*   **Colores:** Fondos en `Slate-950` con acentos en `Cyan-500` (Neon) y `Purple-500`.
*   **UI/UX:** Uso intensivo de glassmorphism, micro-animaciones, grid backgrounds y bordes brillantes.
*   **Portales:** Uso de React Portals para modales que garantizan independencia de capas y z-index perfecto.

---

## 🛠️ Stack Tecnológico
*   **Frontend:** Next.js 14+ (App Router), React, Tailwind CSS.
*   **Backend:** Next.js Server Actions para gestión de datos.
*   **Base de Datos:** SQLite gestionado a través de **Prisma ORM**.
*   **Iconografía:** Lucide React (Premium Tech Set).
*   **Validación y Forms:** FormData con gestión de estados locales para listas dinámicas (Educación, Proyectos, Certificaciones).

---

## 📂 Estructura del Proyecto
*   `/app`: Rutas del sistema y páginas principales.
*   `/components`:
    *   `/sections`: Hero, About, Projects, Stack.
    *   `/layout`: Navbar, Footer.
    *   `CreateProfileModal.tsx` & `EditProfileModal.tsx`: Core logic para el manejo de perfiles dinámicos.
*   `/lib/actions.ts`: Capa de servicios para interactuar con la DB (CRUD de perfiles).
*   `/prisma`: Esquema de datos y migraciones.
*   `/public`: Recursos estáticos (Imágenes, texturas).

---

## 📊 Modelo de Datos (Prisma)
El sistema gestiona una estructura relacional completa para un perfil profesional:
1.  **Profile**: Metadata principal, bio, headline y datos de contacto.
2.  **Attributes**: Stats cuantificables (Ranking, Experiencia, Nivel).
3.  **Experiences**: Historial de especializaciones y roles técnicos.
4.  **SkillCategories**: Arsenal tecnológico categorizado.
5.  **Education & Certifications**: Historial académico y cursos.
6.  **Projects**: Vitrina de operaciones (Challenge, Solution, Outcome) con soporte de imágenes y tags técnicos.

---

## ✨ Funcionalidades Destacadas (Actualizadas al 5 de Enero)
1.  **CRUD Maestro de Perfiles:** Modales multi-paso (7 pasos para Tech, 2 para Legal) con lógica de guardado instantáneo.
2.  **Sistema de Inyección de Datos:** Capacidad de agregar, eliminar y **editar** registros de educación, certificados y proyectos en tiempo real antes del deploy final.
3.  **UI de Alta Visibilidad:** Refinamiento estético completo con campos de entrada de alto contraste (High-Contrast Dark Inputs) para garantizar legibilidad óptima.
4.  **Gestión de Media:** Soporte para carga de imágenes de proyectos y visualización de logos sociales.
5.  **Multi-Industria:** Configuración adaptativa para perfiles enfocados en Tech o Legal.

---

## 🔧 Comandos de Ejecución
*   `npm run dev`: Inicia el servidor de desarrollo.
*   `npx prisma studio`: Visualizador de base de datos.
*   `npx ts-node simple_seed.ts`: Poblamiento rápido de la base de datos con datos de prueba.

---
**Desarrollado para:** Cristian Puma
**Estado:** Fase de Pulido y Refinamiento Estético Final.

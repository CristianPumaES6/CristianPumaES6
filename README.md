# Cristian Puma - Professional Portfolio

> A high-performance personal website designed to demonstrate technical authority and engineering seniority. Built with **Next.js 16**, **Prisma**, and **SQLite**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Framer Motion](https://img.shields.io/badge/Motion-Framer-purple)

## 🚀 Guía de Instalación desde Cero

Sigue esta guía si acabas de clonar el proyecto y no tienes ninguna base de datos configurada.

### 1. Clonar el repositorio
```bash
git clone https://github.com/CristianPumaES6/proCard.git
cd proCard
```

### 2. Instalar dependencias
Instala las librerías necesarias del proyecto:
```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto (al lado de `package.json`).
Copia y pega EXACTAMENTE el siguiente contenido:

```bash
# Archivo: .env
# Configuración local de base de datos SQLite
DATABASE_URL="file:./dev.db"

# URL de la API (en local es localhost:3000)
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 4. Inicializar la Base de Datos (IMPORTANTE)
Como la base de datos no se sube a Git, debes crearla localmente. Ejecuta estos comandos **en orden** en tu terminal:

**Paso A: Generar el cliente de Prisma**
Esto crea los archivos necesarios para que el código entienda tu base de datos.
```bash
npx prisma generate
```

**Paso B: Crear las tablas en la Base de Datos**
Este comando crea el archivo `dev.db` y todas las tablas (Profile, Projects, etc.).
```bash
npx prisma db push
```
> *Nota: Si este comando falla diciendo que DATABASE_URL no existe, asegúrate de haber creado el archivo .env correctamente en el paso 3.*

**Paso C: (Opcional) Cargar datos de prueba**
Si quieres que la base de datos no empiece vacía, ejecuta:
```bash
npx prisma db seed
```

### 5. Iniciar la Aplicación

Ahora puedes levantar el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:3000`

---

## 👤 ¿Cómo funciona el sistema?

### Registrar un nuevo Perfil / Curriculum
1.  Con la app corriendo, ve a **[http://localhost:3000/showcase](http://localhost:3000/showcase)**.
2.  Haz clic en el botón **"Create Profile"** (esquina superior derecha).
3.  Completa el formulario wizard (Información, Stats, Stack, Proyectos).
4.  Al finalizar, tu perfil se guardará en la base de datos local y será visible inmediatamente.

### Solución de Problemas Comunes

**Error: "The table main.Profile does not exist"**
*   **Causa:** No ejecutaste `npx prisma db push`.
*   **Solución:** Detén el servidor (`Ctrl + C`), ejecuta `npx prisma db push` y vuelve a iniciar `npm run dev`.

**Error: "Environment variable not found: DATABASE_URL"**
*   **Causa:** No creaste el archivo `.env` o no tiene el formato correcto.
*   **Solución:** Revisa el Paso 3.

## 🏗 Stack Tecnológico

-   **Frontend**: Next.js 16 (App Router).
-   **Backend**: API Routes Integradas (`app/api/*`).
-   **Base de Datos**: SQLite (archivo local).
-   **ORM**: Prisma.
-   **Estilos**: Tailwind CSS v4.

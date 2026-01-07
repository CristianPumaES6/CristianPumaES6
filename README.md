# Cristian Puma - Professional Portfolio

> A high-performance personal website designed to demonstrate technical authority and engineering seniority. Built with **Next.js 16**, **Prisma**, and **SQLite**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)
![Framer Motion](https://img.shields.io/badge/Motion-Framer-purple)

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ installed.
- Git installed.

### 2. Environment Setup
Create a `.env` file in the root directory. You can copy the structure below:

```bash
# .env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 3. Installation

Install the project dependencies:
```bash
npm install
```

### 4. Database Setup (Prisma + SQLite)

This project uses a local SQLite database using Prisma ORM.

1.  **Generate the Prisma Client**:
    ```bash
    npx prisma generate
    ```

2.  **Push the Schema to Database** (Creates/Updates tables):
    ```bash
    npx prisma db push
    ```

3.  **Seed the Database** (Loads initial data):
    ```bash
    npx prisma db seed
    ```

### 5. Run the Application

Start the local development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

- **Frontend**: `http://localhost:3000`
- **Profiles API**: `http://localhost:3000/api/profiles`

## 🏗 Architecture

-   **Framework**: Next.js 16 (App Router) with Turbopack.
-   **Database**: SQLite with Prisma ORM.
-   **API**: Internal Next.js API Routes (`app/api/*`) for managing profile data.
-   **Styling**: Tailwind CSS v4.
-   **Animations**: Framer Motion for high-performance, GPU-accelerated micro-interactions.
-   **Icons**: Lucide React.
-   **Font**: 'Outfit' (Google Fonts) for a modern, clean aesthetic.

## 📂 Structure

```
/app
  /api            # Internal API routes (Profiles, etc.)
  /page.tsx       # Main Landing Page
/components
  /layout         # Global layout components (Navbar, Footer)
  /sections       # Page-specific sections (Hero, About, Projects, etc.)
  /ui             # Reusable UI primitives (Buttons, Cards)
/lib
  db.ts           # Prisma Database connection instance
  api.ts          # Client-side fetchers for the API
  actions.ts      # Server Actions (Internal Logic)
/prisma
  schema.prisma   # Database Schema Definition
  seed.ts         # Initial Data Loading Script
/public           # Static assets
```

## 🎨 Design Philosophy

-   **Impact First**: The design prioritizes business value and technical achievements over generic buzzwords.
-   **Performance**: Optimized for Core Web Vitals and fast data fetching.
-   **Seniority**: Clean code, typed interfaces, and scalable component architecture.

# 📘 Manual de Producción: Despliegue de ProCard en GitHub Pages

Este manual detalla paso a paso cómo llevar tu proyecto **ProCard** a producción, utilizando la arquitectura de **Frontend Estático (Next.js)** y un **Backend Externo**.

---

## 🛠️ Paso 1: Preparación del Backend
Como GitHub Pages es estático, **no puede ejecutar base de datos (Prisma)**. 
1. Asegúrate de que tu backend esté desplegado en un servidor (ej: Railway, Render, VPS).
2. Obtén la URL pública de tu backend (ej: `https://mi-api-procard.herokuapp.com`).

---

## ⚙️ Paso 2: Configuración del Frontend
Antes de subir el código, debemos ajustar la configuración para el entorno de GitHub.

### 2.1 Variables de Entorno
Crea o edita tu archivo `.env.local` en tu computadora:
```bash
NEXT_PUBLIC_API_URL=https://tu-backend-real.com
```

### 2.2 Ajuste en `next.config.ts`
Si tu proyecto estará en `https://tu-usuario.github.io/nombre-repo/`:
1. Abre `next.config.ts`.
2. Habilita el `basePath`.

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nombre-repo', // IMPORTANTE: Pon aquí el nombre de tu repositorio en GitHub
  images: {
    unoptimized: true,
  },
};
```

---

## 🚀 Paso 3: Subir a GitHub (Repositorio)

1. Crea un nuevo repositorio en GitHub (ej: `procard-v3`).
2. En tu terminal local, inicializa y sube el código:

```bash
git init
git add .
git commit -m "Initial commit for production"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

---

## 🤖 Paso 4: Configurar Despliegue Automático (Recomendado)
Esto hará que cada vez que hagas un cambio, GitHub Pages se actualice solo.

1. En tu repositorio de GitHub, ve a **Settings > Secrets and variables > Actions**.
2. Haz clic en **New repository secret**.
3. Nombre: `NEXT_PUBLIC_API_URL`
4. Valor: La URL de tu backend.
5. Crea el archivo `.github/workflows/deploy.yml` en tu proyecto (ver código abajo) y súbelo a GitHub.

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build with Next.js
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## ⚠️ Paso 5: El truco del 404 (Crucial)
GitHub Pages no entiende las rutas internas de Next.js al recargar (error 404).

**Si usas el despliegue automático (Paso 4):**
Modifica el script de build en tu `package.json` para que genere el archivo 404:
```json
"scripts": {
  "build": "next build && cp out/index.html out/404.html"
}
```
*(Nota: Si estás en Windows localmente, `cp` no funcionará, pero en GitHub Actions que usa Linux, sí.)*

---

## 🏁 Paso 6: Activar en GitHub
1. Ve a tu repositorio en GitHub.
2. **Settings > Pages**.
3. En **Build and deployment > Source**, asegúrate que esté seleccionado **GitHub Actions**.
4. ¡Listo! En unos minutos tu sitio estará en vivo.

---

## 🔍 Resumen Checklist de Errores:
- [ ] ¿Puse el nombre correcto en `basePath`?
- [ ] ¿Añadí el secreto `NEXT_PUBLIC_API_URL` en GitHub?
- [ ] ¿Tengo el archivo `ProfileClientView.tsx` separado (ya lo hicimos)?
- [ ] ¿El backend permite CORS desde mi dominio de GitHub?

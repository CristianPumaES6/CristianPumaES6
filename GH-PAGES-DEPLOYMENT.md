# 🚀 Despliegue en GitHub Pages: Deplooy from a Branch

Existen dos formas de desplegar en GitHub Pages. Según tu petición, nos enfocaremos en la configuración para **"Deploy from a branch"**, que es el método clásico y muy efectivo para proyectos que generan archivos estáticos (`output: export`).

---

## 🏗️ 1. Configuración de Next.js (`next.config.ts`)

Para que GitHub Pages sirva correctamente tus archivos, necesitamos dos ajustes críticos:

1.  **`output: 'export'`**: Obliga a Next.js a generar archivos `.html`, `.css` y `.js` estáticos.
2.  **`basePath`**: Si tu sitio no está en el dominio raíz (ej: `usuario.github.io/mi-proyecto/`), debes indicar el nombre del repositorio.

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/CristianPumaES6', // Nombre detectado de tu repositorio
  images: {
    unoptimized: true, // Requerido para GH Pages
  },
};

export default nextConfig;
```

---

## 🛠️ 2. Método Recomendado: Usando el paquete `gh-pages`

Este método es el más sencillo porque automatiza el proceso de "limpiar el build y subirlo a la rama de despliegue".

### Paso A: Instalar la herramienta
Ejecuta en tu terminal:
```bash
npm install gh-pages --save-dev
```

### Paso B: Configurar scripts en `package.json`
Añade estas líneas a tu sección de `"scripts"`:

```json
"scripts": {
  "build": "next build",
  "predeploy": "npm run build && touch out/.nojekyll",
  "deploy": "gh-pages -d out -t true"
}
```
*   **`.nojekyll`**: Es vital para que GitHub no ignore las carpetas que empiezan por `_` (como las de Next.js).
*   **`-t true`**: Mantiene los archivos ocultos (dotfiles).

### Paso C: ¡Desplegar!
Simplemente ejecuta:
```bash
npm run deploy
```
Esto creará (o actualizará) automáticamente una rama llamada `gh-pages` en tu repositorio con solo los archivos listos para producción.

---

## ⚙️ 3. Configuración en el Panel de GitHub

Una vez que hayas ejecutado el comando anterior, ve a tu repositorio en la web de GitHub:

1.  Ve a **Settings** (Ajustes).
2.  En el menú lateral, selecciona **Pages**.
3.  En la sección **Build and deployment > Source**, debe decir: **"Deploy from a branch"**.
4.  En **Branch**, selecciona la rama `gh-pages` y la carpeta `/(root)`.
5.  Haz clic en **Save**.

---

## ⚠️ 4. Solución al Error 404 (Al recargar la página)

GitHub Pages no sabe manejar rutas dinámicas al recargar. Para solucionar esto en el modo de "Branch", el truco más efectivo es duplicar el `index.html` como `404.html`.

Actualiza tu script de `predeploy` en `package.json`:

```json
"predeploy": "npm run build && cp out/index.html out/404.html && touch out/.nojekyll"
```
*(Nota: Si usas Windows, usa `copy` en lugar de `cp`, o simplemente hazlo manualmente en el flujo de build).*

---

## 🎯 Resumen de Recomendación

| Característica | Branch (gh-pages) | GitHub Actions |
| :--- | :--- | :--- |
| **Facilidad** | ⭐⭐⭐⭐⭐ (Muy fácil) | ⭐⭐⭐ (Media) |
| **Velocidad** | Rápido (Local build) | Lento (Cloud build) |
| **Control** | Tú decides cuándo subir | Se sube al hacer git push |
| **Recomendación** | **Ideal para pruebas rápidas o si no quieres configurar YAML.** | **Ideal para equipos y CI/CD profesional.** |

**Mi consejo:** Empieza con el método de **Branch** (paquete `gh-pages`) para ver tu sitio en vivo rápidamente, ya que te da control total desde tu terminal local.

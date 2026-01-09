# La tabla Profile no existe (Error P2021)

Ya superaste el problema de versión, pero ahora hay un nuevo error: **Base de datos vacía**.
`The table main.Profile does not exist in the current database.`

Esto es normal porque al subir el proyecto al servidor, se creó una base de datos nueva (`dev.db`) pero está vacía, no tiene tablas ni datos.

### Pasos para crear las tablas y datos iniciales en el servidor:

1.  **Crear las tablas ("Migración"):**
    Este comando le dice a Prisma que cree la estructura (tablas) en tu base de datos nueva.
    ```bash
    npx prisma db push
    ```

2.  **(Opcional) Llenar con datos de prueba (Seed):**
    Si quieres que tenga algunos perfiles de ejemplo:
    ```bash
    npx prisma db seed
    ```

3.  **Reiniciar el servidor:**
    ```bash
    node run-dev.js
    ```

¡Con esto ya deberías ver la aplicación funcionando!

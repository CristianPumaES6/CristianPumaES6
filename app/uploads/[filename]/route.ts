import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Esta ruta intercepta las llamadas a /uploads/[filename]
// y sirve el archivo directamente desde el disco servidor.
// Esto soluciona el problema de que Next.js no detecte archivos creados después del build.

export async function GET(
    request: NextRequest,
    { params }: { params: { filename: string } }
) {
    const filename = params.filename;

    // 1. Definir la ruta real en el disco
    // process.cwd() apunta a la raíz del proyecto
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

    // 2. Verificar si existe
    if (!fs.existsSync(filePath)) {
        return new NextResponse('File not found', { status: 404 });
    }

    // 3. Leer el archivo
    try {
        const fileBuffer = fs.readFileSync(filePath);

        // 4. Determinar Content-Type básico
        const ext = path.extname(filename).toLowerCase();
        let contentType = 'application/octet-stream';

        if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.svg') contentType = 'image/svg+xml';
        else if (ext === '.webp') contentType = 'image/webp';
        else if (ext === '.pdf') contentType = 'application/pdf';

        // 5. Devolver la imagen
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        });
    } catch (error) {
        console.error('Error serving file:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

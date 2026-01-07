import { PrismaClient } from '@prisma/client'

// Ensure environment variables are loaded
if (!process.env.DATABASE_URL) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('dotenv').config();
}


const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
        datasources: {
            db: {
                url: process.env.DATABASE_URL || "file:./dev.db",
            },
        },
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

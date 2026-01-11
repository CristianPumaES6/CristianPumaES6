const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const profiles = await prisma.profile.findMany({
            select: { id: true, name: true, slug: true }
        });
        console.log(JSON.stringify(profiles, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();

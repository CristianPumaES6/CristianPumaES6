
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Manual Seeding Start')

    try {


        console.log('Manual Seeding Complete')
    } catch (e) {
        console.error('Seed Error:', e)
    }
}

main()


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Manual Seeding Start')

    try {
        await prisma.profile.deleteMany()

        // Nayeli
        await prisma.profile.create({
            data: {
                industry: "Legal",
                name: "Nayeli Ariana Caballa Rejas",
                headline: "Estudiante de Derecho",
                location: "Santa Anita, Lima",
                bio: "Estudiante de Derecho en la USMP perteneciente al tercio superior.",
                email: "CABALLAARIANA4@GMAIL.COM",
                phone: "901 267 796",
                attributes: {
                    create: [
                        { label: "Mérito", value: "Tercio Superior" },
                        { label: "Ciclo", value: "Noveno" }
                    ]
                },
                socials: {
                    create: []
                }
            }
        })

        // Cristian
        await prisma.profile.create({
            data: {
                industry: "Tech",
                name: "Cristian Angel Puma Villalva",
                headline: "Senior Software Architect",
                location: "Lima, Peru",
                bio: "Expert in OutSystems and Next.js.",
                email: "cristian@example.com",
                phone: "123456789",
                attributes: {
                    create: [
                        { label: "Ranking", value: "#339" },
                        { label: "Stack", value: "Full Stack" }
                    ]
                }
            }
        })

        console.log('Manual Seeding Complete')
    } catch (e) {
        console.error('Seed Error:', e)
    }
}

main()


import { db } from "./lib/db"

async function main() {
    const profile = await db.profile.findFirst({
        include: {
            education: true,
            projects: {
                include: {
                    images: true
                }
            }
        }
    })
    console.log("EDUCATION RECORDS:", JSON.stringify(profile?.education, null, 2))
    console.log("PROJECTS:", JSON.stringify(profile?.projects, null, 2))
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await db.$disconnect()
    })

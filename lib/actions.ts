'use server'

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"

export async function getShowcaseProfiles() {
    try {
        const profiles = await db.profile.findMany({
            include: {
                attributes: true,
                socials: true,
                experiences: true,
                projects: {
                    include: { tags: true }
                },
                skillCategories: {
                    include: { items: true }
                },
                education: true,
                certifications: true
            }
        })
        return profiles
    } catch (error) {
        console.error("Failed to fetch profiles:", error)
        return []
    }
}

export async function getProfileById(id: string) {
    try {
        const profile = await db.profile.findUnique({
            where: { id },
            include: {
                attributes: true,
                socials: true,
                experiences: {
                    include: { highlights: true }
                },
                projects: {
                    include: { tags: true }
                },
                skillCategories: {
                    include: { items: true }
                },
                education: true,
                certifications: true
            }
        })
        return profile
    } catch (error) {
        console.error("Failed to fetch profile:", error)
        return null
    }
}

export async function createProfile(formData: FormData) {
    const rawData = {
        name: formData.get('name') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        industry: formData.get('industry') as string,
        headline: formData.get('headline') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        location: formData.get('location') as string,
        bio: formData.get('bio') as string,
    }

    try {
        // Extract Specialties (Step 3)
        const specialties = formData.getAll('specialties') as string[]

        // Extract Tech Stack (Step 4)
        const techStackJson = formData.get('tech_stack_data') as string
        const techStackData = techStackJson ? JSON.parse(techStackJson) : {}

        const skillCategoriesCreate = Object.entries(techStackData).map(([category, items]: [string, any]) => {
            // items is string[]
            if (!items || items.length === 0) return null
            return {
                name: category,
                items: {
                    create: items.map((itemName: string) => ({ name: itemName }))
                }
            }
        }).filter(Boolean) as any[]

        // Extract Dynamic Stats (Step 2)
        const stats: any[] = []

        // Helper to push if exists
        const pushStat = (key: string, label: string) => {
            const value = formData.get(key) as string
            if (value) stats.push({ label, value })
        }

        if (rawData.industry === 'Tech') {
            pushStat('stat_ranking', 'RANKING')
            pushStat('stat_experience', 'EXPERIENCIA')
            pushStat('stat_level', 'LEVEL')
            pushStat('stat_stack', 'STACK')
        } else {
            pushStat('stat_ciclo', 'CICLO')
            pushStat('stat_merito', 'MÉRITO')
            pushStat('stat_disponibilidad', 'DISPONIBILIDAD')
        }

        // Extract Social Links
        const socialLinks: any[] = []
        const extractSocial = (platform: string, iconName: string) => {
            const url = formData.get(`social_${platform.toLowerCase()}`) as string
            if (url) {
                socialLinks.push({ platform, url, iconName })
            }
        }
        extractSocial('LinkedIn', 'Linkedin')
        extractSocial('GitHub', 'Github')
        extractSocial('YouTube', 'Youtube')
        extractSocial('Email', 'Mail')
        extractSocial('TikTok', 'Tiktok')

        // Prepare experiences (create Specialization items)
        const experienceCreates = specialties.map(spec => {
            const [title, desc] = spec.split('|');
            return {
                title: title,
                organization: 'Core Competency',
                period: 'Continuous',
                type: 'Specialization',
                highlights: {
                    create: [{ text: desc }]
                }
            }
        })

        // Handles Multiple Projects
        const projectsJson = formData.get('projects_data') as string
        const projectsData = projectsJson ? JSON.parse(projectsJson) : []
        const projectsCreate = []

        for (let i = 0; i < projectsData.length; i++) {
            const p = projectsData[i]
            let imageUrl: string | null = null

            // Check for uploaded file corresponding to this index
            const projectImage = formData.get(`project_image_${i}`) as File | null

            if (projectImage && projectImage.size > 0 && projectImage.name !== 'undefined') {
                const bytes = await projectImage.arrayBuffer()
                const buffer = Buffer.from(bytes)
                const uploadDir = join(process.cwd(), 'public', 'uploads')
                await mkdir(uploadDir, { recursive: true })
                const filename = `${Date.now()}-${i}-${projectImage.name.replace(/\s/g, '_')}`
                const filepath = join(uploadDir, filename)
                await writeFile(filepath, buffer)
                imageUrl = `/uploads/${filename}`
            }

            projectsCreate.push({
                title: p.title,
                client: p.client || (p.type === 'Personal' ? 'Personal Project' : 'Confidential'),
                type: p.type || 'Laboral',
                description: p.desc || 'No challenge provided.',
                solution: p.solution || 'No solution details.',
                outcome: p.outcome || 'Successful deployment.',
                imageUrl: imageUrl,
                url: p.url || '',
                highlight: true,
                tags: {
                    create: p.tags ? p.tags.map((tag: string) => ({ name: tag })) : []
                }
            })
        }

        // Handle Education (New)
        const educationJson = formData.get('education_data') as string
        const educationData = educationJson ? JSON.parse(educationJson) : []
        const educationCreate = educationData.map((edu: any) => ({
            institution: edu.institution,
            degree: edu.degree,
            period: edu.period,
            status: edu.status || 'Completed'
        }))

        await db.profile.create({
            data: {
                ...rawData,
                attributes: {
                    create: stats
                },
                experiences: {
                    create: experienceCreates
                },
                projects: {
                    create: projectsCreate
                },
                skillCategories: {
                    create: skillCategoriesCreate
                },
                education: {
                    create: educationCreate
                },
                certifications: {
                    create: (function () {
                        const certsJson = formData.get('certifications_data') as string;
                        const certsData = certsJson ? JSON.parse(certsJson) : [];
                        return certsData.map((c: any) => ({
                            title: c.title,
                            provider: c.provider,
                            date: c.date,
                            url: c.url || ''
                        }));
                    })()
                },
                socials: {
                    create: socialLinks
                }
            }
        })
        revalidatePath('/showcase')
        return { success: true }
    } catch (e) {
        console.error(e)
        return { success: false }
    }
}

export async function updateProfile(id: string, formData: FormData) {
    const rawData = {
        name: formData.get('name') as string,
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        industry: formData.get('industry') as string,
        headline: formData.get('headline') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        location: formData.get('location') as string,
        bio: formData.get('bio') as string,
    }

    try {
        // 1. Update Basic Info
        await db.profile.update({
            where: { id },
            data: rawData
        })

        // 2. Update Attributes (Stats)
        await db.attribute.deleteMany({ where: { profileId: id } })

        const stats: any[] = []
        const pushStat = (key: string, label: string) => {
            const value = formData.get(key) as string
            if (value) stats.push({ label, value, profileId: id })
        }

        // Update Socials
        await db.social.deleteMany({ where: { profileId: id } })
        const socialLinks: any[] = []
        const extractSocial = (platform: string, iconName: string) => {
            const url = formData.get(`social_${platform.toLowerCase()}`) as string
            if (url) {
                socialLinks.push({ platform, url, iconName, profileId: id })
            }
        }
        extractSocial('LinkedIn', 'Linkedin')
        extractSocial('GitHub', 'Github')
        extractSocial('YouTube', 'Youtube')
        extractSocial('Email', 'Mail')
        extractSocial('TikTok', 'Tiktok')

        if (socialLinks.length > 0) {
            await db.social.createMany({ data: socialLinks })
        }

        if (rawData.industry === 'Tech') {
            pushStat('stat_ranking', 'RANKING')
            pushStat('stat_experience', 'EXPERIENCIA')
            pushStat('stat_level', 'LEVEL')
            pushStat('stat_stack', 'STACK')
        } else {
            pushStat('stat_ciclo', 'CICLO')
            pushStat('stat_merito', 'MÉRITO')
            pushStat('stat_disponibilidad', 'DISPONIBILIDAD')
        }

        if (stats.length > 0) {
            await db.attribute.createMany({ data: stats })
        }

        // 3. Update Specialties
        await db.experience.deleteMany({
            where: {
                profileId: id,
                type: 'Specialization'
            }
        })

        const specialties = formData.getAll('specialties') as string[]
        for (const spec of specialties) {
            const [title, desc] = spec.split('|')
            await db.experience.create({
                data: {
                    profileId: id,
                    title,
                    organization: 'Core Competency',
                    period: 'Continuous',
                    type: 'Specialization',
                    highlights: {
                        create: [{ text: desc }]
                    }
                }
            })
        }

        // 4. Update Tech Stack
        await db.skillCategory.deleteMany({ where: { profileId: id } }) // Cascade deletes items

        const techStackJson = formData.get('tech_stack_data') as string
        const techStackData = techStackJson ? JSON.parse(techStackJson) : {}

        const skillCategoriesCreate = Object.entries(techStackData).map(([category, items]: [string, any]) => {
            if (!items || items.length === 0) return null
            return {
                profileId: id,
                name: category,
                items: {
                    create: items.map((itemName: string) => ({ name: itemName }))
                }
            }
        }).filter(Boolean) as any[]

        for (const cat of skillCategoriesCreate) {
            await db.skillCategory.create({
                data: cat
            })
        }

        // 5. Update Projects
        await db.project.deleteMany({ where: { profileId: id } })

        const projectsJson = formData.get('projects_data') as string
        const projectsData = projectsJson ? JSON.parse(projectsJson) : []

        for (let i = 0; i < projectsData.length; i++) {
            const p = projectsData[i]
            let imageUrl = p.existingImageUrl // Start with existing

            // Check for NEW uploaded file
            const projectImage = formData.get(`project_image_${i}`) as File | null

            if (projectImage && projectImage.size > 0 && projectImage.name !== 'undefined') {
                const bytes = await projectImage.arrayBuffer()
                const buffer = Buffer.from(bytes)
                const uploadDir = join(process.cwd(), 'public', 'uploads')
                await mkdir(uploadDir, { recursive: true })
                const filename = `${Date.now()}-${i}-${projectImage.name.replace(/\s/g, '_')}`
                const filepath = join(uploadDir, filename)
                await writeFile(filepath, buffer)
                imageUrl = `/uploads/${filename}`
            }

            await db.project.create({
                data: {
                    profileId: id,
                    title: p.title,
                    client: p.client || (p.type === 'Personal' ? 'Personal Project' : 'Confidential'),
                    type: p.type || 'Laboral',
                    description: p.desc || 'No challenge provided.',
                    solution: p.solution || 'No solution details.',
                    outcome: p.outcome || 'Successful deployment.',
                    imageUrl: imageUrl,
                    url: p.url || '',
                    highlight: true,
                    tags: {
                        create: p.tags ? p.tags.map((tag: string) => ({ name: tag })) : []
                    }
                }
            })
        }

        // 6. Update Education (New)
        await db.education.deleteMany({ where: { profileId: id } })
        const educationJson = formData.get('education_data') as string
        const educationData = educationJson ? JSON.parse(educationJson) : []
        const educationCreate = educationData.map((edu: any) => ({
            profileId: id,
            institution: edu.institution,
            degree: edu.degree,
            period: edu.period,
            status: edu.status || 'Completed'
        }))

        if (educationCreate.length > 0) {
            await db.education.createMany({ data: educationCreate })
        }

        // 7. Update Certifications (New)
        await db.certification.deleteMany({ where: { profileId: id } })
        const certificationsJson = formData.get('certifications_data') as string
        const certificationsData = certificationsJson ? JSON.parse(certificationsJson) : []
        const certificationsCreate = certificationsData.map((cert: any) => ({
            profileId: id,
            title: cert.title,
            provider: cert.provider,
            date: cert.date,
            url: cert.url || ''
        }))

        if (certificationsCreate.length > 0) {
            await db.certification.createMany({ data: certificationsCreate })
        }

        revalidatePath('/showcase')
        return { success: true }
    } catch (e) {
        console.error(e)
        return { success: false }
    }
}

export async function saveSearchQuery(query: string) {
    if (!query.trim()) return;
    try {
        await db.searchLog.create({
            data: {
                query: query
            }
        })
    } catch (e) {
        console.error("Failed to save search log:", e)
    }
}

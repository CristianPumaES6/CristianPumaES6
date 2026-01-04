'use server'

import { db } from "@/lib/db"

export async function getShowcaseProfiles() {
    try {
        const profiles = await db.profile.findMany({
            include: {
                attributes: true,
                socials: true
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

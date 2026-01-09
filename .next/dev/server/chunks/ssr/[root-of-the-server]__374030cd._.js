module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
// Ensure environment variables are loaded
if (!process.env.DATABASE_URL) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    __turbopack_context__.r("[project]/node_modules/dotenv/lib/main.js [app-rsc] (ecmascript)").config();
}
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: [
        'query'
    ],
    datasources: {
        db: {
            url: process.env.DATABASE_URL || "file:./dev.db"
        }
    }
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"003834cbb6126486a3e81a037e52ced3a7efb063db":"getShowcaseProfiles","40558b9a8bd24d81935fac512185f92bde6d4b671c":"getProfileById","4060a16bfa28b6104b573839aef1f833a93faef91d":"createProfile","40c02522cafd7dbe73d64878a89678df22ac9f4fe1":"saveSearchQuery","6041aeb58cea8056b3bf57a6b610edeb83815dd1ef":"updateProfile"},"",""] */ __turbopack_context__.s([
    "createProfile",
    ()=>createProfile,
    "getProfileById",
    ()=>getProfileById,
    "getShowcaseProfiles",
    ()=>getShowcaseProfiles,
    "saveSearchQuery",
    ()=>saveSearchQuery,
    "updateProfile",
    ()=>updateProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function getShowcaseProfiles() {
    try {
        const profiles = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].profile.findMany({
            include: {
                attributes: true,
                socials: true,
                experiences: true,
                projects: {
                    include: {
                        tags: true
                    }
                },
                skillCategories: {
                    include: {
                        items: true
                    }
                },
                education: true,
                certifications: true
            }
        });
        return profiles;
    } catch (error) {
        console.error("Failed to fetch profiles:", error);
        return [];
    }
}
async function getProfileById(id) {
    try {
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].profile.findUnique({
            where: {
                id
            },
            include: {
                attributes: true,
                socials: true,
                experiences: {
                    include: {
                        highlights: true
                    }
                },
                projects: {
                    include: {
                        tags: true
                    }
                },
                skillCategories: {
                    include: {
                        items: true
                    }
                },
                education: true,
                certifications: true
            }
        });
        return profile;
    } catch (error) {
        console.error("Failed to fetch profile:", error);
        return null;
    }
}
async function createProfile(formData) {
    const rawData = {
        name: formData.get('name'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        industry: formData.get('industry'),
        headline: formData.get('headline'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        location: formData.get('location'),
        bio: formData.get('bio')
    };
    try {
        // Extract Specialties (Step 3)
        const specialties = formData.getAll('specialties');
        // Extract Tech Stack (Step 4)
        const techStackJson = formData.get('tech_stack_data');
        const techStackData = techStackJson ? JSON.parse(techStackJson) : {};
        const skillCategoriesCreate = Object.entries(techStackData).map(([category, items])=>{
            // items is string[]
            if (!items || items.length === 0) return null;
            return {
                name: category,
                items: {
                    create: items.map((itemName)=>({
                            name: itemName
                        }))
                }
            };
        }).filter(Boolean);
        // Extract Dynamic Stats (Step 2)
        const stats = [];
        // Helper to push if exists
        const pushStat = (key, label)=>{
            const value = formData.get(key);
            if (value) stats.push({
                label,
                value
            });
        };
        if (rawData.industry === 'Tech') {
            pushStat('stat_ranking', 'RANKING');
            pushStat('stat_experience', 'EXPERIENCIA');
            pushStat('stat_level', 'LEVEL');
            pushStat('stat_stack', 'STACK');
        } else {
            pushStat('stat_ciclo', 'CICLO');
            pushStat('stat_merito', 'MÉRITO');
            pushStat('stat_disponibilidad', 'DISPONIBILIDAD');
        }
        // Extract Social Links
        const socialLinks = [];
        const extractSocial = (platform, iconName)=>{
            const url = formData.get(`social_${platform.toLowerCase()}`);
            if (url) {
                socialLinks.push({
                    platform,
                    url,
                    iconName
                });
            }
        };
        extractSocial('LinkedIn', 'Linkedin');
        extractSocial('GitHub', 'Github');
        extractSocial('YouTube', 'Youtube');
        extractSocial('Email', 'Mail');
        extractSocial('TikTok', 'Tiktok');
        // Prepare experiences (create Specialization items)
        const experienceCreates = specialties.map((spec)=>{
            const [title, desc] = spec.split('|');
            return {
                title: title,
                organization: 'Core Competency',
                period: 'Continuous',
                type: 'Specialization',
                highlights: {
                    create: [
                        {
                            text: desc
                        }
                    ]
                }
            };
        });
        // Handles Multiple Projects
        const projectsJson = formData.get('projects_data');
        const projectsData = projectsJson ? JSON.parse(projectsJson) : [];
        const projectsCreate = [];
        for(let i = 0; i < projectsData.length; i++){
            const p = projectsData[i];
            let imageUrl = null;
            // Check for uploaded file corresponding to this index
            const projectImage = formData.get(`project_image_${i}`);
            if (projectImage && projectImage.size > 0 && projectImage.name !== 'undefined') {
                const bytes = await projectImage.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const uploadDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'public', 'uploads');
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
                    recursive: true
                });
                const filename = `${Date.now()}-${i}-${projectImage.name.replace(/\s/g, '_')}`;
                const filepath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(uploadDir, filename);
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filepath, buffer);
                imageUrl = `/uploads/${filename}`;
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
                    create: p.tags ? p.tags.map((tag)=>({
                            name: tag
                        })) : []
                }
            });
        }
        // Handle Education (New)
        const educationJson = formData.get('education_data');
        const educationData = educationJson ? JSON.parse(educationJson) : [];
        const educationCreate = educationData.map((edu)=>({
                institution: edu.institution,
                degree: edu.degree,
                period: edu.period,
                status: edu.status || 'Completed'
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].profile.create({
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
                    create: function() {
                        const certsJson = formData.get('certifications_data');
                        const certsData = certsJson ? JSON.parse(certsJson) : [];
                        return certsData.map((c)=>({
                                title: c.title,
                                provider: c.provider,
                                date: c.date,
                                url: c.url || ''
                            }));
                    }()
                },
                socials: {
                    create: socialLinks
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/showcase');
        return {
            success: true
        };
    } catch (e) {
        console.error(e);
        return {
            success: false
        };
    }
}
async function updateProfile(id, formData) {
    const rawData = {
        name: formData.get('name'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        industry: formData.get('industry'),
        headline: formData.get('headline'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        location: formData.get('location'),
        bio: formData.get('bio')
    };
    try {
        // 1. Update Basic Info
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].profile.update({
            where: {
                id
            },
            data: rawData
        });
        // 2. Update Attributes (Stats)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].attribute.deleteMany({
            where: {
                profileId: id
            }
        });
        const stats = [];
        const pushStat = (key, label)=>{
            const value = formData.get(key);
            if (value) stats.push({
                label,
                value,
                profileId: id
            });
        };
        // Update Socials
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].social.deleteMany({
            where: {
                profileId: id
            }
        });
        const socialLinks = [];
        const extractSocial = (platform, iconName)=>{
            const url = formData.get(`social_${platform.toLowerCase()}`);
            if (url) {
                socialLinks.push({
                    platform,
                    url,
                    iconName,
                    profileId: id
                });
            }
        };
        extractSocial('LinkedIn', 'Linkedin');
        extractSocial('GitHub', 'Github');
        extractSocial('YouTube', 'Youtube');
        extractSocial('Email', 'Mail');
        extractSocial('TikTok', 'Tiktok');
        if (socialLinks.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].social.createMany({
                data: socialLinks
            });
        }
        if (rawData.industry === 'Tech') {
            pushStat('stat_ranking', 'RANKING');
            pushStat('stat_experience', 'EXPERIENCIA');
            pushStat('stat_level', 'LEVEL');
            pushStat('stat_stack', 'STACK');
        } else {
            pushStat('stat_ciclo', 'CICLO');
            pushStat('stat_merito', 'MÉRITO');
            pushStat('stat_disponibilidad', 'DISPONIBILIDAD');
        }
        if (stats.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].attribute.createMany({
                data: stats
            });
        }
        // 3. Update Specialties
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].experience.deleteMany({
            where: {
                profileId: id,
                type: 'Specialization'
            }
        });
        const specialties = formData.getAll('specialties');
        for (const spec of specialties){
            const [title, desc] = spec.split('|');
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].experience.create({
                data: {
                    profileId: id,
                    title,
                    organization: 'Core Competency',
                    period: 'Continuous',
                    type: 'Specialization',
                    highlights: {
                        create: [
                            {
                                text: desc
                            }
                        ]
                    }
                }
            });
        }
        // 4. Update Tech Stack
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].skillCategory.deleteMany({
            where: {
                profileId: id
            }
        }); // Cascade deletes items
        const techStackJson = formData.get('tech_stack_data');
        const techStackData = techStackJson ? JSON.parse(techStackJson) : {};
        const skillCategoriesCreate = Object.entries(techStackData).map(([category, items])=>{
            if (!items || items.length === 0) return null;
            return {
                profileId: id,
                name: category,
                items: {
                    create: items.map((itemName)=>({
                            name: itemName
                        }))
                }
            };
        }).filter(Boolean);
        for (const cat of skillCategoriesCreate){
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].skillCategory.create({
                data: cat
            });
        }
        // 5. Update Projects
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].project.deleteMany({
            where: {
                profileId: id
            }
        });
        const projectsJson = formData.get('projects_data');
        const projectsData = projectsJson ? JSON.parse(projectsJson) : [];
        for(let i = 0; i < projectsData.length; i++){
            const p = projectsData[i];
            let imageUrl = p.existingImageUrl // Start with existing
            ;
            // Check for NEW uploaded file
            const projectImage = formData.get(`project_image_${i}`);
            if (projectImage && projectImage.size > 0 && projectImage.name !== 'undefined') {
                const bytes = await projectImage.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const uploadDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'public', 'uploads');
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
                    recursive: true
                });
                const filename = `${Date.now()}-${i}-${projectImage.name.replace(/\s/g, '_')}`;
                const filepath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(uploadDir, filename);
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filepath, buffer);
                imageUrl = `/uploads/${filename}`;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].project.create({
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
                        create: p.tags ? p.tags.map((tag)=>({
                                name: tag
                            })) : []
                    }
                }
            });
        }
        // 6. Update Education (New)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].education.deleteMany({
            where: {
                profileId: id
            }
        });
        const educationJson = formData.get('education_data');
        const educationData = educationJson ? JSON.parse(educationJson) : [];
        const educationCreate = educationData.map((edu)=>({
                profileId: id,
                institution: edu.institution,
                degree: edu.degree,
                period: edu.period,
                status: edu.status || 'Completed'
            }));
        if (educationCreate.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].education.createMany({
                data: educationCreate
            });
        }
        // 7. Update Certifications (New)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].certification.deleteMany({
            where: {
                profileId: id
            }
        });
        const certificationsJson = formData.get('certifications_data');
        const certificationsData = certificationsJson ? JSON.parse(certificationsJson) : [];
        const certificationsCreate = certificationsData.map((cert)=>({
                profileId: id,
                title: cert.title,
                provider: cert.provider,
                date: cert.date,
                url: cert.url || ''
            }));
        if (certificationsCreate.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].certification.createMany({
                data: certificationsCreate
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/showcase');
        return {
            success: true
        };
    } catch (e) {
        console.error(e);
        return {
            success: false
        };
    }
}
async function saveSearchQuery(query) {
    if (!query.trim()) return;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].searchLog.create({
            data: {
                query: query
            }
        });
    } catch (e) {
        console.error("Failed to save search log:", e);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getShowcaseProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    saveSearchQuery
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getShowcaseProfiles, "003834cbb6126486a3e81a037e52ced3a7efb063db", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProfileById, "40558b9a8bd24d81935fac512185f92bde6d4b671c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProfile, "4060a16bfa28b6104b573839aef1f833a93faef91d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfile, "6041aeb58cea8056b3bf57a6b610edeb83815dd1ef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveSearchQuery, "40c02522cafd7dbe73d64878a89678df22ac9f4fe1", null);
}),
"[project]/.next-internal/server/app/showcase/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/showcase/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40c02522cafd7dbe73d64878a89678df22ac9f4fe1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveSearchQuery"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$showcase$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/showcase/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__374030cd._.js.map
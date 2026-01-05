'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { updateClientProfile } from '@/lib/api'
import { X, Pencil, Server, Scale, Briefcase, Link2, ShieldAlert, Database, Smartphone, Users, Building, FolderGit2, Plus, Trash2, Image as ImageIcon, CheckCircle2, GraduationCap, Award, ChevronDown, ChevronUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
// ... (imports remain)

const TECH_SPECIALTIES = [
    { id: '1', title: 'Arquitecturas Escalables', description: 'Diseño de sistemas distribuidos capaces de manejar alta concurrencia.', icon: Briefcase },
    { id: '2', title: 'Integraciones Complejas', description: 'Conexión de ecosistemas mediante APIs REST/SOAP.', icon: Link2 },
    { id: '3', title: 'Sistemas Críticos', description: 'Software para entornos donde el fallo no es una opción.', icon: ShieldAlert },
    { id: '4', title: 'Optimización de Datos', description: 'Modelado y tuning de bases de datos masivas.', icon: Database },
    { id: '5', title: 'Mobile & Offline', description: 'Apps que funcionan sin conexión en entornos remotos.', icon: Smartphone },
    { id: '6', title: 'Liderazgo Técnico', description: 'Gestión de equipos bajo metodologías ágiles (Scrum).', icon: Users },
]




const TECH_STACK_CATEGORIES = {
    "Backend & Arquitectura": [
        "Node.js", "NestJS", "Express", "Sequelize", "OutSystems", "REST/SOAP", "Microservices", "Java", "C#", "Python", "Go"
    ],
    "Bases de Datos": [
        "PostgreSQL", "SQL Server", "Oracle", "MongoDB", "MySQL", "Redis", "DynamoDB"
    ],
    "DevOps & Infra": [
        "Docker", "Nginx", "Linux", "PM2", "DigitalOcean", "Git", "AWS", "Azure", "Kubernetes", "CI/CD"
    ],
    "Frontend & Diseño": [
        "Next.js", "React", "Tailwind", "Figma (Concept)", "Angular", "Vue.js", "HTML/CSS", "TypeScript"
    ]
}

const TECH_OPTIONS = [
    "React", "Angular", "Vue.js", "Next.js",
    "Node.js", "Python", "Java", "C# / .NET",
    "AWS", "Azure", "Docker", "Kubernetes",
    "SQL Server", "PostgreSQL", "MongoDB", "Redis",
    "TensorFlow", "OpenAI", "Flutter", "React Native"
]

const STATS_CONFIG = {
    Tech: [
        { label: 'Ranking Global', name: 'ranking', placeholder: '#339' },
        { label: 'Experiencia', name: 'experience', placeholder: '+7 Años' },
        { label: 'Nivel Seniority', name: 'level', placeholder: 'Senior' },
        { label: 'Tech Stack', name: 'stack', placeholder: 'Full Stack' },
    ],
    Legal: [
        { label: 'Ciclo Académico', name: 'ciclo', placeholder: 'Noveno' },
        { label: 'Mérito', name: 'merito', placeholder: 'Tercio Superior' },
        { label: 'Disponibilidad', name: 'disponibilidad', placeholder: 'Inmediata' },
    ]
}

export function EditProfileModal({ profile }: { profile: any }) {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState(1)
    const [isPending, setIsPending] = useState(false)
    const router = useRouter()

    // --- STATE MANAGEMENT ---
    const [industry, setIndustry] = useState(profile.industry || 'Tech')

    // Collapsible States
    const [showEduList, setShowEduList] = useState(true)
    const [showCertList, setShowCertList] = useState(true)
    const [showProjList, setShowProjList] = useState(true)

    // Stats State (initialize from attributes)
    const [statsValues, setStatsValues] = useState<Record<string, string>>({})

    // Specialties State (initialize from experiences type 'Specialization')
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])

    // Tech Stack State
    const [selectedStack, setSelectedStack] = useState<Record<string, string[]>>({
        "Backend & Arquitectura": [],
        "Bases de Datos": [],
        "DevOps & Infra": [],
        "Frontend & Diseño": []
    })

    // Projects State
    const [projects, setProjects] = useState<any[]>([])
    const [currentProject, setCurrentProject] = useState({
        title: '',
        client: '',
        type: 'Laboral',
        desc: '',
        solution: '',
        outcome: '',
        tags: [] as string[],
        imageFile: null as File | null,
        existingImageUrl: null as string | null,
        url: '' as string // New URL field
    })

    // Education State
    const [education, setEducation] = useState<any[]>([])
    const [currentEdu, setCurrentEdu] = useState({
        institution: '',
        degree: '',
        period: '',
        status: 'Completed'
    })

    // Certifications State
    const [certifications, setCertifications] = useState<any[]>([])
    const [currentCert, setCurrentCert] = useState({
        title: '',
        provider: '',
        date: '',
        url: ''
    })

    // Load initial data when modal opens
    useEffect(() => {
        if (isOpen && profile) {
            setIndustry(profile.industry)

            // Load Specialties
            if (profile.experiences) {
                const specs = profile.experiences
                    .filter((e: any) => e.type === 'Specialization')
                    .map((e: any) => {
                        const match = TECH_SPECIALTIES.find(t => t.title === e.title)
                        return match ? `${match.title}|${match.description}` : null
                    })
                    .filter(Boolean)
                setSelectedSpecialties(specs)
            }

            // Load Tech Stack from SkillCategories
            if (profile.skillCategories) {
                const stackData: any = {
                    "Backend & Arquitectura": [],
                    "Bases de Datos": [],
                    "DevOps & Infra": [],
                    "Frontend & Diseño": []
                }
                profile.skillCategories.forEach((cat: any) => {
                    if (stackData[cat.name] !== undefined) {
                        const items = cat.items.map((i: any) => i.name)
                        stackData[cat.name] = items
                    }
                })
                setSelectedStack(prev => ({ ...prev, ...stackData }))
            }

            // Load Projects
            if (profile.projects) {
                const loadedProjects = profile.projects.map((p: any) => ({
                    title: p.title,
                    client: p.client,
                    type: p.type || 'Laboral',
                    desc: p.description,
                    solution: p.solution,
                    outcome: p.outcome,
                    tags: p.tags ? p.tags.map((t: any) => t.name) : [],
                    existingImageUrl: p.imageUrl,
                    url: p.url || ''
                }))
                setProjects(loadedProjects)
            }

            // Load Education
            if (profile.education) {
                setEducation(profile.education.map((edu: any) => ({
                    institution: edu.institution,
                    degree: edu.degree,
                    period: edu.period,
                    status: edu.status
                })))
            }

            // Load Certifications
            if (profile.certifications) {
                setCertifications(profile.certifications.map((cert: any) => ({
                    title: cert.title,
                    provider: cert.provider,
                    date: cert.date ? String(cert.date) : '',
                    url: cert.url || ''
                })))
            }
        }
    }, [isOpen, profile])


    // Helpers
    const getStatValue = (name: string) => {
        const labelMap: any = {
            'ranking': 'RANKING', 'experience': 'EXPERIENCIA', 'level': 'LEVEL', 'stack': 'STACK',
            'ciclo': 'CICLO', 'merito': 'MÉRITO', 'disponibilidad': 'DISPONIBILIDAD'
        }
        const label = labelMap[name] || name.toUpperCase()
        const attr = profile.attributes?.find((a: any) => a.label === label)
        return attr ? attr.value : ''
    }

    const getSocialUrl = (platform: string) => {
        const social = profile.socials?.find((s: any) => s.platform.toLowerCase() === platform.toLowerCase())
        return social ? social.url : ''
    }

    const handleSpecialtyChange = (value: string) => {
        if (selectedSpecialties.includes(value)) {
            setSelectedSpecialties(selectedSpecialties.filter(s => s !== value))
        } else {
            setSelectedSpecialties([...selectedSpecialties, value])
        }
    }

    const toggleStackItem = (category: string, item: string) => {
        setSelectedStack(prev => {
            const currentItems = prev[category] || []
            const newItems = currentItems.includes(item)
                ? currentItems.filter(i => i !== item)
                : [...currentItems, item]
            return { ...prev, [category]: newItems }
        })
    }

    // Project Logic
    const handleAddProject = () => {
        if (!currentProject.title) return;
        setProjects([...projects, { ...currentProject }])
        setCurrentProject({
            title: '', client: '', type: 'Laboral', desc: '', solution: '', outcome: '', tags: [], imageFile: null, existingImageUrl: null, url: ''
        })
        setShowProjList(true)
    }
    const removeProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index))
    }
    const editProject = (index: number) => {
        const itemToEdit = projects[index]
        setCurrentProject(itemToEdit)
        removeProject(index)
    }
    const toggleTech = (tech: string) => {
        setCurrentProject(prev => {
            const tags = prev.tags.includes(tech)
                ? prev.tags.filter(t => t !== tech)
                : [...prev.tags, tech]
            return { ...prev, tags }
        })
    }

    // Education Logic
    const handleAddEducation = () => {
        if (!currentEdu.institution || !currentEdu.degree) return;
        setEducation([...education, { ...currentEdu }])
        setCurrentEdu({ institution: '', degree: '', period: '', status: 'Completed' })
        setShowEduList(true)
    }
    const removeEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index))
    }
    const editEducation = (index: number) => {
        const itemToEdit = education[index]
        setCurrentEdu(itemToEdit)
        removeEducation(index)
    }

    // Certifications Logic
    const handleAddCertification = () => {
        if (!currentCert.title || !currentCert.provider) return;
        setCertifications([...certifications, { ...currentCert }])
        setCurrentCert({ title: '', provider: '', date: '', url: '' })
        setShowCertList(true)
    }
    const removeCertification = (index: number) => {
        setCertifications(certifications.filter((_, i) => i !== index))
    }
    const editCertification = (index: number) => {
        const itemToEdit = certifications[index]
        setCurrentCert(itemToEdit)
        removeCertification(index)
    }

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        const maxStep = industry === 'Tech' ? 7 : 2;
        if (step < maxStep) setStep(step + 1);
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsPending(true)
        const formData = new FormData(event.currentTarget)

        // Inject Specialties manually
        formData.delete('specialties')
        selectedSpecialties.forEach(s => formData.append('specialties', s))

        // Inject Tech Stack
        formData.append('tech_stack_data', JSON.stringify(selectedStack))

        // Inject Education
        let finalEducation = [...education]
        if (currentEdu.institution) {
            finalEducation.push(currentEdu)
        }
        formData.append('education_data', JSON.stringify(finalEducation))

        // Inject Certifications
        let finalCertifications = [...certifications]
        if (currentCert.title) {
            finalCertifications.push(currentCert)
        }
        formData.append('certifications_data', JSON.stringify(finalCertifications))

        // Inject Projects
        formData.append('projects_data', JSON.stringify(projects.map(p => ({
            title: p.title,
            client: p.client,
            type: p.type,
            desc: p.desc,
            solution: p.solution,
            outcome: p.outcome,
            tags: p.tags,
            existingImageUrl: p.existingImageUrl,
            url: p.url
        }))))

        projects.forEach((p, index) => {
            if (p.imageFile) {
                formData.append(`project_image_${index}`, p.imageFile)
            }
        })

        const res = await updateClientProfile(profile.id, formData)

        setIsPending(false)
        if (res.success) {
            setIsOpen(false)
            router.refresh()
        }
    }

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        if (isOpen) setMounted(true);
    }, [isOpen]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="w-full py-2.5 px-4 bg-slate-900 border border-white/10 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all font-medium group mb-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
                <Pencil size={14} className="group-hover:rotate-12 transition-transform" />
                <span>Edit Identity</span>
            </button>
        )
    }

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsOpen(false)} />

            {/* Modal Container */}
            <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 h-auto max-h-[95vh] flex flex-col relative z-20">

                {/* Header */}
                <div className="bg-slate-950/60 px-8 py-6 border-b border-cyan-500/20 flex justify-between items-center sticky top-0 z-30 backdrop-blur-sm">
                    <div>
                        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                            <Pencil size={20} className="text-cyan-500" />
                            {step === 1 && 'Edit Basic Identity'}
                            {step === 2 && 'Excellence Metrics'}
                            {step === 3 && 'Core Ecosystem'}
                            {step === 4 && 'Arsenal Tecnológico'}
                            {step === 5 && 'Academic Foundation'}
                            {step === 6 && 'Cursos y Certificaciones'}
                            {step === 7 && 'Project Portfolio'}
                        </h2>
                        <p className="text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em] mt-1 opacity-70">Configuration // Phase.{step < 10 ? `0${step}` : step} // Mode.Update</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-10 py-8 custom-scrollbar bg-grid-pattern-subtle">
                    <form onSubmit={onSubmit} className="space-y-10">


                        {/* STEP 1: BASIC INFO */}
                        <div className={step === 1 ? 'block space-y-8' : 'hidden'}>
                            <div className="grid grid-cols-2 gap-6">
                                <label className="cursor-pointer group">
                                    <input type="radio" name="industry" value="Tech" className="peer sr-only" checked={industry === 'Tech'} onChange={() => setIndustry('Tech')} />
                                    <div className="border border-white/10 group-hover:border-cyan-500/50 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm">
                                        <Server size={32} className="mx-auto mb-3 text-slate-500 peer-checked:text-cyan-400 group-hover:scale-110 transition-transform" />
                                        <span className="block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs">Technology</span>
                                    </div>
                                </label>
                                <label className="cursor-pointer group">
                                    <input type="radio" name="industry" value="Legal" className="peer sr-only" checked={industry === 'Legal'} onChange={() => setIndustry('Legal')} />
                                    <div className="border border-white/10 group-hover:border-indigo-500/50 peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 rounded-2xl p-6 text-center transition-all bg-slate-950/40 backdrop-blur-sm">
                                        <Scale size={32} className="mx-auto mb-3 text-slate-500 peer-checked:text-indigo-400 group-hover:scale-110 transition-transform" />
                                        <span className="block font-bold text-slate-400 peer-checked:text-white uppercase tracking-widest text-xs">Legal Services</span>
                                    </div>
                                </label>
                            </div>

                            <div className="space-y-4 text-slate-900">
                                <div className="grid grid-cols-2 gap-6">
                                    <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Nombre</label><input name="firstName" defaultValue={profile.firstName} placeholder="Ej: Unlocking" className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                    <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Apellido</label><input name="lastName" defaultValue={profile.lastName} placeholder="Ej: Digital Resilience" className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                </div>
                                <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Full Name</label><input name="name" defaultValue={profile.name} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Headline</label><input name="headline" defaultValue={profile.headline} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Email</label><input name="email" defaultValue={profile.email} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                    <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Phone</label><input name="phone" defaultValue={profile.phone} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                </div>
                                <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Location</label><input name="location" defaultValue={profile.location} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm" /></div>
                                <div><label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Bio</label><textarea name="bio" defaultValue={profile.bio} rows={4} required className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all resize-none text-white placeholder:text-slate-600 text-sm" /></div>
                            </div>

                            {/* Social Links Sub-section */}
                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <Link2 size={16} className="text-cyan-500" />
                                    Redes Sociales
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest">LinkedIn</label>
                                        <input name="social_linkedin" defaultValue={getSocialUrl('LinkedIn')} className="w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest">GitHub</label>
                                        <input name="social_github" defaultValue={getSocialUrl('GitHub')} className="w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700" placeholder="https://github.com/..." />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest">YouTube</label>
                                        <input name="social_youtube" defaultValue={getSocialUrl('YouTube')} className="w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700" placeholder="https://youtube.com/@..." />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-widest">Email (Social)</label>
                                        <input name="social_email" defaultValue={getSocialUrl('Email')} className="w-full px-4 py-2 bg-slate-950/50 border border-white/10 rounded-lg text-xs outline-none focus:border-cyan-500 text-white placeholder:text-slate-700" placeholder="ejemplo@correo.com" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: STATS */}
                        <div className={step === 2 ? 'block space-y-6' : 'hidden'}>
                            <div className="grid grid-cols-2 gap-4">
                                {(industry === 'Tech' ? STATS_CONFIG.Tech : STATS_CONFIG.Legal).map((stat) => (
                                    <div key={stat.name}>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{stat.label}</label>
                                        <input
                                            name={`stat_${stat.name}`}
                                            defaultValue={getStatValue(stat.name)}
                                            required
                                            className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-sm"
                                            placeholder={stat.placeholder}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STEP 3: SPECIALTIES */}
                        <div className={step === 3 ? 'block' : 'hidden'}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {TECH_SPECIALTIES.map((spec) => {
                                    const Icon = spec.icon
                                    const val = `${spec.title}|${spec.description}`
                                    const isChecked = selectedSpecialties.includes(val)
                                    return (
                                        <label key={spec.id} className="cursor-pointer relative group">
                                            <input
                                                type="checkbox"
                                                name="specialties_control"
                                                value={val}
                                                className="peer sr-only"
                                                checked={isChecked}
                                                onChange={() => handleSpecialtyChange(val)}
                                            />
                                            <div className={`h-full border rounded-lg p-4 transition-all ${isChecked ? 'bg-cyan-900 border-cyan-500 text-white' : 'border-slate-200 hover:border-cyan-500 hover:bg-cyan-50/10'}`}>
                                                <div className="flex items-start gap-3">
                                                    <div className={`p-2 rounded ${isChecked ? 'bg-cyan-500 text-black' : 'bg-slate-100 text-slate-600'}`}>
                                                        <Icon size={20} />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-sm mb-1">{spec.title}</div>
                                                        <div className="text-xs opacity-70 leading-relaxed">{spec.description}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>

                        {/* STEP 4: TECH STACK (New) */}
                        <div className={step === 4 ? 'block' : 'hidden'}>
                            <div className="grid grid-cols-2 gap-6">
                                {Object.entries(TECH_STACK_CATEGORIES).map(([catName, items]) => (
                                    <div key={catName}>
                                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest border-l-4 border-cyan-500 pl-3 mb-4">{catName}</h4>
                                        <div className="space-y-2">
                                            {items.map(item => (
                                                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className={`w-5 h-5 rounded border border-slate-300 flex items-center justify-center transition-colors ${selectedStack[catName]?.includes(item) ? 'bg-cyan-500 border-cyan-500' : 'bg-white group-hover:border-cyan-400'}`}>
                                                        {selectedStack[catName]?.includes(item) && <CheckCircle2 size={14} className="text-white" />}
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only"
                                                        checked={selectedStack[catName]?.includes(item)}
                                                        onChange={() => toggleStackItem(catName, item)}
                                                    />
                                                    <span className={`text-sm ${selectedStack[catName]?.includes(item) ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STEP 5: EDUCATION */}
                        <div className={step === 5 ? 'block space-y-6' : 'hidden'}>
                            {education.length > 0 ? (
                                <div className="space-y-3 mb-6">
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => setShowEduList(!showEduList)}
                                    >
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Added Records ({education.length})</h4>
                                        {showEduList ? <ChevronUp size={16} className="text-cyan-500" /> : <ChevronDown size={16} className="text-cyan-500" />}
                                    </div>

                                    {showEduList && education.map((edu, idx) => (
                                        <div key={idx} className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                            <div>
                                                <div className="font-bold text-white text-sm">{edu.institution}</div>
                                                <div className="text-xs text-slate-500 font-mono">{edu.degree} • {edu.period}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button type="button" onClick={() => editEducation(idx)} className="text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all" title="Editar">
                                                    <Pencil size={16} />
                                                </button>
                                                <button type="button" onClick={() => removeEducation(idx)} className="text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all" title="Eliminar">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 bg-slate-950/20 rounded-2xl border border-dashed border-white/10 mb-6">
                                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">No matching records found in local stack.</p>
                                </div>
                            )}

                            <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-4">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <GraduationCap size={18} className="text-cyan-500" />
                                    {education.length > 0 ? 'Agregar otra formación' : 'Registrar educación'}
                                </h3>

                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1">Institución <span className="text-red-500">*</span></label>
                                        <input
                                            value={currentEdu.institution}
                                            onChange={(e) => setCurrentEdu({ ...currentEdu, institution: e.target.value })}
                                            className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentEdu.institution && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`}
                                            placeholder="Ej: UMA - Universidad María Auxiliadora"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1">Título / Especialidad <span className="text-red-500">*</span></label>
                                        <input
                                            value={currentEdu.degree}
                                            onChange={(e) => setCurrentEdu({ ...currentEdu, degree: e.target.value })}
                                            className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentEdu.degree && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`}
                                            placeholder="Ej: Ingeniería de Inteligencia Artificial"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1">Periodo</label>
                                            <input
                                                value={currentEdu.period}
                                                onChange={(e) => setCurrentEdu({ ...currentEdu, period: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all"
                                                placeholder="Ej: 2024 - Actualidad"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-1">Estado</label>
                                            <select
                                                value={currentEdu.status}
                                                onChange={(e) => setCurrentEdu({ ...currentEdu, status: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white bg-slate-950"
                                            >
                                                <option value="Completed">Completado</option>
                                                <option value="In Progress">En Curso</option>
                                                <option value="Truncated">Técnico/Otros</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddEducation}
                                    disabled={!currentEdu.institution || !currentEdu.degree}
                                    className={`w-full py-3 font-bold rounded-xl transition-all text-sm border ${(!currentEdu.institution || !currentEdu.degree) ? 'bg-white/5 text-slate-500 border-white/5 cursor-not-allowed' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20'}`}
                                >
                                    + Agregar a la lista
                                </button>
                            </div>
                        </div>

                        <div className={step === 6 ? 'block space-y-6' : 'hidden'}>
                            {certifications.length > 0 ? (
                                <div className="space-y-3 mb-6">
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => setShowCertList(!showCertList)}
                                    >
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Added Knowledge ({certifications.length})</h4>
                                        {showCertList ? <ChevronUp size={16} className="text-cyan-500" /> : <ChevronDown size={16} className="text-cyan-500" />}
                                    </div>

                                    {showCertList && certifications.map((cert, idx) => (
                                        <div key={idx} className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                            <div>
                                                <div className="font-bold text-white text-sm">{cert.title}</div>
                                                <div className="text-xs text-slate-500 font-mono">{cert.provider} • {cert.date}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button type="button" onClick={() => editCertification(idx)} className="text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all">
                                                    <Pencil size={16} />
                                                </button>
                                                <button type="button" onClick={() => removeCertification(idx)} className="text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 bg-slate-950/20 rounded-2xl border border-dashed border-white/10 mb-6">
                                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">No certifications detected in database.</p>
                                </div>
                            )}

                            <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-6 space-y-6">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                    <Award size={18} className="text-cyan-500" />
                                    {certifications.length > 0 ? 'Inject Another Node' : 'Initialize Certification'}
                                </h3>

                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Nombre del Curso <span className="text-red-500">*</span></label>
                                        <input
                                            value={currentCert.title}
                                            onChange={(e) => setCurrentCert({ ...currentCert, title: e.target.value })}
                                            className={`w-full px-4 py-3 bg-slate-950/50 border rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all ${!currentCert.title && isPending ? 'border-red-500/50 bg-red-500/5' : 'border-white/10'}`}
                                            placeholder="Ej: How to Build a Full Stack Application"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Proveedor <span className="text-red-500">*</span></label>
                                            <input
                                                value={currentCert.provider}
                                                onChange={(e) => setCurrentCert({ ...currentCert, provider: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all"
                                                placeholder="Ej: freecodecamp"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">Fecha</label>
                                            <input
                                                value={currentCert.date}
                                                onChange={(e) => setCurrentCert({ ...currentCert, date: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all"
                                                placeholder="Ej: 09/02/2025"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest mb-2">URL (Opcional)</label>
                                            <input
                                                value={currentCert.url}
                                                onChange={(e) => setCurrentCert({ ...currentCert, url: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddCertification}
                                    disabled={!currentCert.title || !currentCert.provider}
                                    className={`w-full py-3 font-bold rounded-xl transition-all text-sm border ${(!currentCert.title || !currentCert.provider) ? 'bg-white/5 text-slate-500 border-white/5 cursor-not-allowed' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20'}`}
                                >
                                    + Inject into Stack
                                </button>
                            </div>
                        </div>

                        <div className={step === 7 ? 'block space-y-6' : 'hidden'}>
                            {projects.length > 0 && (
                                <div className="space-y-3 mb-6">
                                    <div
                                        className="flex items-center justify-between cursor-pointer group"
                                        onClick={() => setShowProjList(!showProjList)}
                                    >
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Operations ({projects.length})</h4>
                                        {showProjList ? <ChevronUp size={16} className="text-cyan-500" /> : <ChevronDown size={16} className="text-cyan-500" />}
                                    </div>

                                    {showProjList && projects.map((p, idx) => (
                                        <div key={idx} className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                            <div>
                                                <div className="font-bold text-white text-sm">{p.title}</div>
                                                <div className="text-xs text-slate-500 font-mono tracking-tight">{p.client || 'Internal Core'} • {p.tags.length} active technologies</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button type="button" onClick={() => editProject(idx)} className="text-slate-500 hover:text-cyan-400 p-2 hover:bg-white/5 rounded-lg transition-all">
                                                    <Pencil size={16} />
                                                </button>
                                                <button type="button" onClick={() => removeProject(idx)} className="text-slate-500 hover:text-red-400 p-2 hover:bg-white/5 rounded-lg transition-all">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-6 shadow-2xl space-y-8 relative overflow-hidden group/modal">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover/modal:bg-cyan-500/10 transition-colors" />

                                <h3 className="font-bold text-white mb-2 flex items-center gap-3 relative z-10">
                                    <Plus size={20} className="text-cyan-500" />
                                    <span className="tracking-tight">Add / Synchronize Project</span>
                                </h3>

                                <div className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Domain</label>
                                            <select
                                                className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white focus:border-cyan-500 transition-all cursor-pointer"
                                                value={currentProject.type}
                                                onChange={(e) => setCurrentProject({ ...currentProject, type: e.target.value })}
                                            >
                                                <option value="Laboral">Corporate Info</option>
                                                <option value="Personal">Personal Project</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Identity</label>
                                            <input
                                                value={currentProject.title}
                                                onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                                                className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all"
                                                placeholder="Project Title"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Challenge Matrix</label>
                                        <textarea value={currentProject.desc} onChange={(e) => setCurrentProject({ ...currentProject, desc: e.target.value })} rows={2} className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light" placeholder="Describe the mission challenge..." />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Engineered Solution</label>
                                            <textarea value={currentProject.solution} onChange={(e) => setCurrentProject({ ...currentProject, solution: e.target.value })} rows={2} className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light" placeholder="Core architecture details..." />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Calculated Outcome</label>
                                            <textarea value={currentProject.outcome} onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })} rows={2} className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none resize-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all font-light" placeholder="Impact and results..." />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-[10px] font-bold text-cyan-500/40 uppercase tracking-[0.2em] ml-1">Live Endpoint (Optional)</label>
                                        <input value={currentProject.url} onChange={(e) => setCurrentProject({ ...currentProject, url: e.target.value })} className="w-full px-4 py-3 bg-slate-950/80 border border-white/10 rounded-xl outline-none text-sm text-white placeholder:text-slate-700 focus:border-cyan-500 transition-all" placeholder="https://external-link.com" />
                                    </div>

                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold text-cyan-500/60 uppercase tracking-widest ml-1">Tech Substack</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 h-40 overflow-y-auto border border-white/5 rounded-2xl p-4 bg-slate-950/40 custom-scrollbar shadow-inner">
                                            {TECH_OPTIONS.map(tech => (
                                                <label key={tech} className="flex items-center gap-3 cursor-pointer group/item">
                                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${currentProject.tags.includes(tech) ? 'bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'border-white/20 group-hover/item:border-cyan-500/50'}`}>
                                                        {currentProject.tags.includes(tech) && <CheckCircle2 size={10} className="text-black" />}
                                                    </div>
                                                    <input type="checkbox" checked={currentProject.tags.includes(tech)} onChange={() => toggleTech(tech)} className="sr-only" />
                                                    <span className={`text-[11px] uppercase tracking-tighter ${currentProject.tags.includes(tech) ? 'text-white font-bold' : 'text-slate-500 group-hover/item:text-slate-300'}`}>{tech}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="border border-white/10 border-dashed rounded-2xl p-6 text-center cursor-pointer relative hover:bg-white/5 hover:border-cyan-500/30 transition-all group/upload">
                                        <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" onChange={(e) => { if (e.target.files?.[0]) setCurrentProject({ ...currentProject, imageFile: e.target.files[0] }) }} />
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="p-3 bg-white/5 rounded-full group-hover/upload:scale-110 transition-transform">
                                                <ImageIcon size={24} className="text-slate-500 group-hover:text-cyan-400" />
                                            </div>
                                            {currentProject.imageFile ? (
                                                <span className="text-xs text-cyan-400 font-mono flex items-center gap-2"><CheckCircle2 size={14} /> {currentProject.imageFile.name}</span>
                                            ) : (
                                                <div className="space-y-1">
                                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Upload Visual Evidence</p>
                                                    <p className="text-[10px] text-slate-500 font-mono">PNG, JPG up to 10MB</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleAddProject}
                                        className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all shadow-xl active:scale-95"
                                    >
                                        + Deploy to Project List
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex justify-between gap-4 border-t border-white/5 mt-10 sticky bottom-0 bg-slate-900/95 backdrop-blur-sm p-4 z-40">
                            {step > 1 ? (
                                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all">Back</button>
                            ) : (
                                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-all">Cancel</button>
                            )}

                            {(industry === 'Tech' && step === 7) || (industry === 'Legal' && step === 2) ? (
                                <button type="submit" disabled={isPending} className="bg-cyan-500 text-black px-10 py-2.5 rounded-lg font-bold hover:bg-cyan-400 disabled:opacity-50 ml-auto shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                                    {isPending ? 'DEPLOYING...' : 'UPDATE_PROFILE'}
                                </button>
                            ) : (
                                <button type="button" onClick={handleNext} className="bg-white text-black px-10 py-2.5 rounded-lg font-bold hover:bg-slate-200 ml-auto transition-all">
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div >,
        document.body
    )
}

'use client'

import { useState, useEffect } from 'react'
import { updateProfile } from '@/lib/actions'
import { X, Pencil, Server, Scale, Briefcase, Link2, ShieldAlert, Database, Smartphone, Users, Building, FolderGit2, Plus, Trash2, Image as ImageIcon, CheckCircle2, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
        existingImageUrl: null as string | null
    })

    // Education State
    const [education, setEducation] = useState<any[]>([])
    const [currentEdu, setCurrentEdu] = useState({
        institution: '',
        degree: '',
        period: '',
        status: 'Completed'
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
                    tags: p.tags.map((t: any) => t.name),
                    existingImageUrl: p.imageUrl
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
            title: '', client: '', type: 'Laboral', desc: '', solution: '', outcome: '', tags: [], imageFile: null, existingImageUrl: null
        })
    }
    const removeProject = (index: number) => {
        setProjects(projects.filter((_, i) => i !== index))
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
    }
    const removeEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index))
    }

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        const maxStep = industry === 'Tech' ? 6 : 2;
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

        // Inject Projects
        formData.append('projects_data', JSON.stringify(projects.map(p => ({
            title: p.title,
            client: p.client,
            type: p.type,
            desc: p.desc,
            solution: p.solution,
            outcome: p.outcome,
            tags: p.tags,
            existingImageUrl: p.existingImageUrl
        }))))

        projects.forEach((p, index) => {
            if (p.imageFile) {
                formData.append(`project_image_${index}`, p.imageFile)
            }
        })

        const res = await updateProfile(profile.id, formData)

        setIsPending(false)
        if (res.success) {
            setIsOpen(false)
            router.refresh()
        }
    }

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="w-full py-2 px-4 rounded-lg font-medium text-center transition-colors mb-2 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white flex items-center justify-center gap-2"
            >
                <Pencil size={14} />
                <span>Edit Profile</span>
            </button>
        )
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 h-auto max-h-[90vh] overflow-y-auto">

                <div className="bg-slate-50 px-6 py-4 border-b flex justify-between items-center sticky top-0 bg-slate-50 z-10">
                    <h2 className="text-xl font-bold text-slate-800">
                        {step === 1 && 'Edit Basic Info'}
                        {step === 2 && 'Edit Key Stats'}
                        {step === 3 && 'Edit Specialties'}
                        {step === 4 && 'Arsenal Tecnológico'}
                        {step === 5 && 'Historial Académico'}
                        {step === 6 && 'Edit Projects'}
                    </h2>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={onSubmit} className="p-6 space-y-6">

                    {/* STEP 1: BASIC INFO */}
                    <div className={step === 1 ? 'block space-y-4' : 'hidden'}>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="cursor-pointer">
                                <input type="radio" name="industry" value="Tech" className="peer sr-only" checked={industry === 'Tech'} onChange={() => setIndustry('Tech')} />
                                <div className="border-2 border-slate-100 peer-checked:border-cyan-500 peer-checked:bg-cyan-50 rounded-lg p-4 text-center transition-all hover:bg-slate-50">
                                    <Server className="mx-auto mb-2 text-slate-400 peer-checked:text-cyan-600" />
                                    <span className="block font-medium text-slate-600 peer-checked:text-cyan-900">Technology</span>
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input type="radio" name="industry" value="Legal" className="peer sr-only" checked={industry === 'Legal'} onChange={() => setIndustry('Legal')} />
                                <div className="border-2 border-slate-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-50 rounded-lg p-4 text-center transition-all hover:bg-slate-50">
                                    <Scale className="mx-auto mb-2 text-slate-400 peer-checked:text-indigo-600" />
                                    <span className="block font-medium text-slate-600 peer-checked:text-indigo-900">Legal</span>
                                </div>
                            </label>
                        </div>

                        <div className="space-y-4">
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label><input name="name" defaultValue={profile.name} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Headline</label><input name="headline" defaultValue={profile.headline} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input name="email" defaultValue={profile.email} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Phone</label><input name="phone" defaultValue={profile.phone} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            </div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Location</label><input name="location" defaultValue={profile.location} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Bio</label><textarea name="bio" defaultValue={profile.bio} rows={3} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none" /></div>
                        </div>

                        {/* Social Links Sub-section */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                <Link2 size={16} className="text-cyan-500" />
                                Redes Sociales
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">LinkedIn</label>
                                    <input name="social_linkedin" defaultValue={getSocialUrl('LinkedIn')} className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://linkedin.com/in/..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">GitHub</label>
                                    <input name="social_github" defaultValue={getSocialUrl('GitHub')} className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://github.com/..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">YouTube</label>
                                    <input name="social_youtube" defaultValue={getSocialUrl('YouTube')} className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://youtube.com/@..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Email (Social)</label>
                                    <input name="social_email" defaultValue={getSocialUrl('Email')} className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="ejemplo@correo.com" />
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
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none"
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
                        {education.length > 0 && (
                            <div className="space-y-3 mb-6">
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Registros Agregados ({education.length})</h4>
                                {education.map((edu, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200">
                                        <div>
                                            <div className="font-bold text-slate-800 text-sm">{edu.institution}</div>
                                            <div className="text-xs text-slate-500">{edu.degree} • {edu.period}</div>
                                        </div>
                                        <button type="button" onClick={() => removeEducation(idx)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
                            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                                <GraduationCap size={18} className="text-cyan-500" />
                                {education.length > 0 ? 'Agregar otra formación' : 'Registrar educación'}
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Institución</label>
                                    <input value={currentEdu.institution} onChange={(e) => setCurrentEdu({ ...currentEdu, institution: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Ej: UMA - Universidad María Auxiliadora" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Título / Especialidad</label>
                                    <input value={currentEdu.degree} onChange={(e) => setCurrentEdu({ ...currentEdu, degree: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Ej: Ingeniería de Inteligencia Artificial" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Periodo</label>
                                        <input value={currentEdu.period} onChange={(e) => setCurrentEdu({ ...currentEdu, period: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Ej: 2024 - Actualidad" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estado</label>
                                        <select value={currentEdu.status} onChange={(e) => setCurrentEdu({ ...currentEdu, status: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm bg-white">
                                            <option value="Completed">Completado</option>
                                            <option value="In Progress">En Curso</option>
                                            <option value="Truncated">Técnico/Otros</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={handleAddEducation} className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm">+ Agregar a la lista</button>
                        </div>
                    </div>

                    {/* STEP 6: PROJECTS */}
                    <div className={step === 6 ? 'block space-y-6' : 'hidden'}>

                        {projects.length > 0 && (
                            <div className="space-y-3 mb-6">
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Existing Projects ({projects.length})</h4>
                                {projects.map((p, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200">
                                        <div>
                                            <div className="font-bold text-slate-800 text-sm">{p.title}</div>
                                            <div className="text-xs text-slate-500">{p.client || 'Personal'} • {p.tags.length} techs</div>
                                        </div>
                                        <button type="button" onClick={() => removeProject(idx)} className="text-red-400 hover:text-red-600">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <Plus size={18} className="text-cyan-500" /> Add / Replace Project
                            </h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <select
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm bg-white"
                                        value={currentProject.type}
                                        onChange={(e) => setCurrentProject({ ...currentProject, type: e.target.value })}
                                    >
                                        <option value="Laboral">Corporate Info</option>
                                        <option value="Personal">Personal Project</option>
                                    </select>

                                    <input value={currentProject.title} onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Title" />
                                </div>

                                <textarea value={currentProject.desc} onChange={(e) => setCurrentProject({ ...currentProject, desc: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="Challenge..." />
                                <div className="grid grid-cols-2 gap-4">
                                    <textarea value={currentProject.solution} onChange={(e) => setCurrentProject({ ...currentProject, solution: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="Solution..." />
                                    <textarea value={currentProject.outcome} onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="Outcome..." />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Technologies</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 h-32 overflow-y-auto border rounded p-2 custom-scrollbar">
                                        {TECH_OPTIONS.map(tech => (
                                            <label key={tech} className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded">
                                                <input type="checkbox" checked={currentProject.tags.includes(tech)} onChange={() => toggleTech(tech)} className="rounded border-slate-300" />
                                                <span className="text-xs text-slate-700">{tech}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center cursor-pointer relative">
                                    <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => { if (e.target.files?.[0]) setCurrentProject({ ...currentProject, imageFile: e.target.files[0] }) }} />
                                    <div className="flex flex-col items-center">
                                        {currentProject.imageFile ? (
                                            <span className="text-xs text-green-700 font-medium flex items-center gap-1"><CheckCircle2 size={16} /> {currentProject.imageFile.name}</span>
                                        ) : (
                                            <span className="text-xs text-slate-500 flex items-center gap-1"><ImageIcon size={16} /> Upload Image</span>
                                        )}
                                    </div>
                                </div>

                                <button type="button" onClick={handleAddProject} className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm">
                                    + Add to List
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-between gap-3 border-t border-slate-100 mt-6 sticky bottom-0 bg-white">
                        {step > 1 ? (
                            <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Back</button>
                        ) : (
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Cancel</button>
                        )}

                        {(industry === 'Tech' && step === 6) || (industry === 'Legal' && step === 2) ? (
                            <button type="submit" disabled={isPending} className="bg-slate-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-50 ml-auto">
                                {isPending ? 'Saving...' : 'Save Changes'}
                            </button>
                        ) : (
                            <button type="button" onClick={handleNext} className="bg-slate-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-slate-800 ml-auto">
                                Next
                            </button>
                        )}
                    </div>

                </form>
            </div>
        </div>
    )
}

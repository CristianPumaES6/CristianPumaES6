'use client'

import { useState } from 'react'
import { createProfile } from '@/lib/actions'
import { X, UserPlus, Briefcase, Scale, Server, Link2, ShieldAlert, Database, Smartphone, Users, Globe, Building, FolderGit2, Image as ImageIcon, Plus, Trash2, CheckCircle2, GraduationCap } from 'lucide-react'
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

// Stats Configuration
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

export function CreateProfileModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [step, setStep] = useState(1)
    const [isPending, setIsPending] = useState(false)
    const [industry, setIndustry] = useState('Tech')

    // Tech Stack State
    const [selectedStack, setSelectedStack] = useState<Record<string, string[]>>({
        "Backend & Arquitectura": [],
        "Bases de Datos": [],
        "DevOps & Infra": [],
        "Frontend & Diseño": []
    })

    // Project State
    const [projects, setProjects] = useState<any[]>([])
    const [currentProject, setCurrentProject] = useState({
        title: '',
        client: '',
        type: 'Laboral',
        desc: '',
        solution: '',
        outcome: '',
        tags: [] as string[],
        imageFile: null as File | null
    })

    // Education State
    const [education, setEducation] = useState<any[]>([])
    const [currentEdu, setCurrentEdu] = useState({
        institution: '',
        degree: '',
        period: '',
        status: 'Completed'
    })

    const router = useRouter()

    const handleAddProject = () => {
        if (!currentProject.title || !currentProject.desc) return; // Basic validation
        setProjects([...projects, { ...currentProject }])
        setCurrentProject({
            title: '', client: '', type: 'Laboral', desc: '', solution: '', outcome: '', tags: [], imageFile: null
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

    const handleAddEducation = () => {
        if (!currentEdu.institution || !currentEdu.degree) return;
        setEducation([...education, { ...currentEdu }])
        setCurrentEdu({ institution: '', degree: '', period: '', status: 'Completed' })
    }

    const removeEducation = (index: number) => {
        setEducation(education.filter((_, i) => i !== index))
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

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsPending(true)
        const formData = new FormData(event.currentTarget)

        // Append Tech Stack
        formData.append('tech_stack_data', JSON.stringify(selectedStack))

        // Append Education
        let finalEducation = [...education]
        if (currentEdu.institution) {
            finalEducation.push(currentEdu)
        }
        formData.append('education_data', JSON.stringify(finalEducation))

        // Append Projects
        let finalProjects = [...projects]
        if (currentProject.title) {
            finalProjects.push(currentProject)
        }

        formData.append('projects_data', JSON.stringify(finalProjects.map(p => ({
            title: p.title,
            client: p.client,
            type: p.type,
            desc: p.desc,
            solution: p.solution,
            outcome: p.outcome,
            tags: p.tags
        }))))

        finalProjects.forEach((p, index) => {
            if (p.imageFile) {
                formData.append(`project_image_${index}`, p.imageFile)
            }
        })

        const res = await createProfile(formData)

        setIsPending(false)
        if (res.success) {
            setIsOpen(false)
            setStep(1)
            setProjects([])
            setEducation([])
            setSelectedStack({
                "Backend & Arquitectura": [],
                "Bases de Datos": [],
                "DevOps & Infra": [],
                "Frontend & Diseño": []
            })
            setCurrentProject({
                title: '', client: '', type: 'Laboral', desc: '', solution: '', outcome: '', tags: [], imageFile: null
            })
            setCurrentEdu({ institution: '', degree: '', period: '', status: 'Completed' })
            router.refresh()
        }
    }

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else if (step === 2) {
            if (industry === 'Tech') {
                setStep(3);
            } else {
                // Legal finishes
            }
        } else if (step === 3) {
            if (industry === 'Tech') {
                setStep(4); // Tech Stack
            }
        } else if (step === 4) {
            if (industry === 'Tech') {
                setStep(5); // Education
            }
        } else if (step === 5) {
            if (industry === 'Tech') {
                setStep(6); // Projects
            }
        }
    }

    const isLastStep = (industry === 'Tech' && step === 6) || (industry === 'Legal' && step === 2);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
            >
                <UserPlus size={18} />
                <span>Register New Profile</span>
            </button>
        )
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 text-left">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 h-auto max-h-[90vh] overflow-y-auto">

                <div className="bg-slate-50 px-6 py-4 border-b flex justify-between items-center sticky top-0 bg-slate-50 z-10 w-full">
                    <h2 className="text-xl font-bold text-slate-800">
                        {step === 1 && 'New Profile'}
                        {step === 2 && 'Key Statistics'}
                        {step === 3 && 'Technical Specialties'}
                        {step === 4 && 'Arsenal Tecnológico'}
                        {step === 5 && 'Historial Académico'}
                        {step === 6 && 'Featured Project'}
                    </h2>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={onSubmit} className="p-6 space-y-6">

                    {/* STEP 1: BASIC INFO */}
                    <div className={step === 1 ? 'block space-y-6' : 'hidden'}>
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
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label><input name="name" required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" placeholder="e.g. Cristian Puma" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Headline</label><input name="headline" required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" placeholder="e.g. Senior Software Architect" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Email</label><input name="email" type="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Phone</label><input name="phone" required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            </div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Location</label><input name="location" required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Bio</label><textarea name="bio" rows={3} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none" /></div>
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
                                    <input name="social_linkedin" className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://linkedin.com/in/..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">GitHub</label>
                                    <input name="social_github" className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://github.com/..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">YouTube</label>
                                    <input name="social_youtube" className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="https://youtube.com/@..." />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] font-bold text-slate-400 uppercase">Email (Social)</label>
                                    <input name="social_email" className="w-full px-3 py-2 rounded border border-slate-200 text-xs outline-none focus:border-cyan-500" placeholder="ejemplo@correo.com" />
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
                                    <input name={`stat_${stat.name}`} required className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none" placeholder={stat.placeholder} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STEP 3: TECH SPECIALTIES (Grid) */}
                    <div className={step === 3 ? 'block' : 'hidden'}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {TECH_SPECIALTIES.map((spec) => {
                                const Icon = spec.icon
                                return (
                                    <label key={spec.id} className="cursor-pointer relative group">
                                        <input type="checkbox" name="specialties" value={`${spec.title}|${spec.description}`} className="peer sr-only" />
                                        <div className="h-full border border-slate-200 rounded-lg p-4 hover:border-cyan-500 hover:bg-cyan-50/10 peer-checked:bg-cyan-900 peer-checked:border-cyan-500 peer-checked:text-white transition-all">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-slate-100 rounded text-slate-600 peer-checked:bg-cyan-500 peer-checked:text-black"><Icon size={20} /></div>
                                                <div><div className="font-bold text-sm mb-1">{spec.title}</div><div className="text-xs opacity-70 leading-relaxed">{spec.description}</div></div>
                                            </div>
                                            <div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-cyan-400"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
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
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Added Projects ({projects.length})</h4>
                                {projects.map((p, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 p-3 rounded border border-slate-200">
                                        <div><div className="font-bold text-slate-800 text-sm">{p.title}</div><div className="text-xs text-slate-500">{p.client || 'Personal'} • {p.tags.length} techs</div></div>
                                        <button type="button" onClick={() => removeProject(idx)} className="text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                {projects.length > 0 ? <Plus size={18} className="text-cyan-500" /> : <Briefcase size={18} className="text-cyan-500" />}
                                {projects.length > 0 ? 'Add Another Project' : 'Add First Project'}
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <label className="cursor-pointer">
                                    <input type="radio" name="current_project_type" value="Laboral" className="peer sr-only" checked={currentProject.type === 'Laboral'} onChange={() => setCurrentProject({ ...currentProject, type: 'Laboral' })} />
                                    <div className="border border-slate-200 peer-checked:border-cyan-500 peer-checked:bg-cyan-50 rounded-lg p-3 flex items-center gap-2 transition-all"><Building size={16} className="text-slate-400 peer-checked:text-cyan-600" /><span className="font-medium text-xs text-slate-700">Corporate</span></div>
                                </label>
                                <label className="cursor-pointer">
                                    <input type="radio" name="current_project_type" value="Personal" className="peer sr-only" checked={currentProject.type === 'Personal'} onChange={() => setCurrentProject({ ...currentProject, type: 'Personal' })} />
                                    <div className="border border-slate-200 peer-checked:border-purple-500 peer-checked:bg-purple-50 rounded-lg p-3 flex items-center gap-2 transition-all"><FolderGit2 size={16} className="text-slate-400 peer-checked:text-purple-600" /><span className="font-medium text-xs text-slate-700">Personal</span></div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input value={currentProject.title} onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Project Title" />
                                    {currentProject.type === 'Laboral' && (<input value={currentProject.client} onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none text-sm" placeholder="Client / Company" />)}
                                </div>
                                <textarea value={currentProject.desc} onChange={(e) => setCurrentProject({ ...currentProject, desc: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="🧠 The Challenge..." />
                                <div className="grid grid-cols-2 gap-4">
                                    <textarea value={currentProject.solution} onChange={(e) => setCurrentProject({ ...currentProject, solution: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="🛠️ Solution..." />
                                    <textarea value={currentProject.outcome} onChange={(e) => setCurrentProject({ ...currentProject, outcome: e.target.value })} rows={2} className="w-full px-4 py-2 rounded-lg border border-slate-300 outline-none resize-none text-sm" placeholder="📈 Outcome..." />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Technologies</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 h-32 overflow-y-auto border rounded p-2 custom-scrollbar">
                                        {TECH_OPTIONS.map(tech => (
                                            <label key={tech} className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 rounded">
                                                <input type="checkbox" checked={currentProject.tags.includes(tech)} onChange={() => toggleTech(tech)} className="rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                                                <span className="text-xs text-slate-700">{tech}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                                    <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => { if (e.target.files?.[0]) { setCurrentProject({ ...currentProject, imageFile: e.target.files[0] }) } }} />
                                    <div className="flex flex-col items-center">
                                        {currentProject.imageFile ? (<><CheckCircle2 className="text-green-500 mb-1" size={20} /><span className="text-xs text-green-700 font-medium">{currentProject.imageFile.name}</span></>) : (<><ImageIcon className="text-slate-400 mb-1" size={20} /><span className="text-xs text-slate-500">Upload Project Image</span></>)}
                                    </div>
                                </div>
                                <button type="button" onClick={handleAddProject} className="w-full py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm">+ Add to List</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-between gap-3 border-t border-slate-100 mt-6 sticky bottom-0 bg-white">
                        {step > 1 ? (
                            <button type="button" onClick={() => setStep(step - 1)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Back</button>
                        ) : (
                            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Cancel</button>
                        )}
                        {isLastStep ? (
                            <button type="submit" disabled={isPending} className="bg-slate-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-50 ml-auto">{isPending ? 'Saving...' : 'Create Profile'}</button>
                        ) : (
                            <button type="button" onClick={handleNext} className="bg-slate-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-slate-800 ml-auto">Next</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

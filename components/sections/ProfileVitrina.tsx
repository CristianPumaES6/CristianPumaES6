"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Shield, Cpu, Scale, Award, BookOpen, Terminal as TerminalIcon, ChevronRight, ChevronLeft } from "lucide-react";

type ViewMode = "tech" | "legal";

export function ProfileVitrina({ profiles }: { profiles: any[] }) {
    const [view, setView] = useState<ViewMode>("tech");

    // Filter profiles by industry
    const techProfiles = profiles?.filter(p => p.industry === "Tech") || [];
    const legalProfiles = profiles?.filter(p => p.industry === "Legal") || [];

    const [techIndex, setTechIndex] = useState(0);
    const [legalIndex, setLegalIndex] = useState(0);

    const currentTechProfile = techProfiles[techIndex];
    const currentLegalProfile = legalProfiles[legalIndex];

    return (
        <section id="vitrina" className="container mx-auto px-4 py-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">VITRINA DE PERFILES</h2>
                    <p className="text-muted-foreground mt-2">Adaptación inteligente según industria.</p>
                </div>

                <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                    <button
                        onClick={() => setView("tech")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'tech' ? 'bg-primary text-black' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Vista Tech
                    </button>
                    <button
                        onClick={() => setView("legal")}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'legal' ? 'bg-yellow-500 text-black' : 'text-zinc-400 hover:text-white'}`}
                    >
                        Vista Legal
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {view === "tech" ? (
                    <TechView
                        key="tech"
                        profile={currentTechProfile}
                        onNext={() => setTechIndex((prev) => (prev + 1) % techProfiles.length)}
                        onPrev={() => setTechIndex((prev) => (prev - 1 + techProfiles.length) % techProfiles.length)}
                        hasMultiple={techProfiles.length > 1}
                    />
                ) : (
                    <LegalView
                        key="legal"
                        profile={currentLegalProfile}
                        onNext={() => setLegalIndex((prev) => (prev + 1) % legalProfiles.length)}
                        onPrev={() => setLegalIndex((prev) => (prev - 1 + legalProfiles.length) % legalProfiles.length)}
                        hasMultiple={legalProfiles.length > 1}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

function TechView({ profile, onNext, onPrev, hasMultiple }: { profile: any; onNext: () => void; onPrev: () => void; hasMultiple: boolean }) {
    if (!profile) return (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <p className="text-muted-foreground font-mono">NO_TECH_PROFILES_FOUND</p>
        </div>
    );

    const ranking = profile.attributes?.find((a: any) => a.label === "RANKING")?.value || "#---";
    const skillItems = profile.skillCategories?.flatMap((c: any) => c.items).slice(0, 4) || [];
    const featuredProject = profile.projects?.find((p: any) => p.highlight) || profile.projects?.[0];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
            {/* Sidebar Stats */}
            <div className="lg:col-span-3 space-y-6">
                <div className="terminal-box rounded-xl p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Shield size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono text-primary/60 uppercase">System Rank</div>
                                <div className="text-xl font-bold font-mono">{ranking}</div>
                            </div>
                        </div>
                        {hasMultiple && (
                            <div className="flex gap-1">
                                <button onClick={onPrev} className="p-1 hover:text-primary transition-colors"><ChevronLeft size={16} /></button>
                                <button onClick={onNext} className="p-1 hover:text-primary transition-colors"><ChevronRight size={16} /></button>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">Verification status</div>
                        <div className="flex items-center gap-2 text-green-500 text-sm font-mono">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            AUTHENTICATED
                        </div>

                        <div className="pt-2">
                            <p className="text-sm font-bold text-white truncate">{profile.name}</p>
                            <p className="text-[10px] text-zinc-500 font-mono truncate uppercase">{profile.headline}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Badge</div>
                            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center border border-primary/20 bg-black/40">
                                <Cpu size={48} className="text-primary animate-pulse-subtle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Code Vault Carousel */}
            <div className="lg:col-span-6">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-mono text-sm text-primary">
                            <Code size={18} /> THE_CODE_VAULT
                        </div>
                    </div>

                    <div className="relative group">
                        {featuredProject ? (
                            <div className="aspect-video rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden relative">
                                {featuredProject.imageUrl ? (
                                    <img
                                        src={featuredProject.imageUrl}
                                        alt={featuredProject.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                        <Code size={100} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-2xl font-bold mb-2">{featuredProject.title}</h4>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div>
                                            <span className="text-[10px] font-mono text-primary uppercase">Challenge:</span>
                                            <p className="text-sm text-zinc-400 line-clamp-1">{featuredProject.description || "Complex system architecture"}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-mono text-primary uppercase">Outcome:</span>
                                            <p className="text-sm text-zinc-400 line-clamp-1">{featuredProject.outcome || "Optimized performance"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-600 font-mono italic">
                                NO_PROJECTS_FOUND
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Live Console */}
            <div className="lg:col-span-3">
                <div className="terminal-box rounded-xl h-full flex flex-col">
                    <div className="p-3 border-b border-primary/20 bg-black/60 flex items-center gap-2 font-mono text-[10px]">
                        <TerminalIcon size={12} className="text-primary" /> LIVE_CONSOLE.LOG
                    </div>
                    <div className="p-4 flex-1 font-mono text-xs space-y-2 overflow-hidden">
                        <div className="flex gap-2 text-zinc-500"><span>[09:41]</span> <span className="text-primary">Loading Skills...</span></div>
                        {skillItems.length > 0 ? skillItems.map((skill: any, i: number) => (
                            <div key={skill.id} className="flex gap-2 text-zinc-400">
                                <span>[09:{42 + i}]</span>
                                <span className="truncate">&gt; {skill.name.padEnd(8, ' ')} [███████---]</span>
                            </div>
                        )) : (
                            <div className="text-zinc-600 italic">SKIP_LEVEL: NO_SKILLS</div>
                        )}
                        <div className="flex gap-2 text-zinc-500 animate-pulse"><span>[09:{42 + skillItems.length}]</span> <span>_</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function LegalView({ profile, onNext, onPrev, hasMultiple }: { profile: any; onNext: () => void; onPrev: () => void; hasMultiple: boolean }) {
    if (!profile) return (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <p className="text-muted-foreground font-mono">NO_LEGAL_PROFILES_FOUND</p>
        </div>
    );

    const merito = profile.attributes?.find((a: any) => a.label === "MÉRITO")?.value || "N/A";
    const ciclo = profile.attributes?.find((a: any) => a.label === "CICLO")?.value || "N/A";
    const education = profile.education?.[0];
    const legalExperiences = profile.experiences?.filter((e: any) => e.type === "Job" || e.type === "Practice").slice(0, 2) || [];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
            {/* Merit Sidebar */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-zinc-900 border border-yellow-500/20 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[50px] group-hover:bg-yellow-500/10 transition-colors" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/30">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight uppercase">Mérito Académico</h3>
                                    <p className="text-yellow-500/70 text-sm font-serif italic truncate max-w-[150px]">{profile.name}</p>
                                </div>
                            </div>
                            {hasMultiple && (
                                <div className="flex gap-1">
                                    <button onClick={onPrev} className="p-1 hover:text-yellow-500 transition-colors"><ChevronLeft size={16} /></button>
                                    <button onClick={onNext} className="p-1 hover:text-yellow-500 transition-colors"><ChevronRight size={16} /></button>
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-2 font-serif text-zinc-300">
                                    <span>Posición Curricular</span>
                                    <span className="text-yellow-500">{merito}</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-yellow-500 w-[75%]" />
                                </div>
                                <div className="mt-2 text-[10px] text-zinc-500 uppercase tracking-widest text-right">{ciclo} {education?.period ? `(${education.period})` : ''}</div>
                            </div>

                            <div className="pt-6 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="text-zinc-500" size={18} />
                                    <span className="text-sm truncate">{education?.institution || "Institución no especificada"}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Award className="text-zinc-500" size={18} />
                                    <span className="text-sm">{profile.certifications?.length || 0} Certificaciones Activas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Portfolio */}
            <div className="lg:col-span-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-3 mb-8 text-zinc-300">
                        <Scale size={24} />
                        <h3 className="text-xl font-bold uppercase tracking-widest">Legal_Portfolio</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {legalExperiences.length > 0 ? legalExperiences.map((exp: any) => (
                            <div key={exp.id} className="p-6 rounded-xl bg-black/40 border border-white/5 hover:border-yellow-500/30 transition-all cursor-default group">
                                <h4 className="font-bold text-lg mb-1 group-hover:text-yellow-500 transition-colors truncate">{exp.organization}</h4>
                                <p className="text-xs text-zinc-500 mb-4 uppercase tracking-tighter truncate">{exp.title}</p>
                                <div className="text-xs text-zinc-400 font-mono mb-2">{exp.period}</div>
                            </div>
                        )) : (
                            <div className="md:col-span-2 py-12 text-center text-zinc-600 font-mono italic">
                                NO_EXPERIENCE_RECORDS
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Scale, Award, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

export function LegalView({ profile, onNext, onPrev, hasMultiple }: { profile: any; onNext: () => void; onPrev: () => void; hasMultiple: boolean }) {
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

                    {hasMultiple && (
                        <div className="flex justify-between items-center bg-zinc-900 border border-white/10 rounded-xl p-3 shadow-lg mt-4">
                            <button onClick={onPrev} className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 transition flex items-center gap-2 text-xs font-serif uppercase">
                                <ChevronLeft size={16} /> Anterior
                            </button>
                            <span className="text-[10px] text-zinc-600 font-serif italic">Cambiar Perfil</span>
                            <button onClick={onNext} className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 transition flex items-center gap-2 text-xs font-serif uppercase">
                                Siguiente <ChevronRight size={16} />
                            </button>
                        </div>
                    )}
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

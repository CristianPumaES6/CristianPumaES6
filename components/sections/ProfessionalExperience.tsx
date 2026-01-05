"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface Project {
    id: string;
    title: string;
    client: string | null;
    type: string | null;
    description: string | null;
    solution: string | null;
    outcome: string | null;
    imageUrl: string | null;
    tags: { id: string; name: string }[];
}

interface ProfessionalExperienceProps {
    projects: Project[];
    theme: any;
    isTech: boolean;
    yearsOfExperience?: string | null;
}

export function ProfessionalExperience({ projects, theme, isTech, yearsOfExperience }: ProfessionalExperienceProps) {
    const publicProjects = useMemo(() => projects.filter(p => p.client !== 'Confidential'), [projects]);
    const privateProjects = useMemo(() => projects.filter(p => p.client === 'Confidential'), [projects]);

    // Default selection: Public if exists, otherwise Private
    const initialFilter = publicProjects.length > 0 ? 'public' : (privateProjects.length > 0 ? 'private' : 'public');
    const [filter, setFilter] = useState<'public' | 'private'>(initialFilter);

    const filteredProjects = filter === 'public' ? publicProjects : privateProjects;

    return (
        <section>
            <div className="space-y-8 mb-12">
                <h2 className={theme.sectionHeading + " !mb-0"}>Professional Experience</h2>

                {isTech && (
                    <div className="flex items-center gap-6">
                        {yearsOfExperience && (
                            <div className="flex flex-col border-r border-slate-800 pr-6 py-1">
                                <div className="text-2xl font-black text-white leading-none tracking-tight">
                                    {yearsOfExperience}
                                </div>
                                <div className="text-[9px] text-cyan-500 font-black uppercase tracking-[0.2em] mt-1.5">
                                    Años Exp.
                                </div>
                            </div>
                        )}

                        <div className="flex bg-slate-900/50 p-1.5 rounded-xl border border-slate-800 backdrop-blur-sm">
                            <button
                                onClick={() => setFilter('public')}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 text-xs font-bold tracking-wider uppercase",
                                    filter === 'public'
                                        ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                                        : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                Públicos
                                <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'public' ? "bg-black/20" : "bg-slate-800")}>
                                    {publicProjects.length}
                                </span>
                            </button>
                            <button
                                onClick={() => setFilter('private')}
                                className={cn(
                                    "flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 text-xs font-bold tracking-wider uppercase",
                                    filter === 'private'
                                        ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                                        : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                Privados
                                <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'private' ? "bg-black/20" : "bg-slate-800")}>
                                    {privateProjects.length}
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="space-y-8 min-h-[400px]">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((proj) => (
                        <div key={proj.id} className={theme.card}>
                            <div className="flex flex-col md:flex-row justify-between mb-6">
                                <div>
                                    <h3 className={theme.cardTitle}>{proj.title}</h3>
                                    <div className={cn("font-medium flex items-center gap-2", isTech ? "text-slate-400" : "text-slate-600 italic")}>
                                        {proj.client && <span>{proj.client}</span>}
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider px-2 py-1 rounded",
                                        isTech ? "text-cyan-400 bg-cyan-950/30 border border-cyan-900/50" : "text-slate-500 border border-slate-200")}>
                                        {proj.type === 'Laboral' ? 'Corporate' : 'Personal'}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                {proj.description && (
                                    <div className="text-sm leading-relaxed opacity-80">
                                        <strong className={isTech ? "text-cyan-500" : "text-slate-900"}>The Challenge: </strong>
                                        {proj.description}
                                    </div>
                                )}
                                {proj.solution && (
                                    <div className="text-sm leading-relaxed opacity-80">
                                        <strong className={isTech ? "text-cyan-500" : "text-slate-900"}>Solution: </strong>
                                        {proj.solution}
                                    </div>
                                )}
                                {proj.outcome && (
                                    <div className="text-sm leading-relaxed opacity-80">
                                        <strong className={isTech ? "text-cyan-500" : "text-slate-900"}>Outcome: </strong>
                                        {proj.outcome}
                                    </div>
                                )}
                            </div>

                            {proj.imageUrl && (
                                <div className="mb-6 rounded-lg overflow-hidden border border-slate-800/50">
                                    <img src={proj.imageUrl} alt={proj.title} className="w-full h-auto object-cover max-h-80 opacity-90 hover:opacity-100 transition-opacity" />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {proj.tags.map((t) => (
                                    <span key={t.id} className={theme.tag}>{t.name}</span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-2xl text-slate-500">
                        <p className="font-mono text-sm tracking-widest uppercase">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/data/profile";

export function Projects({ projects, yearsOfExperience, education, certifications }: { projects?: any[], yearsOfExperience?: string | null, education?: any[], certifications?: any[] }) {
    const defaultEducation = PROFILE.education || [];
    const displayEducation = education || defaultEducation;

    // Filter Logic
    const allProjects = projects || PROFILE.projects;
    const publicProjects = allProjects.filter((p: any) => p.client !== 'Confidential');
    const privateProjects = allProjects.filter((p: any) => p.client === 'Confidential');

    // Default to public if available, else private
    const [filter, setFilter] = useState<'public' | 'private'>(
        publicProjects.length > 0 ? 'public' : (privateProjects.length > 0 ? 'private' : 'public')
    );

    const filteredProjects = filter === 'public' ? publicProjects : privateProjects;

    return (
        <section id="projects" className="py-20 relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
                        <p className="text-muted-foreground">Casos de éxito y sistemas en producción.</p>
                    </div>

                    {/* Stats & Filter Control */}
                    <div className="flex flex-wrap items-center gap-6">
                        {yearsOfExperience && (
                            <div className="flex flex-col border-r border-slate-800 pr-6 py-1">
                                <div className="text-2xl font-black text-foreground leading-none tracking-tight">
                                    {yearsOfExperience}
                                </div>
                                <div className="text-[9px] text-primary font-black uppercase tracking-[0.2em] mt-1.5">
                                    Años Exp.
                                </div>
                            </div>
                        )}

                        <div className="flex bg-secondary/30 p-1.5 rounded-xl border border-border backdrop-blur-sm relative">
                            {/* Pulsating Filter Buttons */}
                            <button
                                onClick={() => setFilter('public')}
                                className={cn(
                                    "relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 text-xs font-bold tracking-wider uppercase cursor-pointer",
                                    filter === 'public'
                                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {filter === 'public' && (
                                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur-sm animate-pulse -z-10"></span>
                                )}
                                Públicos
                                <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'public' ? "bg-black/20" : "bg-card/50")}>
                                    {publicProjects.length}
                                </span>
                            </button>

                            <button
                                onClick={() => setFilter('private')}
                                className={cn(
                                    "relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-300 text-xs font-bold tracking-wider uppercase cursor-pointer",
                                    filter === 'private'
                                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {filter === 'private' && (
                                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 opacity-75 blur-sm animate-pulse -z-10"></span>
                                )}
                                Privados
                                <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'private' ? "bg-black/20" : "bg-card/50")}>
                                    {privateProjects.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project: any, index: number) => (
                            <div key={index}> {/* Removed AnimatePresence wrapper for simplicity in this edit, standard map */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-2xl glass-card"
                                >
                                    {/* Content Side */}
                                    <div className="md:col-span-8 space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-primary font-medium">{project.company || project.client || 'En Desarrollo'}</p>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4 py-2">
                                            <div className="space-y-1">
                                                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">El Desafío</span>
                                                <p className="text-sm text-foreground/80">{project.context || project.description}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Resultado</span>
                                                <p className="text-sm text-foreground/80">{project.result || project.outcome || 'Implementación Exitosa'}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Solución Técnica</span>
                                            <p className="text-sm text-muted-foreground">{project.solution}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {(project.tech || project.tags?.map((t: any) => t.name) || []).map((t: string) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual Side with Rotating Gallery */}
                                    <div className="md:col-span-4 rounded-xl bg-accent/30 border border-border flex items-center justify-center min-h-[200px] group-hover:border-primary/30 transition-colors relative overflow-hidden h-64 md:h-auto">
                                        {project.images && project.images.length > 0 ? (
                                            <ProjectGallery images={project.images.map((img: any) => img.url)} title={project.title} />
                                        ) : project.imageUrl ? (
                                            <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                                        ) : (
                                            <div className="text-center p-4 relative z-10">
                                                <div className="w-16 h-16 rounded-full bg-background/50 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-3 shadow-lg">
                                                    <span className="font-bold text-xl text-white">{project.title[0]}</span>
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    {project.client === 'Confidential' ? 'SISTEMA PRIVADO' : 'CASO PÚBLICO'}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                </motion.div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-2xl text-slate-500">
                            <p className="font-mono text-sm tracking-widest uppercase">No se encontraron proyectos en esta categoría.</p>
                        </div>
                    )}
                </div>

                {/* EDUCATION SECTION INCLUDED HERE AS REQUESTED */}
                {displayEducation.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-white/5">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Formación Académica</h2>
                                <p className="text-muted-foreground">Base teórica y certificaciones profesionales.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {displayEducation.map((edu: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <span className={cn(
                                            "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border",
                                            edu.status === 'Completed' ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                        )}>
                                            {edu.status === 'In Progress' ? 'En Curso' : (edu.status || 'Completado')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{edu.institution}</h3>
                                    <p className="text-sm font-medium text-slate-400 mb-4">{edu.degree}</p>
                                    <p className="text-xs text-slate-500 font-mono flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        {edu.period}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
                {/* CERTIFICATIONS SECTION (New) */}
                {certifications && certifications.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-white/5">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Asistencias a Cursos</h2>
                                <p className="text-muted-foreground text-sm">Formación continua y actualización tecnológica.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certifications.map((cert: any, i: number) => (
                                <div key={i} className="p-4 rounded-xl bg-secondary/5 border border-white/5 hover:bg-secondary/10 transition-colors flex flex-col gap-2">
                                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                                        <span className="flex items-center gap-1.5 text-primary">
                                            <Calendar className="w-3 h-3" />
                                            {cert.date}
                                        </span>
                                        <span>{cert.provider}</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-foreground leading-tight">
                                        {cert.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}



function ProjectGallery({ images, title }: { images: string[], title: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="absolute inset-0 w-full h-full bg-slate-900">
            <AnimatePresence mode='wait'>
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`${title} view ${index + 1}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute bottom-2 right-2 flex gap-1 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={cn("w-1.5 h-1.5 rounded-full transition-all", i === index ? "bg-cyan-400 w-3" : "bg-white/30")}
                    />
                ))}
            </div>
        </div>
    )
}

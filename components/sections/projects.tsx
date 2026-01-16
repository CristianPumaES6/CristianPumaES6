"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge, GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/data/profile";
import { TechIcon } from "@/components/ui/TechIcon";

export function Projects({ projects, yearsOfExperience, education, certifications }: { projects?: any[], yearsOfExperience?: string | null, education?: any[], certifications?: any[] }) {
    const defaultEducation = PROFILE.education || [];
    const displayEducation = education || defaultEducation;

    // --- SORTING LOGIC ---
    const parseDate = (dateStr: string) => {
        if (!dateStr) return 0;
        // Try parsing "YYYY"
        const yearMatch = dateStr.match(/(\d{4})/);
        if (yearMatch) return parseInt(yearMatch[0]);
        // Fallback for other formats, try Date.parse
        const parsed = Date.parse(dateStr);
        return isNaN(parsed) ? 0 : parsed;
    };

    const sortedEducation = [...displayEducation].sort((a, b) => {
        // Sort by order descending if defined
        if (a.order !== undefined && b.order !== undefined) {
            return (b.order || 0) - (a.order || 0);
        }
        // Extract start year from period "2016 - 2020"
        const startA = parseDate(a.period?.split('-')[0] || '');
        const startB = parseDate(b.period?.split('-')[0] || '');
        return startB - startA;
    });

    const sortedCertifications = certifications ? [...certifications].sort((a, b) => {
        // Sort by order descending if defined
        if (a.order !== undefined && b.order !== undefined) {
            return (b.order || 0) - (a.order || 0);
        }
        return parseDate(b.date) - parseDate(a.date);
    }) : [];

    // Projects: Use existing order (assuming user manually ordered them in EditModal) or if 'date' existed, sort by it. 
    // Since we don't have a reliable date field on projects in standard profile, we respect the array order.
    // However, if the user explicitly wants them sorted, and they are not, they might need to use the Reorder feature in EditModal.

    // Filter Logic
    const allProjects = (projects || PROFILE.projects).slice().sort((a: any, b: any) => {
        if (a.order !== undefined && b.order !== undefined) {
            return (b.order || 0) - (a.order || 0);
        }
        return 0; // maintain original if no order
    });
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

                {/* Projects Grid - Scrollable */}
                <div className="max-h-[800px] overflow-y-auto custom-scrollbar pr-4">
                    <div className="grid gap-8 pb-4">
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
                                                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5"
                                                    >
                                                        <TechIcon name={t} className="w-3 h-3" />
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
                </div>

                {/* EDUCATION SECTION */}
                {sortedEducation.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-white/5">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">Formación Académica</h2>
                                <p className="text-muted-foreground">Base teórica y certificaciones profesionales.</p>
                            </div>
                        </div>

                        <div className={cn(
                            "grid gap-6",
                            sortedEducation.length > 4 ? "md:grid-cols-2 max-h-[600px] overflow-y-auto custom-scrollbar pr-4" : "md:grid-cols-2"
                        )}>
                            {sortedEducation.map((edu: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative overflow-hidden p-6 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/30 transition-all group shrink-0"
                                >
                                    {/* Background Logo Watermark */}
                                    {edu.logoUrl && (
                                        <div className="absolute -right-8 -bottom-8 opacity-15 pointer-events-none grayscale group-hover:grayscale-0 group-hover:opacity-25 transition-all duration-500">
                                            <img
                                                src={edu.logoUrl}
                                                alt="Institution Logo"
                                                className="w-96 h-96 object-contain transform -rotate-12 translate-x-10 translate-y-10"
                                            />
                                        </div>
                                    )}

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary backdrop-blur-sm">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <span className={cn(
                                                "px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border backdrop-blur-sm",
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
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
                {/* CERTIFICATIONS SECTION (New) */}
                {sortedCertifications.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-white/5">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Asistencias a Cursos</h2>
                                <p className="text-muted-foreground text-sm">Formación continua y actualización tecnológica.</p>
                            </div>
                        </div>

                        <div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                                {sortedCertifications.map((cert: any, i: number) => (
                                    <div key={i} className="p-4 rounded-xl bg-secondary/5 border border-white/5 hover:bg-secondary/10 transition-colors flex flex-col gap-2 shrink-0">
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
                    </div>
                )}
            </div>
        </section>
    );
}



// --- POPUP / LIGHTBOX COMPONENT ---
function ProjectGallery({ images, title }: { images: string[], title: string }) {
    const [index, setIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Auto-rotate for the preview card
    useEffect(() => {
        if (images.length <= 1 || lightboxOpen) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length, lightboxOpen]);

    const openLightbox = () => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Keyboard navigation
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
        <>
            {/* CARD PREVIEW */}
            <div
                className="absolute inset-0 w-full h-full bg-slate-900 cursor-pointer group/gallery"
                onClick={openLightbox}
            >
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={`preview-${images[index]}`}
                        src={images[index]}
                        alt={`${title} preview`}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay indicating clickability */}
                <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover/gallery:opacity-100 transition-opacity transform scale-90 group-hover/gallery:scale-100 bg-black/50 backdrop-blur-md text-white p-3 rounded-full border border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                    </div>
                </div>

                <div className="absolute bottom-3 right-3 flex gap-1.5 z-10 pointer-events-none">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "h-1 rounded-full transition-all duration-300 shadow-sm",
                                i === index ? "bg-cyan-400 w-6" : "bg-white/30 w-1.5"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* LIGHTBOX PORTAL */}
            <AnimatePresence>
                {lightboxOpen && (
                    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-2 md:p-4">

                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/98 backdrop-blur-xl"
                            onClick={() => setLightboxOpen(false)}
                        />

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="relative w-full h-full max-w-[98vw] max-h-[95vh] flex flex-col items-center justify-center"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setLightboxOpen(false)}
                                className="absolute top-4 right-4 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all border border-white/10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>

                            {/* Main Image */}
                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg bg-transparent shadow-2xl">
                                <motion.img
                                    key={`lightbox-${images[lightboxIndex]}`}
                                    src={images[lightboxIndex]}
                                    alt="Full screen view"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                                />

                                {/* Info Caption - Overlay at bottom */}
                                <div className="absolute bottom-6 inset-x-0 text-center pointer-events-none">
                                    <div className="inline-block bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
                                        <h4 className="text-white font-bold text-lg inline mr-3">{title}</h4>
                                        <span className="text-cyan-400 text-sm font-mono tracking-widest border-l border-white/20 pl-3">{lightboxIndex + 1} / {images.length}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons - Fixed to screen sides */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-black/50 rounded-full transition-all backdrop-blur-sm border border-transparent hover:border-white/10"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-black/50 rounded-full transition-all backdrop-blur-sm border border-transparent hover:border-white/10"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

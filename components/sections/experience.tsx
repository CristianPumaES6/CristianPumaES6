"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Award, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Experience({ experiences }: { experiences: any[] }) {
    if (!experiences || experiences.length === 0) return null;

    const sortedExperiences = [...experiences].sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
            return (b.order || 0) - (a.order || 0);
        }
        return 0;
    });

    return (
        <section id="experience" className="py-20 relative border-t border-white/5">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Trayectoria Profesional</h2>
                        <p className="text-muted-foreground">Experiencia laboral y roles desempeñados.</p>
                    </div>
                </div>

                <div className="relative space-y-12">
                    {/* Vertical Line for Timeline Effect (Optional, simplistic version here) */}
                    <div className="absolute left-4 md:left-[2.25rem] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent hidden md:block" />

                    {sortedExperiences.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative grid md:grid-cols-[auto_1fr] gap-8 group"
                        >
                            {/* Logo / Timeline Node */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 transition-colors overflow-hidden">
                                    {work.companyLogoUrl ? (
                                        <img src={work.companyLogoUrl} alt={work.company} className="w-full h-full object-contain" />
                                    ) : (
                                        <Building2 className="w-8 h-8 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                                    )}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="bg-slate-900/40 border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-slate-900/60 hover:border-cyan-500/20 transition-all relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                    <Briefcase size={80} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {work.role}
                                            </h3>
                                            <div className="text-lg text-cyan-500 font-medium mt-1">{work.company}</div>
                                        </div>
                                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 uppercase tracking-wider">
                                            <Calendar size={12} />
                                            {work.period}
                                        </span>
                                    </div>

                                    <div className="grid lg:grid-cols-3 gap-8">
                                        <div className="lg:col-span-2 space-y-6">
                                            {work.responsibilities && (
                                                <div>
                                                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                                        Responsabilidades
                                                    </h4>
                                                    <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-wrap">
                                                        {work.responsibilities}
                                                    </p>
                                                </div>
                                            )}

                                            {work.achievements && (
                                                <div>
                                                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                                                        Logros Destacados
                                                    </h4>
                                                    <p className="text-slate-300 leading-relaxed text-sm italic whitespace-pre-wrap border-l-2 border-amber-500/30 pl-4">
                                                        {work.achievements}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Evidence Gallery */}
                                        {work.images && work.images.length > 0 && (
                                            <div className="lg:col-span-1">
                                                <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">
                                                    Evidencia
                                                </h4>
                                                <WorkGallery images={work.images.map((img: any) => img.url)} title={work.company} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- REUSED GALLERY LOGIC ---
function WorkGallery({ images, title }: { images: string[], title: string }) {
    const [index, setIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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
            <div className="grid grid-cols-2 gap-2">
                {images.slice(0, 4).map((img, i) => (
                    <div
                        key={i}
                        className="aspect-square rounded-lg overflow-hidden bg-black/20 border border-white/5 relative group cursor-pointer"
                        onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                    >
                        <img src={img} alt="Evidence" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                        {i === 3 && images.length > 4 && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-bold text-white text-xs">
                                +{images.length - 4}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* LIGHTBOX PORTAL */}
            <AnimatePresence>
                {lightboxOpen && (
                    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-2 md:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            onClick={() => setLightboxOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="relative w-full h-full max-w-[98vw] max-h-[95vh] flex flex-col items-center justify-center"
                        >
                            <button
                                onClick={() => setLightboxOpen(false)}
                                className="absolute top-4 right-4 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all border border-white/10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>

                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                                <motion.img
                                    key={`lightbox-${images[lightboxIndex]}`}
                                    src={images[lightboxIndex]}
                                    alt="Evidence view"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="max-w-full max-h-full object-contain"
                                />
                                <div className="absolute bottom-6 inset-x-0 text-center pointer-events-none">
                                    <div className="inline-block bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full">
                                        <h4 className="text-white font-bold text-lg inline mr-3">{title}</h4>
                                        <span className="text-cyan-400 text-sm font-mono tracking-widest border-l border-white/20 pl-3">{lightboxIndex + 1} / {images.length}</span>
                                    </div>
                                </div>
                            </div>

                            {images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-black/50 rounded-full transition-all border border-transparent hover:border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                    </button>
                                    <button onClick={nextImage} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-black/50 rounded-full transition-all border border-transparent hover:border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import { Badge } from "lucide-react"; // Wait, Badge is usually a component, let's make a simple one inline or use standard div
import { PROFILE } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Proyectos Destacados</h2>
                        <p className="text-muted-foreground">Casos de éxito y sistemas en producción.</p>
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Github className="w-4 h-4" /> Ver más en GitHub
                    </Button>
                </div>

                <div className="grid gap-8">
                    {PROFILE.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative grid md:grid-cols-12 gap-8 p-8 rounded-2xl glass-card"
                        >
                            {/* Content Side */}
                            <div className="md:col-span-8 space-y-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-primary font-medium">{project.company}</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 py-2">
                                    <div className="space-y-1">
                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">El Desafío</span>
                                        <p className="text-sm text-foreground/80">{project.context}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Resultado</span>
                                        <p className="text-sm text-foreground/80">{project.result}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Solución Técnica</span>
                                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Side (Abstract for now, could be image later) */}
                            <div className="md:col-span-4 rounded-xl bg-accent/30 border border-border flex items-center justify-center min-h-[200px] group-hover:border-primary/30 transition-colors">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-3 shadow-lg">
                                        <span className="font-bold text-xl">{project.title[0]}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">Sistema Privado / Corporativo</span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

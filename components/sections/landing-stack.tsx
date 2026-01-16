"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/TechIcon";
import { Copy, Database, Cloud, Code2, Server } from "lucide-react";
import { cn } from "@/lib/utils";



export function LandingStack({ stack, repos }: { stack?: any[], repos?: string }) {
    if (!stack || stack.length === 0) return null;

    // Helper to get icon for category
    const getCategoryIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('back')) return Server;
        if (n.includes('data')) return Database;
        if (n.includes('cloud') || n.includes('devops')) return Cloud;
        return Code2;
    };

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-slate-950 -z-20" />

            {/* Background Gradient Mesh */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[120px] rounded-full mix-blend-screen opacity-30 animate-pulse-subtle -z-10" />

            <div className="container px-4 mx-auto">
                {/* Header & Stats - Optimized Layout */}
                <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left max-w-2xl"
                    >

                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
                            Arsenal tecnológico <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">& Capacidades.</span>
                        </h2>
                        <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
                            Un arsenal optimizado para transformar desafíos complejos en soluciones de alta disponibilidad.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-8 lg:gap-12 lg:border-l lg:border-white/10 lg:pl-12"
                    >
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{repos || '50+'}</div>
                            <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Repositories</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stack.reduce((acc, cat) => acc + (cat.items?.length || 0), 0)}+</div>
                            <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Technologies</div>
                        </div>
                    </motion.div>
                </div>

                {/* Grid of 4 Stack Lists (Clean Style) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-h-[500px] overflow-y-auto custom-scrollbar pb-2">
                    {stack.map((group, idx) => {
                        const Icon = getCategoryIcon(group.name || group.category);
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4 pl-1 border-b border-white/5 pb-2">
                                        <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400">
                                            <Icon size={14} />
                                        </div>
                                        <span className="font-bold text-slate-200 text-xs uppercase tracking-wide truncate">
                                            {group.name || group.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        {(group.items || group.skills || []).map((item: any, i: number) => {
                                            const itemName = typeof item === 'string' ? item : item.name;
                                            return (
                                                <div key={i} className="group/item flex items-center gap-3 px-3 py-2 bg-cyan-950/20 border border-cyan-500/10 rounded hover:bg-cyan-500/10 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all cursor-default">
                                                    <div className="p-1 rounded bg-cyan-500/5 text-cyan-500/70 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-500/20 transition-colors">
                                                        <TechIcon name={itemName} className="w-3.5 h-3.5" />
                                                    </div>
                                                    <span className="text-xs font-mono text-cyan-200/60 group-hover/item:text-cyan-100 transition-colors">
                                                        {itemName}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

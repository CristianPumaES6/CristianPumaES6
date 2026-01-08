"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Terminal as TerminalIcon } from "lucide-react";

export function NexoHero() {
    const [text, setText] = useState("");
    const fullText = "Ingresa un nombre o empresa...";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section id="hero" className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-subtle" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-subtle" />
                <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none animate-scanline" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Más allá de una simple tarjeta
                    </h1>
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-sm font-mono text-primary/80 uppercase tracking-widest list-none">
                        <li>Ingeniando tu identidad</li>
                        <li>El estándar de la excelencia</li>
                        <li>Una tarjeta</li>
                        <li>Infinitas posibilidades</li>
                    </ul>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        No busques, deja que las oportunidades te encuentren. ProCard Lleva tu negocio al futuro con la Commerce: Cartas virtuales interactivas, gestión de inventario en tiempo real y un sistema de pedidos dinámico que convierte a cada visitante en un cliente recurrente.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto w-full"
                >
                    <div className="terminal-box rounded-lg p-1 group">
                        <div className="flex items-center gap-2 px-4 py-2 bg-black/60 rounded-t-md border-b border-primary/20">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="flex items-center gap-2 ml-4 text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                                <TerminalIcon size={12} />
                                Buscar empleo por puesto o palabra clave
                            </div>
                        </div>

                        <div className="relative flex items-center bg-black/40 p-4 rounded-b-md">
                            <Search className="absolute left-6 text-primary/50 group-hover:text-primary transition-colors duration-300" size={20} />
                            <div className="w-full flex items-center">
                                <div className="w-full bg-transparent border-none outline-none text-primary font-mono text-lg md:text-xl pl-10 pr-4 py-2 pointer-events-none select-none">
                                    {text}
                                    <span className="w-2.5 h-6 bg-primary ml-1 inline-block animate-blink align-middle" />
                                </div>
                                {/* Visual input that actually receives focus if we wanted it interactive */}
                                <input
                                    type="text"
                                    className="absolute inset-0 bg-transparent border-none outline-none opacity-0 cursor-text"
                                    placeholder=" "
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-[10px] font-mono text-muted-foreground">
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full" /> ENCRYPTION: ACTIVE</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-blue-500 rounded-full" /> LATENCY: 12ms</span>
                        <span className="flex items-center gap-1"><span className="w-1 h-1 bg-primary rounded-full" /> NODE: PRO_CORE_V1</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

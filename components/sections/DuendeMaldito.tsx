"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export function DuendeMaldito() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-zinc-900 border-2 border-primary/50 flex items-center justify-center cursor-pointer shadow-2xl group overflow-hidden"
            >
                <div className="absolute inset-0 bg-primary/10 animate-pulse group-hover:bg-primary/20 transition-colors" />
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">👺</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-28 right-8 z-[60] w-[350px] max-w-[calc(100vw-64px)] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-zinc-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">👺</span>
                                <div>
                                    <div className="text-xs font-bold leading-none">BLOG DEL DUENDE</div>
                                    <div className="text-[10px] text-green-500 font-mono animate-pulse uppercase mt-0.5">Live_Transmission</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/5 rounded-md transition-colors text-zinc-500 hover:text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-primary">&gt; SYSTEM_VOICE:</span> "¿Sabías que el 80% de los reclutadores descartan un perfil en menos de 6 segundos si no hay autoridad técnica?"
                            </div>

                            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-primary">&gt; STORY_CLIP:</span> "Caso real: Un junior de ProCard duplicó su salario en 3 meses solo optimizando su visibilidad."
                            </div>

                            <div className="p-3 bg-white/10 rounded-xl border border-primary/20 text-zinc-300">
                                <span className="text-primary text-sm block mb-1">CONVERSIÓN:</span>
                                "¿Quieres este poder? Regístrate en ProCard y deja de ser un civil común."
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-zinc-900/50">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Susurrar al duende..."
                                    className="w-full bg-black border border-white/5 rounded-xl py-3 pl-4 pr-12 text-xs focus:border-primary/50 outline-none transition-all"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:scale-110 transition-transform">
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

"use client";

import { motion } from "framer-motion";
import { User, Store, Landmark, ArrowRight, Construction } from "lucide-react";
import { useToast } from "@/components/ui/toast";

interface RoleCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    variant: "tech" | "legal" | "business";
}

function RoleCard({ title, description, icon, variant }: RoleCardProps) {
    const borderClass = {
        tech: "neon-border-tech",
        legal: "neon-border-legal",
        business: "neon-border-business",
    }[variant];

    const glowClass = {
        tech: "text-glow-tech",
        legal: "text-glow-legal",
        business: "text-glow-tech", // fallback
    }[variant];

    const { showToast } = useToast();

    const handleClick = (e: React.MouseEvent) => {
        if (variant !== "tech") {
            e.preventDefault();
            showToast("Módulo en desarrollo. Próximamente disponible.", "info");
        }
    };

    const isInternal = variant === "tech";

    return (
        <motion.a
            href={isInternal ? "/showcase" : "#"}
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full text-left p-8 rounded-2xl glass-card border-2 ${borderClass} group overflow-hidden block cursor-pointer`}
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {icon}
            </div>

            <div className="relative z-10">
                <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-lg bg-white/5 border border-white/10 ${variant === 'tech' ? 'text-primary' : variant === 'legal' ? 'text-yellow-500' : 'text-purple-400'}`}>
                    {icon}
                </div>

                <h3 className={`text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300 ${glowClass}`}>
                    {title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    Ir <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Interactive scanline effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-1 opacity-0 group-hover:animate-scanline group-hover:opacity-100" />

            {/* Development Overlay */}
            {!isInternal && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px] z-20 flex flex-col items-center justify-center transition-all group-hover:bg-slate-950/70">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-full bg-slate-900 shadow-2xl border border-yellow-500/20 mb-3 group-hover:scale-110 group-hover:border-yellow-500/50 transition-all"
                    >
                        <Construction className="text-yellow-500" size={32} />
                    </motion.div>
                    <div className="px-3 py-1 rounded bg-yellow-500/10 border border-yellow-500/20">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-yellow-500 font-bold">En Desarrollo</span>
                    </div>
                </div>
            )}
        </motion.a>
    );
}

export function RoleSelector() {
    return (
        <section id="soluciones" className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">ARQUITECTO DE SOLUCIONES</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RoleCard
                    variant="tech"
                    icon={<User size={32} />}
                    title="Generar mi CV"
                    description="Deja atrás los formatos estáticos. Construye una vitrina interactiva que valide tu autoridad técnica."
                />
                <RoleCard
                    variant="business"
                    icon={<Store size={32} />}
                    title="Generar mi carta virtual"
                    description="Digitaliza tu negocio. Crea cartas interactivas para platos de comida, gestiona pedidos automáticos."
                />
                <RoleCard
                    variant="legal"
                    icon={<Landmark size={32} />}
                    title="Quiero gestionar mis asistencias y alumnos."
                    description="Optimiza la gestión académica. Registra de forma masiva a tus alumnos y docentes, llevando un control de asistencia en tiempo real con esquemas de datos eficientes."
                />
            </div>
        </section>
    );
}

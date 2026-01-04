"use client";

import { motion } from "framer-motion";
import { Boxes, Zap, ShieldCheck, Database, Server, Smartphone } from "lucide-react";

export function About() {
    const capabilities = [
        {
            icon: Boxes,
            title: "Arquitecturas Escalables",
            description:
                "Diseño de sistemas distribuidos capaces de manejar alta concurrencia y crecimiento sostenido.",
        },
        {
            icon: Zap,
            title: "Integraciones Complejas",
            description:
                "Conexión de ecosistemas mediante APIs REST/SOAP, asegurando consistencia y rendimiento.",
        },
        {
            icon: ShieldCheck,
            title: "Sistemas Críticos",
            description:
                "Desarrollo de software para entornos donde el fallo no es una opción (Salud, Logística, Banca).",
        },
        {
            icon: Database,
            title: "Optimización de Datos",
            description:
                "Modelado y tuning de bases de datos masivas (SQL/NoSQL) para consultas eficientes.",
        },
        {
            icon: Smartphone,
            title: "Mobile & Offline",
            description:
                "Experiencia en apps que funcionan sin conexión en entornos remotos (ej. Alta Mar).",
        },
        {
            icon: Server,
            title: "Liderazgo Técnico",
            description:
                "Gestión de equipos bajo metodologías ágiles (Scrum), mentoring y code reviews.",
        },
    ];

    return (
        <section id="experience" className="py-20 bg-accent/5">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Más que código, <span className="text-gradient-primary">soluciones</span></h2>
                    <p className="text-muted-foreground">
                        Mi enfoque no es solo escribir software, sino resolver problemas de negocio complejos mediante tecnología robusta.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl glass-card group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/50">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-neon transition-all">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

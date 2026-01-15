"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/data/profile";

export function Hero({ profile }: { profile?: any }) {
    const data = profile ? {
        summary: profile.bio,
        name: profile.name,
        headline: profile.headline,
        ranking: profile.attributes?.find((a: any) => a.label === 'RANKING')?.value || '#339',
        experience: profile.attributes?.find((a: any) => a.label === 'EXPERIENCIA')?.value || '+7',
    } : {
        summary: PROFILE.personal.summary,
        name: PROFILE.personal.name,
        headline: PROFILE.personal.role,
        ranking: PROFILE.personal.ranking,
        experience: '+7',
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] animate-pulse-subtle" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[128px] animate-pulse-subtle delay-1000" />
            </div>

            <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-primary/90 backdrop-blur-md shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="font-medium tracking-wide text-xs uppercase text-primary">Abierto a oportunidades</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
                        {profile?.firstName || (profile ? "Unlocking" : "Architecting")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {profile?.lastName || "Digital Resilience"}
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground/80 max-w-lg leading-relaxed font-light">
                        {data.summary}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="gap-2 bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.2)] rounded-full px-8 transition-all duration-300 transform hover:-translate-y-1" asChild>
                            <Link href="#projects">
                                Visualizar proyectos <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="gap-2 text-white hover:bg-white/5 rounded-full px-8" asChild>
                            <Link href="#contact">
                                Contactar
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-12 text-sm text-muted-foreground border-t border-white/5">
                        <div className="flex flex-col">
                            <strong className="text-3xl text-white font-bold">
                                {data.experience}
                            </strong>
                            <span>Years Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <strong className="text-3xl text-white font-bold">
                                {data.ranking}
                            </strong>
                            <span>Global Rank</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element (High-End Code Editor Mockup) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <div className="relative rounded-xl border border-white/10 bg-[#0a0b10]/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden group min-h-[300px] flex flex-col font-mono text-sm leading-relaxed">
                        {/* Terminal Header */}
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4 select-none">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="pl-4 text-xs text-muted-foreground flex items-center gap-2">
                                <Terminal className="w-3 h-3" />
                                bash — 80x24
                            </div>
                        </div>

                        {/* Animated Terminal Content */}
                        <div className="flex-1 space-y-2 text-green-400">
                            <Typewriter
                                lines={[
                                    "Initializing secure connection...",
                                    "Authenticating user: 'GUEST'...",
                                    "> ACCESS GRANTED.",
                                    "",
                                    "Loading architect profile...",
                                    `> Name: ${data.name}`,
                                    `> Role: ${data.headline}`,
                                    "> Status: Ready for Deployment",
                                    "",
                                    "Awaiting command input..."
                                ]}
                            />
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 opacity-60" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -z-10 opacity-60" />
                </motion.div>
            </div>
        </section>
    );
}

// Simple Typewriter Component
function Typewriter({ lines }: { lines: string[] }) {
    return (
        <div className="flex flex-col">
            {lines.map((line, i) => (
                <TypingLine key={i} text={line} delay={i * 1000} />
            ))}
        </div>
    );
}

function TypingLine({ text, delay }: { text: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, display: "none" }}
            animate={{ opacity: 1, display: "flex" }}
            transition={{ delay: delay / 1000, duration: 0 }}
            className="items-center gap-2 min-h-[20px]"
        >
            <span className="text-gray-500 select-none">$</span>
            <span className="overflow-hidden whitespace-nowrap animate-typewriter">
                {text}
            </span>
        </motion.div>
    );
}



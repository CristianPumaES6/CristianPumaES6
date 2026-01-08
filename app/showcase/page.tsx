"use client";

import { useEffect, useState } from "react";
import { getClientShowcaseProfiles } from "@/lib/api";
import { ShowcaseCard } from "@/components/ui/ShowcaseCard";
import { CreateProfileModal } from "@/components/CreateProfileModal";

export default function ShowcasePage() {
    const [profiles, setProfiles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProfiles = async () => {
        const data = await getClientShowcaseProfiles();
        setProfiles(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white font-mono">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-primary animate-pulse uppercase tracking-[0.3em] text-xs">Initializing_System...</p>
                </div>
            </div>
        );
    }

    if (profiles.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white font-mono">
                <div className="terminal-box p-8 rounded-xl max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold mb-4 text-primary tracking-tighter">DATA_ERROR: NO_PROFILES_FOUND</h1>
                    <p className="text-slate-400 text-sm">Please ensure the backend is active or register a new professional profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-primary/30">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-screen bg-primary/5 blur-[120px] opacity-50" />
                <div className="absolute inset-0 bg-scanline opacity-[0.02] animate-scanline" />
            </div>

            <div className="relative z-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-16">
                <header className="relative pt-12 pb-8 px-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <CreateProfileModal onSuccess={fetchProfiles} />
                    </div>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
                            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                            System active: Professional Hub
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            Puramente tecnológico <br />
                            <span className="text-primary italic font-serif">y profesional.</span>
                        </h1>

                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Cada dato es un activo estratégico que construye tu autoridad profesional.
                            No solo mostramos tu experiencia; <span className="text-slate-200">inyectamos valor</span> a tu perfil mediante atributos validados.
                        </p>
                    </div>

                    {/* Decorative header element */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />
                </header>

                <div className="space-y-12">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest">
                            {profiles.length} Profiles_Validated
                        </h2>
                        <div className="flex gap-4 text-[10px] font-mono text-slate-600">
                            <span>FILTER: ALL</span>
                            <span>SORT: IMPACT_DESC</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {profiles.map((profile) => (
                            <ShowcaseCard key={profile.id} profile={profile} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

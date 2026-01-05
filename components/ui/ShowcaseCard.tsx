"use client";

import { motion } from "framer-motion";
import { LucideIcon, Github, Linkedin, Mail, Youtube, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditProfileModal } from "@/components/EditProfileModal";

// --- Types (Matched to Prisma Schema roughly) ---
interface Attribute {
    label: string;
    value: string;
}

interface ShowcaseProfile {
    id: string;
    industry: string;
    name: string;
    headline: string;
    bio: string;
    location: string;
    attributes: Attribute[];
    socials?: { platform: string; url: string; iconName: string }[];
}

// --- Variants ---
const VARIANTS = {
    Tech: {
        container: "bg-slate-950 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] font-mono text-slate-300",
        name: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold tracking-tighter",
        badge: "border-cyan-500/50 text-cyan-400 bg-cyan-950/30",
        icon: "text-cyan-400 hover:text-cyan-200 transition-colors",
        metricValue: "text-cyan-300 font-bold",
        decoration: (
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none" />
        )
    },
    Legal: {
        container: "bg-white border-slate-200 shadow-xl font-sans text-slate-600",
        name: "text-slate-900 font-serif tracking-tight",
        badge: "border-slate-300 text-slate-700 bg-slate-50 font-medium",
        icon: "text-slate-600 hover:text-slate-900 transition-colors",
        metricValue: "text-slate-900 font-semibold italic",
        decoration: (
            <div className="absolute inset-0 border-[3px] border-double border-slate-100 pointer-events-none m-2" />
        )
    }
};

export const ShowcaseCard = ({ profile }: { profile: ShowcaseProfile }) => {
    const flavor = VARIANTS[profile.industry as keyof typeof VARIANTS] || VARIANTS.Tech;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "relative w-full max-w-4xl mx-auto p-8 rounded-2xl border overflow-hidden",
                flavor.container
            )}
        >
            {flavor.decoration}

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Identity */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div>
                        <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4 border", flavor.badge)}>
                            {profile.industry} PROFESSIONAL
                        </div>
                        <h1 className={cn("text-4xl md:text-5xl mb-2", flavor.name)}>
                            {profile.name}
                        </h1>
                        <p className="text-lg opacity-80">{profile.headline}</p>
                    </div>

                    <div className="prose prose-sm max-w-none text-inherit opacity-70">
                        <p>{profile.bio}</p>
                    </div>

                    {/* Attributes Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {profile.attributes.map((attr, idx) => (
                            <div key={idx} className="space-y-1">
                                <span className="text-xs uppercase opacity-50 block">{attr.label}</span>
                                <span className={cn("text-lg", flavor.metricValue)}>{attr.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Actions / Stats / Contact */}
                <div className="flex flex-col justify-between border-l border-current/10 pl-8 space-y-8">
                    <div className="space-y-4">
                        <span className="text-xs uppercase opacity-50">Location</span>
                        <div className="font-medium">{profile.location}</div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-xs uppercase opacity-50">Connect</span>
                        <div className="flex gap-4">
                            <SocialIcon name="LinkedIn" className={flavor.icon} />
                            <SocialIcon name="Mail" className={flavor.icon} />
                        </div>
                    </div>

                    <div className="mt-auto pt-8 flex flex-col gap-3">
                        <EditProfileModal profile={profile} />
                        <a href={`/showcase/${profile.id}`} className={cn(
                            "w-full py-3 px-6 rounded-lg font-medium text-center transition-colors border-2",
                            profile.industry === 'Tech'
                                ? "border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-950/30"
                                : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                        )}>
                            View Full Profile
                        </a>
                        <button className={cn(
                            "w-full py-3 px-6 rounded-lg font-bold transition-all",
                            profile.industry === 'Tech'
                                ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                : "bg-slate-900 hover:bg-slate-800 text-white"
                        )}>
                            {profile.industry === 'Tech' ? 'INITIALIZE_CONTACT' : 'Solicitar Entrevista'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SocialIcon = ({ name, className }: { name: string, className?: string }) => {
    // Simplified map
    return <div className={cn("w-6 h-6 bg-current/20 rounded-full", className)} />
}

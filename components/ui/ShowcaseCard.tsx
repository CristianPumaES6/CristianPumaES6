"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { LucideIcon, Github, Linkedin, Mail, Youtube, FileText, CheckCircle2, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { EditProfileModal } from "@/components/EditProfileModal";

// --- Types (Matched to Prisma Schema roughly) ---
interface Attribute {
    label: string;
    value: string;
}

interface ShowcaseProfile {
    id: string;
    userId: string;
    slug?: string;
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

const SocialIcon = ({ name, url, className }: { name: string, url: string, className?: string }) => {
    const Icons: Record<string, LucideIcon> = {
        LinkedIn: Linkedin,
        GitHub: Github,
        Mail: Mail,
        Youtube: Youtube,
        TikTok: Video,
    };

    const Icon = Icons[name] || FileText;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
            <Icon size={20} />
        </a>
    );
}

export const ShowcaseCard = ({ profile, onProfileUpdate }: { profile: ShowcaseProfile, onProfileUpdate?: () => void }) => {
    const { data: session } = useSession();
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
                        <h1 className={cn("text-4xl md:text-5xl mb-2 tracking-tighter", flavor.name)}>
                            {profile.name}
                        </h1>
                        <p className="text-lg opacity-80">{profile.headline}</p>
                    </div>

                    <div className={cn(
                        "prose prose-sm max-w-none text-inherit opacity-70",
                        profile.industry === 'Tech' ? 'font-mono' : 'font-serif italic'
                    )}>
                        <p>{profile.bio}</p>
                    </div>

                    {/* Attributes Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-current/10">
                        {profile.attributes.map((attr, idx) => (
                            <div key={idx} className="space-y-1">
                                <span className="text-[10px] uppercase opacity-40 block tracking-widest">{attr.label}</span>
                                <span className={cn("text-lg", flavor.metricValue)}>{attr.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Actions / Stats / Contact */}
                <div className="flex flex-col justify-between border-l border-current/10 pl-8 space-y-8">
                    <div className="space-y-2">
                        <span className="text-[10px] uppercase opacity-40 tracking-widest">Location</span>
                        <div className="font-medium text-sm">{profile.location}</div>
                    </div>

                    <div className="space-y-4">
                        <span className="text-[10px] uppercase opacity-40 tracking-widest">Verification Status</span>
                        <div className="flex items-center gap-2 text-xs">
                            <CheckCircle2 size={14} className="text-green-500" />
                            <span className="text-green-500/80 font-mono">VALIDATED</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <span className="text-[10px] uppercase opacity-40 tracking-widest">Connect</span>
                        <div className="flex gap-4">
                            {profile.socials?.map((social, idx) => (
                                <SocialIcon
                                    key={idx}
                                    name={social.platform}
                                    url={social.url}
                                    className={flavor.icon}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-8 flex flex-col gap-3">
                        {session?.user?.id === profile.userId && (
                            <EditProfileModal profile={profile} onSuccess={onProfileUpdate} />
                        )}
                        <a href={`/showcase/${profile.slug || profile.id}`} className={cn(
                            "w-full py-2.5 px-6 rounded-lg text-sm font-medium text-center transition-all border",
                            profile.industry === 'Tech'
                                ? "border-cyan-500/20 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-950/30"
                                : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900"
                        )}>
                            View Full Profile
                        </a>
                        <button className={cn(
                            "w-full py-3 px-6 rounded-lg text-sm font-bold transition-all uppercase tracking-widest",
                            profile.industry === 'Tech'
                                ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]"
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

"use client";

import { useState, useEffect } from "react";
import { getClientProfileById } from "@/lib/api";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft, Building2, GraduationCap, ShieldAlert, Smartphone, Briefcase, Link2, Users, Loader2 } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects as LandingProjects } from "@/components/sections/projects";
import { Stack as LandingStack } from "@/components/sections/stack";
import { Footer as LandingFooter } from "@/components/layout/footer";

const THEMES = {
    Tech: {
        page: "bg-[#0B0F15] text-slate-300 font-mono selection:bg-cyan-500/30 min-h-screen",
        container: "max-w-7xl mx-auto px-6",
        headerWrapper: "relative border-b border-cyan-500/10 py-20 overflow-hidden",
        headerTitle: "text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6",
        headerSubtitle: "text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed",
        headerBadge: "inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-cyan-400 border border-cyan-500/30 bg-cyan-950/20 rounded uppercase",
        card: "group relative bg-slate-900/50 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-900/80",
        cardTitle: "text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
        cardIcon: "text-cyan-500 mb-4",
        sectionHeading: "text-3xl font-bold text-white mb-12 flex items-center gap-4 before:h-1 before:w-12 before:bg-cyan-500",
        tag: "px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded",
        buttonPrimary: "bg-cyan-400 text-black px-8 py-4 rounded font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        terminal: true
    },
    Legal: {
        page: "bg-[#FDFBF7] text-slate-700 font-serif selection:bg-slate-200 min-h-screen",
        container: "max-w-5xl mx-auto px-8 bg-white shadow-2xl min-h-screen border-x border-slate-100",
        headerWrapper: "py-24 text-center border-b-2 border-double border-slate-200",
        headerTitle: "text-5xl md:text-6xl font-serif text-slate-900 tracking-tight mb-4",
        headerSubtitle: "text-xl text-slate-500 italic font-medium max-w-xl mx-auto",
        headerBadge: "inline-block px-4 py-1 mb-8 text-xs font-bold tracking-widest text-slate-900 border-y border-slate-900 uppercase",
        card: "mb-8 p-0 border-l-4 border-slate-200 pl-6 hover:border-slate-900 transition-colors duration-500",
        cardTitle: "text-2xl font-serif text-slate-900 mb-1",
        cardIcon: "text-slate-900 mb-2 opacity-0",
        sectionHeading: "text-2xl font-serif text-slate-900 mb-12 border-b border-slate-200 pb-4 mt-16 text-center uppercase tracking-widest",
        tag: "px-3 py-1 text-xs font-bold text-slate-600 bg-slate-100 rounded-full",
        buttonPrimary: "bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-800 transition-colors border border-slate-900",
        terminal: false
    }
};

export default function ProfileClientView({ id }: { id: string }) {
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            setLoading(true);
            const data = await getClientProfileById(id);
            setProfile(data);
            setLoading(false);
        }
        fetchProfile();
    }, [id]);

    if (loading) {
        return (
            <div className="bg-[#0B0F15] min-h-screen flex flex-col items-center justify-center text-cyan-500 font-mono">
                <Loader2 className="w-12 h-12 animate-spin mb-4 opacity-50" />
                <div className="text-xs uppercase tracking-[0.3em] animate-pulse">
                    Accessing_Secure_Node...
                </div>
            </div>
        );
    }

    if (!profile) return notFound();

    const isTech = profile.industry === 'Tech';
    const theme = THEMES[profile.industry as keyof typeof THEMES] || THEMES.Tech;
    const expAttr = profile.attributes?.find((a: any) => a.label === 'EXPERIENCIA');
    const yearsOfExp = expAttr ? expAttr.value : null;

    if (isTech) {
        const specialties = profile.experiences?.filter((e: any) => e.type === 'Specialization').map((e: any) => ({
            title: e.title,
            description: e.highlights?.[0]?.text || e.organization || ''
        }));

        const stack = profile.skillCategories?.map((sc: any) => ({
            category: sc.name,
            items: sc.items.map((i: any) => i.name)
        }));

        return (
            <div className="bg-[#0B0F15] min-h-screen text-slate-300">
                <nav className="fixed top-0 w-full z-50 h-16 flex items-center px-6 backdrop-blur-md border-b border-white/5 bg-[#0B0F15]/80">
                    <Link href="/showcase" className="flex items-center gap-2 font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                        <ArrowLeft size={16} />
                        <span>Regresar al Showcase</span>
                    </Link>
                </nav>

                <Hero profile={profile} />
                <About specialties={specialties?.length > 0 ? specialties : undefined} />
                <LandingProjects
                    projects={profile.projects}
                    yearsOfExperience={yearsOfExp}
                    education={profile.education}
                    certifications={profile.certifications}
                />
                <LandingStack stack={stack} />
                <LandingFooter profile={profile} />
            </div>
        );
    }

    return (
        <div className={theme.page}>
            <nav className={cn("fixed top-0 w-full z-50 h-16 flex items-center px-6 backdrop-blur-sm bg-white/90 border-b border-slate-100")}>
                <Link href="/showcase" className="flex items-center gap-2 font-medium transition-colors text-slate-500 hover:text-slate-900">
                    <ArrowLeft size={16} />
                    <span>Back to Showcase</span>
                </Link>
            </nav>

            <main className={theme.container}>
                <header className={theme.headerWrapper}>
                    <div className="relative py-12 text-center">
                        <span className={theme.headerBadge}>{profile.headline}</span>
                        <h1 className={theme.headerTitle}>{profile.name}</h1>
                        <p className={theme.headerSubtitle}>{profile.headline}</p>
                    </div>
                </header>

                <div className="px-8 py-16">
                    <section className="mb-24">
                        <h2 className={theme.sectionHeading}>Professional Summary</h2>
                        <p className="text-lg leading-relaxed text-slate-600 font-serif italic max-w-3xl mx-auto text-center">
                            &quot;{profile.bio}&quot;
                        </p>
                    </section>

                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <h2 className={theme.sectionHeading}>Experience & Cases</h2>
                            <div className="space-y-12">
                                {profile.projects?.map((project: any) => (
                                    <div key={project.id} className={theme.card}>
                                        <h3 className={theme.cardTitle}>{project.title}</h3>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{project.client}</div>
                                        <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech?.map((t: string) => (
                                                <span key={t} className={theme.tag}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <section className="mb-16">
                                <h2 className={theme.sectionHeading}>Expertise</h2>
                                <div className="space-y-8">
                                    {profile.skillCategories?.map((cat: any) => (
                                        <div key={cat.id}>
                                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 border-b border-slate-200 pb-2">{cat.name}</h4>
                                            <ul className="space-y-3">
                                                {cat.items.map((item: any) => (
                                                    <li key={item.id} className="flex items-center gap-3 text-sm font-medium">
                                                        <Building2 size={14} className="text-slate-400" />
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className={theme.sectionHeading}>Education</h2>
                                <div className="space-y-8">
                                    {profile.education?.map((edu: any, i: number) => (
                                        <div key={i} className="relative pl-6 border-l border-slate-200">
                                            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-400" />
                                            <div className="text-sm font-bold text-slate-900">{edu.institution}</div>
                                            <div className="text-sm text-slate-500 italic mb-1">{edu.degree}</div>
                                            <div className="text-xs text-slate-400">{edu.period}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-16 border-t border-slate-100 bg-slate-50 text-center">
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-4">© {new Date().getFullYear()} {profile.name}</div>
                <div className="flex justify-center gap-6">
                    {profile.socials?.map((social: any) => (
                        <a key={social.id} href={social.url} className="text-slate-400 hover:text-slate-900 transition-colors">
                            {social.platform}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
}

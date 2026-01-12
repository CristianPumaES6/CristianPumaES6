import React from 'react';
import {
    MapPin,
    Mail,
    Phone,
    Globe,
    Calendar,
    Briefcase,
    Star,
    Award,
    Github,
    Linkedin
} from 'lucide-react';
import { cn } from "@/lib/utils";
import {
    SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiHtml5, SiCss3,
    SiGit, SiDocker, SiMysql, SiPostgresql, SiMongodb, SiPhp,
    SiAngular, SiVuedotjs, SiNextdotjs, SiTailwindcss, SiBootstrap, SiLaravel, SiSpring,
    SiDotnet, SiAmazon, SiGooglecloud, SiLinux
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// Helper to get icon
const getTechIcon = (name: string) => {
    if (!name) return null;
    const n = name.toLowerCase().replace(/\s+/g, '');
    if (n.includes('python')) return SiPython;
    if (n.includes('java') && !n.includes('script')) return FaJava;
    if (n.includes('js') || n.includes('javascript')) return SiJavascript;
    if (n.includes('typescript') || n.includes('ts')) return SiTypescript;
    if (n.includes('react')) return SiReact;
    if (n.includes('node')) return SiNodedotjs;
    if (n.includes('html')) return SiHtml5;
    if (n.includes('css')) return SiCss3;
    if (n.includes('git')) return SiGit;
    if (n.includes('docker')) return SiDocker;
    if (n.includes('mysql') || n.includes('sql')) return SiMysql;
    if (n.includes('postgres')) return SiPostgresql;
    if (n.includes('mongo')) return SiMongodb;
    if (n.includes('php')) return SiPhp;
    if (n.includes('c#') || n.includes('csharp') || n.includes('.net')) return SiDotnet;
    if (n.includes('angular')) return SiAngular;
    if (n.includes('vue')) return SiVuedotjs;
    if (n.includes('next')) return SiNextdotjs;
    if (n.includes('tailwind')) return SiTailwindcss;
    if (n.includes('bootstrap')) return SiBootstrap;
    if (n.includes('laravel')) return SiLaravel;
    if (n.includes('spring')) return SiSpring;
    if (n.includes('aws')) return SiAmazon;
    if (n.includes('azure')) return VscAzure;
    if (n.includes('linux')) return SiLinux;

    return null;
};

interface CVProps {
    profile: any;
}

export const CVDocument: React.FC<CVProps> = ({ profile }) => {
    const projects = profile.projects || [];
    const skillCategories = profile.skillCategories || [];
    const education = profile.education || [];
    const certifications = profile.certifications || [];
    const experiences = profile.experiences || [];

    // Combine Experiences and Projects for the main timeline if needed, 
    // or just list them sequentially. The reference focuses on "Review" (Experience)
    // We'll prioritize Experiences if they exist, else Projects.
    const mainContent = experiences.length > 0 ? experiences : projects;
    const isProject = experiences.length === 0;

    return (
        <div className="w-[210mm] min-h-[297mm] mx-auto bg-white text-slate-900 p-[12mm] shadow-2xl print:shadow-none print:w-full print:p-0 print:m-0 font-sans leading-relaxed selection:bg-red-100 selection:text-red-900">

            {/* --- HEADER --- */}
            <header className="border-b-[3px] border-slate-900 pb-8 mb-10 flex justify-between items-start relative">
                <div className="space-y-4 max-w-[65%]">
                    <h1 className="text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
                        {profile.name}
                    </h1>
                    <h2 className="text-xl font-bold uppercase tracking-widest text-slate-500">
                        {profile.headline}
                    </h2>
                </div>

                <div className="text-right space-y-2 text-sm font-medium text-slate-600">
                    {profile.location && (
                        <div className="flex items-center justify-end gap-2 group">
                            <span className="group-hover:text-black transition-colors">{profile.location}</span>
                            <MapPin size={14} className="text-slate-400 group-hover:text-black transition-colors" />
                        </div>
                    )}
                    <div className="flex items-center justify-end gap-2 group">
                        <span className="group-hover:text-black transition-colors">{profile.email}</span>
                        <Mail size={14} className="text-slate-400 group-hover:text-black transition-colors" />
                    </div>
                    {profile.phone && (
                        <div className="flex items-center justify-end gap-2 group">
                            <span className="group-hover:text-black transition-colors">{profile.phone}</span>
                            <Phone size={14} className="text-slate-400 group-hover:text-black transition-colors" />
                        </div>
                    )}

                    <div className="flex gap-3 justify-end pt-2">
                        {profile.socials?.map((social: any, idx: number) => (
                            <a key={idx} href={social.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">
                                {social.platform === 'LinkedIn' ? <Linkedin size={18} /> :
                                    social.platform === 'GitHub' ? <Github size={18} /> :
                                        <Globe size={18} />}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Decorative asterisk from reference */}
                <div className="absolute -bottom-[21px] left-0 bg-white pr-4">
                    <Star size={36} className="fill-slate-900 text-slate-900" />
                </div>
            </header>

            <div className="grid grid-cols-[3fr_5fr] gap-12">

                {/* --- LEFT COLUMN --- */}
                <div className="space-y-10">

                    {/* ABOUT */}
                    {profile.bio && (
                        <section>
                            <h3 className="flex items-center gap-3 font-black text-lg uppercase tracking-widest mb-4 text-slate-900 border-b border-slate-200 pb-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                Sobre Mí
                            </h3>
                            <p className="text-sm text-slate-600 font-medium text-justify leading-relaxed">
                                {profile.bio}
                            </p>
                        </section>
                    )}

                    {/* EDUCATION */}
                    {education.length > 0 && (
                        <section>
                            <h3 className="flex items-center gap-3 font-black text-lg uppercase tracking-widest mb-6 text-slate-900 border-b border-slate-200 pb-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                Educación
                            </h3>
                            <div className="space-y-6 border-l-2 border-slate-100 ml-1 pl-5 relative">
                                {education.map((edu: any, i: number) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[26px] top-1.5 w-2.5 h-2.5 bg-slate-200 rounded-full border-2 border-white"></div>
                                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                                            {edu.period}
                                        </div>
                                        <h4 className="font-bold text-slate-900 leading-tight mb-1">
                                            {edu.institution}
                                        </h4>
                                        <div className="text-sm text-slate-600 font-medium italic">
                                            {edu.degree}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* SKILLS */}
                    {skillCategories.length > 0 && (
                        <section>
                            <h3 className="flex items-center gap-3 font-black text-lg uppercase tracking-widest mb-6 text-slate-900 border-b border-slate-200 pb-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                Skills
                            </h3>
                            <div className="space-y-6">
                                {skillCategories.map((cat: any, i: number) => (
                                    <div key={i}>
                                        <h4 className="font-bold text-xs text-slate-400 mb-3 uppercase tracking-widest border-b-2 border-red-500/20 inline-block pb-0.5">
                                            {cat.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items?.map((item: any, j: number) => {
                                                const Icon = getTechIcon(item.name);
                                                return (
                                                    <div key={j} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-bold text-slate-700 min-w-[100px] hover:border-slate-300 transition-colors">
                                                        {Icon ? <Icon className="text-slate-800" size={14} /> : <div className="w-3.5 h-3.5 bg-red-500/20 rounded-full"></div>}
                                                        <span>{item.name}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* --- RIGHT COLUMN --- */}
                <div className="space-y-10">

                    {/* EXPERIENCE / PROJECTS */}
                    <section>
                        <h3 className="flex items-center gap-3 font-black text-2xl uppercase tracking-widest mb-8 text-slate-900">
                            <Briefcase className="text-slate-900" strokeWidth={2.5} size={24} />
                            {isProject ? "Proyectos Destacados" : "Experiencia Laboral"}
                        </h3>

                        <div className="space-y-10 relative border-l-[3px] border-slate-900/10 ml-3 pl-8 pb-4">
                            {mainContent.map((item: any, idx: number) => (
                                <div key={idx} className="relative group">
                                    {/* Timeline Star */}
                                    <div className="absolute -left-[45px] top-0 bg-white p-1">
                                        <Star size={20} className="fill-slate-900 text-slate-900" />
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-baseline justify-between mb-2">
                                            <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                                                {item.title}
                                            </h4>
                                            {item.period && (
                                                <span className="text-xs font-bold bg-slate-900 text-white px-2 py-1 rounded">
                                                    {item.period}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                                            <span className="text-red-600">
                                                {item.organization || item.client || "Personal Project"}
                                            </span>
                                            {item.type && (
                                                <>
                                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                                    <span>{item.type}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-sm text-slate-600 leading-relaxed text-justify relative bg-slate-50 p-5 rounded-xl border border-slate-100">
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-8 h-8 opacity-10">
                                            <svg viewBox="0 0 100 100" className="fill-current text-slate-900">
                                                <path d="M0 0 L100 0 L100 100 Z" />
                                            </svg>
                                        </div>

                                        {/* Description */}
                                        {(item.description || item.bio) && (
                                            <p className="mb-4">{item.description || item.bio}</p>
                                        )}

                                        {/* Highlights / Solution / Outcome */}
                                        {item.highlights && item.highlights.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {item.highlights.map((h: any, i: number) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full min-w-[6px]"></span>
                                                        <span>{h.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {(item.solution || item.outcome) && (
                                            <div className="space-y-2 pt-2 border-t border-slate-200/60 mt-2">
                                                {item.solution && (
                                                    <div className="flex gap-2">
                                                        <span className="font-bold text-slate-800 min-w-[80px]">Solución:</span>
                                                        <span>{item.solution}</span>
                                                    </div>
                                                )}
                                                {item.outcome && (
                                                    <div className="flex gap-2">
                                                        <span className="font-bold text-slate-800 min-w-[80px]">Impacto:</span>
                                                        <span>{item.outcome}</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    {/* Tags */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2 pl-1">
                                            {item.tags.map((t: any, k: number) => (
                                                <span key={k} className="text-[10px] font-mono text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                                                    #{t.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CERTIFICATES (If space allows in Right Column, or overflow) */}
                    {certifications.length > 0 && (
                        <section className="pt-8 border-t border-slate-200">
                            <h3 className="flex items-center gap-2 font-black text-lg uppercase tracking-widest mb-6 text-slate-900">
                                <Award size={20} />
                                Certificaciones
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {certifications.map((cert: any, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-3 border border-slate-100 rounded bg-white hover:border-slate-300 transition-colors">
                                        <div className="mt-1 text-yellow-500">
                                            <Award size={16} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900">{cert.title}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{cert.provider} &bull; {cert.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            <div className="mt-12 text-center border-t-2 border-slate-900 pt-6">
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-4">
                    <span>Generated by ProCard</span>
                    <span>&bull;</span>
                    <span>{new Date().toISOString().split('T')[0]}</span>
                    <span>&bull;</span>
                    <span>{profile.slug || profile.id}</span>
                </p>
            </div>
        </div>
    );
};

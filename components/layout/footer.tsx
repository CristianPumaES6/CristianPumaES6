"use client";

import { PROFILE } from "@/data/profile";
import Link from "next/link";

import { Github, Linkedin, Mail, Youtube, Link2, MapPin } from "lucide-react";
import { SiGmail, SiWhatsapp } from "react-icons/si";

export function Footer({ profile }: { profile?: any }) {
    const data = profile ? {
        name: profile.name,
        summary: profile.bio,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        socials: profile.socials.map((s: any) => {
            const iconMap: any = { Github, Linkedin, Mail, Youtube };
            return { name: s.platform, url: s.url, icon: iconMap[s.iconName] || Link2 };
        })
    } : {
        name: "Cristian Puma",
        summary: PROFILE.personal.summary,
        email: PROFILE.personal.email,
        phone: PROFILE.personal.phone,
        location: PROFILE.personal.location,
        socials: PROFILE.socials
    };

    return (
        <footer id="contact" className="py-20 border-t border-white/5 bg-[#0a0b10] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-16 mb-16">
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white tracking-tight">{data.name}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{data.summary}</p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Contacto</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground font-mono">
                            <li className="flex items-center gap-3 hover:text-white transition-colors group">
                                <SiGmail className="text-primary w-4 h-4 group-hover:scale-110 transition-transform" /> {data.email}
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors group">
                                <SiWhatsapp className="text-primary w-4 h-4 group-hover:scale-110 transition-transform" /> {data.phone}
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors group">
                                <MapPin className="text-primary w-4 h-4 group-hover:scale-110 transition-transform" /> {data.location}
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Social Channels</h4>
                        <div className="flex gap-4">
                            {data.socials.map((social: any) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-6 uppercase tracking-widest font-mono">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> SERVER : Online</span>
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> SEGURIDAD: AES-256</span>
                    </div>
                    <p>© {new Date().getFullYear()} {data.name}. Designed by LowCodeTool ProCard Engineering</p>
                </div>
            </div>
        </footer>
    );
}

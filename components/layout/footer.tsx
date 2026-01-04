"use client";

import { PROFILE } from "@/data/profile";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-border bg-card/20 ">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Cristian Puma</h4>
                        <p className="text-muted-foreground text-sm max-w-xs">{PROFILE.personal.summary}</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Contacto</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>{PROFILE.personal.email}</li>
                            <li>{PROFILE.personal.phone}</li>
                            <li>{PROFILE.personal.location}</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">Social</h4>
                        <div className="flex gap-4">
                            {PROFILE.socials.map(social => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    className="p-2 bg-accent rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground flex flex-col items-center gap-2">
                    <p>© {new Date().getFullYear()} Cristian Puma. Todos los derechos reservados.</p>
                    <p className="text-xs">Built with Next.js & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}

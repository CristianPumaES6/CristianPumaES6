"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { PROFILE } from "@/data/profile";

export function Navbar() {
    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "BUSCAR TRABAJO", href: "#hero" },
        { name: "SOLUCIONES", href: "#soluciones" },
        { name: "USUARIO", href: "#vitrina" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container px-4 mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Terminal className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">
                        pro<span className="text-primary">Card</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {session?.user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                                <User className="w-4 h-4 text-primary" />
                                <span className="text-sm font-bold text-primary">
                                    {session.user.name || "Usuario"}
                                </span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => signOut()}
                                className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Salir
                            </Button>
                        </div>
                    ) : (
                        <Button variant="default" size="sm" asChild>
                            <Link href="/login">
                                LOGIN
                            </Link>
                        </Button>
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-2xl animate-accordion-down">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium p-2 hover:bg-accent rounded-md block"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {session?.user ? (
                            <div className="flex flex-col gap-2 p-2 border-t border-white/10 mt-2 pt-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <User className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-bold">{session.user.name}</span>
                                </div>
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => signOut()}
                                    className="w-full justify-start"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Cerrar Sesión
                                </Button>
                            </div>
                        ) : (
                            <Button className="w-full" asChild>
                                <Link href="/login">
                                    LOGIN / REGISTER
                                </Link>
                            </Button>
                        )}
                        <Button variant="outline" className="w-full" asChild>
                            <Link href={PROFILE.socials[0].url} target="_blank">
                                Contactar
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}

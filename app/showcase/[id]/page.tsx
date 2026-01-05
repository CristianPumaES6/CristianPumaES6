import { getProfileById } from "@/lib/actions";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft, Building2, Calendar, GraduationCap, Github, Linkedin, Mail, Youtube, Server, Database, ShieldAlert, Smartphone, Briefcase, Link2, Users } from "lucide-react";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import Link from "next/link";

// -----------------------------------------------------------------------------
// VISUAL IDENTITIES (THEMES)
// -----------------------------------------------------------------------------
const THEMES = {
    Tech: {
        // Colors & Backgrounds
        page: "bg-[#0B0F15] text-slate-300 font-mono selection:bg-cyan-500/30 min-h-screen",
        container: "max-w-7xl mx-auto px-6",

        // Header Section
        headerWrapper: "relative border-b border-cyan-500/10 py-20 overflow-hidden",
        headerTitle: "text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6",
        headerSubtitle: "text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed",
        headerBadge: "inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-cyan-400 border border-cyan-500/30 bg-cyan-950/20 rounded uppercase",

        // Components
        card: "group relative bg-slate-900/50 border border-slate-800 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-900/80",
        cardTitle: "text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
        cardIcon: "text-cyan-500 mb-4",

        // Decorative
        sectionHeading: "text-3xl font-bold text-white mb-12 flex items-center gap-4 before:h-1 before:w-12 before:bg-cyan-500",
        tag: "px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 rounded",

        // Specifics
        buttonPrimary: "bg-cyan-400 text-black px-8 py-4 rounded font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        terminal: true // Flag to render terminal component
    },

    Legal: {
        // Colors & Backgrounds
        page: "bg-[#FDFBF7] text-slate-700 font-serif selection:bg-slate-200 min-h-screen",
        container: "max-w-5xl mx-auto px-8 bg-white shadow-2xl min-h-screen border-x border-slate-100",

        // Header Section
        headerWrapper: "py-24 text-center border-b-2 border-double border-slate-200",
        headerTitle: "text-5xl md:text-6xl font-serif text-slate-900 tracking-tight mb-4",
        headerSubtitle: "text-xl text-slate-500 italic font-medium max-w-xl mx-auto",
        headerBadge: "inline-block px-4 py-1 mb-8 text-xs font-bold tracking-widest text-slate-900 border-y border-slate-900 uppercase",

        // Components
        card: "mb-8 p-0 border-l-4 border-slate-200 pl-6 hover:border-slate-900 transition-colors duration-500",
        cardTitle: "text-2xl font-serif text-slate-900 mb-1",
        cardIcon: "text-slate-900 mb-2 opacity-0", // Minimalist visuals

        // Decorative
        sectionHeading: "text-2xl font-serif text-slate-900 mb-12 border-b border-slate-200 pb-4 mt-16 text-center uppercase tracking-widest",
        tag: "px-3 py-1 text-xs font-bold text-slate-600 bg-slate-100 rounded-full",

        // Specifics
        buttonPrimary: "bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-slate-800 transition-colors border border-slate-900",
        terminal: false
    }
};

const SPECIALTY_ICONS: Record<string, any> = {
    'Arquitecturas Escalables': Briefcase,
    'Integraciones Complejas': Link2,
    'Sistemas Críticos': ShieldAlert,
    'Optimización de Datos': Database,
    'Mobile & Offline': Smartphone,
    'Liderazgo Técnico': Users,
};

// -----------------------------------------------------------------------------
// PAGE COMPONENT
// -----------------------------------------------------------------------------

export default async function ProfileDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const profile = await getProfileById(id);
    if (!profile) return notFound();

    const theme = THEMES[profile.industry as keyof typeof THEMES] || THEMES.Tech;
    const isTech = profile.industry === 'Tech';

    // Calculate Professional Stats
    const expAttr = profile.attributes.find((a: any) => a.label === 'EXPERIENCIA');
    const yearsOfExp = expAttr ? expAttr.value : null;

    const privateCount = profile.projects.filter((p: any) => p.client === 'Confidential').length;
    const publicCount = profile.projects.filter((p: any) => p.client !== 'Confidential').length;
    const corporateCount = profile.projects.filter((p: any) => p.type === 'Laboral').length;
    const personalCount = profile.projects.filter((p: any) => p.type === 'Personal').length;

    return (
        <div className={theme.page}>

            {/* --- NAVIGATION --- */}
            <nav className={cn("fixed top-0 w-full z-50 h-16 flex items-center px-6 backdrop-blur-sm", isTech ? "border-b border-white/5 bg-[#0B0F15]/80" : "bg-white/90 border-b border-slate-100")}>
                <Link href="/showcase" className={cn("flex items-center gap-2 font-medium transition-colors", isTech ? "text-slate-400 hover:text-cyan-400" : "text-slate-500 hover:text-slate-900")}>
                    <ArrowLeft size={16} />
                    <span>Back to Showcase</span>
                </Link>
            </nav>

            {/* --- HERO SECTION --- */}
            <header className={theme.headerWrapper}>
                <div className={cn(theme.container, "relative flex flex-col md:flex-row items-center gap-12")}>

                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <span className={theme.headerBadge}>{profile.headline}</span>
                        <h1 className={theme.headerTitle}>{isTech ? "Architecting Digital Resilience" : profile.name}</h1>
                        <p className={theme.headerSubtitle}>
                            {isTech ? profile.bio : profile.headline}
                        </p>

                        <div className="mt-10 flex gap-4 justify-center md:justify-start">
                            <button className={theme.buttonPrimary}>
                                {isTech ? "View Case Studies" : "Professional Resume"}
                            </button>
                            {isTech && (
                                <div className="flex gap-4 items-center px-6">
                                    {profile.socials.map((social: any) => {
                                        const platformMap: any = {
                                            'Github': Github,
                                            'Linkedin': Linkedin,
                                            'Youtube': Youtube,
                                            'Mail': Mail
                                        };
                                        const Icon = platformMap[social.iconName] || Link2;
                                        return (
                                            <SocialLink key={social.id} href={social.url} icon={Icon} />
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Tech-specific Stats */}
                        {isTech && (
                            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
                                {profile.attributes
                                    .map((attr: any, i: number) => (
                                        <div key={i}>
                                            <div className="text-3xl font-bold text-white">{attr.value}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider">{attr.label}</div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>

                    {/* Right Content (Terminal or Portrait) */}
                    <div className="flex-1 w-full max-w-lg">
                        {theme.terminal ? (
                            <TerminalBlock profile={profile} />
                        ) : (
                            // Legal Portrait Placeholder / Typography
                            <div className="border-[1rem] border-slate-100 p-8 text-center bg-white shadow-inner">
                                <div className="w-48 h-48 mx-auto bg-slate-50 rounded-full mb-6 flex items-center justify-center text-4xl font-serif text-slate-300">
                                    {profile.name[0]}
                                </div>
                                <div className="text-sm uppercase tracking-widest text-slate-400 border-t pt-4">Legal Counsel</div>
                            </div>
                        )}
                    </div>
                </div>
            </header>


            {/* --- CONTENT SECTION --- */}
            <main className={cn(theme.container, "py-24")}>

                {/* SPECIALIZATIONS GRID (Tech Only) */}
                {isTech && profile.experiences.some((e: any) => e.type === 'Specialization') && (
                    <section className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-2">Más que código, soluciones</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Mi enfoque no es solo escribir software, sino resolver problemas de negocio complejos mediante tecnología robusta.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {profile.experiences.filter((e: any) => e.type === 'Specialization').map((spec: any) => {
                                const Icon = SPECIALTY_ICONS[spec.title] || Server;
                                return (
                                    <div key={spec.id} className="bg-[#0F141C] border border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-colors group">
                                        <div className="w-10 h-10 bg-cyan-900/20 text-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{spec.title}</h3>
                                        {spec.highlights.map((h: any, i: number) => (
                                            <p key={i} className="text-sm text-slate-400 leading-relaxed">{h.text}</p>
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )}

                {/* ARSENAL TECNOLÓGICO (Tech Only) */}
                {isTech && profile.skillCategories.length > 0 && (
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Arsenal Tecnológico</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {profile.skillCategories.map((cat: any) => (
                                <div key={cat.id}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-8 w-1 bg-cyan-500 rounded-full" />
                                        <h3 className="text-cyan-400 font-bold text-lg leading-tight">{cat.name}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {cat.items.map((item: any) => (
                                            <li key={item.id} className="text-slate-400 text-sm flex items-center gap-2 group hover:text-cyan-200 transition-colors">
                                                <div className="w-1.5 h-1.5 bg-cyan-800 group-hover:bg-cyan-400 rounded-full transition-colors" />
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* About / Bio (Legal specific placement) */}
                {!isTech && (
                    <section className="mb-24 text-center max-w-2xl mx-auto leading-loose text-lg">
                        <p>{profile.bio}</p>
                        <div className="mt-8 flex justify-center gap-4">
                            {profile.attributes.map((attr: any, i: number) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-900 text-sm font-bold uppercase tracking-widest">
                                    {attr.label}: {attr.value}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* EXPERIENCE & PROJECTS */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    <div className="lg:col-span-8 space-y-24">

                        {/* PROFESSIONAL EXPERIENCE (Projects) */}
                        <ProfessionalExperience
                            projects={profile.projects}
                            theme={theme}
                            isTech={isTech}
                            yearsOfExperience={yearsOfExp}
                        />
                    </div>

                    {/* SIDEBAR (Stack / Certs) */}
                    <div className="lg:col-span-4 space-y-16">

                        {!isTech && (
                            <section>
                                <h2 className={theme.sectionHeading}>Areas of Practice</h2>
                                <div className="space-y-8">
                                    {profile.skillCategories.map((cat: any) => (
                                        <div key={cat.id}>
                                            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50 border-b border-slate-200 pb-2">{cat.name}</h4>
                                            <ul className="space-y-2">
                                                {cat.items.map((item: any) => (
                                                    <li key={item.id} className="flex items-center gap-2 text-sm font-medium opacity-80">
                                                        <Building2 size={12} className="opacity-40" />
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section>
                            <h2 className={theme.sectionHeading}>Education</h2>
                            <div className="space-y-6">
                                {profile.education.map((edu: any) => (
                                    <div key={edu.id} className={cn("relative pl-4 border-l border-slate-800", isTech ? "text-slate-400" : "text-slate-600")}>
                                        <div className={cn("text-lg font-bold mb-1 leading-tight", isTech ? "text-white" : "text-slate-900")}>
                                            {edu.institution}
                                        </div>
                                        <div className="text-sm font-medium opacity-90">{edu.degree}</div>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-xs opacity-50">{edu.period}</span>
                                            {edu.status && edu.status !== 'Completed' && (
                                                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 uppercase tracking-tighter font-bold">
                                                    {edu.status === 'In Progress' ? 'En Curso' : 'Técnico/Otros'}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                </div>

            </main>

            {/* --- FOOTER --- */}
            <footer className={cn("mt-32 border-t border-slate-800/50 py-16", isTech ? "bg-[#080B10]/50" : "bg-slate-50")}>
                <div className={theme.container}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        {/* Column 1: Profile Info */}
                        <div className="md:col-span-12 lg:col-span-5">
                            <h3 className={cn("text-xl font-bold mb-6", isTech ? "text-white" : "text-slate-900")}>
                                {profile.name}
                            </h3>
                            <p className={cn("text-sm leading-relaxed max-w-md opacity-70", isTech ? "font-mono" : "")}>
                                {profile.bio}
                            </p>
                        </div>

                        {/* Column 2: Contact */}
                        <div className="md:col-span-6 lg:col-span-4">
                            <h4 className={cn("text-xs font-black uppercase tracking-[0.2em] mb-6", isTech ? "text-cyan-500" : "text-slate-400")}>
                                Contacto
                            </h4>
                            <ul className="space-y-3 text-sm opacity-80">
                                <li>{profile.email}</li>
                                <li>{profile.phone}</li>
                                <li>{profile.location}</li>
                            </ul>
                        </div>

                        {/* Column 3: Social */}
                        <div className="md:col-span-6 lg:col-span-3">
                            <h4 className={cn("text-xs font-black uppercase tracking-[0.2em] mb-6", isTech ? "text-cyan-500" : "text-slate-400")}>
                                Social
                            </h4>
                            <div className="flex gap-4">
                                {profile.socials.map((social: any) => {
                                    const platformMap: any = {
                                        'Github': Github,
                                        'Linkedin': Linkedin,
                                        'Youtube': Youtube,
                                        'Mail': Mail
                                    };
                                    const Icon = platformMap[social.iconName] || Link2;
                                    return (
                                        <a
                                            key={social.id}
                                            href={social.url}
                                            className={cn(
                                                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                                                isTech
                                                    ? "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-black border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                                    : "bg-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white"
                                            )}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs opacity-40 uppercase tracking-widest font-bold">
                        <div>© {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.</div>
                        <div className="flex gap-6">
                            <span>Desarrollado con Precisión</span>
                            <span>Privacidad</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// -----------------------------------------------------------------------------
// SUB-COMPONENTS
// -----------------------------------------------------------------------------

function TerminalBlock({ profile }: { profile: any }) {
    return (
        <div className="w-full bg-[#0F141C] rounded-lg border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="ml-auto text-xs text-slate-600">bash — 80x24</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 text-slate-300">
                <div>
                    <span className="text-purple-400">$</span> Initializing secure connection...
                </div>
                <div>
                    <span className="text-purple-400">$</span> Authenticating user: &apos;GUEST&apos;...
                </div>
                <div className="text-green-400">
                    <span className="text-purple-400">$</span> &gt; ACCESS GRANTED.
                </div>
                <br />
                <div>
                    <span className="text-purple-400">$</span> Loading architect profile...
                </div>
                <div>
                    <span className="text-purple-400">$</span> &gt; Name: <span className="text-white font-bold">{profile.name}</span>
                </div>
                <div>
                    <span className="text-purple-400">$</span> &gt; Role: <span className="text-cyan-400 font-bold">{profile.headline}</span>
                </div>
                <div>
                    <span className="text-purple-400">$</span> &gt; Status: <span className="text-emerald-400">Ready for Deployment</span>
                </div>
                <div className="animate-pulse">
                    <span className="text-purple-400">$</span> _
                </div>
            </div>
        </div>
    )
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a href={href} className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Icon size={20} />
        </a>
    )
}

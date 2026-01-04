import { getProfileById } from "@/lib/actions";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowLeft, Building2, Calendar, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";

// --- Variants (Reuse logic or refactor to shared config in real app) ---
const VARIANTS = {
    Tech: {
        page: "bg-slate-950 text-slate-300 min-h-screen font-mono selection:bg-cyan-500/30",
        header: "border-b border-cyan-500/20 bg-slate-900/50",
        name: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold",
        sectionTitle: "text-cyan-400 border-b border-cyan-500/30 pb-2 mb-6 text-xl uppercase tracking-widest",
        card: "bg-slate-900/40 border border-cyan-500/10 p-6 rounded-lg hover:border-cyan-500/30 transition-colors",
        badge: "text-xs border border-cyan-500/30 px-2 py-1 rounded text-cyan-300 bg-cyan-950/30",
        backLink: "text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-8 transition-colors"
    },
    Legal: {
        page: "bg-slate-50 text-slate-700 min-h-screen font-sans selection:bg-slate-200",
        header: "border-b border-slate-200 bg-white shadow-sm",
        name: "text-slate-900 font-serif",
        sectionTitle: "text-slate-900 border-b-2 border-slate-200 pb-2 mb-6 text-2xl font-serif",
        card: "bg-white shadow-sm border border-slate-100 p-8 rounded-sm hover:shadow-md transition-shadow",
        badge: "text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium",
        backLink: "text-slate-600 hover:text-slate-900 flex items-center gap-2 mb-8 transition-colors"
    }
};

export default async function ProfileDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const profile = await getProfileById(id);

    if (!profile) return notFound();

    const flavor = VARIANTS[profile.industry as keyof typeof VARIANTS] || VARIANTS.Tech;

    return (
        <div className={flavor.page}>
            {/* Header */}
            <div className={cn("sticky top-0 z-50 backdrop-blur-md", flavor.header)}>
                <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/showcase" className={flavor.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Gallery</span>
                    </Link>
                    <div className="text-sm opacity-60 font-medium">
                        {profile.industry.toUpperCase()} PROFILE // {profile.id.slice(0, 8)}
                    </div>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <section className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className={cn("text-5xl md:text-7xl mb-6", flavor.name)}>
                        {profile.name}
                    </h1>
                    <p className="text-2xl md:text-3xl opacity-80 mb-6 font-light">
                        {profile.headline}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {profile.attributes.map((attr: { label: string; value: string }, i: number) => (
                            <span key={i} className={flavor.badge}>
                                {attr.label}: {attr.value}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg leading-relaxed opacity-70">
                        {profile.bio}
                    </p>
                </section>

                {/* Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-16">

                        {/* Experience */}
                        <section>
                            <h2 className={flavor.sectionTitle}>Experience & Impact</h2>
                            <div className="space-y-6">
                                {profile.experiences.map((exp: any) => (
                                    <div key={exp.id} className={flavor.card}>
                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                            <h3 className="text-xl font-bold flex items-center gap-2">
                                                <Building2 size={18} className="opacity-50" />
                                                {exp.title}
                                            </h3>
                                            <span className="opacity-60 text-sm mono">{exp.period}</span>
                                        </div>
                                        <div className="text-lg font-medium mb-4 opacity-90">
                                            @ {exp.organization}
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((h: any) => (
                                                <li key={h.id} className="flex gap-3 text-sm md:text-base opacity-80">
                                                    <span className="text-cyan-500">▹</span>
                                                    {h.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        {profile.projects.length > 0 && (
                            <section>
                                <h2 className={flavor.sectionTitle}>Featured Projects</h2>
                                <div className="space-y-6">
                                    {profile.projects.map((proj: any) => (
                                        <div key={proj.id} className={flavor.card}>
                                            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                                            <p className="opacity-70 mb-4 text-sm">{proj.description}</p>

                                            {proj.outcome && (
                                                <div className="mb-4 bg-emerald-500/10 border-l-2 border-emerald-500 pl-4 py-2 text-sm">
                                                    <strong className="text-emerald-500 block text-xs uppercase tracking-wider mb-1">Outcome</strong>
                                                    {proj.outcome}
                                                </div>
                                            )}

                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {proj.tags.map((t: any) => (
                                                    <span key={t.id} className={cn("text-[10px] uppercase tracking-wider opacity-60 border px-1", profile.industry === 'Tech' ? 'border-cyan-800' : 'border-slate-200')}>
                                                        {t.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-4 space-y-12">

                        {/* Skills */}
                        <section>
                            <h2 className={flavor.sectionTitle}>Competencies</h2>
                            <div className="space-y-6">
                                {profile.skillCategories.map((cat: any) => (
                                    <div key={cat.id}>
                                        <h4 className="text-sm font-bold uppercase opacity-50 mb-3">{cat.name}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((item: any) => (
                                                <span key={item.id} className={flavor.badge}>
                                                    {item.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className={flavor.sectionTitle}>Education</h2>
                            <div className="space-y-4">
                                {profile.education.map((edu: any) => (
                                    <div key={edu.id} className={cn(flavor.card, "p-4")}>
                                        <div className="flex items-start gap-3">
                                            <GraduationCap className="shrink-0 opacity-50 mt-1" size={18} />
                                            <div>
                                                <div className="font-bold leading-tight">{edu.institution}</div>
                                                <div className="text-sm opacity-70 mt-1">{edu.degree}</div>
                                                <div className="text-xs opacity-50 mt-2">{edu.period}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                </div>
            </main>
        </div>
    );
}

import { getShowcaseProfiles } from "@/lib/actions";
import { ShowcaseCard } from "@/components/ui/ShowcaseCard";

export const dynamic = 'force-dynamic';

export default async function ShowcasePage() {
    const profiles = await getShowcaseProfiles();

    if (profiles.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-800">
                <div>
                    <h1 className="text-2xl font-bold mb-2">No Profiles Found</h1>
                    <p>Please ensure the database is seeded.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-8 space-y-12">
            <header className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">
                    Professional Showcase
                </h1>
                <p className="text-slate-500">
                    Homologation of High-Performance Profiles (Tech & Legal)
                </p>
            </header>

            <div className="space-y-16">
                {profiles.map((profile) => (
                    <ShowcaseCard key={profile.id} profile={profile} />
                ))}
            </div>
        </div>
    );
}

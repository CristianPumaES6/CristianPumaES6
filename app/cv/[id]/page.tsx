import { getProfileById } from '@/lib/actions';
import { CVDocument } from '@/components/CVDocument';
import { notFound } from 'next/navigation';
import { PrintButton } from '@/components/PrintButton';

export default async function CVPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // We try to find by ID or Slug. 
    // Usually the ID passed in URL might be the slug.
    const profile = await getProfileById(id);

    if (!profile) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white text-black py-8 print:py-0 print:bg-white">
            <CVDocument profile={profile} />

            <div className="print:hidden fixed bottom-10 right-10 z-50">
                <PrintButton />
            </div>
        </div>
    );
}

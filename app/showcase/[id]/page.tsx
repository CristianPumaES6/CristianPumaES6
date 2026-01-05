import ProfileClientView from "./ProfileClientView";

export const dynamic = "force-static";

// Next.js requirement for stagnant export with dynamic routes
export async function generateStaticParams() {
    // We return a placeholder to satisfy the build requirement.
    // In production with GH Pages + 404 trick, real IDs will be handled by the client.
    return [{ id: 'view' }];
}

export default async function ProfileDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProfileClientView id={id} />;
}

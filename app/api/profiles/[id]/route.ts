import { NextResponse } from 'next/server';
import { getProfileById, updateProfile } from '@/lib/actions';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const profile = await getProfileById(id);

        if (!profile) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        return NextResponse.json(profile);
    } catch (error) {
        console.error("API GET ProfileById error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const formData = await request.formData();
        const result = await updateProfile(id, formData);

        if (result.success) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ success: false, error: "Failed to update profile" }, { status: 500 });
        }
    } catch (error) {
        console.error("API PUT Profile error:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}

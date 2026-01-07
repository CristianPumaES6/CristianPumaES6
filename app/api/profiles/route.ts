
import { NextResponse } from 'next/server';
import { getShowcaseProfiles, createProfile } from '@/lib/actions';

export async function GET() {
    const profiles = await getShowcaseProfiles();
    return NextResponse.json(profiles);
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const result = await createProfile(formData);

        if (result.success) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ success: false, error: "Failed to create profile" }, { status: 500 });
        }
    } catch (error) {
        console.error("API POST Profile error:", error);
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}

/**
 * This service replaces the direct Prisma calls in lib/actions.ts.
 * Since GitHub Pages is a static host, we must fetch data from 
 * an external backend API at runtime.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function getClientShowcaseProfiles() {
    try {
        const res = await fetch(`${API_BASE}/api/profiles`);
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
    } catch (error) {
        console.error("Fetch profiles error:", error);
        return [];
    }
}

export async function getClientProfileById(id: string) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles/${id}`);
        if (!res.ok) throw new Error("Network response was ok");
        return await res.json();
    } catch (error) {
        console.error("Fetch profile error:", error);
        return null;
    }
}

export async function createClientProfile(formData: FormData) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles`, {
            method: 'POST',
            body: formData, // fetch will automatically set multipart/form-data
        });
        if (!res.ok) throw new Error("Post failed");
        return await res.json();
    } catch (error) {
        console.error("Create profile error:", error);
        return { success: false };
    }
}

export async function updateClientProfile(id: string, formData: FormData) {
    try {
        const res = await fetch(`${API_BASE}/api/profiles/${id}`, {
            method: 'PUT',
            body: formData,
        });
        if (!res.ok) throw new Error("Update failed");
        return await res.json();
    } catch (error) {
        console.error("Update profile error:", error);
        return { success: false };
    }
}

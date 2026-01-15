/**
 * This service replaces the direct Prisma calls in lib/actions.ts.
 * Since GitHub Pages is a static host, we must fetch data from 
 * an external backend API at runtime.
 */

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

export async function getClientShowcaseProfiles() {
    const targetUrl = `${API_BASE}/api/profiles`;
    try {
        const res = await fetch(targetUrl);
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
    } catch (error) {
        console.warn(`Fetch profiles error (target: ${targetUrl}):`, error);
        // Fallback to relative path if API_BASE was provided and failed
        if (API_BASE) {
            try {
                console.log("Attempting fallback to relative path: /api/profiles");
                const res = await fetch('/api/profiles');
                if (res.ok) return await res.json();
            } catch (e) {
                console.error("Fallback fetch failed:", e);
            }
        }
        return [];
    }
}

export async function getClientProfileById(id: string) {
    const targetUrl = `${API_BASE}/api/profiles/${id}`;
    try {
        const res = await fetch(targetUrl);
        if (!res.ok) throw new Error("Network response was not ok");
        return await res.json();
    } catch (error) {
        console.warn(`Fetch profile error (target: ${targetUrl}):`, error);
        if (API_BASE) {
            try {
                const res = await fetch(`/api/profiles/${id}`);
                if (res.ok) return await res.json();
            } catch (e) { /* ignore */ }
        }
        return null;
    }
}

// Helper to check if we are in browser
const isBrowser = typeof window !== 'undefined';

export async function createClientProfile(formData: FormData) {
    // Force relative path on client to avoid CORS/Port mismatches
    const targetUrl = isBrowser ? '/api/profiles' : `${API_BASE}/api/profiles`;
    console.log(`[API] Creating profile at: ${targetUrl}`);
    try {
        const res = await fetch(targetUrl, {
            method: 'POST',
            body: formData,
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Post failed: ${res.status} - ${err}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Create profile error:", error);
        return { success: false, error: String(error) };
    }
}

export async function updateClientProfile(id: string, formData: FormData) {
    if (!id) {
        console.error("updateClientProfile: ID is missing!");
        return { success: false, error: "Missing ID" };
    }
    // Force relative path on client
    const targetUrl = isBrowser ? `/api/profiles/${id}` : `${API_BASE}/api/profiles/${id}`;
    console.log(`[API] Updating profile ${id} at: ${targetUrl}`);

    try {
        const res = await fetch(targetUrl, {
            method: 'PUT',
            body: formData,
        });
        if (!res.ok) {
            const err = await res.text();
            throw new Error(`Update failed: ${res.status} - ${err}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Update profile error, retrying fallback...", error);
        // Fallback mainly useful if isBrowser check failed or we are in a weird env
        try {
            const fallbackUrl = `/api/profiles/${id}`;
            if (targetUrl !== fallbackUrl) {
                const res = await fetch(fallbackUrl, { method: 'PUT', body: formData });
                if (res.ok) return await res.json();
            }
        } catch (e) {
            console.error("Fallback failed:", e);
        }
        return { success: false, error: String(error) };
    }
}

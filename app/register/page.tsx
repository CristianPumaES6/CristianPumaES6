'use client';
import { useActionState, useEffect } from 'react';
import { registerUser } from '@/lib/actions';
import { useToast } from '@/components/ui/toast';

export default function RegisterPage() {
    const [state, formAction] = useActionState(registerUser, null);
    const { showToast } = useToast();

    useEffect(() => {
        if (state?.message) {
            // If the message contains "successful", show success, otherwise error
            // However, registerUser likely redirects on success if I recall correctly... 
            // Wait, registerUser calls signIn which redirects.
            // If it returns an object with 'message', it means it failed OR it didn't redirect (e.g. error in signIn).
            // Let's assume error if message is present, because success means redirect.
            // But verify registerUser content again. It returns { message: '...' } on errors. 
            // It throws error (redirect) on success.
            showToast(state.message, "error");
        }
    }, [state, showToast]);

    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <form action={formAction} className="space-y-3">
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 shadow-sm dark:bg-zinc-900">
                        <h1 className="mb-3 text-2xl dark:text-white">
                            Create an Account
                        </h1>
                        <div className="w-full">
                            <div>
                                <label
                                    className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-50"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-50"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-50"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        required
                                        minLength={6}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                            Register
                        </button>
                        <div
                            className="flex h-8 items-end space-x-1"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {state?.message && (
                                <p className="text-sm text-red-500">{state.message}</p>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

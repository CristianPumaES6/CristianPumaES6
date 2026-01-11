'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { signIn } from 'next-auth/react'; // Client side sign in for Google
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

    const handleGoogleLogin = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <div className="space-y-3">
            {/* Main Card with Glassmorphism */}
            <div className="flex-1 rounded-lg border border-white/10 bg-card/40 backdrop-blur-md px-6 pb-4 pt-8 shadow-2xl relative overflow-hidden">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-grid-pattern-subtle opacity-10 pointer-events-none" />

                <h1 className="mb-3 text-2xl font-bold text-white text-center text-glow-tech">
                    Welcome Back
                </h1>
                <p className="text-gray-400 text-sm text-center mb-6">Enter your credentials to access your ProCard.</p>

                <form action={formAction}>
                    <div className="w-full space-y-4">
                        <div>
                            <label
                                className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-wider"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-white/10 bg-black/50 py-[9px] pl-4 text-sm text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                className="mb-2 block text-xs font-medium text-gray-400 uppercase tracking-wider"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-white/10 bg-black/50 py-[9px] pl-4 text-sm text-white placeholder:text-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                        <button className="w-full bg-primary text-black font-bold py-2 rounded-md hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed" aria-disabled={isPending}>
                            Log in with Email
                        </button>
                    </div>

                    <div
                        className="flex h-8 items-end space-x-1 justify-center"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {errorMessage && (
                            <>
                                <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
                            </>
                        )}
                    </div>
                </form>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#0f111a] px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                    <FcGoogle size={20} />
                    <span>Sign in with Google</span>
                </button>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-400">Don't have an account? </span>
                    <a href="/register" className="text-primary hover:text-cyan-400 font-medium transition-colors" >
                        Register now
                    </a>
                </div>
            </div>
        </div>
    );
}

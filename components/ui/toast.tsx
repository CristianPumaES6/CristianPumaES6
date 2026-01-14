'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const showToast = useCallback((message: string, type: ToastType = 'success') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto remove after 5 seconds
        setTimeout(() => removeToast(id), 5000);
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-24 right-6 z-[100001] flex flex-col gap-4 pointer-events-none w-full max-w-sm">
                <AnimatePresence mode="popLayout">
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

const toastVariants = {
    initial: { opacity: 0, x: 50, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

const typeStyles = {
    success: {
        border: 'border-cyan-500/50',
        bg: 'bg-slate-900/90',
        icon: 'text-cyan-400',
        title: 'System Update',
        shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]'
    },
    error: {
        border: 'border-red-500/50',
        bg: 'bg-slate-900/90',
        icon: 'text-red-400',
        title: 'System Error',
        shadow: 'shadow-[0_0_20px_rgba(239,68,68,0.15)]'
    },
    info: {
        border: 'border-blue-500/50',
        bg: 'bg-slate-900/90',
        icon: 'text-blue-400',
        title: 'Information',
        shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]'
    }
};

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
    const style = typeStyles[toast.type];

    // Progress bar for auto-dismiss visual
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => Math.max(0, prev - 1));
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            layout
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
                "pointer-events-auto relative overflow-hidden rounded-xl border backdrop-blur-md p-4 pr-12",
                style.bg,
                style.border,
                style.shadow
            )}
        >
            <div className="flex items-start gap-3">
                <div className={cn("mt-0.5 p-1.5 rounded-full bg-white/5", style.icon)}>
                    {toast.type === 'success' && <CheckCircle2 size={18} />}
                    {toast.type === 'error' && <AlertCircle size={18} />}
                    {toast.type === 'info' && <Info size={18} />}
                </div>
                <div>
                    <h4 className={cn("text-xs font-bold uppercase tracking-widest mb-1 opacity-90", style.icon)}>
                        {style.title}
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                        {toast.message}
                    </p>
                </div>
            </div>

            <button
                onClick={() => onRemove(toast.id)}
                className="absolute top-3 right-3 p-1 text-slate-500 hover:text-white transition-colors hover:bg-white/10 rounded-md"
            >
                <X size={14} />
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-white/10 w-full">
                <motion.div
                    className={cn("h-full", style.icon.replace('text-', 'bg-'))}
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: 5, ease: "linear" }}
                />
            </div>

            {/* Gloss Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 pointer-events-none" />
        </motion.div>
    );
}

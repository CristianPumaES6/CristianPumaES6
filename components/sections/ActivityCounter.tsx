"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

function Counter({ value, label }: { value: number; label: string }) {
    const [displayValue, setDisplayValue] = useState(0);
    const springValue = useSpring(0, { stiffness: 50, damping: 20 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    useEffect(() => {
        rounded.on("change", (latest) => setDisplayValue(latest));
    }, [rounded]);

    return (
        <div className="flex flex-col items-center p-6 glass-card rounded-xl min-w-[200px]">
            <div className="text-[10px] font-mono text-primary/60 mb-2 uppercase tracking-[0.2em]">
                {label}
            </div>
            <div className="text-4xl md:text-5xl font-bold font-mono text-white flex items-baseline gap-1">
                <span className="text-primary opacity-50 text-2xl mr-1">&gt;</span>
                {displayValue.toLocaleString()}
            </div>
            <div className="mt-4 w-full h-1 bg-primary/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                />
            </div>
        </div>
    );
}

export function ActivityCounter() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-wrap justify-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Counter value={1240} label="Cantidad de registros activos" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Counter value={8432} label="Visitas totales" />
                </motion.div>
            </div>
        </div>
    );
}

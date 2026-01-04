"use client";

import { PROFILE } from "@/data/profile";
import { motion } from "framer-motion";

export function Stack() {
    return (
        <section id="stack" className="py-20 bg-black/20">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Arsenal Tecnológico</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROFILE.stack.map((group, idx) => (
                        <div key={group.category} className="space-y-4">
                            <h3 className="text-lg font-semibold text-primary border-l-2 border-primary pl-3">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.items.map((item, itemIdx) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                                        viewport={{ once: true }}
                                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-mono"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-sm bg-primary shadow-[0_0_5px_var(--color-primary)]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

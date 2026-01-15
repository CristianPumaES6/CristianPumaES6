"use client";

import { PROFILE } from "@/data/profile";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/TechIcon";

export function Stack({ stack }: { stack?: any[] }) {
    const displayStack = stack || PROFILE.stack;

    return (
        <section id="stack" className="py-20 bg-black/20">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Arsenal Tecnológico</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayStack.map((group: any, idx: number) => (
                        <div key={group.category || group.name} className="space-y-4">
                            <h3 className="text-lg font-semibold text-primary border-l-2 border-primary pl-3">
                                {group.category || group.name}
                            </h3>
                            <ul className="space-y-2">
                                {(group.items || group.skills || []).map((item: any, itemIdx: number) => {
                                    const itemName = typeof item === 'string' ? item : item.name;
                                    return (
                                        <motion.li
                                            key={itemName}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                                            viewport={{ once: true }}
                                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 font-mono"
                                        >
                                            <TechIcon name={itemName} className="w-4 h-4 text-primary" />
                                            {itemName}
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

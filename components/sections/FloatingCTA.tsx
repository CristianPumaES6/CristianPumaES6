"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export function FloatingCTA() {
    return (
        <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-32 right-8 z-40 flex items-center gap-3 pl-6 pr-4 py-3 bg-white text-black rounded-full font-bold shadow-2xl hover:bg-zinc-200 transition-colors group"
            onClick={() => window.open("https://wa.me/51900000000", "_blank")}
        >
            <span className="text-xs uppercase tracking-widest">INITIALIZE_CONTACT</span>
            <div className="p-2 bg-black text-white rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} />
            </div>
        </motion.button>
    );
}

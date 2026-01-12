"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="group flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
            title="Print or Save as PDF"
        >
            <Printer size={20} />
            <span className="font-semibold">Descargar / Imprimir</span>
        </button>
    );
}

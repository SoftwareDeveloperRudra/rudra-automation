"use client";

import { MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#0B0F19]/90 hover:bg-emerald-950/80 border border-emerald-500/40 px-4 py-3 rounded-full shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/20"
        aria-label="Contact Rudra Umra on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />

        <span className="text-xs font-semibold text-white tracking-wide pr-1 hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

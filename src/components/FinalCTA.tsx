"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#0B0F19] to-[#030712]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0B0F19] to-amber-950/40 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mx-auto">
            <Bot className="w-4 h-4" />
            <span>Ready To Turn Repetitive Work Into Automation?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-none">
            Your Next Bottleneck Might Be <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Automatable.</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Tell me what's slowing your business down. I'll help you find a simpler, automated way to handle it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#audit"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Free Automation Audit</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

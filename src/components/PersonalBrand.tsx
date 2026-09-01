"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code2, Bot, Wrench } from "lucide-react";

export default function PersonalBrand() {
  return (
    <section className="py-16 border-y border-white/5 bg-[#0B0F19]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Brand Intro & Quote */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Full Stack & AI Automation Architect</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Hi, I'm <span className="text-gradient-cyan">Rudra Umra</span>.
            </h2>

            <p className="text-xl text-gray-300 font-medium italic border-l-2 border-amber-400 pl-4 py-1">
              "I build digital systems that don't just look good — they work."
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              Based in Surat, Gujarat, I specialize in engineering web applications and AI-driven automation pipelines that eliminate manual bottlenecks, qualify leads instantly, and let business owners focus on growth.
            </p>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <Code2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Full-Stack Development</h4>
                <p className="text-xs text-gray-400 mt-0.5">High-performance Next.js & React web platforms.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <Bot className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">AI & Workflow Automation</h4>
                <p className="text-xs text-gray-400 mt-0.5">n8n, Gemini AI, WhatsApp & API integrations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#trust"
            className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-cyan-400 transition-colors group"
          >
            <span>DISCOVER THE SYSTEM MINDSET</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

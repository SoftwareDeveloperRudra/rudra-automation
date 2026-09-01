"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Bot,
  Zap,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const workflowNodes = [
  { icon: MessageSquare, label: "Business Inquiry", sub: "WhatsApp / Web Form", color: "text-blue-400", bg: "border-blue-500/30 bg-blue-500/10" },
  { icon: Bot, label: "AI Qualification", sub: "Gemini / LLM Engine", color: "text-purple-400", bg: "border-purple-500/30 bg-purple-500/10" },
  { icon: Zap, label: "n8n Workflow", sub: "Logic & Webhooks", color: "text-amber-400", bg: "border-amber-500/30 bg-amber-500/10" },
  { icon: Calendar, label: "Instant Booking", sub: "Google Calendar Sync", color: "text-emerald-400", bg: "border-emerald-500/30 bg-emerald-500/10" },
  { icon: CheckCircle2, label: "Customer Onboarded", sub: "Automated Notify", color: "text-cyan-400", bg: "border-cyan-500/30 bg-cyan-500/10" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-semibold tracking-wide text-gray-300">
            Based in Surat, Gujarat • Working Worldwide
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <div className="max-w-4xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight font-heading leading-none"
          >
            BUILD<span className="text-cyan-400">.</span> AUTOMATE
            <span className="text-amber-400">.</span> SCALE
            <span className="text-cyan-400">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed max-w-3xl"
          >
            Full-stack systems and AI automations that turn repetitive business processes into simple, scalable workflows.
          </motion.p>
        </div>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <span>Let's Automate Your Business</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#audit"
            className="group inline-flex items-center gap-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 font-semibold text-base px-6 py-4 rounded-2xl transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Get Free Automation Audit</span>
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium text-base px-6 py-4 transition-colors"
          >
            <span>Explore My Work</span>
          </a>
        </motion.div>

        {/* Animated Automation Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                Automated System Flow Architecture
              </span>
            </div>
            <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              ● 24/7 Active Pipeline
            </span>
          </div>

          {/* Workflow nodes sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
            {workflowNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={index} className="relative group">
                  <div
                    className={`p-4 rounded-2xl border ${node.bg} backdrop-blur-md transition-all duration-300 group-hover:scale-[1.02]`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${node.color}`} />
                      <span className="text-[10px] font-mono text-gray-500">
                        STEP 0{index + 1}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {node.label}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{node.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

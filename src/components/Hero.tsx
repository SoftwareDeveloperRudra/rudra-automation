import { useState } from "react";
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
  User,
  ShieldCheck,
} from "lucide-react";
import HeroBotAnimation from "./HeroBotAnimation";

const workflowNodes = [
  { icon: MessageSquare, label: "Business Inquiry", sub: "WhatsApp / Web Form", color: "text-[#00E676]", bg: "border-[#00E676]/30 bg-[#00E676]/10" },
  { icon: Bot, label: "AI Qualification", sub: "Gemini / LLM Engine", color: "text-[#60A5FA]", bg: "border-[#60A5FA]/30 bg-[#60A5FA]/10" },
  { icon: Zap, label: "n8n Workflow", sub: "Logic & Webhooks", color: "text-[#00E676]", bg: "border-[#00E676]/30 bg-[#00E676]/10" },
  { icon: Calendar, label: "Instant Booking", sub: "Google Calendar Sync", color: "text-[#60A5FA]", bg: "border-[#60A5FA]/30 bg-[#60A5FA]/10" },
  { icon: CheckCircle2, label: "Customer Onboarded", sub: "Automated Notify", color: "text-[#00E676]", bg: "border-[#00E676]/30 bg-[#00E676]/10" },
];

export default function Hero() {
  const [heroView, setHeroView] = useState<"bot" | "profile">("bot");

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#070A11]">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00E676]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-[#00E676]/30 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-gray-200 uppercase">
                Full-Stack Developer & AI Automation Engineer
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl font-black tracking-tight font-heading leading-[1.08] text-white"
            >
              BUILD<span className="text-[#00E676]">.</span> AUTOMATE
              <span className="text-[#60A5FA]">.</span> <br className="hidden sm:inline" />
              <span className="text-gradient-emerald">SCALE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl"
            >
              Full-stack web applications and AI automations that turn repetitive business processes into simple, scalable 24/7 digital workflows.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-[#00E676] hover:bg-[#00C853] text-black font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#00E676]/25 transition-all duration-300"
              >
                <span>Let's Automate Your Business</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#audit"
                className="group inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-[#00E676] hover:text-white border border-[#00E676]/40 font-bold text-base px-6 py-4 rounded-2xl transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#00E676]" />
                <span>Get Free Audit</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold text-base px-5 py-4 transition-colors"
              >
                <span>Explore My Work</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Interactive Component Switcher */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 mb-4 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setHeroView("bot")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  heroView === "bot"
                    ? "bg-[#00E676] text-black shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Automation Bot</span>
              </button>

              <button
                onClick={() => setHeroView("profile")}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  heroView === "profile"
                    ? "bg-[#00E676] text-black shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Rudra Profile</span>
              </button>
            </div>

            {/* Display Active Component */}
            {heroView === "bot" ? (
              <HeroBotAnimation />
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-md"
              >
                <div className="relative rounded-[2rem] bg-gradient-to-b from-[#0D131F] to-[#070A11] border border-white/15 p-6 shadow-2xl overflow-hidden">
                  <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#0D131F] border border-white/10 group flex items-center justify-center">
                    <img
                      src="/rudra.jpg"
                      alt="Rudra Umra"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.parentElement?.querySelector(".hero-avatar-fallback");
                        if (fallback) (fallback as HTMLElement).style.display = "flex";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="hero-avatar-fallback hidden absolute inset-0 bg-gradient-to-b from-[#00E676]/10 to-[#0D131F] flex flex-col items-center justify-center text-center p-6">
                      <div className="w-20 h-20 rounded-full bg-[#00E676]/15 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] mb-3">
                        <User className="w-10 h-10" />
                      </div>
                      <span className="text-xl font-extrabold text-white font-heading">Rudra Umra</span>
                      <span className="text-xs text-[#00E676] font-mono mt-1">Surat, Gujarat, India</span>
                    </div>

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 border border-[#00E676]/40 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-[#00E676] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>SYSTEM ARCHITECT</span>
                    </div>
                  </div>

                  <div className="mt-5 text-center space-y-1">
                    <h3 className="text-2xl font-extrabold text-white font-heading">
                      Rudra Umra
                    </h3>
                    <p className="text-xs font-mono font-bold text-[#00E676] uppercase tracking-wider">
                      Full Stack & AI Automation Architect
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Animated Automation Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00E676] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-gray-300">
                Automated System Flow Architecture
              </span>
            </div>
            <span className="text-xs text-[#00E676] font-mono bg-[#00E676]/10 border border-[#00E676]/30 px-3 py-1 rounded-full font-bold">
              ● 24/7 ACTIVE PIPELINE
            </span>
          </div>

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
                      <span className="text-[10px] font-mono text-gray-400 font-bold">
                        STEP 0{index + 1}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">
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

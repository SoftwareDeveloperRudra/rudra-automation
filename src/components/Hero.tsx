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
} from "lucide-react";

const workflowNodes = [
  { icon: MessageSquare, label: "Business Inquiry", sub: "WhatsApp / Web Form", color: "text-[#00FF66]", bg: "border-[#00FF66]/30 bg-[#00FF66]/10" },
  { icon: Bot, label: "AI Qualification", sub: "Gemini / LLM Engine", color: "text-[#FF0055]", bg: "border-[#FF0055]/30 bg-[#FF0055]/10" },
  { icon: Zap, label: "n8n Workflow", sub: "Logic & Webhooks", color: "text-[#00FF66]", bg: "border-[#00FF66]/30 bg-[#00FF66]/10" },
  { icon: Calendar, label: "Instant Booking", sub: "Google Calendar Sync", color: "text-[#FF0055]", bg: "border-[#FF0055]/30 bg-[#FF0055]/10" },
  { icon: CheckCircle2, label: "Customer Onboarded", sub: "Automated Notify", color: "text-[#00FF66]", bg: "border-[#00FF66]/30 bg-[#00FF66]/10" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#04060A]">
      {/* Ambient background glows - Cyber Neon Red & Green */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#FF0055]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#00FF66]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-[#FF0055]/30 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF66]"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-[#00FF66]" />
              <span className="text-xs font-semibold tracking-wide text-gray-300">
                Based in Surat, Gujarat • Working Worldwide
              </span>
            </motion.div>

            {/* Main Cyber Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight font-heading leading-none"
            >
              BUILD<span className="text-[#FF0055]">.</span> AUTOMATE
              <span className="text-[#00FF66]">.</span> SCALE
              <span className="text-[#FF0055]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed max-w-3xl"
            >
              Full-stack systems and AI automations that turn repetitive business processes into simple, scalable workflows.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0055] via-[#FF2A6D] to-[#D90368] hover:from-[#FF2A6D] hover:to-[#FF0055] text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#FF0055]/30 hover:shadow-[#FF0055]/50 transition-all duration-300"
              >
                <span>Let's Automate Your Business</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#audit"
                className="group inline-flex items-center gap-2.5 bg-[#00FF66]/10 hover:bg-[#00FF66]/20 text-[#00FF66] hover:text-white border border-[#00FF66]/40 font-bold text-base px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#00FF66]/10"
              >
                <Sparkles className="w-4 h-4 text-[#00FF66]" />
                <span>Get Free Automation Audit</span>
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold text-base px-6 py-4 transition-colors"
              >
                <span>Explore My Work</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Rudra Cyber Profile Card / Image Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group w-full max-w-sm"
            >
              {/* Outer Dual Neon Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF0055] to-[#00FF66] opacity-75 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse" />

              <div className="relative rounded-3xl bg-[#090D16] border border-white/10 p-6 backdrop-blur-xl flex flex-col items-center text-center">
                {/* Profile Image Container */}
                <div className="relative w-44 h-44 mb-5 rounded-2xl overflow-hidden border-2 border-[#00FF66] shadow-2xl shadow-[#00FF66]/20 group-hover:scale-105 transition-transform duration-300 bg-[#04060A]">
                  <img
                    src="/rudra.jpg"
                    alt="Rudra Umra"
                    onError={(e) => {
                      // Fallback if user hasn't added rudra.jpg yet
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                      if (fallback) (fallback as HTMLElement).style.display = "flex";
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Fallback Cyber Avatar Icon */}
                  <div className="avatar-fallback hidden absolute inset-0 bg-gradient-to-br from-[#FF0055]/20 via-[#0A0E17] to-[#00FF66]/20 flex-col items-center justify-center text-white">
                    <User className="w-16 h-16 text-[#00FF66] mb-1" />
                    <span className="text-[10px] font-mono text-gray-400">Add rudra.jpg to /public</span>
                  </div>

                  {/* Neon Cyber Tag */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#FF0055] text-white text-[9px] font-mono font-bold uppercase tracking-widest shadow-md">
                    VERIFIED
                  </span>
                </div>

                <h3 className="text-2xl font-black font-heading text-white tracking-tight">
                  Rudra Umra
                </h3>

                <p className="text-xs font-mono font-bold text-[#00FF66] uppercase tracking-wider mt-1">
                  Full Stack & AI Automation Architect
                </p>

                <p className="text-xs text-gray-400 mt-3 italic border-t border-white/10 pt-3">
                  "Turning repetitive manual business work into 24/7 automated systems."
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Automation Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-[#FF0055]/20"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00FF66] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-mono font-bold text-gray-300">
                Automated System Flow Architecture
              </span>
            </div>
            <span className="text-xs text-[#00FF66] font-mono bg-[#00FF66]/10 border border-[#00FF66]/30 px-3 py-1 rounded-full font-bold">
              ● 24/7 ACTIVE PIPELINE
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

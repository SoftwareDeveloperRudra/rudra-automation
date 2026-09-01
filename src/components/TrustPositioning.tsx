"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Layers, BarChart3, Clock } from "lucide-react";

const valueStats = [
  {
    icon: Clock,
    value: "10-20 Hrs",
    label: "Saved Every Week",
    sub: "By automating manual lead entry & follow-up messages.",
  },
  {
    icon: Zap,
    value: "< 30 Sec",
    label: "Lead Response Time",
    sub: "Instant AI qualification & WhatsApp notifications.",
  },
  {
    icon: Layers,
    value: "100%",
    label: "Custom Workflows",
    sub: "Tailored specifically for your existing business tools.",
  },
  {
    icon: BarChart3,
    value: "0 Missed",
    label: "Inquiries & Appointments",
    sub: "Automated booking & Google Calendar sync.",
  },
];

export default function TrustPositioning() {
  return (
    <section id="trust" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Positioning & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Don't Just Build A Website. <br />
            <span className="text-gradient-amber">Build A System That Works.</span>
          </h2>

          <p className="text-lg text-gray-300">
            Most websites sit idle like digital business cards. I combine full-stack development with AI workflow automation to turn your online presence into an active 24/7 lead generation and client acquisition engine.
          </p>
        </div>

        {/* Core Value Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black font-heading text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Who I Help Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#0B0F19] border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Designed for Growing Businesses
              </h3>
              <p className="text-sm text-gray-400">
                Specialized in automating operations for Coaching Institutes, Clinics, Salons, Gyms, Restaurants, Real Estate Agencies, Hotels, & Local Services.
              </p>
            </div>
            <a
              href="#audit"
              className="shrink-0 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl border border-white/20 transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>See What You Can Automate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

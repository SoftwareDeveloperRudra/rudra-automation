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
    <section id="trust" className="py-24 relative overflow-hidden bg-[#070A11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Positioning & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Don't Just Build A Website. <br />
            <span className="text-gradient-emerald">Build A System That Works.</span>
          </h2>

          <p className="text-lg text-gray-300">
            Most websites sit idle like digital business cards. I combine full-stack development with AI workflow automation to turn your online presence into an active 24/7 lead generation engine.
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
                className="p-6 rounded-2xl bg-[#0D131F] border border-white/10 hover:border-[#00E676]/40 transition-all duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-xl border border-[#00E676]/30 bg-[#00E676]/10 flex items-center justify-center text-[#00E676] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black font-heading text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-200 mb-2">
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
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0D131F] via-[#131C2E] to-[#0D131F] border border-white/15 shadow-2xl">
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
              className="shrink-0 bg-[#00E676]/10 hover:bg-[#00E676]/20 text-[#00E676] font-bold text-xs px-6 py-3 rounded-xl border border-[#00E676]/40 transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-[#00E676]" />
              <span>See What You Can Automate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

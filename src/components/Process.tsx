import { motion } from "framer-motion";
import { Search, Compass, Code2, Zap, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Identify Bottlenecks",
    desc: "We analyze your existing workflow, customer touchpoints, and manual tasks to pin down exactly where time and leads are being lost.",
    icon: Search,
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Architect Solution",
    desc: "We design the cleanest, leanest architecture combining website UX, AI prompts, database schemas, and n8n workflow triggers.",
    icon: Compass,
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Full-Stack Development",
    desc: "We engineer high-speed React web applications, integrate database models, and write reliable backend code.",
    icon: Code2,
  },
  {
    step: "04",
    title: "AUTOMATE",
    subtitle: "Connect Workflows & APIs",
    desc: "We connect n8n, Gemini AI, WhatsApp, and Google Calendar into a cohesive 24/7 background system.",
    icon: Zap,
  },
  {
    step: "05",
    title: "LAUNCH",
    subtitle: "Deploy & Optimize",
    desc: "We deploy directly to Vercel, conduct end-to-end testing with sample leads, and deliver a production-ready system.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-24 relative bg-[#04060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono uppercase font-bold tracking-widest">
            <Rocket className="w-3.5 h-3.5" />
            <span>Structured Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            How It Works: <span className="text-gradient-red">5-Step Process</span>
          </h2>

          <p className="text-gray-300 text-base">
            From initial business discovery to live automated deployment — a transparent, results-driven process.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#090D16] border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-[#FF0055]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#00FF66]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#00FF66] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 font-bold">
                  <span>STAGE {idx + 1}/5</span>
                  <span className="text-[#00FF66]">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

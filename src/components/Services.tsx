import { motion } from "framer-motion";
import { Bot, Globe, CalendarCheck, Cpu, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI AUTOMATION",
    subtitle: "Workflow & Operations",
    description: "Automate repetitive business operations using AI, APIs, and workflow automation.",
    examples: [
      "Lead management & auto-qualification",
      "Automated WhatsApp & Email follow-ups",
      "Customer support chatbots & FAQs",
      "Data processing & CRM sync",
      "Owner instant alert notifications",
    ],
    border: "group-hover:border-[#00FF66]/50",
    badge: "border-[#00FF66]/30 bg-[#00FF66]/10 text-[#00FF66]",
    glow: "group-hover:shadow-[#00FF66]/10",
  },
  {
    id: "business-websites",
    icon: Globe,
    title: "BUSINESS WEBSITES",
    subtitle: "High-Conversion Web Apps",
    description: "High-performance websites designed to convert visitors into active leads and paying customers.",
    examples: [
      "Custom React web platforms",
      "Lightning-fast responsive landing pages",
      "High-converting UX architecture",
      "Search Engine Optimization (SEO)",
      "Vercel serverless deployment",
    ],
    border: "group-hover:border-[#FF0055]/50",
    badge: "border-[#FF0055]/30 bg-[#FF0055]/10 text-[#FF0055]",
    glow: "group-hover:shadow-[#FF0055]/10",
  },
  {
    id: "booking-systems",
    icon: CalendarCheck,
    title: "BOOKING SYSTEMS",
    subtitle: "Seamless Scheduling",
    description: "Automated booking and appointment systems connected with calendars, forms, and notifications.",
    examples: [
      "Self-service client appointment forms",
      "Two-way Google Calendar integration",
      "Automated WhatsApp & SMS reminders",
      "Staff availability management",
      "Instant booking confirmations",
    ],
    border: "group-hover:border-[#00FF66]/50",
    badge: "border-[#00FF66]/30 bg-[#00FF66]/10 text-[#00FF66]",
    glow: "group-hover:shadow-[#00FF66]/10",
  },
  {
    id: "ai-agents",
    icon: Cpu,
    title: "AI AGENTS",
    subtitle: "Intelligent Workflows",
    description: "AI-powered agents that handle repetitive business tasks, document retrieval, and customer interactions.",
    examples: [
      "Multi-agent LLM systems (Gemini/Claude)",
      "WhatsApp & Email inquiry agents",
      "Content generation & scripting bots",
      "Knowledge-base document query bots",
      "Automated web scraping & summaries",
    ],
    border: "group-hover:border-[#FF0055]/50",
    badge: "border-[#FF0055]/30 bg-[#FF0055]/10 text-[#FF0055]",
    glow: "group-hover:shadow-[#FF0055]/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#04060A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0055]/10 border border-[#FF0055]/30 text-[#FF0055] text-xs font-mono uppercase font-bold tracking-widest mb-3">
              <Bot className="w-3.5 h-3.5" />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
              What I Build
            </h2>
          </div>
          <p className="text-gray-400 text-base max-w-md">
            Custom engineered digital solutions tailored to solve specific operational bottlenecks in your business.
          </p>
        </div>

        {/* 4 Major Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-[#090D16] border border-white/10 ${service.border} transition-all duration-300 hover:-translate-y-1 shadow-2xl ${service.glow}`}
              >
                {/* Header Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#00FF66]" />
                  </div>
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${service.badge}`}>
                    {service.subtitle}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Real World Examples List */}
                <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-mono font-bold block mb-3">
                    Key Capabilities & Examples:
                  </span>
                  {service.examples.map((ex, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#00FF66] shrink-0 mt-0.5" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#00FF66] transition-colors"
                >
                  <span>Build This System</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

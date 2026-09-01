"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";

const pricingTiers = [
  {
    title: "BUSINESS WEBSITES",
    price: "₹5,000",
    period: "Starting From",
    subtitle: "High-performance web landing pages & web apps.",
    features: [
      "Custom Next.js & React architecture",
      "Mobile responsive dark luxury design",
      "SEO setup & fast page load speeds",
      "Form integration & lead alerts",
      "Vercel deployment & domain link",
    ],
    cta: "Build My Website",
    popular: false,
    color: "border-white/10",
  },
  {
    title: "AI AUTOMATIONS",
    price: "₹5,000",
    period: "Starting From",
    subtitle: "n8n workflow pipelines & API connections.",
    features: [
      "Automated lead capture & qualification",
      "WhatsApp & Email instant follow-up triggers",
      "Google Sheets & CRM integration",
      "AI intent scoring (Gemini API)",
      "Owner instant mobile push alerts",
    ],
    cta: "Automate My Workflows",
    popular: true,
    color: "border-cyan-500/50 bg-cyan-500/5",
  },
  {
    title: "BOOKING SYSTEMS",
    price: "₹7,500",
    period: "Starting From",
    subtitle: "Hands-free client appointment booking.",
    features: [
      "Interactive self-service booking UI",
      "Two-way Google Calendar synchronization",
      "WhatsApp automated appointment reminders",
      "Custom intake questions & lead logging",
      "Staff availability controls",
    ],
    cta: "Setup Booking System",
    popular: false,
    color: "border-amber-500/30",
  },
  {
    title: "AI AGENTS & CUSTOM",
    price: "Custom",
    period: "Scope Dependent",
    subtitle: "Tailored multi-agent systems & bespoke software.",
    features: [
      "Multi-agent LLM systems & fine-tuning",
      "WhatsApp query & document retrieval bots",
      "Automated web scraping & data synthesis",
      "Full stack SaaS app development",
      "Dedicated ongoing support & SLA",
    ],
    cta: "Request Custom Quote",
    popular: false,
    color: "border-purple-500/30",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0B0F19]/90 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Starting From Pricing
          </h2>

          <p className="text-gray-300 text-base">
            Simple, honest pricing with zero hidden fees. Pick a starting package or request a custom quote based on your requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl bg-[#030712] border ${tier.color} relative flex flex-col justify-between hover:border-cyan-400 transition-all duration-300 shadow-xl`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  MOST POPULAR
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {tier.title}
                </h3>
                <p className="text-xs text-gray-400 mb-6 min-h-[32px]">
                  {tier.subtitle}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-xs text-gray-500 font-mono">
                    {tier.period}
                  </div>
                  <div className="text-4xl font-black font-heading text-white tracking-tight">
                    {tier.price}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Disclaimer:</strong> Final pricing depends on exact scope, custom API integrations, data volume, and workflow complexity.
          </span>
        </div>
      </div>
    </section>
  );
}

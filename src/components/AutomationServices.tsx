"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const automationWorkflows = [
  {
    id: "lead-automation",
    title: "01. LEAD AUTOMATION",
    tagline: "Capture, qualify & capture leads instantly 24/7.",
    nodes: [
      "Website / Form",
      "AI Qualifying",
      "Google Sheets / CRM",
      "WhatsApp / Email",
      "Auto Follow-up",
      "Owner Alert",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "text-cyan-400",
  },
  {
    id: "booking-automation",
    title: "02. BOOKING AUTOMATION",
    tagline: "Hands-free appointment scheduling & reminders.",
    nodes: [
      "Customer",
      "Booking Form",
      "Real-time Availability",
      "Google Calendar Sync",
      "WhatsApp Confirmation",
      "SMS Reminder",
    ],
    color: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400",
  },
  {
    id: "inquiry-automation",
    title: "03. INQUIRY AUTOMATION",
    tagline: "AI chat handling customer inquiries on auto-pilot.",
    nodes: [
      "Customer Message",
      "AI Intent Engine",
      "Database Lookup",
      "Instant Smart Reply",
      "Lead Saved",
      "Owner Notified",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
  {
    id: "follow-up-automation",
    title: "04. FOLLOW-UP AUTOMATION",
    tagline: "Never lose a prospect due to forgotten manual messages.",
    nodes: [
      "New Lead",
      "Day 1: Intro Message",
      "Day 3: Case Study",
      "Day 7: Audit Offer",
      "Final Follow-up",
      "Deal Closed",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
  },
];

export default function AutomationServices() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  return (
    <section id="automation" className="py-24 bg-[#0B0F19]/90 border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Eliminate Manual Labor</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Your Business Has Repetitive Work. <br />
            <span className="text-gradient-amber">Let's Automate It.</span>
          </h2>

          <p className="text-gray-300 text-lg">
            Stop losing leads and wasting hours manually copying data, sending WhatsApp follow-ups, or organizing schedules. Here are four real workflow architectures I implement:
          </p>
        </div>

        {/* Workflow Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {automationWorkflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflow(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeWorkflow === idx
                  ? "bg-white/10 border-cyan-400/50 shadow-lg shadow-cyan-500/10"
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 text-gray-400"
              }`}
            >
              <div className={`text-xs font-mono font-bold mb-1 ${activeWorkflow === idx ? "text-cyan-400" : "text-gray-500"}`}>
                WORKFLOW 0{idx + 1}
              </div>
              <div className="text-sm font-semibold text-white truncate">
                {wf.title.replace(/^[0-9]+\.\s*/, "")}
              </div>
            </button>
          ))}
        </div>

        {/* Active Workflow Display Card */}
        <motion.div
          key={activeWorkflow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${automationWorkflows[activeWorkflow].color} border border-white/15 backdrop-blur-xl relative`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white">
                {automationWorkflows[activeWorkflow].title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                {automationWorkflows[activeWorkflow].tagline}
              </p>
            </div>
            <a
              href="#audit"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20"
            >
              <span>Build This For My Business</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Node Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3 relative">
            {automationWorkflows[activeWorkflow].nodes.map((node, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="w-full p-4 rounded-xl bg-black/60 border border-white/15 backdrop-blur-md text-center hover:border-cyan-400/50 transition-colors">
                  <span className="text-[10px] font-mono text-gray-500 block mb-1">
                    STEP 0{i + 1}
                  </span>
                  <span className="text-xs font-semibold text-white block">
                    {node}
                  </span>
                </div>
                {i < automationWorkflows[activeWorkflow].nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Outcome Summary */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Result:</strong> Zero manual intervention required. 100% data integrity and instant customer gratification.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

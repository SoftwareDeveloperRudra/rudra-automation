"use client";

import { motion } from "framer-motion";
import { User, Code2, Database, Bot, Zap, LayoutGrid, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    category: "FRONTEND",
    icon: LayoutGrid,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3 / Tailwind CSS"],
  },
  {
    category: "BACKEND",
    icon: Code2,
    color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    skills: ["Python", "FastAPI", "Node.js", "PHP", "REST APIs", "Serverless Architecture"],
  },
  {
    category: "DATABASE",
    icon: Database,
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    skills: ["MySQL", "Relational Schema Design", "Query Optimization", "ORM Integration"],
  },
  {
    category: "AI & LLM",
    icon: Bot,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    skills: ["Google Gemini API", "Claude API", "LLM Fine-tuning / RAG", "AI Agents", "Prompt Engineering"],
  },
  {
    category: "AUTOMATION",
    icon: Zap,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    skills: ["n8n Workflows", "Webhooks", "Google Workspace APIs", "WhatsApp Business API", "Zapier / Make"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0B0F19]/90 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <User className="w-3.5 h-3.5" />
              <span>About Rudra Umra</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              I Don't Just Build Websites. <br />
              <span className="text-gradient-cyan">I Build Systems.</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Hi, I'm Rudra Umra — a Full Stack Developer & AI Automation Engineer pursuing my Bachelor of Engineering in Computer Science & Engineering in Surat, Gujarat.
              </p>
              <p>
                I combine modern full-stack web development with cutting-edge AI model APIs and workflow automation platforms like n8n. My mission is simple: to bridge the gap between static websites and hands-free business operations.
              </p>
              <p className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium italic">
                "Whether you run a coaching institute, clinic, salon, gym, or real estate agency, I don't just hand you code — I design an automated customer acquisition ecosystem."
              </p>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-mono text-gray-400 font-bold mb-4">
              Technical Capabilities Matrix:
            </h3>

            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg border ${cat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold font-heading text-white">
                        {cat.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

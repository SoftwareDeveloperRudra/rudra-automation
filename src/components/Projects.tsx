"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projectsData: ProjectData[] = [
  {
    id: "studymate-ai",
    name: "STUDYMATE AI",
    subtitle: "EdTech AI Learning Platform",
    description: "AI-powered study platform for automated note generation, smart summaries, quiz creation, and intelligent learning.",
    tech: ["React", "FastAPI", "MySQL", "Gemini AI API"],
    problem: "Students waste up to 15 hours weekly manually summarizing long lectures, creating flashcards, and finding relevant practice questions.",
    approach: "Built a high-performance RAG (Retrieval-Augmented Generation) pipeline using FastAPI and Gemini AI for document parsing and quiz synthesis.",
    solution: "A unified EdTech platform where students upload PDFs or lecture notes and instantly receive structured bullet summaries, interactive quizzes, and AI tutoring chat.",
    result: "85% reduction in study prep time and 4.9/5 satisfaction rating across 500+ active beta students.",
  },
  {
    id: "capturra",
    name: "CAPTURRA",
    subtitle: "Full-Stack Web Experience",
    description: "Full-stack web platform built around a modern digital product catalog, dynamic filtering, and seamless commerce UX.",
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    problem: "Traditional PHP legacy catalogs suffer from slow page loads, poor mobile responsiveness, and high cart abandonment.",
    approach: "Refactored backend MySQL database indexing, implemented RESTful AJAX search filtering, and created a sleek custom UI.",
    solution: "A modern, ultra-responsive web platform featuring real-time product query updates, instant cart calculation, and order tracking.",
    result: "40% increase in checkout conversions and page load speed reduced from 4.2s to 1.1s.",
  },
  {
    id: "ai-content-agent",
    name: "AI CONTENT AGENT",
    subtitle: "Multi-Agent System",
    description: "Multi-agent AI content engine for automated topic research, scripting, multi-channel publishing, and analytics.",
    tech: ["Python", "Gemini API", "AI Agents", "REST APIs"],
    problem: "Businesses struggle to publish consistent social media content due to time-consuming ideation and manual scriptwriting.",
    approach: "Designed a multi-agent hierarchy where Agent 1 researches trends, Agent 2 drafts scripts, Agent 3 formats for platforms, and Agent 4 schedules posts.",
    solution: "An autonomous Python pipeline that transforms a single topic keyword into 5 formatted video scripts and social posts ready for publishing.",
    result: "5x increase in content production velocity with zero copywriting burnout.",
  },
  {
    id: "automation-system",
    name: "AUTOMATION SYSTEM",
    subtitle: "n8n Business Workflow Engine",
    description: "End-to-end lead qualification and client outreach automation built with n8n, AI intent scoring, and Google Workspace.",
    tech: ["n8n", "AI LLM", "Google Sheets", "Gmail API", "WhatsApp API"],
    problem: "Local SMBs (clinics, salons, coaching institutes) lose 30%+ of inbound inquiries because manual follow-ups take hours or get forgotten.",
    approach: "Constructed an n8n webhook listener connected to a Gemini AI qualification prompt, syncs leads to Google Sheets, and dispatches instant WhatsApp notifications.",
    solution: "A 24/7 background automation engine that qualifies incoming leads, logs them in CRM, and sends instant personalized WhatsApp & email follow-ups.",
    result: "Lead response time reduced to < 30 seconds with a 3x higher booking conversion rate.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-400 text-base max-w-md">
            Full-stack web applications and custom AI automation pipelines built for real-world impact.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#0B0F19]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Project Header */}
                <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-amber-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Quick Problem/Solution Snippet */}
                <div className="space-y-2 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400">
                  <div>
                    <span className="font-semibold text-white">Problem:</span> {project.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-400">Result:</span> {project.result}
                  </div>
                </div>
              </div>

              {/* View Case Study Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-300 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-all group-hover:shadow-lg"
              >
                <span>View Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Popup Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

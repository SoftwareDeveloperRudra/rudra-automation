"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, ExternalLink, Code2, Layers } from "lucide-react";

export interface ProjectData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  problem: string;
  approach: string;
  solution: string;
  result: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0B0F19] border border-white/20 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  CASE STUDY
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {project.subtitle}
                </span>
              </div>
              <h2 className="text-3xl font-black font-heading text-white">
                {project.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
            {/* Tech Stack Pills */}
            <div>
              <span className="text-xs uppercase tracking-wider text-gray-400 font-mono block mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem */}
            <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
              <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>The Problem</span>
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Approach & Technology */}
            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20">
              <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Engineering Approach</span>
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-2xl bg-purple-500/5 border border-purple-500/20">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>The Implemented Solution</span>
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Result */}
            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Business Result & Impact</span>
              </h4>
              <p className="text-sm text-gray-200 font-medium leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-6 bg-white/[0.02] border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              Built by Rudra Umra
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

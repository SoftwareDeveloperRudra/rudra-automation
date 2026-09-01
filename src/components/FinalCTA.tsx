import { Sparkles, ArrowRight, Bot } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#04060A]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF0055]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#FF0055]/10 via-[#090D16] to-[#00FF66]/10 border border-[#FF0055]/30 shadow-2xl backdrop-blur-2xl space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] text-xs font-mono font-bold uppercase tracking-widest mx-auto">
            <Bot className="w-4 h-4" />
            <span>Ready To Turn Repetitive Work Into Automation?</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black font-heading text-white tracking-tight leading-none">
            Your Next Bottleneck Might Be <br className="hidden sm:inline" />
            <span className="text-gradient-red">Automatable.</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Tell me what's slowing your business down. I'll help you find a simpler, automated way to handle it.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#audit"
              className="inline-flex items-center gap-2.5 bg-[#00FF66] hover:bg-[#39FF14] text-black font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#00FF66]/30 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Free Automation Audit</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF0055] to-[#D90368] hover:from-[#FF2A6D] hover:to-[#FF0055] text-white font-black text-base px-8 py-4 rounded-2xl shadow-xl shadow-[#FF0055]/30 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

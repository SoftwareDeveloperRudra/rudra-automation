import { ChevronDown, Code2, Bot, User, Sparkles } from "lucide-react";

export default function PersonalBrand() {
  return (
    <section className="py-16 border-y border-[#FF0055]/20 bg-[#090D16]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Rudra Profile Image Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF0055] via-[#FF2A6D] to-[#00FF66] opacity-75 blur-lg group-hover:opacity-100 transition duration-300" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#FF0055] bg-[#04060A] shadow-2xl">
                <img
                  src="/rudra.jpg"
                  alt="Rudra Umra"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                    if (fallback) (fallback as HTMLElement).style.display = "flex";
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="avatar-fallback hidden absolute inset-0 bg-[#0A0E17] flex-col items-center justify-center text-white">
                  <User className="w-16 h-16 text-[#FF0055] mb-2" />
                  <span className="text-xs font-mono text-[#00FF66] font-bold">Rudra Umra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Intro & Statement */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#00FF66] font-mono text-xs uppercase tracking-widest bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/30 font-bold">
              <Bot className="w-3.5 h-3.5" />
              <span>Full Stack & AI Automation Architect</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
              Hi, I'm <span className="text-gradient-red">Rudra Umra</span>.
            </h2>

            <p className="text-xl text-gray-200 font-semibold italic border-l-4 border-[#00FF66] pl-4 py-1">
              "I build digital systems that don't just look good — they work."
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Based in Surat, Gujarat, I specialize in engineering web applications and AI-driven automation pipelines that eliminate manual bottlenecks, qualify leads instantly, and let business owners focus on scaling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#FF0055]/30 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-[#FF0055] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack Development</h4>
                  <p className="text-xs text-gray-400 mt-0.5">High-performance React & Node web platforms.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#00FF66]/30 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#00FF66] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">AI & Workflow Automation</h4>
                  <p className="text-xs text-gray-400 mt-0.5">n8n, Gemini AI, WhatsApp & API integrations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#trust"
            className="flex flex-col items-center gap-1 text-xs font-mono font-bold text-gray-400 hover:text-[#00FF66] transition-colors group"
          >
            <span>DISCOVER THE SYSTEM MINDSET</span>
            <ChevronDown className="w-4 h-4 text-[#FF0055] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

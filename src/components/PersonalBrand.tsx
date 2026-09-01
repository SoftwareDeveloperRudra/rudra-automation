import { ChevronDown, Code2, Bot, User, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function PersonalBrand() {
  return (
    <section className="py-20 border-y border-white/10 bg-[#0D131F]/80 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Rudra Profile Showcase (Ref Image 2 Inspired) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group w-full max-w-sm">
              {/* Background Geometric Rings */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#00E676]/30 via-transparent to-[#3B82F6]/30 blur-xl pointer-events-none" />

              <div className="relative rounded-3xl bg-[#070A11] border border-white/15 p-6 shadow-2xl overflow-hidden flex flex-col items-center">
                {/* Photo Container */}
                <div className="relative w-56 h-56 rounded-2xl overflow-hidden border-2 border-[#00E676] bg-[#0D131F] shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/rudra.jpg"
                    alt="Rudra Umra"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.parentElement?.querySelector(".brand-avatar-fallback");
                      if (fallback) (fallback as HTMLElement).style.display = "flex";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="brand-avatar-fallback hidden absolute inset-0 bg-[#0D131F] flex-col items-center justify-center text-white">
                    <User className="w-16 h-16 text-[#00E676] mb-2" />
                    <span className="text-xs font-mono text-white font-bold">Rudra Umra</span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="mt-5 text-center space-y-1">
                  <div className="text-xl font-extrabold text-white font-heading">
                    Rudra Umra
                  </div>
                  <div className="text-xs font-mono text-[#00E676] font-bold uppercase tracking-wider">
                    Full Stack & AI Automation Architect
                  </div>
                  <div className="text-xs text-gray-400 font-mono flex items-center justify-center gap-1 pt-1">
                    <MapPin className="w-3 h-3 text-[#00E676]" />
                    <span>Surat, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#00E676] font-mono text-xs uppercase tracking-widest bg-[#00E676]/10 px-3.5 py-1.5 rounded-full border border-[#00E676]/30 font-bold">
              <Bot className="w-3.5 h-3.5" />
              <span>Let Me Introduce Myself</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-heading text-white">
              About <span className="text-gradient-emerald">Rudra Umra</span>
            </h2>

            <p className="text-xl text-gray-200 font-semibold italic border-l-4 border-[#00E676] pl-4 py-1">
              "I build digital systems that don't just look good — they work."
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Based in Surat, Gujarat, I specialize in engineering web applications and AI-driven automation pipelines that eliminate manual bottlenecks, qualify leads instantly, and let business owners focus on scaling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <Code2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack Web Systems</h4>
                  <p className="text-xs text-gray-400 mt-0.5">High-performance React & Node web platforms.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#60A5FA] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">AI & Workflow Automation</h4>
                  <p className="text-xs text-gray-400 mt-0.5">n8n, Gemini AI, WhatsApp & API integrations.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="bg-[#00E676] hover:bg-[#00C853] text-black font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="text-xs font-semibold text-gray-400 hover:text-white px-4 py-3 transition-colors"
              >
                Explore Services →
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#trust"
            className="flex flex-col items-center gap-1 text-xs font-mono font-bold text-gray-400 hover:text-[#00E676] transition-colors group"
          >
            <span>DISCOVER THE SYSTEM MINDSET</span>
            <ChevronDown className="w-4 h-4 text-[#00E676] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

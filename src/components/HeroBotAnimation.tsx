import { Bot, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function HeroBotAnimation() {
  return (
    <div className="relative w-full rounded-[2rem] bg-gradient-to-b from-[#0D131F] via-[#070A11] to-[#0D131F] border border-[#00E676]/40 p-6 shadow-2xl overflow-hidden flex flex-col items-center">
      {/* Top Header Badge */}
      <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#00E676] animate-pulse" />
          <span className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            AI Chatbot Automation Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00E676] bg-[#00E676]/10 px-2.5 py-1 rounded-full border border-[#00E676]/30 font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" />
          60FPS LOOP
        </span>
      </div>

      {/* Video Container Playing seamless infinite loop animation */}
      <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/15 bg-[#070A11] flex items-center justify-center group shadow-2xl">
        <video
          src="/bot-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient Holographic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A11]/60 via-transparent to-transparent pointer-events-none" />

        {/* Top Right Floating Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 border border-[#00E676]/40 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-[#00E676] font-bold z-10">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>AUTOMATION ACTIVE</span>
        </div>

        {/* Bottom Floating Badge */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-black/80 border border-[#00E676]/50 backdrop-blur-md flex items-center gap-2 text-xs font-bold text-white shadow-xl">
          <Zap className="w-3.5 h-3.5 text-[#00E676]" />
          <span>Auto Lead Qualification & Messaging</span>
        </div>
      </div>

      {/* Description Caption */}
      <div className="mt-4 text-center">
        <div className="text-sm font-extrabold text-white font-heading flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#00E676]" />
          <span>Seamless AI Automation Workflow</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Instant lead capture, AI intent response, and automated calendar triggers.
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, SendHorizontal, CheckCircle2, Bot, Sparkles } from "lucide-react";

export default function HeroBotAnimation() {
  const [animStage, setAnimStage] = useState<"idle" | "clicking" | "flying" | "success">("idle");

  useEffect(() => {
    // Infinite looping sequence simulating the AI Bot sending messages automatically
    const interval = setInterval(() => {
      // Stage 1: Clicking button
      setAnimStage("clicking");

      setTimeout(() => {
        // Stage 2: Morphs into flying paper airplane zipping away
        setAnimStage("flying");
      }, 700);

      setTimeout(() => {
        // Stage 3: Green Message Sent checkmark popup
        setAnimStage("success");
      }, 1600);

      setTimeout(() => {
        // Stage 4: Reset back to idle
        setAnimStage("idle");
      }, 3600);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const triggerManualClick = () => {
    if (animStage !== "idle") return;
    setAnimStage("clicking");
    setTimeout(() => setAnimStage("flying"), 700);
    setTimeout(() => setAnimStage("success"), 1600);
    setTimeout(() => setAnimStage("idle"), 3600);
  };

  return (
    <div className="relative w-full rounded-[2rem] bg-gradient-to-b from-[#0D131F] via-[#070A11] to-[#0D131F] border border-[#00E676]/30 p-6 shadow-2xl overflow-hidden flex flex-col items-center">
      {/* Top Header Badge */}
      <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#00E676] animate-pulse" />
          <span className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
            AI Chatbot Automation Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#00E676] bg-[#00E676]/10 px-2.5 py-1 rounded-full border border-[#00E676]/30 font-bold">
          LIVE DEMO
        </span>
      </div>

      {/* 3D AI Robot Image Display */}
      <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#070A11] flex items-center justify-center group">
        <img
          src="/ai-bot.jpg"
          alt="AI Automation Bot"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Ambient Holographic Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />

        {/* Flying Paper Airplane Animation */}
        <AnimatePresence>
          {animStage === "flying" && (
            <motion.div
              initial={{ x: -20, y: 30, scale: 0.8, opacity: 1 }}
              animate={{ x: 180, y: -120, scale: 1.4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-1/3 bottom-12 text-[#00E676] z-30"
            >
              <SendHorizontal className="w-10 h-10 drop-shadow-[0_0_15px_#00E676]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Green "Message Sent" Pop-up Checkmark Bubble */}
        <AnimatePresence>
          {animStage === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute z-40 bg-[#00E676] text-black font-extrabold text-xs px-4 py-2.5 rounded-2xl shadow-2xl shadow-[#00E676]/50 flex items-center gap-2 border border-white"
            >
              <CheckCircle2 className="w-5 h-5 text-black fill-white" />
              <span>Message Sent! Lead Qualified ✓</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Glowing 'Send' Button in Robot's Desk */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <motion.button
            onClick={triggerManualClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow:
                animStage === "clicking"
                  ? "0 0 30px #00E676"
                  : "0 0 15px rgba(0, 230, 118, 0.4)",
            }}
            className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
              animStage === "clicking"
                ? "bg-[#00E676] text-black"
                : animStage === "success"
                ? "bg-[#00E676] text-black"
                : "bg-black/80 text-white border border-[#00E676]/50 hover:bg-[#00E676] hover:text-black"
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>
              {animStage === "clicking"
                ? "Clicking..."
                : animStage === "flying"
                ? "Sending..."
                : animStage === "success"
                ? "Sent!"
                : "Click Send"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Description Caption */}
      <div className="mt-4 text-center">
        <div className="text-sm font-extrabold text-white font-heading flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#00E676]" />
          <span>Automated 24/7 AI Messaging Engine</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Instant lead capture, AI intent response, and automated calendar triggers.
        </p>
      </div>
    </div>
  );
}

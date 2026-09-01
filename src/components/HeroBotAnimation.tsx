import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles, Send } from "lucide-react";

export default function HeroBotAnimation() {
  const [step, setStep] = useState<"idle" | "touching" | "flying" | "sent">("idle");

  useEffect(() => {
    // Continuous 4.5s looping sequence
    const cycle = () => {
      // Step 1: Robot touches circuit button
      setStep("touching");

      // Step 2: Paper plane takes off and zips away
      setTimeout(() => {
        setStep("flying");
      }, 700);

      // Step 3: Message Sent checkmark popup
      setTimeout(() => {
        setStep("sent");
      }, 1600);

      // Step 4: Reset smoothly
      setTimeout(() => {
        setStep("idle");
      }, 3800);
    };

    cycle();
    const interval = setInterval(cycle, 4600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-center select-none py-4">
      {/* Soft Ambient Radial Backlight Glow */}
      <div
        className="absolute inset-0 rounded-full blur-[90px] pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle at 55% 45%, rgba(0, 255, 170, 0.35) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 75%)",
        }}
      />

      {/* Floating "Message Sent" Pop-up Badge */}
      <AnimatePresence>
        {(step === "sent" || step === "flying") && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 15, x: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            className="absolute top-4 left-6 md:left-12 z-30 px-4 py-1.5 rounded-full bg-[#0D131F]/90 border border-[#00FFA3]/50 backdrop-blur-xl flex items-center gap-2 text-xs font-extrabold text-[#00FFA3] shadow-2xl shadow-[#00FFA3]/30"
          >
            <CheckCircle2 className="w-4 h-4 text-[#00FFA3]" />
            <span>Message Sent</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flying Origami Paper Airplane with Glowing Trail */}
      <AnimatePresence>
        {step === "flying" && (
          <motion.div
            initial={{ x: -30, y: 60, scale: 0.7, opacity: 0, rotate: 15 }}
            animate={{
              x: 180,
              y: -110,
              scale: 1.25,
              opacity: [0, 1, 1, 0],
              rotate: -12,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-40 left-1/3 top-28 pointer-events-none"
          >
            {/* Glowing Paper Airplane SVG */}
            <div className="relative">
              <svg width="68" height="54" viewBox="0 0 68 54" fill="none" className="drop-shadow-[0_0_16px_rgba(0,255,200,0.85)]">
                <path
                  d="M66 2L2 28L26 36L66 2Z"
                  fill="url(#planeGrad1)"
                  stroke="#00FFA3"
                  strokeWidth="1.5"
                />
                <path
                  d="M66 2L26 36V52L38 42L66 2Z"
                  fill="url(#planeGrad2)"
                  stroke="#06B6D4"
                  strokeWidth="1.5"
                />
                <path
                  d="M66 2L38 42L26 36L66 2Z"
                  fill="#E2E8F0"
                  opacity="0.9"
                />
                <defs>
                  <linearGradient id="planeGrad1" x1="2" y1="2" x2="66" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.7" stopColor="#E2E8F0" />
                    <stop offset="1" stopColor="#00FFA3" />
                  </linearGradient>
                  <linearGradient id="planeGrad2" x1="26" y1="2" x2="66" y2="52" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#00E676" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Dotted Trajectory Trail behind plane */}
              <motion.div
                initial={{ width: 0, opacity: 0.8 }}
                animate={{ width: 140, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-6 -left-28 h-0.5 border-b-2 border-dashed border-[#00FFA3]/60 blur-[0.5px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Native SVG & Code Scene: 3D Robot & Circuit Desk */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
        <svg
          viewBox="0 0 500 400"
          className="w-full h-full filter drop-shadow-2xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Robot Glossy White Shading */}
            <linearGradient id="robotBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Robot Head Dome */}
            <radialGradient id="headDomeGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </radialGradient>

            {/* Dark Visor Face Screen */}
            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0A111C" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Cyan Neon Accent Glow */}
            <linearGradient id="cyanNeon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFA3" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Desk Glass Surface Gradient */}
            <linearGradient id="deskGlass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#090D16" stopOpacity="0.95" />
            </linearGradient>

            {/* Soft Glow Filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================
              1. BACKGROUND SEAT / CHAIR BACKREST
             ======================================================== */}
          <rect
            x="295"
            y="130"
            width="65"
            height="115"
            rx="20"
            fill="#1E293B"
            stroke="#334155"
            strokeWidth="3"
            transform="rotate(6 325 185)"
          />

          {/* ========================================================
              2. ROBOT BODY & TORSO
             ======================================================== */}
          {/* Shoulders & Chest */}
          <ellipse cx="260" cy="225" rx="46" ry="38" fill="url(#robotBodyGrad)" stroke="#CBD5E1" strokeWidth="2" />
          
          {/* Cyan Core Arc on Chest */}
          <circle cx="260" cy="225" r="13" fill="#090D16" stroke="#00FFA3" strokeWidth="2.5" />
          <circle cx="260" cy="225" r="7" fill="#00FFA3" filter="url(#neonGlow)" />

          {/* Neck */}
          <rect x="250" y="172" width="20" height="18" rx="5" fill="#64748B" />

          {/* ========================================================
              3. ROBOT HEAD & FACE
             ======================================================== */}
          <g>
            {/* Outer Head Shell */}
            <ellipse cx="260" cy="120" rx="64" ry="54" fill="url(#headDomeGrad)" stroke="#E2E8F0" strokeWidth="3" />

            {/* Ear Cylinders / Antennas */}
            {/* Left Ear */}
            <rect x="190" y="100" width="12" height="38" rx="6" fill="#06B6D4" stroke="#00FFA3" strokeWidth="2" />
            {/* Right Ear */}
            <rect x="318" y="100" width="12" height="38" rx="6" fill="#06B6D4" stroke="#00FFA3" strokeWidth="2" />
            {/* Antenna Top Tip */}
            <line x1="205" y1="85" x2="195" y2="60" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="194" cy="58" r="5" fill="#00FFA3" filter="url(#neonGlow)" />

            <line x1="315" y1="85" x2="325" y2="60" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="326" cy="58" r="5" fill="#00FFA3" filter="url(#neonGlow)" />

            {/* Dark Visor Face Screen */}
            <rect x="208" y="85" width="104" height="68" rx="28" fill="url(#visorGrad)" stroke="#1E293B" strokeWidth="2.5" />

            {/* Cyan Glowing Expressive Eyes (Animated Blink & Smile) */}
            <g filter="url(#neonGlow)">
              {/* Left Eye */}
              {step === "touching" || step === "sent" ? (
                // Happy Arc Eye
                <path d="M 230 115 Q 240 102 250 115" fill="none" stroke="#00FFA3" strokeWidth="4.5" strokeLinecap="round" />
              ) : (
                // Bright Oval Eye
                <ellipse cx="240" cy="116" rx="8" ry="11" fill="#00FFA3" />
              )}

              {/* Right Eye */}
              {step === "touching" || step === "sent" ? (
                // Happy Arc Eye
                <path d="M 270 115 Q 280 102 290 115" fill="none" stroke="#00FFA3" strokeWidth="4.5" strokeLinecap="round" />
              ) : (
                // Bright Oval Eye
                <ellipse cx="280" cy="116" rx="8" ry="11" fill="#00FFA3" />
              )}

              {/* Cute Cyan Smile */}
              <path d="M 252 135 Q 260 142 268 135" fill="none" stroke="#00FFA3" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          {/* ========================================================
              4. ROBOT ARMS & HANDS TOUCHING DESK
             ======================================================== */}
          {/* Left Arm */}
          <path
            d="M 220 220 Q 185 240 205 278"
            fill="none"
            stroke="url(#robotBodyGrad)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Left Hand Fingers on Circuit Board */}
          <ellipse cx="208" cy="285" rx="14" ry="9" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />

          {/* Right Arm (Extends down to press the glowing Send button) */}
          <path
            d="M 300 220 Q 325 245 285 285"
            fill="none"
            stroke="url(#robotBodyGrad)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          {/* Right Hand / Finger pressing Button */}
          <ellipse cx="282" cy="288" rx="14" ry="9" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />

          {/* ========================================================
              5. FUTURISTIC GLASS CIRCUIT DESK
             ======================================================== */}
          {/* Desk Main Top Slab (Perspective Projection) */}
          <polygon
            points="60,260 420,260 460,340 20,340"
            fill="url(#deskGlass)"
            stroke="#00FFA3"
            strokeWidth="2.5"
            strokeOpacity="0.6"
          />

          {/* Desk Glass Front Edge Lip */}
          <polygon
            points="20,340 460,340 460,360 20,360"
            fill="#0B131F"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Desk Stand / Legs */}
          <path d="M 60 360 L 60 395 L 90 395 L 90 360" fill="#1E293B" />
          <path d="M 400 360 L 400 395 L 430 395 L 430 360" fill="#1E293B" />

          {/* ========================================================
              6. GLOWING NEON CIRCUIT TRACES ON DESK
             ======================================================== */}
          <g stroke="#00FFA3" strokeWidth="2" strokeOpacity="0.85" filter="url(#neonGlow)">
            {/* Center Microchip Core */}
            <rect x="225" y="275" width="50" height="42" rx="6" fill="#0A111C" stroke="#00FFA3" strokeWidth="2.5" />
            
            {/* Chip Inner Pulse */}
            <circle
              cx="250"
              cy="296"
              r={step === "touching" ? 14 : 9}
              fill="#00FFA3"
              fillOpacity={step === "touching" ? 0.9 : 0.4}
              className="transition-all duration-300"
            />

            {/* Circuit Traces Radiating across desk */}
            <path d="M 225 285 H 170 L 145 305 H 90" fill="none" strokeDasharray="4 2" />
            <path d="M 225 305 H 180 L 155 325 H 70" fill="none" />
            <path d="M 250 317 V 335 L 230 340" fill="none" />
            
            <path d="M 275 285 H 330 L 355 305 H 400" fill="none" strokeDasharray="4 2" />
            <path d="M 275 305 H 320 L 345 325 H 420" fill="none" />
            <path d="M 250 275 V 265" fill="none" />

            {/* Circuit Nodes */}
            <circle cx="90" cy="305" r="3.5" fill="#00FFA3" />
            <circle cx="70" cy="325" r="3.5" fill="#06B6D4" />
            <circle cx="400" cy="305" r="3.5" fill="#00FFA3" />
            <circle cx="420" cy="325" r="3.5" fill="#06B6D4" />
          </g>

          {/* Glowing "Send" Touchpad under Robot's Hands */}
          <g filter="url(#neonGlow)">
            <rect
              x="232"
              y="282"
              width="36"
              height="28"
              rx="4"
              fill={step === "touching" ? "#00FFA3" : "#090D16"}
              stroke="#00FFA3"
              strokeWidth="1.5"
            />
            <text
              x="250"
              y="300"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
              fill={step === "touching" ? "#000000" : "#00FFA3"}
            >
              SEND
            </text>
          </g>
        </svg>
      </div>

      {/* Status Footer Pill */}
      <div className="mt-2 flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-[11px] font-mono text-gray-300">
        <Sparkles className="w-3.5 h-3.5 text-[#00FFA3]" />
        <span>Automated 24/7 AI Lead Qualification Engine</span>
      </div>
    </div>
  );
}

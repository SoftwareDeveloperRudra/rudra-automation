import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export default function HeroBotAnimation() {
  const [phase, setPhase] = useState<"typing" | "pressing" | "taking_off" | "sent">("typing");
  const [typingTick, setTypingTick] = useState(0);

  useEffect(() => {
    // Fast rhythmic typing finger ticks
    const typingInterval = setInterval(() => {
      setTypingTick((prev) => (prev + 1) % 8);
    }, 140);

    // Exact Orchestrated Animation Sequence
    const loopCycle = () => {
      // 1. Robot typing actively above desk for 2.6s
      setPhase("typing");

      // 2. Robot reaches & presses the Send button
      setTimeout(() => {
        setPhase("pressing");
      }, 2600);

      // 3. Arrow/Airplane morphs from the button, rotates & takes off slowly and smoothly
      setTimeout(() => {
        setPhase("taking_off");
      }, 3300);

      // 4. Flight completes -> "Message Sent" checkmark badge pops up
      setTimeout(() => {
        setPhase("sent");
      }, 5500);

      // 5. Reset back to typing loop
      setTimeout(() => {
        setPhase("typing");
      }, 7400);
    };

    loopCycle();
    const cycleInterval = setInterval(loopCycle, 7600);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cycleInterval);
    };
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

      {/* Message Sent Pop-up Badge (Appears when animation flight is done) */}
      <AnimatePresence>
        {phase === "sent" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            className="absolute top-4 left-6 md:left-12 z-40 px-4 py-2 rounded-full bg-[#0D131F]/95 border border-[#00FFA3]/60 backdrop-blur-xl flex items-center gap-2 text-xs font-extrabold text-[#00FFA3] shadow-2xl shadow-[#00FFA3]/30"
          >
            <CheckCircle2 className="w-4 h-4 text-[#00FFA3]" />
            <span>Message Sent</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Native SVG 3D AI Robot & Glass Circuit Desk Scene */}
      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
        {/* Glowing 3D Origami Airplane taking off directly from the SEND button & rotating smoothly */}
        <AnimatePresence>
          {(phase === "taking_off" || phase === "sent") && (
            <motion.div
              initial={{
                x: 0,
                y: 55,
                scale: 0.45,
                opacity: 0,
                rotate: 45, // Starts flat/angled on the button
              }}
              animate={{
                x: [0, 45, 130, 240],
                y: [55, 10, -40, -130],
                scale: [0.45, 0.9, 1.15, 1.3],
                opacity: [0, 1, 1, 0],
                rotate: [45, 20, -5, -20], // Smoothly rotates and banks upward as it flies
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.3, // Slow, smooth gliding takeoff
                ease: [0.2, 0.8, 0.2, 1],
                times: [0, 0.25, 0.65, 1],
              }}
              className="absolute z-50 pointer-events-none"
              style={{ left: "50%", top: "45%" }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                {/* 3D Vector Paper Airplane */}
                <svg
                  width="76"
                  height="60"
                  viewBox="0 0 68 54"
                  fill="none"
                  className="drop-shadow-[0_0_22px_rgba(0,255,200,0.95)]"
                >
                  <path
                    d="M66 2L2 28L26 36L66 2Z"
                    fill="url(#smoothPlane1)"
                    stroke="#00FFA3"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M66 2L26 36V52L38 42L66 2Z"
                    fill="url(#smoothPlane2)"
                    stroke="#06B6D4"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M66 2L38 42L26 36L66 2Z"
                    fill="#F8FAFC"
                    opacity="0.95"
                  />
                  <defs>
                    <linearGradient id="smoothPlane1" x1="2" y1="2" x2="66" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.6" stopColor="#E2E8F0" />
                      <stop offset="1" stopColor="#00FFA3" />
                    </linearGradient>
                    <linearGradient id="smoothPlane2" x1="26" y1="2" x2="66" y2="52" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06B6D4" />
                      <stop offset="1" stopColor="#00E676" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Glowing Dotted Flight Trajectory */}
                <motion.div
                  initial={{ width: 0, opacity: 0.9 }}
                  animate={{ width: 170, opacity: 0 }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  className="absolute top-7 -left-36 h-0.5 border-b-2 border-dashed border-[#00FFA3]/80 blur-[0.5px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <svg
          viewBox="0 0 500 400"
          className="w-full h-full filter drop-shadow-2xl overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Robot Glossy White Metallic Gradient */}
            <linearGradient id="botMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#F1F5F9" />
              <stop offset="85%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Robot Head Dome Radial Shading */}
            <radialGradient id="headDomeShading" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </radialGradient>

            {/* Dark Visor Face Screen */}
            <linearGradient id="darkVisor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0A111C" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Desk Glass Surface Gradient */}
            <linearGradient id="deskGlassTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#090D16" stopOpacity="0.95" />
            </linearGradient>

            {/* Soft Glow Filter */}
            <filter id="neonFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================
              1. SEAT / CHAIR BACKREST
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
          <ellipse cx="260" cy="225" rx="46" ry="38" fill="url(#botMetallic)" stroke="#CBD5E1" strokeWidth="2" />
          
          {/* Cyan Core Arc on Chest */}
          <circle cx="260" cy="225" r="13" fill="#090D16" stroke="#00FFA3" strokeWidth="2.5" />
          <circle cx="260" cy="225" r="7" fill="#00FFA3" filter="url(#neonFilter)" />

          {/* Neck */}
          <rect x="250" y="172" width="20" height="18" rx="5" fill="#64748B" />

          {/* ========================================================
              3. ROBOT HEAD & FACE
             ======================================================== */}
          <g>
            {/* Outer Head Dome Shell */}
            <ellipse cx="260" cy="120" rx="64" ry="54" fill="url(#headDomeShading)" stroke="#E2E8F0" strokeWidth="3" />

            {/* Left Ear Antenna */}
            <rect x="190" y="100" width="12" height="38" rx="6" fill="#06B6D4" stroke="#00FFA3" strokeWidth="2" />
            <line x1="205" y1="85" x2="195" y2="60" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="194" cy="58" r="5" fill="#00FFA3" filter="url(#neonFilter)" />

            {/* Right Ear Antenna */}
            <rect x="318" y="100" width="12" height="38" rx="6" fill="#06B6D4" stroke="#00FFA3" strokeWidth="2" />
            <line x1="315" y1="85" x2="325" y2="60" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" />
            <circle cx="326" cy="58" r="5" fill="#00FFA3" filter="url(#neonFilter)" />

            {/* Dark Visor Face Screen */}
            <rect x="208" y="85" width="104" height="68" rx="28" fill="url(#darkVisor)" stroke="#1E293B" strokeWidth="2.5" />

            {/* Cyan Glowing Expressive Eyes & Smile */}
            <g filter="url(#neonFilter)">
              {phase === "pressing" || phase === "taking_off" || phase === "sent" ? (
                <>
                  {/* Happy Curved Eyes */}
                  <path d="M 230 115 Q 240 102 250 115" fill="none" stroke="#00FFA3" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 270 115 Q 280 102 290 115" fill="none" stroke="#00FFA3" strokeWidth="4.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  {/* Focused Bright Oval Eyes */}
                  <ellipse cx="240" cy="116" rx="8" ry="11" fill="#00FFA3" />
                  <ellipse cx="280" cy="116" rx="8" ry="11" fill="#00FFA3" />
                </>
              )}

              {/* Cute Cyan Smile */}
              <path d="M 252 135 Q 260 142 268 135" fill="none" stroke="#00FFA3" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>

          {/* ========================================================
              4. FUTURISTIC GLASS CIRCUIT DESK (Rendered First)
             ======================================================== */}
          {/* Desk Stand / Legs */}
          <path d="M 60 360 L 60 395 L 90 395 L 90 360" fill="#1E293B" />
          <path d="M 400 360 L 400 395 L 430 395 L 430 360" fill="#1E293B" />

          {/* Desk Main Top Slab (Perspective Projection) */}
          <polygon
            points="60,260 420,260 460,340 20,340"
            fill="url(#deskGlassTop)"
            stroke="#00FFA3"
            strokeWidth="2.5"
            strokeOpacity="0.6"
          />

          {/* Desk Front Edge Lip */}
          <polygon
            points="20,340 460,340 460,360 20,360"
            fill="#0B131F"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Circuit Traces on Desk */}
          <g stroke="#00FFA3" strokeWidth="2" strokeOpacity="0.85" filter="url(#neonFilter)">
            <path d="M 170 285 H 135 L 115 305 H 80" fill="none" strokeDasharray="4 2" />
            <path d="M 170 305 H 140 L 120 325 H 65" fill="none" />
            <path d="M 285 285 H 330 L 355 305 H 400" fill="none" strokeDasharray="4 2" />
            <path d="M 285 305 H 320 L 345 325 H 420" fill="none" />
            <path d="M 250 317 V 335 L 230 340" fill="none" />
            <circle cx="80" cy="305" r="3.5" fill="#00FFA3" />
            <circle cx="65" cy="325" r="3.5" fill="#06B6D4" />
            <circle cx="400" cy="305" r="3.5" fill="#00FFA3" />
            <circle cx="420" cy="325" r="3.5" fill="#06B6D4" />
          </g>

          {/* Holographic Keyboard Keys on Desk */}
          <g filter="url(#neonFilter)">
            <rect x="180" y="278" width="12" height="7" rx="2" fill={typingTick === 0 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="196" y="278" width="12" height="7" rx="2" fill={typingTick === 1 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="212" y="278" width="12" height="7" rx="2" fill={typingTick === 2 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="228" y="278" width="12" height="7" rx="2" fill={typingTick === 3 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="176" y="288" width="12" height="7" rx="2" fill={typingTick === 4 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="192" y="288" width="12" height="7" rx="2" fill={typingTick === 5 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="208" y="288" width="12" height="7" rx="2" fill={typingTick === 6 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
            <rect x="224" y="288" width="12" height="7" rx="2" fill={typingTick === 7 ? "#00FFA3" : "#0A111C"} stroke="#00FFA3" strokeWidth="1" />
          </g>

          {/* Glowing Holographic "SEND" Button on Desk */}
          <g filter="url(#neonFilter)">
            <rect
              x="250"
              y="278"
              width="38"
              height="24"
              rx="4"
              fill={phase === "pressing" ? "#00FFA3" : "#090D16"}
              stroke="#00FFA3"
              strokeWidth="1.5"
            />
            <text
              x="269"
              y="294"
              fontSize="8.5"
              fontFamily="monospace"
              fontWeight="bold"
              textAnchor="middle"
              fill={phase === "pressing" ? "#000000" : "#00FFA3"}
            >
              SEND
            </text>
          </g>

          {/* ========================================================
              5. ROBOT ARMS & HANDS (Rendered ABOVE Desk for Complete 3D Depth)
             ======================================================== */}
          {/* Left Arm & Typing Hand (Hovering clearly above desk) */}
          <g>
            <path
              d={`M 220 220 Q 185 240 205 ${phase === "typing" ? 272 + (typingTick % 2 === 0 ? -5 : 4) : 275}`}
              fill="none"
              stroke="url(#botMetallic)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Left Hand Fingers Typing above keyboard */}
            <ellipse
              cx="208"
              cy={phase === "typing" ? 280 + (typingTick % 2 === 0 ? -5 : 4) : 282}
              rx="15"
              ry="10"
              fill="#F8FAFC"
              stroke="#64748B"
              strokeWidth="2"
            />
            {/* Finger joint highlights */}
            <circle cx="204" cy={phase === "typing" ? 280 + (typingTick % 2 === 0 ? -5 : 4) : 282} r="2.5" fill="#00FFA3" />
            <circle cx="212" cy={phase === "typing" ? 280 + (typingTick % 2 === 0 ? -5 : 4) : 282} r="2.5" fill="#00FFA3" />
          </g>

          {/* Right Arm & Typing / Send Pressing Hand (Above Desk) */}
          <g>
            <path
              d={
                phase === "pressing"
                  ? "M 300 220 Q 320 248 274 286" // Finger actively pressing Send Button
                  : `M 300 220 Q 320 245 268 ${phase === "typing" ? 272 + (typingTick % 2 !== 0 ? -5 : 4) : 276}` // Hovering & typing above desk
              }
              fill="none"
              stroke="url(#botMetallic)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Right Hand / Finger */}
            <ellipse
              cx={phase === "pressing" ? 272 : 268}
              cy={phase === "pressing" ? 288 : (phase === "typing" ? 280 + (typingTick % 2 !== 0 ? -5 : 4) : 282)}
              rx="15"
              ry="10"
              fill="#F8FAFC"
              stroke="#64748B"
              strokeWidth="2"
            />
            {/* Finger joint highlights */}
            <circle cx={phase === "pressing" ? 270 : 266} cy={phase === "pressing" ? 288 : (phase === "typing" ? 280 + (typingTick % 2 !== 0 ? -5 : 4) : 282)} r="2.5" fill="#00FFA3" />
            <circle cx={phase === "pressing" ? 276 : 272} cy={phase === "pressing" ? 288 : (phase === "typing" ? 280 + (typingTick % 2 !== 0 ? -5 : 4) : 282)} r="2.5" fill="#00FFA3" />
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

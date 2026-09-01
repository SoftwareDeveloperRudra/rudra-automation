export default function HeroBotAnimation() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto flex items-center justify-center pointer-events-none">
      {/* Soft radial cyan/emerald backlight glow directly behind robot */}
      <div
        className="absolute -inset-10 rounded-full blur-[60px] pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle at 60% 45%, rgba(0, 255, 163, 0.4) 0%, rgba(0, 230, 118, 0.15) 45%, transparent 70%)",
        }}
      />

      {/* Video without any card container, borders, or boxes, seamlessly blended into site background */}
      <video
        src="/bot-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-contain mix-blend-multiply filter contrast-125 brightness-105 scale-110 lg:scale-125 relative z-10"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
}

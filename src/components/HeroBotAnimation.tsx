export default function HeroBotAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center">
      {/* Soft radial cyan/emerald backlight glow directly behind video wrapper */}
      <div
        className="absolute -inset-4 rounded-full blur-[40px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 163, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Stylized dark glassmorphism card container */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group"
        style={{
          background: "rgba(11, 17, 26, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(0, 255, 170, 0.2)",
          boxShadow: "0 0 25px rgba(0, 255, 163, 0.12)",
        }}
      >
        <video
          src="/bot-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-2xl filter contrast-105 brightness-105"
        />
      </div>
    </div>
  );
}

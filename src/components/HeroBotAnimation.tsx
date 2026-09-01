export default function HeroBotAnimation() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center pointer-events-none">
      {/* Ambient background glow matching video robot position */}
      <div className="absolute inset-0 bg-[#00E676]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Video element with mix-blend-multiply to blend light video background seamlessly into site dark background */}
      <video
        src="/bot-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-contain rounded-3xl mix-blend-multiply filter contrast-125 brightness-105"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
}

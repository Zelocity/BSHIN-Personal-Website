function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0b0b10]"
    >
      {/* Blurred color shapes */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute right-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />

      <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 80%)",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b10]/20 to-[#0b0b10]" />
    </div>
  );
}

export default Background;

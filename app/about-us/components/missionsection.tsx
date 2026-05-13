export default function MissionSection() {
  return (
    <section className="relative flex items-center py-20 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
        

          {/* HEADING — from doc Section 3 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold">
            Our Mission
          </h1>

          {/* MISSION STATEMENT */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Our mission is to make intelligent automation accessible to every
            business — not just enterprise. We design AI systems that remove the
            manual work holding businesses back, so teams can focus on growth,
            strategy, and the work that actually matters.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mt-5 max-w-2xl">
            Every system we build is rooted in one question: how do we make this
            business run better? Whether it's automating 10,000 customer
            interactions a month or replacing a slow, error-prone intake process
            — we build with purpose, precision, and a long-term view.
          </p>

          {/* MISSION PILLARS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                title: "100% Custom",
                desc: "Built specifically for each business workflow",
              },
              {
                title: "Scalable Systems",
                desc: "Designed to grow as your business grows",
              },
              {
                title: "AI First",
                desc: "Automation sits at the core of everything we build.",
              },
              {
                title: "ROI Focused",
                desc: "Every AI system is built to save time, and increase revenue.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5 hover:border-[var(--gold-500)]/30 transition-all duration-300"
              >
                <p className="text-[var(--gold-500)] text-lg sm:text-xl font-semibold">
                  {pillar.title}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[var(--border-subtle)] backdrop-blur-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  AI Automation Impact
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  Intelligent automation systems designed to improve operational
                  efficiency, eliminate manual bottlenecks, and accelerate
                  business growth.
                </p>
              </div>

              {/* PROGRESS BARS */}
              <div className="space-y-4">
                {[85, 70, 90].map((width, i) => (
                  <div
                    key={i}
                    className="h-2 w-full bg-white/10 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-[var(--gold-500)]"
                      style={{ width: `${width}%`, opacity: 1 - i * 0.15 }}
                    />
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="pt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "10x", label: "Productivity" },
                  { value: "80%", label: "Automation" },
                  { value: "24/7", label: "AI Support" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl sm:text-2xl font-bold text-[var(--gold-500)]">
                      {s.value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wide">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
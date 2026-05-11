export default function MissionSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Our Mission
          </span>

          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Helping Businesses
            <span className="text-[var(--gold-500)]"> Grow</span> With AI
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mt-8 max-w-xl">
            We design intelligent AI systems that remove manual bottlenecks,
            automate workflows, and unlock scalable growth for modern businesses.
          </p>

          {/* TRUST / VALUE STRIP (replaces buttons) */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                100% Custom
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Built specifically for each business workflow
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                Scalable Systems
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Designed to grow as your business grows
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                AI First
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Automation at the core of everything we build
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                ROI Focused
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                Every system is built to save time & increase revenue
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-10 border border-[var(--border-subtle)] backdrop-blur-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  AI Automation Impact
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Transforming workflows into intelligent systems.
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-[var(--gold-500)]" />
                </div>

                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-[var(--gold-500)]/80" />
                </div>

                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-[var(--gold-500)]/60" />
                </div>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    10x
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Productivity
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    80%
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Automation
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    24/7
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    AI Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
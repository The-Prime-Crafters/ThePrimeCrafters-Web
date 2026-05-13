export default function MissionSection() {
  return (
    <section className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-white/5 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          {/* LABEL */}
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Our Mission
          </span>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Helping Businesses
            <span className="text-[var(--gold-500)]"> Grow</span> With AI
          </h2>

          {/* SEO CONTENT */}
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mt-8 max-w-2xl">
            Our mission is to make intelligent automation accessible
            to every business — not just enterprise companies. We
            design AI systems that remove manual work, automate
            repetitive operations, and help businesses scale faster
            with less overhead and less friction.
          </p>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mt-6 max-w-2xl">
            Every system we build is rooted in one question: how can
            we make this business run better? Whether it&apos;s
            automating thousands of customer interactions or replacing
            slow, error-prone workflows, we build with purpose,
            precision, and long-term scalability in mind.
          </p>

          {/* MISSION PILLARS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5 hover:border-[var(--gold-500)]/30 transition-all duration-300">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                100% Custom
              </p>

              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                Built specifically for each business workflow and
                operational structure.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5 hover:border-[var(--gold-500)]/30 transition-all duration-300">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                Scalable Systems
              </p>

              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                Designed to grow as your business expands and evolves.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5 hover:border-[var(--gold-500)]/30 transition-all duration-300">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                AI First
              </p>

              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                Automation sits at the core of every solution we build.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-white/5 hover:border-[var(--gold-500)]/30 transition-all duration-300">
              <p className="text-[var(--gold-500)] text-xl font-semibold">
                ROI Focused
              </p>

              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                Every AI system is built to save time, reduce costs,
                and increase revenue.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-10 border border-[var(--border-subtle)] backdrop-blur-xl">
            <div className="space-y-6">
              {/* TITLE */}
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  AI Automation Impact
                </h3>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  Intelligent automation systems designed to improve
                  operational efficiency, eliminate manual bottlenecks,
                  and accelerate business growth.
                </p>
              </div>

              {/* PROGRESS BARS */}
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

              {/* STATS */}
              <div className="pt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    10x
                  </p>

                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">
                    Productivity
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    80%
                  </p>

                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">
                    Automation
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[var(--gold-500)]">
                    24/7
                  </p>

                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wide">
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
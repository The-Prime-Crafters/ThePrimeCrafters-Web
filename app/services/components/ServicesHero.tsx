import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-25%] right-[-10%] w-[35vw] h-[35vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:5vw_5vw]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,6rem)] items-center">

        {/* LEFT */}
        <div className="space-y-[clamp(1.2rem,2vw,2rem)]">

        

          {/* Heading */}
          <h1 className="font-bold leading-[1.05]">
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}
            >
              AI Automation Services Designed for Business Growth
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] text-[var(--text-secondary)] leading-relaxed max-w-xl">
            The Prime Crafters builds intelligent AI systems that go beyond simple task automation — we engineer the infrastructure that transforms how your business operates, scales, and grows.

            From AI voice agents that handle thousands of customer calls to workflow automation that eliminates manual bottlenecks — every system we build delivers measurable results from day one.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="group px-6 py-3 rounded-2xl bg-[var(--gold-500)] text-black font-semibold transition hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            >
              Schedule Consultation →
            </Link>
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-2xl border border-[var(--border-subtle)] glass-card hover:border-[var(--gold-500)]/50 transition"
            >
              View Case Studies
            </Link>
          </div>

        {/* Stats */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
  {[
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10x", label: "Operational Efficiency" },
    { value: "24/7", label: "AI Automation" },
  ].map((item, i) => (
    <div
      key={i}
      className="glass-card p-4 rounded-2xl border border-[var(--border-subtle)] transition hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
    >
      <div className="text-[clamp(1.2rem,2vw,2rem)] font-bold text-[var(--gold-500)]">
        {item.value}
      </div>
      <div className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">
        {item.label}
      </div>
    </div>
  ))}
</div>
        </div>

        {/* RIGHT (DYNAMIC FLOATING SYSTEM) */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[clamp(300px,35vw,520px)] aspect-square">

            {/* Outer ring animation */}
            <div className="absolute inset-0 rounded-[3rem] border border-[var(--gold-500)]/20 animate-pulse" />

            {/* Floating card 1 - TOP LEFT */}
            <div className="absolute top-[5%] left-0 glass-card p-4 w-[45%] rounded-3xl backdrop-blur-xl transition hover:-translate-y-2">
              <div className="text-[var(--gold-500)] text-xl mb-2">✦</div>
              <h3 className="text-sm font-semibold">AI Voice Agents</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Adaptive voice systems that learn from interactions.
              </p>
            </div>

            {/* Floating card 2 - TOP RIGHT */}
            <div className="absolute top-[5%] right-0 glass-card p-4 w-[45%] rounded-3xl backdrop-blur-xl transition hover:-translate-y-2">
              <div className="text-[var(--gold-500)] text-xl mb-2">⚡</div>
              <h3 className="text-sm font-semibold">Automation Engine</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Self-optimizing workflows that improve over time.
              </p>
            </div>

            {/* Floating card 3 - BOTTOM LEFT */}
            <div className="absolute bottom-[5%] left-0 glass-card p-4 w-[45%] rounded-3xl backdrop-blur-xl transition hover:-translate-y-2">
              <div className="text-[var(--gold-500)] text-xl mb-2">🕐</div>
              <h3 className="text-sm font-semibold">24/7 AI Automation</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Always-on systems that never sleep or slow down.
              </p>
            </div>

            {/* Floating card 4 - BOTTOM RIGHT */}
            <div className="absolute bottom-[5%] right-0 glass-card p-4 w-[45%] rounded-3xl backdrop-blur-xl transition hover:-translate-y-2">
              <div className="text-[var(--gold-500)] text-xl mb-2">🤖</div>
              <h3 className="text-sm font-semibold">Smart Chatbots</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Intelligent agents that handle support 24/7.
              </p>
            </div>

            {/* Center orb */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[38%] h-[38%] rounded-full bg-[var(--gold-500)]/10 border border-[var(--gold-500)]/20 flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]">
                <div className="text-center">
                  <div className="text-[clamp(2rem,3vw,3rem)] font-bold text-[var(--gold-500)]">
                    AI
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                    Systems
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[80px] -translate-y-[80px] w-4 h-4 bg-[var(--gold-500)]/30 rounded-full animate-bounce" />
            <div className="absolute top-[50%] left-[50%] translate-x-[60px] translate-y-[60px] w-5 h-5 bg-[var(--gold-500)]/20 rounded-full animate-pulse" />
            <div className="absolute top-[50%] left-[50%] -translate-x-[40px] translate-y-[50px] w-3 h-3 bg-[var(--gold-500)]/40 rounded-full animate-ping" />
          </div>
        </div>

      </div>
    </section>
  );
}
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* system activation glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="glass-card rounded-[2.5rem] p-[clamp(2rem,5vw,4rem)] border border-[var(--border-subtle)] text-center relative overflow-hidden">

          {/* inner glow sweep */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

          {/* CONTENT */}
          <div className="relative">

            <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
              System Ready
            </span>

            <h2
              className="font-bold mt-6 mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Let’s Build Your AI Infrastructure
            </h2>

            <p className="text-[var(--text-secondary)] text-sm md:text-lg max-w-2xl mx-auto mb-10">
              Activate your automation layer, connect voice agents, workflows, integrations, and AI systems into one unified engine.
            </p>

            {/* CTA BUTTON */}
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <span>Activate System</span>

              {/* arrow animation */}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* system hint */}
            <div className="mt-6 text-xs text-[var(--text-secondary)] opacity-70">
              Deployment-ready AI infrastructure • 2–8 week implementation cycle
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
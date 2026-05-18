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


            <h2
              className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Ready to Automate Your Business?
            </h2>

            <p className="text-[var(--text-secondary)] text-sm md:text-lg max-w-2xl mx-auto mb-10">
              Every day your team spends on manual work is a day your competition edges ahead. Let's build the AI infrastructure that changes that.
              <br /><br />
              Book a free 20-minute consultation — we'll review your operations and show you exactly what's possible.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              >
                <span>Schedule a Free Consultation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[var(--border-subtle)] text-[var(--gold-400)] font-semibold transition-all duration-300 hover:border-[var(--gold-500)]/40 hover:text-white"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* system hint */}
            <div className="mt-6 text-xs text-[var(--text-secondary)] opacity-70">
              Deployment-ready AI infrastructure · 2–8 week implementation · Results from day one.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-500)]/5 via-transparent to-transparent blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-[2rem] p-8 sm:p-12 md:p-16 border border-[var(--border-subtle)] text-center relative overflow-hidden">
          {/* ACCENT GLOW */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

          

          {/* HEADING — from doc Section 9 */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold">
            Ready to Automate Your Business?
          </h2>

          {/* MAIN COPY */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-4 relative z-10">
            If your team is spending time on tasks that could be handled by an
            intelligent system — it's time to change that. Let's build the AI
            infrastructure that lets your business run faster, smarter, and at
            scale.
          </p>

          {/* SUPPORTING COPY */}
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto mb-8 relative z-10">
            Book a free 20-minute consultation. We'll look at your current
            operations, identify your biggest automation opportunities, and tell
            you exactly what we'd build — no pressure, no commitment.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/#contact"
              aria-label="Schedule a free consultation"
              className="inline-flex px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-500)]/20 transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>

            <Link
              href="/#contact"
              aria-label="Contact us"
              className="inline-flex px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl border border-[var(--border-subtle)] glass-card text-sm sm:text-base hover:border-[var(--gold-500)]/40 hover:scale-105 transition-all duration-300"
            >
               Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
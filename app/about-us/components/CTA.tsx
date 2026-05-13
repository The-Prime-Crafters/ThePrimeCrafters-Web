import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-500)]/5 via-transparent to-transparent blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-[2rem] p-10 md:p-16 border border-[var(--border-subtle)] text-center relative overflow-hidden">
          {/* ACCENT GLOW */}
          <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

          {/* LABEL */}
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm relative z-10">
            Ready To Automate Your Business?
          </span>

          {/* HEADING */}
          <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 leading-tight relative z-10">
            Let&apos;s Build Your AI Infrastructure
          </h2>

          {/* SEO CONTENT */}
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl mx-auto mb-6 relative z-10">
            If your team is spending time on repetitive tasks that
            could be handled by intelligent automation systems —
            it&apos;s time to scale smarter. The Prime Crafters builds
            custom AI infrastructure that helps businesses automate
            workflows, improve efficiency, reduce operational overhead,
            and create faster customer experiences.
          </p>

          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
            Book a free consultation and we&apos;ll analyze your
            current operations, identify your highest-impact
            automation opportunities, and show you exactly how AI can
            transform your business workflows.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              href="/#contact"
              aria-label="Schedule a free AI automation consultation"
              className="inline-flex px-8 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-500)]/20 transition-all duration-300"
            >
              Schedule a Free Consultation
            </Link>

            <Link
              href="/#contact"
              aria-label="Contact The Prime Crafters"
              className="inline-flex px-8 py-4 rounded-2xl border border-[var(--border-subtle)] glass-card hover:border-[var(--gold-500)]/40 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
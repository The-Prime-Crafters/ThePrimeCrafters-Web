import Link from "next/link";
import { caseStudies } from "../data";

export default function CaseStudiesPreview() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
              Featured Work
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              Real Results Through AI Automation
            </h2>

            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl">
              A glimpse into how our AI systems have transformed operations,
              improved efficiency, and delivered measurable business growth.
            </p>
          </div>

          {/* ONLY CTA (kept as requested) */}
          <Link
            href="/case-studies"
            className="text-[var(--gold-500)] hover:text-[var(--gold-400)] transition-colors whitespace-nowrap"
          >
            View All Case Studies →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            >
              {/* glow accent */}
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[100px] rounded-full" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6">
                <span className="text-[var(--gold-500)] text-2xl">
                  ✦
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {study.title}
              </h3>

              {/* Result */}
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {study.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
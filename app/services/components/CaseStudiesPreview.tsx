import Link from "next/link";
import { caseStudies } from "../data";

export default function CaseStudiesPreview() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(2rem,5vw,4rem)]">

          <div>
            <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
              Case Studies
            </span>

            <h2
              className="font-bold mt-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Real Results Through AI Automation
            </h2>

            <p className="text-[var(--text-secondary)] mt-4 max-w-xl text-sm md:text-base">
              Measurable impact delivered through intelligent automation systems.
            </p>
          </div>

          <Link
            href="/#projects"
            className="text-[var(--gold-500)] hover:text-[var(--gold-400)] transition-all text-sm md:text-base"
          >
            View All Projects →
          </Link>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">

          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--border-subtle)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gold-500)]/40 overflow-hidden glass-card"
            >

              {/* hover glow layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_70%)]" />

              {/* ICON */}
              <div className="relative w-12 h-12 rounded-xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-[var(--gold-500)] text-xl">✦</span>
              </div>

              {/* TITLE */}
              <h3 className="relative text-xl md:text-2xl font-semibold mb-4 group-hover:text-white transition">
                {study.title}
              </h3>

              {/* RESULT (hero metric) */}
              <div className="relative text-[var(--gold-500)] font-bold text-lg md:text-xl mb-4 group-hover:scale-105 transition">
                {study.result}
              </div>

              {/* DESCRIPTION */}
              <p className="relative text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6 group-hover:text-white/90 transition">
                {study.description}
              </p>

             

              {/* subtle corner indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/30 group-hover:scale-150 transition" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
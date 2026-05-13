import Link from "next/link";

const caseStudies = [
  {
    title: "AI Lead Qualification System",
    result: "3x More Qualified Leads",
    description:
      "Built an automated lead qualification system that filters, scores, and routes inbound leads — eliminating hours of manual review and tripling conversion-ready pipeline.",
  },
  {
    title: "Voice Automation for Clinics",
    result: "70% Reduction in Manual Calls",
    description:
      "Deployed an AI voice agent for a healthcare provider that handles appointment booking, patient intake, and FAQs — cutting manual call volume by 70% and reducing staff workload significantly.",
  },
  {
    title: "CRM Workflow Automation",
    result: "50+ Hours Saved Monthly",
    description:
      "Automated a complex CRM workflow for a growing business, eliminating manual data entry, follow-up tasks, and reporting — saving the team over 50 hours every single month.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">

          <div>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold">
              Featured Case Studies
            </h1>

            {/* INTRO */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">
              We let the results speak. Here's a look at how our AI systems have
              transformed operations for real businesses.
            </p>

          </div>

          {/* CTA */}
          <Link
            href="/#projects"
            aria-label="View all AI automation case studies"
            className="text-[var(--gold-500)] hover:text-[var(--gold-400)] transition-colors whitespace-nowrap text-base sm:text-lg shrink-0"
          >
            View All Case Studies →
          </Link>

        </div>

        {/* CASE STUDY CARDS */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            >
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[100px] rounded-full" />

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-5 sm:mb-6">
                <span className="text-[var(--gold-500)] text-xl sm:text-2xl">
                  ✦
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 leading-snug">
                {study.title}
              </h3>

              <p className="text-[var(--gold-400)] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {study.result}
              </p>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {study.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
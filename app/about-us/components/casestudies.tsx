import Link from "next/link";

const caseStudies = [
  {
    title: "AI Lead Qualification System",
    result: "3x More Qualified Leads",
    description:
      "Built an automated AI lead qualification system that filters, scores, and routes inbound leads — eliminating hours of manual review and significantly improving conversion-ready pipeline quality.",
  },
  {
    title: "Voice Automation for Clinics",
    result: "70% Reduction in Manual Calls",
    description:
      "Deployed an AI voice agent for a healthcare provider that automated appointment booking, patient intake, and FAQs — reducing staff workload and cutting manual call volume by 70%.",
  },
  {
    title: "CRM Workflow Automation",
    result: "50+ Hours Saved Monthly",
    description:
      "Automated complex CRM workflows, follow-up tasks, and reporting systems for a growing business — saving over 50 hours every month through intelligent workflow automation.",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
              Featured Case Studies
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Real Results Through AI Automation
            </h2>

            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl leading-relaxed">
              We let the results speak for themselves. Here&apos;s how
              our AI automation systems have helped businesses reduce
              manual work, improve operational efficiency, and scale
              faster using intelligent automation infrastructure.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/#projects"
            aria-label="View all AI automation case studies"
            className="text-[var(--gold-500)] hover:text-[var(--gold-400)] transition-colors whitespace-nowrap text-lg"
          >
            View All Case Studies →
          </Link>
        </div>

        {/* CASE STUDY CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:-translate-y-2 transition duration-300 relative overflow-hidden"
            >
              {/* GLOW ACCENT */}
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[100px] rounded-full" />

              {/* ICON */}
              <div className="w-14 h-14 rounded-2xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6">
                <span className="text-[var(--gold-500)] text-2xl">
                  ✦
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3 leading-snug">
                {study.title}
              </h3>

              {/* RESULT */}
              <p className="text-[var(--gold-400)] font-medium mb-4">
                {study.result}
              </p>

              {/* DESCRIPTION */}
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {study.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const metrics = [
  {
    value: "70%",
    label: "Reduction in Manual Work",
  },
  {
    value: "45%",
    label: "Lower Operational Costs",
  },
  {
    value: "3x",
    label: "Faster Response Times",
  },
  {
    value: "2.8x",
    label: "Increase in Lead Conversions",
  },
];

const benefits = [
  {
    title: "Dramatic Cost Reduction",
    body: "Reduce overhead by up to 45% by replacing repetitive manual tasks with automated systems.",
  },
  {
    title: "Scalability Without Headcount",
    body: "Handle 10x the volume without adding staff. Scale customer interactions and workflows instantly.",
  },
  {
    title: "Faster Response Times",
    body: "AI responds 3x faster than manual processes — improving customer satisfaction and conversion simultaneously.",
  },
  {
    title: "Higher Lead Conversion",
    body: "Automated qualification and follow-up increases conversions by up to 2.8x. No lead goes cold.",
  },
  {
    title: "24/7 Operations",
    body: "Support, lead generation, and workflows run continuously — even outside business hours.",
  },
  {
    title: "Data-Driven Decision Making",
    body: "AI surfaces real-time insights from your operations — so every business decision is backed by accurate, up-to-date data.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* background system glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-[clamp(2rem,5vw,4rem)]">
          <h2
            className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Why Businesses Invest in AI Automation
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto text-sm md:text-base">
            AI automation isn't just a technology upgrade — it's a business decision with measurable, compounding returns.
          </p>
        </div>

        {/* BENEFITS GRID — 3×2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2vw,2rem)] mb-[clamp(2rem,4vw,4rem)]">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--border-subtle)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
            >
              {/* glow hover layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_70%)]" />

              <div className="relative space-y-2">
                <div className="text-sm font-semibold text-[var(--gold-400)] uppercase tracking-[0.15em]">
                  {item.title}
                </div>
                <div className="text-sm md:text-base text-[var(--text-secondary)] group-hover:text-white transition leading-relaxed">
                  {item.body}
                </div>
              </div>

              {/* small accent indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/30 group-hover:scale-150 transition" />
            </div>
          ))}
        </div>

        {/* KPI METRICS ROW — 4 across */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,2rem)]">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--border-subtle)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
            >
              {/* glow hover layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_70%)]" />

              <div className="relative space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-[var(--gold-500)] group-hover:scale-105 transition">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-[var(--text-secondary)] group-hover:text-white transition leading-relaxed">
                  {item.label}
                </div>
              </div>

              {/* small accent indicator */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/30 group-hover:scale-150 transition" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
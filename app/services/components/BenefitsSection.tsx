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
    value: "5x",
    label: "Scalability in Support Systems",
  },
  {
    value: "2.8x",
    label: "Increase in Lead Conversions",
  },
  {
    value: "60%",
    label: "Efficiency Improvement",
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
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            Business Impact
          </span>

          <h2
            className="font-bold mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            AI Automation Performance Metrics
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Real measurable improvements businesses achieve after implementing AI automation systems.
          </p>
        </div>

        {/* KPI GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">

          {metrics.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-[var(--border-subtle)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
            >
              
              {/* glow hover layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_70%)]" />

              <div className="relative space-y-2">

                {/* BIG KPI VALUE */}
                <div className="text-3xl md:text-4xl font-bold text-[var(--gold-500)] group-hover:scale-105 transition">
                  {item.value}
                </div>

                {/* LABEL */}
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
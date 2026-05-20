const steps = [
  {
    name: "Discovery",
    description: "We analyze your operations, identify bottlenecks, and define where AI creates the highest ROI.",
  },
  {
    name: "Strategy",
    description: "Full system architecture — automation logic, integrations, data flows — mapped before development begins.",
  },
  {
    name: "Development",
    description: "Custom AI systems built using enterprise-grade frameworks. Voice agents, chatbots, workflows, integrations.",
  },
  {
    name: "Testing",
    description: "Rigorous testing across real-world scenarios, stress tests, and edge cases before launch.",
  },
  {
    name: "Deployment",
    description: "Live deployment, tool integration, team training, and full handover documentation.",
  },
  {
    name: "Optimization",
    description: "Ongoing monitoring, performance analysis, and continuous system improvement post-launch.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-[clamp(2rem,5vw,4rem)]">

          <h2
            className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our AI Implementation Process
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From first conversation to live deployment — a structured process that turns your workflows into intelligent, automated systems.
          </p>
        </div>

        {/* PIPELINE */}
        <div className="relative">

          {/* horizontal connector line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[var(--border-subtle)] hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >

                {/* node */}
                <div className="relative mb-6">

                  {/* outer glow */}
                  <div className="w-5 h-5 rounded-full bg-[var(--gold-500)]/20 group-hover:scale-150 transition" />

                  {/* core dot */}
                  <div className="absolute inset-1 rounded-full bg-[var(--gold-500)] group-hover:scale-110 transition" />
                </div>

                {/* card */}
                <div className="glass-card w-full rounded-2xl p-5 border border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40 flex flex-col min-h-[230px]">

                  {/* step number */}
                  <div className="text-[var(--gold-500)] font-bold text-2xl mb-2">
                    0{index + 1}
                  </div>

                  <h3 className="text-sm md:text-base font-semibold group-hover:text-white transition">
                    {step.name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] mt-2 opacity-70 group-hover:opacity-100 transition leading-relaxed">
                    {step.description}
                  </p>

                </div>

                {/* connector dot (mobile flow hint) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-[2px] h-10 bg-[var(--border-subtle)] mt-4" />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* TIMELINE NOTE */}
        <div className="text-center mt-[clamp(2rem,4vw,3rem)]">
          <p className="text-xs text-[var(--text-secondary)] opacity-70">
            Most implementations complete within 2–8 weeks depending on scope.
          </p>
        </div>

      </div>
    </section>
  );
}
const steps = [
  "Discovery",
  "Strategy",
  "Development",
  "Testing",
  "Deployment",
  "Optimization",
];

export default function ProcessSection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-[clamp(2rem,5vw,4rem)]">
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            Process
          </span>

          <h2
            className="font-bold mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Our AI Implementation Process
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A structured pipeline that transforms ideas into fully automated AI systems.
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
                <div className="glass-card w-full rounded-2xl p-5 border border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40">

                  {/* step number */}
                  <div className="text-[var(--gold-500)] font-bold text-2xl mb-2">
                    0{index + 1}
                  </div>

                  <h3 className="text-sm md:text-base font-semibold group-hover:text-white transition">
                    {step}
                  </h3>

                  {/* subtle label */}
                  <p className="text-xs text-[var(--text-secondary)] mt-2 opacity-70 group-hover:opacity-100 transition">
                    AI execution stage
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

      </div>
    </section>
  );
}
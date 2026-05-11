import { services } from "../data";

export default function ServicesOverview() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            What We Do
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            AI Solutions Built For
            <span className="text-[var(--gold-500)]"> Business Growth</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We design intelligent systems that automate operations, reduce workload,
            and unlock scalable growth through AI-driven workflows.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* FEATURED SERVICE (BIG CARD) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-10 border border-[var(--border-subtle)] h-full relative overflow-hidden">
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[100px] rounded-full" />

              <div className="text-[var(--gold-500)] text-4xl mb-6">✦</div>

              <h3 className="text-2xl font-semibold mb-4">
                AI Strategy & Automation Systems
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                We build end-to-end AI automation systems that replace manual workflows,
                streamline operations, and create scalable digital infrastructure for your business.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold-500)]">✔</span> Workflow Automation
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold-500)]">✔</span> AI Integration Systems
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--gold-500)]">✔</span> Business Process Optimization
                </div>
              </div>
            </div>
          </div>

          {/* OTHER SERVICES */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:-translate-y-2 transition duration-300"
              >
                <div className="text-[var(--gold-500)] text-2xl mb-4">
                  ✦
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
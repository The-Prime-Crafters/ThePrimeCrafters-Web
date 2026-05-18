export default function WorkflowSection() {
  const steps = [
    "CRM Automation & Data Sync",
    "Task Automation & Assignment Workflows",
    "Multi-Step Business Process Automation",
    "Cross-Platform Workflow Integrations",
    "Automated Reporting & Notifications",
  ];

  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* subtle background only */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">

        {/* LEFT - CONNECTED WORKFLOW */}
        <div className="relative">

          {/* vertical flow line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[var(--border-subtle)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(212,175,55,0.6),transparent)] animate-[pulse_2.5s_ease-in-out_infinite]" />
          </div>

          <div className="space-y-6 pl-12">
            {steps.map((item, index) => (
              <div key={index} className="group relative">

                {/* node */}
                <div className="absolute -left-7 top-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[var(--gold-500)]/20 group-hover:scale-150 transition" />
                    <div className="absolute inset-1 rounded-full bg-[var(--gold-500)] group-hover:scale-110 transition" />
                  </div>
                </div>

                {/* content card */}
                <div className="relative rounded-2xl border border-[var(--border-subtle)] p-5 glass-card transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.1),transparent_70%)]" />

                  <div className="relative flex items-center justify-between">
                    <span className="text-sm md:text-base font-medium group-hover:text-white transition">
                      {item}
                    </span>
                    <span className="text-xs text-[var(--gold-500)] font-semibold tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-2 text-xs text-[var(--text-secondary)] opacity-70 group-hover:opacity-100 transition">
                    Automated execution step
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">

          <h2
            className="font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Workflow Automation Services
          </h2>

          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            We build AI workflow automation systems that handle your business operations end-to-end — faster, more accurately, and without human error. From CRM automation to multi-step business processes, we map your workflows and replace manual steps with intelligent automation.
          </p>

          {/* Features */}
          <div className="space-y-3">
            {[
              "CRM automation & data sync",
              "Task automation & assignment workflows",
              "Multi-step business process automation",
              "Cross-platform workflow integrations",
              "Automated reporting & notifications",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <span className="text-[var(--gold-500)] text-lg group-hover:scale-125 transition">
                  ▸
                </span>
                <span className="text-sm md:text-base group-hover:text-white transition">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { value: "70%", label: "Reduction in manual work" },
              { value: "50+", label: "Hours saved per month" },
              { value: "60%", label: "Improvement in operational efficiency" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 rounded-2xl border border-[var(--border-subtle)] transition hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
              >
                <div className="text-[clamp(1.2rem,2vw,1.8rem)] font-bold text-[var(--gold-500)]">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* system hint */}
          <div className="pt-2 text-xs text-[var(--text-secondary)] opacity-70">
            Each step is executed automatically in sequence by AI agents
          </div>
        </div>
      </div>
    </section>
  );
}
export default function IntegrationsSection() {
  const nodes = [
    "CRM Systems",
    "APIs",
    "Databases",
    "Business Tools",
  ];

  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">
      
      {/* subtle network background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
        
        {/* LEFT - NETWORK VISUAL */}
        <div className="relative">
          
          <div className="glass-card rounded-[2.5rem] p-[clamp(1.5rem,3vw,3rem)] border border-[var(--border-subtle)] relative overflow-hidden">
            
            {/* soft energy field */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_70%)]" />

            <div className="relative grid grid-cols-2 gap-6">
              {nodes.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-[var(--border-subtle)] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40"
                >
                  {/* network pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]" />

                  {/* node dot */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[var(--gold-500)]/40 group-hover:scale-150 transition" />

                  <span className="relative text-sm md:text-base font-medium group-hover:text-white transition">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* connection lines (visual illusion layer) */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--border-subtle)]" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[var(--border-subtle)]" />
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">
          
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            AI Integrations
          </span>

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Custom AI Integrations For Your Systems
          </h2>

          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            Connect AI systems with CRMs, APIs, databases, and existing business infrastructure for seamless automation.
          </p>

          <div className="space-y-4">
            {[
              "Custom API integrations",
              "CRM synchronization",
              "Database automation",
              "Cross-platform connectivity",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <span className="text-[var(--gold-500)] text-lg group-hover:scale-125 transition">
                  ✔
                </span>
                <span className="text-sm md:text-base group-hover:text-white transition">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* system note */}
          <div className="text-xs text-[var(--text-secondary)] opacity-70 pt-2">
            All systems are synchronized in real-time via secure AI connectors
          </div>
        </div>
      </div>
    </section>
  );
}
const industries = [
  {
    name: "Healthcare",
    description: "Patient intake automation, appointment scheduling, HIPAA-compliant voice agents, and clinic workflow systems.",
  },
  {
    name: "Real Estate",
    description: "Lead qualification, AI-powered follow-ups, CRM integrations, and voice agents for property inquiries.",
  },
  {
    name: "E-commerce",
    description: "Order automation, AI support, abandoned cart recovery, and chatbots that drive sales.",
  },
  {
    name: "SaaS",
    description: "Onboarding automation, AI support agents, churn workflows, and CRM integrations.",
  },
  {
    name: "Local Businesses",
    description: "Booking automation, phone handling, lead follow-up, and AI assistants for local operations.",
  },
  {
    name: "Service Businesses",
    description: "Proposal automation, client onboarding, scheduling systems, and CRM integrations.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">

        {/* ================= LEFT: INDUSTRY GRID ================= */}
        <div className="grid grid-cols-2 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-6 border border-[var(--border-subtle)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40 overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]" />

              {/* accent dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/40 group-hover:scale-150 transition" />

              <div className="relative text-[var(--gold-500)] text-2xl mb-3">
                ✦
              </div>

              <h3 className="relative font-semibold text-base md:text-lg group-hover:text-white transition">
                {industry.name}
              </h3>

              <p className="relative text-sm text-[var(--text-secondary)] mt-1 opacity-70 group-hover:opacity-100 transition leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= RIGHT: SYSTEM PANEL ================= */}
        <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">

     
          <h2
            className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Industries We Support
          </h2>

          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            Our AI automation systems are built to adapt across industries — engineered around how your sector actually operates.
          </p>

          {/* system stats panel */}
          <div className="glass-card rounded-2xl p-6 border border-[var(--border-subtle)] space-y-4">

            <div className="flex justify-between text-sm">
              <span>Industries Supported</span>
              <span className="text-[var(--gold-500)] font-semibold">6+</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Automation Coverage</span>
              <span className="text-[var(--gold-500)] font-semibold">Full Stack</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>AI Integration Level</span>
              <span className="text-[var(--gold-500)] font-semibold">Advanced</span>
            </div>

          </div>

          {/* footer hint */}
          <div className="text-sm text-[var(--text-secondary)] opacity-70">
            Every industry is mapped to a dedicated AI automation workflow
          </div>
        </div>

      </div>
    </section>
  );
}
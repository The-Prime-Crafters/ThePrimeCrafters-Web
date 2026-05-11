export default function CompanyIntro() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--gold-500)]/5 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Small Label */}
        <span className="text-[var(--gold-400)] uppercase tracking-[0.25em] text-sm">
          Who We Are
        </span>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-8 mb-10 text-gradient-gold">
          We Build Intelligent AI Systems
          <br />
          For Modern Businesses
        </h2>

        {/* Main Paragraph */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-8">
          The Prime Crafters is an AI automation agency focused on helping
          businesses streamline operations, automate workflows, and scale
          efficiently using modern AI technologies.
        </p>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
          From AI voice agents and chatbot systems to custom workflow
          automation and integrations, we create scalable solutions tailored
          specifically to each business model.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            {
              number: "50+",
              label: "Projects Delivered",
            },
            {
              number: "98%",
              label: "Client Satisfaction",
            },
            {
              number: "24/7",
              label: "AI Automation",
            },
            {
              number: "10x",
              label: "Business Efficiency",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)]"
            >
              <div className="text-4xl font-bold text-[var(--gold-500)] mb-3">
                {item.number}
              </div>

              <div className="text-sm uppercase tracking-wider text-[var(--text-secondary)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
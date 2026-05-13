export default function CompanyIntro() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--gold-500)]/5 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* LABEL */}
        <span className="text-[var(--gold-400)] uppercase tracking-[0.25em] text-sm">
          Who We Are
        </span>

        {/* HEADING */}
        <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-8 mb-10 text-gradient-gold">
          We Build Intelligent AI Systems
          <br />
          For Modern Businesses
        </h2>

        {/* SEO CONTENT */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-8">
          The Prime Crafters is a specialized AI automation agency
          built for modern businesses that are ready to stop doing
          things manually and start scaling intelligently.
        </p>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto mb-8">
          We work with businesses across industries — from healthcare
          and real estate to e-commerce and professional services —
          building AI-powered systems that automate time-consuming
          operations, streamline workflows, and improve efficiency.
        </p>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
          From AI voice agents and chatbot systems to workflow
          automation and CRM integrations, we create scalable AI
          infrastructure tailored specifically to each business model.
          Every system we build is designed to reduce overhead,
          eliminate bottlenecks, and drive measurable business growth.
        </p>

        {/* STATS */}
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
              className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:-translate-y-2 transition-all duration-300 hover:border-[var(--gold-500)]/30"
            >
              {/* NUMBER */}
              <div className="text-4xl font-bold text-[var(--gold-500)] mb-3">
                {item.number}
              </div>

              {/* LABEL */}
              <div className="text-sm uppercase tracking-wider text-[var(--text-secondary)] leading-relaxed">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
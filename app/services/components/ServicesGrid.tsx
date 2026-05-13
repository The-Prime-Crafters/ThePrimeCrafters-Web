const services = [
  {
    title: "AI Voice Agents",
    description:
      "AI-powered voice systems for customer support, sales, and lead qualification.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive operations and streamline business workflows.",
  },
  {
    title: "AI Chatbots",
    description:
      "Custom chatbot systems for lead generation and customer engagement.",
  },
  {
    title: "Custom Integrations",
    description:
      "Integrate AI systems with CRMs, APIs, and business platforms.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">
      
      {/* Background energy layer */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[25vw] h-[25vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,5rem)]">
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            What We Offer
          </span>

          <h2
            className="font-bold mt-4 leading-tight"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Premium AI Automation Services
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
            Intelligent systems designed to replace manual work with adaptive AI-driven automation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(1rem,2vw,2rem)]">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-[var(--border-subtle)] glass-card p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

              {/* Icon */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-[var(--gold-500)] text-xl md:text-2xl">
                  ✦
                </span>
              </div>

              {/* Title */}
              <h3 className="relative text-lg md:text-xl font-semibold mb-3 group-hover:text-[var(--gold-400)] transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {service.description}
              </p>

             

              {/* Floating corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/40 group-hover:scale-[2] transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
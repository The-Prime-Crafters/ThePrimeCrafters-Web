const services = [
  {
    title: "AI Voice Agents",
    description:
      "Deploy intelligent AI voice systems that automate inbound calls, appointment scheduling, lead qualification, and customer support — available 24/7 without manual intervention.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive business operations and streamline internal processes using AI-powered workflow systems that improve speed, accuracy, and operational efficiency.",
  },
  {
    title: "Custom AI Chatbots",
    description:
      "Build human-like AI chatbot systems trained specifically on your business processes, services, and customer interactions for support, onboarding, and sales.",
  },
  {
    title: "CRM Integrations",
    description:
      "Connect CRMs, APIs, databases, and third-party platforms into one intelligent automation ecosystem that centralizes operations and improves productivity.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--gold-500)]/5 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-20 text-center">
          {/* LABEL */}
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            What We Do
          </span>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            AI Solutions Built For
            <span className="text-[var(--gold-500)]">
              {" "}
              Business Growth
            </span>
          </h2>

          {/* INTRO */}
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            We design and develop intelligent AI automation systems
            that help businesses eliminate manual work, optimize
            operations, improve customer experiences, and scale faster
            using modern automation infrastructure.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* FEATURED SERVICE */}
          <article className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-10 border border-[var(--border-subtle)] h-full relative overflow-hidden hover:border-[var(--gold-500)]/30 transition-all duration-300">
              {/* GLOW */}
              <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[100px] rounded-full" />

              {/* ICON */}
              <div className="text-[var(--gold-500)] text-4xl mb-6">
                ✦
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-semibold mb-5 leading-snug">
                AI Strategy & Automation Systems
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                We build end-to-end AI automation systems that replace
                slow manual workflows, streamline operations, and
                create scalable digital infrastructure tailored to your
                business goals and operational needs.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--gold-500)] mt-0.5">
                    ✔
                  </span>

                  <span>
                    Workflow automation systems that reduce repetitive
                    tasks and improve operational efficiency.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--gold-500)] mt-0.5">
                    ✔
                  </span>

                  <span>
                    AI integration systems connecting CRMs, APIs, and
                    third-party business tools seamlessly.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--gold-500)] mt-0.5">
                    ✔
                  </span>

                  <span>
                    Business process optimization designed to save
                    time, reduce overhead, and increase productivity.
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* OTHER SERVICES */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:-translate-y-2 hover:border-[var(--gold-500)]/30 transition-all duration-300"
              >
                {/* ICON */}
                <div className="text-[var(--gold-500)] text-2xl mb-4">
                  ✦
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
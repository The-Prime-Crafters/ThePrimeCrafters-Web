const features = [
  {
    icon: "⚡",
    title: "Fast AI Implementation",
    description:
      "Deploy production-ready AI systems in 2–8 weeks without disrupting existing operations.",
  },
  {
    icon: "✦",
    title: "Custom Automation Systems",
    description:
      "Every solution is built specifically for your business — trained on your data, integrated with your tools, designed around your exact operational needs.",
  },
  {
    icon: "◈",
    title: "Dedicated Support",
    description:
      "Our team stays involved through implementation, post-launch, and as your business evolves. You never get handed off to a support queue.",
  },
  {
    icon: "⟳",
    title: "Scalable Infrastructure",
    description:
      "Systems are architected for long-term growth — whether you are automating one workflow today or building a full AI operations stack over time.",
  },
];

export default function WhyContactUs() {
  return (
    <section className="relative px-6 py-[clamp(4rem,8vw,7rem)] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl">
         

          <h2
            className="font-bold mt-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Why Businesses Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200">
              The Prime Crafters
            </span>
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-2xl">
            We help businesses implement scalable AI systems that reduce manual
            work, improve operations, and accelerate growth — without disrupting
            the workflows you already rely on.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-[clamp(2rem,5vw,4rem)] grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-[var(--border-subtle)] bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40 overflow-hidden"
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_70%)]" />

              {/* accent dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/30 group-hover:scale-150 transition" />

              <div className="relative">
                {/* icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <span className="text-[var(--gold-500)] text-xl">{feature.icon}</span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-white transition leading-snug">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--text-secondary)] group-hover:text-white/80 transition">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
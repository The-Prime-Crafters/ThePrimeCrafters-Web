export default function VoiceAgentsSection() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* Background energy */}
      <div className="absolute inset-0">
        <div className="absolute top-[-15%] left-[-10%] w-[35vw] h-[35vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[30vw] h-[30vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">

        {/* LEFT */}
        <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">

          {/* Heading */}
          <h2
            className="font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            AI Voice Agent Solutions
          </h2>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            Replace manual call handling with intelligent AI voice agents that manage inbound and outbound interactions automatically — around the clock, at any scale.
          </p>

          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            Our voice AI systems are trained on your business workflows and brand voice, delivering natural conversations that convert leads, resolve support queries, and book appointments without a human on the line.
          </p>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              "Inbound & outbound calling automation",
              "AI-powered lead qualification",
              "24/7 automated customer support",
              "Appointment scheduling & booking automation",
              "Natural language processing",
              "CRM-integrated call logging & follow-up",
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
        </div>

        {/* RIGHT - AI SYSTEM VISUAL */}
        <div className="relative">

          <div className="glass-card rounded-[2.5rem] p-[clamp(1.5rem,3vw,3rem)] border border-[var(--border-subtle)] backdrop-blur-xl relative overflow-hidden">

            {/* Soft glow inside card */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_60%)]" />

            <div className="relative space-y-6">

              {/* Header node */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-[var(--gold-400)]">
                  Voice AI System
                </h3>
                <div className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse" />
              </div>

              {/* Dynamic nodes */}
              {[
                {
                  title: "Customer Support AI",
                  desc: "24/7 automated customer support that resolves queries without a human on the line.",
                },
                {
                  title: "Sales Voice Agents",
                  desc: "AI-powered lead qualification that converts prospects through natural conversation.",
                },
                {
                  title: "Call Automation Engine",
                  desc: "Manages inbound & outbound calling with CRM-integrated call logging & follow-up.",
                },
                {
                  title: "Booking & Scheduling AI",
                  desc: "Appointment scheduling & booking automation trained on your business workflows.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-[var(--border-subtle)] p-5 hover:border-[var(--gold-500)]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* glow hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.12),transparent_70%)]" />

                  <div className="relative">
                    <h4 className="text-base md:text-lg font-semibold group-hover:text-[var(--gold-400)] transition">
                      {card.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">
                      {card.desc}
                    </p>
                  </div>

                  {/* animated corner dot */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/30 group-hover:scale-150 transition" />
                </div>
              ))}
            </div>
          </div>

          {/* floating ambient particles */}
          <div className="absolute top-10 right-10 w-3 h-3 bg-[var(--gold-500)]/30 rounded-full animate-bounce" />
          <div className="absolute bottom-10 left-10 w-4 h-4 bg-[var(--gold-500)]/20 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
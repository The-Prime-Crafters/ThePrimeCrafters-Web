"use client";

import { useEffect, useState } from "react";

const services = [
  {
    title: "AI Voice Agents",
    description:
      "Intelligent voice systems that handle inbound calls, qualify leads, book appointments, and manage customer interactions — 24 hours a day, without a human on the line.",
  },
  {
    title: "Workflow Automation",
    description:
      "We map your most repetitive business processes and replace them with automated systems that run faster, more accurately, and at a fraction of the cost.",
  },
  {
    title: "Custom AI Chatbots",
    description:
      "Human-like chat systems trained on your business data — for sales, support, onboarding, or internal operations. Deployed on your website, CRM, or messaging platform.",
  },
  {
    title: "CRM & System Integrations",
    description:
      "We connect your tools — CRMs, APIs, databases, and third-party platforms — into one seamless, automated ecosystem that keeps your data flowing and your team unblocked.",
  },
  {
    title: "AI Strategy & Automation Consulting",
    description:
      "Not sure where to start? We analyze your current workflows, identify the highest-ROI automation opportunities, and build a roadmap for implementing AI across your business.",
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(0);

  // auto rotate (dynamic feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--gold-500)]/5 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <h2 className="text-[var(--gold-500)] text-5xl md:text-6xl font-bold mb-4">
          What We Do
        </h2>

        <p className="text-[var(--text-secondary)] max-w-3xl mb-12 leading-relaxed">
          We design and build AI-powered systems that automate your operations,
          reduce workload, and create the infrastructure your business needs to scale — without adding headcount.
        </p>

        {/* BIG MASTER CARD */}
        <div className="grid lg:grid-cols-2 gap-8 glass-card p-6 md:p-10 rounded-3xl border border-[var(--border-subtle)] relative overflow-hidden">

          {/* LEFT SIDE - SMALL SELECTABLE CARDS */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const isActive = index === active;

              return (
                <div
                  key={service.title}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-[1.02]"
                      : "border-[var(--border-subtle)] opacity-60 hover:opacity-100"
                  }`}
                >
                  <h3 className="font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - DYNAMIC CONTENT */}
          <div className="flex flex-col justify-center p-6 md:p-10 rounded-2xl border border-[var(--border-subtle)] bg-black/30 relative overflow-hidden">

            {/* glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            <div className="text-[var(--gold-500)] text-sm uppercase tracking-widest mb-3">
              Service Detail
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {services[active].title}
            </h2>

            <p className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
              {services[active].description}
            </p>

            {/* progress indicator */}
            <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--gold-500)] transition-all duration-500"
                style={{
                  width: `${((active + 1) / services.length) * 100}%`,
                }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
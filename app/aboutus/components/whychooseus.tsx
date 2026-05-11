"use client";

import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const features = [
    "Custom AI Solutions",
    "Fast Implementation",
    "Scalable Architecture",
    "Dedicated Support",
  ];

  const highlights = [
    {
      title: "2x Faster Delivery",
      desc: "We optimize development pipelines to ship production-ready systems faster.",
    },
    {
      title: "Enterprise Grade Systems",
      desc: "Built with scalable architecture, security, and performance at the core.",
    },
    {
      title: "24/7 AI Monitoring",
      desc: "Continuous system monitoring ensures reliability and uptime.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // auto rotate highlight (SaaS feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Why Choose The Prime Crafters
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            Built For Long-Term{" "}
            <span className="text-[var(--gold-500)]">Business Growth</span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We design AI systems that don’t just work today — they evolve,
            scale, and integrate deeply into your business operations.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="glass-card rounded-3xl p-12 md:p-16 border border-[var(--border-subtle)] relative overflow-hidden">

          {/* glow */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What Sets Us Apart
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                Unlike generic agencies, we focus on deep system-level integration.
                Every solution is engineered for performance, automation, and long-term scalability.
              </p>

              <div className="mt-8 space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[var(--gold-500)] text-xl">✔</span>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT (DYNAMIC HIGHLIGHT PANEL) */}
            <div className="flex items-center">
              <div className="w-full">

                {/* active card */}
                <div className="p-8 rounded-3xl border border-[var(--gold-500)] bg-[var(--gold-500)]/10 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {highlights[activeIndex].title}
                  </h3>

                  <p className="text-[var(--text-secondary)]">
                    {highlights[activeIndex].desc}
                  </p>

                  {/* pulse dot */}
                  <div className="mt-6 w-2 h-2 bg-[var(--gold-500)] rounded-full animate-pulse" />
                </div>

                {/* mini indicators */}
                <div className="flex gap-2 mt-6 justify-center">
                  {highlights.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-6 bg-[var(--gold-500)]"
                          : "w-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
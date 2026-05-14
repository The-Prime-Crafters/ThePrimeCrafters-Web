"use client";

import { useEffect, useState } from "react";

const trustSignals = [
  {
    title: "Real Experience Across Real Industries",
    desc: "We've built AI systems for healthcare providers, real estate investors, sales teams, service businesses, and more. That cross-industry experience means we come to your project already knowing what works.",
  },
  {
    title: "Production-Grade Standards",
    desc: "Every system we build is architected for reliability — scalable cloud infrastructure, automated monitoring, and enterprise security standards built in from day one.",
  },
  {
    title: "Transparent & Collaborative",
    desc: "You're never left in the dark. We communicate clearly at every stage, and we don't consider a project complete until you're fully satisfied with what we've built.",
  },
  {
    title: "Founder-Led Delivery",
    desc: "Every client engagement is led by our founding team — not outsourced to junior contractors. You get senior-level attention from start to finish.",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support & Monitoring" },
  { number: "10x", label: "Workflow Efficiency" },
];

export default function TrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-[var(--gold-500)]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/5 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <header className="text-center mb-16">
          <h2
            id="trust-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold"
          >
            Why Trust Us
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            We're not a faceless tech company. The Prime Crafters was built by
            people who understand both AI and business — and who are personally
            invested in the results we deliver.
          </p>
        </header>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT: TRUST CARDS */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="relative glass-card rounded-3xl p-8 border border-[var(--border-subtle)] hover:border-[var(--gold-500)]/30 transition-all duration-300 overflow-hidden"
              >
                {/* glow */}
                <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

                <h3 className="text-lg sm:text-xl font-semibold text-[var(--gold-500)] mb-3">
                  {signal.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: COMPACT STATS PANEL */}
          <div className="glass-card rounded-3xl p-5 sm:p-6 border border-[var(--border-subtle)] relative overflow-hidden">

            {/* glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

            <h3 className="text-sm sm:text-base font-semibold mb-4 text-[var(--gold-500)]">
              Performance Snapshot
            </h3>

            <div className="space-y-3">
              {stats.map((stat, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={stat.label}
                    className={`rounded-2xl p-4 border transition-all duration-500 ${
                      isActive
                        ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-[1.02]"
                        : "border-[var(--border-subtle)] opacity-60"
                    }`}
                  >
                    <div
                      className={`text-2xl sm:text-3xl font-bold ${
                        isActive ? "text-[var(--gold-500)]" : "text-white"
                      }`}
                    >
                      {stat.number}
                    </div>

                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[var(--text-secondary)] mt-1">
                      {stat.label}
                    </p>

                    {isActive && (
                      <div className="mt-2 w-1.5 h-1.5 bg-[var(--gold-500)] rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
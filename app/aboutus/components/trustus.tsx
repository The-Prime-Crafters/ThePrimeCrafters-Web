"use client";

import { useEffect, useState } from "react";

export default function TrustSection() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support & Monitoring" },
    { number: "10x", label: "Workflow Efficiency" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // auto rotate highlight (SaaS feel)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Why Trust Us
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            Delivering Reliable{" "}
            <span className="text-[var(--gold-500)]">AI Systems</span>
          </h2>

          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-6 text-lg">
            We don’t just build tools — we build production-grade AI systems
            that power real business growth at scale.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: FEATURE CARD */}
          <div className="glass-card rounded-3xl p-12 border border-[var(--border-subtle)] relative overflow-hidden">

            {/* glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            <h3 className="text-2xl font-semibold mb-4">
              Enterprise-Grade Reliability
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              Our AI systems are built with scalability, uptime, and performance
              as core priorities — ensuring your business runs smoothly 24/7
              without interruption.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[var(--gold-500)]">✔</span>
                <p>Scalable Cloud Architecture</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--gold-500)]">✔</span>
                <p>Automated Monitoring Systems</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--gold-500)]">✔</span>
                <p>Enterprise Security Standards</p>
              </div>
            </div>
          </div>

          {/* RIGHT: STATS GRID */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`rounded-3xl p-8 text-center border transition-all duration-500 ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-105 shadow-lg shadow-[var(--gold-500)]/10"
                      : "glass-card border-[var(--border-subtle)] opacity-60"
                  }`}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 ${
                      isActive ? "text-[var(--gold-500)]" : "text-white"
                    }`}
                  >
                    {stat.number}
                  </div>

                  <div className="text-[var(--text-secondary)] text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* pulse indicator */}
                  {isActive && (
                    <div className="mt-3 w-2 h-2 bg-[var(--gold-500)] rounded-full mx-auto animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section
      aria-labelledby="trust-heading"
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* HEADER */}
        <header className="text-center mb-20">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Trusted AI Agency
          </span>

          <h2
            id="trust-heading"
            className="text-5xl md:text-6xl font-bold mt-6"
          >
            Delivering Reliable{" "}
            <span className="text-[var(--gold-500)]">
              AI Automation Systems
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            The Prime Crafters builds production-grade AI systems designed for
            scalability, security, and long-term business growth. As a trusted
            AI automation agency, we help businesses streamline operations,
            reduce manual workload, and scale efficiently using intelligent
            automation infrastructure.
          </p>
        </header>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <article className="glass-card rounded-3xl p-12 border border-[var(--border-subtle)] relative overflow-hidden">
            
            {/* Glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            <h3 className="text-2xl font-semibold mb-4">
              Enterprise-Grade AI Reliability
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We build scalable AI systems for businesses across healthcare,
              real estate, e-commerce, and service industries. Every automation
              system is engineered for uptime, security, and performance —
              ensuring your business operations run smoothly 24/7.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span
                  className="text-[var(--gold-500)]"
                  aria-hidden="true"
                >
                  ✔
                </span>
                <p>Scalable Cloud Infrastructure</p>
              </li>

              <li className="flex items-center gap-3">
                <span
                  className="text-[var(--gold-500)]"
                  aria-hidden="true"
                >
                  ✔
                </span>
                <p>Automated Monitoring & Performance Tracking</p>
              </li>

              <li className="flex items-center gap-3">
                <span
                  className="text-[var(--gold-500)]"
                  aria-hidden="true"
                >
                  ✔
                </span>
                <p>Enterprise Security Standards</p>
              </li>

              <li className="flex items-center gap-3">
                <span
                  className="text-[var(--gold-500)]"
                  aria-hidden="true"
                >
                  ✔
                </span>
                <p>Founder-Led Strategy & Support</p>
              </li>
            </ul>
          </article>

          {/* RIGHT SIDE */}
          <div
            className="grid grid-cols-2 gap-6"
            aria-label="Company trust statistics"
          >
            {stats.map((stat, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={stat.label}
                  className={`rounded-3xl p-8 text-center border transition-all duration-500 ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-105 shadow-lg shadow-[var(--gold-500)]/10"
                      : "glass-card border-[var(--border-subtle)] opacity-60"
                  }`}
                >
                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 ${
                      isActive
                        ? "text-[var(--gold-500)]"
                        : "text-white"
                    }`}
                  >
                    {stat.number}
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>

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
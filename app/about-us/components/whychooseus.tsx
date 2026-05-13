"use client";

import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const features = [
    "Custom AI Automation Solutions",
    "Fast AI System Implementation",
    "Scalable Business Infrastructure",
    "Dedicated Long-Term Support",
  ];

  const highlights = [
    {
      title: "2x Faster AI Deployment",
      desc: "We use optimized development workflows to deliver production-ready AI automation systems significantly faster than traditional agencies.",
    },
    {
      title: "Enterprise-Grade AI Infrastructure",
      desc: "Every system is engineered with scalability, security, uptime, and long-term business growth in mind.",
    },
    {
      title: "24/7 Monitoring & Optimization",
      desc: "Continuous monitoring, maintenance, and performance optimization ensure your AI systems operate reliably around the clock.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section
      aria-labelledby="why-choose-heading"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="text-center mb-16">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Why Choose The Prime Crafters
          </span>

          <h2
            id="why-choose-heading"
            className="text-5xl md:text-6xl font-bold mt-6"
          >
            Custom AI Automation Built For{" "}
            <span className="text-[var(--gold-500)]">
              Long-Term Business Growth
            </span>
          </h2>

          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            The Prime Crafters is a custom AI automation agency focused on
            building scalable systems that streamline operations, reduce manual
            workload, and support sustainable business growth. Unlike generic
            agencies, we engineer deeply integrated AI infrastructure tailored
            specifically to your workflows and operational goals.
          </p>
        </header>

        {/* MAIN CONTENT */}
        <article className="glass-card rounded-3xl p-12 md:p-16 border border-[var(--border-subtle)] relative overflow-hidden">
          
          {/* Glow */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                What Sets Our AI Automation Agency Apart
              </h3>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                We don’t rely on cookie-cutter software or prebuilt automation
                templates. Every AI solution is custom engineered to match your
                business processes, data structure, integrations, and long-term
                scaling requirements.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="text-[var(--gold-500)] text-xl"
                      aria-hidden="true"
                    >
                      ✔
                    </span>

                    <span className="font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="flex items-center"
              aria-label="AI agency highlights"
            >
              <div className="w-full">
                
                {/* ACTIVE CARD */}
                <div className="p-8 rounded-3xl border border-[var(--gold-500)] bg-[var(--gold-500)]/10 transition-all duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {highlights[activeIndex].title}
                  </h3>

                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {highlights[activeIndex].desc}
                  </p>

                  <div className="mt-6 w-2 h-2 bg-[var(--gold-500)] rounded-full animate-pulse" />
                </div>

                {/* INDICATORS */}
                <div
                  className="flex gap-2 mt-6 justify-center"
                  aria-hidden="true"
                >
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
        </article>
      </div>
    </section>
  );
}
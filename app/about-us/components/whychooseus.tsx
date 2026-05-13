"use client";

import { useEffect, useState } from "react";

export default function WhyChooseUs() {
  const features = [
    "Custom Solutions, Not Templates",
    "Fast Implementation",
    "Built to Scale",
    "Dedicated Support",
  ];

  const highlights = [
    {
      title: "Custom Solutions, Not Templates",
      desc: "We don't plug in off-the-shelf tools and call it automation. Every system is engineered from the ground up to match your exact workflows, data structure, and business goals.",
    },
    {
      title: "Fast Implementation",
      desc: "We've built optimized development pipelines that allow us to ship production-ready AI systems 2x faster than the industry average — without cutting corners on quality.",
    },
    {
      title: "Built to Scale",
      desc: "The systems we build today are designed to handle 10x your current volume tomorrow. Scalable architecture is a requirement, not an afterthought.",
    },
    {
      title: "Dedicated Support",
      desc: "We don't disappear after launch. Our team provides ongoing monitoring, optimization, and support to make sure your systems continue performing as your business grows.",
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
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[var(--gold-500)]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        
         

          {/* HEADING — from doc Section 5 */}
          <h1
            id="why-choose-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold"
          >
            Why Choose The Prime Crafters
          </h1>

          

          

        {/* MAIN CONTENT CARD */}
        <article className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

          <div className="grid md:grid-cols-2 gap-10 sm:gap-12">
            {/* LEFT SIDE */}
            <div>
              
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                 There's no shortage of agencies claiming to do AI. What sets us
            apart is how we do it — deeply integrated, fully custom, and built
            to last.
              </p>
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-[var(--gold-500)] text-lg sm:text-xl">
                      ✔
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE — rotating highlight */}
            <div className="flex items-center" aria-label="AI agency highlights">
              <div className="w-full">
                <div className="p-6 sm:p-8 rounded-3xl border border-[var(--gold-500)] bg-[var(--gold-500)]/10 transition-all duration-500">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {highlights[activeIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {highlights[activeIndex].desc}
                  </p>
                  <div className="mt-5 sm:mt-6 w-2 h-2 bg-[var(--gold-500)] rounded-full animate-pulse" />
                </div>

                <div className="flex gap-2 mt-5 justify-center" aria-hidden="true">
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
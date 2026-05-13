"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business deeply. We analyze your current workflows, identify manual bottlenecks, and pinpoint where AI can create the most immediate and lasting impact.",
  },
  {
    title: "Planning",
    description:
      "We map out the full system architecture — tools, integrations, data flows, and automation logic. You get a clear plan before a single line of code is written.",
  },
  {
    title: "Development",
    description:
      "Our team builds your custom AI system — voice agents, chatbots, workflow automations, or integrations — using proven frameworks and enterprise-grade standards.",
  },
  {
    title: "Testing",
    description:
      "Every system goes through rigorous testing across real-world scenarios before it ever touches your business. We don't launch until it's right.",
  },
  {
    title: "Deployment",
    description:
      "We deploy your system, train your team, and make sure everything is running smoothly. Post-launch support is included — we stay close until you're confident.",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === processSteps.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="flex items-center px-6 py-20 relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 xl:gap-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          

          {/* HEADING — from doc Section 7 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold">
            Our Process
          </h1>

          {/* INTRO COPY */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
            From the first conversation to final deployment — here's how we turn
            your business challenges into intelligent, automated systems.
          </p>

          {/* STEP TRACKER */}
          <div className="space-y-3 sm:space-y-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isDone = index < activeStep;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-[1.02]"
                      : "border-[var(--border-subtle)] opacity-60"
                  }`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border text-xs sm:text-sm font-medium shrink-0 ${
                      isActive
                        ? "bg-[var(--gold-500)] text-black border-[var(--gold-500)]"
                        : isDone
                        ? "bg-[var(--gold-500)]/20 text-[var(--gold-500)] border-[var(--gold-500)]/30"
                        : "bg-white/5 text-white/60 border-white/10"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={`font-medium text-base sm:text-lg ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          <article className="glass-card w-full rounded-3xl p-8 sm:p-10 xl:p-12 border border-[var(--border-subtle)] relative overflow-hidden">
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            <div className="text-[var(--gold-500)] text-3xl sm:text-4xl mb-5">
              ✦
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {processSteps[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              {processSteps[activeStep].description}
            </p>

            {/* PROGRESS BAR */}
            <div className="mt-8 sm:mt-10 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--gold-500)] transition-all duration-700"
                style={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
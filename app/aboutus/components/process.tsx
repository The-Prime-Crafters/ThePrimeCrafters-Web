"use client";

import { useEffect, useRef, useState } from "react";
import { processSteps } from "../data";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // auto play steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) =>
        prev === processSteps.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 relative">

        {/* LEFT: STEP TRACKER */}
        <div className="flex flex-col justify-center">
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Our Process
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-10">
            From Strategy To{" "}
            <span className="text-[var(--gold-500)]">Deployment</span>
          </h2>

          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isDone = index < activeStep;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all border ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-105"
                      : "border-[var(--border-subtle)] opacity-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm ${
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
                    className={`font-medium ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: DYNAMIC PANEL */}
        <div className="flex items-center">
          <div className="glass-card w-full rounded-3xl p-12 border border-[var(--border-subtle)] relative overflow-hidden">
            
            {/* glow */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            <div className="text-[var(--gold-500)] text-4xl mb-6">✦</div>

            <h3 className="text-3xl font-semibold mb-4">
              {processSteps[activeStep]}
            </h3>

            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              {getStepDescription(activeStep)}
            </p>

            {/* progress indicator */}
            <div className="mt-10 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--gold-500)] transition-all duration-700"
                style={{
                  width: `${((activeStep + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* helper function */
function getStepDescription(step: number) {
  const descriptions = [
    "We analyze your business structure, workflows, and bottlenecks to identify automation opportunities.",
    "We design a tailored AI architecture that fits seamlessly into your operations.",
    "We develop and integrate intelligent systems into your existing workflow.",
    "We test, optimize, and refine performance for real-world usage.",
    "We deploy and continuously monitor for scalability and improvement.",
  ];

  return descriptions[step];
}
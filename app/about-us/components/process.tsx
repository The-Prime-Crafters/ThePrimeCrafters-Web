"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business deeply. Our team analyzes your current workflows, identifies manual bottlenecks, and pinpoints where AI automation can create the most immediate and long-term business impact.",
  },
  {
    title: "Planning",
    description:
      "We map out your complete AI system architecture — including tools, integrations, workflows, automation logic, and data flows — giving you a clear strategic roadmap before development begins.",
  },
  {
    title: "Development",
    description:
      "Our team builds your custom AI systems using scalable frameworks and enterprise-grade standards — from AI voice agents and chatbot systems to workflow automation and CRM integrations.",
  },
  {
    title: "Testing",
    description:
      "Every AI automation system goes through extensive testing across real-world scenarios to ensure reliability, scalability, performance, and seamless integration into your business operations.",
  },
  {
    title: "Deployment",
    description:
      "We deploy your AI system, train your team, and provide ongoing support and optimization to ensure your automation infrastructure continues performing as your business grows.",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  /* VISIBILITY DETECTION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* AUTO STEP PLAY */
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
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          {/* LABEL */}
          <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
            Our Process
          </span>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
            From Strategy To{" "}
            <span className="text-[var(--gold-500)]">
              Deployment
            </span>
          </h2>

          {/* INTRO */}
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            From the first conversation to final deployment, our
            process is designed to turn complex business challenges
            into scalable AI automation systems that improve
            efficiency, reduce manual work, and accelerate growth.
          </p>

          {/* STEP TRACKER */}
          <div className="space-y-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isDone = index < activeStep;

              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] scale-[1.02]"
                      : "border-[var(--border-subtle)] opacity-60"
                  }`}
                >
                  {/* STEP NUMBER */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm font-medium ${
                      isActive
                        ? "bg-[var(--gold-500)] text-black border-[var(--gold-500)]"
                        : isDone
                        ? "bg-[var(--gold-500)]/20 text-[var(--gold-500)] border-[var(--gold-500)]/30"
                        : "bg-white/5 text-white/60 border-white/10"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* STEP TITLE */}
                  <p
                    className={`font-medium text-lg ${
                      isActive
                        ? "text-white"
                        : "text-white/60"
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
          <article className="glass-card w-full rounded-3xl p-12 border border-[var(--border-subtle)] relative overflow-hidden">
            {/* CARD GLOW */}
            <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[var(--gold-500)]/10 blur-[120px] rounded-full" />

            {/* ICON */}
            <div className="text-[var(--gold-500)] text-4xl mb-6">
              ✦
            </div>

            {/* STEP TITLE */}
            <h3 className="text-3xl font-semibold mb-5">
              {processSteps[activeStep].title}
            </h3>

            {/* STEP DESCRIPTION */}
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              {processSteps[activeStep].description}
            </p>

            {/* PROGRESS BAR */}
            <div className="mt-10 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--gold-500)] transition-all duration-700"
                style={{
                  width: `${
                    ((activeStep + 1) / processSteps.length) * 100
                  }%`,
                }}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
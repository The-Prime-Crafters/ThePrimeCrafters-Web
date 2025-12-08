"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your business processes, identify automation opportunities, and understand your unique challenges.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a tailored automation roadmap with clear milestones, timelines, and expected outcomes.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our expert team builds and tests your custom AI solutions using cutting-edge technologies.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Integration",
    description:
      "We seamlessly integrate the solutions with your existing systems and workflows.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Optimization",
    description:
      "We continuously monitor, optimize, and enhance your automation for peak performance.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6">
            <span className="text-[#f5f5f5]">Our </span>
            <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            A proven methodology that ensures successful delivery and measurable
            results for every project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div
                      className={`p-8 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] group card-hover ${
                        index % 2 === 0
                          ? "lg:mr-12 lg:text-right"
                          : "lg:ml-12 lg:text-left"
                      }`}
                    >
                      {/* Step Number */}
                      <span className="inline-block text-[#D4AF37] text-sm font-mono font-bold tracking-wider mb-4 group-hover:scale-110 transition-transform duration-300">
                        STEP {step.number}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-4 font-[var(--font-cormorant)] flex items-center gap-3 group-hover:text-[#D4AF37] transition-colors">
                        {index % 2 !== 0 && (
                          <span className="text-[#D4AF37] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{step.icon}</span>
                        )}
                        {step.title}
                        {index % 2 === 0 && (
                          <span className="text-[#D4AF37] lg:ml-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                            {step.icon}
                          </span>
                        )}
                      </h3>

                      {/* Description */}
                      <p className="text-[#a3a3a3] leading-relaxed">
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className="mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#D4AF37] to-transparent" 
                           style={{ marginLeft: index % 2 === 0 ? 'auto' : '0', marginRight: index % 2 === 0 ? '0' : 'auto' }} />
                    </div>
                  </div>

                  {/* Center Node - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center z-20">
                    <div className="w-16 h-16 rounded-full glass-card border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-125 transition-transform duration-500">
                      <span className="text-[#D4AF37] font-bold font-mono text-base">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#a3a3a3] mb-6">
            Ready to start your automation journey?
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


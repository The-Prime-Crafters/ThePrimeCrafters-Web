"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Enterprise Data Pipeline",
    industry: "Financial Services",
    description:
      "Automated data processing pipeline handling 10M+ transactions daily with real-time analytics and reporting.",
    results: ["85% faster processing", "99.9% accuracy", "$2M annual savings"],
    image: "📊",
  },
  {
    title: "AI Customer Service Bot",
    industry: "E-Commerce",
    description:
      "Intelligent chatbot handling 80% of customer inquiries with natural language understanding and seamless escalation.",
    results: [
      "80% query resolution",
      "24/7 availability",
      "40% cost reduction",
    ],
    image: "🤖",
  },
  {
    title: "Predictive Maintenance System",
    industry: "Manufacturing",
    description:
      "Machine learning system predicting equipment failures before they occur, reducing downtime significantly.",
    results: ["60% less downtime", "45% maintenance savings", "ROI in 6 months"],
    image: "⚙️",
  },
  {
    title: "Document Processing AI",
    industry: "Legal Tech",
    description:
      "Automated document analysis and extraction system processing thousands of legal documents daily.",
    results: ["95% accuracy", "10x faster review", "70% cost savings"],
    image: "📄",
  },
  {
    title: "Supply Chain Optimizer",
    industry: "Logistics",
    description:
      "AI-powered supply chain optimization reducing inventory costs and improving delivery times.",
    results: ["30% inventory reduction", "25% faster delivery", "$5M saved"],
    image: "🚛",
  },
  {
    title: "Healthcare Analytics Platform",
    industry: "Healthcare",
    description:
      "Advanced analytics platform for patient data analysis and treatment outcome predictions.",
    results: ["20% better outcomes", "HIPAA compliant", "Real-time insights"],
    image: "🏥",
  },
];

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6">
            <span className="text-[#f5f5f5]">Delivered </span>
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            Explore our track record of successful AI automation implementations
            across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl glass-card border-[rgba(255,255,255,0.08)] overflow-hidden card-hover transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image/Icon Area */}
              <div className="relative h-48 glass flex items-center justify-center overflow-hidden">
                <span className="text-6xl transform group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
                  {project.image}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.5)] to-transparent opacity-80" />

                {/* Industry Badge */}
                <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium glass text-[#D4AF37] rounded-full border border-[rgba(212,175,55,0.3)] backdrop-blur-xl">
                  {project.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f5f5f5] mb-3 font-[var(--font-cormorant)] group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.results.map((result) => (
                    <span
                      key={result}
                      className="px-2 py-1 text-xs bg-[rgba(255,255,255,0.03)] text-[#737373] rounded-md border border-[rgba(255,255,255,0.05)]"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium group/link"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(212,175,55,0.1)]" />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Discuss Your Project
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


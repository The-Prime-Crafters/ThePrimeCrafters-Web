"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    stat: "5×",
    title: "Lead Qualification Automation",
    description:
      "Reduced lead response time by 5× for a SaaS company — from 4 hours average to under 45 minutes — using an AI qualification agent integrated directly with their CRM pipeline.",
    result: "Reduced response time by 5×",
    tags: ["AI Voice Agent", "CRM Integration"],
    accent: "#C9A84C",
    industry: "SaaS Company",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    stat: "70%",
    title: "AI Support Chatbot",
    description:
      "Automated 70% of incoming customer support queries for an e-commerce brand, eliminating a backlog of 300+ weekly tickets and cutting the support team's workload by more than half.",
    result: "70% queries automated",
    tags: ["AI Chatbot", "Custom Training"],
    accent: "#6EE7B7",
    industry: "E-Commerce Brand",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    stat: "40h",
    title: "Workflow Optimisation",
    description:
      "Saved 40+ operational hours per week for a healthcare practice by automating patient intake forms, appointment reminders, and follow-up scheduling across existing tools.",
    result: "40+ hours saved weekly",
    tags: ["Workflow Automation", "Integrations"],
    accent: "#A78BFA",
    industry: "Healthcare Practice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

function CaseCard({ project, index, visible }: { project: (typeof projects)[0]; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm md:p-8"
    >
      {/* Hover glow */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at top left, ${project.accent}14 0%, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Top accent line */}
      <div
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.4s ease",
        }}
        className="absolute left-0 top-0 h-px w-2/3"
      />

      {/* Icon + industry */}
      <div className="mb-6 flex items-center justify-between">
        <div
          style={{
            color: project.accent,
            background: `${project.accent}15`,
            borderColor: `${project.accent}28`,
            boxShadow: hovered ? `0 0 16px ${project.accent}22` : "none",
            transition: "box-shadow 0.4s ease",
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border"
        >
          {project.icon}
        </div>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-neutral-500">
          {project.industry}
        </span>
      </div>

      {/* Stat */}
      <p
        className="mb-2 text-4xl font-bold"
        style={{
          background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {project.stat}
      </p>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold leading-snug text-white/90 sm:text-xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>

      {/* Divider */}
      <div
        className="mb-5 h-px w-full"
        style={{ background: `linear-gradient(90deg, ${project.accent}30, transparent)` }}
      />

      {/* Tags + arrow */}
      <div className="mt-auto flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                color: project.accent,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            color: project.accent,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0) translateY(0)" : "translateX(-4px) translateY(4px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPreview() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)", filter: "blur(70px)" }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)", filter: "blur(80px)" }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="mb-12 text-center md:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
        
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Success{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Stories
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Real AI systems. Real businesses. Measurable results. Here are a few of the outcomes our clients have achieved after implementing AI automation with The Prime Crafters.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-10 h-px w-full md:mb-14"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }}
        />

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <CaseCard key={project.title} project={project} index={index} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 text-center"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.45s" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "#C9A84C" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#D4AF61")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C")}
          >
            See All Projects
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
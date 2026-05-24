"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "AI Voice Agents",
    description:
      "Deploy intelligent voice agents that handle inbound calls, qualify leads, answer customer questions, and resolve support queries — 24 hours a day, 7 days a week, without fatigue or inconsistency. Your team handles only the conversations that truly need a human.",
    href: "/services#ai-voice-agents",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 0 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    accent: "#C9A84C",
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate repetitive, time-consuming manual tasks and streamline complex multi-step processes with intelligent automation pipelines. From data entry to approval chains, we automate the work that slows your team down.",
    href: "/services#workflow-automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    accent: "#A87C3E",
  },
  {
    title: "AI Chatbots",
    description:
      "Context-aware conversational AI that understands your business, engages website visitors intelligently, answers product and service questions, and converts them into qualified leads — at any hour, across any page on your site.",
    href: "/services#ai-chatbots",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    accent: "#D4AF61",
  },
  {
    title: "CRM Integrations",
    description:
      "Seamlessly connect your AI stack with Salesforce, HubSpot, Pipedrive, and your existing tools — keeping customer data, interaction history, and pipeline activity in perfect sync without manual updates or data entry errors.",
    href: "/services#crm-integrations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    accent: "#B8963E",
  },
  {
    title: "Custom AI Systems",
    description:
      "Purpose-built AI architectures trained on your proprietary data and tailored to your industry's specific requirements. Whether you need a custom decision engine, an intelligent document processor, or a bespoke automation framework — we build it from the ground up.",
    href: "/services#custom-ai-systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    accent: "#C9A84C",
  },
  {
    title: "AI Assistants",
    description:
      "Intelligent internal assistants that surface the right information at the right time — answering team questions, generating reports, flagging priorities, and keeping your workforce operating at peak efficiency.",
    href: "/services#ai-assistants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    accent: "#A87C3E",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm md:p-8 cursor-default select-none"
    >
      {/* Glow on hover */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at top left, ${service.accent}18 0%, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Top border accent */}
      <div
        style={{
          background: `linear-gradient(90deg, ${service.accent}, transparent)`,
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.4s ease",
        }}
        className="absolute left-0 top-0 h-px w-2/3"
      />

      {/* Icon */}
      <div
        style={{
          color: service.accent,
          background: `${service.accent}15`,
          borderColor: `${service.accent}30`,
          boxShadow: hovered ? `0 0 16px ${service.accent}25` : "none",
          transition: "box-shadow 0.4s ease",
        }}
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border"
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-[1.15rem] font-semibold leading-snug text-white/90 md:text-xl">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-400 md:text-[0.9rem]">
        {service.description}
      </p>

      {/* Arrow */}
      <Link
        href={service.href}
        style={{
          color: service.accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="mt-6 flex items-center gap-1.5 text-sm font-medium"
      >
        Learn more
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}

export default function ServicesSnapshot() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #A87C3E, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Services
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5">
              Explore our AI automation solutions designed to optimise workflows,
              increase operational efficiency, and scale your business with precision.
              Every service is built around your specific use case.
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
            }}
            className="flex-shrink-0"
          >
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-base"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.07)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(201,168,76,0.14)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(201,168,76,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(201,168,76,0.07)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(201,168,76,0.35)";
              }}
            >
              Explore All Services
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full md:my-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
          }}
        />

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
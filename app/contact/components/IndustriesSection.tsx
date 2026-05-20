"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  {
    title: "Healthcare",
    description:
      "Automate patient intake, appointment scheduling, and follow-ups — so your staff focuses on care, not admin.",
    accent: "#6EE7B7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    stat: "40% faster intake",
  },
  {
    title: "SaaS",
    description:
      "Boost activation, reduce churn, and handle support at scale with AI assistants trained on your product.",
    accent: "#C9A84C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    stat: "3× faster support",
  },
  {
    title: "E-Commerce",
    description:
      "Recover abandoned carts, personalize recommendations, and automate order updates with intelligent workflows.",
    accent: "#F87171",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
    stat: "25% more revenue",
  },
  {
    title: "Real Estate",
    description:
      "Qualify leads, schedule viewings, and follow up automatically — so agents close more deals with less effort.",
    accent: "#A78BFA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    stat: "2× more closings",
  },
  {
    title: "Agencies",
    description:
      "Deliver faster client results, automate reporting, and scale operations without scaling headcount.",
    accent: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    stat: "60% less manual work",
  },
  {
    title: "Local Businesses",
    description:
      "Handle inbound calls, bookings, and customer queries 24/7 — even when your doors are closed.",
    accent: "#C9A84C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    stat: "24/7 availability",
  },
];

function IndustryCard({
  item,
  index,
}: {
  item: (typeof industries)[0];
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
        transition: `opacity 0.55s ease ${index * 0.075}s, transform 0.55s ease ${index * 0.075}s`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm cursor-default select-none md:p-8"
    >
      {/* Hover glow */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at top left, ${item.accent}15 0%, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Top accent line */}
      <div
        style={{
          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
          opacity: hovered ? 1 : 0.25,
          transition: "opacity 0.4s ease",
        }}
        className="absolute left-0 top-0 h-px w-3/5"
      />

      {/* Icon + Stat row */}
      <div className="mb-6 flex items-start justify-between">
        <div
          style={{
            color: item.accent,
            background: `${item.accent}15`,
            borderColor: `${item.accent}28`,
            boxShadow: hovered ? `0 0 18px ${item.accent}20` : "none",
            transition: "box-shadow 0.4s ease",
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border"
        >
          {item.icon}
        </div>

        {/* Stat badge */}
        <span
          style={{
            color: item.accent,
            background: `${item.accent}12`,
            borderColor: `${item.accent}25`,
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.3s ease",
          }}
          className="rounded-full border px-3 py-1 text-xs font-semibold"
        >
          {item.stat}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold text-white/90 sm:text-xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-neutral-400 md:text-[0.875rem]">
        {item.description}
      </p>

      {/* Learn more */}
      <div
        style={{
          color: item.accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
      >
        See use cases
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
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
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[450px] w-[450px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #6EE7B7, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#C9A84C" }}
            >
              Who we serve
            </span>
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
            />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Industries We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5">
            AI solutions tailored for modern businesses across multiple
            industries — from startups to enterprise.
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full md:my-14"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
          }}
        />

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {industries.map((item, index) => (
            <IndustryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
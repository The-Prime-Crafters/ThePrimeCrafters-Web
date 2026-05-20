"use client";

import { useEffect, useRef, useState } from "react";

const contactOptions = [
  {
    title: "Email Us",
    value: "hello@theprimecrafters.com",
    hint: "We reply within 24 hours",
    href: "mailto:hello@theprimecrafters.com",
    accent: "#C9A84C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    value: "+1 (000) 000-0000",
    hint: "Chat with us instantly",
    href: "https://wa.me/10000000000",
    accent: "#4CAF75",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "The Prime Crafters",
    hint: "Connect professionally",
    href: "https://linkedin.com",
    accent: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Book a Meeting",
    value: "Schedule via Calendly",
    hint: "Pick a time that works for you",
    href: "https://calendly.com",
    accent: "#C9A84C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
];

function ContactCard({
  item,
  index,
}: {
  item: (typeof contactOptions)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 90);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`,
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm no-underline md:p-8"
    >
      {/* Hover glow */}
      <div
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at top left, ${item.accent}1A 0%, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Top accent line */}
      <div
        style={{
          background: `linear-gradient(90deg, ${item.accent}, transparent)`,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.4s ease",
        }}
        className="absolute left-0 top-0 h-px w-3/5"
      />

      {/* Icon */}
      <div
        style={{
          color: item.accent,
          background: `${item.accent}15`,
          borderColor: `${item.accent}30`,
          boxShadow: hovered ? `0 0 18px ${item.accent}22` : "none",
          transition: "box-shadow 0.4s ease",
        }}
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border"
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white/90 sm:text-lg">
        {item.title}
      </h3>

      {/* Value */}
      <p
        style={{ color: item.accent }}
        className="mt-1.5 truncate text-sm font-medium sm:text-base"
      >
        {item.value}
      </p>

      {/* Hint */}
      <p className="mt-2 text-xs leading-relaxed text-neutral-500">
        {item.hint}
      </p>

      {/* Arrow */}
      <div
        style={{
          color: item.accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
        className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
      >
        Get in touch
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </a>
  );
}

export default function QuickContactOptions() {
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
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent 70%)",
          filter: "blur(70px)",
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
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "#C9A84C" }}
            >
              Get in touch
            </span>
            <div
              className="h-px w-8"
              style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }}
            />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Talk To{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Team
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base md:mt-5">
            Reach out through your preferred channel and our team will get back
            to you shortly.
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full md:my-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
          }}
        />

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {contactOptions.map((item, index) => (
            <ContactCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="mt-10 text-center text-xs text-neutral-600"
          style={{
            opacity: headerVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Average response time · Email 24h · WhatsApp &lt;1h · Calendly instant
        </p>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10×", label: "Faster workflows" },
  { value: "24/7", label: "AI availability" },
  { value: "60%", label: "Cost reduction" },
];

export default function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      {/* Outer ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] p-10 text-center backdrop-blur-xl sm:p-14 md:p-20"
        >
          {/* Card background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.13) 0%, rgba(255,255,255,0.02) 60%, rgba(168,124,62,0.08) 100%)",
            }}
          />

          {/* Inner corner glows */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, #C9A84C44, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #A87C3E44, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Top border gold line */}
          <div
            className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
            }}
          />

          {/* Content */}
          <div className="relative">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <div
                className="h-px w-8"
                style={{
                  background: "linear-gradient(90deg, transparent, #C9A84C)",
                }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "#C9A84C" }}
              >
                Let's build together
              </span>
              <div
                className="h-px w-8"
                style={{
                  background: "linear-gradient(90deg, #C9A84C, transparent)",
                }}
              />
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Ready to Scale{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                With AI?
              </span>
            </h2>

            {/* Body */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base md:text-lg">
              Stop spending time on repetitive work that AI can handle for you. Let The Prime Crafters build scalable, custom AI systems that transform how your business operates — starting with a free, no-obligation strategy call.
            </p>

            {/* Stats row */}
            <div
              className="mx-auto mt-10 grid max-w-sm grid-cols-3 gap-4 sm:max-w-lg sm:gap-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.7s ease 0.25s",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span
                    className="text-2xl font-bold sm:text-3xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF61, #A87C3E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-xs text-neutral-500 sm:text-sm">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="mx-auto my-10 h-px max-w-xs"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
              }}
            />

      {/* Buttons */}
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
  <a
    href="https://calendly.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] sm:text-base"
    style={{
      background: "linear-gradient(135deg, #D4AF61, #A87C3E)",
    }}
  >
    {/* Shimmer */}
    <span
      className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full"
    />

    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>

    Schedule Consultation
  </a>

  <a
    href="mailto:hello@theprimecrafters.com"
    className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-300 sm:text-base"
    style={{
      border: "1px solid rgba(201,168,76,0.3)",
      background: "rgba(201,168,76,0.06)",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background =
        "rgba(201,168,76,0.12)";
      (e.currentTarget as HTMLAnchorElement).style.borderColor =
        "rgba(201,168,76,0.55)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLAnchorElement).style.background =
        "rgba(201,168,76,0.06)";
      (e.currentTarget as HTMLAnchorElement).style.borderColor =
        "rgba(201,168,76,0.3)";
    }}
  >
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>

    Contact Our Team

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  </a>
</div>
            {/* Trust note */}
            <p
              className="mt-8 text-xs text-neutral-600"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.7s ease 0.45s",
              }}
            >
              No commitment required · Free 30-minute strategy call · Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
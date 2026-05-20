"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How does the consultation process work?",
    answer:
      "We start with a free 30-minute discovery call to understand your business workflows and pain points. From there, we map out automation opportunities, present a custom AI strategy, and walk you through exactly what we'd build — before any commitment is made.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most projects are delivered in 2–6 weeks depending on scope and integrations. Simple chatbot or voice agent deployments can go live in under 2 weeks, while complex multi-system workflows or custom AI builds take longer. We'll give you a precise timeline after the discovery call.",
  },
  {
    question: "Do you build custom AI systems?",
    answer:
      "Yes — every solution is built specifically for your business. We don't use off-the-shelf templates. Your AI is trained on your data, integrated with your tools, and designed around your exact operational workflows.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across Healthcare, SaaS, E-Commerce, Real Estate, Agencies, and Local Businesses. Each industry gets solutions tailored to its specific compliance requirements, customer journeys, and operational challenges.",
  },
  {
    question: "What does ongoing support look like?",
    answer:
      "After launch, we provide dedicated support to monitor performance, retrain models as your business evolves, and roll out improvements. Think of us as a long-term AI partner, not a one-time vendor.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the scope of the project. We offer flexible engagement models — from one-time builds to monthly retainers. Book a free consultation and we'll walk you through options that fit your budget and goals.",
  },
];

function FAQItem({ faq, index, visible }: { faq: (typeof faqs)[0]; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
        ...(open
          ? { borderColor: "rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.04)" }
          : {}),
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 h-full w-px transition-opacity duration-300"
        style={{
          background: "linear-gradient(180deg, #C9A84C, transparent)",
          opacity: open ? 1 : 0,
        }}
      />

      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left sm:px-8"
      >
        <span className="text-sm font-semibold text-white/90 sm:text-base md:text-lg">
          {faq.question}
        </span>

        {/* Icon */}
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300"
          style={{
            borderColor: open ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.1)",
            background: open ? "rgba(201,168,76,0.1)" : "transparent",
            color: open ? "#C9A84C" : "rgba(255,255,255,0.4)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      {/* Animated content */}
      <div
        style={{ height, transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)", overflow: "hidden" }}
      >
        <div ref={contentRef} className="px-6 pb-6 sm:px-8 sm:pb-7">
          <div
            className="h-px w-full mb-5"
            style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.2), transparent)" }}
          />
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactFAQ() {
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
      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 65%)", filter: "blur(80px)" }}
      />

      <div ref={ref} className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div
          className="mb-12 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#C9A84C" }}>
              FAQ
            </span>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-neutral-400 sm:text-base">
            Everything you need to know before booking your free consultation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.55s",
          }}
        >
          <p className="text-sm text-neutral-500">
            Still have questions?{" "}
            <a
              href="mailto:hello@theprimecrafters.com"
              className="font-medium transition-colors duration-200"
              style={{ color: "#C9A84C" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#D4AF61")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#C9A84C")}
            >
              Email us directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
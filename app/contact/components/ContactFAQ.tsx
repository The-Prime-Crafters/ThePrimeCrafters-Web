"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What happens after I submit the contact form?",
    answer:
      "Once you submit the form, a member of our team reviews your inquiry and reaches out within 24 hours to schedule a free 30-minute discovery call. On that call, we learn about your business workflows, identify your biggest automation opportunities, and walk you through what we would build — before any commitment is made. You will leave with a clear picture of what AI can do for your operation, regardless of whether you move forward with us.",
  },
  {
    question: "How quickly will The Prime Crafters respond?",
    answer:
      "We respond to all form submissions within 24 business hours. For faster communication, WhatsApp is typically answered within one hour during business hours, and Calendly lets you book a call instantly without waiting for a reply. If your inquiry is urgent, WhatsApp or Calendly is the fastest path to a conversation with our team.",
  },
  {
    question: "Can I book a free consultation before choosing a service?",
    answer:
      "Absolutely — the free consultation is specifically designed for this. You do not need to have a service in mind before reaching out. Most clients come to us with a business problem, not a specific AI solution. On the discovery call, we map your workflows, identify where automation would have the highest impact, and recommend the right approach. There is no obligation and no pressure to commit.",
  },
  {
    question: "What details should I include in my message?",
    answer:
      "The more context you share, the more useful our first conversation will be. We recommend including: a brief description of your business, the specific workflow or process you want to improve, the tools you currently use (CRM, helpdesk, scheduling platforms), your approximate team size, and what success looks like for you — whether that is time saved, leads generated, or costs reduced. Do not worry about a perfect brief — we will ask the right questions on the call.",
  },
  {
    question: "Which AI automation services can I ask about?",
    answer:
      "You can ask about any of our services: AI Voice Agents (automated call handling and lead qualification), Workflow Automation (eliminating repetitive manual processes), AI Chatbots (24/7 website engagement and lead conversion), CRM Integrations (connecting your AI tools with Salesforce, HubSpot, or Pipedrive), Custom AI Systems (purpose-built AI trained on your own data), and AI Assistants (internal tools that improve team productivity). If your need does not fit neatly into one category, bring it to the call — we scope custom solutions regularly.",
  },
  {
    question: "Do you work with businesses outside the USA?",
    answer:
      "Yes. While The Prime Crafters is based in the USA, we work with businesses across North America, Europe, the Middle East, and beyond. All discovery calls and project management are conducted remotely. Our AI systems are built to operate in any timezone, language, or regional market context. If you have specific compliance or data residency requirements, mention them in your inquiry and we will address them directly.",
  },
  {
    question: "Can you help me choose the right AI solution for my business?",
    answer:
      "That is exactly what the free consultation is for. Many businesses come to us knowing they want to automate something but unsure of the best approach. Our team asks structured questions about your workflows, pain points, team size, and growth goals — then recommends a solution that fits your operational reality and budget. We do not push a particular service; we find the approach that delivers the fastest, most measurable impact for your specific situation.",
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
            Everything you need to know before booking your free consultation with The Prime Crafters.
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
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#D4AF61";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#C9A84C";
      }}
    >
      Email us directly →
    </a>
  </p>
</div>
      </div>
    </section>
  );
}
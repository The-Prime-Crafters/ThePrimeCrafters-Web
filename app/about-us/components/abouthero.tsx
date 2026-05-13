"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "AI Voice Agents",
    description:
      "Automate inbound calls, appointment bookings, lead qualification, and customer interactions 24/7 with intelligent AI voice systems.",
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline repetitive business processes with AI-powered workflow automation systems that improve efficiency and reduce operational costs.",
  },
  {
    title: "Custom AI Chatbots",
    description:
      "Deploy human-like AI chat systems trained on your business data for support, onboarding, sales, and customer engagement.",
  },
  {
    title: "CRM Integrations",
    description:
      "Connect CRMs, APIs, databases, and third-party platforms into one seamless automated business ecosystem.",
  },
];

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-36 pb-28 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-500)]/10 to-transparent blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE */}
        <div
          className={`transition-all duration-1000 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {/* SEO LABEL */}
          <span className="text-[var(--gold-400)] uppercase tracking-[0.2em] text-sm">
            AI Automation Agency
          </span>

          {/* MAIN SEO HEADING */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6 mb-6 text-gradient-gold">
            We Build AI Systems That Help Businesses Scale Faster
          </h1>

          {/* SEO CONTENT */}
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed">
            The Prime Crafters is an AI automation agency helping
            businesses eliminate manual bottlenecks, automate their
            operations, and grow faster using intelligent AI systems —
            from voice agents and chatbots to end-to-end workflow
            automation.
            <br />
            <br />
            We don&apos;t sell software. We build custom AI
            infrastructure specifically designed for your business —
            scalable systems that reduce overhead, improve efficiency,
            and create long-term growth.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              aria-label="Book a free AI automation consultation"
              className="px-7 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-500)]/20 active:scale-95"
            >
              Book a Free Consultation
            </Link>

            <Link
              href="/case-studies"
              aria-label="View AI automation case studies"
              className="px-7 py-4 rounded-2xl border border-[var(--border-subtle)] glass-card transition-all duration-300 hover:scale-105 hover:border-[var(--gold-500)]/50"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`glass-card rounded-3xl p-10 border border-[var(--border-subtle)] transition-all duration-1000 delay-200 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          } hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--gold-500)]/10`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border-subtle)] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gold-500)]/40"
              >
                {/* ICON */}
                <div className="text-[var(--gold-500)] text-3xl mb-4 animate-pulse">
                  ✦
                </div>

                {/* SERVICE TITLE */}
                <h3 className="font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                {/* SERVICE DESCRIPTION */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
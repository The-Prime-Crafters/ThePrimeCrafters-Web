"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const floatingTags = [
  "AI Voice Agents",
  "Workflow Automation",
  "Custom Chatbots",
  "CRM Integrations",
];

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % floatingTags.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      {/* GLOW ORBS */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[var(--gold-500)]/10 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[var(--gold-500)]/5 blur-[180px] rounded-full animate-pulse" />

      {/* FLOATING TAGS */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 space-y-3 hidden lg:flex flex-col">
        {floatingTags.map((tag, i) => (
          <div
            key={tag}
            className={`px-4 py-2 rounded-full text-xs border transition-all duration-500 ${
              i === tagIndex
                ? "bg-[var(--gold-500)]/10 border-[var(--gold-500)] text-[var(--gold-500)] scale-110"
                : "border-white/10 text-white/40"
            }`}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-10">

        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          
          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-6 text-gradient-gold">
            We Build AI Systems That Help Businesses Scale Faster
          </h1>

          {/* PARAGRAPH */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            The Prime Crafters is an AI automation agency helping businesses
            eliminate manual bottlenecks, automate their operations, and grow
            faster using intelligent AI systems — from voice agents and chatbots
            to end-to-end workflow automation.
            <br />
            <br />
            We don't sell software. We build custom AI infrastructure that works
            specifically for your business — and scales with it.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-7 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-[var(--gold-500)]/20"
            >
              Book a Free Consultation
            </Link>

            <Link
              href="/#projects"
              className="px-7 py-4 rounded-2xl border border-[var(--border-subtle)] glass-card hover:border-[var(--gold-500)]/50 hover:scale-105 transition-all duration-300"
            >
              View Our Case Studies
            </Link>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE FLOATING PULSE INDICATOR */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end">
        <div className="text-[var(--gold-500)] text-sm mb-2 animate-pulse">
          ● Live AI Systems
        </div>
        <div className="w-24 h-[2px] bg-[var(--gold-500)]/30 relative overflow-hidden">
          <div className="absolute inset-0 w-1/2 bg-[var(--gold-500)] animate-pulse" />
        </div>
      </div>

    </section>
  );
}
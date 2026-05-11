"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-36 pb-28 px-6 overflow-hidden">

      {/* FLOATING BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gold-500)]/10 to-transparent blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--gold-400)] uppercase tracking-[0.2em] text-sm">
            AI Automation Agency
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6 mb-6 text-gradient-gold">
            We Build AI Systems That Help Businesses Scale Faster
          </h1>

          <p className="text-lg text-[var(--text-secondary)] max-w-xl mb-10">
            The Prime Crafters helps businesses automate operations,
            streamline workflows, and scale using powerful AI systems,
            voice agents, and custom automation solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="px-7 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--gold-500)]/20 active:scale-95"
            >
              Book Consultation
            </Link>

            <Link
              href="/#projects"
              className="px-7 py-4 rounded-2xl border border-[var(--border-subtle)] glass-card transition-all duration-300 hover:scale-105 hover:border-[var(--gold-500)]/50"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`glass-card rounded-3xl p-10 border border-[var(--border-subtle)] transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--gold-500)]/10`}
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              "AI Voice Agents",
              "Workflow Automation",
              "Chatbot Systems",
              "CRM Integrations",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[var(--border-subtle)] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gold-500)]/40"
              >
                {/* ICON PULSE */}
                <div className="text-[var(--gold-500)] text-3xl mb-3 animate-pulse">
                  ✦
                </div>

                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
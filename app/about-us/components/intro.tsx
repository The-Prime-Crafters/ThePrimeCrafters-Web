"use client";

import { useEffect, useState } from "react";

export default function CompanyIntro() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0b] to-black" />

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gold-500)]/5 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-[var(--gold-500)]/5 blur-[200px] rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        {/* HEADING */}
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mt-6 mb-8 text-gradient-gold transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Who We Are
        </h2>

        {/* CONTENT CARD WRAPPER */}
        <div className="space-y-6">

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
            The Prime Crafters is a specialized AI automation agency built for
            modern businesses that are ready to stop doing things manually and
            start scaling intelligently.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
            We work with businesses across industries — from healthcare and real
            estate to e-commerce and professional services — building AI-powered
            systems that automate their most time-consuming operations. Our team
            combines deep technical expertise with a strong understanding of how
            businesses actually run, which means every system we build is
            practical, scalable, and built to deliver real results.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-4xl mx-auto">
            Since day one, our focus has been simple: use AI to help businesses do
            more with less — less time, less overhead, and less friction.
          </p>

        </div>

        {/* STATS — PREMIUM FLOATING GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 sm:mt-20">

          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "AI Automation" },
            { number: "10x", label: "Business Efficiency" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold-500)]/30 hover:shadow-lg hover:shadow-[var(--gold-500)]/10"
            >

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--gold-500)]/5 rounded-3xl blur-xl" />

              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--gold-500)] mb-2 sm:mb-3">
                  {item.number}
                </div>

                <div className="text-xs sm:text-sm uppercase tracking-wider text-[var(--text-secondary)] leading-relaxed">
                  {item.label}
                </div>
              </div>

              {/* subtle bottom pulse line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-500)]/40 to-transparent opacity-30" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
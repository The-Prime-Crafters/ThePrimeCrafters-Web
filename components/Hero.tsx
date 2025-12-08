"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial Gradient following mouse */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.15), transparent 40%)`,
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl animate-float delay-500" />

        {/* Golden lines */}
        <div className="absolute top-0 left-1/2 w-px h-40 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-[#D4AF37] to-transparent opacity-20" />
        <div className="absolute bottom-0 right-1/3 w-px h-48 bg-gradient-to-t from-transparent via-[#D4AF37] to-transparent opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)] mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-sm text-[#D4AF37] font-medium tracking-wide">
            Proven Track Record of Excellence
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-[var(--font-cormorant)] animate-fade-in-up">
          <span className="text-[#f5f5f5]">Transform Your Business</span>
          <br />
          <span className="text-gradient-gold">with AI Automation</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          We deliver cutting-edge AI solutions that streamline operations, boost
          efficiency, and drive measurable results. Join the businesses that
          have already transformed with PrimeCrafters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a href="#contact" className="btn-primary text-base group">
            <span className="flex items-center gap-2">
              Book a Consultation
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
          <a href="#projects" className="btn-secondary text-base group">
            <span className="flex items-center gap-2">
              View Our Work
              <svg
                className="w-5 h-5 group-hover:rotate-45 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="text-xs text-[#737373] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[#404040] flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}


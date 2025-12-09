"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 6,
    suffix: "+",
    label: "Projects Delivered",
    description: "Successfully completed automation projects",
  },
  {
    value: 6,
    suffix: "+",
    label: "Clients Served",
    description: "Trusted by businesses worldwide",
  },
  {
    value: 500,
    suffix: "+",
    label: "Hours Saved",
    description: "Automated manual work hours per client",
  },
  {
    value: 180,
    suffix: "%",
    label: "Average ROI",
    description: "Return on investment for clients",
  },
];

function useCountUp(
  target: number,
  duration: number = 2000,
  start: boolean = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(target * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, start]);

  return count;
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof stats)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2500, isVisible);

  const formatNumber = (num: number) => {
    if (stat.value >= 1 && stat.value < 10) {
      return num.toFixed(1);
    }
    return Math.round(num).toLocaleString();
  };

  return (
    <div
      className={`relative group p-8 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] text-center card-hover transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(212,175,55,0.05)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Number */}
        <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-gold font-[var(--font-cormorant)] mb-3 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-500">
          {formatNumber(count)}
          {stat.suffix}
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#737373]">{stat.description}</p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
    </div>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent" />

        {/* Floating particles */}
        <div className="absolute top-20 left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full animate-float opacity-40" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-float delay-300 opacity-30" />
        <div className="absolute bottom-32 left-[20%] w-1 h-1 bg-[#D4AF37] rounded-full animate-float delay-500 opacity-50" />
        <div className="absolute bottom-20 right-[25%] w-2 h-2 bg-[#D4AF37] rounded-full animate-float delay-700 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6">
            <span className="text-[#f5f5f5]">Our </span>
            <span className="text-gradient-gold">Impact</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            Numbers that speak to our commitment to delivering exceptional
            results for every client.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


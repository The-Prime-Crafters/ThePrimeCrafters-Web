"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "PrimeCrafters transformed our entire operations. The AI automation solutions they implemented reduced our processing time by 80% and saved us millions in operational costs.",
    author: "Sarah Mitchell",
    role: "CTO",
    company: "TechCorp Industries",
    avatar: "SM",
  },
  {
    quote:
      "Working with PrimeCrafters was a game-changer. Their team understood our complex requirements and delivered a solution that exceeded our expectations. Truly exceptional.",
    author: "Michael Chen",
    role: "VP of Operations",
    company: "InnovateLab",
    avatar: "MC",
  },
  {
    quote:
      "The ROI we've seen from PrimeCrafters' automation solutions has been remarkable. They don't just deliver technology—they deliver real business results.",
    author: "Emily Rodriguez",
    role: "CEO",
    company: "FutureSystems",
    avatar: "ER",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />

        {/* Large quotation mark */}
        <div className="absolute top-20 left-10 text-[200px] font-serif text-[#D4AF37] opacity-[0.03] leading-none select-none">
          &ldquo;
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6">
            <span className="text-[#f5f5f5]">What Our </span>
            <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8"
                }`}
              >
                <div className="p-10 md:p-14 rounded-3xl glass-card border-[rgba(255,255,255,0.08)] relative hover:border-[rgba(212,175,55,0.3)] transition-all duration-500">
                  {/* Gold accent line */}
                  <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                  {/* Quote Icon */}
                  <div className="mb-8">
                    <svg
                      className="w-14 h-14 text-[#D4AF37] opacity-50 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl text-[#f5f5f5] leading-relaxed mb-10 font-[var(--font-cormorant)]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-5">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full glass-card border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      {testimonial.avatar}
                    </div>

                    <div>
                      <div className="text-[#f5f5f5] font-semibold text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-[#737373] text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                    : "w-3 h-3 bg-[#404040] rounded-full hover:bg-[#737373] hover:scale-125"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


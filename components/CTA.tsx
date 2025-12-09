"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", company: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.02] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-block text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-cormorant)] mb-6">
              <span className="text-[#f5f5f5]">Ready to Transform</span>
              <br />
              <span className="text-gradient-gold">Your Business?</span>
            </h2>
            <p className="text-[#a3a3a3] text-lg mb-8 leading-relaxed">
              Let&apos;s discuss how AI automation can revolutionize your
              operations. Our team is ready to help you achieve extraordinary
              results.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl glass text-[#D4AF37] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#737373]">Email Us</div>
                  <a
                    href="mailto:aman@theprimecrafters.com"
                    className="text-[#f5f5f5] hover:text-[#D4AF37] transition-colors text-lg"
                  >
                    aman@theprimecrafters.com
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
              }`}
          >
            <form
              onSubmit={handleSubmit}
              className="p-10 rounded-3xl glass-card border-[rgba(255,255,255,0.08)]"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full glass flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                    <svg
                      className="w-10 h-10 text-[#D4AF37]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#a3a3a3]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-8 font-[var(--font-cormorant)]">
                    Send Us a Message
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm text-[#a3a3a3] mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm text-[#a3a3a3] mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm text-[#a3a3a3] mb-2"
                      >
                        How Can We Help?
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-xl glass border border-[rgba(255,255,255,0.1)] text-[#f5f5f5] placeholder-[#525252] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


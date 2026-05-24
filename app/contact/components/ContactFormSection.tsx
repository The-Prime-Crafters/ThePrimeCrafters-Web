"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Free discovery consultation",
    description: "A no-cost 30-min call to map your automation opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Custom AI strategy",
    description: "Tailored recommendations built around your business goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Dedicated implementation support",
    description: "Our team stays with you from kickoff to launch and beyond.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "No-obligation discussion",
    description: "Zero pressure. Walk away with clarity regardless of next steps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

type FormState = "idle" | "submitting" | "success";

export default function ContactFormSection() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1800);
  };

  const inputBase =
    "w-full rounded-xl border bg-black/20 px-5 py-4 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-300 sm:text-base";

  const inputStyle = (name: string) => ({
    borderColor: focused === name ? "rgba(201,168,76,0.7)" : "rgba(255,255,255,0.08)",
    boxShadow: focused === name ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
  });

  return (
    <section className="relative w-full overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      {/* Ambient blob */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)", filter: "blur(80px)" }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl">
        <div
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.65s ease, transform 0.65s ease",
          }}
        >
          {/* ── Left column ── */}
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex items-center gap-2.5">
          
              
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Book a Free{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF61 0%, #A87C3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Consultation
              </span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-neutral-400 sm:text-base lg:text-lg">
              Fill out the form below and our team will reach out within 24 hours to discuss your automation goals, understand your current workflows, and map out exactly how AI can move your business forward.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(201,168,76,0.2)] hover:bg-white/[0.05]"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.55s ease ${0.1 + i * 0.08}s, transform 0.55s ease ${0.1 + i * 0.08}s`,
                  }}
                >
                  <div
                    className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border"
                    style={{ color: "#C9A84C", background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.2)" }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/90">{b.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-500">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-2 w-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
              <span className="text-xs text-neutral-500">Team online · Average response within 24 hours</span>
            </div>
          </div>

          {/* ── Right column — Form ── */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/[0.09] p-7 backdrop-blur-xl sm:p-10"
            style={{
              background: "linear-gradient(160deg, rgba(201,168,76,0.07) 0%, rgba(255,255,255,0.02) 60%, rgba(0,0,0,0.1) 100%)",
            }}
          >
            {/* Top accent */}
            <div
              className="absolute left-0 top-0 h-px w-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
            />

            {formState === "success" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border"
                  style={{ color: "#C9A84C", background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.3)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Sent!</h3>
                <p className="mt-3 max-w-xs text-sm text-neutral-400">
                  Thanks for reaching out. We'll be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="mb-6 text-lg font-semibold text-white/90 sm:text-xl">Send us a message</h3>

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-neutral-400 sm:text-sm">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className={inputBase}
                      style={inputStyle("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-neutral-400 sm:text-sm">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputBase}
                      style={inputStyle("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-neutral-400 sm:text-sm">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className={inputBase}
                    style={inputStyle("company")}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-neutral-400 sm:text-sm">Services Needed</label>
                  <select
                    className={inputBase}
                    style={{ ...inputStyle("service"), colorScheme: "dark" }}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select a service…</option>
                    <option>AI Voice Agents</option>
                    <option>Workflow Automation</option>
                    <option>AI Chatbots</option>
                    <option>CRM Integrations</option>
                    <option>Custom AI Systems</option>
                    <option>AI Assistants</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-xs font-medium text-neutral-400 sm:text-sm">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and what you want to automate…"
                    className={`${inputBase} resize-none`}
                    style={inputStyle("message")}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="group relative w-full overflow-hidden rounded-full py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:scale-100 disabled:opacity-80 sm:text-base"
                  style={{ background: "linear-gradient(135deg, #D4AF61, #A87C3E)" }}
                >
                  {/* Shimmer */}
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    {formState === "submitting" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center text-xs text-neutral-600">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
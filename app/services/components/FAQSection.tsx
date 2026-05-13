"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What industries benefit from AI automation?",
    answer:
      "Healthcare, SaaS, real estate, e-commerce, local businesses, and customer support industries benefit significantly from AI automation.",
  },
  {
    question: "What is an AI voice agent?",
    answer:
      "AI voice agents automate inbound and outbound calls for support, lead qualification, scheduling, and customer communication.",
  },
  {
    question: "Can AI integrate with our CRM?",
    answer:
      "Yes, we build custom integrations with CRMs, APIs, and business systems.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Project timelines depend on complexity, but most implementations take between 2–8 weeks.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">

      {/* soft system glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-[clamp(2rem,5vw,4rem)]">
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            Knowledge Base
          </span>

          <h2
            className="font-bold mt-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about AI automation systems and implementation.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 cursor-pointer overflow-hidden
                  ${isOpen
                    ? "border-[var(--gold-500)]/40"
                    : "border-[var(--border-subtle)]"
                  }`}
                onClick={() => toggle(index)}
              >

                {/* hover/open glow */}
                <div
                  className={`absolute inset-0 transition opacity-0 group-hover:opacity-100 ${
                    isOpen ? "opacity-100" : ""
                  } bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.10),transparent_70%)]`}
                />

                {/* QUESTION */}
                <div className="relative flex items-center justify-between">
                  <h3
                    className={`text-sm md:text-lg font-semibold transition ${
                      isOpen ? "text-white" : "text-white/90"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <span className="text-[var(--gold-500)] text-xl transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`relative text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mt-4 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
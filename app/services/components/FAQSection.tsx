"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What industries benefit from AI automation?",
    answer:
      "Healthcare, SaaS, real estate, e-commerce, local businesses, and any business with repetitive workflows or high customer interaction volume.",
  },
  {
    question: "What is an AI voice agent?",
    answer:
      "An AI system that handles inbound and outbound calls automatically — qualifying leads, booking appointments, and managing customer interactions 24/7.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most projects complete in 2–8 weeks. Simple automations can go live in 2 weeks; complex multi-platform systems take 4–8 weeks.",
  },
  {
    question: "Can AI integrate with our existing CRM?",
    answer:
      "Yes. We build custom integrations with HubSpot, Salesforce, GoHighLevel, and others — syncing data in real time without disrupting your current setup.",
  },
  {
    question: "Do you build custom AI solutions?",
    answer:
      "Every system is built from scratch for your specific workflows — never off-the-shelf software.",
  },
  {
    question: "What business processes can be automated?",
    answer:
      "Lead follow-up, appointment booking, customer support, CRM updates, onboarding, reporting, task assignment, and data sync across platforms.",
  },
  {
    question: "How much does AI automation cost?",
    answer:
      "Pricing is based on project scope. We provide custom quotes after a free discovery call. Most clients see full ROI within 90 days.",
  },
  {
    question: "Are AI chatbots customizable?",
    answer:
      "Fully. Trained on your data, brand voice, and conversation logic — deployable on any platform.",
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
        

          <h2
            className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[var(--text-secondary)] mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about AI automation, implementation, and working with The Prime Crafters.
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
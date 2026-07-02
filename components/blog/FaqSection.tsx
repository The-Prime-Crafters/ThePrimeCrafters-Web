'use client'

import { useState } from 'react'

type Faq = {
  question: string
  answer: string
}

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="mt-20 pt-16 border-t border-white/5">
      <div className="flex items-center gap-3 mb-10">
        <span className="w-6 h-px bg-[#D4AF37]" />
        <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">FAQs</p>
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-10"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#0f0f0f]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white text-base md:text-lg font-bold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-white/70 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
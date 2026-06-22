// components/services/workflow-optimization/WorkflowOptimizationFAQ.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What are AI workflow optimization services?',
    a: 'AI workflow optimization services map how work currently moves through a business, identify bottlenecks and unclear ownership, and redesign the process so it runs smoothly with AI support added where it creates real value. This includes workflow audits, process mapping, automation roadmaps, and post launch performance tracking.',
    href: '/services',
    linkLabel: 'Our Services →',
  },
  {
    q: 'What is the difference between workflow optimization and process automation?',
    a: 'Workflow optimization comes first. It maps the process, clarifies ownership, and defines the logic a workflow should follow. Process automation comes after, building the actual triggers, integrations, and automated steps on top of that mapped logic. Automating a workflow before it has been optimised usually just speeds up a broken process.',
    href: '/services/process-automation',
    linkLabel: 'Process Automation →',
  },
  {
    q: 'What business workflows can ThePrimeCrafters optimize?',
    a: 'Sales and lead handoff workflows, customer support and ticket workflows, operations and admin workflows, approval and review workflows, reporting and dashboard workflows, CRM and data sync workflows, AI agent and chatbot workflows, and internal knowledge and SOP workflows.',
  },
  {
    q: 'How do I know if my business needs workflow optimization?',
    a: 'If your team repeats the same manual tasks daily, ownership of tasks or leads is unclear, approvals regularly stall, your tools do not share data automatically, follow ups get missed, or you have automation ideas with no clear process to plug them into, workflow optimization will likely deliver measurable improvement.',
  },
  {
    q: 'What does the workflow optimization process look like?',
    a: 'Six steps: workflow discovery and bottleneck audit, process mapping and priority scoring, automation and AI opportunity roadmap, workflow redesign and tool alignment, build test and document improvements, and launch monitor and improve. No step is skipped.',
  },
  {
    q: 'Can ThePrimeCrafters connect workflow optimization with AI and automation tools?',
    a: 'Yes. Every optimised workflow is designed to support AI tools for summarising, routing, scoring, and drafting, and connects to automation platforms and existing business software such as CRMs, forms, email, and calendars.',
    href: '/services/ai-integration',
    linkLabel: 'AI Integration →',
  },
  {
    q: 'Does workflow optimization require replacing our existing tools?',
    a: 'No. The Prime Crafters improves how current tools and teams work together first. New tools are only recommended where a genuine gap exists, not as a default starting point.',
  },
  {
    q: 'How long does a workflow optimization project take?',
    a: 'Smaller focused workflows can be mapped, redesigned, and launched within a few weeks. Larger multi team workflows with several tool integrations take longer. Timeline is confirmed during discovery based on the specific scope.',
    href: '/contact',
    linkLabel: 'Discuss Your Project →',
  },
  {
    q: 'How much do workflow optimization services cost?',
    a: 'Cost depends on the number of workflows involved, the complexity of the bottlenecks, the integrations required, and the scope of the automation roadmap. The Prime Crafters provides a scoped proposal after reviewing the workflow during a free strategy call.',
    href: '/contact',
    linkLabel: 'Book a Consultation →',
  },
  {
    q: 'Which teams benefit most from AI workflow optimization?',
    a: 'Sales, customer support, operations, marketing and lead generation, healthcare admin teams, and service businesses all see measurable improvement when they have repeatable workflows, unclear ownership, or high volumes of manual coordination.',
  },
  {
    q: 'How do you measure whether workflow optimization is working?',
    a: 'Success is measured against KPIs defined before the project starts, such as response time, manual hours saved, handoff delay reduction, error rate, and ticket or approval resolution speed, tracked after launch and refined over time.',
  },
  {
    q: 'Why choose ThePrimeCrafters for AI workflow optimization services?',
    a: 'The Prime Crafters starts with the workflow before the tool, designs processes that are ready for AI and automation, connects optimization to measurable business outcomes, tests handoffs and edge cases before launch, and supports the full lifecycle from strategy through ongoing improvement.',
    href: '/about-us',
    linkLabel: 'About Us →',
    href2: '/case-studies',
    linkLabel2: 'View Case Studies →',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function WorkflowOptimizationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      style={{
        background: '#0F0F0F',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top border accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          FAQ
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          AI Workflow Optimization FAQs
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 56px',
          }}
        >
          Common questions about AI workflow optimization services, how ThePrimeCrafters works, and what to expect from an optimization project.
        </p>

        {/* FAQ Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '64px',
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                style={{
                  background: isOpen
                    ? 'rgba(201,168,76,0.05)'
                    : 'rgba(255,255,255,0.03)',
                  border: isOpen
                    ? '1px solid rgba(201,168,76,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '22px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '15px',
                      fontWeight: isOpen ? 600 : 500,
                      color: isOpen ? '#FFFFFF' : '#CCCCCC',
                      margin: 0,
                      lineHeight: 1.45,
                      flex: 1,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      color: '#C9A84C',
                      fontSize: '20px',
                      fontWeight: 300,
                      flexShrink: 0,
                      lineHeight: 1,
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer panel */}
                {isOpen && (
                  <div style={{ padding: '0 24px 24px' }}>
                    {/* Divider */}
                    <div
                      style={{
                        height: '1px',
                        background: 'rgba(201,168,76,0.15)',
                        marginBottom: '20px',
                      }}
                    />

                    {/* Answer */}
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '14px',
                        color: '#909090',
                        lineHeight: 1.85,
                        margin: 0,
                        marginBottom: faq.href || faq.href2 ? '16px' : '0',
                      }}
                    >
                      {faq.a}
                    </p>

                    {/* Optional links */}
                    {(faq.href || faq.href2) && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '20px',
                          flexWrap: 'wrap',
                          marginTop: '4px',
                        }}
                      >
                        {faq.href && (
                          <Link
                            href={faq.href}
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#C9A84C',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {faq.linkLabel}
                          </Link>
                        )}
                        {faq.href2 && (
                          <Link
                            href={faq.href2}
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#C9A84C',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {faq.linkLabel2}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              color: '#888888',
              margin: 0,
            }}
          >
            Have a question not covered here? Book a free workflow optimization strategy call and we will walk you through what is possible for your operation.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0A0A0A',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a Free Workflow Optimization Strategy Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
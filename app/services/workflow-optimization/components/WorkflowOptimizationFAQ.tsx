// components/services/workflow-optimization/WorkflowOptimizationFAQ.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What are AI workflow optimization services?',
    a: 'AI workflow optimization services map, redesign, and improve business processes using workflow audits, bottleneck analysis, automation planning, AI support integration, and KPI tracking. The goal is to help teams move work faster with fewer manual steps — by fixing the process before adding tools or automation on top of it.',
  },
  {
    q: 'What is the difference between workflow optimization and process automation?',
    a: 'Workflow optimization maps and redesigns how work moves — clarifying steps, owners, handoffs, rules, and exceptions. Process automation then builds the tools and triggers that execute the optimised workflow automatically. Optimization comes first. Automating a broken workflow just breaks it faster and at greater scale.',
    href: '/services/process-automation',
    linkLabel: 'Explore Process Automation →',
  },
  {
    q: 'What business workflows can ThePrimeCrafters optimize?',
    a: 'ThePrimeCrafters optimises sales and lead handoff workflows, customer support and ticket workflows, operations and admin workflows, approval and review workflows, reporting and dashboard workflows, CRM and data sync workflows, AI agent and chatbot workflows, and internal knowledge and SOP workflows.',
    href: '/services',
    linkLabel: 'View All Services →',
  },
  {
    q: 'How do I know if my business needs workflow optimization?',
    a: 'Common signals include teams repeating the same manual tasks daily, leads or requests falling through the cracks, approvals that stall without a clear owner, data living across disconnected tools, automation that keeps breaking, missed follow-ups, and reporting that requires manual compilation. If any of these match, workflow optimization is likely the right starting point.',
    href: '/contact',
    linkLabel: 'Talk to a Workflow Expert →',
  },
  {
    q: 'What does the workflow optimization process look like?',
    a: 'The process includes six steps: workflow discovery and bottleneck audit, process mapping and priority scoring, automation and AI opportunity roadmap, workflow redesign and tool alignment, build and test improvements, and post-launch monitoring and optimization. Each step is completed before moving to the next — workflows are not deployed until validated against real usage scenarios.',
  },
  {
    q: 'Can ThePrimeCrafters connect workflow optimization with AI and automation tools?',
    a: 'Yes. Once a workflow is mapped and optimised, ThePrimeCrafters identifies where AI support, automation triggers, and system integrations add the most value — then builds or configures those connections. Workflow optimization and AI integration work together as part of the same project or in sequence.',
    href: '/services/ai-integration',
    linkLabel: 'Explore AI Integration Services →',
  },
  {
    q: 'Does workflow optimization require replacing our existing tools?',
    a: 'Not usually. Most workflow optimization projects work within the tools your team already uses — aligning them better, removing unnecessary steps, and connecting handoffs between them. Tool changes are only recommended when an existing tool is genuinely blocking the workflow from working effectively.',
  },
  {
    q: 'How long does a workflow optimization project take?',
    a: 'Timeline depends on the number of workflows involved, their complexity, and whether automation or AI integration is included. A focused single-workflow audit and redesign can be completed in a few weeks. Larger multi-workflow projects with automation and AI integration take longer. A confirmed timeline is provided after the discovery and audit stage.',
  },
  {
    q: 'How much do workflow optimization services cost?',
    a: 'Cost is scoped based on the number of workflows, complexity of the bottlenecks, automation requirements, and AI integration scope. ThePrimeCrafters provides a detailed proposal after reviewing your workflows and goals during a free strategy call.',
    href: '/contact',
    linkLabel: 'Book a Free Strategy Call →',
  },
  {
    q: 'Which teams benefit most from AI workflow optimization?',
    a: 'Sales teams, customer support teams, operations teams, marketing and lead generation teams, healthcare and clinic admin teams, and service businesses all benefit when they have repeatable workflows with manual handoffs, unclear ownership, disconnected tools, or high administrative overhead that slows response time and team output.',
  },
  {
    q: 'How do you measure whether workflow optimization is working?',
    a: 'Success is measured against workflow KPIs agreed before launch — such as manual hours reduced, handoff speed, lead response time, approval cycle time, error rate, CRM update accuracy, and team output volume. Post-launch monitoring tracks these metrics so improvements can be made based on real operational data.',
  },
  {
    q: 'Why choose ThePrimeCrafters for AI workflow optimization services?',
    a: 'ThePrimeCrafters maps the workflow before recommending any tool, designs processes that are ready for AI and automation, connects optimization to measurable business outcomes, tests handoffs and edge cases before launch, and supports the full lifecycle from strategy through monitoring and improvement.',
    href: '/about-us',
    linkLabel: 'About ThePrimeCrafters →',
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
            Have a question not covered here?
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
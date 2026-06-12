// components/services/ai-integration/AIIntegrationFAQ.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What are AI integration services?',
    a: 'AI integration services design and implement connections between AI systems and the business tools your team already uses — CRMs, websites, APIs, databases, email platforms, calendars, and internal software. Instead of AI output sitting in a separate tool, integrated AI updates records, routes tasks, triggers notifications, and supports decisions directly inside your real workflows.',
  },
  {
    q: 'What systems can ThePrimeCrafters connect with AI?',
    a: 'ThePrimeCrafters connects AI with CRMs and sales platforms, website forms and lead capture tools, databases and spreadsheets, email and calendar platforms, communication tools like Slack and WhatsApp, custom APIs and internal software, AI voice agents and chatbots, reporting and dashboard systems, and internal knowledge bases and document libraries.',
    href: '/services',
    linkLabel: 'View All Services →',
  },
  {
    q: 'Can AI integration connect with my CRM?',
    a: 'Yes. CRM integration is one of the most common and highest-impact connections ThePrimeCrafters builds. Integrations can create and update records, sync pipeline stages, log call summaries, score leads, route prospects, and trigger follow-up sequences — all automatically as data flows through connected workflows.',
    href: '/case-study/lead-generation-tools',
    linkLabel: 'See CRM Integration Case Study →',
  },
  {
    q: 'How is AI integration different from basic automation connectors?',
    a: 'Basic connectors follow simple if/then triggers and break when logic gets complex. AI integration adds intelligent layers — classification, summarisation, scoring, routing, and drafting — while handling data mapping, API authentication, error handling, permissions, edge cases, and human approval steps. It is built for real business workflows, not just simple data transfers between two tools.',
  },
  {
    q: 'Can ThePrimeCrafters integrate AI voice agents and chatbots with business tools?',
    a: 'Yes. AI voice agents and chatbots can be connected with CRMs, calendars, ticket systems, lead records, call summary workflows, and support platforms. Every call or chat interaction can automatically update records, route leads, create tasks, and trigger the right follow-up — without manual entry after the conversation ends.',
    href: '/case-study/spectrum-voice-agent',
    linkLabel: 'See Voice Agent Integration Case Study →',
  },
  {
    q: 'What is the process for building an AI integration?',
    a: 'The process includes six structured steps: a system and workflow audit, integration opportunity mapping, data flow and API architecture design, building connectors and automation logic, testing data quality and edge cases, and post-launch monitoring and optimization. Every step is completed before moving to the next — integrations are not deployed until they are validated against real data and scenarios.',
  },
  {
    q: 'Do AI integrations require replacing our existing software?',
    a: 'No. AI integrations are built to connect with the CRMs, websites, databases, communication tools, and internal systems your team already uses. The goal is to add AI capability into your current tech stack — not to force a software migration or replace the tools your business depends on.',
  },
  {
    q: 'How long does an AI integration project take?',
    a: 'Timeline depends on the number of systems involved, the complexity of the data flows, and the AI logic required. Focused single-system integrations can launch in a few weeks. Multi-system integrations with custom API work, error handling, and human approval paths take longer. A confirmed timeline is provided after the system audit and workflow mapping stage.',
  },
  {
    q: 'How much do AI integration services cost?',
    a: 'Cost is scoped based on workflow complexity, number of integrations, AI logic required, and rollout scope. ThePrimeCrafters provides a detailed proposal after reviewing your systems and goals during a free strategy call — not a generic price list.',
    href: '/contact',
    linkLabel: 'Book a Free Strategy Call →',
  },
  {
    q: 'Are AI integrations safe for sensitive business workflows?',
    a: 'Yes. Integration design includes permission controls, access scoping, error handling, audit-friendly logs, and human-in-the-loop approval paths for sensitive decisions. Integrations are tested for data quality, duplicate records, failed syncs, and permission mismatches before going live. Healthcare and compliance-sensitive workflows are scoped carefully against the specific environment and requirements.',
  },
  {
    q: 'How do you measure whether an AI integration is working?',
    a: 'Success is measured against workflow KPIs agreed before launch — such as records synced accurately, manual hours reduced, lead response time, error rate, CRM update accuracy, and task completion speed. Post-launch monitoring tracks integration health, data quality, and workflow performance so improvements can be made based on real usage data.',
  },
  {
    q: 'Why choose ThePrimeCrafters for AI integration services?',
    a: 'ThePrimeCrafters maps systems and data flows before building, integrates with your existing tools rather than replacing them, designs for real workflow logic including exceptions and approvals, tests thoroughly before launch, and supports the full project lifecycle from strategy through optimization. Every integration is built around how your business actually operates.',
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

export default function AIIntegrationFAQ() {
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

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
          AI Integration Services FAQs
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
          Common questions about AI integration services, how ThePrimeCrafters works, and what to expect from an integration project.
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
                      transition: 'color 0.2s',
                      flex: 1,
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

                    {/* Answer text — crawlable HTML */}
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '14px',
                        color: '#909090',
                        lineHeight: 1.85,
                        margin: 0,
                        marginBottom:
                          faq.href || faq.href2 ? '16px' : '0',
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
            Book a Free AI Integration Strategy Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
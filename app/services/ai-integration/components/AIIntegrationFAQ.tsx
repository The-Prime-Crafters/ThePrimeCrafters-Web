'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
  href2?: string;
  linkLabel2?: string;
}

const faqs: FAQItem[] = [
  {
    q: 'What is an AI agent?',
    a: 'AI agents are software systems that can understand requests, take approved actions, use tools, and complete multi step workflows, without a human handling each step manually. Unlike a basic chatbot that returns scripted replies, an AI agent can qualify a lead, update a CRM record, book an appointment, and send a confirmation in a single conversation.',
  },
  {
    q: 'What are AI agent development services?',
    a: 'AI agent development services cover the full process of building a custom AI agent for your business, scoping the use case, designing the conversation logic, integrating with your tools, testing edge cases, deploying, and improving performance over time. ThePrimeCrafters handles this end to end.',
  },
  {
    q: 'What types of AI agents can ThePrimeCrafters build?',
    a: 'Voice agents, chat agents, sales and lead qualification agents, booking agents, customer support and ticket routing agents, CRM and follow up agents, internal knowledge assistants, and reporting agents. Each is built for a specific business workflow and connected to the relevant tools.',
  },
  {
    q: 'How is an AI agent different from a basic chatbot?',
    a: 'Basic chatbots return keyword matched responses from a fixed script. AI agents understand context, handle multi turn conversations, take real actions (updating CRMs, booking appointments, routing tickets), escalate appropriately, and operate within business defined rules and guardrails.',
  },
  {
    q: 'Can AI agents integrate with my existing business tools?',
    a: 'Yes. ThePrimeCrafters builds agents that integrate with CRMs, calendars, ticketing systems, forms, email platforms, Slack, WhatsApp, databases, and custom APIs. Integration is part of the core build, not an optional add on.',
    href: '/services/ai-integration',
    linkLabel: 'Explore AI Integration →',
  },
  {
    q: 'Can an AI agent handle inbound phone calls and bookings?',
    a: 'Yes. AI voice agents can answer inbound calls, qualify callers, collect booking details, check availability, create appointments in connected calendar systems, send confirmations, and route calls that need human attention, available 24 hours a day.',
    href: '/case-study/spectrum-voice-agent',
    linkLabel: 'See Voice Agent Case Study →',
  },
  {
    q: 'Can AI agents qualify leads and follow up automatically?',
    a: 'Yes. Lead qualification agents can engage inbound leads immediately, ask screening questions, score intent, enrich CRM records, send alerts to sales reps, and trigger follow up sequences, all without waiting on a human to be available.',
    href: '/case-study/lead-generation-tools',
    linkLabel: 'See Lead Generation Case Study →',
  },
  {
    q: 'What is the process for building a custom AI agent?',
    a: 'Six steps: workflow discovery, use case and ROI mapping, conversation design and knowledge setup, tool integration and build, testing and QA, then launch and ongoing optimization. Each step is structured to reduce risk and ensure the agent works in real conditions before going live.',
  },
  {
    q: 'Will AI agents replace my team?',
    a: 'No. AI agents handle high volume, repetitive conversations and tasks that do not require human judgment, freeing staff to focus on complex work, relationship building, and decisions that actually need a person. They extend team capacity rather than replacing it.',
  },
  {
    q: 'Are AI agents safe for sensitive business workflows?',
    a: 'When designed properly, yes. ThePrimeCrafters builds agents with defined guardrails, fallback rules, escalation paths, and human review gates for sensitive actions. Agents operate only within approved knowledge and permissions, with audit logs maintained throughout.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: 'Timeline depends on the complexity of the workflow, number of integrations, and testing requirements. Straightforward agents with clear scope and a single integration can launch in a few weeks. More complex multi system agents take longer. Discovery and scoping clarifies the timeline before build begins.',
  },
  {
    q: 'How much do AI agent development services cost?',
    a: 'Cost depends on scope, complexity, integrations, and ongoing support requirements. ThePrimeCrafters scopes each project individually rather than applying fixed pricing. A strategy call is the best starting point to understand what your workflow needs and what a realistic investment looks like.',
    href: '/contact',
    linkLabel: 'Book a Free Strategy Call →',
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
          AI Agent Development Services FAQs
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
          Common questions about AI agents, how they work, what they connect to, and what to expect from a custom AI agent project.
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
            Book a Free AI Agent Strategy Call →
          </Link>
        </div>
      </div>
    </section>
  );
}

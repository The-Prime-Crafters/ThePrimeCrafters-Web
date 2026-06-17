// components/services/ai-agents/AIAgentsFAQ.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What are AI agents?',
    a: 'AI agents are software systems that can understand requests, apply business logic, take approved actions, and complete workflows automatically. Unlike basic chatbots that follow fixed scripts, AI agents handle multi-turn conversations, access connected tools, make decisions based on context, and escalate to humans when they reach the boundaries of their approved scope.',
  },
  {
    q: 'What are AI agent development services?',
    a: 'AI agent development services design, build, integrate, test, and deploy custom AI agents for business use. This includes conversation design, knowledge base setup, guardrail definition, tool integration, CRM connection, voice or chat deployment, QA testing, launch, monitoring, and ongoing optimization — all scoped around real business workflows.',
  },
  {
    q: 'What types of AI agents can ThePrimeCrafters build?',
    a: 'ThePrimeCrafters builds AI voice agents for inbound and outbound calls, AI chat agents for websites and messaging platforms, sales and lead qualification agents, booking and scheduling agents, customer support and ticket routing agents, CRM and follow-up agents, internal knowledge and operations agents, and reporting and decision-support agents.',
    href: '/services',
    linkLabel: 'View All Services →',
  },
  {
    q: 'How are AI agents different from basic chatbots?',
    a: 'Basic chatbots follow keyword triggers and fixed decision trees. They break immediately when a conversation goes outside the scripted path. AI agents understand context, handle multi-turn conversations, apply business rules, access connected tools like CRMs and calendars, take approved actions, and escalate correctly when they reach their limits — making them suitable for real business workflows rather than simple FAQ pages.',
  },
  {
    q: 'Can AI agents connect with our CRM and business tools?',
    a: 'Yes. AI agents built by ThePrimeCrafters are connected to the tools your team already uses — CRMs, calendars, ticket systems, databases, websites, forms, email platforms, Slack, WhatsApp, and custom APIs. Every conversation can create records, update pipeline stages, log summaries, trigger tasks, and send alerts without manual entry.',
    href: '/services/ai-integration',
    linkLabel: 'Explore AI Integration Services →',
  },
  {
    q: 'Can AI voice agents handle calls and appointment booking?',
    a: 'Yes. AI voice agents can answer inbound calls, handle FAQs, qualify leads, collect booking details, check availability, create appointments, send confirmations, log call summaries, and route complex cases to human staff. They are deployed on real phone numbers and work inside your existing booking and CRM workflows.',
    href: '/case-study/rv-park-voice-agent',
    linkLabel: 'See Voice Agent Case Study →',
  },
  {
    q: 'Can AI agents help with lead qualification and sales follow-up?',
    a: 'Yes. Sales and lead qualification agents can respond to inbound leads instantly, ask screening questions, score intent, enrich records, notify the right sales team member, and push qualified prospects into the CRM — without waiting on manual review. Follow-up sequences can also be triggered automatically based on lead status and conversation outcome.',
    href: '/case-study/lead-generation-tools',
    linkLabel: 'See Lead Generation Case Study →',
  },
  {
    q: 'What is the process for building a custom AI agent?',
    a: 'The process includes six steps: workflow and conversation discovery, agent use case and ROI mapping, conversation design with knowledge setup and guardrails, tool integration and agent build, testing and QA across real scenarios and edge cases, and post-launch monitoring and optimization. Each step is completed before moving to the next — agents are not deployed until they pass QA against real usage scenarios.',
  },
  {
    q: 'Do AI agents replace staff?',
    a: 'No. AI agents handle the high-volume, repetitive, and time-sensitive parts of workflows — answering common questions, collecting details, updating records, routing requests, and triggering follow-ups — so human staff can focus on complex work that requires judgment, relationship management, and decisions that are outside the agent scope. Agents work alongside teams, not instead of them.',
  },
  {
    q: 'Are AI agents safe for sensitive business workflows?',
    a: 'Yes, when designed correctly. ThePrimeCrafters defines guardrails, approved knowledge boundaries, fallback rules, escalation paths, permission controls, and human review gates before any agent is deployed. Sensitive actions — such as financial decisions, medical advice, or high-stakes commitments — are always routed to human review rather than handled autonomously.',
  },
  {
    q: 'How long does it take to build an AI agent?',
    a: 'A focused single-use agent — such as an FAQ agent or a lead qualification agent — can be built and deployed in a few weeks. More complex agents with multiple tool integrations, custom conversation flows, CRM connections, and voice deployment take longer. A confirmed timeline is provided after the discovery and use case mapping stage.',
  },
  {
    q: 'How much do AI agent development services cost?',
    a: 'Cost depends on agent complexity, number of use cases, tool integrations required, voice or chat deployment, knowledge base scope, and ongoing optimization needs. ThePrimeCrafters provides a detailed proposal after reviewing your workflows and goals during a free strategy call.',
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

export default function AIAgentsFAQ() {
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
          Frequently Asked Questions About AI Agents
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
          Common questions about AI agents, how ThePrimeCrafters builds them, and what to expect from a custom AI agent project.
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
                        marginBottom: faq.href ? '16px' : '0',
                      }}
                    >
                      {faq.a}
                    </p>

                    {/* Optional link */}
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
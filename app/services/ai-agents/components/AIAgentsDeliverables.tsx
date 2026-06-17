// components/services/ai-agents/AIAgentsDeliverables.tsx
'use client';

import Link from 'next/link';

const deliverables = [
  {
    icon: '📞',
    h3: 'AI Voice Agents for Inbound and Outbound Calls',
    body: 'Handle calls, answer FAQs, qualify leads, book appointments, collect details, log summaries, and route urgent cases to humans — available around the clock without adding headcount.',
    keywords: ['AI Voice Agents', 'Voice Agent Development', 'Call Automation'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '💬',
    h3: 'AI Chat Agents for Websites, WhatsApp, Slack, and Support',
    body: 'Build chat agents trained on business information, brand voice, FAQs, products, services, and routing rules for customer-facing or internal team use across any channel.',
    keywords: ['AI Chat Agents', 'AI Chatbot Development', 'Website AI Assistant'],
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '🎯',
    h3: 'Sales and Lead Qualification Agents',
    body: 'Qualify inbound leads, ask screening questions, score intent, enrich records, send alerts, and push qualified prospects directly into the CRM without manual review.',
    keywords: ['AI Sales Agent', 'Lead Qualification AI Agent', 'CRM Lead Agent'],
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '📅',
    h3: 'Booking and Scheduling Agents',
    body: 'Check availability, collect booking details, create appointments, send confirmations, update calendars, and route complex requests to staff — without a human in the middle.',
    keywords: ['AI Booking Agent', 'Appointment Scheduling AI', 'Calendar Automation'],
    href: '/case-study/rv-park-voice-agent',
  },
  {
    icon: '🎫',
    h3: 'Customer Support and Ticket Routing Agents',
    body: 'Answer common questions, search knowledge bases, create tickets, summarise requests, tag urgency, and escalate issues to the right human when the conversation needs it.',
    keywords: ['Customer Support AI Agent', 'Ticket Routing Automation'],
    href: '/services/process-automation',
  },
  {
    icon: '🔄',
    h3: 'CRM and Follow-Up Agents',
    body: 'Update records, log calls and chats, create tasks, trigger follow-ups, assign owners, and keep sales or support pipelines current without manual entry after every interaction.',
    keywords: ['CRM AI Agent', 'Follow-Up Automation', 'CRM Automation'],
    href: '/services/ai-integration',
  },
  {
    icon: '📚',
    h3: 'Internal Knowledge and Operations Agents',
    body: 'Give teams a private assistant for SOPs, policies, project notes, task handoffs, reporting summaries, and internal questions — scoped carefully to approved knowledge sources.',
    keywords: ['Internal AI Assistant', 'Knowledge Base AI Agent', 'Operations AI Agent'],
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '📊',
    h3: 'Reporting and Decision-Support Agents',
    body: 'Turn activity data into summaries, alerts, daily reports, lead insights, customer trends, and manager-ready updates — without manual compilation across disconnected tools.',
    keywords: ['AI Reporting Agent', 'Business Intelligence AI Agent', 'Automated Reports'],
    href: '/case-studies',
  },
];

export default function AIAgentsDeliverables() {
  return (
    <section
      style={{
        background: '#0F0F0F',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          What We Build
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
            maxWidth: '760px',
            margin: '0 auto 16px',
          }}
        >
          Business AI Agents ThePrimeCrafters Can Build
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '580px',
            margin: '0 auto 56px',
          }}
        >
          From inbound call handling to internal knowledge assistants — every agent is built around real workflows, connected to your tools, and designed to take approved actions automatically.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {deliverables.map((d) => (
            <div
              key={d.h3}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(201,168,76,0.3)';
                el.style.background = 'rgba(201,168,76,0.04)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0,
                }}
              >
                {d.icon}
              </div>

              {/* H3 */}
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {d.h3}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.75,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {d.body}
              </p>

              {/* Keyword pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {d.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(201,168,76,0.7)',
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      borderRadius: '999px',
                      padding: '3px 10px',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={d.href}
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
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link
            href="/services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '13px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
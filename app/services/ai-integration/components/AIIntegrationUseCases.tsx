// components/services/ai-integration/AIIntegrationUseCases.tsx
'use client';

import Link from 'next/link';

const useCases = [
  {
    icon: '📈',
    label: 'Sales Teams',
    h3: 'Sales Teams',
    body: 'Lead capture to CRM, AI lead scoring, call summaries, pipeline updates, follow-up reminders, and sales notifications — all connected without manual entry between tools.',
    keywords: ['Sales CRM Integration', 'AI Sales Automation'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '💬',
    label: 'Customer Support Teams',
    h3: 'Customer Support Teams',
    body: 'AI chatbot to ticket creation, support summaries, escalation alerts, status updates, and knowledge base lookup — so support teams spend less time on admin and more time resolving issues.',
    keywords: ['Support AI Integration', 'Ticket Routing Automation'],
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '⚙️',
    label: 'Operations Teams',
    h3: 'Operations Teams',
    body: 'Task routing, approvals, internal requests, data sync, reporting, alerts, and SOP support across systems — keeping operations moving without bottlenecks between departments.',
    keywords: ['Operations Integration', 'Workflow Automation'],
    href: '/services/workflow-optimization',
  },
  {
    icon: '🎯',
    label: 'Marketing and Lead Generation',
    h3: 'Marketing and Lead Generation Teams',
    body: 'Lead enrichment, campaign handoffs, source tracking, segmentation, scoring, outreach support, and CRM updates — connecting marketing output directly into sales workflows.',
    keywords: ['Lead Generation Integration', 'Marketing Automation AI'],
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '⚕️',
    label: 'Healthcare and Clinic Admin',
    h3: 'Healthcare and Clinic Admin Teams',
    body: 'Intake support, scheduling workflows, admin routing, status updates, and internal documentation support — scoped carefully to your clinic environment and operational context.',
    keywords: ['Clinic Workflow Integration', 'Healthcare Admin Automation'],
    href: '/case-study/lmn8-ketamine-therapy',
    note: 'Healthcare integrations are scoped carefully against your specific environment.',
  },
  {
    icon: '🏪',
    label: 'Service Businesses',
    h3: 'Service Businesses',
    body: 'Call handling to booking tools, quote requests, reminders, customer notes, CRM updates, and review follow-ups — keeping service operations connected from first contact to job completion.',
    keywords: ['Service Business AI Integration', 'Booking Automation'],
    href: '/case-study/rv-park-voice-agent',
  },
];

export default function AIIntegrationUseCases() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
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
          Use Cases
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
            maxWidth: '720px',
            margin: '0 auto 16px',
          }}
        >
          AI Integration Use Cases by Team
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
          Find the integration workflows most relevant to your team and see how connected AI removes manual work while keeping control where it matters.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
            marginBottom: '56px',
          }}
        >
          {useCases.map((uc) => (
            <div
              key={uc.h3}
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
                el.style.background = 'rgba(201,168,76,0.03)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Icon + label row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  {uc.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  {uc.label}
                </span>
              </div>

              {/* H3 */}
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {uc.h3}
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
                {uc.body}
              </p>

              {/* Healthcare note */}
              {uc.note && (
                <div
                  style={{
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderLeft: '3px solid rgba(201,168,76,0.5)',
                    borderRadius: '6px',
                    padding: '10px 14px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(201,168,76,0.8)',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    {uc.note}
                  </p>
                </div>
              )}

              {/* Keyword pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {uc.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(201,168,76,0.6)',
                      background: 'rgba(201,168,76,0.05)',
                      border: '1px solid rgba(201,168,76,0.12)',
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
                href={uc.href}
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
                View case study →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/case-studies"
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
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
// components/services/ai-integration/AIIntegrationProblem.tsx
'use client';

import Link from 'next/link';

const problems = [
  {
    icon: '⚡',
    h3: 'Delayed Responses Reduce Conversion',
    body: 'Prospects expect quick answers, qualification, and next steps. Every hour a lead waits is an opportunity for a competitor to respond first. AI agents qualify and respond immediately, any time of day, any day of the week.',
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '🔁',
    h3: 'Staff Time Lost to Repetitive Tasks',
    body: 'Answering FAQs, collecting intake details, checking availability, sending reminders, updating tickets, and logging notes, repeated manually every day by staff whose time is better spent on work that actually needs human judgment.',
    href: '/services/process-automation',
  },
  {
    icon: '🔌',
    h3: 'AI Without Integration Creates No Real Value',
    body: 'AI agents only create real value when conversations produce clean records, tasks, bookings, summaries, and follow ups inside business tools. An isolated chat window that does not write to the CRM, create a task, or trigger a next step is not an agent — it is a more expensive FAQ page.',
    href: '/services/ai-integration',
  },
  {
    icon: '⚠️',
    h3: 'Prebuilt Bots Fail Outside Scripted Paths',
    body: 'Real agents need scripts, business rules, escalation paths, approval gates, tool access, testing, and clear boundaries. Prebuilt bots fail the moment a conversation goes beyond a simple FAQ.',
    href: '/services/custom-ai-solutions',
  },
];

export default function AIIntegrationProblem() {
  return (
    <section
      style={{
        background: '#0F0F0F',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top border accent */}
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
          The Problem
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
            margin: '0 auto 20px',
          }}
        >
          Missed Calls, Slow Follow Up, and Repetitive Tasks All Have the Same Fix
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 56px',
          }}
        >
          Missed calls, slow lead follow up, repeated support questions, manual CRM updates, scheduling delays, and staff spending time on routine tasks all share the same fix. Every one of these problems is a conversation or task that an AI agent can handle, faster, more consistently, and without adding headcount.
        </p>

        {/* Pain-point cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {problems.map((p) => (
            <div
              key={p.h3}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '32px 28px',
                transition: 'border-color 0.25s',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(201,168,76,0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  'rgba(255,255,255,0.07)';
              }}
            >
              <span style={{ fontSize: '28px' }}>{p.icon}</span>

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
                {p.h3}
              </h3>

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
                {p.body}
              </p>

              <Link
                href={p.href}
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

        {/* Contrast block: Basic Bot vs Custom AI Agent */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
            marginBottom: '56px',
          }}
        >
          {/* Basic Bot */}
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '36px 32px' }}>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#555555',
                marginBottom: '20px',
              }}
            >
              Basic Bot
            </p>
            {[
              'Keyword triggers only',
              'Breaks outside scripted paths',
              'No CRM or tool connections',
              'No escalation or fallback logic',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: '#555555', fontSize: '14px' }}>✕</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666666' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Custom AI Agent */}
          <div style={{ background: 'rgba(201,168,76,0.05)', padding: '36px 32px', borderLeft: '1px solid rgba(201,168,76,0.2)' }}>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '20px',
              }}
            >
              Custom AI Agent (ThePrimeCrafters)
            </p>
            {[
              'Understands context and business intent',
              'Handles complex multi turn conversations',
              'Connected to CRMs, calendars, and APIs',
              'Escalates correctly when limits are reached',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: '#C9A84C', fontSize: '14px' }}>✓</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#CCCCCC' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA anchor */}
        <div style={{ textAlign: 'center' }}>
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
            Talk to an AI Agent Expert →
          </Link>
        </div>
      </div>
    </section>
  );
}
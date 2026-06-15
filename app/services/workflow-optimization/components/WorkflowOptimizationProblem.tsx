// components/services/workflow-optimization/WorkflowOptimizationProblem.tsx
'use client';

import Link from 'next/link';

const problems = [
  {
    icon: '🔁',
    h3: 'Manual Handoffs Slow Everything Down',
    body: 'Teams lose time when leads, tasks, approvals, notes, and updates move manually between people and tools. Every manual handoff is a delay, a potential error, and a step that should not require human effort.',
    href: '/services/process-automation',
  },
  {
    icon: '🔀',
    h3: 'Teams Use Too Many Disconnected Tools',
    body: 'CRMs, spreadsheets, inboxes, calendars, forms, chats, dashboards, and internal systems that do not share context create friction, duplication, and visibility gaps that slow every team down.',
    href: '/services/ai-integration',
  },
  {
    icon: '⏳',
    h3: 'Bottlenecks Hide Inside Approvals and Status Updates',
    body: 'Stalled approvals, unclear owners, delayed responses, missing status updates, and repeated follow-ups are symptoms of workflows that were never properly mapped or optimised.',
    href: '/case-studies',
  },
  {
    icon: '⚠️',
    h3: 'Automation Fails When the Workflow Is Not Mapped First',
    body: 'Effective automation needs clear process steps, triggers, rules, ownership, exceptions, and success metrics defined before any tool is built. Automating a broken workflow just breaks it faster.',
    href: '/services/process-automation',
  },
];

export default function WorkflowOptimizationProblem() {
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
          Messy Workflows Keep Teams Busy Without Moving Work Forward
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
          Manual handoffs, repeated updates, scattered tools, unclear ownership, hidden bottlenecks, missed follow-ups, and automation that fails because the process was never mapped first.
        </p>

        {/* Pain-point cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
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

        {/* Contrast block: Automate Chaos vs Optimize First */}
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
          {/* Automate Chaos */}
          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              padding: '36px 32px',
            }}
          >
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
              Automate Chaos
            </p>
            {[
              'Build tools before mapping the process',
              'Automation breaks at every exception',
              'Unclear ownership causes repeated failures',
              'More tools, more complexity, same problems',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#555555', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>
                  ✕
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#666666',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Optimize First */}
          <div
            style={{
              background: 'rgba(201,168,76,0.05)',
              padding: '36px 32px',
              borderLeft: '1px solid rgba(201,168,76,0.2)',
            }}
          >
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
              Optimize First
            </p>
            {[
              'Map the workflow before selecting any tool',
              'Automation handles exceptions by design',
              'Ownership and routing defined from the start',
              'AI and tools added into a clear process',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#C9A84C', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#CCCCCC',
                    lineHeight: 1.5,
                  }}
                >
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
            Talk to a Workflow Optimization Expert →
          </Link>
        </div>
      </div>
    </section>
  );
}
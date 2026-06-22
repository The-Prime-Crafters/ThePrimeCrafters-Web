// components/services/ai-integration/AIIntegrationProblem.tsx
'use client';

import Link from 'next/link';

const problems = [
  {
    icon: '🔌',
    h3: 'AI Tools Sit Outside Daily Workflows',
    body: 'AI output loses value when it stays in chat windows, PDFs, or separate tools instead of updating the business systems your team works in every day.',
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '📋',
    h3: 'Teams Still Copy Data Between Systems',
    body: 'Moving leads from forms to CRM, copying call notes, updating spreadsheets, sending reminders, and creating tickets — all done manually, every day.',
    href: '/services/process-automation',
  },
  {
    icon: '🔄',
    h3: 'Customer and Lead Data Gets Out of Sync',
    body: 'Duplicate records, missed follow-ups, outdated pipeline status, and support teams working from incomplete information all trace back to disconnected systems.',
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '⚠️',
    h3: 'Basic Connectors Break When Logic Gets Complex',
    body: 'Real AI integrations need data mapping, API logic, error handling, permissions, testing, and sometimes human approval — far beyond what simple no-code connectors can handle.',
    href: '/services/workflow-optimization',
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
          Disconnected Tools Keep AI From Creating Real Business Value
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
          Isolated AI tools, manual copying, broken handoffs, stale CRM records, and scattered data all share one root cause — the systems are not connected.
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

        {/* Contrast block: Basic connector vs AI Integration */}
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
          {/* Basic connector */}
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
              Basic Connector
            </p>
            {[
              'Simple if/then triggers',
              'Breaks with exceptions',
              'No AI decision logic',
              'Limited integration depth',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#555555', fontSize: '14px' }}>✕</span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#666666',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* AI Integration */}
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
              AI Integration
            </p>
            {[
              'Maps real business workflows',
              'Classifies, routes, and drafts with AI',
              'Connects CRMs, forms, and internal tools',
              'Supports human approvals where needed',
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ color: '#C9A84C', fontSize: '14px' }}>✓</span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    color: '#CCCCCC',
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
            Talk to an AI Integration Expert →
          </Link>
        </div>
      </div>
    </section>
  );
}
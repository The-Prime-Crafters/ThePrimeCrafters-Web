// components/services/ai-agents/AIAgentsHero.tsx
'use client';

import Link from 'next/link';

const badges = [
  'Voice Agents',
  'Chat Agents',
  'CRM Agents',
  'Booking Agents',
  'Internal Assistants',
];

const proofBadges = [
  { label: 'Voice Agents' },
  { label: 'Chat Agents' },
  { label: 'CRM Agents' },
];

const diagramNodes = [
  { label: 'Input', sub: 'Call · Chat · Form · CRM Event · Email', color: '#C9A84C' },
  { label: 'AI Reasoning', sub: 'Understand · Classify · Decide · Plan', color: '#E8C97A' },
  { label: 'Tool Actions', sub: 'Book · Update CRM · Route · Draft · Log', color: '#C9A84C' },
  { label: 'Output', sub: 'Response · Record · Task · Alert · Summary', color: '#E8C97A' },
];

export default function AIAgentsHero() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '100px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left: Copy */}
        <div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '20px',
            }}
          >
            ThePrimeCrafters
          </p>

          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            AI Agent Development Services for Sales, Support, and Operations
          </h1>

          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#A0A0A0',
              lineHeight: 1.7,
              marginBottom: '24px',
            }}
          >
            Build AI Agents That Answer, Qualify, Route, Schedule, and Update Your Systems
          </h2>

          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#B0B0B0',
              lineHeight: 1.8,
              marginBottom: '36px',
            }}
          >
            ThePrimeCrafters builds custom AI agents that work inside real business workflows — answering calls, qualifying leads, supporting customers, booking appointments, updating CRMs, and handling internal tasks automatically.
          </p>

          {/* H3 Badge row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '40px',
            }}
          >
            {badges.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#C9A84C',
                  border: '1px solid rgba(201,168,76,0.35)',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  background: 'rgba(201,168,76,0.06)',
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                color: '#0A0A0A',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Free AI Agent Strategy Call →
            </Link>
            <Link
              href="/case-studies"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.4)',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                background: 'transparent',
              }}
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Right: Agent workflow visual */}
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '20px',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {diagramNodes.map((node, i) => (
            <div
              key={node.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: node.color,
                    marginBottom: '4px',
                  }}
                >
                  {node.label}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: '#808080',
                    margin: 0,
                  }}
                >
                  {node.sub}
                </p>
              </div>
              {i < diagramNodes.length - 1 && (
                <div
                  style={{
                    width: '2px',
                    height: '28px',
                    background:
                      'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
                  }}
                />
              )}
            </div>
          ))}

          {/* Human review note */}
          <div
            style={{
              marginTop: '24px',
              width: '100%',
              textAlign: 'center',
              background: 'rgba(201,168,76,0.04)',
              border: '1px dashed rgba(201,168,76,0.2)',
              borderRadius: '8px',
              padding: '10px 16px',
            }}
          >
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.5)',
                margin: 0,
              }}
            >
              ✓ Human Review for Sensitive Actions
            </p>
          </div>
        </div>
      </div>

      {/* Proof badges */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '56px auto 0',
          display: 'flex',
          gap: '20px',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {proofBadges.map((b) => (
          <div
            key={b.label}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#C9A84C',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '8px',
              padding: '10px 20px',
            }}
          >
            ✓ {b.label}
          </div>
        ))}
      </div>
    </section>
  );
}
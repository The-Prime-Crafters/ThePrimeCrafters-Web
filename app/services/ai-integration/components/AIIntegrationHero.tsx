'use client';

import Link from 'next/link';

const badges = [
  'AI Voice Agents',
  'AI Chat Agents',
  'CRM AI Agents',
  'Lead Qualification',
  'Workflow Automation',
  'Custom AI Agents',
];

export default function AIIntegrationHero() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '100px 24px 40px',
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
          alignItems: 'start',
        }}
      >
        {/* Left: Copy */}
        <div>
          {/* Eyebrow */}
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

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            AI Agent Development Services for Sales, Support, and Operations
          </h1>

          {/* H2 */}
          <h2
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              color: '#A0A0A0',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}
          >
            Custom AI Agents Built to Work Inside Real Business Workflows
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
            ThePrimeCrafters builds custom AI agents that work inside real business workflows instead of sitting as isolated demo tools. Our agents answer calls, qualify leads, support customers, book appointments, update CRMs, and handle internal tasks automatically.
          </p>
        </div>

        {/* Right: Diagram + Badges + CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* Diagram */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '20px',
              padding: '40px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {[
              { label: 'Trigger', sub: 'Form · CRM Event · API Call', color: '#C9A84C' },
              { label: 'AI Logic', sub: 'Classify · Score · Route · Draft', color: '#E8C97A' },
              { label: 'Integrations', sub: 'CRM · Database · Email · Calendar', color: '#C9A84C' },
              { label: 'Output', sub: 'Record Updated · Task Created · Alert Sent', color: '#E8C97A' },
            ].map((node, i) => (
              <div key={node.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
                    }}
                  >
                    {node.sub}
                  </p>
                </div>
                {i < 3 && (
                  <div
                    style={{
                      width: '2px',
                      height: '28px',
                      background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), rgba(201,168,76,0.1))',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Badges — below diagram */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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

          {/* CTAs — below badges */}
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
      </div>

      {/* Proof badges below hero */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '56px auto 0',
          display: 'flex',
          gap: '20px',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      />
    </section>
  );
}
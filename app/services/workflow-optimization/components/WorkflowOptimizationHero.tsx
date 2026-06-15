// components/services/workflow-optimization/WorkflowOptimizationHero.tsx
'use client';

import Link from 'next/link';

const badges = [
  'Workflow Audit',
  'Process Mapping',
  'Automation Roadmap',
  'KPI Tracking',
  'AI Optimization',
];

const proofBadges = [
  { label: 'Workflow Audit' },
  { label: 'Automation Roadmap' },
  { label: 'KPI Tracking' },
];

const diagramNodes = [
  { label: 'Input', sub: 'Request · Lead · Form · Task · Call', color: '#C9A84C' },
  { label: 'Workflow Logic', sub: 'Rules · Owners · Priority · Routing', color: '#E8C97A' },
  { label: 'AI Support', sub: 'Summarise · Score · Draft · Route', color: '#C9A84C' },
  { label: 'Output', sub: 'Task · Update · Alert · Report · Approval', color: '#E8C97A' },
];

export default function WorkflowOptimizationHero() {
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
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            AI Workflow Optimization Services for Faster, Smarter Business Operations
          </h1>

          {/* H2 */}
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
            Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows
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
            ThePrimeCrafters helps businesses map current workflows, remove friction, improve ownership, and prepare processes for automation and AI systems — so teams move work faster with fewer manual steps.
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
              Book a Free Workflow Optimization Strategy Call →
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

        {/* Right: Workflow map diagram */}
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

          {/* Improvement loop label */}
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
              ↺ Continuous Improvement Loop
            </p>
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
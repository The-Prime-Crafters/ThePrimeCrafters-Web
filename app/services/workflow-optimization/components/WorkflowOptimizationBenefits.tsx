// components/services/workflow-optimization/WorkflowOptimizationBenefits.tsx
'use client';

import Link from 'next/link';

const benefits = [
  {
    icon: '⏱️',
    h3: 'Reduce Manual Work and Rework',
    body: 'Cutting repeated copying, duplicate updates, manual reminders, and avoidable corrections frees up real time for teams to spend on higher value work instead of acting as a bridge between disconnected steps.',
    keywords: 'Reduce Manual Work · Workflow Efficiency · Process Optimization',
    href: '/services/process-automation',
    featured: false,
  },
  {
    icon: '⚡',
    h3: 'Speed Up Handoffs and Response Time',
    body: 'Clarifying ownership, routing, reminders, and escalation paths means work does not stall between teams. Faster handoffs translate directly into faster lead response, faster support resolution, and faster operational decisions.',
    keywords: 'Handoff Optimization · Response Time Improvement',
    href: '/case-study/lead-generation-tools',
    featured: false,
  },
  {
    icon: '📊',
    h3: 'Improve Visibility Across Teams',
    body: 'Clearer status updates, dashboards, logs, and reports give teams a real time picture of what is moving, what is stuck, and where the actual bottleneck is, without anyone needing to chase updates across tools and inboxes.',
    keywords: 'Workflow Visibility · Operational Reporting · Dashboard Automation',
    href: '/case-studies',
    featured: true,
  },
  {
    icon: '🧠',
    h3: 'Make AI Automation Easier to Implement',
    body: 'Turning messy processes into clear workflow logic means AI tools and automations can be added with far less confusion, fewer failures, and more predictable outcomes. Clean processes are what make AI actually work well in practice.',
    keywords: 'AI-Ready Workflow · Workflow Automation Strategy',
    href: '/services/ai-integration',
    featured: false,
  },
  {
    icon: '✅',
    h3: 'Standardize Repeatable Processes',
    body: 'Creating consistent steps, statuses, owners, rules, and SOPs for common workflows means the same task gets handled the same way every time, regardless of who is doing it or which tool they happen to be working in.',
    keywords: 'SOP Optimization · Process Standardization · Workflow Documentation',
    href: null,
    featured: false,
  },
  {
    icon: '📈',
    h3: 'Scale Operations Without Adding More Tool Chaos',
    body: 'Improving how current tools and teams work together before adding more software lets a business handle more volume without proportionally increasing admin overhead or rebuilding its entire technology stack.',
    keywords: 'Scale Operations · Tool Consolidation · Workflow Improvement',
    href: '/contact',
    featured: false,
    isFinal: true,
  },
];

export default function WorkflowOptimizationBenefits() {
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

      {/* Bottom glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
          Why Invest
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
          Why Businesses Invest in AI Workflow Optimization
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '620px',
            margin: '0 auto 56px',
          }}
        >
          Workflow optimization is not only about saving time. It improves response speed, ownership clarity, visibility, automation readiness, and consistency across the processes that drive revenue and operations.
        </p>

        {/* Benefits grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginBottom: '56px',
          }}
        >
          {benefits.map((b) => (
            <div
              key={b.h3}
              style={{
                background: b.featured
                  ? 'rgba(201,168,76,0.06)'
                  : 'rgba(255,255,255,0.03)',
                border: b.featured
                  ? '1px solid rgba(201,168,76,0.3)'
                  : '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                if (!b.featured) {
                  el.style.borderColor = 'rgba(201,168,76,0.25)';
                  el.style.background = 'rgba(201,168,76,0.03)';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                if (!b.featured) {
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.background = 'rgba(255,255,255,0.03)';
                }
              }}
            >
              {/* Featured badge */}
              {b.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    borderRadius: '999px',
                    padding: '3px 12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#0A0A0A',
                    }}
                  >
                    Key Benefit
                  </span>
                </div>
              )}

              {/* Icon box */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: b.featured
                    ? 'rgba(201,168,76,0.15)'
                    : 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0,
                  marginBottom: '20px',
                }}
              >
                {b.icon}
              </div>

              {/* H3 */}
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: '0 0 12px',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                {b.h3}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.75,
                  margin: '0 0 20px',
                  flexGrow: 1,
                }}
              >
                {b.body}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: b.featured
                    ? 'rgba(201,168,76,0.15)'
                    : 'rgba(255,255,255,0.06)',
                  marginBottom: '16px',
                }}
              />

              {/* Keywords */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: b.href ? '14px' : '0',
                }}
              >
                {b.keywords.split(' · ').map((kw) => (
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
              {b.href ? (
                <Link
                  href={b.href}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto',
                  }}
                >
                  {b.isFinal
                    ? 'Talk to us about scaling your workflows →'
                    : 'Learn more →'}
                </Link>
              ) : (
                <div style={{ height: '20px' }} />
              )}
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
            See Workflow Optimization Results in Our Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
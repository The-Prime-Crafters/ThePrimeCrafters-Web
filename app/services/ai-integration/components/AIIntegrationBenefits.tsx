// components/services/ai-integration/AIIntegrationBenefits.tsx
'use client';

import Link from 'next/link';

const benefits = [
  {
    icon: '🔗',
    h3: 'Keep Data Synced Across Business Systems',
    body: 'Sync records, notes, statuses, tasks, and summaries across CRMs, forms, databases, and internal tools — so every system reflects the current state of your business without manual updates.',
    keywords: 'Data Sync Automation · Connected Business Systems',
    href: '/services/process-automation',
    featured: false,
  },
  {
    icon: '⏱️',
    h3: 'Reduce Manual Copying and Tool Switching',
    body: 'Eliminate repetitive copying between tools so sales, support, and operations teams spend more time on high-value work and less time acting as a bridge between disconnected systems.',
    keywords: 'Reduce Manual Data Entry · Tool Switching Automation',
    href: null,
    featured: false,
  },
  {
    icon: '🧠',
    h3: 'Make AI Outputs Useful Inside Your Existing Workflow',
    body: 'Move AI summaries, scores, drafts, and decisions directly into the systems your team already uses — so AI output creates action instead of sitting in a separate tool waiting to be copied.',
    keywords: 'AI Workflow Integration · AI Business Automation',
    href: '/services/custom-ai-solutions',
    featured: true,
  },
  {
    icon: '⚡',
    h3: 'Improve Lead Response and Customer Handoffs',
    body: 'Route requests, assign owners, alert teams, and trigger follow-up automatically — without waiting on a manual handoff that delays response time and costs pipeline opportunities.',
    keywords: 'Lead Response Automation · Customer Handoff Automation',
    href: '/case-study/lead-generation-tools',
    featured: false,
  },
  {
    icon: '📊',
    h3: 'Create Better Reporting From Connected Data',
    body: 'Pull workflow data into summaries, dashboards, alerts, and performance reports for leadership and teams — without building manual exports or chasing numbers across disconnected systems.',
    keywords: 'AI Reporting Integration · Dashboard Automation',
    href: null,
    featured: false,
  },
  {
    icon: '📈',
    h3: 'Scale AI Automation Without Replacing Your Tools',
    body: 'Add AI into your current tech stack instead of forcing a full software migration. Integrations are built around the CRMs, platforms, and internal tools your team already relies on.',
    keywords: 'AI Automation Integration · Integrate AI With Existing Tools',
    href: '/contact',
    featured: false,
    isFinal: true,
  },
];

export default function AIIntegrationBenefits() {
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
          Benefits
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
          Why Businesses Invest in AI Integration Services
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
          AI integration is not just about saving time. It improves speed, accuracy, visibility, and scalability across the workflows that drive revenue and operations.
        </p>

        {/* Benefits grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
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

              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: b.featured
                    ? 'rgba(201,168,76,0.15)'
                    : 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
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
                  margin: 0,
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
                  margin: 0,
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
                }}
              />

              {/* Keywords row */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
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
              {b.href && (
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
                  }}
                >
                  {b.isFinal ? 'Talk to us about your stack →' : 'Learn more →'}
                </Link>
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
            See Integration Results in Our Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';

const trustCards = [
  {
    icon: '🔗',
    h3: 'We Build Agents Around Real Workflows, Not Demos',
    body: 'Every agent is designed around actual calls, chats, forms, CRMs, booking flows, and support processes, not a generic demo script. If it does not work in your real workflow, it does not ship.',
    href: '/services/process-automation',
    linkLabel: 'Explore Process Automation →',
  },
  {
    icon: '⚙️',
    h3: 'We Connect Agents to the Tools Your Team Already Uses',
    body: 'CRMs, websites, forms, calendars, ticket systems, databases, email, Slack, WhatsApp, and custom APIs, agents are integrated into your existing stack, not isolated tools that create more manual work.',
    href: '/services/ai-integration',
    linkLabel: 'Explore AI Integration →',
  },
  {
    icon: '🗺️',
    h3: 'We Design Guardrails Before Launch',
    body: 'Approved knowledge, scripts, fallback rules, permissions, escalation paths, and human review gates are defined before build begins, so agents operate within clear, tested boundaries from day one.',
    href: '/contact',
    linkLabel: 'Discuss Your Project →',
  },
  {
    icon: '🔍',
    h3: 'We Test Real Conversations and Edge Cases',
    body: 'QA covers voice and chat behavior, wrong inputs, unavailable tools, duplicate records, failed escalations, and edge cases, not just the happy path that works in a controlled demo environment.',
    href: '/contact',
    linkLabel: 'Talk to Us →',
  },
  {
    icon: '🔄',
    h3: 'We Support Strategy, Build, Launch, and Optimization',
    body: 'From planning and conversation design through build, integration, rollout, transcript review, monitoring, and improvement, ThePrimeCrafters stays involved across the full agent lifecycle.',
    href: '/about-us',
    linkLabel: 'About ThePrimeCrafters →',
    featured: true,
  },
];

const lifecycleBadges = [
  'Strategy',
  'System Audit',
  'API Architecture',
  'Build',
  'Testing',
  'Launch',
  'Monitoring',
  'Optimization',
];

export default function AIIntegrationWhyUs() {
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

      {/* Background glow left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '500px',
          height: '500px',
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
          Why Choose Us
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
          Why Choose ThePrimeCrafters for AI Agent Development Services?
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
          Practical, business first, integration aware, and workflow aware, focused on production ready AI agents that work inside real operations, not polished demos.
        </p>

        {/* Top row: 2 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          {trustCards.slice(0, 2).map((card) => (
            <TrustCard key={card.h3} card={card} />
          ))}
        </div>

        {/* Middle row: 2 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          {trustCards.slice(2, 4).map((card) => (
            <TrustCard key={card.h3} card={card} />
          ))}
        </div>

        {/* Final featured card: full width */}
        <div style={{ marginBottom: '56px' }}>
          <TrustCard card={trustCards[4]} fullWidth lifecycleBadges={lifecycleBadges} />
        </div>

        {/* Bottom CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/about-us"
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
            About Us →
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#0A0A0A',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              padding: '13px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a Free Strategy Call →
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  card,
  fullWidth = false,
  lifecycleBadges,
}: {
  card: (typeof trustCards)[0];
  fullWidth?: boolean;
  lifecycleBadges?: string[];
}) {
  return (
    <div
      style={{
        background: card.featured
          ? 'rgba(201,168,76,0.05)'
          : 'rgba(255,255,255,0.03)',
        border: card.featured
          ? '1px solid rgba(201,168,76,0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: fullWidth ? '40px 40px' : '32px 28px',
        display: 'flex',
        flexDirection: fullWidth ? 'row' : 'column',
        gap: fullWidth ? '48px' : '16px',
        alignItems: fullWidth ? 'center' : 'flex-start',
        transition: 'border-color 0.25s, background 0.25s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        if (!card.featured) {
          el.style.borderColor = 'rgba(201,168,76,0.25)';
          el.style.background = 'rgba(201,168,76,0.03)';
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        if (!card.featured) {
          el.style.borderColor = 'rgba(255,255,255,0.07)';
          el.style.background = 'rgba(255,255,255,0.03)';
        }
      }}
    >
      {/* Left / main content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          flexShrink: 0,
          maxWidth: fullWidth ? '480px' : 'none',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: card.featured
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
          {card.icon}
        </div>

        {/* H3 */}
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: fullWidth ? '22px' : '18px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {card.h3}
        </h3>

        {/* Body */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: '#888888',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {card.body}
        </p>

        {/* Link */}
        <Link
          href={card.href}
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
          {card.linkLabel}
        </Link>
      </div>

      {/* Right: lifecycle badges (full width card only) */}
      {fullWidth && lifecycleBadges && (
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
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
            Full Lifecycle Coverage
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {lifecycleBadges.map((badge, i) => (
              <div
                key={badge}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '999px',
                    padding: '5px 14px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {badge}
                </span>
                {i < lifecycleBadges.length - 1 && (
                  <span
                    style={{
                      color: 'rgba(201,168,76,0.3)',
                      fontSize: '12px',
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
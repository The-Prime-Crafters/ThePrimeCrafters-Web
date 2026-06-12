// components/services/ai-integration/AIIntegrationWhyUs.tsx
'use client';

import Link from 'next/link';

const trustCards = [
  {
    icon: '🔗',
    h3: 'We Build Around Your Existing Tools',
    body: 'Integrations connect to the CRMs, websites, forms, databases, email platforms, calendars, chat tools, and internal systems your team already uses — not replacements for them.',
    href: '/services',
    linkLabel: 'View All Services →',
  },
  {
    icon: '⚙️',
    h3: 'We Connect AI to Real Business Workflows',
    body: 'AI should update records, route leads, create tasks, draft replies, and support team actions inside the workflows your business runs on — not sit in a separate tool your team has to check.',
    href: '/services/process-automation',
    linkLabel: 'Explore Process Automation →',
  },
  {
    icon: '🗺️',
    h3: 'We Design Data Flows Before Building',
    body: 'Every integration starts with systems, fields, sync direction, permissions, exceptions, and business goals clearly mapped — before a single connector is built or API is called.',
    href: '/about-us',
    linkLabel: 'About ThePrimeCrafters →',
  },
  {
    icon: '🔍',
    h3: 'We Test Sync, Permissions, and Edge Cases',
    body: 'Data quality, permissions, duplicate records, failed syncs, user handoffs, latency, and error handling are all tested before launch — not discovered in production by your team.',
    href: '/contact',
    linkLabel: 'Discuss Your Integration →',
  },
  {
    icon: '🔄',
    h3: 'We Support Strategy, Build, Launch, and Optimization',
    body: 'From planning and integration build through AI logic, testing, rollout, monitoring, and post-launch improvement — ThePrimeCrafters stays involved across the full integration lifecycle.',
    href: '/contact',
    linkLabel: 'Start Your Integration Project →',
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
          Why Choose ThePrimeCrafters for AI Integration Services?
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
          Practical, business-first, API-aware, and workflow-aware — built around your existing stack and focused on connected AI systems that deliver measurable results.
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
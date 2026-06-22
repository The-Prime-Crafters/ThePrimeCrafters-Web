'use client';

import Link from 'next/link';

const serviceEntities = [
  { label: 'AI Integrations', href: '/services' },
  { label: 'CRM Automation', href: '/services' },
  { label: 'Process Automation', href: '/services/process-automation' },
  { label: 'Custom AI Systems', href: '/services/custom-ai-solutions' },
];

export default function AIIntegrationAbout() {
  return (
    <section
      style={{
        background: '#0A0A0A',
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

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
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
          About ThePrimeCrafters
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.25,
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 32px',
          }}
        >
          ThePrimeCrafters Provides AI Integration Services for Business Automation
        </h2>

        {/* Entity paragraph */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#909090',
            lineHeight: 1.85,
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 56px',
          }}
        >
         ThePrimeCrafters is an AI agent development agency that designs, builds, integrates, and improves custom AI agents for sales, support, operations, lead generation, booking, and internal workflows. Work spans AI voice agents, AI chat agents, CRM connected agents, workflow automation, and custom AI systems, all built around real business operations and connected to the tools your team already uses.
        ThePrimeCrafters builds AI agents for inbound and outbound calls, website and WhatsApp chat, lead qualification and CRM sync, appointment booking and calendar management, customer support and ticket routing, and internal knowledge and operations workflows.

        </p>

        {/* Single card: service pills + target environments */}
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '32px 28px',
            marginBottom: '48px',
          }}
        >
          {/* Service pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            {serviceEntities.map((e) => (
              <Link
                key={e.label}
                href={e.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#C9A84C',
                  background: 'rgba(201,168,76,0.07)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '999px',
                  padding: '7px 16px',
                  textDecoration: 'none',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(201,168,76,0.14)';
                  el.style.borderColor = 'rgba(201,168,76,0.4)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = 'rgba(201,168,76,0.07)';
                  el.style.borderColor = 'rgba(201,168,76,0.2)';
                }}
              >
                {e.label}
              </Link>
            ))}
          </div>

          {/* Target environments line */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#909090',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            <span style={{ fontWeight: 700, color: '#FFFFFF' }}>
              Target Environments Deployed:
            </span>{' '}
            Salesforce, HubSpot, GoHighLevel, SQL/PostgreSQL Clusters, Custom Internal Form Webhooks, RESTful API Node Infrastructures, Enterprise Communication Channels (Slack, Teams), Active Client Support Frameworks.
            
          </p>
        </div>

        {/* Bottom links */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            All Services →
          </Link>
          <Link
            href="/case-studies"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
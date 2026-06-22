'use client';

import Link from 'next/link';

const serviceEntities = [
  { label: 'AI Integrations', href: '/services' },
  { label: 'CRM Automation', href: '/services' },
  { label: 'Process Automation', href: '/services/process-automation' },
  { label: 'Custom AI Systems', href: '/services/custom-ai-solutions' },
];

const systemEntities = [
  { label: 'CRM Integration', href: '/services' },
  { label: 'API Integration', href: '/services' },
  { label: 'Website Integration', href: '/services' },
  { label: 'Database Integration', href: '/services' },
  { label: 'Email & Calendar', href: '/services' },
  { label: 'Spreadsheet Automation', href: '/services' },
];

const teamEntities = [
  { label: 'Sales Automation', href: '/services/workflow-optimization' },
  { label: 'Support Automation', href: '/services/workflow-optimization' },
  { label: 'Operations', href: '/services/workflow-optimization' },
  { label: 'Lead Generation', href: '/services/workflow-optimization' },
  { label: 'Admin Workflows', href: '/services/workflow-optimization' },
  { label: 'Customer Workflows', href: '/services/workflow-optimization' },
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
          As a dedicated technology implementation partner, ThePrimeCrafters engineered a comprehensive suite of AI integration services designed to unlock the true value of modern artificial intelligence for enterprise operations. By bridging the critical technical gaps between generative models, custom APIs, structured databases, web capture tools, and core customer relationship managers, we turn isolated tools into unified automated ecosystems. Our workflows ensure your business systems communicate clearly, transfer data securely, and execute tasks without manual friction.
        </p>

        {/* Two entity rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {/* Service entities */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px 28px',
            }}
          >
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                margin: '0 0 20px',
              }}
            >
              AI Integrations, CRM Automation, Process Automation, and Custom AI Systems
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
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
          </div>

          {/* System + team entities */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Systems row */}
            <div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  margin: '0 0 14px',
                }}
              >
                Target Environments: Salesforce, HubSpot, GoHighLevel, SQL/PostgreSQL, Custom Webhooks, RESTful APIs, Slack, Teams, and Client Support Frameworks
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {systemEntities.map((e) => (
                  <Link
                    key={e.label}
                    href={e.href}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '999px',
                      padding: '5px 14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#C9A84C';
                      el.style.borderColor = 'rgba(201,168,76,0.3)';
                      el.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#A0A0A0';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
              }}
            />

            {/* Teams row */}
            <div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  margin: '0 0 14px',
                }}
              >
                Built for Sales, Operations, Support, Lead Generation, Admin, and Customer Workflows
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {teamEntities.map((e) => (
                  <Link
                    key={e.label}
                    href={e.href}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '999px',
                      padding: '5px 14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#C9A84C';
                      el.style.borderColor = 'rgba(201,168,76,0.3)';
                      el.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#A0A0A0';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
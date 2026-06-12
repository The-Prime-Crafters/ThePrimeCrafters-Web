// components/services/ai-integration/AIIntegrationSystems.tsx
'use client';

import Link from 'next/link';

const systems = [
  {
    icon: '🎯',
    h3: 'CRM and Sales Platform Integration',
    body: 'Connect AI with your CRM to create records, update pipeline stages, sync notes, route leads, score prospects, and trigger follow-ups automatically.',
    keywords: 'CRM AI Integration · AI Sales Integration · CRM Automation',
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '🌐',
    h3: 'Website Forms and Lead Capture Integration',
    body: 'Connect web forms, landing pages, chat flows, and lead capture tools with AI qualification, routing, CRM updates, and instant team notifications.',
    keywords: 'Website AI Integration · Form Automation · Lead Capture Automation',
    href: '/services/process-automation',
  },
  {
    icon: '🗄️',
    h3: 'Database and Spreadsheet Automation',
    body: 'Connect AI to databases, spreadsheets, tables, data exports, and internal records for syncing, summaries, status updates, and automated reporting.',
    keywords: 'Database AI Integration · Spreadsheet Automation · Data Sync',
    href: null,
  },
  {
    icon: '📧',
    h3: 'Email, Calendar, and Communication Tool Integration',
    body: 'Use AI to draft updates, summarise conversations, schedule follow-ups, create tasks, send alerts, and keep teams informed across email, Slack, and WhatsApp.',
    keywords: 'Email Automation · Calendar Automation · Slack & WhatsApp AI Integration',
    href: null,
  },
  {
    icon: '🔌',
    h3: 'API and Custom Software Integration',
    body: 'Build custom API connections where off-the-shelf connectors are not enough — including authentication, data mapping, error handling, and full workflow logic.',
    keywords: 'Custom API Integrations · AI API Integration · Custom Software Integration',
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '🎙️',
    h3: 'AI Voice Agent and Chatbot Integration',
    body: 'Connect AI voice agents and chatbots with CRMs, calendars, ticket systems, lead records, call summaries, and support workflows for end-to-end automation.',
    keywords: 'AI Voice Agent Integration · Chatbot CRM Integration',
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '📊',
    h3: 'Reporting and Dashboard Integration',
    body: 'Turn connected workflow data into summaries, dashboards, alerts, reports, and performance visibility for teams and leadership without manual compilation.',
    keywords: 'AI Reporting Integration · Dashboard Automation · Workflow Reporting',
    href: '/case-studies',
  },
  {
    icon: '📚',
    h3: 'Internal Knowledge Base and Document Integration',
    body: 'Connect AI to SOPs, knowledge bases, internal documents, policies, project notes, and service information so teams can search and act faster.',
    keywords: 'AI Knowledge Base Integration · Document AI Integration · Internal AI Assistant',
    href: '/services/custom-ai-solutions',
  },
];

export default function AIIntegrationSystems() {
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
          What We Connect
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
          Business Systems ThePrimeCrafters Can Connect With AI
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
          From lead intake to internal knowledge — we build integrations that connect AI to the tools your team already depends on.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {systems.map((s) => {
            const CardWrapper = s.href ? Link : 'div';
            const wrapperProps = s.href
              ? { href: s.href, style: { textDecoration: 'none' } }
              : {};

            return (
              <CardWrapper key={s.h3} {...(wrapperProps as any)}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    cursor: s.href ? 'pointer' : 'default',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(201,168,76,0.3)';
                    el.style.background = 'rgba(201,168,76,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(255,255,255,0.07)';
                    el.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  {/* Icon */}
                  <span style={{ fontSize: '28px' }}>{s.icon}</span>

                  {/* H3 */}
                  <h3
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {s.h3}
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
                    {s.body}
                  </p>

                  {/* Keyword pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '4px',
                    }}
                  >
                    {s.keywords.split(' · ').map((kw) => (
                      <span
                        key={kw}
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '11px',
                          fontWeight: 500,
                          color: 'rgba(201,168,76,0.7)',
                          background: 'rgba(201,168,76,0.06)',
                          border: '1px solid rgba(201,168,76,0.15)',
                          borderRadius: '999px',
                          padding: '3px 10px',
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Link label */}
                  {s.href && (
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#C9A84C',
                        marginTop: '4px',
                      }}
                    >
                      Learn more →
                    </span>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link
            href="/services"
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
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
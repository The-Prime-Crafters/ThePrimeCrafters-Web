// components/services/ai-integration/AIIntegrationSystems.tsx
'use client';

import Link from 'next/link';

const systems = [
  {
    icon: '🎯',
    h3: 'CRM and Sales Platform Integration',
    body: 'Inject deep operational logic into platforms like Salesforce, HubSpot, and GoHighLevel. Our systems empower AI models to automatically instantiate records, modify deal pipelines based on chat interactions, append deep meeting transcripts, track lead scores, and initiate automated client follow-ups without manual staff updates.',
    keywords: 'CRM AI Integration · AI Sales Integration · CRM Automation',
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '🌐',
    h3: 'Website Forms and Lead Capture Integration',
    body: 'Turn standard website touchpoints into conversational qualification layers. We link online contact modules, specific capture pages, and web portals to underlying AI evaluation engines, running instantaneous screening, route-mapping, immediate notification pings, and live dataset population.',
    keywords: 'Website AI Integration · Form Automation · Lead Capture Automation',
    href: '/services/process-automation',
  },
  {
    icon: '🗄️',
    h3: 'Database and Spreadsheet Automation',
    body: 'Bridge the gap between raw data storage and accessible business insights. We build real-time monitoring workflows over SQL databases, PostgreSQL clusters, and enterprise spreadsheet structures to handle automated data parsing, instant text summaries, records modification, and automated administrative performance checks.',
    keywords: 'Database AI Integration · Spreadsheet Automation · Data Sync',
    href: null,
  },
  {
    icon: '📧',
    h3: 'Email, Calendar, and Communication Tool Integration',
    body: "Maximize your team's day-to-day coordination within tools like Slack, Microsoft Teams, Outlook, and Google Workspace. Our tools enable AI assistants to create highly targeted follow-up context, extract calendar availabilities, generate instant summary updates on complex channels, and route action alerts directly to specific human stakeholders.",
    keywords: 'Email Automation · Calendar Automation · Slack & WhatsApp AI Integration',
    href: null,
  },
  {
    icon: '🔌',
    h3: 'API and Custom Software Integration',
    body: 'When pre-configured automation links fall short, our development team writes bespoke code. We architect scalable API pathways featuring advanced web token security, precise field conversions, complex logic flows, and custom error containment to manage enterprise-level legacy software suites.',
    keywords: 'Custom API Integrations · AI API Integration · Custom Software Integration',
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '🎙️',
    h3: 'AI Voice Agent and Chatbot Integration',
    body: 'Bind telephone systems and chat frameworks directly to underlying data architectures. We configure voice assistants and contextual chatbots to check available scheduling blocks, create support incidents, update client files, and pass off contextual summaries directly to operational departments during call transfers.',
    keywords: 'AI Voice Agent Integration · Chatbot CRM Integration',
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '📊',
    h3: 'Reporting and Dashboard Integration',
    body: 'Convert disconnected process metrics into unified visual intelligence. We pull data from interconnected automation sequences to feed executive reports, trend notifications, and live operational analytics dashboards, providing management with real-time insight into processing costs and system latency.',
    keywords: 'AI Reporting Integration · Dashboard Automation · Workflow Reporting',
    href: '/case-studies',
  },
  {
    icon: '📚',
    h3: 'Internal Knowledge Base and Document Integration',
    body: 'Transform scattered documents into searchable knowledge repositories. We safely connect document management storage and internal standard operating procedures (SOPs) to private AI search components, helping your workforce instantly look up company guidelines, product manuals, and service files without risking public data disclosure.',
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
            maxWidth: '620px',
            margin: '0 auto 56px',
          }}
        >
          Our engineers build secure pipelines connecting modern intelligence across your entire technical landscape. Below are the functional hubs we optimize:
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
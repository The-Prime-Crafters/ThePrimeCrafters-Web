// components/services/ai-integration/AIIntegrationArchitecture.tsx
'use client';

import Link from 'next/link';

const layers = [
  {
    step: 'Step 1',
    label: 'Ingestion Layer (Inputs)',
    h3: 'Forms, Calls, Chats, Files, Databases, and CRM Events',
    body: 'Workflows kick off instantly based on real business actions or real-time webhooks. These entry nodes process user submission forms, inbound phone requests, live chat messaging, document uploads, backend data mutations, or automated pipeline updates within your customer relationship manager.',
    chips: ['Web Forms', 'CRM Events', 'Inbound Calls', 'Chat Messages', 'File Uploads', 'Database Changes', 'Scheduled Pulls'],
    color: '#C9A84C',
    icon: '⚡',
  },
  {
    step: 'Step 2',
    label: 'Cognitive Layer (AI Logic)',
    h3: 'Classify, Summarise, Score, Route, and Draft',
    body: 'The system passes the incoming information through a tailored intelligence hub. Rather than simply copying raw values, the AI runs deep text classification, extracts underlying sentiment markers, creates contextual data summaries, calculates internal routing values, and prepares production-ready responses according to set company guidelines.',
    chips: ['Classify', 'Summarise', 'Score', 'Route', 'Draft', 'Extract', 'Prioritise'],
    color: '#E8C97A',
    icon: '🧠',
    href: '/services/custom-ai-solutions',
  },
  {
    step: 'Step 3',
    label: 'Execution Layer (Outputs)',
    h3: 'CRM Updates, Notifications, Reports, Tasks, and Approvals',
    body: 'Once processed, the system formats the AI-generated insights and maps them into your underlying tools. This layer updates user records, creates follow-up calendar blocks, dispatches internal team alerts, updates financial spreadsheets, and generates operational project tickets across separate platforms.',
    chips: ['CRM Updated', 'Task Created', 'Ticket Routed', 'Report Generated', 'Alert Sent', 'Approval Requested'],
    color: '#C9A84C',
    icon: '🔗',
    href: '/services/process-automation',
  },
  {
    step: 'Step 4',
    label: 'Verification Layer (Human Review)',
    h3: 'Human Review for Sensitive Actions',
    body: 'To ensure high quality and absolute trust, higher-risk actions pass through human-in-the-loop review queues. Communication drafts, financial calculations, or external adjustments pause within a secure management dashboard for one-click approval, ensuring absolute human control over critical business decisions.',
    chips: ['Approval Gates', 'Review Queues', 'Escalation Rules', 'Permission Controls', 'Audit Logs'],
    color: '#E8C97A',
    icon: '✅',
    href: '/services/process-automation',
    trust: true,
  },
];

export default function AIIntegrationArchitecture() {
  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-100px',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
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
          AI + Integration Layer
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
          How AI Integration Turns Separate Tools Into One Workflow
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 72px',
          }}
        >
          We architect data networks where every system communicates in perfect alignment. Here is how information safely moves through our multi-layered architectural approach:
        </p>

        {/* Architecture flow */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            position: 'relative',
          }}
        >
          {layers.map((layer, i) => (
            <div key={layer.label}>
              {/* Layer row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '0',
                  alignItems: 'stretch',
                  position: 'relative',
                }}
              >
                {/* Left: Step label */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    paddingRight: '32px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                    borderRight: '2px solid rgba(201,168,76,0.2)',
                    position: 'relative',
                  }}
                >
                  {/* Step dot */}
                  <div
                    style={{
                      position: 'absolute',
                      right: '-7px',
                      top: '38px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: layer.color,
                      boxShadow: `0 0 12px ${layer.color}60`,
                    }}
                  />

                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color: 'rgba(201,168,76,0.5)',
                      margin: '0 0 6px',
                      textAlign: 'right',
                    }}
                  >
                    {layer.step}
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: layer.color,
                      margin: 0,
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <span>{layer.icon}</span>
                    {layer.label}
                  </p>
                </div>

                {/* Right: Content card */}
                <div
                  style={{
                    paddingLeft: '40px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                  }}
                >
                  <div
                    style={{
                      background: layer.trust
                        ? 'rgba(201,168,76,0.05)'
                        : 'rgba(255,255,255,0.03)',
                      border: layer.trust
                        ? '1px solid rgba(201,168,76,0.2)'
                        : '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '16px',
                      padding: '28px 32px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: '0 0 12px',
                        lineHeight: 1.3,
                      }}
                    >
                      {layer.h3}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '14px',
                        color: '#888888',
                        lineHeight: 1.8,
                        margin: '0 0 20px',
                        maxWidth: '600px',
                      }}
                    >
                      {layer.body}
                    </p>

                    {/* Chips */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: layer.href ? '20px' : '0',
                      }}
                    >
                      {layer.chips.map((chip) => (
                        <span
                          key={chip}
                          style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: layer.color,
                            background: 'rgba(201,168,76,0.07)',
                            border: '1px solid rgba(201,168,76,0.2)',
                            borderRadius: '999px',
                            padding: '5px 14px',
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Optional link */}
                    {layer.href && (
                      <Link
                        href={layer.href}
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#C9A84C',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}
                      >
                        {layer.trust
                          ? 'Discuss approval workflows →'
                          : 'Learn more →'}
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Connector arrow between layers */}
              {i < layers.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '200px',
                  }}
                >
                  <div
                    style={{
                      marginLeft: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0',
                    }}
                  >
                    <div
                      style={{
                        width: '1px',
                        height: '20px',
                        background:
                          'linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))',
                      }}
                    />
                    <span
                      style={{
                        color: 'rgba(201,168,76,0.4)',
                        fontSize: '12px',
                        lineHeight: 1,
                      }}
                    >
                      ↓
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <Link
            href="/services/process-automation"
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
            Explore Process Automation Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
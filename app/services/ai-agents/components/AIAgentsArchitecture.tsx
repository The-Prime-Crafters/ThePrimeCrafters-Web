// components/services/ai-agents/AIAgentsArchitecture.tsx
'use client';

import Link from 'next/link';

const layers = [
  {
    step: 'Step 1',
    label: 'Inputs',
    h3: 'Calls, Chats, Forms, Emails, CRM Events, and Files',
    body: 'Every agent workflow starts with a clear input — an inbound call, website chat, form submission, email, CRM event, or file upload that triggers the agent to begin understanding the request and deciding what action to take.',
    chips: [
      'Inbound Calls',
      'Website Chats',
      'Form Submissions',
      'Email Triggers',
      'CRM Events',
      'File Uploads',
      'Scheduled Tasks',
    ],
    color: '#C9A84C',
    icon: '⚡',
  },
  {
    step: 'Step 2',
    label: 'Knowledge and Logic',
    h3: 'Scripts, SOPs, Business Rules, and Context',
    body: 'Agents operate within approved knowledge — scripts, product details, service rules, tone guidelines, escalation thresholds, and guardrails that define exactly what the agent can say, ask, and do before taking any action.',
    chips: [
      'Approved Scripts',
      'SOPs and Policies',
      'Business Rules',
      'Product Knowledge',
      'Tone Guidelines',
      'Escalation Thresholds',
      'Guardrails',
    ],
    color: '#E8C97A',
    icon: '🧠',
    href: '/services/custom-ai-solutions',
  },
  {
    step: 'Step 3',
    label: 'Actions',
    h3: 'Qualify, Answer, Book, Update, Route, Draft, and Report',
    body: 'Based on the input and approved logic, the agent takes specific actions — qualifying a lead, answering a question, booking an appointment, updating a CRM record, routing a ticket, drafting a reply, or generating a report.',
    chips: [
      'Qualify Leads',
      'Answer Questions',
      'Book Appointments',
      'Update CRM',
      'Route Tickets',
      'Draft Replies',
      'Generate Reports',
      'Send Alerts',
    ],
    color: '#C9A84C',
    icon: '⚙️',
    href: '/services/process-automation',
  },
  {
    step: 'Step 4',
    label: 'Human Review',
    h3: 'Human Review for High-Risk or Sensitive Actions',
    body: 'Not every action should be fully automated. Approval gates, fallback rules, escalation paths, permissions, and audit logs keep humans in control for sensitive decisions — so agents stay practical, trustworthy, and safe for real business operations.',
    chips: [
      'Approval Gates',
      'Fallback Rules',
      'Escalation Paths',
      'Permission Controls',
      'Audit Logs',
      'Human Handoff',
    ],
    color: '#E8C97A',
    icon: '✅',
    href: '/contact',
    trust: true,
  },
];

export default function AIAgentsArchitecture() {
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
          Agent Architecture
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
          How an AI Agent Moves From Conversation to Action
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 72px',
          }}
        >
          Inputs trigger knowledge and logic. Logic drives approved actions. Actions produce outputs. Sensitive steps route to human review. Each layer connects to the next as one controlled workflow.
        </p>

        {/* Architecture flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {layers.map((layer, i) => (
            <div key={layer.label}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '0',
                  alignItems: 'stretch',
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
                      transition: 'border-color 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        'rgba(201,168,76,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        layer.trust
                          ? 'rgba(201,168,76,0.2)'
                          : 'rgba(255,255,255,0.07)';
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

              {/* Connector arrow */}
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
            href="/services/ai-integration"
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
            Explore AI Integration Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
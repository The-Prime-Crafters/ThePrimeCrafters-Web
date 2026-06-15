// components/services/workflow-optimization/WorkflowOptimizationFramework.tsx
'use client';

import Link from 'next/link';

const layers = [
  {
    step: 'Step 1',
    label: 'Inputs',
    h3: 'Requests, Leads, Calls, Forms, Tickets, and Internal Tasks',
    body: 'Every optimised workflow starts with a clear input layer — defining where work comes from, what triggers the process, and how each source is captured and routed into the right workflow path from the start.',
    chips: [
      'Web Forms',
      'Inbound Leads',
      'Support Tickets',
      'Phone Calls',
      'Internal Requests',
      'CRM Events',
      'Scheduled Tasks',
    ],
    color: '#C9A84C',
    icon: '⚡',
  },
  {
    step: 'Step 2',
    label: 'Workflow Logic',
    h3: 'Rules, Ownership, Priority, Timing, and Exceptions',
    body: 'Optimised workflows define who owns each step, what happens next, what gets escalated, when reminders fire, and how exceptions are handled — so work moves without waiting on someone to remember the next step.',
    chips: [
      'Ownership Rules',
      'Priority Scoring',
      'Routing Logic',
      'Escalation Paths',
      'Timing Rules',
      'Exception Handling',
      'Approval Gates',
    ],
    color: '#E8C97A',
    icon: '⚙️',
    href: '/services/process-automation',
  },
  {
    step: 'Step 3',
    label: 'AI Support',
    h3: 'Summaries, Routing, Drafts, Scores, and Recommendations',
    body: 'AI acts as a support layer inside the optimised workflow — summarising conversations, classifying requests, scoring leads, drafting responses, recommending actions, and routing work based on the clear logic designed in the previous layer.',
    chips: [
      'AI Summaries',
      'Smart Routing',
      'Lead Scoring',
      'Draft Replies',
      'Classification',
      'Recommendations',
      'Data Extraction',
    ],
    color: '#C9A84C',
    icon: '🧠',
    href: '/services/custom-ai-solutions',
  },
  {
    step: 'Step 4',
    label: 'Outputs',
    h3: 'Tasks, Updates, Alerts, Approvals, and Reports',
    body: 'Every optimised workflow produces clear, useful outputs — tasks created in the right system, records updated accurately, alerts sent to the right people, approvals requested where needed, dashboards refreshed, and reports generated without manual compilation.',
    chips: [
      'Tasks Created',
      'CRM Updated',
      'Alerts Sent',
      'Approvals Requested',
      'Reports Generated',
      'Dashboards Refreshed',
    ],
    color: '#E8C97A',
    icon: '📤',
    href: '/services/ai-integration',
  },
];

export default function WorkflowOptimizationFramework() {
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
          Optimization Framework
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
            maxWidth: '800px',
            margin: '0 auto 16px',
          }}
        >
          How Workflow Optimization Turns Daily Work Into a Clear Operating System
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
          Inputs trigger workflow logic. Logic directs AI support. AI support drives outputs. Outputs feed back into continuous improvement. Each layer connects to the next as one clear operating system.
        </p>

        {/* Framework flow */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {layers.map((layer, i) => (
            <div key={layer.label}>
              {/* Layer row */}
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
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
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
                        'rgba(255,255,255,0.07)';
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
                        Learn more →
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

        {/* Continuous improvement loop callout */}
        <div
          style={{
            marginTop: '48px',
            background: 'rgba(201,168,76,0.05)',
            border: '1px dashed rgba(201,168,76,0.25)',
            borderRadius: '14px',
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '28px' }}>↺</span>
          <div style={{ flex: 1, minWidth: '240px' }}>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                margin: '0 0 6px',
              }}
            >
              Continuous Improvement Loop
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#888888',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Post-launch monitoring, user feedback, KPI tracking, and workflow refinement keep the operating system improving over time — not just at launch.
            </p>
          </div>
          <Link
            href="/services/process-automation"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Process Automation →
          </Link>
        </div>
      </div>
    </section>
  );
}
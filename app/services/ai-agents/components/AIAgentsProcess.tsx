// components/services/ai-agents/AIAgentsProcess.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    num: '1',
    title: 'Workflow and Conversation Discovery',
    h3: '1. Workflow and Conversation Discovery',
    body: 'We start with your real business context — reviewing current call, chat, email, CRM, booking, support, and operations workflows before designing any agent. Discovery ensures every agent is built around how your business actually handles conversations and tasks today, not a generic template.',
    tags: ['AI Agent Discovery', 'Workflow Audit', 'Conversation Mapping'],
  },
  {
    num: '2',
    title: 'Agent Use Case and ROI Mapping',
    h3: '2. Agent Use Case and ROI Mapping',
    body: 'We identify the conversations and tasks that save the most time, improve response speed, or protect revenue — then prioritise them into a clear agent roadmap. The highest-volume, most repetitive workflows get addressed first so value is delivered quickly.',
    tags: ['AI Agent Roadmap', 'Automation Opportunity Mapping', 'ROI Planning'],
    note: 'Start with high-volume, repeatable workflows.',
  },
  {
    num: '3',
    title: 'Conversation Design, Knowledge Setup, and Guardrails',
    h3: '3. Conversation Design, Knowledge Setup, and Guardrails',
    body: 'We define scripts, intents, fallback rules, escalation paths, knowledge sources, permissions, and success metrics before any build begins. Every agent needs approved boundaries — what it can say, what actions it can take, and when it must hand off to a human.',
    tags: ['AI Agent Prompt Design', 'AI Agent Guardrails', 'Conversation Design'],
    checklist: [
      'Script and intent mapping',
      'Knowledge base structure',
      'Fallback and error handling',
      'Escalation path design',
      'Permission and scope rules',
      'Success metric definition',
    ],
  },
  {
    num: '4',
    title: 'Tool Integration and Agent Build',
    h3: '4. Tool Integration and Agent Build',
    body: 'We connect the agent with CRMs, calendars, forms, ticket tools, databases, communication platforms, or custom APIs — then build the agent logic, conversation flows, and action triggers. Every integration is tested throughout the build phase, not just at the end.',
    tags: ['AI Agent Integration', 'CRM AI Agent', 'API-Connected AI Agent'],
    href: '/services/ai-integration',
  },
  {
    num: '5',
    title: 'Testing, QA, Edge Cases, and Client Review',
    h3: '5. Testing, QA, Edge Cases, and Client Review',
    body: 'We test real scenarios, wrong inputs, sensitive requests, failed tool calls, duplicate records, handoffs, and escalation logic before launch. QA covers the edge cases that cause most agent failures in production — not just the happy path.',
    tags: ['AI Agent Testing', 'Agent QA', 'Conversation QA'],
    checklist: [
      'Real scenario simulation',
      'Wrong input handling',
      'Sensitive request testing',
      'Failed tool call recovery',
      'Duplicate record prevention',
      'Escalation logic validation',
    ],
  },
  {
    num: '6',
    title: 'Launch, Monitor, and Improve the Agent',
    h3: '6. Launch, Monitor, and Improve the Agent',
    body: 'We deploy the agent, monitor transcripts and logs, improve prompts and rules, refine knowledge, and adjust workflows based on real usage. Post-launch optimization is built into every agent project — agents improve over time, not just at launch.',
    tags: ['AI Agent Monitoring', 'AI Agent Optimization', 'Post-Launch Support'],
    href: '/services/workflow-optimization',
    isFinal: true,
  },
];

export default function AIAgentsProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

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
          Our Process
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
          Our AI Agent Development Process
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '580px',
            margin: '0 auto 64px',
          }}
        >
          Every AI agent project follows a structured six-step process — from workflow discovery through launch, monitoring, and continuous improvement.
        </p>

        {/* Two-column: nav left, detail right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left: Step navigation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              position: 'sticky',
              top: '32px',
            }}
          >
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                style={{
                  background:
                    activeStep === i
                      ? 'rgba(201,168,76,0.08)'
                      : 'transparent',
                  border:
                    activeStep === i
                      ? '1px solid rgba(201,168,76,0.3)'
                      : '1px solid transparent',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (activeStep !== i) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'rgba(255,255,255,0.03)';
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeStep !== i) {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.background = 'transparent';
                    el.style.borderColor = 'transparent';
                  }
                }}
              >
                {/* Step number circle */}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background:
                      activeStep === i
                        ? 'linear-gradient(135deg, #C9A84C, #E8C97A)'
                        : 'rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: activeStep === i ? '#0A0A0A' : '#666666',
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Step title */}
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: activeStep === i ? 600 : 400,
                    color: activeStep === i ? '#FFFFFF' : '#777777',
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                  }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Active step detail */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '20px',
              padding: '40px',
              minHeight: '360px',
            }}
          >
            {/* Step badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '999px',
                padding: '5px 14px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                }}
              >
                Step {active.num} of {steps.length}
              </span>
            </div>

            {/* H3 */}
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.3,
                margin: '0 0 16px',
              }}
            >
              {active.h3}
            </h3>

            {/* Body */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                color: '#909090',
                lineHeight: 1.8,
                margin: '0 0 24px',
              }}
            >
              {active.body}
            </p>

            {/* Note callout */}
            {active.note && (
              <div
                style={{
                  background: 'rgba(201,168,76,0.06)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderLeft: '3px solid #C9A84C',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '24px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    color: '#C9A84C',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  💡 {active.note}
                </p>
              </div>
            )}

            {/* Checklist */}
            {active.checklist && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  marginBottom: '24px',
                }}
              >
                {active.checklist.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span
                      style={{
                        color: '#C9A84C',
                        fontSize: '13px',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: '#A0A0A0',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: active.href ? '24px' : '0',
              }}
            >
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(201,168,76,0.7)',
                    background: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Step link */}
            {active.href && !active.isFinal && (
              <Link
                href={active.href}
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

            {/* Final step CTA */}
            {active.isFinal && (
              <div style={{ marginTop: '8px' }}>
                <Link
                  href="/contact"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#0A0A0A',
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Book a Free AI Agent Strategy Call →
                </Link>
              </div>
            )}

            {/* Step navigation arrows */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '36px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <button
                onClick={() =>
                  setActiveStep((prev) => Math.max(0, prev - 1))
                }
                disabled={activeStep === 0}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: activeStep === 0 ? '#444444' : '#C9A84C',
                  background: 'transparent',
                  border: `1px solid ${
                    activeStep === 0
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(201,168,76,0.3)'
                  }`,
                  borderRadius: '6px',
                  padding: '8px 16px',
                  cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                ← Previous
              </button>
              <button
                onClick={() =>
                  setActiveStep((prev) =>
                    Math.min(steps.length - 1, prev + 1)
                  )
                }
                disabled={activeStep === steps.length - 1}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color:
                    activeStep === steps.length - 1 ? '#444444' : '#C9A84C',
                  background: 'transparent',
                  border: `1px solid ${
                    activeStep === steps.length - 1
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(201,168,76,0.3)'
                  }`,
                  borderRadius: '6px',
                  padding: '8px 16px',
                  cursor:
                    activeStep === steps.length - 1
                      ? 'not-allowed'
                      : 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
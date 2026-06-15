// components/services/ai-integration/AIIntegrationProcess.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    num: '1',
    title: 'System and Workflow Audit',
    h3: '1. System and Workflow Audit',
    body: 'We review your current software stack, analyze data handling challenges, track active communication tools, map security profiles, and pinpoint the specific operational bottlenecks dragging down team productivity.',
    tags: ['System Audit', 'Workflow Review', 'Integration Discovery'],
  },
  {
    num: '2',
    title: 'Integration Opportunity Mapping',
    h3: '2. Integration Opportunity Mapping',
    body: 'Our architects isolate your highest-value automation paths, defining clear project milestones based on manual effort reduction, execution accuracy, and immediate returns on your technology investment.',
    tags: ['Integration Roadmap', 'AI Automation Roadmap', 'Priority Mapping'],
    note: 'We connect high-impact handoffs first.',
  },
  {
    num: '3',
    title: 'Data Flow and API Architecture',
    h3: '3. Data Flow and API Architecture',
    body: 'Before writing code, we diagram complete structural pathways—detailing field definitions, API webhooks, validation rules, token limits, and secure approval steps to ensure safe data handling.',
    tags: ['API Architecture', 'Data Flow Mapping', 'Integration Design'],
  },
  {
    num: '4',
    title: 'Build Connectors and Automation Logic',
    h3: '4. Build Connectors and Automation Logic',
    body: 'Our team writes high-performance integration code, deploys secure endpoints, maps your custom data objects, embeds defensive error handling, and builds intuitive user interfaces for human verification steps.',
    tags: ['AI Connector Build', 'API Workflow Automation', 'Custom Integrations'],
    href: '/services/custom-ai-solutions',
  },
  {
    num: '5',
    title: 'Test Data Quality, Permissions, and Edge Cases',
    h3: '5. Test Data Quality, Permissions, and Edge Cases',
    body: 'We run exhaustive quality checks under heavy processing loads—testing data schema mismatches, failed API sync responses, duplicate records, access boundary constraints, and network latency anomalies.',
    tags: ['Integration Testing', 'Data Sync Testing', 'API Testing'],
    checklist: [
      'Sample data validation',
      'Failed sync simulation',
      'Duplicate record handling',
      'Permission and access testing',
      'Latency and timeout checks',
      'User handoff verification',
    ],
  },
  {
    num: '6',
    title: 'Launch, Monitor, and Improve Sync',
    h3: '6. Launch, Monitor, and Improve Sync',
    body: 'We push your integrations live with complete monitoring setups, tracking real-world processing metrics and fine-tuning prompts to optimize system efficiency as your operations expand.',
    tags: ['Integration Monitoring', 'Workflow Optimization', 'Post-Launch Support'],
    href: '/services/workflow-optimization',
    isFinal: true,
  },
];

export default function AIIntegrationProcess() {
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
          Our AI Integration Implementation Process
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 64px',
          }}
        >
          ThePrimeCrafters delivers rapid development backed by exhaustive quality assurance. Our six-step implementation framework moves projects safely from initial audit to continuous post-launch optimization:
        </p>

        {/* Two-column layout: step nav left, detail right */}
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
                    (e.currentTarget as HTMLButtonElement).style.background =
                      'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      'rgba(255,255,255,0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeStep !== i) {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      'transparent';
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      'transparent';
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
              padding: '40px 40px',
              minHeight: '360px',
            }}
          >
            {/* Step badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
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

            {/* QA Checklist */}
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
                    <span style={{ color: '#C9A84C', fontSize: '13px' }}>✓</span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: '#A0A0A0',
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
            {active.href && (
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
                {active.isFinal
                  ? 'Explore Workflow Optimization →'
                  : 'Explore Custom AI Solutions →'}
              </Link>
            )}

            {/* Final step CTA */}
            {active.isFinal && (
              <div style={{ marginTop: '28px' }}>
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
                  Book a Free AI Integration Strategy Call →
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
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: activeStep === 0 ? '#444444' : '#C9A84C',
                  background: 'transparent',
                  border: `1px solid ${activeStep === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(201,168,76,0.3)'}`,
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
                  setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
                }
                disabled={activeStep === steps.length - 1}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color:
                    activeStep === steps.length - 1 ? '#444444' : '#C9A84C',
                  background: 'transparent',
                  border: `1px solid ${activeStep === steps.length - 1 ? 'rgba(255,255,255,0.06)' : 'rgba(201,168,76,0.3)'}`,
                  borderRadius: '6px',
                  padding: '8px 16px',
                  cursor:
                    activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
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
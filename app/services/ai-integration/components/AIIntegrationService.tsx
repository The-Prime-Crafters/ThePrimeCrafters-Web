// components/services/ai-integration/AIIntegrationService.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const whoNeedsChecklist = [
  'Operations that rely on manual extraction, cleaning, and inputting of data across multiple software environments',
  'Critical business databases and customer pipelines that fall out of sync, leading to delayed outreach or mismatched status dashboards',
  'Scaling lead pipelines, incoming user queries, or support systems that overwhelm standard administrative staffing capabilities',
  'Recently adopted generative AI solutions or voice agents that operate in isolation from main records and internal tools',
];

const scopeSteps = [
  { num: '01', title: 'Comprehensive System Audits & Technical Discovery', body: 'Deep mapping of your operational platforms, current code bases, and API configurations.' },
  { num: '02', title: 'Data Flow Optimization & Logic Architecture', body: 'Designing the structural blueprints for how data, triggers, and intelligence interact securely.' },
  { num: '03', title: 'Bespoke API Engineering & Connector Development', body: 'Writing clean, high-performance middleware and configuring secure webhook relays.' },
  { num: '04', title: 'Model Optimization & Content Safeguarding', body: 'Tuning prompt instructions, data processing rules, and token management frameworks.' },
  { num: '05', title: 'End-to-End Functional & Boundary Quality Testing', body: 'Simulating data drops, API limits, validation errors, and multi-tenant performance metrics.' },
  { num: '06', title: 'Deployment, Native Logging, & Iterative Tuning', body: 'Launching live production environments alongside performance tracking dashboards for post-launch enhancement.' },
];

export default function AIIntegrationService() {
  const [definitionOpen, setDefinitionOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);

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
          bottom: '-100px',
          right: '-100px',
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
          Our Service
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
            margin: '0 auto 56px',
          }}
        >
          AI Integrations Built Around Your Existing Tech Stack
        </h2>

        {/* Two-column: accordions left, scope right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
        >
          {/* Left: Definition + Who Needs + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Definition callout box */}
            <div
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setDefinitionOpen(!definitionOpen)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '22px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  What Are AI Integration Services?
                </h3>
                <span
                  style={{
                    color: '#C9A84C',
                    fontSize: '20px',
                    flexShrink: 0,
                    transition: 'transform 0.25s',
                    display: 'inline-block',
                    transform: definitionOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              {definitionOpen && (
                <div style={{ padding: '0 24px 24px' }}>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      color: '#A0A0A0',
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    AI integration services comprise the technical strategy, software development, data mapping, and API engineering required to embed intelligent models and automated logic directly inside an organization's existing software stack. Rather than forcing teams to adopt completely new platforms, it updates native systems (such as CRMs, web infrastructures, database servers, and internal tools) so that AI logic functions natively inside current operational channels.
                  </p>
                </div>
              )}
            </div>

            {/* Who Needs */}
            <div
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setWhoOpen(!whoOpen)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '22px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  Who Needs AI Integration Services?
                </h3>
                <span
                  style={{
                    color: '#C9A84C',
                    fontSize: '20px',
                    flexShrink: 0,
                    transition: 'transform 0.25s',
                    display: 'inline-block',
                    transform: whoOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>
              {whoOpen && (
                <div style={{ padding: '0 24px 24px' }}>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      color: '#A0A0A0',
                      lineHeight: 1.7,
                      margin: '0 0 14px',
                    }}
                  >
                    Our tailored systems are built precisely for expanding corporations, agile mid-market organizations, and high-volume enterprises experiencing the following operational bottlenecks:
                  </p>
                  {whoNeedsChecklist.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '12px',
                      }}
                    >
                      <span
                        style={{
                          color: '#C9A84C',
                          fontSize: '14px',
                          marginTop: '2px',
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '14px',
                          color: '#A0A0A0',
                          lineHeight: 1.7,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                  <Link
                    href="/contact"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#C9A84C',
                      textDecoration: 'none',
                      display: 'inline-block',
                      marginTop: '8px',
                    }}
                  >
                    Talk to us about your workflow →
                  </Link>
                </div>
              )}
            </div>

            {/* About CTA */}
            <Link
              href="/about-us"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.35)',
                padding: '14px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
                background: 'transparent',
              }}
            >
              About ThePrimeCrafters →
            </Link>
          </div>

          {/* Right: 6-step scope list */}
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '8px',
              }}
            >
              What ThePrimeCrafters Handles
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: '#777777',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              We take complete technical ownership of your infrastructure's evolution through a comprehensive service scope:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {scopeSteps.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    padding: '20px 0',
                    borderBottom:
                      i < scopeSteps.length - 1
                        ? '1px solid rgba(255,255,255,0.06)'
                        : 'none',
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'rgba(201,168,76,0.5)',
                      letterSpacing: '1px',
                      minWidth: '24px',
                      paddingTop: '2px',
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Content */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        margin: '0 0 6px',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: '#777777',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#A0A0A0',
              margin: 0,
            }}
          >
            Learn More: Explore{' '}
            <Link href="/about-us" style={{ color: '#C9A84C', textDecoration: 'none' }}>
              About Us
            </Link>{' '}
            or submit an inquiry directly via our{' '}
            <Link href="/contact" style={{ color: '#C9A84C', textDecoration: 'none' }}>
              Contact Page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
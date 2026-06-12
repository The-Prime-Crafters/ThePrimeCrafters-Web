// components/services/ai-integration/AIIntegrationService.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const whoNeedsChecklist = [
  'Businesses with disconnected tools and manual data transfer',
  'Teams with CRM gaps or growing lead volume',
  'Operations dealing with support queues and routing delays',
  'Companies with AI tools that do not connect to daily workflows',
  'Anyone facing reporting issues caused by scattered system data',
];

const scopeSteps = [
  { num: '01', title: 'System Audit', body: 'Review current tools, data sources, users, permissions, bottlenecks, and goals.' },
  { num: '02', title: 'Workflow Mapping', body: 'Map how work and data move across your stack today before designing anything.' },
  { num: '03', title: 'API Planning', body: 'Define which APIs, endpoints, auth methods, and data fields the integration requires.' },
  { num: '04', title: 'Data Mapping', body: 'Align field names, formats, sync direction, and transformation logic between systems.' },
  { num: '05', title: 'Connector Build', body: 'Build production-ready connectors with AI logic, error handling, and notifications.' },
  { num: '06', title: 'Testing and Optimization', body: 'Validate against real data, fix edge cases, deploy, monitor, and refine post-launch.' },
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
                    AI integration services connect AI systems with CRMs, websites, APIs, databases, communication tools, and internal software — so AI can act inside real workflows. Instead of producing output in a separate chat or tool, integrated AI updates records, routes tasks, triggers notifications, and supports decisions within the systems your team already uses.
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
                marginBottom: '24px',
              }}
            >
              What ThePrimeCrafters Handles
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
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';

const whoNeedsChecklist = [
  'High inbound call or chat volume that exceeds team capacity',
  'Slow lead follow up that costs conversions to faster competitors',
  'Repeated support questions that do not require human judgment to answer',
  'Manual booking, scheduling, or intake that delays the customer experience',
  'Scattered CRM data caused by inconsistent manual entry after calls or chats',
  'Staff spending significant time on admin tasks that could be automated',
];

const scopeSteps = [
  { num: '01', title: 'Discovery', body: 'Review current call, chat, CRM, booking, support, and operations workflows.' },
  { num: '02', title: 'Conversation Design', body: 'Define scripts, intents, tone, fallback rules, and escalation paths.' },
  { num: '03', title: 'Knowledge Setup', body: 'Build the approved knowledge base, rules, and guardrails the agent operates within.' },
  { num: '04', title: 'Tool Integration', body: 'Connect the agent with CRMs, calendars, ticket systems, and custom APIs.' },
  { num: '05', title: 'Testing and QA', body: 'Real scenarios, wrong inputs, edge cases, handoffs, and escalation logic.' },
  { num: '06', title: 'Launch, Monitor, and Optimize', body: 'Deploy, review transcripts, refine prompts, improve workflows.' },
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
            margin: '0 auto 20px',
          }}
        >
          AI Agent Development Services Built Around Real Business Workflows
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto 56px',
          }}
        >
          ThePrimeCrafters is the team that designs, builds, integrates, tests, and continuously improves AI agents for sales, support, admin, and operations. Every agent is built around real business workflows, connected to the tools your team already uses, and scoped carefully so it operates within approved limits from day one.
        </p>

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
                  What Are AI Agent Development Services?
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
                    AI agent development services are the process of designing and building AI systems that can understand requests, take approved actions, connect with business tools, and complete multi step workflows, without requiring a human to handle each step manually. This includes scoping the use case, designing the conversation logic, building the agent, integrating it with CRMs and other platforms, testing edge cases, deploying, and improving performance over time.
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
                  Who Needs AI Agent Development Services?
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
                    AI agents are the right fit for businesses with:
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
                      <span style={{ color: '#C9A84C', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#A0A0A0', lineHeight: 1.7 }}>
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
                    Talk to us about your use case →
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
              End to end from strategy to post launch optimization:
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
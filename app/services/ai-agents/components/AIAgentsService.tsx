// components/services/ai-agents/AIAgentsService.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const whoNeedsChecklist = [
  'Businesses with high call or chat volume and slow response times',
  'Teams spending hours on repeated FAQs, logging, and manual follow-up',
  'Sales operations with slow lead qualification and missed follow-ups',
  'Service businesses with manual booking, reminders, and scheduling',
  'Support teams overwhelmed by repetitive tickets and status requests',
  'Operations dealing with scattered data and manual internal handoffs',
];

const scopeSteps = [
  {
    num: '01',
    title: 'Discovery',
    body: 'Review current call, chat, CRM, booking, support, and operations workflows before designing the agent.',
  },
  {
    num: '02',
    title: 'Conversation Design',
    body: 'Define scripts, intents, tone, fallback rules, escalation paths, and success metrics for every agent flow.',
  },
  {
    num: '03',
    title: 'Knowledge Setup',
    body: 'Build and structure the approved knowledge base, business rules, product details, and guardrails the agent operates within.',
  },
  {
    num: '04',
    title: 'Tool Integration',
    body: 'Connect the agent with CRMs, calendars, forms, ticket tools, databases, communication platforms, and custom APIs.',
  },
  {
    num: '05',
    title: 'Testing and QA',
    body: 'Test real scenarios, wrong inputs, sensitive requests, failed tool calls, duplicate records, handoffs, and escalation logic.',
  },
  {
    num: '06',
    title: 'Launch, Monitor, and Optimize',
    body: 'Deploy the agent, review transcripts and logs, improve prompts and rules, and adjust workflows based on real usage.',
  },
];

export default function AIAgentsService() {
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
          AI Agents Built Around Your Customers, Workflows, Data, and Tools
        </h2>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
        >
          {/* Left: accordions + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Definition accordion */}
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
                    display: 'inline-block',
                    transform: definitionOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
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
                    AI agent development services design and build AI systems that can understand requests, take approved actions, connect with business tools, and complete workflows automatically. Unlike basic chatbots that follow rigid scripts, custom AI agents handle multi-turn conversations, apply business logic, access connected systems, escalate to humans when needed, and improve based on real usage data.
                  </p>
                </div>
              )}
            </div>

            {/* Who Needs accordion */}
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
                  Who Needs AI Agents?
                </h3>
                <span
                  style={{
                    color: '#C9A84C',
                    fontSize: '20px',
                    flexShrink: 0,
                    display: 'inline-block',
                    transform: whoOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
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
                    Talk to us about your workflows →
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

            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                      flexShrink: 0,
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
      </div>
    </section>
  );
}
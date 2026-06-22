// components/services/workflow-optimization/WorkflowOptimizationService.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

const whoNeedsChecklist = [
  'Your team repeats the same manual tasks every day with no clear plan to remove them',
  'Ownership of tasks, leads, or tickets is unclear and work falls through the cracks',
  'Approvals stall because no one is sure who is supposed to act next',
  'Your tools do not talk to each other and data has to be copied manually between them',
  'Follow ups get missed because nothing reminds anyone to send them',
  'You have automation or AI ideas but no clear process to plug them into',
  'Leadership has limited visibility into where work is actually stuck',
];

const scopeSteps = [
  {
    num: '01',
    title: 'Workflow Audit',
    body: 'Review current workflows, tools, users, handoffs, repeated tasks, delays, exceptions, and business goals.',
  },
  {
    num: '02',
    title: 'Process Mapping',
    body: 'Document every step, owner, system, status, and decision point across the key workflows being optimised.',
  },
  {
    num: '03',
    title: 'Bottleneck Analysis',
    body: 'Identify exactly where work stalls, where ownership breaks down, where data gets lost, and where manual effort is highest.',
  },
  {
    num: '04',
    title: 'Automation Roadmap',
    body: 'Plan which steps should be automated, which need AI support, which stay human reviewed, and in what order to build them.',
  },
  {
    num: '05',
    title: 'AI Opportunity Mapping',
    body: 'Identify where AI can classify, summarise, score, route, or draft within the optimised workflow without removing human oversight where it matters.',
  },
  {
    num: '06',
    title: 'KPI Tracking and Improvement',
    body: 'Define success metrics before launch, track post launch performance against them, and refine the workflow based on real usage data.',
  },
];

export default function WorkflowOptimizationService() {
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
          Workflow Optimization Built Around How Your Team Actually Works
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
          The Prime Crafters audits how work actually moves through your business, maps every handoff and decision point, identifies where bottlenecks are hiding, and designs a workflow that is ready for automation and AI before any tool gets built. The goal is not a process diagram that sits in a folder. It is a working operating system your team actually uses.
        </p>

        {/* Two-column: accordions left, scope table right */}
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
                  What Is AI Workflow Optimization?
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
                    AI workflow optimization is the practice of improving how work moves through a business by mapping current processes, identifying bottlenecks, designing clear ownership and routing logic, and introducing AI support where it adds real value. It combines workflow mapping, automation planning, AI assisted steps such as summarising and routing, and continuous measurement so teams complete the same work with fewer manual steps and less wasted time. Unlike simply buying new software, workflow optimization starts with the process itself and only adds tools once the logic is clear.
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
                  Who Needs Workflow Optimization Services?
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

          {/* Right: scope table */}
          <div>
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '12px',
              }}
            >
              What ThePrimeCrafters Handles
            </h3>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#777777',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Every engagement covers the full path from audit to ongoing improvement:
            </p>

            <div
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                <thead>
                  <tr style={{ background: '#1a1a1a' }}>
                    {['Phase', 'What We Do'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '13px 18px',
                          textAlign: 'left',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          letterSpacing: '0.02em',
                          borderBottom: '1px solid rgba(201,168,76,0.2)',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scopeSteps.map((step, i) => (
                    <tr
                      key={step.num}
                      style={{
                        background:
                          i % 2 === 0
                            ? 'rgba(255,255,255,0.02)'
                            : 'rgba(255,255,255,0.04)',
                        borderBottom:
                          i < scopeSteps.length - 1
                            ? '1px solid rgba(255,255,255,0.05)'
                            : 'none',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 18px',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#C9A84C',
                          whiteSpace: 'nowrap',
                          verticalAlign: 'top',
                          borderRight: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        {step.num}&nbsp;&nbsp;{step.title}
                      </td>
                      <td
                        style={{
                          padding: '14px 18px',
                          fontSize: '13px',
                          color: '#A0A0A0',
                          lineHeight: 1.65,
                          verticalAlign: 'top',
                        }}
                      >
                        {step.body}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
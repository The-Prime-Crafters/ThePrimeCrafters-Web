// components/services/workflow-optimization/WorkflowOptimizationProblem.tsx
'use client';

import Link from 'next/link';

const problems = [
  {
    icon: '🔁',
    h3: 'Manual Handoffs Slow Everything Down',
    body: 'Every time a lead, task, approval, note, or update has to move manually from one person or tool to another, there is a delay built into the process. Someone has to remember to do it, find the time to do it, and do it correctly. Multiply that across dozens of handoffs a day and the lost time becomes significant, even though no single handoff feels like a big deal on its own.',
    href: '/services/process-automation',
  },
  {
    icon: '🔀',
    h3: 'Teams Use Too Many Disconnected Tools',
    body: 'CRMs, spreadsheets, inboxes, calendars, forms, chat tools, dashboards, and internal systems rarely share context with each other automatically. A customer update lives in the inbox. The task lives in a project tool. The record lives in the CRM. None of them know what the others are doing. The result is duplicated work, conflicting information, and a constant manual effort to keep everything aligned.',
    href: '/services/ai-integration',
  },
  {
    icon: '⏳',
    h3: 'Bottlenecks Hide Inside Approvals and Status Updates',
    body: 'The slowest parts of a workflow are often invisible until someone goes looking for them. A stalled approval sitting in someone\'s inbox. An unclear owner who assumes someone else is handling it. A status update that never went out because no one was responsible for sending it. These small gaps compound into real delays that affect revenue, customer experience, and team morale.',
    href: '/case-studies',
  },
  {
    icon: '⚠️',
    h3: 'Automation Fails When the Workflow Is Not Mapped First',
    body: 'The most common reason automation projects fail is that they were built on top of a process that was never clearly defined. Effective automation needs clear steps, defined triggers, explicit ownership, documented exceptions, and success metrics established before any tool gets built. Automating a workflow that was never mapped does not fix the workflow. It just makes the same confusion happen faster and with less visibility into what went wrong.',
    href: '/services/process-automation',
  },
];

const comparisonRows = [
  {
    left: 'Build tools before mapping the process',
    right: 'Map the workflow before selecting any tool',
  },
  {
    left: 'Automation breaks at every exception',
    right: 'Automation handles exceptions by design',
  },
  {
    left: 'Unclear ownership causes repeated failures',
    right: 'Ownership and routing defined from the start',
  },
  {
    left: 'More tools, more complexity, same problems',
    right: 'AI and tools added into a clear process',
  },
];

export default function WorkflowOptimizationProblem() {
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
          The Problem
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
            maxWidth: '720px',
            margin: '0 auto 20px',
          }}
        >
          Messy Workflows Keep Teams Busy Without Moving Work Forward
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 56px',
          }}
        >
          A team can be fully occupied every single day and still not be making real progress. Manual handoffs, repeated status updates, scattered tools, unclear ownership, hidden bottlenecks, and missed follow ups all create the feeling of constant activity without actual forward motion. Automation rarely fixes this on its own. When a workflow is never mapped before tools get added, the automation just speeds up the confusion instead of removing it.
        </p>

        {/* Pain-point cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {problems.map((p) => (
            <div
              key={p.h3}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'border-color 0.25s, background 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(201,168,76,0.3)';
                el.style.background = 'rgba(201,168,76,0.03)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <span style={{ fontSize: '28px' }}>{p.icon}</span>

              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {p.h3}
              </h3>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#888888',
                  lineHeight: 1.75,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {p.body}
              </p>

              <Link
                href={p.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#C9A84C',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison block — table */}
        <div
          style={{
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '56px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 16px',
              padding: '24px 24px 0',
            }}
          >
            Comparison block:
          </p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            <thead>
              <tr style={{ background: '#1a1a1a' }}>
                {['Automate Chaos', 'Optimize First'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '14px 24px',
                      textAlign: 'left',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      borderBottom: '1px solid rgba(201,168,76,0.2)',
                      width: '50%',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.left}
                  style={{
                    background:
                      i % 2 === 0
                        ? 'rgba(255,255,255,0.02)'
                        : 'rgba(255,255,255,0.04)',
                    borderBottom:
                      i < comparisonRows.length - 1
                        ? '1px solid rgba(255,255,255,0.05)'
                        : 'none',
                  }}
                >
                  <td
                    style={{
                      padding: '16px 24px',
                      fontSize: '14px',
                      color: '#A0A0A0',
                      lineHeight: 1.6,
                      borderRight: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {row.left}
                  </td>
                  <td
                    style={{
                      padding: '16px 24px',
                      fontSize: '14px',
                      color: '#A0A0A0',
                      lineHeight: 1.6,
                    }}
                  >
                    {row.right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA anchor */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0A0A0A',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Talk to a Workflow Optimization Expert →
          </Link>
        </div>
      </div>
    </section>
  );
}
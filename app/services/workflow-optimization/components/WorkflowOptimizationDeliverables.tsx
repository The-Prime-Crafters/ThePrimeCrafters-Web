// components/services/workflow-optimization/WorkflowOptimizationDeliverables.tsx
'use client';

import Link from 'next/link';

const deliverables = [
  {
    icon: '📈',
    h3: 'Sales and Lead Handoff Workflows',
    body: 'Improve lead capture, qualification, CRM updates, ownership, reminders, follow-up timing, and sales pipeline movement so leads never stall between capture and close.',
    keywords: ['Sales Workflow Optimization', 'Lead Handoff Automation', 'CRM Workflow Optimization'],
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '💬',
    h3: 'Customer Support and Ticket Workflows',
    body: 'Map support requests from chat, email, forms, voice agents, and tickets into clear routing, escalation paths, AI summaries, and status updates that keep teams and customers informed.',
    keywords: ['Support Workflow Optimization', 'Ticket Routing Automation'],
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '⚙️',
    h3: 'Operations and Admin Workflows',
    body: 'Improve task routing, internal requests, approvals, reminders, scheduling, document handoffs, and operational reporting across departments without adding more tool complexity.',
    keywords: ['Operations Workflow Optimization', 'Admin Workflow Automation'],
    href: '/services/process-automation',
  },
  {
    icon: '✅',
    h3: 'Approval and Review Workflows',
    body: 'Clarify approval owners, review stages, thresholds, reminders, escalation paths, and human-in-the-loop steps for sensitive actions — so decisions get made without chasing people.',
    keywords: ['Approval Workflow Optimization', 'Human In The Loop Automation'],
    href: '/contact',
  },
  {
    icon: '📊',
    h3: 'Reporting and Dashboard Workflows',
    body: 'Turn scattered updates and system activity into useful summaries, dashboards, alerts, and recurring performance reports that give teams and leadership real visibility.',
    keywords: ['Workflow Reporting', 'Dashboard Automation', 'KPI Tracking'],
    href: '/case-studies',
  },
  {
    icon: '🔄',
    h3: 'CRM and Data Sync Workflows',
    body: 'Improve how records, notes, stages, tasks, contacts, call summaries, and follow-ups move between tools — keeping CRM data accurate without manual entry at every step.',
    keywords: ['CRM Workflow Optimization', 'Data Sync Automation', 'CRM Automation'],
    href: '/services/ai-integration',
  },
  {
    icon: '🎙️',
    h3: 'AI Agent and Chatbot Workflows',
    body: 'Design workflows that connect AI voice agents and chatbots to lead records, tickets, summaries, scheduling, and team follow-ups so every conversation drives a clear next action.',
    keywords: ['AI Agent Workflow', 'Chatbot Workflow Automation', 'Voice Agent Workflows'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '📚',
    h3: 'Internal Knowledge and SOP Workflows',
    body: 'Make SOPs, documents, policies, project notes, and service information easier to find, update, and use inside daily workflows — so teams spend less time searching and more time acting.',
    keywords: ['SOP Workflow Optimization', 'Knowledge Base Workflow', 'Internal AI Assistant'],
    href: '/services/custom-ai-solutions',
  },
];

export default function WorkflowOptimizationDeliverables() {
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
          What We Optimize
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
          Business Workflows ThePrimeCrafters Can Optimize
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '580px',
            margin: '0 auto 56px',
          }}
        >
          From lead handoffs to internal approvals — we map, redesign, and improve the workflows that slow teams down, with AI and automation added where they create the most value.
        </p>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {deliverables.map((d) => (
            <div
              key={d.h3}
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
                el.style.background = 'rgba(201,168,76,0.04)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {/* Icon */}
              <span style={{ fontSize: '28px' }}>{d.icon}</span>

              {/* H3 */}
              <h3
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {d.h3}
              </h3>

              {/* Body */}
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
                {d.body}
              </p>

              {/* Keyword pills */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {d.keywords.map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 500,
                      color: 'rgba(201,168,76,0.7)',
                      background: 'rgba(201,168,76,0.06)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      borderRadius: '999px',
                      padding: '3px 10px',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={d.href}
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

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <Link
            href="/services"
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
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
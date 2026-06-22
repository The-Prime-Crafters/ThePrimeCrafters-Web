// components/services/workflow-optimization/WorkflowOptimizationDeliverables.tsx
'use client';

import Link from 'next/link';

const deliverables = [
  {
    icon: '📈',
    h3: 'Sales and Lead Handoff Workflows',
    body: 'Leads stall when capture, qualification, and ownership are not clearly defined. The Prime Crafters improves how leads are captured, qualified, assigned an owner, updated in the CRM, and followed up on so that no lead sits untouched between the moment it arrives and the moment a rep engages with it. The pipeline keeps moving instead of accumulating gaps.',
    keywords: ['Sales Workflow Optimization', 'Lead Handoff Automation', 'CRM Workflow Optimization'],
    href: '/case-study/lead-generation-tools',
  },
  {
    icon: '💬',
    h3: 'Customer Support and Ticket Workflows',
    body: 'Support requests arrive from chat, email, forms, voice agents, and ticketing systems, often with no consistent routing logic between channels. The Prime Crafters maps these requests into clear routing rules, escalation paths, AI generated summaries, and status updates so customers get faster answers and support teams are not manually triaging every incoming message.',
    keywords: ['Support Workflow Optimization', 'Ticket Routing Automation'],
    href: '/services/custom-ai-solutions',
  },
  {
    icon: '⚙️',
    h3: 'Operations and Admin Workflows',
    body: 'Internal operations often rely on informal coordination that breaks down as teams grow. The Prime Crafters improves task routing, internal requests, approval chains, reminders, scheduling, document handoffs, and operational reporting so departments stay coordinated without anyone manually chasing the next step.',
    keywords: ['Operations Workflow Optimization', 'Admin Workflow Automation'],
    href: '/services/process-automation',
  },
  {
    icon: '✅',
    h3: 'Approval and Review Workflows',
    body: 'Approvals stall most often because ownership is unclear or because there is no reminder system to push a pending decision forward. The Prime Crafters clarifies approval owners, defines review stages and thresholds, builds in reminders and escalation paths, and keeps human in the loop steps in place for sensitive decisions while removing the manual chasing around them.',
    keywords: ['Approval Workflow Optimization', 'Human In The Loop Automation'],
    href: '/contact',
  },
  {
    icon: '📊',
    h3: 'Reporting and Dashboard Workflows',
    body: 'When system activity and status updates are scattered across tools, building a useful report becomes a manual research project every time. The Prime Crafters turns that scattered activity into automated summaries, live dashboards, threshold based alerts, and recurring performance reports so leadership and teams see what is happening without anyone compiling it by hand.',
    keywords: ['Workflow Reporting', 'Dashboard Automation', 'KPI Tracking'],
    href: '/case-studies',
  },
  {
    icon: '🔄',
    h3: 'CRM and Data Sync Workflows',
    body: 'CRM accuracy depends entirely on how reliably records, notes, stages, tasks, contacts, call summaries, and follow ups move between systems. The Prime Crafters improves these data flows so the CRM stays accurate without requiring manual entry at every step, giving sales and support teams a single source of truth they can actually trust.',
    keywords: ['CRM Workflow Optimization', 'Data Sync Automation', 'CRM Automation'],
    href: '/services/ai-integration',
  },
  {
    icon: '🎙️',
    h3: 'AI Agent and Chatbot Workflows',
    body: 'Voice agents and chatbots only deliver real value when their output connects cleanly into the rest of the business. The Prime Crafters designs the workflow around these AI agents, connecting call and chat outcomes to lead records, ticket systems, summaries, scheduling tools, and team follow up tasks so every conversation produces a clear next action instead of disappearing into a transcript no one reviews.',
    keywords: ['AI Agent Workflow', 'Chatbot Workflow Automation', 'Voice Agent Workflows'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    icon: '📚',
    h3: 'Internal Knowledge and SOP Workflows',
    body: 'Teams waste real time searching for the right document, policy, or set of instructions buried somewhere in shared drives or old messages. The Prime Crafters improves how SOPs, documents, policies, project notes, and service information are organised, updated, and surfaced inside daily workflows, scoped carefully to what each team actually needs access to.',
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
            maxWidth: '620px',
            margin: '0 auto 56px',
          }}
        >
          From lead handoffs to internal approvals, The Prime Crafters maps, redesigns, and improves the workflows that slow teams down most, adding AI and automation only where they create real value.
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
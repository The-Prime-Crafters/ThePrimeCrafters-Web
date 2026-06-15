// components/services/workflow-optimization/WorkflowOptimizationAbout.tsx
'use client';

import Link from 'next/link';

const serviceEntities = [
  { label: 'Workflow Optimization', href: '/services' },
  { label: 'Process Automation', href: '/services/process-automation' },
  { label: 'AI Integration', href: '/services/ai-integration' },
  { label: 'Custom AI Systems', href: '/services/custom-ai-solutions' },
];

const workflowEntities = [
  { label: 'Sales Workflows', href: '/services/workflow-optimization' },
  { label: 'Support Workflows', href: '/services/workflow-optimization' },
  { label: 'Operations Workflows', href: '/services/workflow-optimization' },
  { label: 'Approval Workflows', href: '/services/workflow-optimization' },
  { label: 'Reporting Workflows', href: '/services/workflow-optimization' },
  { label: 'CRM Workflows', href: '/services/ai-integration' },
];

const teamEntities = [
  { label: 'Sales Teams', href: '/services/workflow-optimization' },
  { label: 'Support Teams', href: '/services/workflow-optimization' },
  { label: 'Operations Teams', href: '/services/workflow-optimization' },
  { label: 'Admin Teams', href: '/services/workflow-optimization' },
  { label: 'Marketing Teams', href: '/services/workflow-optimization' },
  { label: 'Service Businesses', href: '/services/workflow-optimization' },
];

export default function WorkflowOptimizationAbout() {
  return (
    <section
      style={{
        background: '#0A0A0A',
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

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
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
          About ThePrimeCrafters
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(26px, 3vw, 40px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.25,
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 32px',
          }}
        >
          ThePrimeCrafters Provides AI Workflow Optimization for Business Automation
        </h2>

        {/* Entity paragraph */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#909090',
            lineHeight: 1.85,
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 56px',
          }}
        >
          ThePrimeCrafters is a workflow optimization agency that maps, redesigns, and improves business processes across sales, support, operations, lead generation, admin, CRM, approval, and reporting workflows. Work spans workflow audits, process mapping, bottleneck analysis, automation roadmaps, AI opportunity mapping, tool alignment, documentation, KPI tracking, and post-launch improvement — all built around how your business actually operates, not a generic template.
        </p>

        {/* Two entity panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {/* Service entities */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px 28px',
            }}
          >
            <h3
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                margin: '0 0 20px',
              }}
            >
              Workflow Optimization, Process Automation, AI Integration, and Custom AI Systems
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {serviceEntities.map((e) => (
                <Link
                  key={e.label}
                  href={e.href}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    borderRadius: '999px',
                    padding: '7px 16px',
                    textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(201,168,76,0.14)';
                    el.style.borderColor = 'rgba(201,168,76,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(201,168,76,0.07)';
                    el.style.borderColor = 'rgba(201,168,76,0.2)';
                  }}
                >
                  {e.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Workflow + team entities */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Workflow entities */}
            <div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  margin: '0 0 14px',
                }}
              >
                Built for Sales, Support, Operations, Admin, Reporting, CRM, and Service Workflows
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {workflowEntities.map((e) => (
                  <Link
                    key={e.label}
                    href={e.href}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '999px',
                      padding: '5px 14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#C9A84C';
                      el.style.borderColor = 'rgba(201,168,76,0.3)';
                      el.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#A0A0A0';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.06)',
              }}
            />

            {/* Team entities */}
            <div>
              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  margin: '0 0 14px',
                }}
              >
                Built for Sales, Support, Operations, Admin, Marketing, and Service Business Teams
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {teamEntities.map((e) => (
                  <Link
                    key={e.label}
                    href={e.href}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '999px',
                      padding: '5px 14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#C9A84C';
                      el.style.borderColor = 'rgba(201,168,76,0.3)';
                      el.style.background = 'rgba(201,168,76,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = '#A0A0A0';
                      el.style.borderColor = 'rgba(255,255,255,0.08)';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            All Services →
          </Link>
          <Link
            href="/case-studies"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
// components/services/workflow-optimization/WorkflowOptimizationCaseStudies.tsx
'use client';

import Link from 'next/link';

const caseStudies = [
  {
    category: 'Lead Generation Workflow',
    h3: 'AI Lead Generation Tools',
    body: 'A complete lead generation workflow optimised from first capture to qualified sales handoff, covering lead scraping, enrichment, scoring, outreach automation, and CRM handoffs.',
    metrics: [
      { label: 'Qualified Leads Per Month', value: '50,000+' },
      { label: 'Manual Prospecting Time Saved', value: '90%' },
      { label: 'Qualified Lead Rate Increase', value: '+120%' },
    ],
    keywords: ['Lead Generation Workflow Optimization', 'CRM Workflow Case Study'],
    href: '/case-study/lead-generation-tools',
  },
  {
    category: 'Sales and Call Workflow',
    h3: 'Spectrum AI Voice Agent',
    body: 'Every call outcome connected automatically into the sales pipeline, covering call handling, lead qualification, AI summaries, routing, and sales team follow up workflows without manual entry.',
    metrics: [
      { label: 'AI Handled Calls Per Month', value: '10,000+' },
      { label: 'Conversion Rate Increase', value: '+45%' },
      { label: 'Operational Cost Reduction', value: '70%' },
    ],
    keywords: ['AI Voice Agent Workflow', 'Sales Workflow Optimization'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    category: 'Booking and Service Workflow',
    h3: 'RV Park AI Voice Agent',
    body: 'A service business kept connected from first call through confirmed booking, covering call answering, booking support, FAQ handling, and customer reminder workflows.',
    metrics: [
      { label: 'Inbound Call Answer Rate', value: '100%' },
      { label: 'Booking Conversion Increase', value: '+85%' },
      { label: 'Staff Hours Saved Per Week', value: '30 hrs' },
    ],
    keywords: ['Booking Workflow Automation', 'Service Business Workflow Case Study'],
    href: '/case-study/rv-park-voice-agent',
  },
  {
    category: 'Healthcare Admin Workflow',
    h3: 'lmn8 Ketamine Therapy AI Platform',
    body: 'Intake support, patient matching workflows, and scheduling support scoped carefully to the clinic environment, with measurable improvements to intake speed and clinic capacity.',
    metrics: [
      { label: 'AI Matching Accuracy', value: '94%' },
      { label: 'Intake Time Reduction', value: '65%' },
      { label: 'Clinic Capacity Increase', value: '+45%' },
    ],
    keywords: ['Healthcare Admin Workflow Case Study', 'Clinic Workflow Optimization'],
    href: '/case-study/lmn8-ketamine-therapy',
    note: 'Healthcare workflow claims kept specific to scoped environment.',
  },
  {
    category: 'Custom Platform Workflow',
    h3: '3vltn Domain AI Platform',
    body: 'A fully custom AI platform built around complex business operations, covering email agent workflows, automated campaigns, pricing recommendations, and connected system logic.',
    metrics: [
      { label: 'Deal Closure Rate Increase', value: '+250%' },
      { label: 'Manual Hours Saved Per Week', value: '40 hrs' },
      { label: 'Revenue Growth', value: '+180%' },
    ],
    keywords: ['Custom AI Workflow Platform', 'Custom Workflow Case Study'],
    href: '/case-study/3vltn',
  },
];

function MetricsTable({ metrics }: { metrics: { label: string; value: string }[] }) {
  return (
    <div
      style={{
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif' }}>
        <thead>
          <tr style={{ background: '#1a1a1a' }}>
            {['Metric', 'Result'].map((h) => (
              <th
                key={h}
                style={{
                  padding: '11px 16px',
                  textAlign: 'left',
                  fontSize: '12px',
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
          {metrics.map((row, i) => (
            <tr
              key={row.label}
              style={{
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                borderBottom: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#A0A0A0', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                {row.label}
              </td>
              <td style={{ padding: '12px 16px', fontSize: '13px', color: '#C9A84C', fontWeight: 600 }}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CaseStudyCard({ cs }: { cs: (typeof caseStudies)[0] }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        height: '100%',
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
      {/* Category */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#C9A84C',
          margin: 0,
        }}
      >
        {cs.category}
      </p>

      {/* H3 */}
      <h3
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '20px',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {cs.h3}
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
        {cs.body}
      </p>

      {/* Healthcare note */}
      {cs.note && (
        <div
          style={{
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.15)',
            borderLeft: '3px solid rgba(201,168,76,0.4)',
            borderRadius: '6px',
            padding: '10px 14px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: 'rgba(201,168,76,0.7)',
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {cs.note}
          </p>
        </div>
      )}

      {/* Metrics table */}
      <MetricsTable metrics={cs.metrics} />

      {/* Keyword pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {cs.keywords.map((kw) => (
          <span
            key={kw}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              color: 'rgba(201,168,76,0.6)',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.12)',
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
        href={cs.href}
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
        View case study →
      </Link>
    </div>
  );
}

export default function WorkflowOptimizationCaseStudies() {
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
          right: '-120px',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)',
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
          Proof
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
            margin: '0 auto 16px',
          }}
        >
          Workflow Optimization and Automation Systems We've Built
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 56px',
          }}
        >
          Real workflow optimization projects with measurable outcomes across lead generation, sales, booking automation, healthcare admin, and custom platform builds.
        </p>

        {/* Top 3 cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          {caseStudies.slice(0, 3).map((cs) => (
            <CaseStudyCard key={cs.h3} cs={cs} />
          ))}
        </div>

        {/* Bottom 2 cards centered */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px',
            maxWidth: '740px',
            margin: '0 auto 56px',
          }}
        >
          {caseStudies.slice(3).map((cs) => (
            <CaseStudyCard key={cs.h3} cs={cs} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/case-studies"
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
            Explore All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
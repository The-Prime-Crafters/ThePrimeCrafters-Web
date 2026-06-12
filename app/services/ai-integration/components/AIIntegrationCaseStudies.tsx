// components/services/ai-integration/AIIntegrationCaseStudies.tsx
'use client';

import Link from 'next/link';

const caseStudies = [
  {
    category: 'Lead Generation Integration',
    h3: 'AI Lead Generation Tools',
    body: 'Lead scraping, enrichment, scoring, outreach automation, CRM integration, and sales handoff — delivering qualified leads directly into connected sales workflows.',
    metric: '50K+',
    metricLabel: 'qualified leads per month',
    keywords: ['AI Lead Generation Integration', 'CRM Automation Case Study'],
    href: '/case-study/lead-generation-tools',
    angle: 'sales automation angle',
  },
  {
    category: 'Sales Workflow Integration',
    h3: 'Spectrum AI Voice Agent',
    body: 'AI voice calls handling lead qualification, call summaries, prospect routing, and CRM support — connecting every call outcome into the sales pipeline automatically.',
    metric: '10K+',
    metricLabel: 'AI-handled calls per month',
    keywords: ['AI Voice Agent Integration', 'Sales Workflow Integration'],
    href: '/case-study/spectrum-voice-agent',
    angle: 'sales automation angle',
  },
  {
    category: 'Booking & Service Integration',
    h3: 'RV Park AI Voice Agent',
    body: 'Call answering, booking workflows, FAQ handling, reminders, and customer update automation — keeping a service business connected from first call to confirmed booking.',
    metric: '100%',
    metricLabel: 'call answer rate',
    keywords: ['Booking Integration Case Study', 'AI Phone Agent Integration'],
    href: '/case-study/rv-park-voice-agent',
    angle: 'service business integration',
  },
  {
    category: 'Healthcare Admin Integration',
    h3: 'lmn8 Ketamine Therapy AI Platform',
    body: 'Intake support, patient matching workflows, scheduling support, and healthcare admin workflow connection — scoped carefully to the clinic environment.',
    metric: '65%',
    metricLabel: 'faster patient intake',
    keywords: ['Healthcare Workflow Integration', 'Clinic Admin Case Study'],
    href: '/case-study/lmn8-ketamine-therapy',
    note: 'Healthcare claims kept specific to scoped environment.',
  },
  {
    category: 'Custom Platform Integration',
    h3: '3vltn Domain AI Platform',
    body: 'Email agent, automated campaigns, pricing recommendations, deal workflows, and connected system logic — a fully integrated custom AI platform built around business operations.',
    metric: '+250%',
    metricLabel: 'deal closure rate',
    keywords: ['Custom AI Platform Integration', 'Custom API Integration Case Study'],
    href: '/case-study/3vltn',
    angle: 'custom API and platform angle',
  },
];

export default function AIIntegrationCaseStudies() {
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
          AI Integrations and Connected Systems We've Built
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
          Real integration projects with measurable outcomes across lead generation, sales workflows, booking automation, healthcare admin, and custom platform builds.
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
      {/* Category label */}
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

      {/* Metric */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          padding: '16px 20px',
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '10px',
        }}
      >
        <span
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            fontWeight: 700,
            color: '#C9A84C',
            lineHeight: 1,
          }}
        >
          {cs.metric}
        </span>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: '#888888',
          }}
        >
          {cs.metricLabel}
        </span>
      </div>

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
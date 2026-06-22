'use client';

import Link from 'next/link';

const caseStudies = [
  {
    category: 'Sales Voice Agent',
    h3: 'Spectrum AI Voice Agent',
    body: 'Voice calls, lead qualification, call summaries, routing, and CRM support. 10K+ monthly interactions handled automatically. Costs reduced by 70%, conversion rates up 45%.',
    metric: '10K+',
    metricLabel: 'AI-handled calls per month',
    keywords: ['AI Voice Agent Case Study', 'Sales Voice Agent'],
    href: '/case-study/spectrum-voice-agent',
  },
  {
    category: 'Booking Agent',
    h3: 'RV Park AI Voice Agent',
    body: 'Call answering, booking workflows, FAQs, reminders, and customer updates. 100% call answer rate. Saves administrative staff over 30 hours every week.',
    metric: '100%',
    metricLabel: 'call answer rate',
    keywords: ['Booking AI Agent Case Study', 'AI Phone Agent'],
    href: '/case-study/rv-park-voice-agent',
  },
  {
    category: 'Lead Agent',
    h3: 'AI Lead Generation Tools',
    body: 'Lead gathering, filtering, validation, scoring, outreach, and CRM handoff. 50K+ qualified leads per month delivered into Salesforce and HubSpot.',
    metric: '50K+',
    metricLabel: 'qualified leads per month',
    keywords: ['AI Lead Generation Agent', 'CRM Automation Case Study'],
    href: '/case-study/lead-generation-tools',
  },
  {
    category: 'Healthcare Admin',
    h3: 'lmn8 Ketamine Therapy AI Platform',
    body: 'Intake support, patient clinic matching, scheduling support, and healthcare admin workflow connection. 94% screening match accuracy.',
    metric: '65%',
    metricLabel: 'faster patient intake',
    keywords: ['Healthcare AI Agent Case Study', 'Clinic Admin Automation'],
    href: '/case-study/lmn8-ketamine-therapy',
    note: 'Healthcare claims kept specific to scoped environment.',
  },
  {
    category: 'Custom AI Platform',
    h3: '3vltn Domain AI Platform',
    body: 'Email agent workflow, automated campaigns, pricing support, deal workflows, and connected system logic. 250% increase in deal closure rate.',
    metric: '+250%',
    metricLabel: 'deal closure rate',
    keywords: ['Custom AI Agent Platform', 'Workflow Agent Case Study'],
    href: '/case-study/3vltn',
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
          AI Agent Case Studies and Custom AI Agent Examples
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
          Real AI agent projects with measurable outcomes across sales calls, booking automation, lead generation, healthcare admin, and custom platform builds.
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
        gap: '0px', // Managed by internal margins for precision
        transition: 'border-color 0.25s, background 0.25s',
        height: '100%', // Ensure all cards fill the grid row height
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
          margin: '0 0 16px 0',
        }}
      >
        {cs.category}
      </p>

      {/* H3 - Fixed height to ensure titles align */}
      <h3
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '20px',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.3,
          margin: '0 0 16px 0',
          minHeight: '52px', // Accommodates 2 lines of text
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {cs.h3}
      </h3>

      {/* Body - Flex grow with fixed min height for alignment */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
          color: '#888888',
          lineHeight: 1.75,
          margin: '0 0 24px 0',
          flexGrow: 1,
          minHeight: '80px', // Ensures descriptions start the next section at the same point
        }}
      >
        {cs.body}
      </p>

      {/* Healthcare note - Absolute positioning placeholder to avoid shifting layout */}
      <div style={{ minHeight: '60px', marginBottom: '24px' }}>
        {('note' in cs) && cs.note ? (
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
        ) : null}
      </div>

      {/* Metric - Fixed layout */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '8px',
          padding: '16px 20px',
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '10px',
          marginBottom: '24px',
          minHeight: '66px',
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

      {/* Keyword pills - Fixed container height */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px', minHeight: '48px' }}>
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
              height: 'fit-content',
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
          marginTop: 'auto', // Pushes link to the very bottom
        }}
      >
        View case study →
      </Link>
    </div>
  );
}

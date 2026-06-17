// components/services/ai-agents/AIAgentsCTA.tsx
'use client';

import Link from 'next/link';

const relatedServices = [
  { label: 'AI Integration', href: '/services/ai-integration' },
  { label: 'Process Automation', href: '/services/process-automation' },
  { label: 'Custom AI Solutions', href: '/services/custom-ai-solutions' },
  { label: 'Workflow Optimization', href: '/services/workflow-optimization' },
  { label: 'Case Studies', href: '/case-studies' },
];

const checklist = [
  'Current workflow or process',
  'Tools and systems in use',
  'Data sources and CRM setup',
  'Goals and success metrics',
];

export default function AIAgentsCTA() {
  return (
    <section
      style={{
        background: '#080808',
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

      {/* Large centered glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '500px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative corner lines */}
      {[
        { top: '32px', left: '32px', borderTop: true, borderLeft: true, radius: '2px 0 0 0' },
        { top: '32px', right: '32px', borderTop: true, borderRight: true, radius: '0 2px 0 0' },
        { bottom: '32px', left: '32px', borderBottom: true, borderLeft: true, radius: '0 0 0 2px' },
        { bottom: '32px', right: '32px', borderBottom: true, borderRight: true, radius: '0 0 2px 0' },
      ].map((corner, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            top: corner.top,
            left: corner.left,
            right: (corner as any).right,
            bottom: (corner as any).bottom,
            borderTop: corner.borderTop ? '1px solid rgba(201,168,76,0.2)' : undefined,
            borderLeft: corner.borderLeft ? '1px solid rgba(201,168,76,0.2)' : undefined,
            borderRight: (corner as any).borderRight ? '1px solid rgba(201,168,76,0.2)' : undefined,
            borderBottom: (corner as any).borderBottom ? '1px solid rgba(201,168,76,0.2)' : undefined,
            borderRadius: corner.radius,
          }}
        />
      ))}

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          ThePrimeCrafters
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Ready to Build an AI Agent That Works Inside Your Business?
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: '#888888',
            lineHeight: 1.8,
            maxWidth: '580px',
            margin: '0 auto 48px',
            textAlign: 'center',
          }}
        >
          Bring your current call, chat, CRM, booking, or support workflow. We will review the process, identify the best agent use case, and recommend a clear build path in a free strategy call.
        </p>

        {/* Two-column: CTA left, checklist right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '56px',
          }}
        >
          {/* Left: Primary CTA */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: '#0A0A0A',
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                padding: '18px 36px',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 8px 32px rgba(201,168,76,0.25)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                width: '100%',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 12px 40px rgba(201,168,76,0.35)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 8px 32px rgba(201,168,76,0.25)';
              }}
            >
              {/* H3: Primary CTA label */}
              Book a Free AI Agent Strategy Call →
            </Link>

            {/* Trust signals */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}
            >
              {[
                { icon: '✓', label: 'No commitment required' },
                { icon: '✓', label: 'Free strategy call' },
                { icon: '✓', label: 'Built around your existing workflow' },
              ].map((t) => (
                <div
                  key={t.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      color: '#C9A84C',
                      fontWeight: 600,
                    }}
                  >
                    {t.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      color: '#666666',
                    }}
                  >
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bring Your Workflow checklist */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '16px',
              padding: '32px 28px',
            }}
          >
            {/* H3: Secondary CTA */}
            <h3
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.3,
                margin: '0 0 8px',
              }}
            >
              Bring Your Workflow, We'll Map the Agent
            </h3>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                color: '#888888',
                lineHeight: 1.7,
                margin: '0 0 24px',
              }}
            >
              Share these details and we will review your current process, identify the best agent use case, and recommend a build path.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {checklist.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(201,168,76,0.05)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.15)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: '#C9A84C',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      color: '#CCCCCC',
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)',
            marginBottom: '40px',
          }}
        />

        {/* H3: Explore Related Services */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h3
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.5)',
              margin: 0,
            }}
          >
            Explore Related Services Before You Start
          </h3>
        </div>

        {/* Related service cards */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {relatedServices.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#C9A84C',
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '8px',
                padding: '10px 20px',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(201,168,76,0.12)';
                el.style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'rgba(201,168,76,0.06)';
                el.style.borderColor = 'rgba(201,168,76,0.2)';
              }}
            >
              {s.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
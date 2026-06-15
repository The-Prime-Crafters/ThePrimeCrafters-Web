// components/services/workflow-optimization/WorkflowOptimizationCTA.tsx
'use client';

import Link from 'next/link';

export default function WorkflowOptimizationCTA() {
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
        { top: '32px', left: '32px', borderTop: true, borderLeft: true },
        { top: '32px', right: '32px', borderTop: true, borderRight: true },
        { bottom: '32px', left: '32px', borderBottom: true, borderLeft: true },
        { bottom: '32px', right: '32px', borderBottom: true, borderRight: true },
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
            borderTop: corner.borderTop
              ? '1px solid rgba(201,168,76,0.2)'
              : undefined,
            borderLeft: corner.borderLeft
              ? '1px solid rgba(201,168,76,0.2)'
              : undefined,
            borderRight: (corner as any).borderRight
              ? '1px solid rgba(201,168,76,0.2)'
              : undefined,
            borderBottom: (corner as any).borderBottom
              ? '1px solid rgba(201,168,76,0.2)'
              : undefined,
            borderRadius: i === 0
              ? '2px 0 0 0'
              : i === 1
              ? '0 2px 0 0'
              : i === 2
              ? '0 0 0 2px'
              : '0 0 2px 0',
          }}
        />
      ))}

      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
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
          }}
        >
          Ready to Improve the Workflows Slowing Your Team Down?
        </h2>

        {/* Supporting copy */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '17px',
            color: '#888888',
            lineHeight: 1.8,
            maxWidth: '560px',
            marginBottom: '48px',
          }}
        >
          Share the workflow you want to improve and the outcome you want to reach. We will review your process and show you what is possible in a free strategy call.
        </p>

        {/* Primary CTA */}
        <Link
          href="/contact"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#0A0A0A',
            background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
            padding: '18px 40px',
            borderRadius: '10px',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '20px',
            boxShadow: '0 8px 32px rgba(201,168,76,0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
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
          Book a Free Workflow Optimization Strategy Call →
        </Link>

        {/* H3: Secondary CTA copy */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            color: '#666666',
            marginBottom: '40px',
          }}
        >
          Tell Us the Workflow You Want to Fix First
        </p>

        {/* Trust row */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {[
            { icon: '✓', label: 'No commitment required' },
            { icon: '✓', label: 'Free strategy call' },
            { icon: '✓', label: 'Workflow-first approach' },
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

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)',
            margin: '40px 0',
          }}
        />

        {/* Secondary links */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'View Case Studies', href: '/case-studies' },
            { label: 'All Services', href: '/services' },
            { label: 'About Us', href: '/about-us' },
          ].map((link, i, arr) => (
            <div
              key={link.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <Link
                href={link.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#C9A84C',
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8';
                }}
              >
                {link.label} →
              </Link>
              {i < arr.length - 1 && (
                <span
                  style={{
                    color: 'rgba(201,168,76,0.2)',
                    fontSize: '14px',
                    userSelect: 'none',
                  }}
                >
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
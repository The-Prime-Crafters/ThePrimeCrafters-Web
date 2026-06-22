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

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Full-width dark CTA block with gold border */}
        <div
          style={{
            background: '#0d0d0d',
            border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '12px',
            padding: '48px 56px',
          }}
        >
          {/* H2 */}
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Ready to Improve the Workflows Slowing Your Team Down?
          </h2>

          {/* Supporting copy */}
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '16px',
              color: '#888888',
              lineHeight: 1.75,
              maxWidth: '680px',
              marginBottom: '28px',
            }}
          >
            Tell us the workflow you want to fix first. We will review your process and show you exactly what is possible in a free strategy call with no commitment required.
          </p>

          {/* Primary CTA */}
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              color: '#C9A84C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <span>Book a Free Workflow Optimization Strategy Call</span>
            <span style={{ opacity: 0.6, fontWeight: 400 }}>theprimecrafters.com/contact</span>
          </Link>
        </div>

        {/* Below-block spec labels (hidden in production — SEO H3s) */}
        <h3
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
          }}
        >
          Book a Free Workflow Optimization Strategy Call
        </h3>
        <h3
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
          }}
        >
          Tell Us the Workflow You Want to Fix First
        </h3>
      </div>
    </section>
  );
}
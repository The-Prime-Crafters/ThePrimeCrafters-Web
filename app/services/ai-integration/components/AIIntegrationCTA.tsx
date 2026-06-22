'use client';

import Link from 'next/link';

export default function AIIntegrationCTA() {
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
      <div
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          width: '60px',
          height: '60px',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          borderLeft: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '2px 0 0 0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '32px',
          right: '32px',
          width: '60px',
          height: '60px',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          borderRight: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '0 2px 0 0',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '32px',
          width: '60px',
          height: '60px',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          borderLeft: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '0 0 0 2px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '32px',
          width: '60px',
          height: '60px',
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          borderRight: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '0 0 2px 0',
        }}
      />

      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
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
          Ready to Connect AI With Your Business Tools?
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
         Bring your current call, chat, CRM, booking, or support workflow. We will review the process, identify the best agent use case, and recommend a clear build path in a free strategy call.

        </p>

        {/* Primary CTA button */}
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
          Book a Free AI Integration Strategy Call →
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
          Share these details and we will review your current process, identify the best agent use case, and recommend a build path:

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
            { icon: '✓', label: 'Current workflow or process' },
            { icon: '✓', label: 'Tools and systems in use' },
            { icon: '✓', label: 'Data sources and CRM setup' },
            { icon: '✓', label: 'Goals and success metrics' },
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
          <Link
            href="/case-studies"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
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
            View Case Studies →
          </Link>
          <span style={{ color: 'rgba(201,168,76,0.2)', fontSize: '14px' }}>|</span>
          <Link
            href="/services"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
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
            All Services →
          </Link>
          <span style={{ color: 'rgba(201,168,76,0.2)', fontSize: '14px' }}>|</span>
          <Link
            href="/about-us"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: '#C9A84C',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
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
            About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
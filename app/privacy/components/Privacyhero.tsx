// components/privacy/PrivacyHero.tsx

import React from "react";

const PrivacyHero: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-hero-section {
          position: relative;
          background: #080806;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 80px;
          overflow: hidden;
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
        }

        .pp-hero-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          z-index: 2;
        }

        .pp-hero-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, 100%);
          height: 420px;
          background: radial-gradient(
            ellipse,
            rgba(201,168,76,0.14) 0%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
        }

        .pp-hero-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201,168,76,0.45),
            transparent
          );
          z-index: 1;
        }

        .pp-hero-breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 12px;
          color: #4b4535;
          margin-bottom: 26px;
          letter-spacing: 0.04em;
          flex-wrap: wrap;
        }

        .pp-hero-breadcrumb a {
          color: #C9A84C;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pp-hero-breadcrumb a:hover {
          color: #F5E6B8;
        }

        .pp-hero-breadcrumb-sep {
          color: #3a3320;
        }

        .pp-hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 7vw, 90px);
          font-weight: 700;
          color: #F5E6B8;
          margin: 0 0 22px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .pp-hero-subtitle {
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 300;
          color: #7a6e54;
          max-width: 760px;
          margin: 0 auto 52px;
          line-height: 1.9;
        }

        .pp-hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 22px;
          border-top: 1px solid rgba(201,168,76,0.08);
          padding-top: 30px;
        }

        .pp-hero-meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6b5e38;
          font-size: 13px;
        }

        .pp-hero-meta-item a {
          color: #6b5e38;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .pp-hero-meta-item a:hover {
          color: #C9A84C;
        }

        .pp-hero-meta-divider {
          width: 1px;
          height: 16px;
          background: rgba(201,168,76,0.14);
        }

        /* 1440px */
        @media (max-width: 1440px) {
          .pp-hero-section {
            padding: 130px 40px 70px;
          }
        }

        /* Laptops */
        @media (max-width: 1200px) {
          .pp-hero-section {
            min-height: auto;
            padding: 120px 32px 70px;
          }

          .pp-hero-container {
            max-width: 900px;
          }
        }

        /* Tablets */
        @media (max-width: 1024px) {
          .pp-hero-section {
            padding: 110px 28px 64px;
          }

          .pp-hero-h1 {
            font-size: clamp(44px, 9vw, 72px);
          }

          .pp-hero-subtitle {
            max-width: 640px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .pp-hero-section {
            min-height: auto;
            padding: 105px 20px 52px;
          }

          .pp-hero-container {
            max-width: 100%;
          }

          .pp-hero-h1 {
            font-size: 42px;
            line-height: 1.08;
            margin-bottom: 18px;
          }

          .pp-hero-subtitle {
            font-size: 15px;
            line-height: 1.75;
            margin-bottom: 40px;
          }

          .pp-hero-meta {
            flex-direction: column;
            gap: 14px;
            padding-top: 24px;
          }

          .pp-hero-meta-divider {
            display: none;
          }
        }
      `}</style>

      <section className="pp-hero-section">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="pp-hero-shimmer" aria-hidden="true" />

        <div className="pp-hero-container">
          <nav className="pp-hero-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="pp-hero-breadcrumb-sep">/</span>
            <span>Privacy Policy</span>
          </nav>

          <h1 className="pp-hero-h1">Privacy Policy</h1>

          <p className="pp-hero-subtitle">
            We respect your privacy. This page explains exactly what data we
            collect, how we use it, and how we protect it — no jargon, no
            surprises.
          </p>

          <div className="pp-hero-meta">
            <div className="pp-hero-meta-item">
              <CalendarIcon />
              <span>Last updated: May 26, 2026</span>
            </div>

            <div
              className="pp-hero-meta-divider"
              aria-hidden="true"
            />

            <div className="pp-hero-meta-item">
              <ShieldIcon />
              <span>The Prime Crafters</span>
            </div>

            <div
              className="pp-hero-meta-divider"
              aria-hidden="true"
            />

            <div className="pp-hero-meta-item">
              <MailIcon />
              <a href="mailto:aman@theprimecrafters.com">
                aman@theprimecrafters.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CalendarIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C9A84C"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C9A84C"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C9A84C"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

export default PrivacyHero;
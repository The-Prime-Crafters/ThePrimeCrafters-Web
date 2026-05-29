// components/privacy/PrivacyCommitment.tsx
// Fully responsive — improved spacing + screen fitting

"use client";

import React from "react";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  sub: string;
}

const pillars: Pillar[] = [
  {
    icon: <ShieldLockIcon />,
    title: "Data Protection",
    sub: "Secure storage & access controls",
  },
  {
    icon: <EyeOffIcon />,
    title: "Never Sold",
    sub: "Your data stays with us",
  },
  {
    icon: <FileIcon />,
    title: "Full Transparency",
    sub: "Clear policies, no fine print surprises",
  },
  {
    icon: <UserCheckIcon />,
    title: "Your Rights",
    sub: "Access, update, or delete anytime",
  },
];

const PrivacyCommitment: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }

        .pp-commit-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 90px 24px;
        }

        .pp-commit-topline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201,168,76,0.25),
            transparent
          );
        }

        .pp-commit-inner {
          position: relative;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 0.95fr 1.2fr;
          gap: 72px;
          align-items: start;
        }

        /* LEFT */

        .pp-commit-left {
          position: sticky;
          top: 120px;
        }

        .pp-commit-label {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;

          margin-bottom: 22px;
        }

        .pp-commit-label-line {
          width: 24px;
          height: 1px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .pp-commit-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.12;
          font-weight: 700;
          color: #F5E6B8;

          margin: 0 0 28px;
        }

        .pp-commit-para {
          font-size: 15px;
          line-height: 1.9;
          font-weight: 300;
          color: #7a6e54;

          margin: 0 0 22px;
          max-width: 560px;
        }

        /* RIGHT */

        .pp-commit-right {
          width: 100%;
        }

        .pp-commit-pillars {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .pp-commit-pillar {
          background: rgba(201,168,76,0.05);
          border: 1px solid rgba(201,168,76,0.12);
          border-radius: 14px;

          padding: 22px;

          display: flex;
          align-items: flex-start;
          gap: 16px;

          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .pp-commit-pillar:hover {
          background: rgba(201,168,76,0.08);
          border-color: rgba(201,168,76,0.28);
          transform: translateY(-2px);
        }

        .pp-commit-pillar-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pp-commit-pillar-title {
          font-size: 15px;
          font-weight: 500;
          color: #E8D5A0;
          line-height: 1.4;
          margin-bottom: 4px;
        }

        .pp-commit-pillar-sub {
          font-size: 13px;
          line-height: 1.6;
          color: #6f6347;
          font-weight: 300;
        }

        /* Large laptop */

        @media (max-width: 1400px) {
          .pp-commit-inner {
            gap: 56px;
          }
        }

        /* Laptop */

        @media (max-width: 1200px) {
          .pp-commit-section {
            padding: 80px 40px;
          }

          .pp-commit-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .pp-commit-left {
            position: relative;
            top: unset;
          }

          .pp-commit-para {
            max-width: 100%;
          }
        }

        /* Tablet */

        @media (max-width: 768px) {
          .pp-commit-section {
            padding: 70px 24px;
          }

          .pp-commit-pillars {
            grid-template-columns: 1fr;
          }

          .pp-commit-h2 {
            font-size: 42px;
          }
        }

        /* Mobile */

        @media (max-width: 640px) {
          .pp-commit-section {
            padding: 60px 20px;
          }

          .pp-commit-inner {
            gap: 44px;
          }

          .pp-commit-h2 {
            font-size: 36px;
            line-height: 1.14;
          }

          .pp-commit-para {
            font-size: 14px;
            line-height: 1.85;
          }

          .pp-commit-pillar {
            padding: 18px;
            gap: 14px;
          }

          .pp-commit-pillar-title {
            font-size: 14px;
          }

          .pp-commit-pillar-sub {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="pp-commit-section">
        <div className="pp-commit-topline" aria-hidden="true" />

        <div className="pp-commit-inner">
          {/* LEFT SIDE */}
          <div className="pp-commit-left">
            <div className="pp-commit-label">
              <span className="pp-commit-label-line" />
              Introduction
            </div>

            <h2 className="pp-commit-h2">
              Our Commitment
              <br />
              to Your Privacy
            </h2>

            <p className="pp-commit-para">
              At The Prime Crafters, we believe trust is the
              foundation of every client relationship. We are
              committed to protecting the privacy of every visitor,
              prospect, and client who interacts with us — whether
              through our website, contact forms, or consultations.
            </p>

            <p className="pp-commit-para">
              Any information you share with us is handled with care,
              used only for the purposes it was provided, and never
              sold to third parties. This policy explains exactly
              what we collect, why we collect it, and how we protect it.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="pp-commit-right">
            <div className="pp-commit-pillars">
              {pillars.map((p) => (
                <div className="pp-commit-pillar" key={p.title}>
                  <div className="pp-commit-pillar-icon">
                    {p.icon}
                  </div>

                  <div>
                    <div className="pp-commit-pillar-title">
                      {p.title}
                    </div>

                    <div className="pp-commit-pillar-sub">
                      {p.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ICONS */

function ShieldLockIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M12 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <polyline points="16 11 17 12 20 9" />
    </svg>
  );
}

export default PrivacyCommitment;
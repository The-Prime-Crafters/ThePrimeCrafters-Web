"use client";

import React from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────────────────
   Icons
───────────────────────────────────────────────────────────────────────────── */

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
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

const CreditCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const ToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

interface ThirdPartyCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

const categories: ThirdPartyCategory[] = [
  {
    icon: <GlobeIcon />,
    title: "Linked Websites",
    description:
      "Our website may contain links to external websites, blogs, or resources that we reference for your convenience.",
    examples: ["Partner sites", "Industry resources", "Reference articles"],
  },
  {
    icon: <CalendarIcon />,
    title: "Scheduling & Booking",
    description:
      "We may use third-party scheduling tools to allow you to book discovery calls or consultations directly.",
    examples: ["Calendly", "Cal.com", "Google Calendar"],
  },
  {
    icon: <CreditCardIcon />,
    title: "Payment Platforms",
    description:
      "Any payments are processed through secure third-party payment providers. We do not store your payment card details.",
    examples: ["Stripe", "PayPal", "Checkout platforms"],
  },
  {
    icon: <ToolIcon />,
    title: "Embedded Tools & Widgets",
    description:
      "Some pages may embed third-party tools such as chatbots, forms, or interactive widgets to enhance functionality.",
    examples: ["Chat widgets", "Form builders", "AI tools"],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────────────────── */

export default function ThirdPartyLinksAndTools() {
  return (
    <>
      <style>{`
        .tp-section {
          background: #0a0a0a;
          padding: 100px 40px;
          font-family: 'Inter', sans-serif;
          color: #f0ede6;
        }

        .tp-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 80px;
          align-items: start;
        }

        /* LEFT */

        .tp-left {
          position: sticky;
          top: 120px;
        }

        .tp-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 14px;
        }

        .tp-heading {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 18px;
          color: #f0ede6;
          font-weight: 600;
        }

        .tp-line {
          width: 54px;
          height: 3px;
          border-radius: 2px;
          background: #c9a84c;
          margin-bottom: 30px;
        }

        .tp-intro {
          font-size: 16px;
          color: #8a8680;
          line-height: 1.9;
          max-width: 520px;
          margin-bottom: 40px;
        }

        .tp-note {
          background: rgba(255,255,255,0.03);
          border: 1px solid #2a2a2a;
          border-left: 3px solid #3a3a3a;
          border-radius: 10px;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
        }

        .tp-note p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #8a8680;
        }

        .tp-note strong {
          color: #b8b3aa;
          font-weight: 500;
        }

        .tp-warning {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(201,168,76,0.06);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 10px;
          padding: 18px 20px;
        }

        .tp-warning p {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          color: #8a8680;
        }

        /* RIGHT */

        .tp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .tp-card {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          padding: 28px;
          transition: all 0.25s ease;
        }

        .tp-card:hover {
          transform: translateY(-2px);
          border-color: rgba(201,168,76,0.3);
          background: #1a1a1a;
        }

        .tp-icon {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9a84c;
          margin-bottom: 18px;
        }

        .tp-card-title {
          font-size: 17px;
          font-weight: 500;
          color: #f0ede6;
          margin: 0 0 10px;
        }

        .tp-card-desc {
          font-size: 14px;
          color: #8a8680;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .tp-pill-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tp-pill {
          font-size: 11px;
          color: #77726b;
          background: rgba(255,255,255,0.04);
          border: 1px solid #2a2a2a;
          border-radius: 999px;
          padding: 5px 12px;
        }

        /* RESPONSIVE */

        @media (max-width: 1024px) {
          .tp-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .tp-left {
            position: relative;
            top: unset;
          }
        }

        @media (max-width: 640px) {
          .tp-section {
            padding: 70px 20px;
          }

          .tp-card {
            padding: 24px;
          }

          .tp-heading {
            font-size: 42px;
          }
        }
      `}</style>

      <section
        className="tp-section"
        aria-labelledby="third-party-heading"
      >
        <div className="tp-container">
          {/* LEFT */}
          <div className="tp-left">
            <p className="tp-eyebrow">
              Privacy Policy
            </p>

            <h2
              id="third-party-heading"
              className="tp-heading"
            >
              Third-Party
              <br />
              Links & Tools
            </h2>

            <div className="tp-line" />

            <p className="tp-intro">
              Our website may contain links to external websites,
              embedded tools, scheduling pages, payment platforms,
              or other third-party services. These are provided
              for convenience — but their privacy practices remain
              outside our direct control.
            </p>

            {/* Note */}
            <div className="tp-note">
              <span
                style={{
                  color: "#8a8680",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                <AlertIcon />
              </span>

              <p>
                <strong>
                  We are not responsible for third-party privacy practices.
                </strong>{" "}
                Once you leave our website or interact with an
                embedded service, the privacy policy of that
                provider governs how your information is handled.
              </p>
            </div>

            {/* Warning */}
            <div className="tp-warning">
              <span
                style={{
                  color: "#c9a84c",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                <ExternalLinkIcon />
              </span>

              <p>
                A link to a third-party platform does not imply
                endorsement of that provider or its privacy standards.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="tp-grid">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="tp-card"
              >
                <div className="tp-icon">
                  {cat.icon}
                </div>

                <h3 className="tp-card-title">
                  {cat.title}
                </h3>

                <p className="tp-card-desc">
                  {cat.description}
                </p>

                <div className="tp-pill-wrap">
                  {cat.examples.map((ex) => (
                    <span
                      key={ex}
                      className="tp-pill"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

import React from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────
   ICONS
───────────────────────────────────────────────────────────── */

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const MailOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

interface PrivacyRight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const privacyRights: PrivacyRight[] = [
  {
    icon: <EyeIcon />,
    title: "Right of Access",
    description:
      "Request a copy of all personal data we hold about you, along with information about how it is processed.",
  },
  {
    icon: <EditIcon />,
    title: "Right to Rectification",
    description:
      "Ask us to correct any inaccurate or incomplete information we hold about you.",
  },
  {
    icon: <TrashIcon />,
    title: "Right to Erasure",
    description:
      "Request deletion of your personal data where we no longer have a legal basis to retain it.",
  },
  {
    icon: <MailOffIcon />,
    title: "Right to Restrict Processing",
    description:
      "Ask us to pause the processing of your data in certain circumstances.",
  },
  {
    icon: <EyeIcon />,
    title: "Right to Data Portability",
    description:
      "Request your data in a structured, machine-readable format where technically feasible.",
  },
  {
    icon: <EditIcon />,
    title: "Right to Object",
    description:
      "Object to our processing of your data for direct marketing or legitimate interest purposes.",
  },
  {
    icon: <MailOffIcon />,
    title: "Right to Withdraw Consent",
    description:
      "Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing.",
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────── */

export default function YourPrivacyRights() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .rights-section {
          background: #0a0a0a;
          padding: 100px 100px;
          color: #f0ede6;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .rights-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .rights-split {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 70px;
          align-items: start;
        }

        /* LEFT SIDE */

        .rights-left {
          position: sticky;
          top: 120px;
        }

        .rights-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 18px;
        }

        .rights-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(32px, 5vw, 50px);
          line-height: 1.08;
          color: #f5e6b8;
          margin: 0 0 22px;
        }

        .rights-line {
          width: 50px;
          height: 3px;
          border-radius: 999px;
          background: #c9a84c;
          margin-bottom: 28px;
        }

        .rights-text {
          font-size: 15px;
          line-height: 1.9;
          color: #8a8680;
          margin-bottom: 22px;
          max-width: 560px;
        }

        .rights-location {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 36px;
        }

        .rights-location p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: #77736d;
        }

        .rights-box {
          background: #161616;
          border: 1px solid #2a2a2a;
          border-radius: 14px;
          padding: 30px;
          max-width: 560px;
        }

        .rights-box h3 {
          font-size: 28px;
          font-weight: 500;
          margin: 0 0 14px;
          color: #f0ede6;
        }

        .rights-box p {
          font-size: 15px;
          line-height: 1.75;
          color: #8a8680;
          margin: 0 0 22px;
        }

        .rights-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 8px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.3);
          color: #c9a84c;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .rights-btn:hover {
          background: rgba(201,168,76,0.14);
          border-color: rgba(201,168,76,0.5);
        }

        .rights-footer {
          margin-top: 30px;
          font-size: 14px;
          color: #7d7871;
          line-height: 1.7;
          max-width: 560px;
        }

        .rights-footer a {
          color: #c9a84c;
          text-decoration: none;
        }

        
         .rights-right {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* BULLET ITEM */
.rights-bullet {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 6px 0;
}

/* small golden icon */
.rights-bullet-icon {
  width: 26px;
  height: 26px;
  min-width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9a84c;
  margin-top: 2px;
}

/* text block */
.rights-bullet-content h3 {
  
  font-size: 18px;
  font-weight: 500;
}
  color: #f0ede6;
  margin: 0 0 4px;
}

.rights-bullet-content p {
  
  font-size: 14px;
  line-height: 1.7;
}
  color: #8a8680;
  margin: 0;
  max-width: 600px;
}
        /* MOBILE */

        @media (max-width: 640px) {
          .rights-section {
            padding: 60px 20px;
          }

          .rights-heading {
            font-size: 36px;
          }

          .rights-box {
            padding: 24px;
          }

          .rights-card {
            padding: 22px;
          }
        }
      `}</style>

      <section className="rights-section">
        <div className="rights-container">
          <div className="rights-split">

            {/* LEFT SIDE */}
            <div className="rights-left">

              

              <h2 className="rights-heading">
                Your Privacy
                Rights
              </h2>


              <p className="rights-text">
                Depending on your location and the privacy laws that apply to you —
                including GDPR (EU/UK), CCPA (California), or PDPA (Thailand and
                others) — you may have the following rights over the personal data
                we hold.
              </p>

              <div className="rights-location">
                <span style={{ color: "#8a8680", marginTop: "2px" }}>
                  <GlobeIcon />
                </span>
                <p>
                  These rights may include access, correction, deletion, restriction
                  of processing, data portability, objection to processing, and
                  withdrawal of consent where applicable.
                </p>
              </div>

              <div className="rights-box">
                <h3>Access, Update, or Delete Your Information</h3>
                <p>
                  To submit a privacy request, contact us directly. We aim to
                  respond to all valid privacy requests within 30 days. In some
                  cases, we may need to verify your identity before fulfilling a
                  request in order to protect your data from unauthorised access.
                </p>
                <Link href="/contact" className="rights-btn">
                  Submit a Privacy Request
                  <ArrowRightIcon />
                </Link>
              </div>

              <p className="rights-footer">
                Email:{" "}
                <a href="mailto:aman@theprimecrafters.com">
                  aman@theprimecrafters.com
                </a>{" "}
                or use our{" "}
                <Link href="/contact">contact form</Link>{" "}
                to submit a privacy-related request.
              </p>

            </div>
{/* RIGHT SIDE (BULLET VERSION) */}
<div className="rights-right">
  {privacyRights.map((right) => (
    <div className="rights-bullet" key={right.title}>
      <div className="rights-bullet-icon">
        {right.icon}
      </div>

      <div className="rights-bullet-content">
        <h3>{right.title}</h3>
        <p>{right.description}</p>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </section>
    </>
  );
}
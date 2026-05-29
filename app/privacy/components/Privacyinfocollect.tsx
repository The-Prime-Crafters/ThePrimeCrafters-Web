
"use client";
import React, { useState } from "react";

interface SubSection {
  id: string;
  tag: string;
  title: string;
  intro: string;
  items: string[];
  icon: React.ReactNode;
}

const subSections: SubSection[] = [
  {
    id: "you-provide",
    tag: "Direct Input",
    title: "Information You Provide",
    intro:
      "When you fill out a contact form, book a consultation, or get in touch with us, you may share:",
    items: [
      "Full name and email address",
      "Phone number and company name",
      "Website URL and service interest",
      "Project details, messages, and any files you submit",
    ],
    icon: <UserIcon />,
  },
  {
    id: "auto-collected",
    tag: "Automatic",
    title: "Information Collected Automatically",
    intro:
      "When you visit our website, certain data is collected automatically through analytics tools and standard browser activity:",
    items: [
      "IP address and approximate location",
      "Device type, browser, and operating system",
      "Pages visited, time on site, and referral source",
      "Cookie data and analytics identifiers (e.g. Google Analytics, Google Tag Manager)",
    ],
    icon: <MonitorIcon />,
  },
  {
    id: "project-data",
    tag: "Client Projects",
    title: "Client Project & Automation Data",
    intro:
      "For clients who engage our AI automation services, additional data may be shared with us for project delivery purposes:",
    items: [
      "Data shared for AI voice agent setup and configuration",
      "Workflow details for automation and integration projects",
      "Business logic, credentials, and system access required for AI chatbot or CRM integrations",
      "Implementation planning documents and briefing materials",
    ],
    icon: <CpuIcon />,
  },
];

const PrivacyInfoCollect: React.FC = () => {
  const [active, setActive] = useState<string>("you-provide");

  const current = subSections.find((s) => s.id === active)!;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-ic-section {
          position: relative;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 96px 120px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .pp-ic-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
        }

        .pp-ic-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .pp-ic-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 32px;
          flex-wrap: wrap;
        }

        .pp-ic-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }
        .pp-ic-label-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .pp-ic-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.2;
          margin: 0;
        }

        .pp-ic-header-note {
          font-size: 14px;
          font-weight: 300;
          color: #5a4f35;
          max-width: 340px;
          line-height: 1.7;
          text-align: right;
        }

        /* Tabs */
        .pp-ic-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .pp-ic-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          border: 0.5px solid rgba(201,168,76,0.15);
          background: transparent;
          color: #5a4f35;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .pp-ic-tab:hover {
          border-color: rgba(201,168,76,0.35);
          color: #C9A84C;
          background: rgba(201,168,76,0.05);
        }
        .pp-ic-tab.active {
          border-color: rgba(201,168,76,0.5);
          background: rgba(201,168,76,0.08);
          color: #E8D5A0;
        }
        .pp-ic-tab-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C9A84C;
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .pp-ic-tab.active .pp-ic-tab-dot { opacity: 1; }

        /* Content panel */
        .pp-ic-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          background: rgba(201,168,76,0.03);
          border: 0.5px solid rgba(201,168,76,0.12);
          border-radius: 14px;
          padding: 48px 52px;
          align-items: start;
        }

        .pp-ic-panel-left {}

        .pp-ic-panel-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C9A84C;
          background: rgba(201,168,76,0.1);
          border: 0.5px solid rgba(201,168,76,0.2);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .pp-ic-panel-h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(22px, 2.2vw, 30px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.25;
          margin: 0 0 20px;
        }

        .pp-ic-panel-intro {
          font-size: clamp(14px, 1.1vw, 15px);
          font-weight: 300;
          color: #7a6e54;
          line-height: 1.85;
          margin: 0;
        }

        .pp-ic-panel-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 14px;
          background: rgba(201,168,76,0.07);
          border: 0.5px solid rgba(201,168,76,0.18);
          margin-bottom: 28px;
        }

        /* Items list */
        .pp-ic-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pp-ic-list-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.1);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 300;
          color: #8a7a5a;
          line-height: 1.6;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-ic-list-item:hover {
          border-color: rgba(201,168,76,0.25);
          background: rgba(201,168,76,0.07);
          color: #a89060;
        }

        .pp-ic-list-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A84C;
          flex-shrink: 0;
          margin-top: 7px;
        }

        /* Large laptops */
        @media (max-width: 1440px) {
          .pp-ic-section { padding: 96px 80px; }
        }

        /* Tablets */
        @media (max-width: 1023px) {
          .pp-ic-section { padding: 72px 48px; }
          .pp-ic-panel {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 36px 32px;
          }
          .pp-ic-header-note { text-align: left; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .pp-ic-section { padding: 56px 20px; }
          .pp-ic-tabs { gap: 8px; }
          .pp-ic-tab { padding: 8px 14px; font-size: 12px; }
          .pp-ic-panel { padding: 28px 20px; }
        }
      `}</style>

      <section className="pp-ic-section">
        <div className="pp-ic-topline" aria-hidden="true" />

        <div className="pp-ic-inner">
          {/* H2 Header */}
          <div className="pp-ic-header">
            <div>
              <div className="pp-ic-label">
                <span className="pp-ic-label-line" />
                Data Collection
              </div>
              <h2 className="pp-ic-h2">Information We Collect</h2>
            </div>
            <p className="pp-ic-header-note">
              We only collect what's genuinely needed — nothing more. Select a category below to learn what applies.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="pp-ic-tabs" role="tablist">
            {subSections.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                aria-controls={`panel-${s.id}`}
                className={`pp-ic-tab${active === s.id ? " active" : ""}`}
                onClick={() => setActive(s.id)}
              >
                <span className="pp-ic-tab-dot" aria-hidden="true" />
                {s.title}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div
            className="pp-ic-panel"
            id={`panel-${current.id}`}
            role="tabpanel"
          >
            {/* Left: heading + intro */}
            <div className="pp-ic-panel-left">
              <div className="pp-ic-panel-icon-wrap" aria-hidden="true">
                {current.icon}
              </div>
              <div className="pp-ic-panel-tag">{current.tag}</div>
              <h3 className="pp-ic-panel-h3">{current.title}</h3>
              <p className="pp-ic-panel-intro">{current.intro}</p>
            </div>

            {/* Right: items */}
            <ul className="pp-ic-list" aria-label={`${current.title} details`}>
              {current.items.map((item, i) => (
                <li key={i} className="pp-ic-list-item">
                  <span className="pp-ic-list-bullet" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Icons ──────────────────────────────────────────────────────────────────── */

function UserIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export default PrivacyInfoCollect;
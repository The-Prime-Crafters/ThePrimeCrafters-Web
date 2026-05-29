"use client";
import React, { useState } from "react";

interface CookieType {
  name: string;
  purpose: string;
  example: string;
  canDisable: boolean;
}

const cookieTypes: CookieType[] = [
  {
    name: "Essential Cookies",
    purpose: "Required for the website to function. They enable core features like page navigation and security.",
    example: "Session tokens, CSRF protection",
    canDisable: false,
  },
  {
    name: "Analytics Cookies",
    purpose: "Help us understand how visitors interact with the site — which pages are visited, how long, and where traffic comes from.",
    example: "Google Analytics (_ga, _gid)",
    canDisable: true,
  },
  {
    name: "Marketing & Tag Cookies",
    purpose: "Set by tools like Google Tag Manager to track campaign performance and manage third-party scripts.",
    example: "Google Tag Manager (_gtm)",
    canDisable: true,
  },
];

const controlSteps = [
  { label: "Chrome", desc: "Settings → Privacy & Security → Cookies and other site data" },
  { label: "Safari", desc: "Preferences → Privacy → Manage Website Data" },
  { label: "Firefox", desc: "Settings → Privacy & Security → Cookies and Site Data" },
  { label: "Edge", desc: "Settings → Cookies and Site Permissions → Cookies" },
];

const PrivacyCookies: React.FC = () => {
  const [openBrowser, setOpenBrowser] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-ck-section {
          position: relative;
          background: #080806;
          font-family: 'DM Sans', sans-serif;
          padding: 96px 120px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .pp-ck-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent);
        }

        .pp-ck-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .pp-ck-label {
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
        .pp-ck-label-line {
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #C9A84C;
          flex-shrink: 0;
        }

        .pp-ck-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          line-height: 1.2;
          margin: 0 0 16px;
        }

        .pp-ck-intro {
          font-size: clamp(14px, 1.2vw, 16px);
          font-weight: 300;
          color: #5a4f35;
          line-height: 1.85;
          max-width: 680px;
          margin: 0 0 56px;
        }

        /* Two column layout */
        .pp-ck-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
        }

        /* Cookie type cards */
        .pp-ck-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pp-ck-card {
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.12);
          border-radius: 12px;
          padding: 24px 26px;
          transition: border-color 0.2s, background 0.2s;
        }
        .pp-ck-card:hover {
          background: rgba(201,168,76,0.07);
          border-color: rgba(201,168,76,0.25);
        }

        .pp-ck-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 12px;
        }

        .pp-ck-card-name {
          font-size: 14px;
          font-weight: 500;
          color: #E8D5A0;
        }

        .pp-ck-badge {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .pp-ck-badge-required {
          background: rgba(201,168,76,0.1);
          border: 0.5px solid rgba(201,168,76,0.25);
          color: #C9A84C;
        }
        .pp-ck-badge-optional {
          background: rgba(90,79,53,0.2);
          border: 0.5px solid rgba(90,79,53,0.35);
          color: #5a4f35;
        }

        .pp-ck-card-purpose {
          font-size: 13px;
          font-weight: 300;
          color: #6b5e38;
          line-height: 1.7;
          margin: 0 0 12px;
        }

        .pp-ck-card-example {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: #4a4030;
          font-family: monospace;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.08);
          border-radius: 6px;
          padding: 6px 12px;
        }

        .pp-ck-card-example-label {
          font-family: 'DM Sans', sans-serif;
          color: #3a3320;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-right: 4px;
        }

        /* Right: controls panel */
        .pp-ck-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pp-ck-control-card {
          background: rgba(201,168,76,0.05);
          border: 0.5px solid rgba(201,168,76,0.15);
          border-radius: 14px;
          overflow: hidden;
        }

        .pp-ck-control-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 22px 24px;
          border-bottom: 0.5px solid rgba(201,168,76,0.1);
        }

        .pp-ck-control-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(201,168,76,0.08);
          border: 0.5px solid rgba(201,168,76,0.18);
          flex-shrink: 0;
        }

        .pp-ck-control-title {
          font-size: 14px;
          font-weight: 500;
          color: #E8D5A0;
        }
        .pp-ck-control-sub {
          font-size: 12px;
          font-weight: 300;
          color: #5a4f35;
          margin-top: 2px;
        }

        .pp-ck-browser-list {
          padding: 8px 0;
        }

        .pp-ck-browser-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
          cursor: pointer;
          transition: background 0.18s;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          gap: 12px;
        }
        .pp-ck-browser-item:hover {
          background: rgba(201,168,76,0.05);
        }

        .pp-ck-browser-label {
          font-size: 13px;
          font-weight: 400;
          color: #8a7a5a;
        }

        .pp-ck-browser-chevron {
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .pp-ck-browser-chevron.open {
          transform: rotate(180deg);
        }

        .pp-ck-browser-desc {
          font-size: 12px;
          font-weight: 300;
          color: #5a4f35;
          line-height: 1.6;
          padding: 0 24px 14px;
          display: none;
        }
        .pp-ck-browser-desc.open {
          display: block;
        }

        /* Opt-out note */
        .pp-ck-optout {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 18px 22px;
          background: rgba(201,168,76,0.04);
          border: 0.5px solid rgba(201,168,76,0.15);
          border-left: 2px solid #C9A84C;
          border-radius: 0 10px 10px 0;
        }
        .pp-ck-optout-text {
          font-size: 13px;
          font-weight: 300;
          color: #6b5e38;
          line-height: 1.7;
          margin: 0;
        }
        .pp-ck-optout-text strong { color: #C9A84C; font-weight: 500; }
        .pp-ck-optout-text a { color: #C9A84C; text-decoration: none; }
        .pp-ck-optout-text a:hover { text-decoration: underline; }

        /* Responsive */
        @media (max-width: 1440px) {
          .pp-ck-section { padding: 96px 80px; }
        }
        @media (max-width: 1023px) {
          .pp-ck-section { padding: 72px 48px; }
          .pp-ck-body { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .pp-ck-section { padding: 56px 20px; }
        }
      `}</style>

      <section className="pp-ck-section">
        <div className="pp-ck-topline" aria-hidden="true" />

        <div className="pp-ck-inner">
          <div className="pp-ck-label">
            <span className="pp-ck-label-line" />
            Tracking & Analytics
          </div>
          <h2 className="pp-ck-h2">Cookies &amp; Analytics</h2>
          <p className="pp-ck-intro">
            Our website uses cookies — small text files stored on your device — to keep the site
            functional and to help us understand how people use it. We keep this minimal and
            transparent.
          </p>

          <div className="pp-ck-body">
            {/* Left: cookie type cards */}
            <div className="pp-ck-cards">
              {cookieTypes.map((c) => (
                <div className="pp-ck-card" key={c.name}>
                  <div className="pp-ck-card-top">
                    <span className="pp-ck-card-name">{c.name}</span>
                    <span
                      className={`pp-ck-badge ${
                        c.canDisable ? "pp-ck-badge-optional" : "pp-ck-badge-required"
                      }`}
                    >
                      {c.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                  <p className="pp-ck-card-purpose">{c.purpose}</p>
                  <div className="pp-ck-card-example">
                    <span className="pp-ck-card-example-label">e.g.</span>
                    {c.example}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: browser controls + opt-out */}
            <div className="pp-ck-right">
              <div className="pp-ck-control-card">
                <div className="pp-ck-control-header">
                  <div className="pp-ck-control-icon" aria-hidden="true">
                    <SettingsIcon />
                  </div>
                  <div>
                    <div className="pp-ck-control-title">Control Your Cookies</div>
                    <div className="pp-ck-control-sub">Manage via your browser settings</div>
                  </div>
                </div>

                <div className="pp-ck-browser-list">
                  {controlSteps.map((b) => (
                    <div key={b.label}>
                      <button
                        className="pp-ck-browser-item"
                        onClick={() =>
                          setOpenBrowser(openBrowser === b.label ? null : b.label)
                        }
                        aria-expanded={openBrowser === b.label}
                      >
                        <span className="pp-ck-browser-label">{b.label}</span>
                        <svg
                          className={`pp-ck-browser-chevron${openBrowser === b.label ? " open" : ""}`}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5a4f35"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div
                        className={`pp-ck-browser-desc${openBrowser === b.label ? " open" : ""}`}
                      >
                        {b.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pp-ck-optout" role="note">
                <div style={{ flexShrink: 0, marginTop: "1px" }}>
                  <InfoIcon />
                </div>
                <p className="pp-ck-optout-text">
                  <strong>Disabling analytics cookies won't affect site functionality.</strong>{" "}
                  You can also opt out of Google Analytics tracking at any time via{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google's opt-out tool
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Icons ──────────────────────────────────────────────────────────────────── */

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default PrivacyCookies;
"use client";
import React, { useState } from "react";

interface CookieType {
  name: string;
  status: string;
  purpose: string;
  example: string;
  canDisable: boolean;
}

const cookieTypes: CookieType[] = [
  {
    name: "Essential Cookies",
    status: "Always Active",
    purpose:
      "Required for the website to load and function. Covers security, session management, and core page features.",
    example: "Session tokens, CSRF protection",
    canDisable: false,
  },
  {
    name: "Analytics Cookies",
    status: "Optional",
    purpose:
      "Records anonymised visit data including pages viewed, session duration, and traffic source. Helps us understand how the site is used.",
    example: "Google Analytics (_ga, _gid)",
    canDisable: true,
  },
  {
    name: "Tag Management Cookies",
    status: "Optional",
    purpose:
      "Manages the loading of third-party tracking scripts such as ad pixels and analytics tools through Google Tag Manager.",
    example: "GTM container cookies (_gtm)",
    canDisable: true,
  },
];

const controlSteps = [
  { label: "Chrome", desc: "Settings → Privacy & Security → Cookies and other site data" },
  { label: "Safari", desc: "Preferences → Privacy → Manage Website Data" },
  { label: "Firefox", desc: "Settings → Privacy & Security → Cookies and Site Data" },
  { label: "Edge", desc: "Settings → Cookies and Site Permissions → Cookies" },
];

function InfoIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

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
        }

        .pp-ck-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 700;
          color: #F5E6B8;
          margin-bottom: 16px;
        }

        .pp-ck-intro {
          font-size: 14px;
          color: #7a6a45;
          line-height: 1.8;
          max-width: 760px;
          margin-bottom: 12px;
        }

        .pp-ck-meta {
          font-size: 13px;
          color: #5a4f35;
          line-height: 1.8;
          max-width: 760px;
          margin-bottom: 8px;
        }

        .pp-ck-meta strong {
          color: #9a8560;
          font-weight: 500;
        }

        .pp-ck-body {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          margin-top: 48px;
        }

        .pp-ck-table {
          width: 100%;
          border-collapse: collapse;
        }

        .pp-ck-table th {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #C9A84C;
          border-bottom: 0.5px solid rgba(201,168,76,0.2);
          padding: 0 12px 12px;
          text-align: left;
        }

        .pp-ck-table td {
          padding: 18px 12px;
          font-size: 13px;
          color: #6b5e38;
          border-bottom: 0.5px solid rgba(201,168,76,0.07);
          line-height: 1.7;
          vertical-align: top;
        }

        .pp-ck-table td:first-child {
          color: #E8D5A0;
          font-size: 13px;
          white-space: nowrap;
        }

        .pp-ck-status-badge {
          display: inline-block;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .pp-ck-status-active {
          background: rgba(201,168,76,0.1);
          color: #C9A84C;
          border: 0.5px solid rgba(201,168,76,0.25);
        }

        .pp-ck-status-optional {
          background: rgba(255,255,255,0.04);
          color: #6b5e38;
          border: 0.5px solid rgba(255,255,255,0.08);
        }

        .pp-ck-example {
          font-family: monospace;
          font-size: 11px;
          color: #4a4030;
        }

        .pp-ck-right-title {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 16px;
        }

        .pp-ck-browser-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          background: transparent;
          border: none;
          border-bottom: 0.5px solid rgba(201,168,76,0.08);
          cursor: pointer;
          color: #9a8560;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
        }

        .pp-ck-browser-item:hover {
          color: #E8D5A0;
        }

        .pp-ck-browser-chevron {
          font-size: 10px;
          color: #C9A84C;
          transition: transform 0.2s;
        }

        .pp-ck-browser-chevron.open {
          transform: rotate(180deg);
        }

        .pp-ck-browser-desc {
          display: none;
          padding: 8px 0 14px;
          color: #5a4f35;
          font-size: 12px;
          line-height: 1.6;
        }

        .pp-ck-browser-desc.open {
          display: block;
        }

        .pp-ck-optout {
          margin-top: 28px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #5a4f35;
          font-size: 12px;
          line-height: 1.7;
        }

        .pp-ck-optout a {
          color: #C9A84C;
          text-decoration: none;
        }

        .pp-ck-optout a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1023px) {
          .pp-ck-section {
            padding: 64px 24px;
          }
          .pp-ck-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="pp-ck-section">
        <div className="pp-ck-topline" />

        <div className="pp-ck-inner">
          

          <h2 className="pp-ck-h2">Cookies and Analytics</h2>

          <p className="pp-ck-intro">
            Like most professional websites, theprimecrafters.com uses cookies to function
            correctly and to gather anonymised usage data that helps us improve the experience for
            all visitors.
          </p>

          <p className="pp-ck-meta">
            <strong>What is a cookie?</strong> A cookie is a small text file placed on your device
            when you visit a website. It does not give us access to your device or personal files.
          </p>

          <p className="pp-ck-meta">
            <strong>Managing your cookies:</strong> You can control and delete cookies at any time
            through your browser settings. Disabling optional cookies will not affect core website
            functionality. You may also opt out of Google Analytics tracking directly using Google's
            Analytics Opt-Out Browser Add-on.
          </p>

          <div className="pp-ck-body">
            {/* Left: Cookie table */}
            <div>
              <table className="pp-ck-table">
                <thead>
                  <tr>
                    <th>Cookie Category</th>
                    <th>Status</th>
                    <th>What It Does</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTypes.map((c) => (
                    <tr key={c.name}>
                      <td>{c.name}</td>
                      <td>
                        <span
                          className={`pp-ck-status-badge ${
                            c.canDisable ? "pp-ck-status-optional" : "pp-ck-status-active"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td>{c.purpose}</td>
                      <td className="pp-ck-example">{c.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right: Browser controls */}
            <div>
              <p className="pp-ck-right-title">Manage by Browser</p>

              {controlSteps.map((b) => (
                <div key={b.label}>
                  <button
                    type="button"
                    className="pp-ck-browser-item"
                    onClick={() =>
                      setOpenBrowser((prev) => (prev === b.label ? null : b.label))
                    }
                  >
                    {b.label}
                    <span
                      className={`pp-ck-browser-chevron ${
                        openBrowser === b.label ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`pp-ck-browser-desc ${
                      openBrowser === b.label ? "open" : ""
                    }`}
                  >
                    {b.desc}
                  </div>
                </div>
              ))}

              <div className="pp-ck-optout">
  <InfoIcon />
  <span>
    You may also opt out of Google Analytics tracking directly using{" "}
    <a
      href="https://tools.google.com/dlpage/gaoptout"
      target="_blank"
      rel="noopener noreferrer"
    >
      Google's Analytics Opt-Out Browser Add-on
    </a>
    .
  </span>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyCookies;
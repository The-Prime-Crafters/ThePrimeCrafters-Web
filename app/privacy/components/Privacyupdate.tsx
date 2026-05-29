"use client"
import Link from "next/link";

const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22 6 12 13 2 6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const LAST_UPDATED = "May 2025";

const updateCommitments: string[] = [
  "Any changes will be posted on this page with an updated date",
  "Material changes may be communicated directly to active clients",
  "Continued use of our website after updates constitutes acceptance",
  "You can request a summary of changes by contacting us directly",
];

const contactReasons: string[] = [
  "Ask how your data is collected or used",
  "Request access, correction, or deletion of your data",
  "Opt out of any communications",
  "Report a privacy concern or potential data incident",
  "Get clarification on any part of this policy",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PolicyUpdatesAndContact() {
  return (
    <section
      aria-labelledby="policy-updates-heading"
      style={{
        background: "#0a0a0a",
        color: "#f0ede6",
        padding: "80px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#c9a84c",
          marginBottom: "12px",
        }}
      >
        Privacy Policy
      </p>

      {/* Heading */}
      <h2
        id="policy-updates-heading"
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#f0ede6",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        Policy Updates & Privacy Contact
      </h2>

      {/* Gold accent line */}
      <div
        aria-hidden="true"
        style={{
          width: "48px",
          height: "3px",
          background: "#c9a84c",
          borderRadius: "2px",
          marginBottom: "32px",
        }}
      />

      {/* Intro */}
      <p
        style={{
          fontSize: "16px",
          color: "#8a8680",
          lineHeight: 1.7,
          maxWidth: "640px",
          marginBottom: "48px",
        }}
      >
        We may update this Privacy Policy from time to time to reflect changes in
        our services, technology, or legal obligations. When we do, we will always
        post the revised version on this page.
      </p>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {/* Policy Updates card */}
        <div
          style={{
            background: "#161616",
            border: "1px solid #2a2a2a",
            borderRadius: "12px",
            padding: "28px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.25)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
          }
        >
          {/* Icon badge */}
          <div
            aria-hidden="true"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "9px",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a84c",
              marginBottom: "16px",
            }}
          >
            <RefreshIcon />
          </div>

          <h3
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#f0ede6",
              margin: "0 0 12px",
            }}
          >
            How We Handle Updates
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            aria-label="Update commitments"
          >
            {updateCommitments.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "13px",
                  color: "#8a8680",
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    marginTop: "3px",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact card */}
        <div
          style={{
            background: "#161616",
            border: "1px solid #2a2a2a",
            borderRadius: "12px",
            padding: "28px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.25)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
          }
        >
          {/* Icon badge */}
          <div
            aria-hidden="true"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "9px",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a84c",
              marginBottom: "16px",
            }}
          >
            <MailIcon />
          </div>

          <h3
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#f0ede6",
              margin: "0 0 12px",
            }}
          >
            Reach Out About Privacy
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            aria-label="Reasons to contact us"
          >
            {contactReasons.map((reason) => (
              <li
                key={reason}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "13px",
                  color: "#8a8680",
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    marginTop: "3px",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckIcon />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#c9a84c",
              textDecoration: "none",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "6px",
              padding: "10px 16px",
              background: "rgba(201,168,76,0.08)",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(201,168,76,0.15)";
              el.style.borderColor = "rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(201,168,76,0.08)";
              el.style.borderColor = "rgba(201,168,76,0.3)";
            }}
          >
            Contact Us
            <ArrowRightIcon />
          </Link>
        </div>
      </div>

      {/* Last updated strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid #2a2a2a",
          borderRadius: "8px",
          padding: "14px 20px",
          marginBottom: "40px",
        }}
      >
        <span style={{ color: "#8a8680", flexShrink: 0 }} aria-hidden="true">
          <CalendarIcon />
        </span>
        <p style={{ fontSize: "13px", color: "#8a8680", margin: 0 }}>
          <strong style={{ color: "#a09c96", fontWeight: 500 }}>
            Last updated:
          </strong>{" "}
          {LAST_UPDATED}
        </p>
      </div>

      {/* Final divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #2a2a2a",
          margin: "0 0 32px",
        }}
      />

      {/* Closing note */}
      <p
        style={{
          fontSize: "14px",
          color: "#8a8680",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "600px",
        }}
      >
        Thank you for taking the time to read our Privacy Policy. Your trust
        matters to us. If you have any questions or concerns, please do not
        hesitate to{" "}
        <Link href="/contact" style={{ color: "#c9a84c", textDecoration: "none" }}>
          get in touch
        </Link>
        .
      </p>
    </section>
  );
}
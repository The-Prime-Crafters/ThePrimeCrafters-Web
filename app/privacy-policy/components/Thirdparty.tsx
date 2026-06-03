"use client";

import Link from "next/link";

const RefreshIcon = () => (
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
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
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

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LAST_UPDATED = "June 2, 2026";

const thirdPartyItems: string[] = [
  "Discovery call scheduling — tools such as Calendly, Cal.com, or Google Calendar may be used to book consultations. Their own privacy policies apply.",
  "Payment processing — project invoices are handled through secure third-party processors such as Stripe or PayPal. We do not store card details.",
  "Embedded widgets — pages may include third-party chat tools, interactive demos, or AI tools. Each is governed by the provider's own terms.",
  "External resource links — we may reference useful articles, tools, or platforms. Visiting those sites is subject to their own privacy policies.",
];

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
      <h2
        id="policy-updates-heading"
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#F5E6B8",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        Third-Party Links and Tools
      </h2>

      <p
        style={{
          fontSize: "16px",
          color: "#8a8680",
          lineHeight: 1.7,
          maxWidth: "640px",
          marginBottom: "48px",
        }}
      >
        Our website may include links to external websites, third-party
        platforms, booking pages, or embedded tools for your convenience. Once
        you navigate away from theprimecrafters.com or interact with an embedded
        third-party service, The PrimeCrafters has no control over how your data
        is handled.
      </p>

      {/* Centered Large Card */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#161616",
            border: "1px solid #2a2a2a",
            borderRadius: "12px",
            padding: "36px",
            width: "100%",
            maxWidth: "800px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor =
              "rgba(201,168,76,0.25)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor =
              "#2a2a2a")
          }
        >
          <div
            aria-hidden="true"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9a84c",
              marginBottom: "20px",
            }}
          >
            <RefreshIcon />
          </div>

          <h3
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#f0ede6",
              margin: "0 0 18px",
            }}
          >
            Third-party services that may be present on or linked from this site
            include:
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {thirdPartyItems.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "14px",
                  color: "#8a8680",
                  lineHeight: 1.7,
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
                    width: "20px",
                    height: "20px",
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
      </div>

      {/* Last Updated */}
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
        <span style={{ color: "#8a8680", flexShrink: 0 }}>
          <CalendarIcon />
        </span>

        <p
          style={{
            fontSize: "13px",
            color: "#8a8680",
            margin: 0,
          }}
        >
          <strong
            style={{
              color: "#a09c96",
              fontWeight: 500,
            }}
          >
            Last updated:
          </strong>{" "}
          {LAST_UPDATED}
        </p>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #2a2a2a",
          margin: "0 0 32px",
        }}
      />

      <p
        style={{
          fontSize: "14px",
          color: "#8a8680",
          lineHeight: 1.7,
          margin: 0,
          maxWidth: "600px",
        }}
      >
        A link or integration does not indicate endorsement of a third
        party&apos;s privacy or data practices. We encourage you to review the
        privacy policy of any service you interact with.{" "}
        <Link
          href="/contact"
          style={{
            color: "#c9a84c",
            textDecoration: "none",
          }}
        >
          Get in touch
        </Link>{" "}
        if you have any questions.
      </p>
    </section>
  );
}
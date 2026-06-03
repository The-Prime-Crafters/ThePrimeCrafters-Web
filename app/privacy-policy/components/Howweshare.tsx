"use client"
import Link from "next/link";

const serviceProviderCategories = [
  { label: "Website hosting and infrastructure", desc: "for reliable, secure website delivery" },
  { label: "Analytics and tag management", desc: "for aggregated site performance data" },
  { label: "CRM and client management tools", desc: "for organising enquiries and client records" },
  { label: "Scheduling and calendar platforms", desc: "for managing discovery calls and consultations" },
  { label: "Email and communication tools", desc: "for sending replies, proposals, and project updates" },
  { label: "Payment processors", desc: "for handling project invoices securely" },
  { label: "Security and monitoring tools", desc: "for protecting the website and client systems" },
  { label: "Automation platforms", desc: "used within client project delivery stacks" },
];

const legalReasons = [
  "Comply with a legal obligation, court order, or lawful government request",
  "Investigate or prevent fraud, data breaches, or illegal activity",
  "Protect the rights, safety, or property of The Prime Crafters, our clients, or the general public",
  "Enforce our Terms and Conditions or other agreements",
];

const ShieldIcon = () => (
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
    <path d="M12 3a12 12 0 0 0-8.5 3L12 21l8.5-15A12 12 0 0 0 12 3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SettingsIcon = () => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ScaleIcon = () => (
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
    <path d="M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7" />
  </svg>
);

export default function HowWeShareInformation() {
  return (
    <section
      className="tpc-section"
      aria-labelledby="share-heading"
      style={{
        background: "#0a0a0a",
        color: "#f0ede6",
        padding: "80px 40px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      

      {/* H2 */}
      <h2
        id="share-heading"
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#F5E6B8",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        How We Share Your Information
      </h2>

     
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
        The Prime Crafters does not sell, rent, lease, or trade your personal data — under any
        circumstances. Your information is shared only in the two specific situations described below.
      </p>

      {/* Card — Trusted Service Providers */}
      <div
        style={{
          background: "#161616",
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          padding: "28px 28px 24px",
          marginBottom: "20px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.25)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
        }
      >
        {/* H3 */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#f0ede6",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "#c9a84c" }}>
            <SettingsIcon />
          </span>
          Trusted Service Providers
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: "0 0 12px",
          }}
        >
          To operate our website and deliver AI automation services to clients, we work with a
          curated set of third-party tools and platforms. These providers are permitted to process
          your data only to the extent needed to support the specific service they provide to us.
          They are contractually prohibited from using it for any other purpose.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: "0 0 16px",
          }}
        >
          Relevant categories of service providers include:
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
          aria-label="Service provider categories"
        >
          {serviceProviderCategories.map((item) => (
            <li
              key={item.label}
              style={{
                fontSize: "13px",
                color: "#8a8680",
                lineHeight: 1.6,
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
              }}
            >
              <span style={{ color: "#c9a84c", fontSize: "10px", flexShrink: 0 }}>◆</span>
              <span>
                <span style={{ color: "#e8d5a0", fontWeight: 500 }}>{item.label}</span>
                {" "}— {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card — Legal or Security Requirements */}
      <div
        style={{
         background: "rgba(201,168,76,0.04)",
border: "1px solid rgba(201,168,76,0.10)",
          borderRadius: "12px",
          padding: "28px 28px 24px",
          marginBottom: "40px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.25)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
        }
      >
        {/* H3 */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#f0ede6",
            margin: "0 0 12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "#c9a84c" }}>
            <ScaleIcon />
          </span>
          Legal or Security Requirements
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#7f7251",
            lineHeight: 1.65,
            margin: "0 0 16px",
          }}
        >
          In rare circumstances, we may be required or permitted by law to disclose personal
          information, including to:
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {legalReasons.map((reason) => (
            <li
              key={reason}
              style={{
                fontSize: "13px",
                color: "#8a8680",
                lineHeight: 1.6,
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
              }}
            >
              <span style={{ color: "#c9a84c", fontSize: "10px", flexShrink: 0 }}>◆</span>
              {reason}
            </li>
          ))}
        </ul>

        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Any such disclosure will be limited to what is strictly necessary and handled through
          appropriate legal channels.
        </p>
      </div>

     
    </section>
  );
}
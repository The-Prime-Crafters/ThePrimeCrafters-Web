"use client"
import Link from "next/link";

const serviceProviderCategories = [
  "Hosting & infrastructure",
  "Analytics & tag management",
  "CRM & scheduling",
  "Email & communication",
  "Payment processing",
  "Security & monitoring",
  "Automation tools",
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
        id="share-heading"
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#f0ede6",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        How We Share Information
      </h2>

      {/* Gold accent line */}
      <div
        style={{
          width: "48px",
          height: "3px",
          background: "#c9a84c",
          borderRadius: "2px",
          marginBottom: "32px",
        }}
        aria-hidden="true"
      />

      {/* Intro paragraph */}
      <p
        style={{
          fontSize: "16px",
          color: "#8a8680",
          lineHeight: 1.7,
          maxWidth: "640px",
          marginBottom: "48px",
        }}
      >
        We respect your data. The Prime Crafters does not sell, rent, or trade
        your personal information to any third party — ever. Information is
        shared only in the limited, specific circumstances described below.
      </p>

      {/* Highlight box */}
      <div
        role="note"
        style={{
          background: "rgba(201,168,76,0.12)",
          border: "1px solid rgba(201,168,76,0.25)",
          borderLeft: "3px solid #c9a84c",
          borderRadius: "8px",
          padding: "20px 24px",
          marginBottom: "40px",
          display: "flex",
          alignItems: "flex-start",
          gap: "14px",
        }}
      >
        <span style={{ color: "#c9a84c", marginTop: "2px", flexShrink: 0 }}>
          <ShieldIcon />
        </span>
        <p style={{ fontSize: "15px", color: "#f0ede6", lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: "#e8c97a", fontWeight: 500 }}>
            Your data is never sold.
          </strong>{" "}
          We share information only when it is strictly necessary to deliver our
          services, comply with the law, or protect the rights and security of
          our users and systems.
        </p>
      </div>

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
          ((e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,168,76,0.25)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
        }
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#f0ede6",
            margin: "0 0 8px",
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
            margin: "0 0 16px",
          }}
        >
          To operate our website and deliver AI automation services, we work
          with carefully selected third-party tools and platforms. These
          providers may process your data solely to support the services we
          offer — they are not permitted to use your information for any other
          purpose.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: "0 0 16px",
          }}
        >
          This may include providers across the following categories:
        </p>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
          aria-label="Service provider categories"
        >
          {serviceProviderCategories.map((category) => (
            <span
              key={category}
              style={{
                fontSize: "12px",
                color: "#c9a84c",
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "20px",
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Card — Legal or Security Requirements */}
      <div
        style={{
          background: "#161616",
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          padding: "28px 28px 24px",
          marginBottom: "40px",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor =
            "rgba(201,168,76,0.25)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a")
        }
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#f0ede6",
            margin: "0 0 8px",
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
            color: "#8a8680",
            lineHeight: 1.65,
            margin: "0 0 12px",
          }}
        >
          In certain circumstances, we may be required to disclose your
          information to comply with applicable laws or regulations, respond to
          lawful requests from public authorities, prevent or investigate
          potential fraud or abuse, or protect the rights, property, and safety
          of The Prime Crafters, our clients, or the public.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          Any such disclosure will be limited strictly to what is necessary
          under the circumstances.
        </p>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #2a2a2a",
          margin: "0 0 32px",
        }}
      />

    
    </section>
  );
}
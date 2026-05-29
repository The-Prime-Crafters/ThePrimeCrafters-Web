"use client"
import Link from "next/link";


const ClockIcon = () => (
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
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InboxIcon = () => (
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
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const BriefcaseIcon = () => (
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
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const FileTextIcon = () => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ScaleIcon = () => (
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
    <path d="M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7" />
  </svg>
);

const TrashIcon = () => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface RetentionReason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const retentionReasons: RetentionReason[] = [
  {
    icon: <InboxIcon />,
    title: "Inquiries & Consultations",
    description:
      "Data submitted through contact forms or discovery calls is kept while your inquiry is active and for a reasonable period afterward.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Service Delivery",
    description:
      "Client data shared for AI automation projects, workflow builds, or implementations is retained throughout the engagement and for a period after project completion.",
  },
  {
    icon: <FileTextIcon />,
    title: "Client Records",
    description:
      "We maintain records necessary to support ongoing client relationships, document decisions, and provide continuity of service.",
  },
  {
    icon: <ScaleIcon />,
    title: "Legal & Accounting Obligations",
    description:
      "Certain data must be retained to comply with applicable laws, tax regulations, or contractual obligations — even after a project has ended.",
  },
  {
    icon: <ShieldIcon />,
    title: "Security & Dispute Handling",
    description:
      "Where needed to prevent fraud, resolve disputes, or enforce our agreements, relevant records may be kept for a longer period.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DataRetention() {
  return (
    <section
      aria-labelledby="data-retention-heading"
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
        id="data-retention-heading"
        style={{
          fontSize: "36px",
          fontWeight: 600,
          color: "#f0ede6",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        Data Retention
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
        We only keep your information for as long as it is genuinely needed.
        Once data has served its purpose, we delete or anonymise it in a
        responsible and timely manner.
      </p>

      {/* Principle highlight box */}
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
        <span
          style={{ color: "#c9a84c", marginTop: "2px", flexShrink: 0 }}
          aria-hidden="true"
        >
          <ClockIcon />
        </span>
        <p
          style={{
            fontSize: "15px",
            color: "#f0ede6",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          <strong style={{ color: "#e8c97a", fontWeight: 500 }}>
            Minimum necessary, maximum care.
          </strong>{" "}
          We do not hold on to data longer than required. Retention periods are
          determined by the purpose for which the data was collected and any
          applicable legal obligations.
        </p>
      </div>

      {/* Retention reasons — timeline-style list */}
      <div
        style={{ position: "relative", marginBottom: "40px" }}
        role="list"
        aria-label="Reasons we retain data"
      >
        {/* Vertical line */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "21px",
            top: "12px",
            bottom: "12px",
            width: "1px",
            background:
              "linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))",
          }}
        />

        {retentionReasons.map((reason, index) => (
          <div
            key={reason.title}
            role="listitem"
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: index < retentionReasons.length - 1 ? "28px" : 0,
              position: "relative",
            }}
          >
            {/* Icon node */}
            <div
              aria-hidden="true"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#161616",
                border: "1px solid rgba(201,168,76,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c9a84c",
                flexShrink: 0,
                zIndex: 1,
              }}
            >
              {reason.icon}
            </div>

            {/* Text */}
            <div
              style={{
                background: "#161616",
                border: "1px solid #2a2a2a",
                borderRadius: "10px",
                padding: "16px 20px",
                flex: 1,
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
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#f0ede6",
                  margin: "0 0 6px",
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#8a8680",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Deletion note */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid #2a2a2a",
          borderRadius: "8px",
          padding: "18px 20px",
          marginBottom: "40px",
        }}
      >
        <span
          style={{ color: "#8a8680", marginTop: "2px", flexShrink: 0 }}
          aria-hidden="true"
        >
          <TrashIcon />
        </span>
        <p
          style={{
            fontSize: "14px",
            color: "#8a8680",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          When data is no longer needed, we securely delete or anonymise it so
          that it can no longer be associated with you. You may also request
          deletion at any time — see our{" "}
          <Link
            href="#privacy-rights"
            style={{ color: "#c9a84c", textDecoration: "none" }}
          >
            Your Privacy Rights
          </Link>{" "}
          section for details.
        </p>
      </div>


    </section>
  );
}
"use client"
import Link from "next/link";

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ScaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v18M3 9l9-6 9 6M5 11l-2 7h18l-2-7" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

interface RetentionRow {
  icon: React.ReactNode;
  dataType: string;
  retentionPeriod: string;
}

const retentionRows: RetentionRow[] = [
  {
    icon: <InboxIcon />,
    dataType: "Website enquiries and contact form submissions",
    retentionPeriod: "Duration of enquiry plus up to 12 months",
  },
  {
    icon: <ClockIcon />,
    dataType: "Discovery call and consultation records",
    retentionPeriod: "Duration of pre-engagement period plus up to 12 months",
  },
  {
    icon: <BriefcaseIcon />,
    dataType: "Active client project data",
    retentionPeriod: "Duration of engagement plus up to 24 months post-completion",
  },
  {
    icon: <ScaleIcon />,
    dataType: "Financial and invoicing records",
    retentionPeriod: "Up to 7 years (legal/tax compliance)",
  },
  {
    icon: <ShieldIcon />,
    dataType: "Security and abuse logs",
    retentionPeriod: "Up to 12 months",
  },
  {
    icon: <FileTextIcon />,
    dataType: "Anonymised analytics data",
    retentionPeriod: "Up to 26 months (standard Google Analytics window)",
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
     

      {/* H2 */}
      <h2
        id="data-retention-heading"
        style={{
          fontSize: "46px",
          fontWeight: 600,
          color: "#F5E6B8",
          lineHeight: 1.2,
          margin: "0 0 16px",
        }}
      >
        Data Retention
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
        We do not hold on to data longer than necessary. Retention periods are
        determined by the original purpose for which data was collected and any
        applicable legal or contractual obligations.
      </p>

      {/* Table */}
      <div
        style={{
          marginBottom: "40px",
          borderRadius: "12px",
          border: "1px solid #2a2a2a",
          overflow: "hidden",
        }}
      >
        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            background: "#161616",
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            padding: "14px 20px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c9a84c",
            }}
          >
            Data Type
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#c9a84c",
            }}
          >
            Retention Period
          </span>
        </div>

        {/* Table rows */}
        {retentionRows.map((row, index) => (
          <div
            key={row.dataType}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              padding: "18px 20px",
              borderBottom:
                index < retentionRows.length - 1
                  ? "1px solid #1e1e1e"
                  : "none",
              background: index % 2 === 0 ? "#0f0f0f" : "#0a0a0a",
              transition: "background 0.2s",
              gap: "16px",
              alignItems: "center",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background = "#141414")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                index % 2 === 0 ? "#0f0f0f" : "#0a0a0a")
            }
          >
            {/* Data Type cell */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{ color: "#c9a84c", flexShrink: 0 }}
                aria-hidden="true"
              >
                {row.icon}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#e8d5a0",
                  lineHeight: 1.5,
                }}
              >
                {row.dataType}
              </span>
            </div>

            {/* Retention Period cell */}
            <span
              style={{
                fontSize: "13px",
                color: "#8a8680",
                lineHeight: 1.6,
              }}
            >
              {row.retentionPeriod}
            </span>
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
          When data is no longer required, it is securely deleted or anonymised
          so it can no longer be linked to you. You may also request deletion of
          your data at any time — see{" "}
          <Link
            href="#privacy-rights"
            style={{ color: "#c9a84c", textDecoration: "none" }}
          >
            Your Privacy Rights
          </Link>{" "}
          below.
        </p>
      </div>
    </section>
  );
}
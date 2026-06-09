"use client"
import React, { useState } from "react";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  icon: string;
  href: string;
  metrics: CaseStudyMetric[];
  description: string;
}

type FilterCategory = "All" | "Voice AI" | "Healthcare AI" | "Sales AI" | "Lead Generation" | "Mobile App" | "Domain Investment";

const caseStudies: CaseStudy[] = [
  {
    id: "3vltn",
    title: "3vltn Domain AI Platform",
    category: "Domain Investment",
    categoryColor: "#7C6AC4",
    icon: "🌐",
    href: "https://www.theprimecrafters.com/case-study/3vltn",
    description:
      "The 3vltn team was managing hundreds of domain acquisition and outreach conversations manually — a process that was slow, inconsistent, and impossible to scale. The Prime Crafters built a fully automated AI platform that handled outbound email campaigns, inbound lead qualification, deal negotiations, and revenue tracking end-to-end.",
    metrics: [
      { value: "+250%", label: "Deal Closure Rate" },
      { value: "40 hrs", label: "Manual Hours Saved Per Week" },
      { value: "+180%", label: "Revenue Growth" },
    ],
  },
  {
    id: "lmn8",
    title: "lmn8 Ketamine Therapy AI",
    category: "Healthcare AI",
    categoryColor: "#4CA88A",
    icon: "⚕️",
    href: "https://www.theprimecrafters.com/case-study/lmn8-ketamine-therapy",
    description:
      "lmn8 was struggling to match patients with the right ketamine therapy clinics quickly and compliantly. The Prime Crafters built a HIPAA-compliant AI platform that automated patient intake, AI-powered treatment matching, and appointment scheduling — reducing the time from enquiry to confirmed booking by 65%.",
    metrics: [
      { value: "94%", label: "AI Matching Accuracy" },
      { value: "65%", label: "Faster Patient Intake" },
      { value: "+45%", label: "Clinic Capacity Increase" },
    ],
  },
  {
    id: "faithful-companion",
    title: "Faithful Companion App",
    category: "Mobile App",
    categoryColor: "#C97A4C",
    icon: "✝️",
    href: "https://www.theprimecrafters.com/case-study/faithful-companion",
    description:
      "The Faithful Companion app needed to serve a large and growing faith community with daily devotionals, prayer requests, and community engagement — at scale, reliably, and with an experience people would return to every day. The Prime Crafters built the full application with content feeds, community prayer features, and engagement mechanics that drove 50,000+ daily active users within its first growth phase.",
    metrics: [
      { value: "50K+", label: "Daily Active Users" },
      { value: "200K+", label: "Community Prayer Requests" },
      { value: "4.8 / 5", label: "App Store Rating" },
    ],
  },
  {
    id: "rv-park",
    title: "RV Park AI Voice Agent",
    category: "Voice AI",
    categoryColor: "#4C8EC9",
    icon: "🚐",
    href: "https://www.theprimecrafters.com/case-study/rv-park-voice-agent",
    description:
      "A local RV park business was losing bookings because calls went unanswered outside business hours. The Prime Crafters deployed a custom 24/7 AI voice agent that handled every inbound call, answered questions, and completed bookings without any human involvement — recovering lost revenue and freeing staff from phone management entirely.",
    metrics: [
      { value: "100%", label: "Call Answer Rate" },
      { value: "+85%", label: "Booking Conversion Increase" },
      { value: "30 hrs", label: "Staff Hours Saved Per Week" },
    ],
  },
  {
    id: "spectrum",
    title: "Spectrum AI Voice Agent",
    category: "Sales AI",
    categoryColor: "#C94C6A",
    icon: "📞",
    href: "https://www.theprimecrafters.com/case-study/spectrum-voice-agent",
    description:
      "Spectrum's sales team was stretched across thousands of monthly calls with inconsistent qualification and high operational costs. The Prime Crafters built an enterprise-grade AI voice agent that managed outbound and inbound sales calls at scale — qualifying leads, handling objections, and routing hot prospects to human agents — while cutting cost per call by 70%.",
    metrics: [
      { value: "10K+", label: "AI-Handled Calls Per Month" },
      { value: "+45%", label: "Conversion Rate Increase" },
      { value: "70%", label: "Operational Cost Reduction" },
    ],
  },
  {
    id: "lead-gen",
    title: "AI Lead Generation Tools",
    category: "Lead Generation",
    categoryColor: "#C9A84C",
    icon: "🎯",
    href: "https://www.theprimecrafters.com/case-study/lead-generation-tools",
    description:
      "A sales-driven business needed a scalable, automated way to identify, enrich, and deliver qualified leads directly into its CRM pipeline — without a large manual research team. The Prime Crafters built a multi-channel AI lead generation system that sourced, scored, and pushed 50,000+ qualified leads per month directly into Salesforce and HubSpot.",
    metrics: [
      { value: "50K+", label: "Qualified Leads Per Month" },
      { value: "90%", label: "Manual Prospecting Time Saved" },
      { value: "+120%", label: "Qualified Lead Rate Increase" },
    ],
  },
];

const filterCategories: FilterCategory[] = [
  "All",
  "Voice AI",
  "Healthcare AI",
  "Sales AI",
  "Lead Generation",
  "Mobile App",
  "Domain Investment",
];

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#08090f",
    padding: "80px 40px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  bgGlow: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(76,142,201,0.03) 0%, transparent 50%)",
    pointerEvents: "none",
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    position: "relative",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "12px",
  },
  eyebrowLine: {
    width: "28px",
    height: "1px",
    background: "#C9A84C",
  },
  eyebrowText: {
    fontSize: "11px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#C9A84C",
    fontWeight: 500,
  },
  h2: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "36px",
    fontWeight: 700,
    color: "#f5f1e8",
    marginBottom: "32px",
    lineHeight: 1.15,
  },
  filterRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "8px",
    marginBottom: "40px",
  },
  filterBtn: {
    fontSize: "13px",
    padding: "7px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "transparent",
    color: "rgba(240,237,230,0.6)",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    transition: "all 0.2s",
    letterSpacing: "0.01em",
  },
  filterBtnActive: {
    fontSize: "13px",
    padding: "7px 16px",
    borderRadius: "999px",
    border: "1px solid #C9A84C",
    background: "rgba(201,168,76,0.12)",
    color: "#C9A84C",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    transition: "all 0.2s",
    letterSpacing: "0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    alignItems: "stretch",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "14px",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0px",
    transition: "border-color 0.25s, background 0.25s, transform 0.25s",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    height: "100%",
  },
  cardHovered: {
    background: "rgba(255,255,255,0.055)",
    border: "1px solid rgba(201,168,76,0.35)",
    borderRadius: "14px",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "0px",
    transition: "border-color 0.25s, background 0.25s, transform 0.25s",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
    transform: "translateY(-3px)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "14px",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  categoryPill: {
    fontSize: "11px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: 500,
    letterSpacing: "0.03em",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#f5f1e8",
    lineHeight: 1.25,
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "13px",
    color: "rgba(240,237,230,0.5)",
    lineHeight: 1.65,
    marginBottom: "20px",
    flexGrow: 1,
  },
  metricsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    marginBottom: "20px",
  },
  metricItem: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "8px",
    padding: "10px 8px",
    textAlign: "center" as const,
  },
  metricValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#C9A84C",
    lineHeight: 1,
    marginBottom: "4px",
  },
  metricLabel: {
    fontSize: "10px",
    color: "rgba(240,237,230,0.45)",
    lineHeight: 1.3,
    letterSpacing: "0.01em",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "16px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  viewLink: {
    fontSize: "13px",
    color: "#C9A84C",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  hiddenCard: {
    display: "none",
  },
};

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={study.href}
      id={`case-study-${study.id}`}
      style={hovered ? styles.cardHovered : styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${study.title} — ${study.category} case study`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="csg-card-header" style={styles.cardHeader}>
        <div style={styles.iconBox} aria-hidden="true">
          {study.icon}
        </div>
        <span
          style={{
            ...styles.categoryPill,
            background: `${study.categoryColor}18`,
            color: study.categoryColor,
            border: `1px solid ${study.categoryColor}40`,
          }}
        >
          {study.category}
        </span>
      </div>

      <h3 style={styles.cardTitle}>{study.title}</h3>
      <p style={styles.cardDescription}>{study.description}</p>

      <div className="csg-metrics" style={styles.metricsRow} role="list" aria-label="Key metrics">
        {study.metrics.map((m) => (
          <div key={m.label} style={styles.metricItem} role="listitem">
            <div style={styles.metricValue}>{m.value}</div>
            <div style={styles.metricLabel}>{m.label}</div>
          </div>
        ))}
      </div>

      <div style={styles.cardFooter}>
        <span style={styles.viewLink}>
          View Case Study{" "}
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.2s",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
};

const CaseStudyGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered = caseStudies.filter(
    (s) => activeFilter === "All" || s.category === activeFilter
  );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @media (max-width: 1024px) {
          .csg-section { padding: 64px 24px !important; }
          .csg-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .csg-h2 { font-size: 30px !important; }
        }
        @media (max-width: 640px) {
          .csg-section { padding: 56px 16px !important; }
          .csg-grid { grid-template-columns: 1fr !important; }
          .csg-h2 { font-size: 26px !important; }
          .csg-metrics { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .csg-h2 { font-size: 22px !important; }
          .csg-card-header { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
        }
      `}</style>
      <section
        id="case-studies"
        className="csg-section"
        style={styles.section}
        aria-labelledby="case-study-grid-heading"
      >
        <div style={styles.bgGlow} aria-hidden="true" />
        <div style={styles.inner}>
          {/* Eyebrow */}
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>Portfolio</span>
          </div>

          {/* H2 */}
          <h2 id="case-study-grid-heading" className="csg-h2" style={styles.h2}>
            Explore PrimeCrafters Case Studies
          </h2>

          {/* Subtitle paragraph */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(240,237,230,0.5)",
              marginBottom: "32px",
              lineHeight: 1.75,
              maxWidth: "580px",
            }}
          >
            Six production AI systems. Six distinct industries. All built from scratch to solve real business problems and deliver measurable results.
          </p>

          {/* Filter Chips */}
          <div
            style={styles.filterRow}
            role="group"
            aria-label="Filter case studies by category"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                style={
                  activeFilter === cat
                    ? styles.filterBtnActive
                    : styles.filterBtn
                }
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid — all cards present in DOM for SEO, filtered via CSS display */}
          <div
            className="csg-grid"
            style={styles.grid}
            role="list"
            aria-label="Case study cards"
          >
            {caseStudies.map((study) => {
              const isVisible =
                activeFilter === "All" || study.category === activeFilter;
              return (
                <div
                  key={study.id}
                  role="listitem"
                  style={
                    isVisible
                      ? { transition: "opacity 0.3s", opacity: 1 }
                      : { display: "none" }
                  }
                >
                  <CaseStudyCard study={study} />
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p
              style={{
                color: "rgba(240,237,230,0.4)",
                textAlign: "center",
                marginTop: "40px",
                fontSize: "14px",
              }}
            >
              No case studies found for this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CaseStudyGrid;
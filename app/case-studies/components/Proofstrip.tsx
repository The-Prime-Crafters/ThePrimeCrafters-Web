"use client"
import React, { useEffect, useRef, useState } from "react";

interface ProofMetric {
  value: string;
  label: string;
  sourceProject: string;
  anchorHref: string;
}

const proofMetrics: ProofMetric[] = [
  {
    value: "+250%",
    label: "Deal Closure Rate",
    sourceProject: "3vltn Domain AI Platform",
    anchorHref: "#case-study-3vltn",
  },
  {
    value: "10K+",
    label: "Calls Per Month",
    sourceProject: "Spectrum AI Voice Agent",
    anchorHref: "#case-study-spectrum",
  },
  {
    value: "50K+",
    label: "Leads Per Month",
    sourceProject: "AI Lead Generation Tools",
    anchorHref: "#case-study-lead-gen",
  },
  {
    value: "94%",
    label: "AI Matching Accuracy",
    sourceProject: "lmn8 Ketamine Therapy",
    anchorHref: "#case-study-lmn8",
  },
  {
    value: "100%",
    label: "Call Answer Rate",
    sourceProject: "RV Park Voice Agent",
    anchorHref: "#case-study-rv-park",
  },
  {
    value: "70%",
    label: "Cost Reduction",
    sourceProject: "Spectrum AI Voice Agent",
    anchorHref: "#case-study-spectrum",
  },
];

const styles: Record<string, React.CSSProperties> = {
  section: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#0c0d15",
    padding: "72px 40px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  topBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
  },
  bottomBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
  },
  bgPattern: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
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
    marginBottom: "8px",
    lineHeight: 1.15,
  },
  subtitle: {
    fontSize: "15px",
    color: "rgba(240,237,230,0.55)",
    marginBottom: "52px",
    fontWeight: 400,
    lineHeight: 1.6,
    maxWidth: "520px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    transition: "border-color 0.25s, background 0.25s",
    cursor: "pointer",
    textDecoration: "none",
  },
  cardHovered: {
    background: "rgba(201,168,76,0.06)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "12px",
    padding: "28px 24px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    transition: "border-color 0.25s, background 0.25s",
    cursor: "pointer",
    textDecoration: "none",
  },
  metricValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "44px",
    fontWeight: 900,
    color: "#C9A84C",
    lineHeight: 1,
    letterSpacing: "-0.01em",
  },
  metricLabel: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#f5f1e8",
    lineHeight: 1.3,
  },
  metricSource: {
    fontSize: "12px",
    color: "rgba(240,237,230,0.4)",
    marginTop: "4px",
  },
  cardDivider: {
    height: "1px",
    background: "rgba(255,255,255,0.06)",
    margin: "4px 0",
  },
  viewLink: {
    fontSize: "12px",
    color: "rgba(201,168,76,0.7)",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "2px",
    fontWeight: 400,
  },
  arrow: {
    fontSize: "14px",
    transition: "transform 0.2s",
  },
  h3Hidden: {
    fontSize: "13px",
    color: "rgba(240,237,230,0.5)",
    marginBottom: "28px",
    fontWeight: 400,
    letterSpacing: "0.01em",
    fontStyle: "italic",
  },
};

const MetricCard: React.FC<{ metric: ProofMetric; visible: boolean }> = ({
  metric,
  visible,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={metric.anchorHref}
      style={{
        ...(hovered ? styles.cardHovered : styles.card),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, background 0.25s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${metric.value} ${metric.label} — ${metric.sourceProject}`}
    >
      <div style={styles.metricValue}>{metric.value}</div>
      <div style={styles.metricLabel}>{metric.label}</div>
      <div style={styles.cardDivider} />
      <div style={styles.metricSource}>{metric.sourceProject}</div>
      <div style={styles.viewLink}>
        View case study{" "}
        <span
          style={{
            ...styles.arrow,
            transform: hovered ? "translateX(3px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
};

const ProofStrip: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        ref={ref}
        style={styles.section}
        aria-labelledby="proof-strip-heading"
      >
        <div style={styles.topBorder} aria-hidden="true" />
        <div style={styles.bottomBorder} aria-hidden="true" />
        <div style={styles.bgPattern} aria-hidden="true" />

        <div style={styles.inner}>
          {/* Eyebrow */}
          <div style={styles.eyebrow}>
            <span style={styles.eyebrowLine} />
            <span style={styles.eyebrowText}>Proven Results</span>
          </div>

          {/* H2 */}
          <h2 id="proof-strip-heading" style={styles.h2}>
            Delivered Projects Across High-Impact AI Use Cases
          </h2>

          {/* H3 — outcome highlights */}
          <p style={styles.h3Hidden}>
            250% Deal Closure Rate &nbsp;·&nbsp; 10K+ Calls Per Month
            &nbsp;·&nbsp; 50K+ Leads Per Month
          </p>

          <p style={styles.subtitle}>
            Every number below comes from a real project. Click any metric to
            explore the full case study behind it.
          </p>

          {/* Metrics Grid */}
          <div
            style={styles.grid}
            role="list"
            aria-label="Project outcome metrics"
          >
            {proofMetrics.map((metric, i) => (
              <div
                key={metric.label}
                role="listitem"
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <MetricCard metric={metric} visible={visible} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProofStrip;
"use client"
import React, { useState } from "react";

const painPoints = [
  {
    number: "01",
    title: "Manual Work Still Slows Down Teams",
    description: "Teams repeat admin, sales, reporting, and support tasks daily that can be fully automated — stealing time from high-value work.",
    icon: "⏱",
    color: "#C9A84C",
    href: "/services/process-automation",
  },
  {
    number: "02",
    title: "Data Is Scattered Across Tools",
    description: "CRMs, forms, spreadsheets, databases, websites, inboxes, and internal docs hold valuable data that never talks to each other.",
    icon: "🔀",
    color: "#4C8EC9",
    href: "/services/ai-integration",
  },
  {
    number: "03",
    title: "Repetitive Customer and Sales Tasks Drain Time",
    description: "Follow-ups, call handling, lead qualification, FAQs, routing, and booking workflows eat hours every week that AI can handle.",
    icon: "📞",
    color: "#C94C6A",
    href: "/case-studies",
  },
  {
    number: "04",
    title: "AI Without Integration Creates More Work",
    description: "Generic AI tools that don't connect to your stack become another isolated tool to manage — adding friction instead of removing it.",
    icon: "⚠️",
    color: "#4CA88A",
    href: "/services/workflow-optimization",
  },
];

const ProblemSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="problem"
        aria-labelledby="problem-heading"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#0b0c14",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 80% 20%, rgba(201,76,106,0.03) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

          {/* Header row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", marginBottom: "56px", flexWrap: "wrap" as const }}>
            <div style={{ maxWidth: "600px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>The Problem</span>
              </div>
              <h2
                id="problem-heading"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px" }}
              >
                Generic AI Tools Don't Fit Real Business Operations
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0 }}>
                Off-the-shelf AI tools are built for everyone — which means they're optimised for no one. Manual work continues, tools stay disconnected, and teams are left managing yet another platform that doesn't follow how their business actually runs.
              </p>
            </div>

            {/* CTA anchor */}
            <div style={{ paddingTop: "8px" }}>
              <a
                href="/contact"
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  fontSize: "13px", fontWeight: 500, color: "#C9A84C",
                  border: `1px solid ${ctaHovered ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.3)"}`,
                  background: ctaHovered ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.05)",
                  borderRadius: "999px", padding: "11px 22px",
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "all 0.2s", whiteSpace: "nowrap" as const,
                }}
              >
                Talk to an AI Automation Expert →
              </a>
            </div>
          </div>

          {/* Pain point cards — 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} role="list" aria-label="Business pain points">
            {painPoints.map((point) => {
              const isHov = hovered === point.number;
              return (
                <div
                  key={point.number}
                  role="listitem"
                  onMouseEnter={() => setHovered(point.number)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: isHov ? `${point.color}08` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${isHov ? point.color + "35" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "14px", padding: "28px 26px",
                    transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                    transform: isHov ? "translateY(-2px)" : "translateY(0)",
                    cursor: "default",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    {/* Icon box */}
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${point.color}14`, border: `1px solid ${point.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                      {point.icon}
                    </div>
                    <div>
                      {/* Number */}
                      <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: point.color, fontWeight: 600, opacity: 0.7, display: "block", marginBottom: "6px" }}>{point.number}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.8)", lineHeight: 1.25, marginBottom: "10px", transition: "color 0.2s" }}>
                        {point.title}
                      </h3>
                      <p style={{ fontSize: "13px", color: isHov ? "rgba(240,237,230,0.6)" : "rgba(240,237,230,0.4)", lineHeight: 1.75, margin: 0, transition: "color 0.2s" }}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contrast block: Generic AI vs Custom AI */}
          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ padding: "28px 32px", background: "rgba(255,255,255,0.02)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,230,0.35)", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: "16px" }}>Generic AI Tools</div>
              {["One-size-fits-all outputs", "No workflow awareness", "Disconnected from your stack", "Requires manual copy-paste", "Adds another tool to manage"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "rgba(201,76,106,0.6)", fontSize: "14px" }}>✕</span>
                  <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.4)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "28px 32px", background: "rgba(201,168,76,0.04)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#C9A84C", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: "16px" }}>Custom AI Solutions</div>
              {["Built around your workflows", "Follows your business rules", "Integrated with your existing tools", "Automates end-to-end", "Part of your operation, not apart from it"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#C9A84C", fontSize: "14px" }}>✓</span>
                  <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
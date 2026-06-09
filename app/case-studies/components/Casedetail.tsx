"use client";

import React, { useState } from "react";

interface DetailStep {
  id: string;
  number: string;
  title: string;
  icon: string;
  description: string;
  bullets: string[];
  accentColor: string;
}

interface FeaturedCaseStudy {
  title: string;
  category: string;
  href: string;
  color: string;
}

const detailSteps: DetailStep[] = [
  {
    id: "challenge",
    number: "01",
    title: "Challenge",
    icon: "⚡",
    accentColor: "#C94C6A",
    description:
      "Every case study starts with the real business problem — what was broken, slow, or costing the client money before PrimeCrafters stepped in.",
    bullets: [
      "Root cause of operational inefficiency",
      "Revenue or growth bottleneck identified",
      "Manual processes ripe for automation",
    ],
  },
  {
    id: "solution",
    number: "02",
    title: "Solution",
    icon: "🧠",
    accentColor: "#4C8EC9",
    description:
      "The custom AI architecture designed specifically for the client — no off-the-shelf templates, no generic tools.",
    bullets: [
      "Custom AI system design",
      "Workflow mapping and automation logic",
      "Integration architecture planning",
    ],
  },
  {
    id: "features",
    number: "03",
    title: "Features",
    icon: "🔧",
    accentColor: "#7C6AC4",
    description:
      "A breakdown of every core feature built — from AI agents to dashboards, voice interfaces to CRM pipelines.",
    bullets: [
      "Core AI agent capabilities",
      "User-facing interfaces and dashboards",
      "Automation triggers and workflows",
    ],
  },
  {
    id: "tech-stack",
    number: "04",
    title: "Technology Stack",
    icon: "⚙️",
    accentColor: "#4CA88A",
    description:
      "The exact tools, models, and platforms used to build the solution — transparent and fully documented.",
    bullets: [
      "AI models and LLM providers",
      "Backend infrastructure and APIs",
      "Third-party integrations (CRM, telephony, etc.)",
    ],
  },
  {
    id: "results",
    number: "05",
    title: "Results",
    icon: "📊",
    accentColor: "#C9A84C",
    description:
      "Measurable outcomes — conversion rates, time saved, cost reductions, and revenue impact — all tied to real data.",
    bullets: [
      "Quantified performance improvements",
      "ROI and cost-benefit analysis",
      "Before vs. after comparison",
    ],
  },
];

const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    title: "3vltn Domain AI Platform",
    category: "Domain Investment",
    href: "/case-study/3vltn",
    color: "#7C6AC4",
  },
  {
    title: "lmn8 Ketamine Therapy",
    category: "Healthcare AI",
    href: "/case-study/lmn8-ketamine-therapy",
    color: "#4CA88A",
  },
  {
    title: "Faithful Companion App",
    category: "Mobile App",
    href: "/case-study/faithful-companion",
    color: "#C97A4C",
  },
  {
    title: "RV Park AI Voice Agent",
    category: "Voice AI",
    href: "/case-study/rv-park-voice-agent",
    color: "#4C8EC9",
  },
  {
    title: "Spectrum AI Voice Agent",
    category: "Enterprise Sales AI",
    href: "/case-study/spectrum-voice-agent",
    color: "#C94C6A",
  },
  {
    title: "AI Lead Generation Tools",
    category: "Marketing Automation",
    href: "/case-study/lead-generation-tools",
    color: "#C9A84C",
  },
];

const StepCard: React.FC<{ step: DetailStep; isActive: boolean; onClick: () => void }> = ({
  step,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      aria-expanded={isActive}
      aria-controls={`step-detail-${step.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        background: isActive ? `${step.accentColor}10` : "rgba(255,255,255,0.025)",
        border: `1px solid ${isActive ? step.accentColor + "50" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "12px",
        padding: "22px 20px",
        cursor: "pointer",
        transition: "all 0.25s",
        textAlign: "left",
        fontFamily: "'DM Sans', sans-serif",
        width: "100%",
        transform: isActive ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
        <span
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            background: isActive ? `${step.accentColor}20` : "rgba(255,255,255,0.06)",
            border: `1px solid ${isActive ? step.accentColor + "40" : "rgba(255,255,255,0.08)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {step.icon}
        </span>
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "11px",
            fontWeight: 700,
            color: isActive ? step.accentColor : "rgba(240,237,230,0.25)",
            letterSpacing: "0.15em",
          }}
        >
          {step.number}
        </span>
      </div>

      <span
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: isActive ? "#f5f1e8" : "rgba(240,237,230,0.6)",
          lineHeight: 1.2,
          transition: "color 0.2s",
        }}
      >
        {step.title}
      </span>

      {isActive && (
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            background: step.accentColor,
            borderRadius: "999px",
            marginTop: "2px",
          }}
        />
      )}
    </button>
  );
};

const CaseStudyDetailPattern: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>("challenge");

  const active = detailSteps.find((s) => s.id === activeStep)!;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @media (max-width: 768px) {
          .csdp-section { padding: 56px 20px !important; }
          .csdp-heading { font-size: 26px !important; }
          .csdp-subtitle { max-width: 100% !important; }
          .csdp-explorer { grid-template-columns: 1fr !important; gap: 16px !important; margin-bottom: 44px !important; }
          .csdp-detail-panel { padding: 24px 20px !important; }
          .csdp-case-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .csdp-section { padding: 44px 16px !important; }
          .csdp-heading { font-size: 22px !important; }
          .csdp-detail-panel { padding: 20px 16px !important; }
          .csdp-detail-title { font-size: 20px !important; }
        }
      `}</style>
      <section
        className="csdp-section"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#0c0d15",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        aria-labelledby="detail-pattern-heading"
        id="inside-case-studies"
      >
        {/* Top border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.04) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500 }}>
              Inside Each Case Study
            </span>
          </div>

          {/* H2 */}
          <h2
            id="detail-pattern-heading"
            className="csdp-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#f5f1e8",
              marginBottom: "10px",
              lineHeight: 1.15,
            }}
          >
            What Each Case Study Shows
          </h2>

          {/* Subtitle */}
          <p className="csdp-subtitle" style={{
            fontSize: "15px",
            color: "rgba(240,237,230,0.55)",
            marginBottom: "16px",
            fontWeight: 400,
            lineHeight: 1.75,
            maxWidth: "640px",
          }}>
            Click into any case study and you will find the same structured format — designed to give you a complete picture of the problem, the solution, and the results without any filler.
          </p>

          {/* H3 */}
          <p style={{
            fontSize: "14px",
            color: "rgba(240,237,230,0.45)",
            marginBottom: "52px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.6,
          }}>
            Challenge · Solution · Features · Technology Stack · Results
          </p>

          {/* Interactive Step Explorer */}
          <div className="csdp-explorer" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "24px", marginBottom: "64px" }}>

            {/* Left: Step Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} role="tablist" aria-label="Case study sections">
              {detailSteps.map((step) => (
                <StepCard
                  key={step.id}
                  step={step}
                  isActive={activeStep === step.id}
                  onClick={() => setActiveStep(step.id)}
                />
              ))}
            </div>

            {/* Right: Detail Panel */}
            <div
              id={`step-detail-${active.id}`}
              className="csdp-detail-panel"
              role="tabpanel"
              aria-label={`${active.title} details`}
              style={{
                background: `${active.accentColor}08`,
                border: `1px solid ${active.accentColor}30`,
                borderRadius: "16px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              {/* Step header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "52px", height: "52px",
                  borderRadius: "12px",
                  background: `${active.accentColor}18`,
                  border: `1px solid ${active.accentColor}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px",
                }} aria-hidden="true">
                  {active.icon}
                </div>
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: active.accentColor, fontWeight: 600, marginBottom: "4px" }}>
                    Section {active.number}
                  </p>
                  <h3 className="csdp-detail-title" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px", fontWeight: 700,
                    color: "#f5f1e8", lineHeight: 1.2,
                  }}>
                    {active.title}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: `${active.accentColor}20` }} />

              {/* Description */}
              <p style={{ fontSize: "15px", color: "rgba(240,237,230,0.7)", lineHeight: 1.75 }}>
                {active.description}
              </p>

              {/* Bullets */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {active.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: active.accentColor, marginTop: "7px", flexShrink: 0,
                    }} aria-hidden="true" />
                    <span style={{ fontSize: "14px", color: "rgba(240,237,230,0.6)", lineHeight: 1.55 }}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA links to actual case studies */}
              <div style={{ marginTop: "8px" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,237,230,0.3)", marginBottom: "12px", fontWeight: 500 }}>
                  See it in action
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {featuredCaseStudies.slice(0, 3).map((cs) => (
                    <a
                      key={cs.href}
                      href={cs.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "12px",
                        padding: "5px 12px",
                        borderRadius: "999px",
                        border: `1px solid ${cs.color}35`,
                        background: `${cs.color}0d`,
                        color: cs.color,
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "background 0.2s",
                      }}
                    >
                      {cs.title} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* All 6 case study links */}
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,230,0.3)", marginBottom: "16px", fontWeight: 500 }}>
              Explore All Case Studies
            </p>
            <div className="csdp-case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {featuredCaseStudies.map((cs) => (
                <a
                  key={cs.href}
                  href={cs.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid rgba(255,255,255,0.07)`,
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cs.color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.background = `${cs.color}0a`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.025)";
                  }}
                >
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 500, color: "#f5f1e8", marginBottom: "3px" }}>{cs.title}</p>
                    <p style={{ fontSize: "11px", color: cs.color, fontWeight: 500 }}>{cs.category}</p>
                  </div>
                  <span style={{ fontSize: "16px", color: cs.color }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetailPattern;
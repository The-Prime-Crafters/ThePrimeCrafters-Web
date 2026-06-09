"use client"
import React, { useState, useEffect, useRef } from "react";

interface BuildPhase {
  number: string;
  title: string;
  description: string;
  accentColor: string;
}

const buildPhases: BuildPhase[] = [
  {
    number: "01",
    title: "Discovery",
    accentColor: "#C9A84C",
    description:
      "We audit your current workflows, identify the highest-value automation opportunities, and map out a clear ROI case before a single line of code is written. No generic proposals — every recommendation is built on what we learn about your specific operation.",
  },
  {
    number: "02",
    title: "AI Architecture",
    accentColor: "#4CA88A",
    description:
      "We design the full system architecture: which AI models to use, how data flows between components, where human oversight is needed, and how the system integrates with your existing tech stack. You approve the blueprint before we build.",
  },
  {
    number: "03",
    title: "Development",
    accentColor: "#4C8EC9",
    description:
      "Our team builds the system in agile sprints, with weekly demos so you can see progress in real time. Every component is developed to production standards — not prototypes, not MVPs that fall apart under real load.",
  },
  {
    number: "04",
    title: "Integration",
    accentColor: "#7C6AC4",
    description:
      "We connect the AI system to your existing platforms — CRM, ERP, communication tools, analytics, payment systems, or any API your business depends on. Integrations are tested in staging before they touch your live environment.",
  },
  {
    number: "05",
    title: "Testing",
    accentColor: "#C94C6A",
    description:
      "Every system goes through structured QA, load testing, and user acceptance testing (UAT) before launch. We do not release anything to production without your explicit sign-off. AI outputs are validated against real-world scenarios.",
  },
  {
    number: "06",
    title: "Launch & Monitoring",
    accentColor: "#C97A4C",
    description:
      "We manage a phased rollout to minimise disruption, monitor system performance post-launch, and provide handover documentation and team training. Ongoing support is available for all production systems.",
  },
];

const BuildProcessSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>("01");
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const active = buildPhases.find((p) => p.number === activePhase) ?? buildPhases[0];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @media (max-width: 900px) {
          .hwb-section { padding: 64px 24px !important; }
          .hwb-layout { grid-template-columns: 1fr !important; gap: 20px !important; }
          .hwb-h2 { font-size: 30px !important; max-width: 100% !important; }
        }
        @media (max-width: 640px) {
          .hwb-section { padding: 56px 16px !important; }
          .hwb-h2 { font-size: 26px !important; }
          .hwb-detail-panel { padding: 24px 20px !important; min-height: auto !important; }
        }
        @media (max-width: 480px) {
          .hwb-h2 { font-size: 22px !important; }
          .hwb-detail-panel { padding: 20px 16px !important; }
        }
      `}</style>
      <section
        id="build-process"
        aria-labelledby="build-process-heading"
        ref={ref}
        className="hwb-section"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Top border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
          }}
        />

        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.03) 0%, transparent 60%), radial-gradient(ellipse at 90% 10%, rgba(76,142,201,0.03) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#C9A84C",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#C9A84C",
                fontWeight: 500,
              }}
            >
              How We Build
            </span>
          </div>

          {/* H2 */}
          <h2
            id="build-process-heading"
            className="hwb-h2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#f5f1e8",
              marginBottom: "10px",
              lineHeight: 1.15,
              maxWidth: "620px",
            }}
          >
            How PrimeCrafters Builds AI Automation Systems
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(240,237,230,0.5)",
              marginBottom: "36px",
              lineHeight: 1.75,
              maxWidth: "580px",
            }}
          >
            Behind every case study is the same proven delivery process. Six
            structured phases that take an idea from discovery to a
            production-ready AI system — without shortcuts, without scope creep,
            and with full client visibility at every step.
          </p>

          {/* Phase pill row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "8px",
              marginBottom: "52px",
            }}
            aria-label="Build phases"
          >
            {buildPhases.map((phase) => (
              <span
                key={phase.number}
                style={{
                  fontSize: "12px",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  border: `1px solid ${phase.accentColor}35`,
                  background: `${phase.accentColor}0c`,
                  color: phase.accentColor,
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {phase.title}
              </span>
            ))}
          </div>

          {/* Main content: phase selector left + detail panel right */}
          <div
            className="hwb-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            {/* Left: phase list */}
            <div
              role="tablist"
              aria-label="Build process phases"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {buildPhases.map((phase, i) => {
                const isActive = activePhase === phase.number;
                return (
                  <button
                    key={phase.number}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`phase-panel-${phase.number}`}
                    id={`phase-tab-${phase.number}`}
                    onClick={() => setActivePhase(phase.number)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "14px 16px",
                      borderRadius: "10px",
                      background: isActive
                        ? `${phase.accentColor}10`
                        : "transparent",
                      border: `1px solid ${isActive ? phase.accentColor + "35" : "transparent"}`,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "background 0.2s, border-color 0.2s, opacity 0.5s ease, transform 0.5s ease",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(-12px)",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    {/* Number badge */}
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: isActive
                          ? `${phase.accentColor}20`
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${isActive ? phase.accentColor + "45" : "rgba(255,255,255,0.08)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: isActive
                          ? phase.accentColor
                          : "rgba(240,237,230,0.3)",
                        flexShrink: 0,
                        transition: "all 0.2s",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {phase.number}
                    </span>

                    {/* Title */}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive
                          ? "#f5f1e8"
                          : "rgba(240,237,230,0.5)",
                        transition: "color 0.2s",
                      }}
                    >
                      {phase.title}
                    </span>

                    {/* Active indicator arrow */}
                    {isActive && (
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "13px",
                          color: phase.accentColor,
                          opacity: 0.7,
                        }}
                      >
                        →
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: detail panel */}
            <div
              id={`phase-panel-${active.number}`}
              className="hwb-detail-panel"
              role="tabpanel"
              aria-labelledby={`phase-tab-${active.number}`}
              style={{
                background: `${active.accentColor}07`,
                border: `1px solid ${active.accentColor}30`,
                borderRadius: "16px",
                padding: "36px 32px",
                transition: "background 0.3s, border-color 0.3s",
                minHeight: "260px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              {/* Phase number + title */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "42px",
                      fontWeight: 900,
                      color: active.accentColor,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      opacity: 0.25,
                    }}
                  >
                    {active.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#f5f1e8",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {active.title}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background: `${active.accentColor}20`,
                    marginBottom: "20px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(240,237,230,0.65)",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {active.description}
                </p>
              </div>

              {/* Step progress indicator */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                aria-label={`Phase ${active.number} of 6`}
              >
                {buildPhases.map((phase) => (
                  <button
                    key={phase.number}
                    onClick={() => setActivePhase(phase.number)}
                    aria-label={`Go to phase ${phase.number}: ${phase.title}`}
                    style={{
                      height: "3px",
                      flex: activePhase === phase.number ? "2" : "1",
                      borderRadius: "999px",
                      background:
                        activePhase === phase.number
                          ? active.accentColor
                          : "rgba(255,255,255,0.1)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "flex 0.3s ease, background 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <a
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#C9A84C",
                border: "1px solid rgba(201,168,76,0.35)",
                background: "rgba(201,168,76,0.08)",
                borderRadius: "999px",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              See Our Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildProcessSection;
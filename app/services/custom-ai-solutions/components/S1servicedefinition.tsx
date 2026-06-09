"use client"
import React, { useState } from "react";

const checklist = [
  "You have repeatable workflows that eat team hours every week",
  "Your team is growing and manual processes can't scale with it",
  "You have manual bottlenecks slowing sales, support, or operations",
  "You handle significant sales volume or inbound customer load",
  "Your data is spread across disconnected platforms and tools",
  "You've tried generic AI tools and found they don't fit your operation",
];

const scope = [
  { number: "01", label: "Strategy & Workflow Mapping" },
  { number: "02", label: "AI Architecture Design" },
  { number: "03", label: "Integrations & Data Connections" },
  { number: "04", label: "Development & Build" },
  { number: "05", label: "Testing & Optimisation" },
  { number: "06", label: "Launch & Ongoing Support" },
];

const ServiceDefinitionSection: React.FC = () => {
  const [defExpanded, setDefExpanded] = useState(true);
  const [ctaHov, setCtaHov] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="custom-ai-solutions"
        aria-labelledby="service-def-heading"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.04) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          {/* Eyebrow + H2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Our Service</span>
          </div>
          <h2
            id="service-def-heading"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px", maxWidth: "620px" }}
          >
            Custom AI Solutions Built for How Your Business Works
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "52px", maxWidth: "600px" }}>
            ThePrimeCrafters plans, builds, integrates, and optimises AI systems shaped entirely around your operation — not the other way around.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>

            {/* LEFT col */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Definition card */}
              <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "14px", overflow: "hidden" }}>
                <button
                  onClick={() => setDefExpanded(!defExpanded)}
                  aria-expanded={defExpanded}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" }}
                >
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0 }}>
                    What Is a Custom AI Solution?
                  </h3>
                  <span style={{ color: "#C9A84C", fontSize: "18px", fontWeight: 300, transform: defExpanded ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s", display: "block", flexShrink: 0 }}>+</span>
                </button>
                {defExpanded && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <div style={{ height: "1px", background: "rgba(201,168,76,0.15)", marginBottom: "16px" }} />
                    <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.6)", lineHeight: 1.8, margin: 0 }}>
                      A custom AI solution is an AI system built specifically around a company's workflows, data, business rules, tools, and users. Unlike generic AI tools, these systems are designed to fit into real operations — automating the exact tasks, processes, and handoffs that matter most to that business.
                    </p>
                  </div>
                )}
              </div>

              {/* Who needs it — checklist */}
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "18px" }}>
                  Who Needs a Custom AI Solutions Agency?
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {checklist.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ color: "#C9A84C", fontSize: "13px", marginTop: "1px", flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.6)", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "20px" }}>
                  <a
                    href="/contact"
                    onMouseEnter={() => setCtaHov(true)}
                    onMouseLeave={() => setCtaHov(false)}
                    style={{ fontSize: "13px", fontWeight: 500, color: "#C9A84C", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", opacity: ctaHov ? 1 : 0.75, transition: "opacity 0.2s" }}
                  >
                    Talk to us about your use case →
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT col — scope */}
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "6px" }}>
                What ThePrimeCrafters Handles
              </h3>
              <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.4)", lineHeight: 1.6, marginBottom: "24px" }}>
                From first conversation to live system — we handle every phase.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {scope.map((step) => (
                  <div key={step.number} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "14px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: "rgba(201,168,76,0.5)", letterSpacing: "0.05em", flexShrink: 0 }}>{step.number}</span>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(240,237,230,0.7)" }}>{step.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                <a href="/about-us" style={{ fontSize: "12px", color: "rgba(201,168,76,0.6)", textDecoration: "none", letterSpacing: "0.02em" }}>About ThePrimeCrafters →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDefinitionSection;
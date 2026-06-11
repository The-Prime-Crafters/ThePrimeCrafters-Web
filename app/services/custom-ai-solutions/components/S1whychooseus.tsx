"use client"
import React, { useState } from "react";

const trustSignals = [
  {
    icon: "🧭",
    title: "Business-First AI Planning",
    description: "We start with your business goals, team workflows, and operational constraints before selecting any tools or AI models. Strategy and process design come first — technology choices follow from that foundation. This prevents the common failure mode of impressive AI that doesn't fit how anyone actually works.",
    color: "#C9A84C",
    href: "/about-us",
  },
  {
    icon: "📐",
    title: "Custom Workflows, Not Generic Templates",
    description: "We do not apply generic automation patterns to new clients and rename them. Every solution is designed around your specific workflow logic, data structure, business rules, and team behaviour. The output is a system that behaves the way your operation requires — not the way a template assumes.",
    color: "#4C8EC9",
    href: "/services/workflow-optimization",
  },
  {
    icon: "🔗",
    title: "AI Systems Connected to Existing Tools",
    description: "We build integrations — not isolated tools. Every system The Prime Crafters delivers is designed to connect to your CRM, website, forms, databases, documents, email, calendars, and internal platforms. AI becomes a functional layer inside your existing stack, not a new silo your team has to manage.",
    color: "#4CA88A",
    href: "/services/ai-integration",
  },
  {
    icon: "🚀",
    title: "Support From Strategy to Launch",
    description: "Our involvement does not end at handover. From the first discovery call through planning, build, integration, testing, launch, monitoring, and post-launch optimisation — The Prime Crafters is involved at every stage until the system is stable, performing, and adopted by your team.",
    color: "#7C6AC4",
    href: "/contact",
  },
];

const processSteps = ["Discovery", "Architecture", "Development", "Integration", "Testing", "Launch"];

const WhyChooseSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [ctaHov, setCtaHov] = useState(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section id="why-choose" aria-labelledby="why-choose-heading" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(201,168,76,0.04) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(76,142,201,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Why Us</span>
          </div>
          <h2 id="why-choose-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            Why Choose ThePrimeCrafters for Custom AI Solutions?
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "600px" }}>
            The Prime Crafters is a custom AI solutions agency built on a single principle: AI should serve your operation, not the other way around. Every engagement starts with your business context — not a generic framework — and every system is measured against real outcomes.
          </p>

          {/* 2×2 trust cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginBottom: "32px" }} role="list" aria-label="Why choose ThePrimeCrafters">
            {trustSignals.map((ts) => {
              const isHov = hovered === ts.title;
              return (
                <div
                  key={ts.title}
                  role="listitem"
                  onMouseEnter={() => setHovered(ts.title)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ background: isHov ? `${ts.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? ts.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "28px 26px", display: "flex", flexDirection: "column", gap: "14px", transition: "all 0.25s", transform: isHov ? "translateY(-2px)" : "translateY(0)", cursor: "default" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${ts.color}14`, border: `1px solid ${ts.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                      {ts.icon}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.85)", margin: 0, lineHeight: 1.25, transition: "color 0.2s" }}>
                      {ts.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "13px", color: isHov ? "rgba(240,237,230,0.62)" : "rgba(240,237,230,0.42)", lineHeight: 1.75, margin: 0, transition: "color 0.2s" }}>
                    {ts.description}
                  </p>
                  <a href={ts.href} style={{ fontSize: "12px", color: ts.color, textDecoration: "none", opacity: isHov ? 0.9 : 0.4, transition: "opacity 0.2s", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    Learn more →
                  </a>
                </div>
              );
            })}
          </div>

          {/* Process badge row */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: "12px" }}>
            <span style={{ fontSize: "12px", color: "rgba(240,237,230,0.35)", letterSpacing: "0.04em", textTransform: "uppercase" as const, fontWeight: 500 }}>Six-Phase Delivery</span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
              {processSteps.map((step, i) => (
                <React.Fragment key={step}>
                  <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.06)", color: "#C9A84C", fontWeight: 500 }}>
                    {step}
                  </span>
                  {i < processSteps.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px", alignSelf: "center" }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, marginTop: "40px", justifyContent: "center" }}>
            <a
              href="/case-studies"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em" }}
            >
              See Results From Live Projects →
            </a>
            <a
              href="/contact"
              onMouseEnter={() => setCtaHov(true)}
              onMouseLeave={() => setCtaHov(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#08090f", background: ctaHov ? "#b8923e" : "#C9A84C", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s" }}
            >
              Book a Free AI Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;
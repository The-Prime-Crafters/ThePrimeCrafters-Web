"use client"
import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  const badges = [
    "Custom AI Platforms",
    "AI Agents",
    "Workflow Automation",
    "Business AI Tools",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="hero"
        aria-labelledby="hero-h1"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "120px 40px",
minHeight: "100vh",
display: "flex",
alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Background glows */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(76,142,201,0.06) 0%, transparent 55%), radial-gradient(ellipse at 10% 60%, rgba(201,168,76,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
        {/* Grid texture */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        {/* Bottom border */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* LEFT — Copy */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>
                ThePrimeCrafters
              </span>
            </div>

            {/* H1 */}
            <h1
              id="hero-h1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "52px",
                fontWeight: 900,
                color: "#f5f1e8",
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              Custom AI Solutions Agency for Business Automation
            </h1>

            {/* H2 */}
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(240,237,230,0.6)",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}
            >
              AI Systems Built Around Your Workflows, Data, and Tools
            </h2>

            {/* H3 badge row */}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0px",
                margin: "0 0 32px",
                visibility: "hidden",
                height: 0,
              }}
            >
              Custom AI Platforms, AI Agents, Workflow Automation, and Business AI Tools
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "40px" }} aria-label="Service types">
              {badges.map((b) => (
                <span key={b} style={{ fontSize: "12px", padding: "5px 14px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#C9A84C", fontWeight: 500, letterSpacing: "0.03em" }}>
                  {b}
                </span>
              ))}
            </div>

            {/* Proof cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "40px" }}>
              {[
                { label: "Workflow Automation", icon: "⚙️" },
                { label: "AI Integrations", icon: "🔗" },
                { label: "Custom AI Tools", icon: "🛠️" },
              ].map((card) => (
                <div key={card.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "14px 12px", textAlign: "center" as const }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{card.icon}</div>
                  <div style={{ fontSize: "11px", color: "rgba(240,237,230,0.55)", fontWeight: 500, lineHeight: 1.3 }}>{card.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              <a
                href="/contact"
                onMouseEnter={() => setHoveredCTA("primary")}
                onMouseLeave={() => setHoveredCTA(null)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: hoveredCTA === "primary" ? "#b8923e" : "#C9A84C",
                  color: "#08090f", padding: "14px 28px", borderRadius: "4px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600,
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "background 0.2s",
                }}
              >
                Book a Free AI Strategy Call →
              </a>
              <a
                href="/case-studies"
                onMouseEnter={() => setHoveredCTA("secondary")}
                onMouseLeave={() => setHoveredCTA(null)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "transparent", color: "#C9A84C",
                  padding: "14px 28px", borderRadius: "4px",
                  border: "1px solid rgba(201,168,76,0.35)",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 500,
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "background 0.2s, border-color 0.2s",
                  ...(hoveredCTA === "secondary" ? { background: "rgba(201,168,76,0.08)", borderColor: "rgba(201,168,76,0.6)" } : {}),
                }}
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* RIGHT — Abstract AI visual */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%", aspectRatio: "1", maxWidth: "660px", position: "relative" }}>
              {/* Outer ring */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)" }} />
              <div style={{ position: "absolute", inset: "12%", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)" }} />
              <div style={{ position: "absolute", inset: "24%", borderRadius: "50%", border: "1px solid rgba(76,142,201,0.1)" }} />

              {/* Center node */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80px", height: "80px", borderRadius: "16px", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "32px" }}>✦</span>
              </div>

              {/* Satellite nodes */}
              {[
                { top: "6%", left: "50%", transform: "translateX(-50%)", label: "CRM", color: "#C9A84C" },
                { top: "50%", right: "4%", transform: "translateY(-50%)", label: "API", color: "#4C8EC9" },
                { bottom: "6%", left: "50%", transform: "translateX(-50%)", label: "Data", color: "#4CA88A" },
                { top: "50%", left: "4%", transform: "translateY(-50%)", label: "AI", color: "#C94C6A" },
                { top: "18%", right: "18%", label: "Voice", color: "#7C6AC4" },
                { bottom: "18%", left: "18%", label: "Leads", color: "#C97A4C" },
              ].map((node) => (
                <div
                  key={node.label}
                  style={{
                    position: "absolute",
                    top: node.top,
                    left: node.left,
                    right: node.right,
                    bottom: node.bottom,
                    transform: node.transform,
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: `${node.color}14`,
                    border: `1px solid ${node.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: node.color,
                    letterSpacing: "0.04em",
                  }}
                >
                  {node.label}
                </div>
              ))}

              {/* Connection lines via SVG */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
                <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="rgba(201,168,76,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="92%" y2="50%" stroke="rgba(76,142,201,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="rgba(76,168,138,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="8%" y2="50%" stroke="rgba(201,76,106,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="rgba(124,106,196,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="rgba(201,122,76,0.15)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const proofBadges = [
  {
    label: "We map before we build",
    description: "Full workflow audit before any automation is designed",
  },
  {
    label: "Intelligent workflow logic",
    description: "Classification, routing, scoring, and drafting built in",
  },
  {
    label: "Connects your existing stack",
    description: "Works with CRMs, forms, email, calendars, and databases",
  },
];

const categoryPills = [
  "AI Workflows",
  "CRM Automation",
  "Data Sync",
  "Notifications",
  "Human Approvals",
];

const HeroSection: React.FC = () => {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section
        id="hero"
        aria-labelledby="hero-h1"
        className="pa-section"
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
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(76,142,201,0.06) 0%, transparent 55%), radial-gradient(ellipse at 10% 60%, rgba(201,168,76,0.05) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />

        <div className="pa-hero-grid" style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", width: "100%" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>ThePrimeCrafters</span>
            </div>

            <h1 id="hero-h1" className="pa-h1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "48.6px", fontWeight: 900, color: "#f5f1e8", lineHeight: 1.1, marginBottom: "20px" }}>
              AI Process Automation Services for Business Workflows
            </h1>

            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", fontWeight: 400, color: "rgba(240,237,230,0.6)", lineHeight: 1.7, marginBottom: "16px" }}>
              Automate Repetitive Work Across Sales, Support, Operations, and Admin
            </h2>

            <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(240,237,230,0.55)", lineHeight: 1.8, marginBottom: "28px", maxWidth: "520px" }}>
              Most businesses lose significant time every week to the same manual steps: copying data between tools, following up on leads, routing tickets, and chasing approvals. The Prime Crafters builds AI process automation systems that handle these workflows automatically, connecting the tools your team already uses and removing the manual handoffs that slow everything down.
            </p>

           

            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "28px" }}>
              {categoryPills.map((pill) => (
                <span key={pill} style={{ fontSize: "12px", padding: "5px 14px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", color: "#C9A84C", fontWeight: 500 }}>{pill}</span>
              ))}
            </div>

            <div className="pa-ctas" style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, marginBottom: "28px" }}>
              <Link href="/contact" onMouseEnter={() => setHoveredCTA("primary")} onMouseLeave={() => setHoveredCTA(null)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: hoveredCTA === "primary" ? "#b8923e" : "#C9A84C", color: "#08090f", padding: "14px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}>
                Book a Free Automation Strategy Call →
              </Link>
              <Link href="/case-studies" onMouseEnter={() => setHoveredCTA("secondary")} onMouseLeave={() => setHoveredCTA(null)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: hoveredCTA === "secondary" ? "rgba(201,168,76,0.08)" : "transparent", color: "#C9A84C", padding: "14px 28px", borderRadius: "4px", border: "1px solid rgba(201,168,76,0.35)", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "background 0.2s" }}>
                View Case Studies
              </Link>
            </div>

           <div
  style={{
    display: "flex",
    gap: "10px",
    flexWrap: "nowrap",
  }}
>
  {proofBadges.map((badge) => (
    <div
      key={badge.label}
      style={{
        flex: 1,
        fontSize: "11px",
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.03)",
        color: "rgba(240,237,230,0.65)",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "2px" }}>
        {badge.label}
      </div>
      <div
        style={{
          fontWeight: 300,
          color: "rgba(240,237,230,0.45)",
          lineHeight: 1.5,
        }}
      >
        {badge.description}
      </div>
    </div>
  ))}
</div>
          </div>

         <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <div
    style={{
      width: "100%",
      aspectRatio: "1",
      maxWidth: "480px", // was 520px
      position: "relative",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "28px", // was 32px
    }}
  >
    <p
      style={{
        fontSize: "10px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#C9A84C",
        fontWeight: 600,
        marginBottom: "16px",
      }}
    >
      Workflow Automation Diagram
    </p>

    {[
      { label: "Trigger", top: "12%", left: "8%", color: "#4C8EC9" },
      { label: "AI Logic", top: "12%", right: "8%", color: "#C9A84C" },
      { label: "Integrations", bottom: "12%", left: "8%", color: "#4CA88A" },
      { label: "Output", bottom: "12%", right: "8%", color: "#C94C6A" },
    ].map((node) => (
      <div
        key={node.label}
        style={{
          position: "absolute",
          top: node.top,
          left: node.left,
          right: node.right,
          bottom: node.bottom,
          width: "80px", // was 88px
          height: "50px", // was 56px
          borderRadius: "8px",
          background: `${node.color}14`,
          border: `1px solid ${node.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 600,
          color: node.color,
        }}
      >
        {node.label}
      </div>
    ))}

    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "120px", // was 120px
        height: "120px", // was 120px
        borderRadius: "50%",
        border: "1px dashed rgba(201,168,76,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#C9A84C",
        fontSize: "16px",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      Process Flow
    </div>
  </div>
</div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
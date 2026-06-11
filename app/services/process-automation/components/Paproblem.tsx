"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const painPoints = [
  { number: "01", title: "Teams Repeat the Same Tasks Every Day", description: "Manual data entry, follow-ups, routing, and status updates consume hours every week across sales, support, and operations — work that AI process automation can handle consistently.", icon: "🔁", color: "#C9A84C", href: "/services/process-automation" },
  { number: "02", title: "Leads and Customer Requests Fall Through the Cracks", description: "When intake, routing, and follow-up depend on people remembering the next step, revenue and customer experience suffer. Automated lead routing and response workflows close that gap.", icon: "📉", color: "#C94C6A", href: "/case-study/lead-generation-tools" },
  { number: "03", title: "Business Data Gets Stuck in Separate Tools", description: "CRMs, forms, inboxes, spreadsheets, and internal systems rarely stay in sync. Connected workflow automation keeps data moving where teams need it.", icon: "🔀", color: "#4C8EC9", href: "/services/ai-integration" },
  { number: "04", title: "Basic Automation Breaks When Workflows Get Complex", description: "Simple triggers fail when decisions, exceptions, approvals, and multi-step logic matter. AI process automation handles routing, classification, and governance at scale.", icon: "⚠️", color: "#4CA88A", href: "/services/workflow-optimization" },
];

const ProblemSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="problem" aria-labelledby="problem-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", marginBottom: "56px", flexWrap: "wrap" as const }}>
            <div style={{ maxWidth: "600px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>The Problem</span>
              </div>
              <h2 id="problem-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px" }}>
                Manual Processes Slow Teams Down and Create Costly Handoffs
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0 }}>
                Most businesses do not need more tools. They need workflows that move information, decisions, and actions automatically — without losing control at sensitive steps.
              </p>
            </div>
            <a href="/contact" onMouseEnter={() => setCtaHovered(true)} onMouseLeave={() => setCtaHovered(false)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, color: "#C9A84C", border: `1px solid ${ctaHovered ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.3)"}`, background: ctaHovered ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.05)", borderRadius: "999px", padding: "11px 22px", textDecoration: "none", whiteSpace: "nowrap" as const }}>
              Talk to an Automation Expert →
            </a>
          </div>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} role="list">
            {painPoints.map((point) => {
              const isHov = hovered === point.number;
              return (
                <div key={point.number} role="listitem" onMouseEnter={() => setHovered(point.number)} onMouseLeave={() => setHovered(null)} style={{ background: isHov ? `${point.color}08` : "rgba(255,255,255,0.02)", border: `1px solid ${isHov ? point.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "28px 26px", transition: "all 0.25s" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${point.color}14`, border: `1px solid ${point.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{point.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "10px" }}>{point.title}</h3>
                      <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0 }}>{point.description}</p>
                      <a href={point.href} style={{ display: "inline-block", marginTop: "12px", fontSize: "12px", color: point.color, textDecoration: "none", fontWeight: 500 }}>Learn more →</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pa-grid-2" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ padding: "28px 32px", background: "rgba(255,255,255,0.02)", borderRight: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,230,0.35)", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: "16px" }}>Basic Automation</div>
              {["Simple if/then triggers", "Breaks with exceptions", "No AI decision logic", "Limited integration depth"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "rgba(201,76,106,0.6)" }}>✕</span>
                  <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.4)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "28px 32px", background: "rgba(201,168,76,0.04)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#C9A84C", fontWeight: 600, textTransform: "uppercase" as const, marginBottom: "16px" }}>AI Process Automation</div>
              {["Maps real business workflows", "Classifies, routes, and drafts with AI", "Connects CRMs, forms, and internal tools", "Supports human approvals where needed"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span style={{ color: "#C9A84C" }}>✓</span>
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

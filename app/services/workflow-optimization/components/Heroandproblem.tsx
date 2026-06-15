"use client";

import React from "react";
import { THEME } from "../shared";

const HeroSection = () => {
  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: THEME.colors.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="pa-grid-2">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ width: "30px", height: "1px", background: THEME.colors.primary }} />
            <span style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: THEME.colors.primary, fontWeight: 600 }}>ThePrimeCrafters</span>
          </div>
          <h1 className="pa-h1" style={{ fontFamily: THEME.fonts.serif, fontSize: "48px", color: THEME.colors.text, lineHeight: 1.1, marginBottom: "24px" }}>
            AI Workflow Optimization Services for Faster, Smarter Business Operations
          </h1>
          <h2 style={{ fontSize: "18px", color: THEME.colors.textMuted, lineHeight: 1.6, marginBottom: "32px", fontWeight: 400 }}>
            Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows. We help you map current processes and remove friction.
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/contact" style={{ padding: "16px 32px", background: THEME.colors.primary, color: "#000", textDecoration: "none", borderRadius: "4px", fontWeight: 700, fontSize: "14px" }}>
              Book a Free Strategy Call
            </a>
            <a href="/case-studies" style={{ padding: "16px 32px", border: `1px solid ${THEME.colors.border}`, color: THEME.colors.text, textDecoration: "none", borderRadius: "4px", fontWeight: 500, fontSize: "14px" }}>
              View Case Studies
            </a>
          </div>
          <div style={{ marginTop: "48px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Workflow Audit", "Process Mapping", "Automation Roadmap", "KPI Tracking"].map((badge) => (
              <span key={badge} style={{ padding: "6px 14px", background: "rgba(201, 168, 76, 0.1)", color: THEME.colors.primary, borderRadius: "100px", fontSize: "11px", fontWeight: 600, border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "100%", height: "400px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", border: `1px solid ${THEME.colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
             {/* Placeholder for Workflow Map Diagram */}
             <div style={{ textAlign: "center", color: THEME.colors.textMuted }}>
                <div style={{ fontSize: "40px", marginBottom: "10px" }}>⚙️</div>
                <p style={{ fontSize: "12px" }}>Workflow Optimization Map Visual</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Manual Handoffs Slow Everything Down", desc: "Teams lose time when leads, tasks, and updates move manually between people and tools.", icon: "⏳" },
    { title: "Teams Use Too Many Disconnected Tools", desc: "CRMs, spreadsheets, and inboxes that do not share context create friction.", icon: "🔌" },
    { title: "Bottlenecks Hide Inside Approvals", desc: "Stalled approvals and unclear ownership lead to delayed responses and missed follow-ups.", icon: "🛑" },
    { title: "Automation Fails Without Mapping", desc: "Effective automation needs clear process steps and rules before building.", icon: "❌" },
  ];

  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: "#08090f" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "16px" }}>
            Messy Workflows Keep Teams Busy Without Moving Work Forward
          </h2>
          <p style={{ color: THEME.colors.textMuted, maxWidth: "700px", margin: "0 auto", fontSize: "16px" }}>
            Manual processes and scattered tools create costly handoffs. Talk to a Workflow Optimization Expert to fix it.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="pa-grid-2">
          {problems.map((p, i) => (
            <div key={i} style={{ padding: "32px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "16px" }}>
              <div style={{ fontSize: "24px", marginBottom: "20px" }}>{p.icon}</div>
              <h3 style={{ fontSize: "18px", color: THEME.colors.text, marginBottom: "12px", fontWeight: 600 }}>{p.title}</h3>
              <p style={{ fontSize: "14px", color: THEME.colors.textMuted, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeroSection, ProblemSection };

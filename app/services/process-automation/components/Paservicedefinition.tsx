"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const checklist = [
  "Your team repeats the same operational tasks every day",
  "Leads, tickets, or requests need faster routing and follow-up",
  "Data lives across disconnected CRMs, forms, and internal tools",
  "Basic automation cannot handle exceptions or approvals",
  "You want measurable workflow improvements, not another isolated tool",
];

const scope = [
  { number: "01", label: "Workflow Discovery", desc: "Audit current processes and identify the highest-impact automation opportunities." },
  { number: "02", label: "Automation Opportunity Mapping", desc: "Prioritise bottlenecks by business value, feasibility, and speed to ROI." },
  { number: "03", label: "Workflow Architecture Design", desc: "Define triggers, logic, integrations, permissions, and approval paths." },
  { number: "04", label: "Build, Integrate, and Test", desc: "Develop production-ready automations and validate them against real scenarios." },
  { number: "05", label: "Launch With Monitoring", desc: "Roll out with controlled deployment and post-launch visibility." },
  { number: "06", label: "Optimize Based on Real Usage", desc: "Refine workflows using live operational data and team feedback." },
];

const ServiceDefinitionSection: React.FC = () => {
  const [defExpanded, setDefExpanded] = useState(true);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="process-automation-service" aria-labelledby="service-def-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Our Service</span>
          </div>
          <h2 id="service-def-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px", maxWidth: "700px" }}>
            Process Automation Built Around How Your Business Actually Works
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "52px", maxWidth: "640px" }}>
            The Prime Crafters delivers process automation services that fit your real workflows — not generic templates. We map how work moves today, design the automation architecture, connect your tools, and launch systems your team can trust.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "14px", overflow: "hidden" }}>
                <button onClick={() => setDefExpanded(!defExpanded)} aria-expanded={defExpanded} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0 }}>What Is AI Process Automation?</h3>
                  <span style={{ color: "#C9A84C", fontSize: "18px", transform: defExpanded ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.25s" }}>+</span>
                </button>
                {defExpanded && (
                  <div style={{ padding: "0 24px 24px" }}>
                    <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.6)", lineHeight: 1.8, margin: 0 }}>
                      AI process automation uses intelligent workflows to handle repetitive business tasks — receiving inputs, applying logic, updating systems, notifying teams, and routing work automatically. Unlike basic automation, it can classify, summarise, score, and draft within connected business processes.
                    </p>
                  </div>
                )}
              </div>

              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "18px" }}>Who Needs Process Automation Services?</h3>
                {checklist.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ color: "#C9A84C", flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.6)", lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
                <a href="/contact" style={{ display: "inline-block", marginTop: "16px", fontSize: "13px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>Talk to us about your workflow →</a>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "28px 24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "24px" }}>What ThePrimeCrafters Handles</h3>
              {scope.map((step) => (
                <div key={step.number} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "14px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: "rgba(201,168,76,0.5)", flexShrink: 0 }}>{step.number}</span>
                  <div>
                    <span style={{ fontSize: "13px", fontWeight: 500, color: "rgba(240,237,230,0.7)", display: "block", marginBottom: "4px" }}>{step.label}</span>
                    <span style={{ fontSize: "12px", color: "rgba(240,237,230,0.4)", lineHeight: 1.6 }}>{step.desc}</span>
                  </div>
                </div>
              ))}
              <a href="/about-us" style={{ display: "inline-block", marginTop: "16px", fontSize: "12px", color: "rgba(201,168,76,0.6)", textDecoration: "none" }}>About ThePrimeCrafters →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDefinitionSection;

"use client";

import React from "react";
import { THEME } from "../shared";

const OptimizationFramework = () => {
  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: THEME.colors.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "16px" }}>
            How Workflow Optimization Turns Daily Work Into a Clear Operating System
          </h2>
          <p style={{ color: THEME.colors.textMuted, maxWidth: "700px", margin: "0 auto", fontSize: "16px" }}>
            We design a framework where inputs, logic, AI support, and outputs function as one.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="pa-grid-2">
          {[
            { title: "Inputs", items: ["Leads", "Calls", "Forms", "Tickets"], icon: "📥" },
            { title: "Logic", items: ["Routing", "Approvals", "Rules", "Steps"], icon: "🧠" },
            { title: "AI Support", items: ["Summaries", "Drafts", "Scoring"], icon: "✨" },
            { title: "Outputs", items: ["CRM Updates", "Alerts", "Reports"], icon: "📤" },
          ].map((step, i) => (
            <div key={i} style={{ padding: "30px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "16px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{step.icon}</div>
              <h3 style={{ fontSize: "18px", color: THEME.colors.text, marginBottom: "16px", fontWeight: 700 }}>{step.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                {step.items.map((item, j) => (
                  <span key={j} style={{ fontSize: "11px", color: THEME.colors.textMuted, padding: "4px 10px", background: "rgba(255,255,255,0.05)", borderRadius: "4px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImplementationProcess = () => {
  const steps = [
    { num: "01", title: "Workflow Discovery", desc: "We map your current operations and find the bottlenecks." },
    { num: "02", title: "Opportunity Mapping", desc: "We prioritize the highest value workflows to fix first." },
    { num: "03", title: "Architecture Design", desc: "We design the logic, AI steps, and integration points." },
    { num: "04", title: "Build & Integration", desc: "We connect your tools and build the optimized system." },
    { num: "05", title: "Launch & Monitoring", desc: "We deploy and track performance in real-time." },
    { num: "06", title: "Continuous Optimization", desc: "We refine the system based on real usage data." },
  ];

  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: "#08090f" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "16px" }}>
            Our Implementation Process
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }} className="pa-grid-2">
          {steps.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              <span style={{ fontSize: "48px", fontWeight: 900, color: "rgba(201, 168, 76, 0.1)", position: "absolute", top: "-20px", left: "-10px" }}>{s.num}</span>
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: "18px", color: THEME.colors.text, marginBottom: "12px", fontWeight: 700 }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: THEME.colors.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OptimizationFramework, ImplementationProcess };

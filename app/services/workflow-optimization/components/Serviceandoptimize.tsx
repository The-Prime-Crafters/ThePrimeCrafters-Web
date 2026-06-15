"use client";

import React from "react";
import { THEME } from "../shared";

const ServiceOverview = () => {
  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: THEME.colors.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="pa-grid-2">
          <div>
            <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "24px" }}>
              Workflow Optimization Built Around How Your Team Actually Works
            </h2>
            <div style={{ padding: "24px", background: "rgba(201, 168, 76, 0.05)", borderLeft: `4px solid ${THEME.colors.primary}`, borderRadius: "4px", marginBottom: "32px" }}>
              <h3 style={{ fontSize: "16px", color: THEME.colors.primary, marginBottom: "8px", fontWeight: 700 }}>What Is AI Workflow Optimization?</h3>
              <p style={{ fontSize: "14px", color: THEME.colors.textMuted, lineHeight: 1.6, margin: 0 }}>
                Improving business processes with workflow mapping, automation planning, and AI support so teams move work faster with fewer manual steps.
              </p>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Repeated manual tasks",
                "Unclear ownership of work",
                "Slow approvals and handoffs",
                "Tool overload and friction",
                "Reporting gaps",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: THEME.colors.text }}>
                  <span style={{ color: THEME.colors.primary }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "40px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "16px" }}>
            <h3 style={{ fontSize: "20px", color: THEME.colors.text, marginBottom: "24px", fontWeight: 700 }}>What ThePrimeCrafters Handles</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { step: "01", title: "Workflow Audit", desc: "Mapping your current processes." },
                { step: "02", title: "Process Mapping", desc: "Identifying friction and handoffs." },
                { step: "03", title: "Bottleneck Analysis", desc: "Finding where work stalls." },
                { step: "04", title: "Automation Roadmap", desc: "Planning your AI-ready future." },
                { step: "05", title: "KPI Tracking", desc: "Measuring real-world performance." },
                { step: "06", title: "Post-Launch Improvement", desc: "Continuous optimization." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px" }}>
                  <span style={{ fontSize: "12px", color: THEME.colors.primary, fontWeight: 700 }}>{item.step}</span>
                  <div>
                    <h4 style={{ fontSize: "14px", color: THEME.colors.text, margin: "0 0 4px 0", fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ fontSize: "12px", color: THEME.colors.textMuted, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatWeOptimize = () => {
  const services = [
    { title: "Sales and Lead Handoff", desc: "Improve lead capture, qualification, and CRM updates.", icon: "🎯" },
    { title: "Customer Support Tickets", desc: "Map requests into clear routing and escalation.", icon: "🎧" },
    { title: "Operations and Admin", desc: "Improve task routing and internal requests.", icon: "⚙️" },
    { title: "Approval and Review", desc: "Clarify owners and escalation paths.", icon: "✅" },
    { title: "Reporting and Dashboards", desc: "Turn scattered data into useful summaries.", icon: "📊" },
    { title: "CRM and Data Sync", desc: "Improve how records move between tools.", icon: "🔄" },
  ];

  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: "#08090f" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "16px" }}>
            Business Workflows ThePrimeCrafters Can Optimize
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="pa-grid-2">
          {services.map((s, i) => (
            <div key={i} style={{ padding: "32px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "16px", transition: "all 0.3s" }}>
              <div style={{ fontSize: "24px", marginBottom: "20px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "18px", color: THEME.colors.text, marginBottom: "12px", fontWeight: 600 }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: THEME.colors.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServiceOverview, WhatWeOptimize };

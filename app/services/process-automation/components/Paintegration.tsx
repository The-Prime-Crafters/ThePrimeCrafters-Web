"use client";

import React from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const integrations = ["CRMs", "Websites", "Forms", "Databases", "Email", "Calendars", "Spreadsheets", "Internal Tools"];
const aiCapabilities = ["Classify", "Summarize", "Score", "Route", "Draft", "Notify", "Update", "Extract"];

const IntegrationSection: React.FC = () => {
  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="ai-integration-layer" aria-labelledby="integration-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>AI and Integration Layer</span>
          </div>
          <h2 id="integration-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px", maxWidth: "700px" }}>
            AI Process Automation Works Best When It Connects Your Tools
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "640px" }}>
            The full value of process automation appears when inputs, AI logic, integrations, and outputs function as one connected system. When automation is built in isolation from the existing stack, teams end up managing two parallel processes instead of one. The Prime Crafters designs automation architecture that sits inside the operation, not alongside it.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "14px" }}>Connect CRMs, Websites, Forms, Databases, Email, Calendars, and Spreadsheets</h3>
              <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "14px" }}>
                Every source of business data that feeds workflows is a potential integration point. The Prime Crafters connects the tools teams already use so data flows automatically between them without manual export, import, or copy and paste. The result is a live system where every record is current and every workflow has the information it needs to function correctly.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                {integrations.map((chip) => (
                  <span key={chip} style={{ fontSize: "12px", padding: "6px 12px", borderRadius: "999px", border: "1px solid rgba(76,142,201,0.3)", background: "rgba(76,142,201,0.08)", color: "#4C8EC9", fontWeight: 500 }}>{chip}</span>
                ))}
              </div>
              <a href="/services/ai-integration" style={{ display: "inline-block", marginTop: "16px", fontSize: "12px", color: "#4C8EC9", textDecoration: "none", fontWeight: 500 }}>Explore AI Integration Services →</a>
            </div>

            <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "14px" }}>Use AI to Classify, Summarize, Score, Route, and Draft</h3>
              <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "14px" }}>
                AI adds the decision making layer that basic automation cannot provide. When a form submission arrives, AI reads it, classifies the intent, scores the priority, routes it to the right owner, and drafts the first response. When a call ends, AI summarises the conversation, extracts the key actions, updates the CRM, and schedules the follow up. These are practical AI functions The Prime Crafters builds into production workflows today.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                {aiCapabilities.map((chip) => (
                  <span key={chip} style={{ fontSize: "12px", padding: "6px 12px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.08)", color: "#C9A84C", fontWeight: 500 }}>{chip}</span>
                ))}
              </div>
              <a href="/services/custom-ai-solutions" style={{ display: "inline-block", marginTop: "16px", fontSize: "12px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>Explore Custom AI Solutions →</a>
            </div>
          </div>

          <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "14px", padding: "24px 28px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "10px" }}>Keep Humans in Control for Sensitive Steps</h3>
            <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.6)", lineHeight: 1.75, margin: 0, maxWidth: "760px" }}>
              Good automation design is not about removing humans from every step. It is about putting humans in the right place. The Prime Crafters builds workflows where AI handles the volume, speed, and consistency of repetitive steps, and humans handle the decisions that require judgment, accountability, or oversight. This keeps automation practical, auditable, and safe for real business operations without creating risk at sensitive points.
            </p>
            <a href="/contact" style={{ display: "inline-block", marginTop: "14px", fontSize: "12px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>Discuss approval workflows →</a>
          </div>

          <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }} className="pa-grid-2">
            {["Input", "AI Logic", "Integrations", "Output"].map((step, i) => (
              <div key={step} style={{ textAlign: "center" as const, padding: "18px 12px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: "10px", color: "rgba(201,168,76,0.6)", marginBottom: "6px" }}>Step {i + 1}</div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#f5f1e8" }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationSection;
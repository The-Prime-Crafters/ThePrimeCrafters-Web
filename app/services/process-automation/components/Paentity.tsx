"use client";

import React from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const serviceEntities = ["Process Automation", "Workflow Optimization", "AI Integrations", "Custom AI Systems", "CRM Automation", "Lead Generation Automation", "Booking Workflow Automation"];
const teamEntities = ["Sales Workflow Automation", "Operations Automation", "Customer Support Automation", "Lead Generation Automation", "Admin Workflow Automation", "Healthcare Admin Automation", "Service Business Automation"];

const EntitySection: React.FC = () => {
  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="entity-signal" aria-labelledby="entity-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "72px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>About ThePrimeCrafters</span>
          </div>

          <h2 id="entity-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.2, marginBottom: "20px", maxWidth: "760px" }}>
            ThePrimeCrafters Provides AI Process Automation Services for Business Operations
          </h2>

          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.55)", lineHeight: 1.85, marginBottom: "32px", maxWidth: "760px" }}>
            The Prime Crafters is a process automation agency that designs and deploys AI workflow automation systems for sales teams, customer support teams, operations teams, marketing and lead generation teams, healthcare admin environments, and service businesses. Work covers workflow discovery, automation architecture, system integrations, build, testing, launch, monitoring, and optimisation. Every system is built around the specific workflows of the client operation, connected to existing tools, and measured against real performance KPIs after deployment.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 600, marginBottom: "16px" }}>
                Process Automation, Workflow Optimization, AI Integrations, and Custom AI Systems
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "7px" }}>
                {serviceEntities.map((e) => (
                  <a key={e} href="/services" style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.07)", color: "#C9A84C", fontWeight: 500, textDecoration: "none" }}>{e}</a>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#4C8EC9", fontWeight: 600, marginBottom: "16px" }}>
                Built for Sales, Operations, Support, Lead Generation, Admin, and Customer Workflows
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "7px" }}>
                {teamEntities.map((e) => (
                  <a key={e} href="/services/workflow-optimization" style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "999px", border: "1px solid rgba(76,142,201,0.25)", background: "rgba(76,142,201,0.07)", color: "#4C8EC9", fontWeight: 500, textDecoration: "none" }}>{e}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EntitySection;
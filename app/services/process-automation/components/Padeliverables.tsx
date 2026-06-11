"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const deliverables = [
  { icon: "🎯", title: "Lead Intake and Lead Routing Automation", description: "Capture inbound leads, enrich data, score intent, and route prospects to the right owner or CRM stage automatically.", color: "#C9A84C", href: "/case-study/lead-generation-tools" },
  { icon: "📊", title: "CRM Updates and Data Sync", description: "Keep CRM records, pipeline stages, notes, and contact data updated without manual entry across connected systems.", color: "#4C8EC9", href: "/services/ai-integration" },
  { icon: "📅", title: "Appointment Booking and Follow-Up Workflows", description: "Automate booking requests, confirmations, reminders, and post-appointment follow-up sequences.", color: "#4CA88A", href: "/case-study/rv-park-voice-agent" },
  { icon: "💬", title: "Customer Support and Ticket Routing", description: "Classify support requests, draft responses, route tickets, and notify teams based on urgency and topic.", color: "#7C6AC4", href: "/services/custom-ai-solutions" },
  { icon: "📈", title: "Sales Follow-Up and Pipeline Workflows", description: "Automate follow-ups, call summaries, pipeline updates, and handoffs between AI and human sales reps.", color: "#C94C6A", href: "/case-study/spectrum-voice-agent" },
  { icon: "📋", title: "Reporting, Alerts, and Performance Summaries", description: "Generate scheduled reports, operational alerts, and workflow performance summaries for teams and leadership.", color: "#C97A4C", href: "/services" },
  { icon: "📄", title: "Document and Admin Workflows", description: "Automate document routing, admin approvals, internal requests, and repetitive back-office operations.", color: "#C9A84C", href: "/services/process-automation" },
  { icon: "✅", title: "Human-in-the-Loop Approval Workflows", description: "Keep sensitive decisions under human control while automating everything before and after the approval step.", color: "#4CA88A", href: "/contact" },
];

const DeliverablesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="what-we-automate" aria-labelledby="deliverables-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>What We Automate</span>
          </div>
          <h2 id="deliverables-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "700px" }}>
            Business Processes ThePrimeCrafters Can Automate
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "560px" }}>
            From lead intake to reporting and approvals, we automate the workflows that slow teams down — with systems connected to the tools you already use.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} role="list">
            {deliverables.map((item) => {
              const isHov = hovered === item.title;
              return (
                <a key={item.title} href={item.href} role="listitem" onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", flexDirection: "column", gap: "12px", background: isHov ? `${item.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? item.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "22px" }}>{item.icon}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliverablesSection;

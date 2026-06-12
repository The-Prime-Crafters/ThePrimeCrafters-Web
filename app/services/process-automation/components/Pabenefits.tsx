"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const benefits = [
  { icon: "⏱", title: "Reduce Manual Work and Data Entry", description: "Every hour a team member spends copying data between tools, manually updating records, and routing requests is an hour not spent on customers, strategy, or high value work. Process automation removes these steps permanently. The work gets done faster, more accurately, and without tying up a team member to make it happen.", color: "#C9A84C" },
  { icon: "⚡", title: "Respond to Leads and Customers Faster", description: "Speed is a competitive advantage in sales and support. The business that responds to a lead in two minutes will outperform the one that responds in two hours. Automated workflows route requests, trigger follow ups, and update records the moment an action occurs, so no lead waits for a business day to start before hearing back.", color: "#4C8EC9" },
  { icon: "🔗", title: "Keep Business Systems Updated", description: "Stale CRM data, outdated records, and missing information make every downstream workflow less effective. Process automation keeps systems in sync by automatically writing to the CRM, database, and internal tools whenever a relevant action takes place. Every system has the current information it needs without anyone manually maintaining it.", color: "#4CA88A", href: "/services/ai-integration" },
  { icon: "✓", title: "Reduce Human Error in Repetitive Steps", description: "Manual processes are consistent right up until the moment they are not. Someone forgets a step, misroutes a ticket, enters the wrong data, or skips a follow up. Automated workflows execute the same logic the same way every single time. No skipped steps, no misrouted requests, no data entered incorrectly because someone was in a rush.", color: "#7C6AC4" },
  { icon: "📊", title: "Improve Visibility Into Workflows", description: "When work moves manually between people and systems, leadership has limited visibility into what is happening, how long things take, and where delays are building up. Automated workflows generate data as they run. Reporting, alerts, and performance summaries give operations and leadership teams a real time picture of workflow health without anyone compiling a report manually.", color: "#C94C6A" },
  { icon: "📈", title: "Scale Operations Without Adding More Manual Work", description: "Manual operations scale linearly: more volume means more staff. Automated operations scale differently. The Prime Crafters builds systems that handle significantly more leads, tickets, bookings, and data requests than a manual team could manage, without requiring a proportional increase in headcount or overhead. The business grows. The manual work does not.", color: "#C97A4C", href: "/contact" },
];

const BenefitsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="benefits" aria-labelledby="benefits-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Why Invest</span>
          </div>
          <h2 id="benefits-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            Why Businesses Invest in AI Process Automation
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            Process automation is not only about saving time. It improves response speed, data accuracy, workflow visibility, and operational capacity across the processes that drive revenue and day to day performance.
          </p>

          <div className="pa-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} role="list">
            {benefits.map((item) => {
              const isHov = hovered === item.title;
              const Card = item.href ? "a" : "div";
              return (
                <Card key={item.title} href={item.href} role="listitem" onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", flexDirection: "column", gap: "12px", background: isHov ? `${item.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? item.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <span style={{ fontSize: "22px" }}>{item.icon}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                  {item.href && (
                    <span style={{ fontSize: "12px", color: item.color, fontWeight: 500, marginTop: "auto" }}>Learn More →</span>
                  )}
                </Card>
              );
            })}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a href="/case-studies" style={{ fontSize: "13px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>See Results From Live Projects →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
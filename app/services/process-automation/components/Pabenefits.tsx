"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const benefits = [
  { icon: "⏱", title: "Reduce Manual Work and Data Entry", description: "Automate repetitive steps so teams spend less time copying information and more time on high-value work.", color: "#C9A84C" },
  { icon: "⚡", title: "Respond to Leads and Customers Faster", description: "Route requests, trigger follow-ups, and update systems instantly instead of waiting on manual handoffs.", color: "#4C8EC9" },
  { icon: "🔗", title: "Keep Business Systems Updated", description: "Sync CRMs, forms, inboxes, and internal tools so records stay accurate across your stack.", color: "#4CA88A", href: "/services/ai-integration" },
  { icon: "✓", title: "Reduce Human Error in Repetitive Steps", description: "Standardise workflow logic so the same task is handled consistently every time.", color: "#7C6AC4" },
  { icon: "📊", title: "Improve Visibility Into Workflows", description: "Track process performance, bottlenecks, and outcomes with reporting and alerts built into the automation.", color: "#C94C6A" },
  { icon: "📈", title: "Scale Operations Without Adding More Manual Work", description: "Handle more volume without proportionally increasing admin overhead or operational drag.", color: "#C97A4C", href: "/contact" },
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
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Benefits</span>
          </div>
          <h2 id="benefits-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            Why Businesses Invest in AI Process Automation
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            Process automation is not just about saving time. It improves speed, accuracy, visibility, and scalability across the workflows that drive revenue and operations.
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
                </Card>
              );
            })}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a href="/case-studies" style={{ fontSize: "13px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>See automation results in our case studies →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;

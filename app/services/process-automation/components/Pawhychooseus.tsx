"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const reasons = [
  { icon: "🗺", title: "We Map the Process Before Building the Automation", description: "Every project starts with workflow discovery and opportunity mapping — not a generic automation template.", color: "#C9A84C", href: "/about-us" },
  { icon: "🔗", title: "We Build Around Existing Tools", description: "Automations connect to your CRM, website, forms, email, calendars, and internal systems instead of replacing them.", color: "#4C8EC9", href: "/services/ai-integration" },
  { icon: "📊", title: "We Keep Automation Practical and Measurable", description: "Workflows are designed with clear KPIs so you can see whether automation is improving speed, accuracy, and outcomes.", color: "#4CA88A", href: "/case-studies" },
  { icon: "🔄", title: "We Support Strategy, Build, Launch, and Optimization", description: "From discovery through post-launch refinement, The Prime Crafters stays involved across the full automation lifecycle.", color: "#C97A4C", href: "/contact" },
];

const WhyChooseUsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="why-tpc" aria-labelledby="why-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Why Choose Us</span>
          </div>
          <h2 id="why-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "40px", maxWidth: "700px" }}>
            Why Choose ThePrimeCrafters for AI Process Automation?
          </h2>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} role="list">
            {reasons.map((item) => {
              const isHov = hovered === item.title;
              return (
                <a key={item.title} href={item.href} role="listitem" onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", gap: "16px", background: isHov ? `${item.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? item.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", marginBottom: "8px", lineHeight: 1.3 }}>{item.title}</h3>
                    <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;

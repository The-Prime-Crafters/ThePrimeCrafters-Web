"use client";

import React, { useState } from "react";

interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
  count: number;
  accentColor: string;
  linkedStudies: { title: string; href: string }[];
}

const categories: Category[] = [
  {
    id: "voice-ai",
    label: "Voice AI",
    icon: "🎙️",
    description: "AI voice agents that handle inbound and outbound calls 24/7 — from local bookings to enterprise sales at scale.",
    count: 2,
    accentColor: "#4C8EC9",
    linkedStudies: [
      { title: "RV Park Voice Agent", href: "https://www.theprimecrafters.com/case-study/rv-park-voice-agent" },
      { title: "Spectrum Voice Agent", href: "https://www.theprimecrafters.com/case-study/spectrum-voice-agent" },
    ],
  },
  {
    id: "healthcare-ai",
    label: "Healthcare AI",
    icon: "⚕️",
    description: "HIPAA-compliant AI platforms for clinical operations — patient intake, matching, and scheduling workflows.",
    count: 1,
    accentColor: "#4CA88A",
    linkedStudies: [
      { title: "lmn8 Ketamine Therapy", href: "https://www.theprimecrafters.com/case-study/lmn8-ketamine-therapy" },
    ],
  },
  {
    id: "sales-ai",
    label: "Sales AI",
    icon: "📈",
    description: "Enterprise AI sales systems that convert at scale — automated outreach, follow-up, and CRM integration.",
    count: 1,
    accentColor: "#C94C6A",
    linkedStudies: [
      { title: "Spectrum AI Voice Agent", href: "https://www.theprimecrafters.com/case-study/spectrum-voice-agent" },
    ],
  },
  {
    id: "lead-generation",
    label: "Lead Generation",
    icon: "🎯",
    description: "AI-powered tools that generate and qualify leads at volume, feeding directly into sales pipelines.",
    count: 1,
    accentColor: "#C9A84C",
    linkedStudies: [
      { title: "AI Lead Generation Tools", href: "https://www.theprimecrafters.com/case-study/lead-generation-tools" },
    ],
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    icon: "📱",
    description: "Full-featured mobile applications with community, content, and engagement features built for scale.",
    count: 1,
    accentColor: "#C97A4C",
    linkedStudies: [
      { title: "Faithful Companion App", href: "https://www.theprimecrafters.com/case-study/faithful-companion" },
    ],
  },
  {
    id: "domain-automation",
    label: "Domain Automation",
    icon: "🌐",
    description: "AI platforms for domain investment workflows — automated email agents, deal flow, and revenue operations.",
    count: 1,
    accentColor: "#7C6AC4",
    linkedStudies: [
      { title: "3vltn Domain AI Platform", href: "https://www.theprimecrafters.com/case-study/3vltn" },
    ],
  },
];

const CategoryFilterSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#0c0d15", padding: "96px 64px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}
        aria-labelledby="filter-category-heading"
        id="browse-by-type"
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Browse By Type</span>
          </div>

          {/* H2 */}
          <h2 id="filter-category-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "40px", fontWeight: 700, color: "#f5f1e8", marginBottom: "10px", lineHeight: 1.15 }}>
            Browse Case Studies by Automation Type
          </h2>

          {/* H3 */}
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.4)", marginBottom: "44px", fontStyle: "italic", fontWeight: 400 }}>
            Voice AI · Healthcare AI · Sales AI · Lead Generation · Mobile Apps · Domain Automation
          </p>

          {/* Filter buttons */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "10px", marginBottom: "40px" }} role="group" aria-label="Filter by automation category">
            {categories.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    fontSize: "14px", padding: "10px 20px", borderRadius: "999px",
                    border: `1px solid ${isActive ? cat.accentColor : "rgba(255,255,255,0.10)"}`,
                    background: isActive ? `${cat.accentColor}18` : "rgba(255,255,255,0.03)",
                    color: isActive ? cat.accentColor : "rgba(240,237,230,0.6)",
                    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isActive ? 600 : 400, transition: "all 0.2s",
                  }}
                >
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.label}
                  <span style={{
                    fontSize: "11px", fontWeight: 600, padding: "2px 7px", borderRadius: "999px",
                    background: isActive ? `${cat.accentColor}30` : "rgba(255,255,255,0.07)",
                    color: isActive ? cat.accentColor : "rgba(240,237,230,0.4)",
                  }}>{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel — full width, two column */}
          <div
            key={active.id}
            role="region"
            aria-label={`${active.label} details`}
            style={{
              background: `${active.accentColor}08`,
              border: `1px solid ${active.accentColor}28`,
              borderRadius: "20px",
              padding: "48px 52px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
              minHeight: "280px",
            }}
          >
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "14px",
                  background: `${active.accentColor}18`, border: `1px solid ${active.accentColor}40`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px",
                }} aria-hidden="true">{active.icon}</div>
                <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: active.accentColor, fontWeight: 600 }}>{active.label}</span>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.2 }}>
                {active.label} Projects
              </h3>

              <p style={{ fontSize: "16px", color: "rgba(240,237,230,0.6)", lineHeight: 1.75 }}>
                {active.description}
              </p>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "14px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(240,237,230,0.3)", fontWeight: 500, marginBottom: "4px" }}>
                Related Case Studies
              </p>
              {active.linkedStudies.map((study) => (
                <a
                  key={study.href}
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "18px 22px", borderRadius: "12px",
                    background: `${active.accentColor}0a`, border: `1px solid ${active.accentColor}28`,
                    textDecoration: "none", transition: "background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${active.accentColor}18`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${active.accentColor}50`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${active.accentColor}0a`; (e.currentTarget as HTMLAnchorElement).style.borderColor = `${active.accentColor}28`; }}
                >
                  <span style={{ fontSize: "15px", color: "#f5f1e8", fontWeight: 500 }}>{study.title}</span>
                  <span style={{ fontSize: "18px", color: active.accentColor }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryFilterSection;
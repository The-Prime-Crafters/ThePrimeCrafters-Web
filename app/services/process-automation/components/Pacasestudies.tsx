"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const caseStudies = [
  { title: "AI Lead Generation Tools", category: "Lead Generation Automation", result: "50K+ qualified leads per month", href: "/case-study/lead-generation-tools", color: "#C9A84C" },
  { title: "Spectrum AI Voice Agent", category: "Sales Workflow Automation", result: "10K+ AI-handled calls per month", href: "/case-study/spectrum-voice-agent", color: "#C94C6A" },
  { title: "RV Park AI Voice Agent", category: "Booking Automation", result: "100% call answer rate", href: "/case-study/rv-park-voice-agent", color: "#4C8EC9" },
  { title: "lmn8 Ketamine Therapy AI Platform", category: "Healthcare Admin Workflows", result: "65% faster patient intake", href: "/case-study/lmn8-ketamine-therapy", color: "#4CA88A" },
  { title: "3vltn Domain AI Platform", category: "Custom Workflow Platform", result: "+250% deal closure rate", href: "/case-study/3vltn", color: "#7C6AC4" },
];

const CaseStudiesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="case-studies-proof" aria-labelledby="case-studies-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Proof</span>
          </div>
          <h2 id="case-studies-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            Automation and AI Systems We&apos;ve Built
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            Real projects with measurable outcomes across lead generation, sales workflows, booking automation, healthcare admin, and custom platform automation.
          </p>

          <div
  className="pa-grid-3"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gap: "22px",
    alignItems: "stretch",
  }}
  role="list"
>
            {caseStudies.map((study) => {
              const isHov = hovered === study.title;
              return (
                <a key={study.title} href={study.href} role="listitem" onMouseEnter={() => setHovered(study.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", flexDirection: "column", gap: "10px", background: isHov ? `${study.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? study.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <span style={{ fontSize: "11px", color: study.color, fontWeight: 600, letterSpacing: "0.04em" }}>{study.category}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.3 }}>{study.title}</h3>
                  <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 500, margin: 0 }}>{study.result}</p>
                  <span style={{ fontSize: "12px", color: study.color, marginTop: "auto" }}>View case study →</span>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a href="/case-studies" style={{ fontSize: "13px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>Explore all case studies →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesSection;

"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const caseStudies = [
  {
    title: "AI Lead Generation Tools",
    category: "Lead Generation Automation",
    description:
      "A multi channel AI lead generation system that sources, enriches, scores, and delivers qualified leads directly into CRM pipelines without manual prospecting.",
    metrics: [
      { label: "Qualified Leads Per Month", value: "50,000+" },
      { label: "Manual Prospecting Time Saved", value: "90%" },
      { label: "Qualified Lead Rate Increase", value: "+120%" },
    ],
    href: "/case-study/lead-generation-tools",
    color: "#C9A84C",
  },
  {
    title: "Spectrum AI Voice Agent",
    category: "Sales Workflow Automation",
    description:
      "An enterprise grade AI voice agent that handles outbound and inbound sales calls at scale.",
    metrics: [
      { label: "AI Handled Calls Per Month", value: "10,000+" },
      { label: "Conversion Rate Increase", value: "+45%" },
      { label: "Operational Cost Reduction", value: "70%" },
    ],
    href: "/case-study/spectrum-voice-agent",
    color: "#C94C6A",
  },
  {
    title: "RV Park AI Voice Agent",
    category: "Booking and Service Automation",
    description:
      "A 24 hour AI voice agent deployed for a local service business that answers every inbound call.",
    metrics: [
      { label: "Inbound Call Answer Rate", value: "100%" },
      { label: "Booking Conversion Increase", value: "+85%" },
      { label: "Staff Hours Saved Per Week", value: "30 hrs" },
    ],
    href: "/case-study/rv-park-voice-agent",
    color: "#4C8EC9",
  },
  {
    title: "lmn8 Ketamine Therapy AI Platform",
    category: "Healthcare Admin Workflows",
    description:
      "A HIPAA compliant AI platform that automates the patient journey from enquiry through booking.",
    metrics: [
      { label: "Intake Time Reduction", value: "65%" },
      { label: "AI Matching Accuracy", value: "94%" },
      { label: "Clinic Capacity Increase", value: "+45%" },
    ],
    href: "/case-study/lmn8-ketamine-therapy",
    color: "#4CA88A",
  },
  {
    title: "3vltn Domain AI Platform",
    category: "Custom Workflow Automation",
    description:
      "A fully automated business operations platform for a domain investment company.",
    metrics: [
      { label: "Deal Closure Rate Increase", value: "+250%" },
      { label: "Manual Hours Saved Per Week", value: "40 hrs" },
      { label: "Revenue Growth", value: "+180%" },
    ],
    href: "/case-study/3vltn",
    color: "#7C6AC4",
  },
];

const CaseStudiesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const renderCard = (study: (typeof caseStudies)[number], gridColumn?: string) => {
    const isHov = hovered === study.title;
    return (
      <a
        key={study.title}
        href={study.href}
        role="listitem"
        onMouseEnter={() => setHovered(study.title)}
        onMouseLeave={() => setHovered(null)}
        className="pa-case-card"
        style={{
          gridColumn,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          background: isHov ? `${study.color}08` : "rgba(255,255,255,0.025)",
          border: `1px solid ${isHov ? study.color + "35" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "14px",
          padding: "28px",
          textDecoration: "none",
          color: "inherit",
          transition: "all 0.25s",
          minHeight: "360px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: "11px", color: study.color, fontWeight: 600, letterSpacing: "0.04em" }}>{study.category}</span>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.3 }}>{study.title}</h3>
        </div>
        
        <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0, flexGrow: 1 }}>{study.description}</p>
        
        {/* Metrics Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {study.metrics.map((metric, idx) => (
            <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "rgba(240,237,230,0.4)", fontWeight: 500 }}>{metric.label}</span>
              <span style={{ fontSize: "12px", color: study.color, fontWeight: 700 }}>{metric.value}</span>
            </div>
          ))}
        </div>

        <span style={{ fontSize: "12px", color: study.color, fontWeight: 500 }}>View Case Study →</span>
      </a>
    );
  };

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <style>{`
        @media (max-width: 900px) {
          .pa-case-grid { grid-template-columns: 1fr !important; }
          .pa-case-card { grid-column: auto !important; }
        }
      `}</style>
      <section id="case-studies-proof" aria-labelledby="case-studies-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Proof of Work</span>
          </div>
          <h2 id="case-studies-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            Automation and AI Systems We&apos;ve Built
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            Real production systems across lead generation, sales workflows, booking automation, healthcare admin, and custom platform builds. Every result comes from post deployment performance tracking on a live system.
          </p>

          <div
            className="pa-case-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gridAutoRows: "1fr",
              gap: "22px",
            }}
            role="list"
          >
            {renderCard(caseStudies[0], "1 / span 2")}
            {renderCard(caseStudies[1], "3 / span 2")}
            {renderCard(caseStudies[2], "5 / span 2")}
            {renderCard(caseStudies[3], "2 / span 2")}
            {renderCard(caseStudies[4], "4 / span 2")}
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

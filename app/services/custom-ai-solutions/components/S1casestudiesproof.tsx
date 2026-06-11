"use client"
import React, { useState } from "react";

const caseStudies = [
  {
    id: "spectrum",
    title: "Spectrum AI Voice Agent",
    category: "Enterprise Sales AI",
    icon: "📞",
    color: "#C94C6A",
    href: "/case-study/spectrum-voice-agent",
    description: "An enterprise-grade AI sales voice agent built to handle outbound and inbound calls at scale. The system qualifies leads through natural conversation, handles common objections, logs every interaction to the CRM, and routes high-intent prospects to human sales reps — operating at a volume no human team could match.",
  },
  {
    id: "lead-gen",
    title: "AI Lead Generation Tools",
    category: "Marketing Automation",
    icon: "🎯",
    color: "#C9A84C",
    href: "/case-study/lead-generation-tools",
    description: "A multi-channel AI lead generation system that identifies target prospects, enriches contact and company data, scores leads against the client's ideal customer profile, and pushes qualified, actionable leads directly into Salesforce and HubSpot — eliminating the manual prospecting process entirely.",
  },
  {
    id: "lmn8",
    title: "lmn8 Ketamine Therapy AI Platform",
    category: "Healthcare AI",
    icon: "⚕️",
    color: "#4CA88A",
    href: "/case-study/lmn8-ketamine-therapy",
    description: "A HIPAA-compliant AI platform built for ketamine therapy clinics that automates the full patient journey from initial enquiry to confirmed appointment — matching patients to the right clinic based on treatment needs, automating intake documentation, and scheduling without manual coordination.",
  },
  {
    id: "rv-park",
    title: "RV Park AI Voice Agent",
    category: "Local Service Business",
    icon: "🚐",
    color: "#4C8EC9",
    href: "/case-study/rv-park-voice-agent",
    description: "A 24/7 AI voice agent deployed for a local RV park that answers every inbound call, provides accurate availability and pricing information, handles bookings end-to-end, and manages FAQs — without any human involvement. Eliminated missed calls entirely and recovered lost bookings from after-hours enquiries.",
  },
  {
    id: "3vltn",
    title: "3vltn Domain AI Platform",
    category: "Custom AI Platform",
    icon: "🌐",
    color: "#7C6AC4",
    href: "/case-study/3vltn",
    description: "A fully automated AI platform for a domain investment business that managed outbound email campaigns, qualified inbound domain enquiries, supported deal negotiations with pricing logic, and tracked revenue operations end-to-end — replacing a manual process that could not scale.",
  },
  {
    id: "faithful",
    title: "Faithful Companion App",
    category: "Mobile Application",
    icon: "✝️",
    color: "#C97A4C",
    href: "/case-study/faithful-companion",
    description: "A full-featured faith-based mobile community application built with daily content feeds, community prayer request workflows, push notification engagement mechanics, and moderation tools — engineered from the ground up to support a large and rapidly growing user base.",
  },
];

const CaseStudiesProofSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section id="case-study-proof" aria-labelledby="proof-heading" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.03) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Proof of Work</span>
          </div>
          <h2 id="proof-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "580px" }}>
            Custom AI Solutions We've Built
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "600px" }}>
            Six production AI systems delivered across six different industries. Every metric below comes from post-deployment performance tracking — not projections or estimates.
          </p>

          {/* 3×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} role="list" aria-label="Case study proof points">
            {caseStudies.map((cs) => {
              const isHov = hovered === cs.id;
              return (
                <a
                  key={cs.id}
                  href={cs.href}
                  role="listitem"
                  onMouseEnter={() => setHovered(cs.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ display: "flex", flexDirection: "column", gap: "0", background: isHov ? `${cs.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? cs.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px 22px", textDecoration: "none", color: "inherit", transition: "all 0.25s", transform: isHov ? "translateY(-3px)" : "translateY(0)" }}
                  aria-label={`${cs.title} case study`}
                >
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: `${cs.color}14`, border: `1px solid ${cs.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                      {cs.icon}
                    </div>
                    <span style={{ fontSize: "10px", padding: "4px 10px", borderRadius: "999px", background: `${cs.color}14`, border: `1px solid ${cs.color}30`, color: cs.color, fontWeight: 500, letterSpacing: "0.04em" }}>
                      {cs.category}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.85)", marginBottom: "10px", lineHeight: 1.25, transition: "color 0.2s" }}>
                    {cs.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: isHov ? "rgba(240,237,230,0.55)" : "rgba(240,237,230,0.38)", lineHeight: 1.7, marginBottom: "18px", transition: "color 0.2s", flexGrow: 1 }}>
                    {cs.description}
                  </p>

                  {/* Footer */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: "12px", color: cs.color, fontWeight: 500 }}>View Case Study</span>
                    <span style={{ fontSize: "13px", color: cs.color, transform: isHov ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s", display: "inline-block" }}>→</span>
                  </div>
                </a>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em" }}>
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesProofSection;
"use client"
import React, { useState } from "react";

const caseStudies = [
  {
    id: "spectrum",
    title: "Spectrum AI Voice Agent",
    category: "Voice AI",
    icon: "📞",
    color: "#C94C6A",
    href: "/case-study/spectrum-voice-agent",
    description: "Enterprise-grade AI sales voice agent handling outbound and inbound calls at scale — qualifying leads, handling objections, and routing hot prospects to human agents.",
    metrics: [
      { value: "10K+", label: "AI-Handled Calls Per Month" },
      { value: "+45%", label: "Conversion Rate Increase" },
      { value: "70%", label: "Operational Cost Reduction" },
    ],
  },
  {
    id: "lead-gen",
    title: "AI Lead Generation Tools",
    category: "Lead Generation",
    icon: "🎯",
    color: "#C9A84C",
    href: "/case-study/lead-generation-tools",
    description: "Multi-channel AI lead generation system that sourced, scored, and pushed 50,000+ qualified leads per month directly into Salesforce and HubSpot.",
    metrics: [
      { value: "50K+", label: "Qualified Leads Per Month" },
      { value: "90%", label: "Manual Prospecting Time Saved" },
      { value: "+120%", label: "Qualified Lead Rate Increase" },
    ],
  },
  {
    id: "lmn8",
    title: "lmn8 Ketamine Therapy AI Platform",
    category: "Healthcare AI",
    icon: "⚕️",
    color: "#4CA88A",
    href: "/case-study/lmn8-ketamine-therapy",
    description: "HIPAA-compliant AI platform automating patient intake, AI-powered treatment matching, and appointment scheduling for ketamine therapy clinics.",
    metrics: [
      { value: "94%", label: "AI Matching Accuracy" },
      { value: "65%", label: "Faster Patient Intake" },
      { value: "+45%", label: "Clinic Capacity Increase" },
    ],
  },
  {
    id: "rv-park",
    title: "RV Park AI Voice Agent",
    category: "Voice AI",
    icon: "🚐",
    color: "#4C8EC9",
    href: "/case-study/rv-park-voice-agent",
    description: "24/7 AI voice agent for a local RV park business handling every inbound call, answering questions, and completing bookings without any human involvement.",
    metrics: [
      { value: "100%", label: "Call Answer Rate" },
      { value: "+85%", label: "Booking Conversion Increase" },
      { value: "30 hrs", label: "Staff Hours Saved Per Week" },
    ],
  },
  {
    id: "3vltn",
    title: "3vltn Domain AI Platform",
    category: "Custom Platform",
    icon: "🌐",
    color: "#7C6AC4",
    href: "/case-study/3vltn",
    description: "Fully automated AI platform handling outbound email campaigns, inbound lead qualification, deal negotiations, and revenue tracking end-to-end.",
    metrics: [
      { value: "+250%", label: "Deal Closure Rate" },
      { value: "40 hrs", label: "Manual Hours Saved Per Week" },
      { value: "+180%", label: "Revenue Growth" },
    ],
  },
  {
    id: "faithful",
    title: "Faithful Companion App",
    category: "Mobile App",
    icon: "✝️",
    color: "#C97A4C",
    href: "/case-study/faithful-companion",
    description: "Full-featured faith-based mobile application with daily devotionals, prayer requests, and community engagement mechanics engineered for scale from day one.",
    metrics: [
      { value: "50K+", label: "Daily Active Users" },
      { value: "200K+", label: "Community Prayer Requests" },
      { value: "4.8/5", label: "App Store Rating" },
    ],
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
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "560px" }}>
            Six production AI systems across six distinct industries. Every metric below is sourced from post-deployment performance tracking.
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

                  {/* Metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
                    {cs.metrics.map((m) => (
                      <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "10px 6px", textAlign: "center" as const }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: cs.color, lineHeight: 1, marginBottom: "4px" }}>{m.value}</div>
                        <div style={{ fontSize: "9px", color: "rgba(240,237,230,0.4)", lineHeight: 1.3, letterSpacing: "0.01em" }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

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
"use client";

import React from "react";

interface ProofBadge {
  value: string;
  label: string;
  source: string;
}

interface HeroSectionProps {
  onViewCaseStudies?: () => void;
  onBookConsultation?: () => void;
}

const proofBadges: ProofBadge[] = [
  { value: "+250%", label: "Deal Closure Rate", source: "3vltn Domain AI Platform" },
  { value: "10K+", label: "Calls Per Month", source: "Spectrum AI Voice Agent" },
  { value: "50K+", label: "Leads Per Month", source: "AI Lead Generation Tools" },
  { value: "94%", label: "AI Matching Accuracy", source: "lmn8 Ketamine Therapy" },
];

const categoryPills: { label: string; anchor: string }[] = [
  { label: "Voice AI", anchor: "#browse-by-type" },
  { label: "Workflow Automation", anchor: "#browse-by-type" },
  { label: "Lead Generation", anchor: "#browse-by-type" },
  { label: "Healthcare AI", anchor: "#browse-by-type" },
  { label: "Mobile Apps", anchor: "#browse-by-type" },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  onViewCaseStudies,
  onBookConsultation,
}) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
        }}
        aria-label="Hero Section"
      >
        {/* Stars */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(1.5px 1.5px at 8% 12%, rgba(255,255,255,0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 20% 5%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 38% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 55% 8%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 70% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 85% 30%, rgba(255,255,255,0.35) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 92% 10%, rgba(255,255,255,0.45) 0%, transparent 100%),
              radial-gradient(1px 1px at 15% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 75% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 45% 75%, rgba(255,255,255,0.35) 0%, transparent 100%),
              radial-gradient(1.5px 1.5px at 90% 70%, rgba(255,255,255,0.5) 0%, transparent 100%),
              radial-gradient(1px 1px at 30% 88%, rgba(255,255,255,0.3) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 92%, rgba(255,255,255,0.4) 0%, transparent 100%),
              radial-gradient(1px 1px at 5% 45%, rgba(255,255,255,0.35) 0%, transparent 100%)
            `,
            pointerEvents: "none",
          }}
        />
        {/* Gold glow left */}
        <div aria-hidden="true" style={{ position: "absolute", width: "600px", height: "500px", background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)", top: "-100px", left: "-100px", pointerEvents: "none" }} />
        {/* Gold glow right */}
        <div aria-hidden="true" style={{ position: "absolute", width: "500px", height: "400px", background: "radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)", bottom: "-80px", right: "-60px", pointerEvents: "none" }} />
        {/* Bottom gold line */}
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />

        {/* Inner — two column: left content, right visual */}
        <div style={{ maxWidth: "1300px", width: "100%", margin: "0 auto", padding: "80px 64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", position: "relative", boxSizing: "border-box" }}>

          {/* LEFT: text content */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <span style={{ width: "36px", height: "1px", background: "#C9A84C", display: "block" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>
                ThePrimeCrafters
              </span>

            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "64px", fontWeight: 900, lineHeight: 1.05, color: "#f5f1e8", marginBottom: "20px" }}>
              AI Automation<br />
              <span style={{ color: "#C9A84C" }}>Case Studies</span>
            </h1>


            {/* H2 */}
            <h2 style={{ fontSize: "18px", fontWeight: 400, color: "rgba(240,237,230,0.65)", lineHeight: 1.65, marginBottom: "8px", maxWidth: "520px" }}>
              Real AI Projects With Measurable Business Outcomes
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 400, color: "rgba(240,237,230,0.5)", lineHeight: 1.7, marginBottom: "32px", maxWidth: "520px" }}>
              Built for companies that demand results, not promises. Every case study below documents a real engagement — the problem, the system we built, the technology used, and the specific outcomes delivered.
            </p>

            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "40px" }} role="list" aria-label="Project categories">
              {categoryPills.map((pill) => (
                <a
                  key={pill.label}
                  href={pill.anchor}
                  role="listitem"
                  style={{ fontSize: "12px", padding: "6px 14px", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "999px", color: "rgba(201,168,76,0.85)", background: "rgba(201,168,76,0.07)", fontWeight: 400, textDecoration: "none", display: "inline-block" }}
                >
                  {pill.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" as const }}>
              <a
                href="#case-study-grid"
                style={{ background: "#C9A84C", color: "#08090f", border: "none", padding: "15px 30px", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, borderRadius: "4px", cursor: "pointer", letterSpacing: "0.02em", textDecoration: "none", display: "inline-block" }}
                onClick={onViewCaseStudies}
              >
                View Case Studies
              </a>
              <a
                href="/contact"
                style={{ background: "transparent", color: "#f0ede6", border: "1px solid rgba(240,237,230,0.25)", padding: "15px 30px", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 400, borderRadius: "4px", cursor: "pointer", letterSpacing: "0.02em", textDecoration: "none", display: "inline-block" }}
                onClick={onBookConsultation}
              >
                Book a Consultation
              </a>
            </div>
          </div>

          {/* RIGHT: proof badges as a 2x2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} role="list" aria-label="Key metrics">
            {proofBadges.map((badge) => (
              <div
                key={badge.label}
                role="listitem"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "8px",
                }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 900, color: "#C9A84C", lineHeight: 1 }}>
                  {badge.value}
                </span>
                <span style={{ fontSize: "14px", color: "rgba(240,237,230,0.6)", lineHeight: 1.4, fontWeight: 500 }}>
                  {badge.label}
                </span>
                <div style={{ width: "32px", height: "2px", background: "#C9A84C", borderRadius: "999px", opacity: 0.5 }} />
                <span style={{ fontSize: "11px", color: "rgba(240,237,230,0.3)", lineHeight: 1.3 }}>
                  {badge.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
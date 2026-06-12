"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const FinalCTASection: React.FC = () => {
  const [hoveredCTA, setHoveredCTA] = useState(false);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="final-cta" aria-labelledby="final-cta-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", textAlign: "center" as const, border: "1px solid rgba(201,168,76,0.3)", borderRadius: "20px", padding: "64px 40px", background: "rgba(201,168,76,0.04)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)", pointerEvents: "none", borderRadius: "20px" }} />

          <h2 id="final-cta-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.2, marginBottom: "28px", position: "relative" }}>
            Ready to Automate a Business Process?
          </h2>

          <Link href="/contact" onMouseEnter={() => setHoveredCTA(true)} onMouseLeave={() => setHoveredCTA(false)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: hoveredCTA ? "#b8923e" : "#C9A84C", color: "#08090f", padding: "16px 36px", borderRadius: "4px", fontSize: "15px", fontWeight: 600, textDecoration: "none", transition: "background 0.2s", position: "relative" }}>
            Book a Free Automation Strategy Call →
          </Link>

          <div style={{ marginTop: "20px", position: "relative" }}>
            <Link href="/contact" style={{ fontSize: "14px", color: "rgba(240,237,230,0.55)", textDecoration: "none", fontWeight: 400 }}>
              Tell Us the Workflow You Want to Automate. We will review your operation and show you exactly what is possible in a free 20 minute strategy call with no commitment required.

            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
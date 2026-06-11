"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const CTASection: React.FC = () => {
  const [btnHov, setBtnHov] = useState(false);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="cta" aria-labelledby="cta-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "100px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box", borderTop: "1px solid rgba(201,168,76,0.3)", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>ThePrimeCrafters</span>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
          </div>

          <h2 id="cta-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 900, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "16px" }}>
            Ready to Automate a Business Process?
          </h2>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C9A84C", marginBottom: "32px" }}>
            Book a Free Automation Strategy Call
          </h3>

          <Link href="/contact" onMouseEnter={() => setBtnHov(true)} onMouseLeave={() => setBtnHov(false)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: btnHov ? "#b8923e" : "#C9A84C", color: "#08090f", padding: "16px 36px", borderRadius: "4px", fontSize: "15px", fontWeight: 700, textDecoration: "none", transition: "background 0.2s", marginBottom: "20px" }}>
            Book a Free Automation Strategy Call →
          </Link>

          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0 }}>
            <strong style={{ color: "rgba(240,237,230,0.7)", fontWeight: 600 }}>Tell Us the Workflow You Want to Automate</strong>
            <br />
            Share the process, tools, and outcome you need. We will review your workflow and show you what is possible in a free strategy call.
          </p>
        </div>
      </section>
    </>
  );
};

export default CTASection;

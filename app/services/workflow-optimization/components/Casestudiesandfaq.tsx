"use client";

import React, { useState } from "react";
import { THEME } from "../shared";

const CaseStudiesSection = () => {
  const cases = [
    { title: "3vltn Domain AI Platform", cat: "Custom Workflow", result: "+250% Deal Closure", link: "/case-study/3vltn" },
    { title: "Spectrum AI Voice Agent", cat: "Sales Automation", result: "10K+ Calls / Mo", link: "/case-study/spectrum-voice-agent" },
    { title: "RV Park AI Voice Agent", cat: "Booking Automation", result: "100% Answer Rate", link: "/case-study/rv-park-voice-agent" },
  ];

  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: THEME.colors.background }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "16px" }}>
              Proof of Work
            </h2>
            <p style={{ color: THEME.colors.textMuted, fontSize: "16px", maxWidth: "500px" }}>
              Real production systems delivering measurable returns.
            </p>
          </div>
          <a href="/case-studies" style={{ color: THEME.colors.primary, textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>View All Case Studies →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="pa-grid-2">
          {cases.map((c, i) => (
            <a key={i} href={c.link} style={{ padding: "40px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "16px", textDecoration: "none" }}>
              <span style={{ fontSize: "11px", color: THEME.colors.primary, fontWeight: 700, textTransform: "uppercase" }}>{c.cat}</span>
              <h3 style={{ fontSize: "20px", color: THEME.colors.text, margin: "12px 0 24px 0", fontFamily: THEME.fonts.serif }}>{c.title}</h3>
              <div style={{ padding: "12px 20px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: "12px", color: THEME.colors.textMuted }}>Result: </span>
                <span style={{ fontSize: "14px", color: THEME.colors.primary, fontWeight: 700 }}>{c.result}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What is AI workflow optimization?", a: "It is the process of mapping and improving business workflows using automation and AI to remove manual bottlenecks." },
    { q: "How long does it take to see results?", a: "Most clients see measurable improvements in efficiency and response times within the first 4-6 weeks after implementation." },
    { q: "Do we need to replace our current tools?", a: "No. We integrate AI capabilities into your existing systems (CRMs, email, forms) rather than replacing them." },
    { q: "Can we include human approvals?", a: "Yes. We design 'human-in-the-loop' workflows where AI handles the repetitive steps and humans handle sensitive decisions." },
  ];

  return (
    <section className="pa-section" style={{ padding: "100px 40px", background: "#08090f" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "36px", color: THEME.colors.text, marginBottom: "40px", textAlign: "center" }}>
          AI Workflow Optimization FAQs
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: `1px solid ${THEME.colors.border}`, borderRadius: "12px", overflow: "hidden" }}>
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", padding: "24px", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ color: THEME.colors.text, fontWeight: 600, fontSize: "16px" }}>{faq.q}</span>
                <span style={{ color: THEME.colors.primary }}>{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 24px 24px 24px", color: THEME.colors.textMuted, fontSize: "14px", lineHeight: 1.6 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CaseStudiesSection, FAQSection };

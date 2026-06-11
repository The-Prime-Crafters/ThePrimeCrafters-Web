"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const useCases = [
  { icon: "📈", title: "Sales Teams", description: "Lead routing, follow-up automation, CRM updates, pipeline workflows, and call summary logging.", color: "#C9A84C", href: "/case-study/spectrum-voice-agent" },
  { icon: "💬", title: "Customer Support Teams", description: "Ticket routing, FAQ handling, response drafts, escalation paths, and support workflow visibility.", color: "#4C8EC9", href: "/services/custom-ai-solutions" },
  { icon: "⚙️", title: "Operations Teams", description: "Task routing, approvals, reporting, alerts, and internal process automation across departments.", color: "#4CA88A", href: "/services/workflow-optimization" },
  { icon: "⚕️", title: "Healthcare and Clinic Admin Teams", description: "Patient intake support, scheduling workflows, admin automation, and clinic operations assistance.", color: "#7C6AC4", href: "/case-study/lmn8-ketamine-therapy", note: "Scoped carefully against your regulatory context." },
  { icon: "🏪", title: "Service Businesses", description: "Booking automation, call answering workflows, reminders, quote requests, and customer follow-up.", color: "#C97A4C", href: "/case-study/rv-park-voice-agent" },
  { icon: "🎯", title: "Marketing and Lead Generation Teams", description: "Lead research, enrichment, scoring, campaign workflows, and qualified lead delivery into CRM pipelines.", color: "#C94C6A", href: "/case-study/lead-generation-tools" },
];

const UseCasesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="use-cases" aria-labelledby="use-cases-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Use Cases</span>
          </div>
          <h2 id="use-cases-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "620px" }}>
            AI Process Automation Use Cases by Team
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px" }}>
            Find the workflows most relevant to your team and see how process automation can remove manual work while keeping control where it matters.
          </p>

          <div className="pa-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} role="list">
            {useCases.map((uc) => {
              const isHov = hovered === uc.title;
              return (
                <a key={uc.title} href={uc.href} role="listitem" onMouseEnter={() => setHovered(uc.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", flexDirection: "column", gap: "12px", background: isHov ? `${uc.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? uc.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <div style={{ fontSize: "24px" }}>{uc.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0 }}>{uc.title}</h3>
                  <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.7, margin: 0, flexGrow: 1 }}>{uc.description}</p>
                  {uc.note && <p style={{ fontSize: "11px", color: "rgba(240,237,230,0.35)", margin: 0, fontStyle: "italic" }}>{uc.note}</p>}
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <a href="/case-studies" style={{ fontSize: "13px", color: "#C9A84C", textDecoration: "none", fontWeight: 500 }}>View all case studies →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCasesSection;

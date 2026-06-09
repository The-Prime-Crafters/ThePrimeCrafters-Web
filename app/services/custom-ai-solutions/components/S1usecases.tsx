"use client"
import React, { useState } from "react";

const useCases = [
  {
    icon: "📈",
    title: "Sales Teams",
    color: "#C9A84C",
    href: "/case-study/spectrum-voice-agent",
    useCases: ["Lead qualification", "Follow-up automation", "Proposal support", "CRM updates", "Call summaries", "Pipeline tracking"],
    description: "AI that keeps your pipeline moving — qualifying leads, writing follow-ups, updating the CRM, and summarising calls without adding admin to your sales reps.",
  },
  {
    icon: "💬",
    title: "Customer Support Teams",
    color: "#4C8EC9",
    href: "/services",
    useCases: ["FAQ answers", "Ticket summaries", "Response drafts", "Routing", "Knowledge base search", "Customer updates"],
    description: "AI that handles the volume — answering common questions, routing tickets, drafting responses, and searching your knowledge base so agents can focus on complex cases.",
  },
  {
    icon: "⚙️",
    title: "Operations Teams",
    color: "#4CA88A",
    href: "/services/workflow-optimization",
    useCases: ["Task routing", "Approval workflows", "Reporting", "SOP support", "Alerts", "Internal process automation"],
    description: "AI that runs the back office — routing tasks, triggering approvals, generating reports, answering SOP questions, and keeping operations moving without constant manual oversight.",
  },
  {
    icon: "🎯",
    title: "Marketing and Lead Generation Teams",
    color: "#C94C6A",
    href: "/case-study/lead-generation-tools",
    useCases: ["Lead research", "Enrichment", "Scoring", "Campaign workflows", "Outreach support", "Performance summaries"],
    description: "AI that fills your pipeline — researching and enriching leads, scoring prospects, supporting outreach campaigns, and summarising performance without manual data work.",
  },
  {
    icon: "⚕️",
    title: "Healthcare and Clinic Workflows",
    color: "#7C6AC4",
    href: "/case-study/lmn8-ketamine-therapy",
    useCases: ["Patient intake support", "Matching workflows", "Scheduling help", "Admin automation", "Clinic operations"],
    description: "AI built for clinical environments — supporting patient intake, matching workflows, scheduling, and admin tasks while keeping data handling compliant and careful.",
    note: "Healthcare implementations are scoped carefully against your specific regulatory context.",
  },
  {
    icon: "🏪",
    title: "Service Businesses",
    color: "#C97A4C",
    href: "/case-study/rv-park-voice-agent",
    useCases: ["Booking automation", "Call answering", "Quote requests", "Reminders", "FAQs", "Customer updates"],
    description: "AI that runs your front line — answering calls 24/7, handling booking requests, sending reminders, and managing customer FAQs without tying up your team.",
  },
];

const UseCasesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section id="use-cases" aria-labelledby="use-cases-heading" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 20% 30%, rgba(201,168,76,0.04) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Who We Serve</span>
          </div>
          <h2 id="use-cases-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "600px" }}>
            Custom AI Solutions for Real Business Use Cases
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "560px" }}>
            Every team and industry has different workflows, bottlenecks, and priorities. Find your context below.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} role="list" aria-label="Business use cases by team">
            {useCases.map((uc) => {
              const isHov = hovered === uc.title;
              return (
                <a
                  key={uc.title}
                  href={uc.href}
                  role="listitem"
                  onMouseEnter={() => setHovered(uc.title)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ display: "flex", flexDirection: "column", gap: "14px", background: isHov ? `${uc.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? uc.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px 22px", textDecoration: "none", color: "inherit", transition: "all 0.25s", transform: isHov ? "translateY(-2px)" : "translateY(0)" }}
                >
                  {/* Icon + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: `${uc.color}14`, border: `1px solid ${uc.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                      {uc.icon}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.85)", margin: 0, lineHeight: 1.25, transition: "color 0.2s" }}>
                      {uc.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "12px", color: isHov ? "rgba(240,237,230,0.6)" : "rgba(240,237,230,0.38)", lineHeight: 1.75, margin: 0, transition: "color 0.2s" }}>
                    {uc.description}
                  </p>

                  {/* Use case chips */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "5px" }}>
                    {uc.useCases.map((u) => (
                      <span key={u} style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "999px", border: `1px solid ${uc.color}25`, background: `${uc.color}0a`, color: uc.color, fontWeight: 500 }}>
                        {u}
                      </span>
                    ))}
                  </div>

                  {uc.note && (
                    <p style={{ fontSize: "11px", color: "rgba(240,237,230,0.3)", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>
                      {uc.note}
                    </p>
                  )}

                  {/* Footer */}
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                    <span style={{ fontSize: "13px", color: uc.color, opacity: isHov ? 1 : 0.35, transform: isHov ? "translateX(4px)" : "translateX(0)", transition: "all 0.2s", display: "inline-block" }}>→</span>
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

export default UseCasesSection;
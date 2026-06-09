"use client"
import React, { useState } from "react";

const deliverables = [
  {
    icon: "⚙️",
    title: "AI Workflow Automation",
    description: "Automate tasks across sales, operations, support, admin, approvals, reporting, and internal teams. Replace repetitive manual steps with intelligent, rules-based automation that fits your process.",
    chips: ["Sales", "Operations", "Support", "Admin", "Reporting"],
    color: "#C9A84C",
    href: "/services/process-automation",
  },
  {
    icon: "💬",
    title: "Custom AI Assistants and Chatbots",
    description: "Build AI assistants for customer questions, internal support, lead capture, document search, and guided workflows — deployed on your website, internal tools, or customer-facing platforms.",
    chips: ["Website", "Internal", "Customer-Facing"],
    color: "#4C8EC9",
    href: "/case-studies",
  },
  {
    icon: "📞",
    title: "AI Voice Agents",
    description: "Create AI agents for sales calls, bookings, FAQs, lead qualification, follow-ups, and customer conversations — handling calls 24/7 without human involvement.",
    chips: ["24/7 Call Handling", "Sales", "Bookings", "Lead Qualification"],
    color: "#7C6AC4",
    href: "/case-study/spectrum-voice-agent",
    badge: "24/7",
  },
  {
    icon: "🎯",
    title: "AI Lead Generation Systems",
    description: "Build systems for scraping, enrichment, scoring, outreach, CRM updates, and pipeline support — pushing qualified leads directly into HubSpot, Salesforce, or any CRM.",
    chips: ["HubSpot", "Salesforce", "Enrichment", "Scoring"],
    color: "#C94C6A",
    href: "/case-study/lead-generation-tools",
  },
  {
    icon: "📊",
    title: "AI Reporting and Data Tools",
    description: "Turn business data into summaries, dashboards, alerts, performance reports, and decision support outputs — making your data actionable without manual analysis.",
    chips: ["Dashboards", "Alerts", "Reports", "Summaries"],
    color: "#4CA88A",
    href: "/services",
  },
  {
    icon: "🔒",
    title: "Internal AI Knowledge Assistants",
    description: "Build private AI tools that help teams search SOPs, documents, policies, client notes, and internal knowledge bases — securely, without exposing data externally.",
    chips: ["SOPs", "Policies", "Documents", "Private"],
    color: "#C97A4C",
    href: "/services",
  },
  {
    icon: "🔁",
    title: "CRM and Sales AI Automation",
    description: "Automate lead routing, follow-ups, pipeline updates, sales notes, reminders, and customer communication — keeping your CRM accurate without manual data entry.",
    chips: ["Lead Routing", "Follow-Ups", "Pipeline", "Notes"],
    color: "#C9A84C",
    href: "/services/ai-integration",
  },
  {
    icon: "🔗",
    title: "Custom AI Integrations",
    description: "Connect AI with CRMs, forms, databases, websites, calendars, email, chat tools, and business software — making AI a native part of your existing technology stack.",
    chips: ["CRM", "Email", "Forms", "Calendars", "Databases"],
    color: "#4C8EC9",
    href: "/services/ai-integration",
  },
];

const DeliverablesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="what-we-build"
        aria-labelledby="deliverables-heading"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 85% 15%, rgba(76,142,201,0.04) 0%, transparent 50%), radial-gradient(ellipse at 15% 85%, rgba(201,168,76,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>What We Build</span>
          </div>
          <h2
            id="deliverables-heading"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "600px" }}
          >
            What We Build as a Custom AI Solutions Agency
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "560px" }}>
            Every deliverable is designed as a production-ready system — built to integrate with your tools, follow your business rules, and produce measurable outcomes from day one.
          </p>

          {/* 2×4 grid — all cards visible in HTML */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}
            role="list"
            aria-label="Custom AI solution types"
          >
            {deliverables.map((item) => {
              const isHov = hovered === item.title;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  role="listitem"
                  onMouseEnter={() => setHovered(item.title)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex", flexDirection: "column", gap: "14px",
                    background: isHov ? `${item.color}08` : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isHov ? item.color + "35" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "14px", padding: "26px 24px",
                    textDecoration: "none", color: "inherit",
                    transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                    transform: isHov ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {/* Icon + title */}
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${item.color}14`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, position: "relative" }}>
                      {item.icon}
                      {item.badge && (
                        <span style={{ position: "absolute", top: "-6px", right: "-8px", fontSize: "8px", fontWeight: 700, background: item.color, color: "#08090f", padding: "2px 5px", borderRadius: "4px", letterSpacing: "0.04em" }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.85)", margin: 0, lineHeight: 1.25, transition: "color 0.2s" }}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "13px", color: isHov ? "rgba(240,237,230,0.6)" : "rgba(240,237,230,0.4)", lineHeight: 1.75, margin: 0, transition: "color 0.2s" }}>
                    {item.description}
                  </p>

                  {/* Chips */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
                    {item.chips.map((chip) => (
                      <span key={chip} style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "999px", border: `1px solid ${item.color}25`, background: `${item.color}0a`, color: item.color, fontWeight: 500, letterSpacing: "0.03em" }}>
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Footer arrow */}
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                    <span style={{ fontSize: "13px", color: item.color, opacity: isHov ? 1 : 0.4, transform: isHov ? "translateX(4px)" : "translateX(0)", transition: "all 0.2s", display: "inline-block" }}>→</span>
                  </div>
                </a>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em" }}>
              View All Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliverablesSection;
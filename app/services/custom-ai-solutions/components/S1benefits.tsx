"use client"
import React, { useState } from "react";

const benefits = [
  {
    icon: "⏱",
    title: "Reduce Manual Work",
    description: "Automate repeat tasks so teams can spend more time on customers, strategy, and high-value work — instead of repetitive admin, data entry, and manual processes.",
    color: "#C9A84C",
  },
  {
    icon: "⚡",
    title: "Improve Response Time",
    description: "Use AI to answer, route, summarise, and process information faster — cutting the time between a customer enquiry and a useful response from hours to seconds.",
    color: "#4C8EC9",
  },
  {
    icon: "🔗",
    title: "Connect Your Existing Tools",
    description: "Build AI systems that work with CRMs, forms, databases, documents, calendars, websites, and chat tools — so AI becomes part of your stack, not separate from it.",
    color: "#4CA88A",
    href: "/services/ai-integration",
  },
  {
    icon: "🧑‍💼",
    title: "Increase Team Productivity",
    description: "Give teams AI support for research, admin work, reporting, sales notes, communication, and daily tasks — so everyone can do more without burning out.",
    color: "#7C6AC4",
  },
  {
    icon: "📐",
    title: "Build Around Your Business Rules",
    description: "Custom AI can follow your workflows, tone, approval logic, handoffs, and escalation rules — so it behaves like a trained team member, not a generic tool.",
    color: "#C97A4C",
  },
  {
    icon: "📊",
    title: "Scale Operations Without More Manual Work",
    description: "Support more leads, customers, calls, tickets, and tasks without adding the same amount of manual effort — letting your operation grow without growing the overhead.",
    color: "#C94C6A",
    href: "/contact",
  },
];

const BenefitsSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section id="benefits" aria-labelledby="benefits-heading" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 55%), radial-gradient(ellipse at 20% 20%, rgba(76,142,201,0.03) 0%, transparent 50%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Why Invest</span>
          </div>
          <h2 id="benefits-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "580px" }}>
            Why Businesses Invest in Custom AI Solutions
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "540px" }}>
            The return on a properly built AI system isn't theoretical — it shows up in time saved, costs reduced, and capacity added without growing the team.
          </p>

          {/* 3×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} role="list" aria-label="Benefits of custom AI solutions">
            {benefits.map((b) => {
              const isHov = hovered === b.title;
              return (
                <div
                  key={b.title}
                  role="listitem"
                  onMouseEnter={() => setHovered(b.title)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ background: isHov ? `${b.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? b.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "26px 22px", display: "flex", flexDirection: "column", gap: "14px", transition: "all 0.25s", transform: isHov ? "translateY(-2px)" : "translateY(0)", cursor: "default" }}
                >
                  {/* Icon */}
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${b.color}14`, border: `1px solid ${b.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                    {b.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: isHov ? "#f5f1e8" : "rgba(240,237,230,0.85)", margin: 0, lineHeight: 1.25, transition: "color 0.2s" }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: isHov ? "rgba(240,237,230,0.6)" : "rgba(240,237,230,0.4)", lineHeight: 1.75, margin: 0, transition: "color 0.2s", flexGrow: 1 }}>
                    {b.description}
                  </p>
                  {b.href && (
                    <a href={b.href} style={{ fontSize: "12px", color: b.color, textDecoration: "none", opacity: isHov ? 0.9 : 0.4, transition: "opacity 0.2s", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      Learn more →
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em" }}>
              See Results From Live Projects →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
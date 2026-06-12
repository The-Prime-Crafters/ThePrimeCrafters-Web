"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const teams = [
  {
    icon: "📈",
    title: "Sales Teams",
    description: "Sales teams carry two kinds of work: the conversations that close deals and the admin that supports them. The admin does not need a human. Lead routing, follow up sequences, CRM stage updates, call summary generation, proposal tracking, and pipeline reporting are all automatable. When sales reps stop managing admin tasks, they handle more conversations and close more deals with the same headcount.",
    chips: ["Lead Routing", "Follow Up Automation", "CRM Updates", "Pipeline Tracking", "Call Summaries"],
    color: "#C9A84C",
    href: "/case-study/spectrum-voice-agent",
  },
  {
    icon: "💬",
    title: "Customer Support Teams",
    description: "Support volume scales faster than headcount. AI process automation handles the first layer of incoming requests by reading and classifying the message, routing it to the right team or agent, drafting a response for common questions, and escalating edge cases for human review. Agents spend their time on the complex issues that need real expertise. Response times improve. Ticket backlogs shrink.",
    chips: ["Ticket Routing", "FAQ Handling", "Response Drafts", "Escalation Paths", "Workflow Visibility"],
    color: "#4C8EC9",
    href: "/services/custom-ai-solutions",
  },
  {
    icon: "⚙️",
    title: "Operations Teams",
    description: "Operations teams often manually bridge the gaps between systems that do not connect. Task routing, approval chasing, report compilation, alert management, and internal process coordination all depend on someone moving information from one place to another. Process automation removes that coordination overhead and keeps operations moving without constant manual oversight.",
    chips: ["Task Routing", "Approval Workflows", "Scheduled Reporting", "Alerts", "Internal Coordination"],
    color: "#4CA88A",
    href: "/services/workflow-optimization",
  },
  {
    icon: "🩺",
    title: "Healthcare and Clinic Admin Teams",
    description: "Healthcare admin involves high volumes of intake forms, scheduling requests, and coordination tasks that follow predictable paths but take significant staff time to manage manually. The Prime Crafters builds automation for patient intake support, appointment scheduling workflows, clinic admin tasks, and team notifications. All healthcare projects are scoped carefully against the specific regulatory and data handling context of the client.",
    chips: ["Patient Intake Support", "Scheduling Workflows", "Admin Automation", "Team Notifications"],
    color: "#C94C6A",
    href: "/case-study/lmn8-ketamine-therapy",
    disclaimer: "Scoped to each client's specific regulatory and data handling requirements.",
  },
  {
    icon: "🏪",
    title: "Service Businesses",
    description: "For local and service businesses, the most valuable automation is the one that handles a customer request when no one is available to do it manually. Booking requests at 10pm. Calls that go unanswered on Saturday morning. Quote requests that sit in an inbox until Monday. Automated booking workflows, call handling systems, and follow up sequences ensure every customer request gets a response immediately regardless of business hours.",
    chips: ["Booking Automation", "Call Answering", "Quote Requests", "Reminders", "FAQs", "Customer Updates"],
    color: "#7C6AC4",
    href: "/case-study/rv-park-voice-agent",
  },
  {
    icon: "🎯",
    title: "Marketing and Lead Generation Teams",
    description: "Lead generation at scale requires a system, not a spreadsheet. The Prime Crafters builds automated pipelines that identify and enrich target prospects, score them against conversion criteria, support outreach sequences, and push qualified leads directly into the CRM pipeline. Marketing teams spend their effort on strategy and creative, not on manual prospect research and data entry.",
    chips: ["Lead Research", "Enrichment", "Scoring", "Outreach Support", "CRM Delivery", "Performance Reports"],
    color: "#C97A4C",
    href: "/case-study/lead-generation-tools",
  },
];

const UseCasesByTeamSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="who-we-serve" aria-labelledby="use-cases-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Who We Serve</span>
          </div>
          <h2 id="use-cases-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "700px" }}>
            AI Process Automation Use Cases by Team
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "620px" }}>
            Process automation delivers different returns in different parts of a business. Find the team context most relevant to your operation and see the specific workflows The Prime Crafters builds automation for.
          </p>

          <div
            className="pa-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              alignItems: "stretch",
            }}
            role="list"
          >
            {teams.map((team) => {
              const isHov = hovered === team.title;
              return (
                <a
                  key={team.title}
                  href={team.href}
                  role="listitem"
                  onMouseEnter={() => setHovered(team.title)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    background: isHov ? `${team.color}08` : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isHov ? team.color + "35" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "16px",
                    padding: "28px",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.25s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${team.color}14`, border: `1px solid ${team.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{team.icon}</div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.3 }}>{team.title}</h3>
                  </div>
                  <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, margin: 0 }}>{team.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginTop: "auto" }}>
                    {team.chips.map((chip) => (
                      <span key={chip} style={{ fontSize: "11px", padding: "5px 10px", borderRadius: "999px", border: `1px solid ${team.color}30`, background: `${team.color}0c`, color: team.color, fontWeight: 500 }}>{chip}</span>
                    ))}
                  </div>
                  {team.disclaimer && (
                    <p style={{ fontSize: "11px", color: "rgba(240,237,230,0.35)", lineHeight: 1.6, margin: 0, fontStyle: "italic" as const }}>{team.disclaimer}</p>
                  )}
                  <span style={{ fontSize: "12px", color: team.color, fontWeight: 500 }}>Learn more →</span>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" as const }}>
            <a href="/case-studies" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)", borderRadius: "999px", padding: "11px 22px", textDecoration: "none" }}>
              View All Case Studies →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseCasesByTeamSection;
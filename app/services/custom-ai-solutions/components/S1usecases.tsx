"use client"
import React, { useState } from "react";

const useCases = [
  {
    icon: "📈",
    title: "Sales Teams",
    color: "#C9A84C",
    href: "/case-study/spectrum-voice-agent",
    useCases: ["Lead Qualification", "Follow-Up Automation", "Proposal Support", "CRM Updates", "Call Summaries", "Pipeline Tracking"],
    description: "Sales teams waste significant time on tasks that have nothing to do with selling — logging call notes, updating pipeline stages, writing follow-up emails, and manually qualifying leads that could have been scored automatically. The Prime Crafters builds AI systems that handle every repeatable sales task, so reps spend their time on conversations that close deals.",
  },
  {
    icon: "💬",
    title: "Customer Support Teams",
    color: "#4C8EC9",
    href: "/services",
    useCases: ["FAQ Answers", "Ticket Summaries", "Response Drafts", "Routing", "Knowledge Base Search", "Customer Updates"],
    description: "High-volume support environments are where AI delivers some of its most immediate returns. AI systems can answer the top 80% of recurring customer questions instantly, route tickets to the right agent based on intent and urgency, draft responses for complex cases, and search the knowledge base in seconds — so agents focus on the cases that genuinely need human judgment.",
  },
  {
    icon: "⚙️",
    title: "Operations Teams",
    color: "#4CA88A",
    href: "/services/workflow-optimization",
    useCases: ["Task Routing", "Approval Workflows", "Reporting", "SOP Support", "Alerts", "Internal Process Automation"],
    description: "Operations efficiency lives and dies on how smoothly tasks, approvals, reports, and information flow across a business. AI automation removes the manual coordination that slows operations down — routing tasks to the right owner, triggering approvals automatically, generating operational reports on schedule, and giving teams instant access to SOP and process information without searching through documents.",
  },
  {
    icon: "🎯",
    title: "Marketing and Lead Generation Teams",
    color: "#C94C6A",
    href: "/case-study/lead-generation-tools",
    useCases: ["Lead Research", "Enrichment", "Scoring", "Campaign Workflows", "Outreach Support", "Performance Summaries"],
    description: "Marketing and lead generation teams face two compounding challenges: finding enough qualified prospects and delivering personalised outreach at the scale needed to hit pipeline targets. AI systems solve both — sourcing and enriching prospect data automatically, scoring leads against conversion criteria, supporting outreach campaigns, and summarising campaign performance without manual reporting pulls.",
  },
  {
    icon: "⚕️",
    title: "Healthcare and Clinic Workflows",
    color: "#7C6AC4",
    href: "/case-study/lmn8-ketamine-therapy",
    useCases: ["Patient Intake Support", "Matching Workflows", "Scheduling Help", "Admin Automation", "Clinic Operations"],
    description: "Healthcare operations involve a high volume of intake, scheduling, and administrative work that is time-sensitive and highly repetitive. The Prime Crafters builds AI systems for clinical environments that support patient intake workflows, match patients to the right service or provider, assist with appointment scheduling, and automate clinic administration — all scoped carefully against the specific regulatory and data handling requirements of the client's environment.",
    note: "Healthcare implementations are scoped carefully against your specific regulatory context.",
  },
  {
    icon: "🏪",
    title: "Service Businesses",
    color: "#C97A4C",
    href: "/case-study/rv-park-voice-agent",
    useCases: ["Booking Automation", "Call Answering", "Quote Requests", "Reminders", "FAQs", "Customer Updates"],
    description: "For local and service businesses, the most valuable automation is the one that handles the customer before a competitor does. AI voice agents answer every call — day or night — handle booking requests, provide accurate availability and FAQ responses, and send confirmation messages without anyone picking up the phone. This removes the single biggest revenue leak for service businesses: missed calls.",
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
            AI automation delivers different value in different parts of a business. Find your team or industry context below to see the specific workflows, tasks, and outcomes that The Prime Crafters builds systems for.
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
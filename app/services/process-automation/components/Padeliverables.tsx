"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const deliverables = [
  { icon: "🎯", title: "Lead Intake and Lead Routing Automation", description: "Inbound leads arrive from multiple sources: web forms, ad platforms, phone calls, email, and social. Without automation, someone manually checks each channel, qualifies the lead, assigns it to the right rep, and enters the data into the CRM. The Prime Crafters builds lead intake systems that capture every submission, enrich the contact and company data, score the lead against the ideal customer profile, and route it directly to the right CRM stage and team member within seconds of submission.", color: "#C9A84C", href: "/case-study/lead-generation-tools" },
  { icon: "📊", title: "CRM Updates and Data Sync", description: "CRM data degrades quickly when updates depend on people manually logging calls, updating stages, and entering notes. The Prime Crafters automates the connection between the CRM and the systems that generate that data: call logs, booking platforms, email threads, form submissions, and payment records. Every interaction is recorded, every stage is updated, and every contact record stays current without a rep touching the keyboard.", color: "#4C8EC9", href: "/services/ai-integration" },
  { icon: "📅", title: "Appointment Booking and Follow Up Workflows", description: "Booking workflows involve more moving parts than they appear to. A customer requests a time, the system checks availability, a confirmation goes out, a reminder fires 24 hours before, and a follow up sequence starts after the appointment. When any of these steps depends on a person, delays creep in and customers notice. The Prime Crafters automates the full booking and follow up sequence so every customer gets the right communication at the right time without staff involvement.", color: "#4CA88A", href: "/case-study/rv-park-voice-agent" },
  { icon: "💬", title: "Customer Support and Ticket Routing", description: "Support volume is predictable in one way: the same questions keep coming. AI process automation handles the high volume repetitive tier of support requests by reading the incoming message, classifying the topic and urgency, routing to the right team or agent, drafting a response for review, and logging the interaction. Agents spend their time on the complex cases that need real expertise, not on the questions a well designed automation can answer in seconds.", color: "#7C6AC4", href: "/services/custom-ai-solutions" },
  { icon: "📈", title: "Sales Follow Up and Pipeline Workflows", description: "Sales teams lose deals to slow follow up more often than they lose them to price or competition. When a prospect books a call, views a proposal, or goes quiet after a demo, the timing of the next touch matters. The Prime Crafters automates the triggers: the follow up email after the call, the CRM stage update when the proposal is opened, the reminder to the rep when a deal has been inactive for five days. Every step happens on time every time.", color: "#C94C6A", href: "/case-study/spectrum-voice-agent" },
  { icon: "📋", title: "Reporting Alerts and Performance Summaries", description: "Leadership and operations teams need visibility into how workflows are performing without spending hours pulling data from multiple systems each week. The Prime Crafters builds automated reporting systems that generate scheduled performance summaries, fire alerts when a KPI drops below threshold, and push relevant metrics to the right person in the right format on a defined schedule. Decisions get made on current data, not last week's spreadsheet.", color: "#C97A4C", href: "/services" },
  { icon: "📄", title: "Document and Admin Workflows", description: "Back office operations are full of document heavy tasks that follow a predictable path: a request comes in, it gets reviewed, approved or rejected, routed to the next step, and logged. Contracts waiting for signatures, invoices needing approval, onboarding documents requiring completion. The Prime Crafters automates these admin workflows so documents move through the process automatically, the right people are notified at each step, and nothing waits on a manual handoff.", color: "#C9A84C", href: "/services/process-automation" },
  { icon: "✅", title: "Human in the Loop Approval Workflows", description: "Not every step should be fully automated. Some decisions require human judgment: a high value discount, an exception to a standard policy, a refund above a certain threshold. The Prime Crafters designs approval workflows that automate everything before and after the human step while keeping the sensitive decision itself under human control. The automation handles intake, enrichment, routing, and notification. The human reviews and approves. The automation handles everything after.", color: "#4CA88A", href: "/contact" },
];

const DeliverablesSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="what-we-automate" aria-labelledby="deliverables-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>What We Automate</span>
          </div>
          <h2 id="deliverables-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "700px" }}>
            Business Processes ThePrimeCrafters Can Automate
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "48px", maxWidth: "560px" }}>
            From lead intake to approvals and reporting, The Prime Crafters automates the workflows that slow teams down most. Every automation is built to production standards and connected to the tools your team already uses.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} role="list">
            {deliverables.map((item) => {
              const isHov = hovered === item.title;
              return (
                <a key={item.title} href={item.href} role="listitem" onMouseEnter={() => setHovered(item.title)} onMouseLeave={() => setHovered(null)} style={{ display: "flex", flexDirection: "column", gap: "12px", background: isHov ? `${item.color}08` : "rgba(255,255,255,0.025)", border: `1px solid ${isHov ? item.color + "35" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", padding: "24px", textDecoration: "none", color: "inherit", transition: "all 0.25s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "22px" }}>{item.icon}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.3 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.7, margin: 0 }}>{item.description}</p>
                </a>
              );
            })}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" as const }}>
            <a href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)", borderRadius: "999px", padding: "11px 22px", textDecoration: "none" }}>
              View All Services →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliverablesSection;
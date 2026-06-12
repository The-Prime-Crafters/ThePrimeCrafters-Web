"use client";

import React, { useState } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
  accentColor: string;
}

const faqItems: FAQItem[] = [
  { id: "faq-1", question: "What are AI process automation services?", accentColor: "#C9A84C", answer: "AI process automation services design and build intelligent workflow systems that handle repetitive business tasks automatically. This includes lead routing, CRM updates, support ticket handling, appointment booking, reporting, approval workflows, and data sync across business tools. The Prime Crafters builds these systems around the specific workflows of each client operation.", links: [{ label: "Our Services", href: "/services" }] },
  { id: "faq-2", question: "What business processes can ThePrimeCrafters automate?", accentColor: "#4C8EC9", answer: "Lead intake and routing, CRM updates and data sync, appointment booking and follow up sequences, customer support and ticket routing, sales follow up and pipeline workflows, reporting and performance summaries, document and admin workflows, and human in the loop approval processes across sales, support, operations, and admin teams." },
  { id: "faq-3", question: "How is AI process automation different from basic workflow automation?", accentColor: "#4CA88A", answer: "Basic workflow automation follows fixed triggers and simple rules. It breaks when workflows involve conditional logic, exceptions, or multi step decisions. AI process automation adds classification, scoring, summarisation, routing, and drafting capabilities so the system can handle complex real world workflows, not just predictable linear ones." },
  { id: "faq-4", question: "Can ThePrimeCrafters connect automation with my CRM, website, email, and internal tools?", accentColor: "#7C6AC4", answer: "Yes. Every automation system The Prime Crafters builds is integrated with the client's existing technology stack including CRMs, websites, web forms, databases, email platforms, calendars, spreadsheets, and any business software with a standard API. All integrations are tested in staging before going live.", links: [{ label: "AI Integration Services", href: "/services/ai-integration" }] },
  { id: "faq-5", question: "What is the process for building an AI process automation system?", accentColor: "#C94C6A", answer: "Six steps: workflow discovery, automation opportunity mapping, workflow architecture and logic design, build and integration, launch with monitoring, and optimisation based on real usage. No step is skipped and no system goes live without client approval." },
  { id: "faq-6", question: "Which teams benefit most from AI process automation?", accentColor: "#C97A4C", answer: "Sales teams, customer support teams, operations teams, marketing and lead generation teams, healthcare admin teams, and service businesses all benefit when they have repeatable workflows, disconnected tools, or high volumes of manual coordination tasks." },
  { id: "faq-7", question: "Is process automation only for large companies?", accentColor: "#C9A84C", answer: "No. Service businesses, growing teams, and mid size operations often see the fastest returns from automation because their manual processes are clear and their volume is high enough to justify the build. Lead response, booking workflows, CRM updates, and support routing all deliver quick wins without requiring enterprise scale infrastructure." },
  { id: "faq-8", question: "How long does AI process automation take to set up?", accentColor: "#4C8EC9", answer: "Simpler focused automations with one or two integrations can go live within a few weeks. Larger multi step systems with several integrations and complex logic take longer. Every timeline is confirmed during the discovery and architecture phases based on the specific scope of the project.", links: [{ label: "Discuss Your Project", href: "/contact" }] },
  { id: "faq-9", question: "How much do AI process automation services cost?", accentColor: "#4CA88A", answer: "Cost depends on workflow complexity, number of integrations, AI logic required, and rollout scope. The Prime Crafters provides a fully scoped proposal after reviewing the specific workflow and requirements during a free strategy call.", links: [{ label: "Book a Consultation", href: "/contact" }] },
  { id: "faq-10", question: "Can AI process automation include human approvals?", accentColor: "#7C6AC4", answer: "Yes. Human in the loop approval workflows are a standard part of what The Prime Crafters builds. Sensitive decisions, exceptions, high value transactions, and escalations are routed to a human for review and approval. The automation handles everything before and after the approval step." },
  { id: "faq-11", question: "How do you measure whether process automation is working?", accentColor: "#C94C6A", answer: "Success is measured against workflow KPIs defined before build begins. Common metrics include response time, manual hours saved, error rate reduction, conversion rate, ticket resolution speed, and CRM data accuracy. These are tracked after launch and used to refine the automation over time." },
  { id: "faq-12", question: "Why choose ThePrimeCrafters for AI process automation services?", accentColor: "#C97A4C", answer: "The Prime Crafters maps processes before building, integrates with existing tools rather than replacing them, keeps automation measurable from day one, and supports every stage from strategy through post launch optimisation. All case studies document specific numeric results from live production systems.", links: [{ label: "About Us", href: "/about-us" }, { label: "Case Studies", href: "/case-studies" }] },
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => (
  <div style={{ border: `1px solid ${isOpen ? item.accentColor + "40" : "rgba(255,255,255,0.07)"}`, borderRadius: "12px", overflow: "hidden", background: isOpen ? `${item.accentColor}07` : "rgba(255,255,255,0.02)" }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <button onClick={onToggle} aria-expanded={isOpen} aria-controls={`${item.id}-answer`} id={`${item.id}-button`} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "22px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}>
      <h3 itemProp="name" style={{ fontSize: "15px", fontWeight: isOpen ? 600 : 500, color: isOpen ? "#f5f1e8" : "rgba(240,237,230,0.75)", lineHeight: 1.45, margin: 0 }}>{item.question}</h3>
      <span aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${isOpen ? item.accentColor + "50" : "rgba(255,255,255,0.12)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: isOpen ? item.accentColor : "rgba(240,237,230,0.4)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "all 0.25s" }}>+</span>
    </button>
    <div id={`${item.id}-answer`} role="region" aria-labelledby={`${item.id}-button`} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{ maxHeight: isOpen ? "500px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
      <div itemProp="text" style={{ padding: "0 24px 24px", borderTop: `1px solid ${item.accentColor}18`, paddingTop: "18px" }}>
        <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.6)", lineHeight: 1.8, margin: "0 0 16px 0" }}>{item.answer}</p>
        {item.links && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {item.links.map((link) => (
              <a key={link.href} href={link.href} style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "4px", border: `1px solid ${item.accentColor}35`, background: `${item.accentColor}0d`, color: item.accentColor, textDecoration: "none", fontWeight: 500 }}>{link.label} →</a>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section id="faq" aria-labelledby="faq-heading" className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }} itemScope itemType="https://schema.org/FAQPage">
        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>FAQ</span>
          </div>
          <h2 id="faq-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "40px" }}>
            AI Process Automation FAQs
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} role="list">
            {faqItems.map((item) => (
              <div key={item.id} role="listitem">
                <FAQItemComponent item={item} isOpen={openId === item.id} onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "center" as const, padding: "28px", borderRadius: "14px", border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)" }}>
            <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.65)", lineHeight: 1.75, margin: "0 0 14px 0" }}>
              Still have questions? Book a free automation strategy call and we will walk you through what is possible for your operation.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 600, color: "#08090f", background: "#C9A84C", padding: "12px 26px", borderRadius: "4px", textDecoration: "none" }}>
              Book a Free Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
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
  { id: "faq-1", question: "What are AI process automation services?", accentColor: "#C9A84C", answer: "AI process automation services design and implement intelligent workflows that automate repetitive business tasks — such as lead routing, CRM updates, support ticket handling, reporting, and approval steps — using connected systems and AI logic tailored to your operation." },
  { id: "faq-2", question: "What business processes can ThePrimeCrafters automate?", accentColor: "#4C8EC9", answer: "The Prime Crafters automates lead intake, CRM sync, appointment booking, customer support routing, sales follow-up, reporting, document workflows, admin tasks, and human-in-the-loop approval processes across sales, support, operations, and admin teams.", links: [{ label: "View Services", href: "/services" }] },
  { id: "faq-3", question: "How is AI process automation different from basic workflow automation?", accentColor: "#4CA88A", answer: "Basic workflow automation follows simple triggers and fixed rules. AI process automation adds intelligent steps such as classification, summarisation, scoring, routing, and drafting — while still connecting to your CRM, forms, email, and internal tools." },
  { id: "faq-4", question: "Can ThePrimeCrafters connect automation with my CRM, website, email, and internal tools?", accentColor: "#7C6AC4", answer: "Yes. Process automations are built to connect with CRMs, websites, forms, databases, email platforms, calendars, spreadsheets, and other business systems through integrations and APIs.", links: [{ label: "AI Integration Services", href: "/services/ai-integration" }] },
  { id: "faq-5", question: "What is the process for building an AI process automation system?", accentColor: "#C94C6A", answer: "The process includes workflow discovery, automation opportunity mapping, workflow architecture design, build and integration, testing, launch with monitoring, and optimization based on real usage." },
  { id: "faq-6", question: "Which teams benefit most from AI process automation?", accentColor: "#C97A4C", answer: "Sales, customer support, operations, marketing and lead generation, healthcare admin, and service businesses benefit most when they have repeatable workflows, disconnected tools, or high manual volume." },
  { id: "faq-7", question: "Is process automation only for large companies?", accentColor: "#C9A84C", answer: "No. Service businesses, growing teams, and mid-size operations often see fast wins from automating lead response, booking workflows, CRM updates, and support routing without needing enterprise-scale infrastructure." },
  { id: "faq-8", question: "How long does AI process automation take to set up?", accentColor: "#4C8EC9", answer: "Smaller focused workflows can launch in a few weeks. Larger multi-step automations with several integrations take longer. Timeline is confirmed during discovery based on workflow complexity and system connections." },
  { id: "faq-9", question: "How much do AI process automation services cost?", accentColor: "#4CA88A", answer: "Cost depends on workflow complexity, number of integrations, AI logic required, and rollout scope. The Prime Crafters provides a scoped proposal after reviewing your process during a strategy call.", links: [{ label: "Book a Consultation", href: "/contact" }] },
  { id: "faq-10", question: "Can AI process automation include human approvals?", accentColor: "#7C6AC4", answer: "Yes. Human-in-the-loop approval workflows are commonly built for sensitive decisions, exceptions, escalations, and compliance-sensitive steps so automation stays practical and controlled." },
  { id: "faq-11", question: "How do you measure whether process automation is working?", accentColor: "#C94C6A", answer: "Success is measured against workflow KPIs such as response time, manual hours saved, error reduction, conversion rate, ticket resolution speed, and system update accuracy — tracked after launch and refined over time." },
  { id: "faq-12", question: "Why choose ThePrimeCrafters for AI process automation services?", accentColor: "#C97A4C", answer: "The Prime Crafters maps processes before building, integrates with existing tools, keeps automation measurable, and supports the full lifecycle from strategy through launch and optimization.", links: [{ label: "About Us", href: "/about-us" }, { label: "Case Studies", href: "/case-studies" }] },
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
        </div>
      </section>
    </>
  );
};

export default FAQSection;

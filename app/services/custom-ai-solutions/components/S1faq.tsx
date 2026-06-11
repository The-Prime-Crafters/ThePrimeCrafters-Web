"use client"
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
  accentColor: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What does a custom AI solutions agency do?",
    accentColor: "#C9A84C",
    answer: "A custom AI solutions agency plans, builds, integrates, and optimises AI systems for businesses. The Prime Crafters covers strategy, workflow mapping, AI architecture, development, integration with existing tools, testing, launch, and ongoing optimisation — all built around the client's specific operation.",
    links: [{ label: "Our Services", href: "/services" }],
  },
  {
    id: "faq-2",
    question: "How are custom AI solutions different from regular AI tools?",
    accentColor: "#4C8EC9",
    answer: "Generic AI tools produce general outputs that humans must manually apply to their work. Custom AI solutions are built around your specific workflows, connected to your existing tools, and follow your business rules — automating end-to-end tasks rather than creating another isolated tool to manage.",
  },
  {
    id: "faq-3",
    question: "What custom AI solutions can ThePrimeCrafters build?",
    accentColor: "#4CA88A",
    answer: "The Prime Crafters builds: AI workflow automation, AI voice agents, custom chatbots and assistants, AI lead generation systems, CRM and sales automation, AI reporting tools, internal knowledge assistants, and custom AI integrations. Every system is built to production standards and connected to the client's existing stack.",
    links: [{ label: "View Case Studies", href: "/case-studies" }],
  },
  {
    id: "faq-4",
    question: "Can custom AI solutions connect with existing software?",
    accentColor: "#7C6AC4",
    answer: "Yes. Every system The Prime Crafters builds is integrated with the client's existing tools — CRMs like HubSpot and Salesforce, websites, forms, databases, email, calendars, and any software with a standard API. All integrations are tested in staging before going live.",
    links: [{ label: "AI Integration Services", href: "/services/ai-integration" }],
  },
  {
    id: "faq-5",
    question: "How does ThePrimeCrafters develop a custom AI solution?",
    accentColor: "#C94C6A",
    answer: "Six phases: (1) Business Process Review, (2) AI Opportunity Mapping, (3) Solution Architecture, (4) Prototype and Build, (5) Integration and Testing, (6) Launch and Optimisation. No phase is skipped and no system goes live without client sign-off.",
  },
  {
    id: "faq-6",
    question: "What business teams benefit most from custom AI solutions?",
    accentColor: "#C97A4C",
    answer: "Sales teams (lead qualification, follow-ups, CRM updates), customer support teams (FAQ handling, ticket routing, response drafts), operations teams (task routing, approvals, reporting), marketing teams (lead research, enrichment, scoring), healthcare teams (intake, matching, scheduling), and service businesses (24/7 call answering, booking automation).",
  },
  {
    id: "faq-7",
    question: "How long does it take to build a custom AI solution?",
    accentColor: "#C9A84C",
    answer: "Simple automations can be live within a few weeks. Larger systems with multiple integrations and custom AI logic take longer. Every timeline is confirmed during the discovery phase based on the specific project scope.",
    links: [{ label: "Discuss Your Project", href: "/contact" }],
  },
  {
    id: "faq-8",
    question: "Why choose ThePrimeCrafters as a custom AI solutions agency?",
    accentColor: "#4CA88A",
    answer: "The Prime Crafters builds AI systems to production standards, integrates them with existing tools, and measures results against real KPIs. All six case studies document specific, verified outcomes. The six-phase process ensures full client visibility at every stage across healthcare, sales, operations, lead generation, and service businesses.",
    links: [
      { label: "About ThePrimeCrafters", href: "/about-us" },
      { label: "View Case Studies", href: "/case-studies" },
    ],
  },
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      style={{ border: `1px solid ${isOpen ? item.accentColor + "40" : "rgba(255,255,255,0.07)"}`, borderRadius: "12px", overflow: "hidden", transition: "border-color 0.25s", background: isOpen ? `${item.accentColor}07` : "rgba(255,255,255,0.02)" }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
        id={`${item.id}-button`}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "22px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif" }}
      >
        <h3
          itemProp="name"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: isOpen ? 600 : 500, color: isOpen ? "#f5f1e8" : "rgba(240,237,230,0.75)", lineHeight: 1.45, margin: 0, transition: "color 0.2s" }}
        >
          {item.question}
        </h3>
        <span aria-hidden="true" style={{ width: "28px", height: "28px", borderRadius: "50%", border: `1px solid ${isOpen ? item.accentColor + "50" : "rgba(255,255,255,0.12)"}`, background: isOpen ? `${item.accentColor}15` : "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s", color: isOpen ? item.accentColor : "rgba(240,237,230,0.4)", fontSize: "16px", fontWeight: 300, transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>

      <div
        id={`${item.id}-answer`}
        role="region"
        aria-labelledby={`${item.id}-button`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        style={{ maxHeight: isOpen ? "600px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}
      >
        <div itemProp="text" style={{ padding: "0 24px 24px", borderTop: `1px solid ${item.accentColor}18`, paddingTop: "18px" }}>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.6)", lineHeight: 1.8, margin: "0 0 16px 0" }}>
            {item.answer}
          </p>
          {item.links && item.links.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "4px", border: `1px solid ${item.accentColor}35`, background: `${item.accentColor}0d`, color: item.accentColor, textDecoration: "none", fontWeight: 500 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${item.accentColor}20`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${item.accentColor}0d`; }}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [ctaHov, setCtaHov] = useState(false);

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
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section
        id="faq"
        aria-labelledby="faq-heading"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 90% 60%, rgba(201,168,76,0.04) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>FAQ</span>
          </div>
          <h2 id="faq-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", marginBottom: "10px", lineHeight: 1.15 }}>
            Custom AI Solutions FAQs
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.4)", marginBottom: "48px", fontStyle: "italic", lineHeight: 1.6 }}>
            Everything you need to know about our custom AI solutions, development process, and capabilities.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} role="list" aria-label="Frequently asked questions">
            {faqItems.map((item) => (
              <div key={item.id} role="listitem">
                <FAQItemComponent item={item} isOpen={openId === item.id} onToggle={() => setOpenId((prev) => prev === item.id ? null : item.id)} />
              </div>
            ))}
          </div>

          {/* CTA nudge */}
          <div style={{ marginTop: "48px", padding: "28px 32px", background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" as const }}>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#f5f1e8", marginBottom: "4px" }}>Still have questions?</p>
              <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.5 }}>
                Book a free AI strategy call and we will walk you through exactly what is possible for your business.
              </p>
            </div>
            <a
              href="/contact"
              onMouseEnter={() => setCtaHov(true)}
              onMouseLeave={() => setCtaHov(false)}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: ctaHov ? "#b8923e" : "#C9A84C", color: "#08090f", padding: "12px 22px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, borderRadius: "4px", textDecoration: "none", letterSpacing: "0.02em", flexShrink: 0, whiteSpace: "nowrap" as const, transition: "background 0.2s" }}
            >
              Book a Free AI Strategy Call →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
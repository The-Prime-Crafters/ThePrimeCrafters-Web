"use client"
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  links?: { label: string; href: string }[];
  accentColor: string;
}

const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What types of AI automation projects has PrimeCrafters built?",
    accentColor: "#C9A84C",
    answer:
      "The Prime Crafters has built production AI automation systems across six distinct verticals: an AI-powered domain investment platform with automated email outreach and deal flow management (3vltn), a HIPAA-compliant healthcare AI platform for ketamine therapy patient matching (lmn8), a 24/7 AI voice agent for local business booking automation (RV Park), an enterprise-grade AI sales voice agent handling 10,000+ calls per month (Spectrum), a suite of AI lead generation tools integrated with Salesforce and HubSpot (AI Lead Generation Tools), and a full-featured faith-based mobile community app with 50,000+ daily active users (Faithful Companion). Every project was built to production standards with measurable, tracked outcomes.",
    links: [{ label: "View All Services", href: "/services" }],
  },
  {
    id: "faq-2",
    question: "Does PrimeCrafters build AI voice agents for sales and customer calls?",
    accentColor: "#4C8EC9",
    answer:
      "Yes. The Prime Crafters has designed and deployed two production AI voice agent systems. The Spectrum AI Voice Agent is an enterprise-grade solution that handles over 10,000 outbound and inbound sales calls per month, delivering a 45% improvement in conversion rate and a 70% reduction in per-call operational costs. The RV Park AI Voice Agent is a 24/7 local business system that achieved a 100% call answer rate and an 85% increase in booking conversions by eliminating missed calls outside business hours. Both agents were built with custom conversation logic, CRM integration, and structured escalation pathways for calls that require human involvement.",
    links: [
      { label: "RV Park Case Study", href: "/case-study/rv-park-voice-agent" },
      { label: "Spectrum Case Study", href: "/case-study/spectrum-voice-agent" },
    ],
  },
  {
    id: "faq-3",
    question: "Can PrimeCrafters build HIPAA-compliant healthcare AI platforms?",
    accentColor: "#4CA88A",
    answer:
      "Yes. The lmn8 Ketamine Therapy platform demonstrates The Prime Crafters' capability in regulated healthcare environments. The system was built to HIPAA compliance standards and automates three core workflows: patient intake, AI-powered treatment matching between patients and clinics, and appointment scheduling. The platform achieved 94% patient-to-clinic matching accuracy, reduced the time from initial patient enquiry to confirmed booking by 65%, and increased overall clinic capacity by 45%. Healthcare clients with compliance requirements are encouraged to discuss their specific regulatory context during the discovery phase.",
    links: [
      { label: "lmn8 Case Study", href: "/case-study/lmn8-ketamine-therapy" },
    ],
  },
  {
    id: "faq-4",
    question: "What results has PrimeCrafters delivered in its AI automation case studies?",
    accentColor: "#7C6AC4",
    answer:
      "Across all six delivered projects, The Prime Crafters has documented the following outcomes: 250% increase in deal closure rate (3vltn), 10,000+ AI-handled calls per month (Spectrum), 50,000+ qualified leads generated monthly (AI Lead Generation Tools), 94% AI matching accuracy in healthcare patient routing (lmn8), 100% inbound call answer rate for a local business (RV Park), 70% reduction in per-call operational costs (Spectrum), 65% faster patient intake processing (lmn8), 90% reduction in manual lead prospecting time (AI Lead Generation Tools), 50,000+ daily active users on a mobile community platform with a 4.8/5 app store rating (Faithful Companion). All figures are sourced from post-deployment performance tracking.",
    links: [{ label: "See All Case Studies", href: "#case-study-grid" }],
  },
  {
    id: "faq-5",
    question: "Does PrimeCrafters build AI lead generation tools that integrate with CRMs?",
    accentColor: "#C94C6A",
    answer:
      "Yes. The AI Lead Generation Tools project is a multi-channel AI system built to source, enrich, score, and deliver qualified leads directly into CRM pipelines without manual data entry. The system generated 50,000+ qualified leads per month, saved 90% of the time previously spent on manual prospecting, and increased the qualified lead rate by 120%. It integrates natively with Salesforce and HubSpot, and can be configured to push enriched lead data to any CRM with a standard API. Lead scoring logic is trained on the client's historical conversion data for accuracy.",
    links: [
      { label: "Lead Gen Case Study", href: "/case-study/lead-generation-tools" },
    ],
  },
  {
    id: "faq-6",
    question: "Can PrimeCrafters create mobile apps with content, community, and engagement features?",
    accentColor: "#C97A4C",
    answer:
      "Yes. The Faithful Companion app is a full-featured mobile application built for a large faith community, covering daily devotional content feeds, community prayer request submissions and responses, push notification engagement mechanics, and moderation tools for community management. The app was engineered for scale from day one, reaching 50,000+ daily active users and accumulating over 200,000 prayer requests while maintaining a 4.8 out of 5 app store rating. The Prime Crafters handled full product development from architecture to launch.",
    links: [
      { label: "Faithful Companion Case Study", href: "/case-study/faithful-companion" },
    ],
  },
  {
    id: "faq-7",
    question: "How does PrimeCrafters approach custom AI platform development?",
    accentColor: "#4C8EC9",
    answer:
      "Every project begins with a structured discovery phase — a workflow audit and ROI mapping session that identifies the highest-value automation opportunities before any development begins. From there, The Prime Crafters designs the full AI architecture, including model selection, data flow, integration points, and human oversight requirements. Development is delivered in agile sprints with weekly client demos. Integration connects the AI system to the client's existing tech stack. Every project goes through QA, load testing, and client-approved user acceptance testing before any live deployment. No off-the-shelf templates are used — every system is designed and built specifically for the client's business context and operational requirements.",
    links: [{ label: "Our Services", href: "/services" }],
  },
  {
    id: "faq-8",
    question: "Why should businesses choose PrimeCrafters for AI automation and workflow optimisation?",
    accentColor: "#C9A84C",
    answer:
      "The Prime Crafters combines deep technical expertise in AI system architecture with a practical focus on real business outcomes. Every engagement begins with understanding the client's specific operation — not applying a generic template. Projects span healthcare, enterprise sales, local business, lead generation, and mobile applications, demonstrating breadth of delivery capability. All results in these case studies are documented with specific, numeric KPIs verified post-deployment. The six-phase delivery process — Discovery, Architecture, Development, Integration, Testing, and Launch — ensures every system is built to production standards with client oversight at each stage.",
    links: [{ label: "Book a Consultation", href: "/contact" }],
  },
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      style={{
        border: `1px solid ${isOpen ? item.accentColor + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.25s",
        background: isOpen ? `${item.accentColor}07` : "rgba(255,255,255,0.02)",
      }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
        id={`${item.id}-button`}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 24px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <h3
          itemProp="name"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: isOpen ? 600 : 500,
            color: isOpen ? "#f5f1e8" : "rgba(240,237,230,0.75)",
            lineHeight: 1.45,
            margin: 0,
            transition: "color 0.2s",
          }}
        >
          {item.question}
        </h3>

        {/* Toggle icon */}
        <span
          aria-hidden="true"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: `1px solid ${isOpen ? item.accentColor + "50" : "rgba(255,255,255,0.12)"}`,
            background: isOpen ? `${item.accentColor}15` : "rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s",
            color: isOpen ? item.accentColor : "rgba(240,237,230,0.4)",
            fontSize: "16px",
            fontWeight: 300,
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <div
        id={`${item.id}-answer`}
        role="region"
        aria-labelledby={`${item.id}-button`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        style={{
          maxHeight: isOpen ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <div
          itemProp="text"
          style={{
            padding: "0 24px 24px",
            borderTop: `1px solid ${item.accentColor}18`,
            paddingTop: "18px",
          }}
        >
          <p style={{
            fontSize: "14px",
            color: "rgba(240,237,230,0.6)",
            lineHeight: 1.8,
            margin: "0 0 16px 0",
          }}>
            {item.answer}
          </p>

          {item.links && item.links.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "12px",
                    padding: "5px 12px",
                    borderRadius: "4px",
                    border: `1px solid ${item.accentColor}35`,
                    background: `${item.accentColor}0d`,
                    color: item.accentColor,
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${item.accentColor}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${item.accentColor}0d`;
                  }}
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

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // FAQ schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item.answer === "string" ? item.answer : item.question,
      },
    })),
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        aria-labelledby="faq-heading"
        id="faq"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {/* Borders & glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 90% 60%, rgba(201,168,76,0.04) 0%, transparent 55%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>
              FAQ
            </span>
          </div>

          {/* H2 */}
          <h2
            id="faq-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#f5f1e8",
              marginBottom: "10px",
              lineHeight: 1.15,
            }}
          >
            Frequently Asked Questions About PrimeCrafters Case Studies
          </h2>

          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.4)", marginBottom: "48px", fontStyle: "italic", lineHeight: 1.6 }}>
            Everything you need to know about our AI automation projects, process, and capabilities.
          </p>

          {/* Accordion */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            role="list"
            aria-label="Frequently asked questions"
          >
            {faqItems.map((item) => (
              <div key={item.id} role="listitem">
                <FAQItemComponent
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA nudge */}
          <div style={{
            marginTop: "48px",
            padding: "28px 32px",
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.18)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}>
            <div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#f5f1e8", marginBottom: "4px" }}>
                Still have questions?
              </p>
              <p style={{ fontSize: "13px", color: "rgba(240,237,230,0.5)", lineHeight: 1.5 }}>
                Book a free consultation and we will walk you through exactly what is possible for your business.
              </p>
            </div>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#C9A84C",
                color: "#08090f",
                padding: "12px 22px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "4px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
            >
              Book a Consultation →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
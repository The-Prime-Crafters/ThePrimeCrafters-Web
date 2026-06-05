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
      "PrimeCrafters has built AI automation systems across six distinct verticals: voice AI agents for sales and local business, a HIPAA-compliant healthcare AI platform for ketamine therapy clinics, an AI-powered domain investment platform with automated email outreach, a suite of AI lead generation tools integrated with CRM pipelines, a faith-based mobile community application, and an enterprise sales voice agent handling over 10,000 calls per month.",
    links: [{ label: "View All Services", href: "/services" }],
  },
  {
    id: "faq-2",
    question: "Does PrimeCrafters build AI voice agents for sales and customer calls?",
    accentColor: "#4C8EC9",
    answer:
      "Yes. PrimeCrafters has built two production voice AI systems: the Spectrum AI Voice Agent, an enterprise-grade solution handling 10,000+ outbound and inbound calls per month with a 45% conversion rate improvement and 70% cost reduction; and the RV Park Voice Agent, a 24/7 local business agent that achieved 100% call answer rate and an 85% increase in booking conversions.",
    links: [
      { label: "RV Park Case Study", href: "https://www.theprimecrafters.com/case-study/rv-park-voice-agent" },
      { label: "Spectrum Case Study", href: "https://www.theprimecrafters.com/case-study/spectrum-voice-agent" },
    ],
  },
  {
    id: "faq-3",
    question: "Can PrimeCrafters build HIPAA-compliant healthcare AI platforms?",
    accentColor: "#4CA88A",
    answer:
      "Yes. The lmn8 Ketamine Therapy platform is a HIPAA-compliant AI system built for mental health clinics. It automates patient intake, AI-powered treatment matching, and scheduling workflows. The platform achieved 94% patient matching accuracy, reduced intake time by 65%, and increased clinic capacity by 45%.",
    links: [
      { label: "lmn8 Case Study", href: "https://www.theprimecrafters.com/case-study/lmn8-ketamine-therapy" },
    ],
  },
  {
    id: "faq-4",
    question: "What results has PrimeCrafters delivered in its AI automation case studies?",
    accentColor: "#7C6AC4",
    answer:
      "Across all projects, PrimeCrafters has delivered a 250% increase in deal closure rate, 10,000+ AI-handled calls per month, 50,000+ qualified leads generated monthly, 94% AI matching accuracy in healthcare, 100% call answer rate for a local voice agent, 70% reduction in operational costs for an enterprise sales team, and a 4.8/5 app rating for a mobile community platform with 50,000+ daily users.",
    links: [{ label: "See All Case Studies", href: "#case-study-grid" }],
  },
  {
    id: "faq-5",
    question: "Does PrimeCrafters build AI lead generation tools that integrate with CRMs?",
    accentColor: "#C94C6A",
    answer:
      "Yes. The AI Lead Generation Tools project generated 50,000+ qualified leads per month, saved 90% of manual lead research time, and increased the qualified lead rate by 120%. The system integrates directly with CRM platforms to push enriched, scored leads into existing sales pipelines without manual data entry.",
    links: [
      { label: "Lead Gen Case Study", href: "https://www.theprimecrafters.com/case-study/lead-generation-tools" },
    ],
  },
  {
    id: "faq-6",
    question: "Can PrimeCrafters create mobile apps with content, community, and engagement features?",
    accentColor: "#C97A4C",
    answer:
      "Yes. The Faithful Companion app is a full-featured mobile application built with daily content feeds, community prayer request features, and engagement mechanics designed for scale. It reached 50,000+ daily active users, accumulated over 200,000 prayer requests, and holds a 4.8/5 app store rating.",
    links: [
      { label: "Faithful Companion Case Study", href: "https://www.theprimecrafters.com/case-study/faithful-companion" },
    ],
  },
  {
    id: "faq-7",
    question: "How does PrimeCrafters approach custom AI platform development?",
    accentColor: "#4C8EC9",
    answer:
      "Every project follows a six-step process: Discovery (workflow audit and ROI mapping), AI Architecture (model selection and integration design), Development (agile sprints with weekly demos), Integration (connecting to existing tech stack), Testing (QA, load testing, and UAT), and Launch (phased rollout with monitoring). No off-the-shelf templates are used — every system is built specifically for the client's business.",
    links: [{ label: "Our Services", href: "/services" }],
  },
  {
    id: "faq-8",
    question: "Why should businesses choose PrimeCrafters for AI automation and workflow optimisation?",
    accentColor: "#C9A84C",
    answer:
      "PrimeCrafters delivers measurable outcomes across diverse industries — from healthcare and enterprise sales to local business and mobile apps. Every engagement starts with a discovery process to identify the highest-ROI automation opportunities, and every project is built to production standards with full integration into existing workflows. Results are tracked and reported with specific, numeric KPIs.",
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
                Book a free consultation and we'll walk you through exactly what's possible for your business.
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
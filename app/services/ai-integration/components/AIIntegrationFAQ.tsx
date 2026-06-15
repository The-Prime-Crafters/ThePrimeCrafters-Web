'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'What are AI integration services?',
    a: 'AI integration services involve the custom software engineering, data structure alignment, and API link configuration required to connect modern artificial intelligence engines straight into an enterprise\'s current software stack. This enables smart models to read information, evaluate files, make decisions, and update records natively inside daily operational tools without requiring manual data transfer.',
  },
  {
    q: 'What systems can ThePrimeCrafters connect with AI?',
    a: 'Our developers design custom connectors across your entire technological stack, including prominent CRMs (Salesforce, HubSpot, GoHighLevel), cloud database clusters (SQL, PostgreSQL, MongoDB), customer portals, communication layers (Slack, Outlook, Teams), and custom internal legacy software through secure API integrations.',
    href: '/services',
    linkLabel: 'View All Services →',
  },
  {
    q: 'Can AI integration connect with my CRM?',
    a: 'Yes. We specialize in deep CRM connections that empower AI models to automatically create prospect files, adjust active pipeline categories based on phone summaries, record meeting transcripts, compute custom lead values, and prompt timely team follow-up sequences.',
    href: '/case-study/lead-generation-tools',
    linkLabel: 'See CRM Integration Case Study →',
  },
  {
    q: 'How is AI integration different from basic automation connectors?',
    a: 'Basic out-of-the-box automation bridges simply move raw data fields from point A to point B. Our custom AI integrations embed a smart cognitive layer directly into your workflows — enabling the system to clean text, analyze sentiment, summarize files, check complex conditions, handle errors, and include human validation checkpoints for higher-risk tasks.',
  },
  {
    q: 'Can ThePrimeCrafters integrate AI voice agents and chatbots with business tools?',
    a: 'Absolutely. We bridge front-facing voice agents and conversational chatbots directly to your backend calendars, ticket desks, and client databases. This allows the AI to book appointments, look up support tickets, and update consumer profiles in real time during a call or chat session.',
    href: '/case-study/spectrum-voice-agent',
    linkLabel: 'See Voice Agent Integration Case Study →',
  },
  {
    q: 'What is the process for building an AI integration?',
    a: 'We follow a structured six-step implementation framework: we start with an intensive workflow and systems audit, map out clear integration opportunities, plan data flows and API architecture, write custom integration code, perform exhaustive edge-case testing, and provide ongoing post-launch monitoring and adjustments.',
  },
  {
    q: 'Do AI integrations require replacing our existing software?',
    a: 'No. Our core philosophy is to build around the systems you already use. We write secure middleware and link APIs to introduce modern intelligence into your existing platform setup, preserving your software investments and avoiding painful staff retraining.',
  },
  {
    q: 'How long does an AI integration project take?',
    a: 'Project timelines depend entirely on the complexity of your workflow and the open accessibility of your software stack. Simple connections using standard API links can go live in 2 to 4 weeks, while complex enterprise systems featuring legacy software adjustments typically span 6 to 12 weeks. We outline definitive timelines during our initial planning phase.',
  },
  {
    q: 'How much do AI integration services cost?',
    a: 'Every implementation project is customized to reflect the number of software tools involved, data synchronization speeds, and custom logic requirements. We deliver transparent, fixed-price project blueprints after completing your initial system and workflow audit.',
    href: '/contact',
    linkLabel: 'Book a Free Strategy Call →',
  },
  {
    q: 'Are AI integrations safe for sensitive business workflows?',
    a: 'Yes, data security is our top priority. We implement enterprise-grade encryption layers, use secure OAuth authentication, restrict access based on user roles, and insert human approval gates for sensitive actions like financial updates or external communications.',
  },
  {
    q: 'How do you measure whether an AI integration is working?',
    a: 'We embed native tracking tools directly into your automated workflows. This allows you to monitor key metrics like manual data handling hours saved, drop-offs in process execution delays, synchronization accuracy rates, and overall workflow performance improvements through clear management dashboards.',
  },
  {
    q: 'Why choose ThePrimeCrafters for AI integration services?',
    a: 'We stand apart by combining deep business workflow mapping with rigorous software and API engineering. We focus on building secure, robust, and highly scalable solutions designed to solve real operational bottlenecks and drive measurable business growth.',
    href: '/about-us',
    linkLabel: 'About ThePrimeCrafters →',
    href2: '/case-studies',
    linkLabel2: 'View Case Studies →',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

export default function AIIntegrationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      style={{
        background: '#0F0F0F',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top border accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)',
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          FAQ
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.2,
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          AI Integration Services FAQs
        </h2>

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: '#888888',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 56px',
          }}
        >
          Find precise technical answers to common questions about our AI integration engineering, architectural security protocols, and implementation processes.
        </p>

        {/* FAQ Accordion */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '64px',
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                style={{
                  background: isOpen
                    ? 'rgba(201,168,76,0.05)'
                    : 'rgba(255,255,255,0.03)',
                  border: isOpen
                    ? '1px solid rgba(201,168,76,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '22px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '15px',
                      fontWeight: isOpen ? 600 : 500,
                      color: isOpen ? '#FFFFFF' : '#CCCCCC',
                      margin: 0,
                      lineHeight: 1.45,
                      transition: 'color 0.2s',
                      flex: 1,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <span
                    style={{
                      color: '#C9A84C',
                      fontSize: '20px',
                      fontWeight: 300,
                      flexShrink: 0,
                      lineHeight: 1,
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer panel */}
                {isOpen && (
                  <div style={{ padding: '0 24px 24px' }}>
                    {/* Divider */}
                    <div
                      style={{
                        height: '1px',
                        background: 'rgba(201,168,76,0.15)',
                        marginBottom: '20px',
                      }}
                    />

                    {/* Answer text — crawlable HTML */}
                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '14px',
                        color: '#909090',
                        lineHeight: 1.85,
                        margin: 0,
                        marginBottom:
                          faq.href || faq.href2 ? '16px' : '0',
                      }}
                    >
                      {faq.a}
                    </p>

                    {/* Optional links */}
                    {(faq.href || faq.href2) && (
                      <div
                        style={{
                          display: 'flex',
                          gap: '20px',
                          flexWrap: 'wrap',
                          marginTop: '4px',
                        }}
                      >
                        {faq.href && (
                          <Link
                            href={faq.href}
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#C9A84C',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {faq.linkLabel}
                          </Link>
                        )}
                        {faq.href2 && (
                          <Link
                            href={faq.href2}
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '13px',
                              fontWeight: 500,
                              color: '#C9A84C',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {faq.linkLabel2}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              color: '#888888',
              margin: 0,
            }}
          >
            Have a question not covered here?
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0A0A0A',
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book a Free AI Integration Strategy Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
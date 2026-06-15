"use client";

import React, { useState } from "react";

// --- THEME & CONSTANTS ---
const THEME = {
  colors: {
    background: "#0b0c14",
    surface: "rgba(255, 255, 255, 0.025)",
    border: "rgba(255, 255, 255, 0.07)",
    primary: "#C9A84C", // Gold/Yellow
    text: "#f5f1e8",
    textMuted: "rgba(240, 237, 230, 0.5)",
    cardHover: "rgba(201, 168, 76, 0.05)",
  },
  fonts: {
    serif: "'Playfair Display', serif",
    sans: "'DM Sans', sans-serif",
  },
};

const PA_FONTS_LINK = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap";

const PA_RESPONSIVE_STYLES = `
  @media (max-width: 900px) {
    .pa-grid-2 { grid-template-columns: 1fr !important; }
    .pa-grid-3 { grid-template-columns: 1fr !important; }
    .pa-grid-4 { grid-template-columns: 1fr !important; }
    .pa-section { padding: 60px 20px !important; min-height: auto !important; }
    .pa-h1 { font-size: 32px !important; }
    .pa-h2 { font-size: 28px !important; }
  }
`;

// Helper component for full-screen sections
const Section = ({ children, style = {}, id = "", className = "" }: { children: React.ReactNode, style?: React.CSSProperties, id?: string, className?: string }) => (
  <section 
    id={id}
    className={`pa-section ${className}`}
    style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: "80px 40px",
      boxSizing: "border-box",
      ...style 
    }}
  >
    <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
      {children}
    </div>
  </section>
);

// --- COMPONENTS ---

const HeroSection = () => {
  return (
    <Section style={{ background: THEME.colors.background, paddingTop: "140px" }}> {/* Added extra padding for Navbar */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="pa-grid-2">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ width: "30px", height: "1px", background: THEME.colors.primary }} />
            <span style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: THEME.colors.primary, fontWeight: 600 }}>ThePrimeCrafters</span>
          </div>
          <h1 className="pa-h1" style={{ fontFamily: THEME.fonts.serif, fontSize: "56px", color: THEME.colors.text, lineHeight: 1.1, marginBottom: "24px" }}>
            AI Workflow Optimization Services for Faster, Smarter Business Operations
          </h1>
          <h2 style={{ fontSize: "20px", color: THEME.colors.textMuted, lineHeight: 1.6, marginBottom: "40px", fontWeight: 400 }}>
            Find Bottlenecks, Improve Handoffs, and Build AI-Ready Workflows. We help you map current processes and remove friction.
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="/contact" style={{ padding: "18px 36px", background: THEME.colors.primary, color: "#000", textDecoration: "none", borderRadius: "4px", fontWeight: 700, fontSize: "15px" }}>
              Book a Free Strategy Call
            </a>
            <a href="/case-studies" style={{ padding: "18px 36px", border: `1px solid ${THEME.colors.border}`, color: THEME.colors.text, textDecoration: "none", borderRadius: "4px", fontWeight: 500, fontSize: "15px" }}>
              View Case Studies
            </a>
          </div>
          <div style={{ marginTop: "60px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Workflow Audit", "Process Mapping", "Automation Roadmap", "KPI Tracking"].map((badge) => (
              <span key={badge} style={{ padding: "8px 18px", background: "rgba(201, 168, 76, 0.1)", color: THEME.colors.primary, borderRadius: "100px", fontSize: "12px", fontWeight: 600, border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ width: "100%", height: "450px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", border: `1px solid ${THEME.colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
             <div style={{ textAlign: "center", color: THEME.colors.textMuted }}>
                <div style={{ fontSize: "60px", marginBottom: "15px" }}>⚙️</div>
                <p style={{ fontSize: "14px", letterSpacing: "0.05em" }}>Workflow Optimization Map Visual</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Manual Handoffs Slow Everything Down", desc: "Teams lose time when leads, tasks, and updates move manually between people and tools.", icon: "⏳" },
    { title: "Teams Use Too Many Disconnected Tools", desc: "CRMs, spreadsheets, and inboxes that do not share context create friction.", icon: "🔌" },
    { title: "Bottlenecks Hide Inside Approvals", desc: "Stalled approvals and unclear ownership lead to delayed responses and missed follow-ups.", icon: "🛑" },
    { title: "Automation Fails Without Mapping", desc: "Effective automation needs clear process steps and rules before building.", icon: "❌" },
  ];

  return (
    <Section style={{ background: "#08090f" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "20px" }}>
          Messy Workflows Keep Teams Busy Without Moving Work Forward
        </h2>
        <p style={{ color: THEME.colors.textMuted, maxWidth: "750px", margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
          Manual processes and scattered tools create costly handoffs. Talk to a Workflow Optimization Expert to fix it.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="pa-grid-2">
        {problems.map((p, i) => (
          <div key={i} style={{ padding: "40px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "20px", height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", marginBottom: "24px" }}>{p.icon}</div>
            <h3 style={{ fontSize: "20px", color: THEME.colors.text, marginBottom: "16px", fontWeight: 700 }}>{p.title}</h3>
            <p style={{ fontSize: "15px", color: THEME.colors.textMuted, lineHeight: 1.7, flexGrow: 1 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ServiceOverview = () => {
  return (
    <Section style={{ background: THEME.colors.background }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "start" }} className="pa-grid-2">
        <div>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "32px" }}>
            Workflow Optimization Built Around How Your Team Actually Works
          </h2>
          <div style={{ padding: "32px", background: "rgba(201, 168, 76, 0.05)", borderLeft: `4px solid ${THEME.colors.primary}`, borderRadius: "4px", marginBottom: "40px" }}>
            <h3 style={{ fontSize: "18px", color: THEME.colors.primary, marginBottom: "12px", fontWeight: 700 }}>What Is AI Workflow Optimization?</h3>
            <p style={{ fontSize: "16px", color: THEME.colors.textMuted, lineHeight: 1.7, margin: 0 }}>
              Improving business processes with workflow mapping, automation planning, and AI support so teams move work faster with fewer manual steps.
            </p>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Repeated manual tasks",
              "Unclear ownership of work",
              "Slow approvals and handoffs",
              "Tool overload and friction",
              "Reporting gaps",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px", color: THEME.colors.text }}>
                <span style={{ color: THEME.colors.primary, fontSize: "18px" }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ padding: "50px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "24px" }}>
          <h3 style={{ fontSize: "24px", color: THEME.colors.text, marginBottom: "32px", fontWeight: 700 }}>What ThePrimeCrafters Handles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              { step: "01", title: "Workflow Audit", desc: "Mapping your current processes." },
              { step: "02", title: "Process Mapping", desc: "Identifying friction and handoffs." },
              { step: "03", title: "Bottleneck Analysis", desc: "Finding where work stalls." },
              { step: "04", title: "Automation Roadmap", desc: "Planning your AI-ready future." },
              { step: "05", title: "KPI Tracking", desc: "Measuring real-world performance." },
              { step: "06", title: "Post-Launch Improvement", desc: "Continuous optimization." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px" }}>
                <span style={{ fontSize: "14px", color: THEME.colors.primary, fontWeight: 700, minWidth: "24px" }}>{item.step}</span>
                <div>
                  <h4 style={{ fontSize: "16px", color: THEME.colors.text, margin: "0 0 6px 0", fontWeight: 600 }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: THEME.colors.textMuted, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const WhatWeOptimize = () => {
  const services = [
    { title: "Sales and Lead Handoff", desc: "Improve lead capture, qualification, and CRM updates.", icon: "🎯" },
    { title: "Customer Support Tickets", desc: "Map requests into clear routing and escalation.", icon: "🎧" },
    { title: "Operations and Admin", desc: "Improve task routing and internal requests.", icon: "⚙️" },
    { title: "Approval and Review", desc: "Clarify owners and escalation paths.", icon: "✅" },
    { title: "Reporting and Dashboards", desc: "Turn scattered data into useful summaries.", icon: "📊" },
    { title: "CRM and Data Sync", desc: "Improve how records move between tools.", icon: "🔄" },
  ];

  return (
    <Section style={{ background: "#08090f" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "20px" }}>
          Business Workflows ThePrimeCrafters Can Optimize
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }} className="pa-grid-3">
        {services.map((s, i) => (
          <div key={i} style={{ padding: "40px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "20px", transition: "all 0.3s" }}>
            <div style={{ fontSize: "36px", marginBottom: "24px" }}>{s.icon}</div>
            <h3 style={{ fontSize: "22px", color: THEME.colors.text, marginBottom: "16px", fontWeight: 700 }}>{s.title}</h3>
            <p style={{ fontSize: "16px", color: THEME.colors.textMuted, lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const OptimizationFramework = () => {
  return (
    <Section style={{ background: THEME.colors.background }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "20px" }}>
          How Workflow Optimization Turns Daily Work Into a Clear Operating System
        </h2>
        <p style={{ color: THEME.colors.textMuted, maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: 1.6 }}>
          We design a framework where inputs, logic, AI support, and outputs function as one.
        </p>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="pa-grid-4">
        {[
          { title: "Inputs", items: ["Leads", "Calls", "Forms", "Tickets"], icon: "📥" },
          { title: "Logic", items: ["Routing", "Approvals", "Rules", "Steps"], icon: "🧠" },
          { title: "AI Support", items: ["Summaries", "Drafts", "Scoring"], icon: "✨" },
          { title: "Outputs", items: ["CRM Updates", "Alerts", "Reports"], icon: "📤" },
        ].map((step, i) => (
          <div key={i} style={{ padding: "40px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "20px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "24px" }}>{step.icon}</div>
            <h3 style={{ fontSize: "22px", color: THEME.colors.text, marginBottom: "20px", fontWeight: 700 }}>{step.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {step.items.map((item, j) => (
                <span key={j} style={{ fontSize: "13px", color: THEME.colors.textMuted, padding: "6px 14px", background: "rgba(255,255,255,0.05)", borderRadius: "6px" }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ImplementationProcess = () => {
  const steps = [
    { num: "01", title: "Workflow Discovery", desc: "We map your current operations and find the bottlenecks." },
    { num: "02", title: "Opportunity Mapping", desc: "We prioritize the highest value workflows to fix first." },
    { num: "03", title: "Architecture Design", desc: "We design the logic, AI steps, and integration points." },
    { num: "04", title: "Build & Integration", desc: "We connect your tools and build the optimized system." },
    { num: "05", title: "Launch & Monitoring", desc: "We deploy and track performance in real-time." },
    { num: "06", title: "Continuous Optimization", desc: "We refine the system based on real usage data." },
  ];

  return (
    <Section style={{ background: "#08090f" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "20px" }}>
          Our Implementation Process
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "60px" }} className="pa-grid-3">
        {steps.map((s, i) => (
          <div key={i} style={{ position: "relative" }}>
            <span style={{ fontSize: "72px", fontWeight: 900, color: "rgba(201, 168, 76, 0.08)", position: "absolute", top: "-30px", left: "-15px" }}>{s.num}</span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3 style={{ fontSize: "22px", color: THEME.colors.text, marginBottom: "16px", fontWeight: 700 }}>{s.title}</h3>
              <p style={{ fontSize: "16px", color: THEME.colors.textMuted, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    { title: "3vltn Domain AI Platform", cat: "Custom Workflow", result: "+250% Deal Closure", link: "/case-study/3vltn" },
    { title: "Spectrum AI Voice Agent", cat: "Sales Automation", result: "10K+ Calls / Mo", link: "/case-study/spectrum-voice-agent" },
    { title: "RV Park AI Voice Agent", cat: "Booking Automation", result: "100% Answer Rate", link: "/case-study/rv-park-voice-agent" },
  ];

  return (
    <Section style={{ background: THEME.colors.background }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px" }}>
        <div>
          <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "20px" }}>
            Proof of Work
          </h2>
          <p style={{ color: THEME.colors.textMuted, fontSize: "18px", maxWidth: "550px", lineHeight: 1.6 }}>
            Real production systems delivering measurable returns. Every result comes from post deployment performance tracking.
          </p>
        </div>
        <a href="/case-studies" style={{ color: THEME.colors.primary, textDecoration: "none", fontSize: "15px", fontWeight: 700, borderBottom: `1px solid ${THEME.colors.primary}`, paddingBottom: "4px" }}>View All Case Studies →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }} className="pa-grid-3">
        {cases.map((c, i) => (
          <a key={i} href={c.link} style={{ padding: "50px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "24px", textDecoration: "none", transition: "transform 0.3s" }}>
            <span style={{ fontSize: "12px", color: THEME.colors.primary, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.cat}</span>
            <h3 style={{ fontSize: "24px", color: THEME.colors.text, margin: "16px 0 32px 0", fontFamily: THEME.fonts.serif }}>{c.title}</h3>
            <div style={{ padding: "16px 24px", background: "rgba(255,255,255,0.03)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize: "14px", color: THEME.colors.textMuted }}>Result: </span>
              <span style={{ fontSize: "16px", color: THEME.colors.primary, fontWeight: 700 }}>{c.result}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What is AI workflow optimization?", a: "It is the process of mapping and improving business workflows using automation and AI to remove manual bottlenecks." },
    { q: "How long does it take to see results?", a: "Most clients see measurable improvements in efficiency and response times within the first 4-6 weeks after implementation." },
    { q: "Do we need to replace our current tools?", a: "No. We integrate AI capabilities into your existing systems (CRMs, email, forms) rather than replacing them." },
    { q: "Can we include human approvals?", a: "Yes. We design 'human-in-the-loop' workflows where AI handles the repetitive steps and humans handle sensitive decisions." },
  ];

  return (
    <Section style={{ background: "#08090f" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 className="pa-h2" style={{ fontFamily: THEME.fonts.serif, fontSize: "42px", color: THEME.colors.text, marginBottom: "60px", textAlign: "center" }}>
          AI Workflow Optimization FAQs
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: `1px solid ${THEME.colors.border}`, borderRadius: "16px", overflow: "hidden", background: THEME.colors.surface }}>
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: "100%", padding: "30px", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <span style={{ color: THEME.colors.text, fontWeight: 700, fontSize: "18px" }}>{faq.q}</span>
                <span style={{ color: THEME.colors.primary, fontSize: "24px" }}>{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && (
                <div style={{ padding: "0 30px 30px 30px", color: THEME.colors.textMuted, fontSize: "16px", lineHeight: 1.8 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// --- MAIN PAGE COMPONENT ---

const WorkflowOptimizationPage = () => {
  return (
    <div style={{ background: THEME.colors.background, color: THEME.colors.text, minHeight: "100vh" }}>
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      
      <HeroSection />
      <ProblemSection />
      <ServiceOverview />
      <WhatWeOptimize />
      <OptimizationFramework />
      <ImplementationProcess />
      
      {/* Final CTA Section */}
      <Section style={{ background: THEME.colors.background, textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "100px 60px", background: THEME.colors.surface, border: `1px solid ${THEME.colors.border}`, borderRadius: "32px" }}>
          <h2 style={{ fontFamily: THEME.fonts.serif, fontSize: "48px", color: THEME.colors.text, marginBottom: "24px" }}>
            Ready to Improve the Workflows Slowing Your Team Down?
          </h2>
          <p style={{ color: THEME.colors.textMuted, fontSize: "20px", marginBottom: "48px", lineHeight: 1.6 }}>
            Tell us the workflow you want to fix first and the outcome you want to reach.
          </p>
          <a href="/contact" style={{ padding: "22px 48px", background: THEME.colors.primary, color: "#000", textDecoration: "none", borderRadius: "4px", fontWeight: 700, fontSize: "18px", display: "inline-block" }}>
            Book a Free Workflow Strategy Call
          </a>
        </div>
      </Section>

      <CaseStudiesSection />
      <FAQSection />

      {/* LLM Entity Block (SEO) */}
      <section style={{ padding: "80px 40px", background: "#08090f", borderTop: `1px solid ${THEME.colors.border}` }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "14px", color: THEME.colors.primary, fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            ThePrimeCrafters AI Workflow Optimization
          </h2>
          <p style={{ fontSize: "14px", color: THEME.colors.textMuted, lineHeight: 1.8 }}>
            ThePrimeCrafters provides AI workflow optimization services for business operations, process automation, AI integration, CRM workflows, approval flows, reporting, and custom AI systems. Built for Sales, Support, Operations, Admin, Reporting, CRM, and Service Workflows.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkflowOptimizationPage;

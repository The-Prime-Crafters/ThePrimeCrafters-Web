"use client"
import React, { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Business Process Review",
    description: "We begin by auditing what your business actually does — not what you think it does. We map your current workflows, identify the tools your team uses, locate data sources, document manual bottlenecks, understand who touches each process, and establish what a successful outcome looks like. This gives us a factual foundation for every decision that follows.",
    color: "#C9A84C",
  },
  {
    number: "2",
    title: "AI Opportunity Mapping",
    description: "With a clear picture of your operation, we identify every task, decision point, or data flow where AI can add measurable value — whether that means automating a repetitive task, classifying incoming data, summarising outputs, routing requests, or improving the speed and consistency of a response. We prioritise opportunities by impact and feasibility, not by what is technically impressive.",
    color: "#4CA88A",
  },
  {
    number: "3",
    title: "Solution Architecture",
    description: "We design the full technical blueprint for the system: user flows, data input sources, AI model selection, prompt architecture, business logic, integration specifications, permission structures, handoff conditions, and the KPIs we will measure success against. You review and approve the architecture before a single line of code is written.",
    color: "#4C8EC9",
  },
  {
    number: "4",
    title: "Prototype and Build",
    description: "Development happens in structured sprints with weekly client demos so you can see the system taking shape in real time. We build a working prototype, test it against real use cases from your operation, and refine the workflows and logic before moving to full build. Every component is developed to production standards — not throwaway prototypes that have to be rebuilt later.",
    color: "#7C6AC4",
  },
  {
    number: "5",
    title: "Integration and Testing",
    description: "We connect the AI system to your existing technology stack and run structured testing across four dimensions: accuracy of AI outputs, response time under load, handoff reliability between AI and human workflows, and edge case handling. All integrations are tested in a staging environment before they touch your live data or systems. Security considerations are reviewed at this stage.",
    color: "#C94C6A",
    href: "/services/ai-integration",
  },
  {
    number: "6",
    title: "Launch and Optimisation",
    description: "We manage a phased rollout that minimises disruption to your live operation and monitor system performance closely in the days and weeks following launch. Prompts, logic, and workflows are refined based on real operational data. We provide full handover documentation and team training, and remain available for ongoing optimisation as your business evolves.",
    color: "#C97A4C",
    href: "/contact",
  },
];

const ProcessSection: React.FC = () => {
  const [active, setActive] = useState("1");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const activeStep = steps.find((s) => s.number === active) ?? steps[0];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section id="process" aria-labelledby="process-heading" ref={ref} style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Our Process</span>
          </div>
          <h2 id="process-heading" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "600px" }}>
            Our Custom AI Solution Development Process
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "16px", maxWidth: "560px" }}>
            Every system The Prime Crafters builds follows six structured phases — from the first workflow audit through to a live, monitored, optimised deployment. No phase is skipped. No system ships without passing structured testing and client sign-off. Here is exactly what the process looks like.
          </p>

          {/* Phase pills */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px", marginBottom: "48px" }}>
            {steps.map((s) => (
              <span key={s.number} style={{ fontSize: "12px", padding: "5px 14px", borderRadius: "999px", border: `1px solid ${s.color}35`, background: `${s.color}0c`, color: s.color, fontWeight: 500 }}>
                {s.title}
              </span>
            ))}
          </div>

          {/* Tab layout */}
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "24px", alignItems: "start" }}>
            {/* Left tabs */}
            <div role="tablist" aria-label="Development process steps" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {steps.map((step, i) => {
                const isAct = active === step.number;
                return (
                  <button
                    key={step.number}
                    role="tab"
                    aria-selected={isAct}
                    onClick={() => setActive(step.number)}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px", padding: "13px 16px", borderRadius: "10px",
                      background: isAct ? `${step.color}10` : "transparent",
                      border: `1px solid ${isAct ? step.color + "35" : "transparent"}`,
                      cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif",
                      transition: "all 0.2s, opacity 0.5s ease, transform 0.5s ease",
                      opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-12px)",
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: isAct ? `${step.color}20` : "rgba(255,255,255,0.04)", border: `1px solid ${isAct ? step.color + "45" : "rgba(255,255,255,0.08)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: isAct ? step.color : "rgba(240,237,230,0.3)", flexShrink: 0, transition: "all 0.2s" }}>
                      {step.number}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: isAct ? 600 : 400, color: isAct ? "#f5f1e8" : "rgba(240,237,230,0.5)", transition: "color 0.2s" }}>
                      {step.title}
                    </span>
                    {isAct && <span style={{ marginLeft: "auto", fontSize: "13px", color: step.color, opacity: 0.7 }}>→</span>}
                  </button>
                );
              })}
            </div>

            {/* Right panel */}
            <div style={{ background: `${activeStep.color}07`, border: `1px solid ${activeStep.color}30`, borderRadius: "16px", padding: "36px 32px", minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", transition: "background 0.3s, border-color 0.3s" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "42px", fontWeight: 900, color: activeStep.color, lineHeight: 1, opacity: 0.2, letterSpacing: "-0.02em" }}>{activeStep.number}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#f5f1e8", margin: 0, lineHeight: 1.2 }}>
                    {activeStep.number}. {activeStep.title}
                  </h3>
                </div>
                <div style={{ height: "1px", background: `${activeStep.color}20`, marginBottom: "20px" }} />
                <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.65)", lineHeight: 1.85, margin: 0 }}>
                  {activeStep.description}
                </p>
              </div>
              {/* Progress dots */}
              <div style={{ display: "flex", gap: "6px" }}>
                {steps.map((s) => (
                  <button key={s.number} onClick={() => setActive(s.number)} aria-label={`Step ${s.number}`} style={{ height: "3px", flex: active === s.number ? "2" : "1", borderRadius: "999px", background: active === s.number ? activeStep.color : "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", padding: 0, transition: "flex 0.3s, background 0.3s" }} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#C9A84C", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(201,168,76,0.08)", borderRadius: "999px", padding: "12px 28px", textDecoration: "none", letterSpacing: "0.02em" }}>
              Start the Process →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;
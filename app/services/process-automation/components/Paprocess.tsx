"use client";

import React, { useState, useEffect, useRef } from "react";
import { PA_FONTS_LINK, PA_RESPONSIVE_STYLES } from "./shared";

const steps = [
  { number: "1", title: "Workflow Discovery", description: "We start with your real business context — mapping current workflows, tools, handoffs, bottlenecks, and success criteria before designing anything.", color: "#C9A84C" },
  { number: "2", title: "Automation Opportunity Mapping", description: "We identify the highest-impact tasks to automate first, focusing on bottlenecks that create the strongest ROI and fastest operational wins.", color: "#4CA88A" },
  { number: "3", title: "Workflow Architecture and Logic Design", description: "We design the full automation flow: triggers, business rules, AI logic, integrations, permissions, and approval paths.", color: "#4C8EC9" },
  { number: "4", title: "Build, Integrate, and Test", description: "We build the workflow, connect your systems, and test accuracy, handoffs, edge cases, and reliability before launch.", color: "#7C6AC4", href: "/services/ai-integration" },
  { number: "5", title: "Launch With Monitoring", description: "We deploy with controlled rollout and monitor workflow performance so issues are caught early and teams stay confident.", color: "#C94C6A", href: "/contact" },
  { number: "6", title: "Optimize Based on Real Usage", description: "We refine automations using live usage data, team feedback, and performance metrics to improve speed, accuracy, and outcomes over time.", color: "#C97A4C", href: "/services/workflow-optimization" },
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
      <link href={PA_FONTS_LINK} rel="stylesheet" />
      <style>{PA_RESPONSIVE_STYLES}</style>
      <section id="process" aria-labelledby="process-heading" ref={ref} className="pa-section" style={{ fontFamily: "'DM Sans', sans-serif", background: "#08090f", padding: "80px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>Our Process</span>
          </div>
          <h2 id="process-heading" className="pa-h2" style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.15, marginBottom: "12px", maxWidth: "700px" }}>
            Our AI Process Automation Implementation Process
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.5)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "620px" }}>
            Every automation project follows a structured six-step process — from workflow discovery through launch, monitoring, and optimization.
          </p>

          <div className="pa-grid-2" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "24px", alignItems: "start" }}>
            <div role="tablist" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {steps.map((step) => (
                <button key={step.number} role="tab" aria-selected={active === step.number} onClick={() => setActive(step.number)} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", borderRadius: "10px", background: active === step.number ? `${step.color}10` : "transparent", border: `1px solid ${active === step.number ? step.color + "35" : "transparent"}`, cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif", opacity: visible ? 1 : 0, transition: "all 0.2s" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${step.color}18`, border: `1px solid ${step.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: step.color, flexShrink: 0 }}>{step.number}</span>
                  <span style={{ fontSize: "14px", fontWeight: active === step.number ? 600 : 400, color: active === step.number ? "#f5f1e8" : "rgba(240,237,230,0.5)" }}>{step.title}</span>
                </button>
              ))}
            </div>

            <div role="tabpanel" style={{ background: `${activeStep.color}07`, border: `1px solid ${activeStep.color}30`, borderRadius: "16px", padding: "32px", minHeight: "240px" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#f5f1e8", marginBottom: "14px" }}>{activeStep.number}. {activeStep.title}</h3>
              <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.65)", lineHeight: 1.85, margin: 0 }}>{activeStep.description}</p>
              {activeStep.href && (
                <a href={activeStep.href} style={{ display: "inline-block", marginTop: "18px", fontSize: "13px", color: activeStep.color, textDecoration: "none", fontWeight: 500 }}>Learn more →</a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSection;

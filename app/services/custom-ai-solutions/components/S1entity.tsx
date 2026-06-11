"use client"
import React from "react";

const serviceEntities = [
  "AI Automation",
  "AI Integration",
  "Voice Agents",
  "Custom AI Development",
];

const useCaseEntities = [
  "Built for Sales",
  "Operations",
  "Support",
  "Lead Generation",
  "Workflow Optimisation",
];

const EntitySection: React.FC = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <section
        id="entity-signal"
        aria-labelledby="entity-heading"
        style={{ fontFamily: "'DM Sans', sans-serif", background: "#0b0c14", padding: "72px 40px", position: "relative", overflow: "hidden", boxSizing: "border-box" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <span style={{ width: "28px", height: "1px", background: "#C9A84C", display: "block" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 500 }}>About ThePrimeCrafters</span>
          </div>

          {/* H2 */}
          <h2
            id="entity-heading"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#f5f1e8", lineHeight: 1.2, marginBottom: "20px", maxWidth: "700px" }}
          >
            ThePrimeCrafters Builds Practical AI Systems for Business Operations
          </h2>

          {/* Body paragraphs */}
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.55)", lineHeight: 1.85, marginBottom: "20px", maxWidth: "720px" }}>
            The Prime Crafters is a custom AI solutions agency that designs, builds, and deploys AI automation systems for businesses across healthcare, enterprise sales, local services, lead generation, and mobile applications. Work spans AI voice agents, workflow automation, AI chatbots and assistants, CRM and sales automation, AI lead generation systems, and custom AI integrations — all built to production standards and connected directly to the client's existing technology stack.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(240,237,230,0.55)", lineHeight: 1.85, marginBottom: "40px", maxWidth: "720px" }}>
            Every engagement is grounded in real business process analysis, not generic AI application. Systems are measured against specific, numeric KPIs tracked post-deployment. The Prime Crafters does not offer off-the-shelf tools — every system is designed for the client's specific operation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

            {/* Service entities */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#C9A84C", fontWeight: 600, opacity: 0.8, marginBottom: "16px" }}>
                AI Automation · AI Integration · Voice Agents · Custom AI Development
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "7px" }}>
                {serviceEntities.map((e) => (
                  <a
                    key={e}
                    href="/services"
                    style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "999px", border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.07)", color: "#C9A84C", fontWeight: 500, textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s" }}
                    onMouseEnter={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.14)"; }}
                    onMouseLeave={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.07)"; }}
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>

            {/* Use-case entities */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "24px" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#4C8EC9", fontWeight: 600, opacity: 0.8, marginBottom: "16px" }}>
                Built for Sales · Operations · Support · Lead Generation · Workflow Optimisation
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "7px" }}>
                {useCaseEntities.map((e) => (
                  <a
                    key={e}
                    href="/services/workflow-optimization"
                    style={{ fontSize: "12px", padding: "5px 12px", borderRadius: "999px", border: "1px solid rgba(76,142,201,0.25)", background: "rgba(76,142,201,0.07)", color: "#4C8EC9", fontWeight: 500, textDecoration: "none", letterSpacing: "0.02em", transition: "background 0.2s" }}
                    onMouseEnter={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.background = "rgba(76,142,201,0.14)"; }}
                    onMouseLeave={(ev) => { (ev.currentTarget as HTMLAnchorElement).style.background = "rgba(76,142,201,0.07)"; }}
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Internal links row */}
          <div style={{ display: "flex", gap: "16px", marginTop: "28px", flexWrap: "wrap" as const, alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: "rgba(240,237,230,0.3)", letterSpacing: "0.03em" }}>Explore further:</span>
            {[{ label: "Services", href: "/services" }, { label: "Case Studies", href: "/case-studies" }].map((link, i, arr) => (
              <React.Fragment key={link.href}>
                <a href={link.href} style={{ fontSize: "13px", fontWeight: 500, color: "rgba(240,237,230,0.5)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#C9A84C"; }} onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,230,0.5)"; }}>
                  {link.label}
                </a>
                {i < arr.length - 1 && <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "12px" }}>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EntitySection;
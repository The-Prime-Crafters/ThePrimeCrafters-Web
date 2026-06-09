"use client"
import React, { useState } from "react";

const FinalCTASection: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @media (max-width: 768px) {
          .cta-case-section { padding: 56px 20px !important; }
          .cta-case-banner { padding: 32px 24px !important; }
          .cta-case-h2 { font-size: 26px !important; }
        }
        @media (max-width: 480px) {
          .cta-case-section { padding: 44px 16px !important; }
          .cta-case-banner { padding: 24px 18px !important; }
          .cta-case-h2 { font-size: 22px !important; }
          .cta-case-body { font-size: 14px !important; }
        }
      `}</style>
      <section
        id="final-cta"
        aria-labelledby="final-cta-heading"
        className="cta-case-section"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* CTA Banner */}
          <div
            className="cta-case-banner"
            style={{
              background: "#0d0e17",
              border: `1px solid ${hovered ? "#C9A84C" : "rgba(201,168,76,0.55)"}`,
              borderRadius: "4px",
              padding: "48px 52px",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.3s",
              boxShadow: hovered
                ? "0 0 40px rgba(201,168,76,0.08)"
                : "0 0 0px transparent",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Corner accent top-left */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-1px",
                left: "-1px",
                width: "40px",
                height: "40px",
                borderTop: "2px solid #C9A84C",
                borderLeft: "2px solid #C9A84C",
                borderRadius: "4px 0 0 0",
              }}
            />
            {/* Corner accent bottom-right */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-1px",
                right: "-1px",
                width: "40px",
                height: "40px",
                borderBottom: "2px solid #C9A84C",
                borderRight: "2px solid #C9A84C",
                borderRadius: "0 0 4px 0",
              }}
            />

            {/* Inner glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />

            {/* H2 */}
            <h2
              id="final-cta-heading"
              className="cta-case-h2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#f5f1e8",
                marginBottom: "16px",
                lineHeight: 1.2,
                position: "relative",
              }}
            >
              Ready to Build an AI Automation Project Like These?
            </h2>

            {/* Body */}
            <p
              className="cta-case-body"
              style={{
                fontSize: "15px",
                color: "rgba(240,237,230,0.6)",
                lineHeight: 1.75,
                marginBottom: "32px",
                maxWidth: "640px",
                position: "relative",
              }}
            >
              Book a free discovery call. We will audit your current workflows,
              identify your highest-ROI automation opportunities, and show you
              exactly what is possible — with no commitment required.
            </p>

            {/* CTA link */}
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#C9A84C",
                textDecoration: "none",
                letterSpacing: "0.01em",
                position: "relative",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#C9A84C" }}>→</span>
              <span>Book an AI Automation Consultation</span>
              
            </a>

            {/* URL hint */}
            <p
              style={{
                fontSize: "12px",
                color: "rgba(240,237,230,0.25)",
                margin: 0,
                letterSpacing: "0.02em",
                position: "relative",
              }}
            >
              theprimecrafters.com/contact
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
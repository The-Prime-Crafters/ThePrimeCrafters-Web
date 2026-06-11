"use client"
import Link from "next/link";
import React, { useState } from "react";

const CTASection: React.FC = () => {
  const [btnHov, setBtnHov] = useState(false);
  const [linkHov, setLinkHov] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="cta"
        aria-labelledby="cta-heading"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "100px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
          borderTop: "1px solid rgba(201,168,76,0.3)",
          borderBottom: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        {/* Grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            position: "relative",
            textAlign: "center",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#C9A84C",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#C9A84C",
                fontWeight: 500,
              }}
            >
              ThePrimeCrafters
            </span>
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#C9A84C",
                display: "block",
              }}
            />
          </div>

          {/* H2 */}
          <h2
            id="cta-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "42px",
              fontWeight: 900,
              color: "#f5f1e8",
              lineHeight: 1.15,
              marginBottom: "48px",
              letterSpacing: "-0.01em",
            }}
          >
            Ready to Build a Custom AI Solution for Your Business?
          </h2>

          {/* Primary CTA */}
          <Link
            href="/contact"
            onMouseEnter={() => setBtnHov(true)}
            onMouseLeave={() => setBtnHov(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: btnHov ? "#b8923e" : "#C9A84C",
              color: "#08090f",
              padding: "16px 36px",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background 0.2s",
              marginBottom: "24px",
            }}
          >
            Book a Free AI Strategy Call →
          </Link>
{/* Secondary supporting copy */}
<div style={{ marginTop: "8px" }}>
  <p
    style={{
      fontSize: "13px",
      fontWeight: 400,
      color: "rgba(240,237,230,0.4)",
      letterSpacing: "0.02em",
      margin: 0,
    }}
  >
    Tell us what you want to automate, improve, or build. We will review your operation and show you exactly what is possible - in a free 20-minute AI strategy call with no commitment required.
  </p>
</div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
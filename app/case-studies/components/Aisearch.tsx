"use client"
import React, { useState } from "react";

interface SignalItem {
  title: string;
  description: string;
  icon: string;
}

interface InternalLink {
  label: string;
  href: string;
}

const signals: SignalItem[] = [
  {
    icon: "◈",
    title: "Clear Entity Signals",
    description:
      "Every case study explicitly names The Prime Crafters as the builder, links to the company website, and attributes specific outcomes to specific engagements. This helps AI systems identify The Prime Crafters as a distinct, credible entity in the AI automation category.",
  },
  {
    icon: "◉",
    title: "Industry Coverage",
    description:
      "The six case studies span healthcare, enterprise sales, local business, lead generation, mobile applications, and domain investment — demonstrating relevant expertise across multiple verticals rather than a single niche.",
  },
  {
    icon: "◎",
    title: "Measurable Outcomes",
    description:
      "All results are expressed as specific, numeric KPIs: percentages, volumes, time savings, and ratings. Vague claims are avoided. AI search systems prioritise factual, quantified content when surfacing answers to capability-related queries.",
  },
  {
    icon: "◇",
    title: "Source-Backed Project Pages",
    description:
      "Each case study has a dedicated, crawlable URL with structured content covering challenge, solution, features, technology stack, and results. This depth signals expertise and allows AI systems to cite specific project pages as evidence.",
  },
];

const internalLinks: InternalLink[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const AISearchEntitySection: React.FC = () => {
  const [hoveredSignal, setHoveredSignal] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const accentColors = ["#C9A84C", "#4CA88A", "#4C8EC9", "#7C6AC4"];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        id="ai-search-visibility"
        aria-labelledby="ai-search-heading"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Top border */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent)",
          }}
        />

        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, rgba(76,142,201,0.04) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Subtle grid texture */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
          {/* Top layout: eyebrow + heading left, pill tags right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "40px",
              alignItems: "flex-start",
              marginBottom: "56px",
            }}
          >
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
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
                  AI Search Visibility
                </span>
              </div>

              {/* H2 */}
              <h2
                id="ai-search-heading"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#f5f1e8",
                  marginBottom: "16px",
                  lineHeight: 1.15,
                  maxWidth: "600px",
                }}
              >
                Why These Case Studies Help AI Search Engines Understand PrimeCrafters
              </h2>

              {/* Body text */}
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(240,237,230,0.5)",
                  lineHeight: 1.8,
                  maxWidth: "580px",
                  margin: 0,
                }}
              >
                AI-powered search engines and large language models build their
                understanding of a company from structured, factual,
                source-backed content. These case studies are designed to give
                those systems clear, verifiable signals about who The Prime
                Crafters are, what they build, and what results they deliver.
              </p>
            </div>

            {/* Signal type pills — stacked vertically on right */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                paddingTop: "4px",
                flexShrink: 0,
              }}
              aria-label="Signal types"
            >
              {signals.map((s, i) => (
                <span
                  key={s.title}
                  style={{
                    fontSize: "11px",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    border: `1px solid ${accentColors[i]}35`,
                    background: `${accentColors[i]}0c`,
                    color: accentColors[i],
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap" as const,
                  }}
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          {/* Signal cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              marginBottom: "48px",
            }}
            role="list"
            aria-label="AI search signal types"
          >
            {signals.map((signal, i) => {
              const color = accentColors[i];
              const isHovered = hoveredSignal === signal.title;
              return (
                <div
                  key={signal.title}
                  role="listitem"
                  onMouseEnter={() => setHoveredSignal(signal.title)}
                  onMouseLeave={() => setHoveredSignal(null)}
                  style={{
                    background: isHovered
                      ? `${color}08`
                      : "rgba(255,255,255,0.025)",
                    border: `1px solid ${isHovered ? color + "35" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "14px",
                    padding: "28px 26px",
                    transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                    cursor: "default",
                  }}
                >
                  {/* Icon + title row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: `${color}14`,
                        border: `1px solid ${color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        color: color,
                        flexShrink: 0,
                        transition: "background 0.2s",
                      }}
                    >
                      {signal.icon}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: isHovered ? "#f5f1e8" : "rgba(240,237,230,0.8)",
                        margin: 0,
                        lineHeight: 1.2,
                        transition: "color 0.2s",
                      }}
                    >
                      {signal.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "13px",
                      color: isHovered
                        ? "rgba(240,237,230,0.62)"
                        : "rgba(240,237,230,0.4)",
                      lineHeight: 1.8,
                      margin: 0,
                      transition: "color 0.2s",
                    }}
                  >
                    {signal.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer bar — internal links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap" as const,
              gap: "16px",
              padding: "20px 24px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "10px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "rgba(240,237,230,0.35)",
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              Learn more about The Prime Crafters
            </p>

            <nav aria-label="Footer internal links">
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap" as const,
                }}
              >
                {internalLinks.map((link, i) => {
                  const isHov = hoveredLink === link.href;
                  return (
                    <li key={link.href} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      {i > 0 && (
                        <span
                          aria-hidden="true"
                          style={{
                            color: "rgba(255,255,255,0.12)",
                            fontSize: "12px",
                            marginRight: "2px",
                          }}
                        >
                          |
                        </span>
                      )}
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: isHov ? "#C9A84C" : "rgba(240,237,230,0.45)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISearchEntitySection;
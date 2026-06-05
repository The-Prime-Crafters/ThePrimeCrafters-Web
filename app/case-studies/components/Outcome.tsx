"use client"
import React, { useEffect, useRef, useState } from "react";

interface OutcomeMetric {
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
  category: string;
  sourceProject: string;
  sourceHref: string;
  accentColor: string;
  sparkline: number[];
}

const outcomes: OutcomeMetric[] = [
  {
    value: "+250%",
    numericValue: 250,
    suffix: "%",
    prefix: "+",
    label: "Higher Deal Closure Rate",
    category: "Higher Conversions",
    sourceProject: "3vltn Domain AI Platform",
    sourceHref: "https://www.theprimecrafters.com/case-study/3vltn",
    accentColor: "#C9A84C",
    sparkline: [20, 35, 30, 50, 55, 70, 90, 110, 145, 180, 220, 250],
  },
  {
    value: "70%",
    numericValue: 70,
    suffix: "%",
    prefix: "",
    label: "Lower Operational Costs",
    category: "Lower Costs",
    sourceProject: "Spectrum AI Voice Agent",
    sourceHref:
      "https://www.theprimecrafters.com/case-study/spectrum-voice-agent",
    accentColor: "#4CA88A",
    sparkline: [100, 95, 88, 82, 75, 68, 62, 55, 48, 40, 35, 30],
  },
  {
    value: "65%",
    numericValue: 65,
    suffix: "%",
    prefix: "",
    label: "Faster Patient Intake",
    category: "Faster Operations",
    sourceProject: "lmn8 Ketamine Therapy",
    sourceHref:
      "https://www.theprimecrafters.com/case-study/lmn8-ketamine-therapy",
    accentColor: "#4C8EC9",
    sparkline: [100, 92, 84, 78, 70, 62, 56, 50, 45, 40, 38, 35],
  },
  {
    value: "+120%",
    numericValue: 120,
    suffix: "%",
    prefix: "+",
    label: "More Qualified Leads",
    category: "More Qualified Leads",
    sourceProject: "AI Lead Generation Tools",
    sourceHref:
      "https://www.theprimecrafters.com/case-study/lead-generation-tools",
    accentColor: "#C94C6A",
    sparkline: [10, 18, 22, 30, 40, 52, 65, 78, 90, 100, 110, 120],
  },
  {
    value: "+85%",
    numericValue: 85,
    suffix: "%",
    prefix: "+",
    label: "Booking Conversion Rate",
    category: "Higher Conversions",
    sourceProject: "RV Park Voice Agent",
    sourceHref:
      "https://www.theprimecrafters.com/case-study/rv-park-voice-agent",
    accentColor: "#7C6AC4",
    sparkline: [15, 22, 28, 35, 42, 50, 58, 65, 71, 77, 82, 85],
  },
  {
    value: "90%",
    numericValue: 90,
    suffix: "%",
    prefix: "",
    label: "Time Saved on Lead Work",
    category: "Faster Operations",
    sourceProject: "AI Lead Generation Tools",
    sourceHref:
      "https://www.theprimecrafters.com/case-study/lead-generation-tools",
    accentColor: "#C97A4C",
    sparkline: [5, 15, 25, 38, 48, 58, 65, 72, 78, 84, 88, 90],
  },
];

const outcomeCategories = [
  "Higher Conversions",
  "Lower Costs",
  "Faster Operations",
  "More Qualified Leads",
];

function Sparkline({
  data,
  color,
  visible,
}: {
  data: number[];
  color: string;
  visible: boolean;
}) {
  const w = 120;
  const h = 40;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  const polyline = pts.join(" ");
  const area =
    `${pts[0].split(",")[0]},${h} ` +
    pts.join(" ") +
    ` ${pts[pts.length - 1].split(",")[0]},${h}`;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.3s" }}
    >
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={area}
        fill={`url(#grad-${color.replace("#", "")})`}
      />
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function useCountUp(target: number, visible: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return count;
}

const OutcomeCard: React.FC<{ metric: OutcomeMetric; visible: boolean }> = ({
  metric,
  visible,
}) => {
  const [hovered, setHovered] = useState(false);
  const count = useCountUp(metric.numericValue, visible);

  return (
    <a
      href={metric.sourceHref}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: hovered
          ? `${metric.accentColor}0d`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? metric.accentColor + "40" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "14px",
        padding: "28px 24px",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        transition: "background 0.25s, border-color 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        opacity: visible ? 1 : 0,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${metric.value} ${metric.label} — ${metric.sourceProject}`}
    >
      {/* Category tag */}
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: metric.accentColor,
          fontWeight: 600,
          opacity: 0.85,
        }}
      >
        {metric.category}
      </span>

      {/* Value + Sparkline row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "48px",
            fontWeight: 900,
            color: metric.accentColor,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {metric.prefix}
          {count}
          {metric.suffix}
        </span>
        <Sparkline
          data={metric.sparkline}
          color={metric.accentColor}
          visible={visible}
        />
      </div>

      {/* Label */}
      <p
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#f5f1e8",
          lineHeight: 1.35,
          margin: 0,
        }}
      >
        {metric.label}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
        }}
      />

      {/* Source */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            color: "rgba(240,237,230,0.4)",
          }}
        >
          {metric.sourceProject}
        </span>
        <span
          style={{
            fontSize: "13px",
            color: metric.accentColor,
            transition: "transform 0.2s",
            display: "inline-block",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}
        >
          →
        </span>
      </div>
    </a>
  );
};

const OutcomeSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <section
        ref={ref}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#08090f",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
        aria-labelledby="outcome-heading"
        id="outcomes"
      >
        {/* Decorative borders */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 10% 50%, rgba(201,168,76,0.04) 0%, transparent 55%), radial-gradient(ellipse at 90% 30%, rgba(76,142,201,0.03) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}
        >
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
                textTransform: "uppercase",
                color: "#C9A84C",
                fontWeight: 500,
              }}
            >
              Business Impact
            </span>
          </div>

          {/* H2 */}
          <h2
            id="outcome-heading"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#f5f1e8",
              marginBottom: "10px",
              lineHeight: 1.15,
            }}
          >
            Results PrimeCrafters Delivered
          </h2>

          {/* H3 */}
          <p
            style={{
              fontSize: "14px",
              color: "rgba(240,237,230,0.45)",
              marginBottom: "48px",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Higher Conversions · Lower Costs · Faster Operations · More
            Qualified Leads
          </p>

          {/* Category legend */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "40px",
            }}
            role="list"
            aria-label="Outcome categories"
          >
            {outcomeCategories.map((cat) => {
              const match = outcomes.find((o) => o.category === cat);
              return (
                <span
                  key={cat}
                  role="listitem"
                  style={{
                    fontSize: "12px",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    border: `1px solid ${match?.accentColor ?? "#C9A84C"}40`,
                    background: `${match?.accentColor ?? "#C9A84C"}10`,
                    color: match?.accentColor ?? "#C9A84C",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {cat}
                </span>
              );
            })}
          </div>

          {/* Dashboard Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "18px",
            }}
            role="list"
            aria-label="Outcome metrics"
          >
            {outcomes.map((metric, i) => (
              <div
                key={metric.label}
                role="listitem"
                style={{
                  transitionDelay: `${i * 90}ms`,
                  transition: "opacity 0.5s ease",
                  opacity: visible ? 1 : 0,
                }}
              >
                <OutcomeCard metric={metric} visible={visible} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OutcomeSection;
"use client";

import { useEffect, useRef } from "react";

const features = [
  { icon: "✦", label: "Custom AI Systems" },
  { icon: "⚡", label: "Fast Implementation" },
  { icon: "◈", label: "Dedicated Support" },
  { icon: "⟳", label: "Workflow Automation" },
];

const floatingNodes = [
  { top: "12%", left: "8%", size: "w-2 h-2", delay: "0s", opacity: "opacity-40" },
  { top: "25%", right: "6%", size: "w-3 h-3", delay: "0.8s", opacity: "opacity-30" },
  { top: "60%", left: "4%", size: "w-1.5 h-1.5", delay: "1.4s", opacity: "opacity-50" },
  { top: "75%", right: "10%", size: "w-2 h-2", delay: "0.4s", opacity: "opacity-35" },
  { top: "45%", left: "15%", size: "w-1 h-1", delay: "1.8s", opacity: "opacity-60" },
  { top: "35%", right: "18%", size: "w-2.5 h-2.5", delay: "1.1s", opacity: "opacity-25" },
];

export default function ContactHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const points = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - dist / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,175,55,0.25)";
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pt-[clamp(7rem,12vw,11rem)] pb-[clamp(4rem,8vw,8rem)] min-h-[90vh] flex items-center">

      {/* === CANVAS NETWORK BG === */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* === RADIAL GLOWS === */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.13),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vw] bg-[var(--gold-500)]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* === FLOATING NODES === */}
      {floatingNodes.map((node, i) => (
        <div
          key={i}
          className={`absolute ${node.size} ${node.opacity} rounded-full bg-[var(--gold-500)] animate-pulse pointer-events-none`}
          style={{
            top: node.top,
            left: "left" in node ? node.left : undefined,
            right: "right" in node ? (node as any).right : undefined,
            animationDelay: node.delay,
          }}
        />
      ))}

      {/* === GRID TEXTURE === */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4vw_4vw] pointer-events-none" />

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto max-w-5xl text-center w-full">

        {/* heading */}
        <h1
          className="mt-16 font-bold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60"
          style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200">
            Us
          </span>
        </h1>

        {/* subtext */}
        <p
          className="mx-auto mt-6 max-w-2xl leading-relaxed text-[var(--text-secondary)]"
          style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)" }}
        >
          Tell us about your business, your bottlenecks, or your growth goals — and
          we will show you exactly how AI can automate your operations, eliminate
          manual work, and help you scale faster.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/contact#consultation" className="group relative inline-flex items-center gap-2 rounded-2xl bg-[var(--gold-500)] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] text-sm md:text-base">
            Book Free Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <a href="/contact#team" className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border-subtle)] bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[var(--gold-500)]/40 hover:bg-white/10 text-sm md:text-base">
            Talk To Our Team
          </a>
        </div>

        {/* feature pills */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {features.map((item) => (
            <div
              key={item.label}
              className="group relative rounded-2xl border border-[var(--border-subtle)] bg-white/5 backdrop-blur-xl p-4 text-sm text-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-500)]/40 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]" />
              <div className="relative flex flex-col items-center gap-2">
                <span className="text-[var(--gold-500)] text-lg">{item.icon}</span>
                <span className="text-xs md:text-sm font-medium text-center leading-snug">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* trust line */}
        <p className="mt-8 text-xs text-[var(--text-secondary)] opacity-50 tracking-wide">
          Deployment-ready AI infrastructure · 2–8 week implementation · Results from day one
        </p>

      </div>
    </section>
  );
}
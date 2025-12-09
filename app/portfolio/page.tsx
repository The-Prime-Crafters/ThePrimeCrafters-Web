"use client";

import React from "react";

export default function PortfolioPage() {
  const projects = [
    {
      title: "3vltn",
      category: "Domain Investment Platform",
      description:
        "A premier domain selling and purchasing platform tailored for domain investors. 3vltn leverages advanced AI to revolutionize how domains are traded.",
      features: [
        "AI-driven marketing campaigns focused on domain sales",
        "Autonomous AI email agent that negotiates and closes deals with customers",
        "Comprehensive dashboard for portfolio management",
      ],
      caseStudyLink: "#",
    },
    {
      title: "lmn8 Ketamine Therapy AI",
      category: "Healthcare & AI",
      description:
        "An innovative platform connecting ketamine therapy clinics with patients, streamlining the intake and matching process through artificial intelligence.",
      features: [
        "AI-powered patient-clinic matching",
        "Seamless appointment scheduling and management",
        "Secure patient data handling and pre-screening",
      ],
      caseStudyLink: "#",
    },
    {
      title: "Faithful Companion",
      category: "Mobile Application",
      description:
        "A dedicated spiritual companion app for the Christian community, offering features similar to popular Islamic apps but tailored for Christian faith practices.",
      features: [
        "Daily devotionals and scripture readings",
        "Community prayer requests and support",
        "Church finder and event integration",
      ],
      caseStudyLink: "#",
    },
    {
      title: "RV Park AI Voice Agent",
      category: "Voice AI Automation",
      description:
        "A specialized AI voice agent designed for RV parks across the US, handling reservations, inquiries, and customer service calls 24/7.",
      features: [
        "Automated reservation handling and booking",
        "FAQ answering for park amenities and rules",
        "Seamless integration with park management systems",
      ],
      caseStudyLink: "#",
    },
    {
      title: "Spectrum Voice Agent",
      category: "Enterprise Sales AI",
      description:
        "A high-performance voice agent developed for Spectrum to automate sales calls, qualify leads, and close deals efficiently.",
      features: [
        "Advanced natural language processing for sales conversations",
        "Real-time deal closing and processing",
        "Custom interface for monitoring and analytics",
      ],
      caseStudyLink: "#",
    },
    {
      title: "Lead Generation Tools",
      category: "Marketing Tools",
      description:
        "A suite of powerful lead generation tools designed to identify, qualify, and engage potential prospects across various industries.",
      features: [
        "Multi-channel data scraping and aggregation",
        "Automated outreach and follow-up sequences",
        "Integration with major CRMs",
      ],
      caseStudyLink: "#",
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[var(--gold-500)] selection:text-black">
      {/* Print Button - Hidden in Print */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="btn-primary flex items-center gap-2 shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Save as PDF
        </button>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 print:py-0 print:max-w-full">
        {/* Header */}
        <header className="mb-20 text-center print:mb-10 print:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient-gold">Our Portfolio</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto print:mx-0 print:text-[var(--dark-600)]">
            Showcasing our expertise in AI, Web Development, and Digital Innovation.
          </p>
          <div className="h-1 w-24 bg-[var(--gold-500)] mx-auto mt-8 rounded-full print:mx-0 print:mt-4"></div>
        </header>

        {/* Projects Grid */}
        <div className="space-y-24 print:space-y-12">
          {projects.map((project, index) => (
            <section
              key={index}
              className="group relative break-inside-avoid print:break-inside-avoid"
            >
              <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)] hover:border-[var(--gold-500)] transition-colors duration-500 print:border-gray-300 print:bg-white print:shadow-none">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-[var(--gold-400)] text-sm font-bold tracking-wider uppercase mb-2 block print:text-black">
                        {project.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] print:text-black">
                        {project.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed print:text-gray-700">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <h3 className="text-[var(--text-primary)] font-semibold text-lg print:text-black">Key Features</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] print:text-gray-600">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gold-500)] flex-shrink-0 print:bg-black"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 print:hidden">
                      <a
                        href={project.caseStudyLink}
                        className="inline-flex items-center gap-2 text-[var(--gold-400)] hover:text-[var(--gold-300)] font-semibold transition-colors group-hover:translate-x-2 duration-300"
                      >
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Screenshot Placeholder */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-[var(--surface-elevated)] border border-[var(--border-subtle)] group-hover:border-[var(--gold-500)]/30 transition-all duration-500 shadow-2xl print:bg-gray-100 print:border-gray-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--gold-500)] transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-16 h-16 mb-4 opacity-50"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-widest uppercase opacity-70">
                        Project Screenshot
                      </span>
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent opacity-60 print:hidden"></div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-32 text-center text-[var(--text-muted)] print:mt-16 print:text-gray-500">
          <p>© {new Date().getFullYear()} The Prime Crafters. All Rights Reserved.</p>
        </footer>
      </main>

      {/* Print Styles Injection */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .glass-card {
            background: white !important;
            border: 1px solid #e5e5e5 !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
          }
          .text-gradient-gold {
            background: none !important;
            -webkit-text-fill-color: black !important;
            color: black !important;
          }
          /* Ensure text is readable on white */
          p, li, span {
            color: #333 !important;
          }
          h1, h2, h3 {
            color: #000 !important;
          }
        }
      `}</style>
    </div>
  );
}

import React from "react";

/* ✅ SEO FIX: Canonical + Robots */
export function generateMetadata() {
  return {
    title: "Portfolio | The Prime Crafters",
    description:
      "Explore our portfolio of AI, automation, and web development projects delivered for clients across industries.",

    alternates: {
      canonical: "https://www.theprimecrafters.com/portfolio",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

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
        "A dedicated spiritual companion app for the Christian community.",
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
        "AI voice agent for RV parks handling reservations and inquiries 24/7.",
      features: [
        "Automated reservation handling",
        "FAQ answering",
        "System integrations",
      ],
      caseStudyLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Our Portfolio</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Showcasing our expertise in AI, Web Development, and Digital Innovation.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <ul>
                {project.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-20 text-center text-sm">
          © {new Date().getFullYear()} The Prime Crafters
        </footer>
      </main>
    </div>
  );
}
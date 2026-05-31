const tocItems = [
  { id: "agreement", label: "Agreement to These Terms" },
  { id: "about", label: "About The Prime Crafters Services" },
  { id: "website-use", label: "Use of Our Website" },
  { id: "consultations", label: "Consultations, Proposals, and Project Requests" },
  { id: "client-responsibilities", label: "Client Responsibilities" },
  { id: "ai-services", label: "AI Automation and Integration Services" },
  { id: "payments", label: "Payments, Scope, and Project Changes" },
  { id: "ip", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Tools and Platforms" },
  { id: "no-guarantee", label: "No Guaranteed Results" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "updates", label: "Updates to These Terms" },
  { id: "contact", label: "Contact Us About These Terms" },
];

export default function TermsTableOfContents() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-sm uppercase tracking-wider text-[var(--gold-400)] mb-4 font-semibold">
            On This Page
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--gold-500)] transition-colors py-1 flex items-center gap-2"
              >
                <span className="text-[var(--gold-500)] opacity-60">→</span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
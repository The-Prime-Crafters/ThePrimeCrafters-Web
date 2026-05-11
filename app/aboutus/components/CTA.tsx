import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center glass-card rounded-[2rem] p-16 border border-[var(--border-subtle)]">
        <span className="text-[var(--gold-400)] uppercase tracking-widest text-sm">
          Ready To Automate Your Business?
        </span>

        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
          Let’s Build Your AI Infrastructure
        </h2>

        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-10">
          Scale operations, automate workflows, and improve customer experience
          with AI systems built specifically for your business.
        </p>

        <Link
          href="/#contact"
          className="inline-flex px-8 py-4 rounded-2xl bg-[var(--gold-500)] text-black font-semibold hover:scale-105 transition"
        >
          Schedule Consultation
        </Link>
      </div>
    </section>
  );
}
import Link from "next/link";
const services = [
  {
    title: "AI Voice Agents",
    description:
      "AI-powered voice systems for customer support, sales, and lead qualification — running 24/7 without human intervention.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive operations and streamline business workflows with systems built around your exact processes.",
  },
  {
    title: "AI Chatbots",
    description:
      "Custom chatbot systems for lead generation, customer engagement, and support — deployed anywhere your customers are.",
  },
  {
    title: "Custom Integrations",
    description:
      "Connect AI systems seamlessly with your CRMs, APIs, databases, and existing business infrastructure.",
  },
  
];

export default function ServicesGrid() {
  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">
      
      {/* Background energy layer */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[25vw] h-[25vw] bg-[var(--gold-500)]/10 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,5rem)]">
          

          <h2
            className="font-bold mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-yellow-200"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            What We Offer
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
            We design and build custom AI systems across four core service areas — each engineered to eliminate manual work, reduce costs, and scale your operations intelligently.
          </p>
        </div>

        {/* Grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[clamp(1rem,2vw,2rem)]">          
 

{services.map((service, index) => (
  <div
    key={index}
    className="group relative rounded-3xl border border-[var(--border-subtle)] glass-card p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_60%)]" />

    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--gold-500)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
      <span className="text-[var(--gold-500)] text-xl md:text-2xl">✦</span>
    </div>

    <h3 className="relative text-lg md:text-xl font-semibold mb-3 group-hover:text-[var(--gold-400)] transition">
      {service.title}
    </h3>

    <p className="relative text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
      {service.description}
    </p>

    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--gold-500)]/40 group-hover:scale-[2] transition" />
  </div>
))}<Link href="/services/custom-ai-solutions" className="group">
  <div className="relative rounded-3xl border border-[var(--gold-500)]/40 glass-card p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center items-center text-center">
    
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),transparent_60%)]" />

    <h3 className="relative text-lg md:text-xl font-semibold mb-3 text-[var(--gold-400)]">
      Custom AI Solutions
    </h3>

    <p className="relative text-sm md:text-base text-[var(--text-secondary)] mb-6">
      Explore tailored AI systems built specifically for your business needs.
    </p>

    <span className="relative text-[var(--gold-400)] font-medium">
      View Solutions →
    </span>
  </div>
</Link>
        </div>
      </div>
    </section>
  );
}
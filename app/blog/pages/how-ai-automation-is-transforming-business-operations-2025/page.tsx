import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {  
  alternates: { canonical: 'https://www.theprimecrafters.com/blog/pages/how-ai-automation-is-transforming-business-operations-2025' },
  openGraph: {
    url: 'https://www.theprimecrafters.com/blog/pages/how-ai-automation-is-transforming-business-operations-2025',
    type: 'article',
  },
}

export default function AIAutomationTransformingBusiness() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── HERO / TITLE ── */}
        <section className="max-w-[760px] mx-auto px-6 pt-36 pb-10">

          <nav className="flex items-center gap-2 text-sm text-white mb-8 uppercase tracking-widest font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#D4AF37]">AI Automation</span>
          </nav>

          <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-black bg-[#D4AF37] px-4 py-1.5 rounded-full mb-6">
            AI Automation
          </span>

          <h1
            className="text-[44px] md:text-[56px] font-bold text-white leading-[1.2] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            How AI Automation Is Transforming Business Operations in 2025
          </h1>

          <div className="flex flex-wrap items-center gap-5 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>A</span>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Amanullah Naqvi</p>
                <p className="text-white/50 text-sm">Founder, The Prime Crafters</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50 text-sm">
              <span>June 26, 2025</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>10 min read</span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="max-w-[760px] mx-auto px-6 py-10 space-y-7">

          <p className="text-white text-xl leading-[1.7]">
            2025 is the year AI automation stopped being optional. Across every industry — from e-commerce
            to professional services to healthcare — businesses are replacing manual, repetitive workflows
            with intelligent systems that run 24/7, make context-aware decisions, and get better over time.
          </p>

          <p className="text-white text-lg leading-[1.6]">
            This isn't hype. It's a structural shift in how companies operate. And the gap between
            businesses that have adopted AI automation and those that haven't is widening every quarter.
          </p>

          <div className="space-y-4 pt-3">
            <h2
              className="text-[30px] md:text-[36px] font-bold text-white leading-[1.3]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Shift From Rule-Based to Intelligent Automation
            </h2>
            <p className="text-white text-lg leading-[1.6]">
              Traditional automation — the kind built on rigid if/then logic — has existed for decades.
              It works well for perfectly predictable tasks. But the moment something unexpected happens,
              it breaks.
            </p>
            <p className="text-white text-lg leading-[1.6]">
              AI automation is fundamentally different. Large language models and AI agents can interpret
              context, handle ambiguity, draft nuanced responses, and make judgment calls — things that
              previously required a human in the loop. This is why 2025 feels different: we crossed the
              threshold where AI can handle real business complexity, not just toy examples.
            </p>
          </div>

          <div className="border-l-4 border-[#D4AF37] pl-5 py-1 my-2">
            <p className="text-white text-xl leading-[1.6] italic font-medium">
              "The businesses winning in 2025 aren't necessarily the biggest or best-funded —
              they're the ones that automated the right things first."
            </p>
          </div>

          <div className="space-y-6 pt-3">
            <h2
              className="text-[30px] md:text-[36px] font-bold text-white leading-[1.3]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              5 Operations Being Transformed Right Now
            </h2>

            <div className="space-y-7">
              {[
                {
                  num: '01',
                  title: 'Lead Qualification & Sales Outreach',
                  body: 'AI agents now score inbound leads in real time, enrich contact data, send personalised follow-up sequences, and route hot leads directly to a sales rep — all without a human touching it. Companies using AI-powered outreach report 3–5x more qualified conversations per rep per week.',
                },
                {
                  num: '02',
                  title: 'Customer Support at Scale',
                  body: 'LLM-powered support agents resolve 60–80% of tier-1 tickets automatically — returns, order status, FAQs, account changes. The remaining 20% that needs a human gets routed with full context already attached. Average handle time drops by over 50%.',
                },
                {
                  num: '03',
                  title: 'Content & Marketing Workflows',
                  body: 'AI drafts blog posts, ad copy, email sequences, and social content from a brief. Human editors review and approve. What used to take a team a week now takes a day. Output volume increases 4–10x with the same headcount.',
                },
                {
                  num: '04',
                  title: 'Internal Reporting & Business Intelligence',
                  body: 'Instead of an analyst spending hours pulling data from five different tools, an AI agent does it automatically and delivers a clean summary every Monday morning. Decision-makers get insights faster with no manual effort.',
                },
                {
                  num: '05',
                  title: 'Onboarding & Operations',
                  body: "New client onboarding, employee onboarding, document processing, contract review — AI handles the heavy lifting. Tasks that took days get done in minutes. Error rates drop because AI doesn't get tired or make copy-paste mistakes.",
                },
              ].map(item => (
                <div key={item.num} className="flex gap-5">
                  <span
                    className="text-[#D4AF37] text-4xl font-bold leading-none flex-shrink-0 opacity-35 mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.num}
                  </span>
                  <div>
                    <h3
                      className="text-[22px] md:text-[26px] font-bold text-white leading-[1.4] mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white text-lg leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-3">
            <h2
              className="text-[30px] md:text-[36px] font-bold text-white leading-[1.3]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Cost of Waiting
            </h2>
            <p className="text-white text-lg leading-[1.6]">
              Every month a business delays AI adoption, its competitors are getting faster, leaner, and
              more responsive. The ROI on AI automation compounds — a system built today will have six
              months of data and refinement by the time a competitor starts building theirs.
            </p>
            <p className="text-white text-lg leading-[1.6]">
              The barrier isn't cost. A well-scoped automation project typically pays for itself within
              60–90 days. The real barrier is not knowing where to start or how to build it properly.
            </p>
          </div>

          <div className="space-y-4 pt-3">
            <h2
              className="text-[30px] md:text-[36px] font-bold text-white leading-[1.3]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How to Get Started
            </h2>
            <p className="text-white text-lg leading-[1.6]">
              The highest-leverage first step is a simple audit: identify the top three most repetitive,
              high-volume tasks in your business. For most companies, at least one of them is automatable
              with AI today.
            </p>
            <ul className="space-y-3">
              {[
                "Pick one process — don't try to boil the ocean.",
                'Define what "done" looks like so the AI has a clear output to hit.',
                'Build a minimum viable version and measure time saved vs. baseline.',
                'Iterate and expand once you have proof it works.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <p className="text-white text-lg leading-[1.6]">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0f0f0f] border border-[rgba(212,175,55,0.2)] rounded-2xl p-7 md:p-9 mt-4">
            <p className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to put AI to work in your business?
            </p>
            <p className="text-white text-base leading-[1.6] mb-5">
              Book a free 20-minute strategy call. We'll identify your highest-ROI automation opportunity
              and show you exactly what it would take to build it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </article>

        {/* ── AUTHOR BIO ── */}
        <section className="max-w-[760px] mx-auto px-6 pb-16">
          <div className="bg-[#0f0f0f] border border-white/[0.07] rounded-2xl p-7 md:p-9">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-4 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.25em]">About the Author</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.2)] to-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-bold text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>A</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-1">
                  <div>
                    <h3 className="text-white text-lg font-semibold">Amanullah Naqvi</h3>
                    <p className="text-white/50 text-sm">Founder & CTO, The Prime Crafters</p>
                  </div>
                  {/* LinkedIn — right-hand side */}
                  
                    <a href="https://www.linkedin.com/in/amanullah-naqvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] border border-[rgba(212,175,55,0.25)] rounded-full px-4 py-2 hover:bg-[rgba(212,175,55,0.08)] transition-colors self-start sm:self-auto flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <p className="text-white text-base leading-[1.6] mt-3">
                  Amanullah builds custom AI automation systems for businesses that want to scale without
                  scaling headcount. He leads The Prime Crafters — an AI agency focused on practical,
                  high-ROI automation solutions for SMBs and growth-stage companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM NAV ── */}
        <div className="max-w-[760px] mx-auto px-6 pb-20 flex items-center justify-between flex-wrap gap-4 border-t border-white/[0.06] pt-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#D4AF37] text-base font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white border border-white/15 px-4 py-2 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Manage in Studio
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
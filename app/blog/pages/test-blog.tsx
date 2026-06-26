import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Blog | The Prime Crafters',
  description: 'A test blog post.',
}

export default function TestBlog() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── HERO / TITLE AREA ── */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 pt-36 pb-12">

          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white mb-10 uppercase tracking-widest font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#D4AF37]">Test Blog</span>
          </nav>

          {/* category chip */}
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-black bg-[#D4AF37] px-4 py-1.5 rounded-full mb-8">
            AI Automation
          </span>

          {/* title */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What Is AI Automation? The Complete 2026 Guide for Business Owners
          </h1>

          {/* meta row */}
          <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-bold text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>A</span>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Amanullah Naqvi</p>
                <p className="text-white/50 text-sm">Founder, The Prime Crafters</p>
              </div>
            </div>
            <div className="flex items-center gap-5 text-white/50 text-sm">
              <span>June 26, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>8 min read</span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ── */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-10">

          {/* intro */}
          <p className="text-white/80 text-xl md:text-2xl leading-[1.75] font-light">
            AI automation is no longer a buzzword reserved for enterprise companies with massive budgets.
            In 2026, it's the single biggest lever that small and mid-sized businesses can pull to scale
            operations without scaling headcount.
          </p>

          {/* section */}
          <div className="space-y-5">
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What Is AI Automation?
            </h2>
            <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
              AI automation refers to using artificial intelligence to execute tasks that previously required
              human judgment — things like drafting emails, qualifying leads, scheduling meetings, generating
              reports, and routing support tickets. Unlike traditional automation which follows rigid rules,
              AI automation adapts to context and improves over time.
            </p>
            <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
              The key difference: rule-based automation breaks the moment something unexpected happens.
              AI automation handles the edge cases.
            </p>
          </div>

          {/* callout block */}
          <div className="border-l-4 border-[#D4AF37] pl-6 py-2">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
              "Businesses that adopt AI automation now aren't just getting more efficient —
              they're building a structural advantage that compounds every quarter."
            </p>
          </div>

          {/* section */}
          <div className="space-y-5">
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How Are Businesses Using It?
            </h2>
            <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
              The most common use cases we see across our clients at The Prime Crafters:
            </p>

            <ul className="space-y-4">
              {[
                { title: 'Lead qualification', desc: 'AI agents score and route inbound leads 24/7, so your sales team only talks to people who are ready to buy.' },
                { title: 'Customer support', desc: 'LLM-powered assistants resolve 60–80% of tier-1 tickets without a human touching them.' },
                { title: 'Content workflows', desc: 'Automated pipelines draft, review, and publish content — cutting production time by 70%.' },
                { title: 'Internal reporting', desc: 'AI pulls data from multiple sources and delivers weekly business summaries directly to your inbox.' },
              ].map(item => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                  <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
                    <strong className="text-white font-semibold">{item.title} — </strong>
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* section */}
          <div className="space-y-5">
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where to Start
            </h2>
            <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
              Don't try to automate everything at once. Start with the highest-friction, highest-volume
              task in your business — the one your team does repeatedly and hates doing. Build one
              working automation, measure the time saved, then expand.
            </p>
            <p className="text-white/75 text-lg md:text-xl leading-[1.8]">
              Most businesses that come to us have already identified the bottleneck. They just don't
              know how to build the solution. That's what we do.
            </p>
          </div>

          {/* CTA box */}
          <div className="bg-[#0f0f0f] border border-[rgba(212,175,55,0.2)] rounded-2xl p-8 md:p-10">
            <p className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to automate your operations?
            </p>
            <p className="text-white/60 text-lg mb-6">
              Book a free 20-minute strategy call. We'll map out exactly what to build for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Book Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </article>

        {/* ── AUTHOR BIO ── */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
          <div className="bg-[#0f0f0f] border border-white/[0.07] rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-7">
              <span className="w-4 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.25em]">About the Author</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.2)] to-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.25)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-bold text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>A</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Amanullah Naqvi
                </h3>
                <p className="text-white/50 text-sm mb-4">Founder & CTO, The Prime Crafters</p>
                <p className="text-white/65 text-base md:text-lg leading-relaxed">
                  Amanullah builds custom AI automation systems for businesses that want to scale without
                  scaling headcount. He leads The Prime Crafters — an AI agency focused on practical,
                  high-ROI automation solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM NAV ── */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24 flex items-center justify-between flex-wrap gap-4 border-t border-white/[0.06] pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white border border-white/15 px-4 py-2 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
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

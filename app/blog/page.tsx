import { client } from '@/sanity/lib/client'
import { latestPostsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Prime Crafters',
  description: 'Insights, strategies, and expert tips on AI automation, digital transformation, and business growth from The Prime Crafters team.',
  alternates: { canonical: 'https://www.theprimecrafters.com/blog' },
  openGraph: {
    title: 'Blog | The Prime Crafters',
    description: 'Insights, strategies, and expert tips on AI automation and business growth.',
    url: 'https://www.theprimecrafters.com/blog',
    siteName: 'PrimeCrafters',
    type: 'website',
  },
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch(latestPostsQuery)

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ── HERO HEADER ── */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden">
          {/* ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.04] blur-[120px]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* label pill */}
            <span className="inline-block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-6 px-4 py-1.5 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)]">
              Knowledge Hub
            </span>

            <h1
              className="text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-6 leading-[1.05]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Insights &amp;{' '}
              <span className="text-gradient-gold">Resources</span>
            </h1>

            <p className="text-[#737373] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Expert takes on AI automation, digital transformation, and the strategies
              behind building businesses that scale — straight from The Prime Crafters team.
            </p>
          </div>

          {/* bottom rule */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent" />
        </section>

        {/* ── BLOG GRID ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {posts.length === 0 ? (
            <div className="text-center py-32">
              <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-[#525252] text-lg">No posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: {
                _id: string
                title: string
                slug: { current: string }
                publishedAt: string
                excerpt?: string
                mainImage?: { asset: { url: string }; alt?: string }
                categories?: { title: string }[]
                author?: { name: string; image?: { asset: { url: string } } }
              }) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </div>
          )}
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-6 relative overflow-hidden">
          {/* section glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.03)] via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div
              className="rounded-[2rem] p-10 sm:p-14 md:p-20 border border-[rgba(255,255,255,0.08)] bg-[#111111] text-center relative overflow-hidden"
            >
              {/* inner glow */}
              <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-[rgba(212,175,55,0.08)] blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.15)] to-transparent" />

              {/* label */}
              <span className="inline-block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em] mb-6 px-4 py-1.5 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)]">
                Let's Work Together
              </span>

              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 relative z-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-[#f5f5f5]">Ready to Put AI</span>
                <br />
                <span className="text-gradient-gold">to Work for You?</span>
              </h2>

              <p className="text-[#a3a3a3] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
                The strategies in our blog are just the beginning. Book a free 20-minute
                consultation and we'll map out exactly how AI automation can accelerate
                your business — no fluff, no commitment.
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#D4AF37] text-black font-semibold text-sm hover:scale-105 hover:shadow-lg hover:shadow-[rgba(212,175,55,0.3)] transition-all duration-300"
                >
                  Schedule a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[#f5f5f5] text-sm hover:border-[rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

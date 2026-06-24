import { client } from '@/sanity/lib/client'
import { latestPostsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import BlogHero3D from '@/components/blog/BlogHero3D'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
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

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: { asset: { url: string }; alt?: string }
  categories?: { title: string }[]
  author?: { name: string; image?: { asset: { url: string } } }
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(latestPostsQuery)
  const featured = posts[0] ?? null
  const rest = posts.slice(1)

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">

        {/* ═══════════════════════════════════════
            SPLIT-SCREEN HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-[88vh] flex flex-col lg:flex-row overflow-hidden">

          {/* ── subtle top border ── */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent z-10" />

          {/* ── LEFT — text content ── */}
          <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-36 pb-16 lg:pt-0 lg:pb-0 w-full lg:w-[55%]">

            {/* background radial glow */}
            <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#D4AF37] rounded-full opacity-[0.035] blur-[120px] pointer-events-none" />

            {/* breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#404040] mb-8 font-medium tracking-wider uppercase">
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              <span className="text-[#2a2a2a]">/</span>
              <span className="text-[#D4AF37]">Blog</span>
            </div>

            {/* label */}
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.3em] mb-6 self-start">
              <span className="w-6 h-px bg-[#D4AF37]" />
              Knowledge Hub
            </span>

            {/* heading */}
            <h1
              className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.0] text-[#f0f0f0] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Blog &amp;
              <br />
              <span className="text-gradient-gold">Insights</span>
            </h1>

            {/* description */}
            <p className="text-[#5a5a5a] text-base md:text-lg leading-relaxed max-w-[480px] mb-10">
              Expert takes on AI automation, digital transformation, and the
              strategies behind building businesses that scale — from the team
              at The Prime Crafters.
            </p>

            {/* tag chips */}
            <div className="flex flex-wrap gap-2">
              {['AI Automation', 'Case Studies', 'Strategy', 'Digital Growth'].map(tag => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-widest text-[#3a3a3a] border border-[rgba(255,255,255,0.06)] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — 3D canvas ── */}
          <div className="relative w-full lg:w-[45%] min-h-[420px] lg:min-h-0">
            {/* vertical separator */}
            <div className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.12)] to-transparent" />

            {/* ambient glow behind canvas */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] bg-[#D4AF37] rounded-full opacity-[0.04] blur-[100px]" />
            </div>

            <BlogHero3D />
          </div>

          {/* ── bottom rule ── */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.12)] to-transparent" />
        </section>

        {/* ═══════════════════════════════════════
            POSTS
        ═══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-20">

          {posts.length === 0 && (
            <div className="text-center py-32">
              <div className="w-14 h-14 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-[#3a3a3a] text-base">No posts yet — check back soon.</p>
            </div>
          )}

          {/* ── FEATURED POST ── */}
          {featured && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">Featured</span>
              </div>

              <Link
                href={`/blog/${featured.slug.current}`}
                className="group flex flex-col md:flex-row gap-0 bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-400 hover:shadow-[0_24px_80px_rgba(212,175,55,0.07)]"
              >
                {/* image */}
                <div className="relative w-full md:w-[45%] aspect-[16/10] md:aspect-auto overflow-hidden flex-shrink-0 bg-[#0a0a0a]">
                  {featured.mainImage?.asset?.url ? (
                    <>
                      <Image
                        src={featured.mainImage.asset.url}
                        alt={featured.mainImage.alt || featured.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0f0f] opacity-40" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center min-h-[280px]">
                      <div className="w-14 h-14 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {featured.categories?.[0] && (
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-black bg-[#D4AF37] px-3 py-1 rounded-full">
                      {featured.categories[0].title}
                    </span>
                  )}
                </div>

                {/* content */}
                <div className="flex flex-col justify-between p-8 md:p-10 lg:p-14 flex-1">
                  <div>
                    <p className="text-[#404040] text-xs font-medium mb-4 tracking-widest uppercase">
                      {new Date(featured.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ebebeb] group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug mb-5"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {featured.title}
                    </h2>

                    {featured.excerpt && (
                      <p className="text-[#4a4a4a] text-sm md:text-base leading-relaxed line-clamp-3 mb-8">
                        {featured.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    {/* author */}
                    <div className="flex items-center gap-3">
                      {featured.author?.image?.asset?.url ? (
                        <Image
                          src={featured.author.image.asset.url}
                          alt={featured.author.name}
                          width={36}
                          height={36}
                          className="rounded-full object-cover ring-1 ring-[rgba(212,175,55,0.25)]"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#D4AF37] text-sm font-bold">
                            {featured.author?.name?.charAt(0) ?? 'P'}
                          </span>
                        </div>
                      )}
                      {featured.author?.name && (
                        <span className="text-[#4a4a4a] text-sm">{featured.author.name}</span>
                      )}
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold tracking-wider uppercase group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── GRID ── */}
          {rest.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-6 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">Latest Posts</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCard key={post._id} {...post} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.1)] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37] rounded-full opacity-[0.03] blur-[100px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.06)] rounded-[2rem] p-10 sm:p-14 md:p-20 relative overflow-hidden">
              <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[rgba(212,175,55,0.07)] blur-[90px] rounded-full pointer-events-none" />

              <span className="inline-flex items-center gap-2 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
                <span className="w-4 h-px bg-[#D4AF37]" />
                Let's Work Together
                <span className="w-4 h-px bg-[#D4AF37]" />
              </span>

              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 relative z-10"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="text-[#f0f0f0]">Ready to Put AI</span>
                <br />
                <span className="text-gradient-gold">to Work for You?</span>
              </h2>

              <p className="text-[#4a4a4a] text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 relative z-10">
                The strategies in our blog are just the start. Book a free 20-minute
                consultation and we'll map out exactly how AI automation can accelerate
                your business — no fluff, no commitment.
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] transition-all duration-300"
                >
                  Schedule a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] text-[#a3a3a3] text-sm hover:border-[rgba(212,175,55,0.35)] hover:text-[#D4AF37] hover:scale-105 transition-all duration-300"
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

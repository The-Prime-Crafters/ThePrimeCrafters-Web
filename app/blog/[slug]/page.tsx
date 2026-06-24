import { client } from '@/sanity/lib/client'
import { postBySlugQuery, allPostSlugsQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch(allPostSlugsQuery)
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) return {}
  return {
    title: `${post.title} | The Prime Crafters Blog`,
    description: post.excerpt ?? '',
    alternates: { canonical: `https://www.theprimecrafters.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? '',
      images: post.mainImage?.asset?.url ? [{ url: post.mainImage.asset.url }] : [],
      type: 'article',
    },
  }
}

type BodyBlock = {
  _type: string
  _key: string
  style?: string
  children?: { text: string; marks?: string[] }[]
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  // estimate read time
  const wordCount = (post.body as BodyBlock[] ?? []).reduce((acc, block) => {
    if (block._type === 'block') {
      const text = block.children?.map(c => c.text).join(' ') ?? ''
      return acc + text.split(/\s+/).filter(Boolean).length
    }
    return acc
  }, 0)
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  // extract TOC from h2/h3 blocks
  const toc = (post.body as BodyBlock[] ?? [])
    .filter(b => b._type === 'block' && (b.style === 'h2' || b.style === 'h3'))
    .map(b => ({
      text: b.children?.map(c => c.text).join('') ?? '',
      level: b.style === 'h2' ? 2 : 3,
      key: b._key,
    }))

  const authorLinkedin = post.author?.linkedin ?? 'https://www.linkedin.com/company/theprimecrafters'

  // bio may be a plain string or portable text blocks — extract plain text either way
  const rawBio = post.author?.bio
  const authorBio: string = typeof rawBio === 'string'
    ? rawBio
    : Array.isArray(rawBio)
      ? (rawBio as BodyBlock[]).flatMap(b => b.children?.map(c => c.text) ?? []).join(' ')
      : 'The Prime Crafters is an AI agency that builds custom automation systems for businesses that want to scale without scaling headcount.'

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <div className="relative w-full h-[58vh] md:h-[65vh] overflow-hidden">
          {post.mainImage?.asset?.url ? (
            <>
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.55)] to-[rgba(10,10,10,0.2)]" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.08)] flex items-center justify-center">
                <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          )}

          {/* hero content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl">
              {/* breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-[#555] mb-5 uppercase tracking-widest font-medium">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-[#D4AF37] truncate max-w-[200px]">
                  {post.categories?.[0]?.title ?? 'Article'}
                </span>
              </nav>

              {/* category */}
              {post.categories?.[0] && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-black bg-[#D4AF37] px-3 py-1 rounded-full mb-5">
                  {post.categories[0].title}
                </span>
              )}

              {/* title */}
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f0f0f0] leading-[1.05] mb-6 max-w-3xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {post.title}
              </h1>

              {/* meta strip */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-3">
                  {post.author?.image?.asset?.url ? (
                    <Image
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.3)]"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-[rgba(212,175,55,0.12)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] text-sm font-bold">
                        {post.author?.name?.charAt(0) ?? 'P'}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-[#c0c0c0] text-sm font-medium">{post.author?.name ?? 'The Prime Crafters'}</p>
                    <p className="text-[#555] text-xs">{formattedDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#555] text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            TWO-COLUMN LAYOUT
        ═══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">

            {/* ── MAIN CONTENT ── */}
            <article className="flex-1 min-w-0">
              {/* excerpt intro */}
              {post.excerpt && (
                <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed mb-10 pb-10 border-b border-[rgba(255,255,255,0.05)] font-light">
                  {post.excerpt}
                </p>
              )}

              {/* body */}
              <div className="prose-tpc">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>

              {/* back link */}
              <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="lg:w-[320px] xl:w-[360px] flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-4 h-px bg-[#D4AF37]" />
                      <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">In This Article</p>
                    </div>
                    <nav className="space-y-1">
                      {toc.map(item => (
                        <a
                          key={item.key}
                          href={`#${item.key}`}
                          className={`block text-sm leading-snug transition-colors duration-200 hover:text-[#D4AF37] py-1.5 border-l-2 ${
                            item.level === 2
                              ? 'pl-3 border-[rgba(212,175,55,0.2)] text-[#5a5a5a] hover:border-[#D4AF37]'
                              : 'pl-5 border-transparent text-[#444] hover:border-[rgba(212,175,55,0.4)]'
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Author Card */}
                <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-4 h-px bg-[#D4AF37]" />
                    <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">Written By</p>
                  </div>

                  <div className="flex items-start gap-4">
                    {post.author?.image?.asset?.url ? (
                      <Image
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        width={52}
                        height={52}
                        className="rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.2)] flex-shrink-0"
                      />
                    ) : (
                      <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center flex-shrink-0 w-[52px] h-[52px]">
                        <span className="text-[#D4AF37] font-bold text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {post.author?.name?.charAt(0) ?? 'P'}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#e8e8e8] font-semibold text-base mb-1">{post.author?.name ?? 'The Prime Crafters'}</p>
                      <p className="text-[#4a4a4a] text-xs leading-relaxed line-clamp-3 mb-3">{authorBio}</p>
                      <a
                        href={authorLinkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full px-3 py-1.5 hover:bg-[rgba(212,175,55,0.08)] transition-colors"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Consultation CTA Card */}
                <div className="bg-[#0f0f0f] border border-[rgba(212,175,55,0.12)] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-[-40px] right-[-40px] w-[120px] h-[120px] bg-[rgba(212,175,55,0.06)] rounded-full blur-[40px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(212,175,55,0.1)] flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    <p
                      className="text-[#e8e8e8] text-lg font-bold mb-2 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Ready to automate your operations?
                    </p>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed mb-5">
                      Book a free 20-minute call. We'll map out exactly what to build — no pressure.
                    </p>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#D4AF37] text-black text-sm font-bold hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300"
                    >
                      Book Free Consultation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Services quick links */}
                <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-4 h-px bg-[#D4AF37]" />
                    <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">Our Services</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: 'Custom AI Solutions', href: '/services/custom-ai-solutions' },
                      { label: 'AI Agents', href: '/services/ai-agents' },
                      { label: 'Process Automation', href: '/services/process-automation' },
                      { label: 'AI Integration', href: '/services/ai-integration' },
                      { label: 'Workflow Optimization', href: '/services/workflow-optimization' },
                    ].map(s => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center justify-between text-sm text-[#4a4a4a] hover:text-[#D4AF37] py-1.5 border-b border-[rgba(255,255,255,0.04)] last:border-0 transition-colors group"
                      >
                        {s.label}
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            AUTHOR BIO FULL
        ═══════════════════════════════════════ */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-7">
              <span className="w-4 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.25em]">About the Author</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                {post.author?.image?.asset?.url ? (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={72}
                    height={72}
                    className="rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.25)]"
                  />
                ) : (
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {post.author?.name?.charAt(0) ?? 'P'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-[#f0f0f0]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {post.author?.name ?? 'The Prime Crafters'}
                  </h3>
                  <a
                    href={authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full px-3 py-1.5 hover:bg-[rgba(212,175,55,0.08)] transition-colors self-start sm:self-auto"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <p className="text-[#525252] text-sm leading-relaxed">{authorBio}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.1)] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#D4AF37] rounded-full opacity-[0.025] blur-[80px]" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.3em] mb-6">
              <span className="w-4 h-px bg-[#D4AF37]" />
              Let's Talk
              <span className="w-4 h-px bg-[#D4AF37]" />
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-5 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Put This Into Practice
              <br />
              <span className="text-gradient-gold">For Your Business</span>
            </h2>

            <p className="text-[#4a4a4a] text-base leading-relaxed mb-8 max-w-xl mx-auto">
              The strategies in this article aren't theoretical — we build them every day.
              Book a free 20-minute call and we'll show you exactly how this applies to your operations.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-bold text-sm hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] text-[#6a6a6a] text-sm hover:border-[rgba(212,175,55,0.35)] hover:text-[#D4AF37] transition-all duration-300"
              >
                More Articles
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

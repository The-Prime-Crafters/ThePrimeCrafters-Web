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

  const title = post.metaTitle || post.title
  const description = post.metaDescription || post.excerpt || ''

  return {
    title: `${title} `,
    description,
    alternates: { canonical: `https://www.theprimecrafters.com/blog/${slug}` },
    openGraph: {
      title,
      description,
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
      : 'Areej Abbas is a content writer and AI implementation enthusiast, dedicated to crafting insightful narratives that help businesses navigate the future of automation.'

  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-[#D4AF37]/30">
      <Navbar />
      <main className="min-h-screen">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          {post.mainImage?.asset?.url ? (
            <>
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
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
          <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl">
              {/* breadcrumb */}
              <nav className="flex items-center gap-2 text-[10px] font-bold text-white/40 mb-6 uppercase tracking-[0.3em]">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-[#D4AF37] truncate max-w-[200px]">
                  {post.categories?.[0]?.title ?? 'Article'}
                </span>
              </nav>

              {/* title */}
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 max-w-4xl tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {post.title}
              </h1>

              {/* meta strip */}
              <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  {post.author?.image?.asset?.url ? (
                    <Image
                      src={post.author.image.asset.url}
                      alt="Areej Abbas"
                      width={48}
                      height={48}
                      className="rounded-full object-cover ring-2 ring-[#D4AF37]/30"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] text-lg font-bold">
                        A
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="text-white text-base font-bold tracking-wide">Areej Abbas</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{formattedDate}</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

            {/* ── MAIN CONTENT ── */}
            <article className="flex-1 min-w-0">
              {/* excerpt intro */}
              {post.excerpt && (
                <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-16 font-light italic border-l-4 border-[#D4AF37] pl-8">
                  {post.excerpt}
                </p>
              )}

              {/* body */}
              <div className="prose-tpc-ultimate">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>

              {/* back link */}
              <div className="mt-20 pt-10 border-t border-white/5">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:gap-5 transition-all duration-300"
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Back to Hub
                </Link>
              </div>
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="lg:w-[340px] xl:w-[400px] flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-10">

                {/* Table of Contents */}
                {toc.length > 0 && (
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="w-6 h-px bg-[#D4AF37]" />
                      <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">Contents</p>
                    </div>
                    <nav className="space-y-4">
                      {toc.map(item => (
                        <a
                          key={item.key}
                          href={`#${item.key}`}
                          className={`block text-base transition-all duration-300 hover:text-[#D4AF37] ${
                            item.level === 2
                              ? 'text-white font-bold'
                              : 'text-white/40 pl-4 border-l border-white/10 hover:border-[#D4AF37]'
                          }`}
                        >
                          {item.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="relative group p-8 rounded-2xl bg-[#D4AF37] text-black overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-transform hover:scale-[1.02]">
                   <div className="relative z-10">
                      <h4 className="text-2xl font-bold mb-4 font-serif leading-tight">Ready to Automate?</h4>
                      <p className="text-base font-medium mb-8 opacity-90 leading-relaxed text-black/80">Book a free 20-minute strategy call. We'll map out exactly what to build — no pressure.</p>
                      <Link href="/contact" className="inline-block w-full py-4 bg-black text-white text-center rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                         Book Now
                      </Link>
                   </div>
                </div>

              </div>
            </aside>
          </div>
        </div>

        {/* ── AUTHOR BIO ── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-6 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em]">About the Author</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                {post.author?.image?.asset?.url ? (
                  <Image src={post.author.image.asset.url} alt="Areej Abbas" width={80} height={80} className="object-cover w-full h-full" />
                ) : (
                  <span className="text-[#D4AF37] font-bold text-3xl font-serif">A</span>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">Areej Abbas</h3>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Content Writer, The Prime Crafters</p>
                  </div>
                  
                  <a href={authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full px-6 py-3 hover:bg-[#D4AF37]/10 transition-all hover:gap-3"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <p className="text-white text-lg leading-relaxed max-w-4xl">
                  {authorBio}
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* THE ULTIMATE BULLET FIX: Disabling ALL pseudo-elements and markers */
        .prose-tpc-ultimate ul { 
          list-style: none !important; 
          list-style-type: none !important;
          margin-bottom: 2.5rem !important; 
          padding: 0 !important; 
        }
        
        .prose-tpc-ultimate li { 
          list-style: none !important;
          list-style-type: none !important;
          position: relative !important; 
       
          margin-bottom: 1.5rem !important; 
          color: #ffffff !important; 
          font-size: 1.25rem !important; 
          line-height: 1.7 !important;
          
         
        }

        /* Explicitly killing all markers and befores */
        .prose-tpc-ultimate li::marker,
        .prose-tpc-ultimate li::before {
          content: none !important;
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }

        /* Heading and Paragraph Styles */
        .prose-tpc-ultimate h2 { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 700; margin-top: 5rem; margin-bottom: 2.5rem; color: #ffffff; line-height: 1.1; }
        .prose-tpc-ultimate h3 { font-family: 'Cormorant Garamond', serif; font-size: 2.25rem; font-weight: 700; margin-top: 4rem; margin-bottom: 2rem; color: #ffffff; line-height: 1.2; }
        .prose-tpc-ultimate p { font-size: 1.25rem; line-height: 1.8; color: #ffffff; margin-bottom: 2.5rem; font-weight: 400; }
        .prose-tpc-ultimate strong { color: #ffffff; font-weight: 700; }
        .prose-tpc-ultimate a { color: #D4AF37; text-decoration: none; border-bottom: 1px solid rgba(212,175,55,0.3); transition: all 0.3s; }
        .prose-tpc-ultimate a:hover { border-bottom-color: #D4AF37; }
      `}} />
    </div>
  )
}

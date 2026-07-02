"use client";

import { useState, useEffect } from 'react'
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

// FAQ Item Component for Accordion Effect
const FaqItem = ({ faq }: { faq: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]'}`}>
          {faq.question || faq.q}
        </span>
        <span className="flex-shrink-0 ml-4">
          {isOpen ? (
            <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
          ) : (
            <svg className="w-6 h-6 text-white/40 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          )}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white/60 text-lg leading-relaxed m-0">
          {faq.answer || faq.a}
        </p>
      </div>
    </div>
  );
};

export default function BlogPostPage({ params }: { params: any }) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const init = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      const data = await client.fetch(postBySlugQuery, { slug: resolvedParams.slug });
      if (!data) notFound();
      setPost(data);
      setLoading(false);
    };
    init();
  }, [params]);

  if (loading) return <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">Loading...</div>;
  if (!post) return null;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  // estimate read time
  const wordCount = (post.body ?? []).reduce((acc: any, block: any) => {
    if (block._type === 'block') {
      const text = block.children?.map((c: any) => c.text).join(' ') ?? ''
      return acc + text.split(/\s+/).filter(Boolean).length
    }
    return acc
  }, 0)
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  // extract TOC from h2/h3 blocks
  type TocItem = { text: string; level: 2 | 3; key: string }
  const toc: TocItem[] = (post.body ?? [])
    .filter((b: any) => b._type === 'block' && (b.style === 'h2' || b.style === 'h3'))
    .map((b: any) => ({
      text: b.children?.map((c: any) => c.text).join('') ?? '',
      level: b.style === 'h2' ? 2 : 3,
      key: b._key,
    }))

  const authorLinkedin = post.author?.linkedin ?? 'https://www.linkedin.com/company/theprimecrafters'
  
  // bio extraction
  const rawBio = post.author?.bio
  const authorBio: string = typeof rawBio === 'string'
    ? rawBio
    : Array.isArray(rawBio)
      ? (rawBio).flatMap((b: any) => b.children?.map((c: any) => c.text) ?? []).join(' ')
      : 'Areej Abbas is a content writer and AI implementation enthusiast, dedicated to crafting insightful narratives that help businesses navigate the future of automation.'

  // ═══════════════════════════════════════
  // FALLBACK DATA
  // ═══════════════════════════════════════
  const faqsFromSanity = post.faqs ?? []
  const faqs = faqsFromSanity.length > 0 ? faqsFromSanity : [
    { question: "How long does it take to implement AI automation?", answer: "Most custom AI agent implementations take between 4 to 8 weeks, depending on the complexity of your existing workflows and tools." },
    { question: "Do I need technical knowledge to manage these agents?", answer: "No. We build our systems to be 'set and forget' or managed through simple dashboards that your existing team can use without coding." },
    { question: "Will AI replace my current staff?", answer: "Our goal is to augment your team. AI handles the repetitive, high-volume tasks so your staff can focus on high-value strategy and relationship building." }
  ];

  const takeawaysFromSanity = post.keyTakeaways ?? []
  const keyTakeaways = takeawaysFromSanity.length > 0 ? takeawaysFromSanity : [
    "Focus on relevant AI implementation instead of general automation.",
    "Start with a workflow audit before launching any custom agent development.",
    "Use voice, chat, and CRM automation together for maximum scale.",
    "Keep your data clean and integrated across all your existing tools.",
    "Build topical authority by sharing real-world automation case studies.",
    "Track your efficiency gains and ROI monthly to refine your AI strategy."
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen selection:bg-[#D4AF37]/30">
      <Navbar />
      <main className="min-h-screen">

        {/* HERO */}
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          {post.mainImage?.asset?.url ? (
            <>
              <Image src={post.mainImage.asset.url} alt={post.title} fill className="object-cover opacity-60" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-[#111] flex items-center justify-center">
               <span className="text-[#D4AF37] text-6xl font-serif">P</span>
            </div>
          )}

          <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-5xl">
              <nav className="flex items-center gap-2 text-[10px] font-bold text-white/40 mb-6 uppercase tracking-[0.3em]">
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-[#D4AF37]">{post.categories?.[0]?.title ?? 'Article'}</span>
              </nav>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 max-w-4xl tracking-tight font-serif">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center overflow-hidden ring-2 ring-[#D4AF37]/30">
                    {post.author?.image?.asset?.url ? (
                        <Image src={post.author.image.asset.url} alt="Areej Abbas" width={48} height={48} className="object-cover" />
                    ) : <span className="text-[#D4AF37] font-bold">A</span>}
                  </div>
                  <div>
                    <p className="text-white text-base font-bold">Areej Abbas</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{formattedDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {readTime} min read
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

            <article className="flex-1 min-w-0">
              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-12 font-light italic border-l-4 border-[#D4AF37] pl-8">
                  {post.excerpt}
                </p>
              )}

              {/* KEY TAKEAWAY BOX */}
              <div className="mb-16 p-8 md:p-10 rounded-[24px] bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h2 className="text-[#D4AF37] text-2xl font-bold mb-8 font-serif flex items-center gap-3">
                   <span className="w-8 h-px bg-[#D4AF37]/40" />
                   Key Takeaways
                </h2>
                <ul className="space-y-4 m-0 p-0 list-none custom-bullets">
                  {keyTakeaways.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 text-white text-lg leading-relaxed group/item">
                       <span className="mt-2.5 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)] flex-shrink-0" />
                       <span className="group-hover/item:text-[#D4AF37] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body */}
              <div className="prose-tpc-ultimate">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>

              {/* FAQ Section (Accordion Style) */}
              <div className="mt-24 pt-24 border-t border-white/10">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Frequently Asked Questions</h2>
                  <p className="text-white/40 text-lg mb-12">Everything you need to know about AI automation and implementation.</p>
                </div>
                <div className="bg-[#0f0f0f] border border-white/5 rounded-[32px] px-8 md:px-12 py-4">
                  {faqs.map((faq: any, i: number) => (
                    <FaqItem key={i} faq={faq} />
                  ))}
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5">
                <Link href="/blog" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] hover:gap-5 transition-all">
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  Back to Hub
                </Link>
              </div>
            </article>

            <aside className="lg:w-[340px] xl:w-[400px] flex-shrink-0">
              <div className="lg:sticky lg:top-32 space-y-10">
                {toc.length > 0 && (
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 shadow-2xl">
                    <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Contents</p>
                    <nav className="space-y-4">
                      {toc.map(item => (
                        <a key={item.key} href={`#${item.key}`} className={`block text-base transition-all hover:text-[#D4AF37] ${item.level === 2 ? 'text-white font-bold' : 'text-white/40 pl-4 border-l border-white/10'}`}>{item.text}</a>
                      ))}
                    </nav>
                  </div>
                )}
                <div className="p-8 rounded-2xl bg-[#D4AF37] text-black shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
                   <h4 className="text-2xl font-bold mb-4 font-serif leading-tight">Ready to Automate?</h4>
                   <p className="text-base font-medium mb-8 opacity-80 leading-relaxed">Book a free 20-minute strategy call. We'll map out exactly what to build.</p>
                   <Link href="/contact" className="inline-block w-full py-4 bg-black text-white text-center rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Book Now</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* AUTHOR BIO */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-start">
             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-[#D4AF37]/30">
                {post.author?.image?.asset?.url ? <Image src={post.author.image.asset.url} alt="Areej Abbas" width={80} height={80} className="object-cover" /> : <span className="text-[#D4AF37] font-bold text-3xl">A</span>}
             </div>
             <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-white text-2xl font-bold">Areej Abbas</h3>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Content Writer, The Prime Crafters</p>
                  </div>
                  <a href={authorLinkedin} target="_blank" className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-full px-6 py-3 hover:bg-[#D4AF37]/10 transition-all">LinkedIn</a>
                </div>
                <p className="text-white text-lg leading-relaxed max-w-4xl">{authorBio}</p>
             </div>
          </div>
        </section>

      </main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        /* ═══════════════════════════════════════
           DEFINITIVE BULLET POINT FIX
        ═══════════════════════════════════════ */
        
        /* Disable all default browser markers globally for the article */
        .prose-tpc-ultimate ul, 
        .prose-tpc-ultimate li,
        .custom-bullets,
        .custom-bullets li {
          list-style: none !important;
          list-style-type: none !important;
          padding: 0 !important;
        }

        .prose-tpc-ultimate li::marker,
        .custom-bullets li::marker {
          content: none !important;
          display: none !important;
        }

      

        /* ═══════════════════════════════════════
           TYPOGRAPHY & HEADINGS
        ═══════════════════════════════════════ */
        .prose-tpc-ultimate h2 { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 700; margin-top: 5rem; margin-bottom: 2.5rem; color: #ffffff; line-height: 1.1; }
        .prose-tpc-ultimate h3 { font-family: 'Cormorant Garamond', serif; font-size: 2.25rem; font-weight: 700; margin-top: 4rem; margin-bottom: 2rem; color: #ffffff; line-height: 1.2; }
        .prose-tpc-ultimate p { font-size: 1.25rem; line-height: 1.8; color: #ffffff; margin-bottom: 2.5rem; }
        .prose-tpc-ultimate strong { color: #ffffff; font-weight: 700; }
        .prose-tpc-ultimate a { color: #D4AF37; text-decoration: underline; text-underline-offset: 4px; transition: opacity 0.3s; }
        .prose-tpc-ultimate a:hover { opacity: 0.8; }
      `}} />
    </div>
  )
}
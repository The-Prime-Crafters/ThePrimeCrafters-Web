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
    description: post.excerpt || '',
    alternates: { canonical: `https://www.theprimecrafters.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.mainImage?.asset?.url ? [{ url: post.mainImage.asset.url }] : [],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug })

  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const authorLinkedin = post.author?.linkedin || 'https://www.linkedin.com/in/areej-abbas-b32096211'
  const authorBio = post.author?.bio || 'Areej Abbas is an SEO-optimized content writer, digital strategist, and virtual assistant with a proven track record of helping brands build authority and rank online. Specializing at the intersection of modern technology and content creation, she expertly crafts copy across dynamic industries like AI automation, digital products, and AI-driven domain investing. With a strong background in project management and social media, Areej blends search engine strategy with engaging storytelling to turn casual readers into loyal clients.'

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero Image */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,10,10,0.3)] to-[#0a0a0a]" />
          </div>
        )}

        {/* Article */}
        <article className={`max-w-3xl mx-auto px-6 ${post.mainImage?.asset?.url ? '-mt-32 relative z-10' : 'pt-36'} pb-20`}>
          {/* Breadcrumb */}
          <nav className="text-sm text-[#525252] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#737373] truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Category */}
          {post.categories?.length > 0 && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-5 px-3 py-1 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)]">
              {post.categories[0].title}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f5f5] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {post.title}
          </h1>

          {/* Author + Date */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[rgba(255,255,255,0.06)]">
            {post.author?.image?.asset?.url ? (
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.2)]"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] font-bold text-lg">
                  {post.author?.name?.charAt(0) ?? 'A'}
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-[#f5f5f5]">{post.author?.name ?? 'Areej Abbas'}</p>
              <p className="text-sm text-[#525252]">{formattedDate}</p>
            </div>
          </div>

          {/* Body Content */}
          <div className="blog-body">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:gap-3 transition-all duration-300 text-sm uppercase tracking-wider"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>

        {/* Author Bio Section */}
        <section className="max-w-3xl mx-auto px-6 pb-24">
          <div className="bg-[#111111] border border-[rgba(212,175,55,0.1)] rounded-2xl p-8 md:p-10">
            {/* Label */}
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-6">About the Author</p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                {post.author?.image?.asset?.url ? (
                  <Image
                    src={post.author.image.asset.url}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover ring-2 ring-[rgba(212,175,55,0.25)]"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center">
                    <span className="text-[#D4AF37] font-bold text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {post.author?.name?.charAt(0) ?? 'A'}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-[#f5f5f5]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {post.author?.name ?? 'Areej Abbas'}
                  </h3>
                  <a
                    href={authorLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4AF37] border border-[rgba(212,175,55,0.2)] rounded-full px-3 py-1 hover:bg-[rgba(212,175,55,0.08)] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
                <p className="text-[#737373] text-sm leading-relaxed">
                  {authorBio}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
